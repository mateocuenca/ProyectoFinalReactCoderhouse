import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Text,
  CardFooter,
  Divider,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <NavLink to={`/item/${product.id}`}>
      <Card h="35rem">
        <CardBody>
          <Image
            src={product.image}
            alt={product.title}
            borderRadius="lg"
            height="20rem"
            width="auto"
            m="auto"
            objectFit="cover"
          ></Image>
          <VStack mt="8" spacing="3">
            <Heading size="md" m="auto" noOfLines={1}>
              {product.title}
            </Heading>
            <Text color="teal" fontSize="2xl" fontWeight="bold">
              {`$${product.price}`}
            </Text>
          </VStack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2" margin="auto">
            <Button variant="solid" colorScheme="teal">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="teal">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </NavLink>
  );
};

export default Item;
