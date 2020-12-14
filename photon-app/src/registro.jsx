import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogContent,
  VStack,
  extendTheme,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import "firebase/auth";
import "firebase/firestore";
import { useFirebaseApp } from "reactfire";
import { Link } from "react-router-dom";

export default function Registro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const cancelRef = React.useRef();

  const firebase = useFirebaseApp();

  const submit = async () => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user.user.uid);
        firebase
          .firestore()
          .collection("users")
          .doc(user.user.uid)
          .set({
            name: name,
            last: last,
          })
          .then(() => {
            setIsOpen(true);
          })
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });
        console.log("accion exitosa 1");
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  const theme = extendTheme({
    styles: {
      global: {
        body: {
          bg: "cyan.900",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          pt: "5%",
        },
      },
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Box
        maxW="600px"
        align="center"
        as="form"
        m={5}
        bg="white"
        p={5}
        borderRadius={10}
      >
        <VStack spacing={5}>
          <Heading size="lg">Registro</Heading>
          <HStack spacing={2}>
            <FormControl id="nombre">
              <FormLabel>Nombre</FormLabel>
              <Input
                type="text"
                placeholder="Nombre"
                onChange={(ev) => setName(ev.target.value)}
              />
            </FormControl>
            <FormControl id="apellido">
              <FormLabel>Apellido</FormLabel>
              <Input
                type="text"
                placeholder="Apellido"
                onChange={(ev) => setLast(ev.target.value)}
              />
            </FormControl>
          </HStack>
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
            onClick={() => submit()}
          >
            Registrarse
          </Button>
        </VStack>
      </Box>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>Registro Exitoso</AlertDialogHeader>
          <AlertDialogBody>
            El registro del usuario ha sido exitoso
          </AlertDialogBody>
          <AlertDialogFooter>
            <Link to="/">
              <Button colorScheme="green">Aceptar</Button>
            </Link>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </ChakraProvider>
  );
}
