import { SimpleGrid } from "@chakra-ui/react";
import ProductContainer from "./ProductContainer";

const ProductGrid = ({products}) => {

  return (
        <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            padding="10px"
            spacing={6}
        >
            <ProductContainer>
                
            </ProductContainer>
        </SimpleGrid>  
    )
}

export default ProductGrid