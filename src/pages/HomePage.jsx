import { Grid, GridItem, Box, } from "@chakra-ui/react";
import HomeNav from "../components/HomeNav";
import Carousel from "../components/Carousel";
import WelcomeCard from "../components/WelcomeCard";

const HomePage = () => {
  return (
    <Grid
        minH="100vh"
        bgColor="#F5F5F5"
          templateAreas={{
            base: `"nav" "carousel" "welcome" "category"`,
            lg: `"nav nav" "carousel carousel" "welcome welcome" "category category"`,
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
          <GridItem area="welcome">
            <WelcomeCard />     
          </GridItem>
          <GridItem area="category">     
          </GridItem>
        </Grid>
  )
}

export default HomePage