import React from "react";
import { Box, Image, Badge } from "@chakra-ui/react";

export default function Item({ imglink, alt, state, description, price }) {
  return (
    <Box maxW="250px" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={imglink} alt={alt} />

      <Box bg="gray.100" p="10px 15px">
        <Box>
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {state}
          </Badge>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {description}
        </Box>

        <Box>{`$${price}`}</Box>
      </Box>
    </Box>
  );
}
