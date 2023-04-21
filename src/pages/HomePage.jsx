import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "../components/NavBar/NavBar";
import { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList";

const HomePage = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchText, setSearchText] = useState("");

  
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
            <NavBar/>
          </GridItem>
            <GridItem area="aside">
                <CategoryList selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            </GridItem>
          <GridItem area="main">
          </GridItem>
        </Grid>
  )
}

export default HomePage