import { ChakraProvider } from '@chakra-ui/react'
import { Router } from './Route/Router';

function App() {
  return (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  );
}

export default App;
