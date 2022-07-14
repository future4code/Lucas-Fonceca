import logo from './logo.svg';
import { ChakraProvider } from '@chakra-ui/react'
import MainPage from './Pages/MainPage';

function App() {
  return (
    <ChakraProvider>
      <MainPage />
    </ChakraProvider>
  );
}

export default App;
