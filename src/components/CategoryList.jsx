import { HStack, Button, Show, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const CategoryList = ({selectedCategory, setSelectedCategory}) => {
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
      <Show above='sm'>
        {categories.map((category) => (
          <Button onClick={() => handleCategorySelect(category)} key={category} variant="ghost" padding={2}>
            {category}
          </Button>
       ))}
      </Show>
      <Show below='sm'>
      <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedCategory || "Categories"}
      </MenuButton>
      <MenuList>
        {categories.map((category) => (
          <MenuItem
          onClick={() => handleCategorySelect(category)} key={category}
          >
            {category}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
      </Show>
    </HStack>
  );
};

export default CategoryList;