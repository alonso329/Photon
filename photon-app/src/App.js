import './styles/App.css';
import NavbarIndex from './components/NavbarIndex';
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <NavbarIndex />
    </ChakraProvider>
  );
}

export default App;
