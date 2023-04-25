import { Card, CardBody, Flex, Heading, Image, Show, Text } from "@chakra-ui/react";
import ReactStars from "react-rating-stars-component";

const ProductCard = ({product}) => {
  return (
    <Card paddingTop={3} minH={'21rem'}>
        
          <Flex justify={'center'}>
            <Image src={product.image}  boxSize="200px" />
          </Flex>
        
        <CardBody>
      
          <Heading
          paddingBottom={2}
          fontSize={['12px', '15px', '18px']}
          >{product.title}</Heading>
        
        
          <ReactStars
            count={5}
            value={product.rating.rate}
            size={20}
            edit={false}
          />
        
            <Text fontSize={'md'} textAlign={'right'} fontFamily={'Roboto'} paddingTop={2}>${product.price}</Text>
        </CardBody>
    </Card>
  )
}

export default ProductCard