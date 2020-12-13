import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

export default function Login() {
  return (
    <ChakraProvider>
      <Grid
        templateColumns="repeat(3, 1fr)"
        bg="blue.400"
      >
        <GridItem colStart={2} rowStart={2}>
          <Box align="center" as="form" bgColor="white" p={5} borderRadius={10} maxW="200px">
            <VStack spacing={5}>
              <Heading size="lg">Iniciar Sesión</Heading>
              <FormControl id="email">
                <FormLabel>Correo Electrónico</FormLabel>
                <Input type="email" placeholder="Correo Electronico" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Contraseña </FormLabel>
                <Input type="password" placeholder="Contraseña" />
              </FormControl>
              <Button
                size="md"
                isFullWidth="true"
                variant="solid"
                colorScheme="teal"
              >
                INICIAR SESIÓN
              </Button>
              <Text>O inicia sesión con</Text>
                <Button colorScheme="red">
                  Google
                </Button>
            </VStack>
          </Box>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}
