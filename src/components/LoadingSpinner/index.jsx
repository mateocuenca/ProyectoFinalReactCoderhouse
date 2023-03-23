import { Center, Spinner } from "@chakra-ui/react";

const LoadingSpinner = () => {
  return (
    <Center>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="teal"
        size="xl"
        position="fixed"
        top="50vh"
      />
    </Center>
  );
};

export default LoadingSpinner;
