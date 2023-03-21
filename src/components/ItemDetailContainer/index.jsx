import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({ products }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id == id);

  return (
    <Card direction={{ base: "column", sm: "row" }} overflow="hidden" p={20}>
      <Image
        src={product.image}
        maxWidth={{ base: "100%", sm: "200px" }}
        objectFit="cover"
        alt={product.title}
      />
      <Stack>
        <CardBody>
          <Heading size="md">{product.title}</Heading>
          <Text py="5">{product.description}</Text>
          <Text color="teal" fontSize="2xl" fontWeight="bold">
            {`$${product.price}`}
          </Text>
        </CardBody>
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
      </Stack>
    </Card>
  );
};

export default ItemDetailContainer;
