import React from "react";
import { Box, Image } from "@chakra-ui/react";

export default function Banner({ imglink }) {
  return (
    <Box>
      <Image m="40px auto" h="450px" w="1330px" src={imglink} />
    </Box>
  );
}
