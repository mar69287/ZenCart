import { Grid, GridItem, Box, } from "@chakra-ui/react";
import HomeNav from "../components/HomeNav";
import Carousel from "../components/Carousel";

const HomePage = () => {
  return (
    <Grid
          templateAreas={{
            base: `"nav" "carousel" "category" "footer"`,
            lg: `"nav nav" "carousel carousel" "category category" "footer footer"`,
          }}
          templateColumns={{
            base: "1fr",
            lg: "1fr 1fr",
          }}
        >
          <GridItem area="nav">
            <HomeNav />
          </GridItem>
          <GridItem area="carousel">
            <Carousel />
          </GridItem>
          <GridItem area="category">     
          </GridItem>
          <GridItem area="footer">     
          </GridItem>
        </Grid>
  )
}

export default HomePage