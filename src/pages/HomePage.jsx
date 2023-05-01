import { Grid, GridItem, Box, } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Grid
          templateAreas={{
            base: `"nav" "carousel" "category" `,
            lg: `"nav nav" "carousel carousel" "category category" `,
          }}
          templateColumns={{
            base: "1fr",
            lg: "1fr 1fr",
          }}
        >
          <GridItem area="nav">
            
          </GridItem>
          <GridItem area="carousel">
          </GridItem>
          <GridItem area="category">     
          </GridItem>
        </Grid>
  )
}

export default HomePage