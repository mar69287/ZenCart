import { Card, CardBody, Flex, Heading, Image, Center, Text } from "@chakra-ui/react";
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
          fontSize={['1rem', '1.1rem', '1.2rem']}
          >{product.title}</Heading>
        
        
          <Center>
            <ReactStars
              count={5}
              value={product.rating.rate}
              size={20}
              edit={false}
            />
            <Text ml={2} textColor='blue.400' fontSize={['1rem', '1.1rem']}>{product.rating.count}</Text>
          </Center>
        
            <Text fontSize={['1rem', '1.1rem', '1.2rem']} textAlign={'center'} fontFamily={'Roboto'} paddingTop={2}>${product.price}</Text>
        </CardBody>
    </Card>
  )
}

export default ProductCard