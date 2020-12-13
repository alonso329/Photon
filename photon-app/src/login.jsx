import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
  extendTheme,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";

export default function Login() {
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");

  const firebase = useFirebaseApp();

  const theme = extendTheme({
    styles: {
      global: {
        body: {
          bg: "cyan.900",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          pt: "10%",
        },
      },
    },
  });

  const submit = async (email, password) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  return (
    <ChakraProvider theme={theme}>
      <Box
        align="center"
        as="form"
        bgColor="white"
        p={5}
        borderRadius={10}
        w={350}
      >
        <VStack spacing={5}>
          <Heading size="lg">Iniciar Sesión</Heading>
          <FormControl id="email">
            <FormLabel>Correo Electrónico</FormLabel>
            <Input
              type="email"
              placeholder="Correo Electronico"
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Contraseña </FormLabel>
            <Input
              type="password"
              placeholder="Contraseña"
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </FormControl>
          <Button
            size="md"
            isFullWidth="true"
            variant="solid"
            colorScheme="teal"
            onClick={submit()}
          >
            INICIAR SESIÓN
          </Button>
          <Text>O inicia sesión con</Text>
          <Button colorScheme="red">Google</Button>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}
