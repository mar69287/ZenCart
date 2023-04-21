import { HStack, Button } from "@chakra-ui/react";

const CategoryList = ({setSelectedCategory}) => {
    const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];
    const handleCategorySelect = (category) => {
      setSelectedCategory(category);
    };
  return (
    <HStack
      justifyContent="space-evenly"
      spacing={0}
      padding={0}
    >
      {categories.map((category) => (
        <Button onClick={() => handleCategorySelect(category)} key={category} colorScheme="blue" variant="ghost" padding={2}>
          {category}
        </Button>
      ))}
    </HStack>
  );
};

export default CategoryList;