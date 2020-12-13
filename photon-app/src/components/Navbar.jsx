import React from "react";
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
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

function Navbar() {
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
        <HStack spacing={3}>
          <Link to="/login">
            <Button colorScheme="teal">Iniciar Sesion</Button>
          </Link>
          <Link to="/register">
            <Button colorScheme="teal">Registrarse</Button>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
