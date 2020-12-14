import React from "react";
import { Box, Heading, Grid, GridItem } from "@chakra-ui/react";
import Item from "./item.jsx";

export default function ItemList() {
  return (
    <Box m="20px auto" maxW="1330px">
      <Grid rowGap={5} columnGap={5} templateColumns="repeat(5, 250px)">
        <GridItem maxH="50px" colSpan={5}>
          <Heading ml={3}>Controles</Heading>
        </GridItem>
        <GridItem>
          <Item
            imglink="https://compass-ssl.xbox.com/assets/60/1b/601b3202-7796-4422-a4a4-d3a87ab996f3.png?n=XBX_A-BuyBoxBGImage04-D.png"
            alt="x"
            state="usado"
            description="Control"
            price="1,200"
          />
        </GridItem>
        <GridItem>
          <Item
            imglink="https://compass-ssl.xbox.com/assets/60/1b/601b3202-7796-4422-a4a4-d3a87ab996f3.png?n=XBX_A-BuyBoxBGImage04-D.png"
            alt="x"
            state="usado"
            description="Control"
            price="1,200"
          />
        </GridItem>
        <GridItem>
          <Item
            imglink="https://compass-ssl.xbox.com/assets/60/1b/601b3202-7796-4422-a4a4-d3a87ab996f3.png?n=XBX_A-BuyBoxBGImage04-D.png"
            alt="x"
            state="usado"
            description="Control"
            price="1,200"
          />
        </GridItem>
        <GridItem>
          <Item
            imglink="https://compass-ssl.xbox.com/assets/60/1b/601b3202-7796-4422-a4a4-d3a87ab996f3.png?n=XBX_A-BuyBoxBGImage04-D.png"
            alt="x"
            state="usado"
            description="Control"
            price="1,200"
          />
        </GridItem>
        <GridItem>
          <Item
            imglink="https://compass-ssl.xbox.com/assets/60/1b/601b3202-7796-4422-a4a4-d3a87ab996f3.png?n=XBX_A-BuyBoxBGImage04-D.png"
            alt="x"
            state="usado"
            description="Control"
            price="1,200"
          />
        </GridItem>
      </Grid>
    </Box>
  );
}
