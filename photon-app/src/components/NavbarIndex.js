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

function NavbarIndex() {
  return (
    <Box bg="teal.800" w="100%" p={4} color="white">
      <Flex align="center">
        <Heading size="md">Photon</Heading>
        <Spacer />
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input placeholder="Buscar" />
        </InputGroup>
        <HStack spacing={3}>
          <Button colorScheme="teal">Iniciar Sesion</Button>
          <Button colorScheme="teal">Registrarse</Button>
        </HStack>
      </Flex>
    </Box>
  );
}

export default NavbarIndex;
