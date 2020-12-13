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
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

export default function Login() {
  return (
    <ChakraProvider>
      <Box m="auto" maxW="350px" align="center" as="form">
        <VStack spacing={5}>
          <Heading>Iniciar Sesión</Heading>
          <FormControl id="email">
            <FormLabel>Correo Electrónico</FormLabel>
            <Input type="email" placeholder="Correo Electronico" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Contraseña </FormLabel>
            <Input type="password" placeholder="Contraseña" />
          </FormControl>
          <Button size="md" isFullWidth="true" variant="solid">
            INICIAR SESIÓN
          </Button>
          <Button color="#074EE8" variant="link">
            Recuperar contraseña
          </Button>
          <Button color="#074EE8" variant="link" p={0} m={0}>
            Registrate
          </Button>
          <Text>Ó inicia sesión con</Text>
          <HStack spacing={2}>
            <Button color="#074EE8" variant="outline">
              GOOGLE
            </Button>
          </HStack>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}
