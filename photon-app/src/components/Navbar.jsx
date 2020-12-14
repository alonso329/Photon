import React, { useState } from "react";
import {
  Box,
  HStack,
  Heading,
  Button,
  Flex,
  Spacer,
  InputGroup,
  InputLeftElement,
  Input,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogContent,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useUser, useFirebaseApp } from "reactfire";
import "firebase/firestore";

export default function Navbar() {
  const { data: user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  const firebase = useFirebaseApp();

  const logout = async () => {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        setIsOpen(false);
      });
  };

  return (
    <Box bg="teal.800" w="100%" p={4} color="white">
      <Flex align="center">
        <Heading size="md" mr={5}>
          Photon
        </Heading>
        <Spacer />
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input placeholder="Buscar" variant="filled" maxW="25rem" />
        </InputGroup>
        {!user && (
          <HStack spacing={3}>
            <Link to="/login">
              <Button colorScheme="teal">Iniciar Sesion</Button>
            </Link>
            <Link to="/register">
              <Button colorScheme="teal">Registrarse</Button>
            </Link>
          </HStack>
        )}
        {user && (
          <Button
            colorScheme="teal"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Cerrar Sesion
          </Button>
        )}

        <AlertDialog
          motionPreset="slideInBottom"
          leastDestructiveRef={cancelRef}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogHeader>Cerrar Sesion</AlertDialogHeader>
            <AlertDialogBody>¿De verdad quieres cerrar sesión?</AlertDialogBody>
            <AlertDialogFooter>
              <Button colorScheme="gray" onClick={onClose} mr={4}>
                No
              </Button>
              <Button colorScheme="red" onClick={() => logout()}>
                Si
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Flex>
    </Box>
  );
}
