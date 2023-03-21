import {
  Flex,
  Text,
  Button,
  Spacer,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      alignItems="center"
      bg="white"
      h="64px"
      p="40px"
      borderBottom="1px"
      borderColor="teal"
      justifyContent="space-between"
    >
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Categories"
          icon={<HamburgerIcon />}
          variant="ghost"
          colorScheme="teal"
          display={["flex", "flex", "none", "none"]}
        ></MenuButton>
        <MenuList>
          <NavLink to="/category/men's clothing">
            <MenuItem>Men</MenuItem>
          </NavLink>
          <NavLink to="/category/women's clothing">
            <MenuItem>Women</MenuItem>
          </NavLink>
          <NavLink to="/category/jewerly">
            <MenuItem>Jewerly</MenuItem>
          </NavLink>
          <NavLink to="/category/electronics">
            <MenuItem>Electronics</MenuItem>
          </NavLink>
        </MenuList>
      </Menu>
      <Spacer display={["flex", "flex", "none", "none"]} />

      <NavLink to="/">
        <Text color="blackAlpha.700" fontSize="2xl" fontWeight="extrabold">
          mate store
        </Text>
      </NavLink>
      <Spacer />

      <HStack spacing="20px" display={["none", "none", "flex", "flex"]}>
        <NavLink to="/category/men's clothing">
          <Button variant="ghost" colorScheme="teal">
            Men
          </Button>
        </NavLink>
        <NavLink to="/category/women's clothing">
          <Button variant="ghost" colorScheme="teal">
            Women
          </Button>
        </NavLink>
        <NavLink to="/category/jewelery">
          <Button variant="ghost" colorScheme="teal">
            Jewerly
          </Button>
        </NavLink>
        <NavLink to="/category/electronics">
          <Button variant="ghost" colorScheme="teal">
            Electronics
          </Button>
        </NavLink>
      </HStack>
      <Spacer display={["none", "none", "flex", "flex"]} />

      <NavLink>
        <IconButton
          icon={<CartWidget cartItems={4} />}
          colorScheme="teal"
          variant="ghost"
        />
      </NavLink>
    </Flex>
  );
};

export default Navbar;
