import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Heading,
  HStack,
  Input,
  Text,
  Badge,
  VStack,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

export default function Product({ imglink }) {
  return (
    <Box m="50px auto" w="71%" p={5} borderWidth={2} colSpan={2}>
      <Grid m="auto" templateColumns="450px 450px 400px" gap={2}>
        <GridItem borderWidth={2} colSpan={2}>
          <HStack spacing={3}>
            <VStack>
              <Image
                boxSize="100px"
                objectFit="cover"
                src="https://compass-ssl.xbox.com/assets/60/1b/601b3202-7796-4422-a4a4-d3a87ab996f3.png?n=XBX_A-BuyBoxBGImage04-D.png"
              />
              <Image
                boxSize="100px"
                objectFit="cover"
                src="https://compass-ssl.xbox.com/assets/60/1b/601b3202-7796-4422-a4a4-d3a87ab996f3.png?n=XBX_A-BuyBoxBGImage04-D.png"
              />
              <Image
                boxSize="100px"
                objectFit="cover"
                src="https://compass-ssl.xbox.com/assets/60/1b/601b3202-7796-4422-a4a4-d3a87ab996f3.png?n=XBX_A-BuyBoxBGImage04-D.png"
              />
            </VStack>
            <Image
              boxSize="400px"
              objectFit="cover"
              src="https://compass-ssl.xbox.com/assets/60/1b/601b3202-7796-4422-a4a4-d3a87ab996f3.png?n=XBX_A-BuyBoxBGImage04-D.png"
            />
          </HStack>
          <Box fontWeight="semibold" fontSize="3xl" lineHeight="tight">
            Informacion del vendedor
          </Box>
        </GridItem>
        <GridItem p="3">
          <VStack>
            <Box>
              <Box d="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  Nuevo
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                  color="green.300"
                >
                  Disponible
                </Box>
              </Box>
              <Heading mt={2} fontWeight="bold">
                Control para Xbox series X/S
              </Heading>
              <Text py={4} fontSize="2xl">
                $1,200
              </Text>
              <VStack mt={2}>
                <Button w="350px" colorScheme="teal">
                  COMPRAR
                </Button>
                <Button w="350px" colorScheme="teal">
                  AGREGAR A CARRITO
                </Button>
              </VStack>
            </Box>
          </VStack>
          <Box mt={5} d="flex" alignItems="baseline">
            <Box fontWeight="semibold" fontSize="3xl" lineHeight="tight">
              Informacion del vendedor
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
