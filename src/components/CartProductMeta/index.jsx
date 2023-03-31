import { Box, Image, Stack, Text } from "@chakra-ui/react";

const CartProductMeta = ({ name, description, image }) => {
  return (
    <Stack direction="row" spacing="5" width="full">
      <Image
        rounded="lg"
        width="120px"
        height="120px"
        fit="cover"
        src={image}
        alt={name}
        draggable="false"
        loading="lazy"
      />
      <Box pt="4">
        <Stack spacing="0.5">
          <Text fontWeight="medium">{name}</Text>
          <Text fontSize="sm">{description}</Text>
        </Stack>
      </Box>
    </Stack>
  );
};

export default CartProductMeta;
