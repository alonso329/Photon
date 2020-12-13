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

export default function Registro() {
  return (
    <ChakraProvider>
      <Box m="auto" maxW="350px" align="center" as="form" mt={5}>
        <VStack spacing={5}>
          <Heading>Registro</Heading>
          <HStack spacing={2}>
            <FormControl id="nombre">
              <FormLabel>Nombre</FormLabel>
              <Input type="text" placeholder="Nombre" />
            </FormControl>
            <FormControl id="apellido">
              <FormLabel>Apellido</FormLabel>
              <Input type="text" placeholder="Apellido" />
            </FormControl>
          </HStack>
          <FormControl id="email">
            <FormLabel>Correo Electrónico</FormLabel>
            <Input type="email" placeholder="Correo Electronico" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Contraseña </FormLabel>
            <Input type="password" placeholder="Contraseña" />
          </FormControl>
          <FormControl id="password2">
            <FormLabel>Contraseña </FormLabel>
            <Input type="password" placeholder="Confirmar Contraseña" />
          </FormControl>
          <Button size="md" isFullWidth="true" variant="solid" colorScheme="teal">
            INICIAR SESIÓN
          </Button>
          <Button colorScheme="teal" variant="link">
            Recuperar contraseña
          </Button>
          <Button colorScheme="teal" variant="link" p={0} m={0}>
            Registrate
          </Button>
          <Text>Ó inicia sesión con</Text>
          <HStack spacing={2}>
            <Button colorScheme="google" variant="outline">
              GOOGLE
            </Button>
          </HStack>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}
