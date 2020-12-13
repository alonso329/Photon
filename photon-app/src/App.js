import NavbarIndex from './components/NavbarIndex';
import { ChakraProvider } from "@chakra-ui/react"
import Login from "./login.jsx"
import Register from "./registro.jsx"

function App() {
  return (
    <ChakraProvider>
      <NavbarIndex />
    </ChakraProvider>
  );
}

export default App;
