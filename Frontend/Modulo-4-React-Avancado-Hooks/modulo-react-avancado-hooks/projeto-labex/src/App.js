import { Box, ChakraProvider } from '@chakra-ui/react'
import { Router } from './Route/Router';

function App() {
  return (
    <ChakraProvider>
      <Box
      backgroundImage={"url('./images/542730.png')"}/>
      <Router />
      <Box/>
    </ChakraProvider>
  );
}

export default App;
