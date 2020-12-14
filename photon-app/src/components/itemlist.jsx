import React from "react";
import { Box, Heading, Grid, GridItem } from "@chakra-ui/react";
import Item from "./item.jsx";

export default function ItemList({ itemArr, titulo }) {
  return (
    <Box m="20px auto" maxW="1330px">
      <Grid rowGap={5} columnGap={5} templateColumns="repeat(5, 250px)">
        <GridItem maxH="50px" colSpan={5}>
          <Heading ml={3}>{titulo}</Heading>
        </GridItem>

        {itemArr.map((ArrItem) => (
          <GridItem>
            <Item itemObj={ArrItem} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
