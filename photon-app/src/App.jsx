import Navbar from "./components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import Banner from "./components/banner";
import ItemList from "./components/itemlist";

function App() {
  const controles = [
    {
      imglink:
        "https://compass-ssl.xbox.com/assets/60/1b/601b3202-7796-4422-a4a4-d3a87ab996f3.png?n=XBX_A-BuyBoxBGImage04-D.png",
      usednew: "nuevo",
      description: "Control Xbox series X/S",
      price: "1,200",
    },
    {
      imglink:
        "https://lh3.googleusercontent.com/proxy/C0CpghsRHEiQQ3nDFTtwaoEpzUHXNDtf0Elgqohzbc9dL7Lz5N2VR7X-rBFrrOg8a8tB1a3OWO7tj5W-kAaXVz491v6rNLlaZtQlKy4gk7sU9yCoBR7SQrPrMh_lWz0",
      usednew: "nuevo",
      description: "Control Playstation 5",
      price: "1,200",
    },
    {
      imglink:
        "https://compass-ssl.xbox.com/assets/60/1b/601b3202-7796-4422-a4a4-d3a87ab996f3.png?n=XBX_A-BuyBoxBGImage04-D.png",
      usednew: "nuevo",
      description: "Control Xbox series X/S 2",
      price: "1,200",
    },
    {
      imglink:
        "https://compass-ssl.xbox.com/assets/60/1b/601b3202-7796-4422-a4a4-d3a87ab996f3.png?n=XBX_A-BuyBoxBGImage04-D.png",
      usednew: "nuevo",
      description: "Control Xbox series X/S",
      price: "1,200",
    },
    {
      imglink:
        "https://compass-ssl.xbox.com/assets/60/1b/601b3202-7796-4422-a4a4-d3a87ab996f3.png?n=XBX_A-BuyBoxBGImage04-D.png",
      usednew: "nuevo",
      description: "Control Xbox series X/S",
      price: "1,200",
    },
  ];
  const consolas = [
    {
      imglink:
        "https://static.wikia.nocookie.net/watchdogscombined/images/5/57/PS5.png/revision/latest?cb=20201027171802",
      usednew: "nuevo",
      description: "PlayStation 5",
      price: "14,000",
    },
    {
      imglink:
        "https://static.wikia.nocookie.net/watchdogscombined/images/5/57/PS5.png/revision/latest?cb=20201027171802",
      usednew: "nuevo",
      description: "PlayStation 5",
      price: "14,000",
    },
    {
      imglink:
        "https://static.wikia.nocookie.net/watchdogscombined/images/5/57/PS5.png/revision/latest?cb=20201027171802",
      usednew: "nuevo",
      description: "PlayStation 5",
      price: "14,000",
    },
    {
      imglink:
        "https://static.wikia.nocookie.net/watchdogscombined/images/5/57/PS5.png/revision/latest?cb=20201027171802",
      usednew: "nuevo",
      description: "PlayStation 5",
      price: "14,000",
    },

    {
      imglink:
        "https://static.wikia.nocookie.net/watchdogscombined/images/5/57/PS5.png/revision/latest?cb=20201027171802",
      usednew: "nuevo",
      description: "PlayStation 5",
      price: "14,000",
    },
  ];

  return (
    <ChakraProvider>
      <Navbar />
      <Banner imglink="https://www.nylon.com.sg/wp-content/uploads/2020/06/ps5-banner.jpg" />
      <ItemList itemArr={controles} titulo="Controles" />
      <ItemList itemArr={consolas} titulo="Consolas" />
    </ChakraProvider>
  );
}

export default App;
