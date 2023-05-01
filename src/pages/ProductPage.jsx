import { Grid, GridItem, Box, } from "@chakra-ui/react";
import NavBar from "../components/NavBar/NavBar";
import { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList";
import ProductGrid from "../components/ProductGrid";
import { getProducts, getCategory, searchProducts } from "../utilities/products-api";

const HomePage = ({ isDrawerOpen, setIsDrawerOpen, handleUser, countCart}) => {
    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        async function getAll() {
            const products = await getProducts()
            setProducts(products)
        }
        getAll()
    }, [])

    useEffect(() => {
        async function getProductsByCategory() {
          if (selectedCategory) {
            setLoading(true);
            const products = await getCategory(selectedCategory);
            setProducts(products);
            setSearchText('')
            setLoading(false);
          }
        }
        getProductsByCategory();
      }, [selectedCategory]);

      useEffect(() => {
        async function search() {
          setLoading(true);
          if (searchText !== "") {
            const products = await searchProducts(searchText);
            setProducts(products);
          }
          setLoading(false);
        }
        search();
      }, [searchText]);
  
      const handleLogoClick = async () => {
        const products = await getProducts();
        setProducts(products);
      };

    return ( 
        <Grid
          templateAreas={{
            base: `"nav" "category" "main"`,
            lg: `"nav nav" "category category" "main main"`,
          }}
          templateColumns={{
            base: "1fr",
            lg: "1fr 1fr",
          }}
        >
          <GridItem area="nav">
              <Box onClick={handleLogoClick}>
                <NavBar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} handleUser={handleUser} setSearchText={setSearchText} countCart={countCart}/>
              </Box>
          </GridItem>
          <GridItem area="category">
                <CategoryList selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
          </GridItem>
          <GridItem area="main">     
            <ProductGrid products={products}/>
          </GridItem>
        </Grid>
  )
}

export default HomePage