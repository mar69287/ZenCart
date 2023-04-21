import { SimpleGrid } from "@chakra-ui/react";

const ProductGrid = ({products}) => {

  return (
        <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            padding="10px"
            spacing={6}
        >
            
        </SimpleGrid>  
    )
}

export default ProductGrid