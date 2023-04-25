import { SimpleGrid } from "@chakra-ui/react";
import ProductContainer from "./ProductContainer";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const ProductGrid = ({products}) => {

  return (
        <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            padding="10px"
            spacing={6}
        >
                {products.map(product => (
                    <Link key={product.id} to={`/products/${product.id}`}>
                        <ProductContainer >
                            <ProductCard product={product}/>
                        </ProductContainer>
                    </Link>
                ))}
        </SimpleGrid>  
    )
}

export default ProductGrid