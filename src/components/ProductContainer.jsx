import { Box } from "@chakra-ui/react";

const ProductContainer = ({children}) => {
  return (
    <Box borderRadius={10} overflow={"hidden"}>
        {children}
    </Box>
  )
}

export default ProductContainer