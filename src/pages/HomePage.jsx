import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "../components/NavBar/NavBar";
import { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList";
import ProductGrid from "../components/ProductGrid";
import { getProducts, getCategory, searchProducts } from "../utilities/products-api";

const HomePage = ({handleUser}) => {
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
            setLoading(false);
          }
        }
        getProductsByCategory();
      }, [selectedCategory]);
  
    return ( 
        <Grid
          templateAreas={{
            base: `"nav" "aside" "main"`,
            lg: `"nav nav" "aside aside" "main main"`,
          }}
          templateColumns={{
            base: "1fr",
            lg: "1fr 1fr",
          }}
        >
          <GridItem area="nav">
            <NavBar handleUser={handleUser}/>
          </GridItem>
            <GridItem area="aside">
                <CategoryList selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            </GridItem>
          <GridItem area="main">
            <ProductGrid products={products}/>
          </GridItem>
        </Grid>
  )
}

export default HomePage