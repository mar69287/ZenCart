import { Grid, GridItem, Box } from "@chakra-ui/react";
import HomeNav from "../components/HomeNav";
import Carousel from "../components/Carousel";
import WelcomeCard from "../components/WelcomeCard";
import CategoryCard from "../components/CategoryCard";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <Box display="flex" flexDirection="column" justifyContent='center' minHeight="100vh">
      <Box flex="1" bgColor="#F5F5F5">
        <HomeNav />
        <Carousel />
            <WelcomeCard />
            <CategoryCard />     
      </Box>
      <Footer />
    </Box>
  )
}

export default HomePage