import logo from './logo.svg';
import { ChakraProvider } from '@chakra-ui/react'
import HomePage from './Pages/HomePage';
import ApplicationFormPage from './Pages/ApplicationFormPage'
import AdminHomePage from './Pages/AdminHomePage'
import CreateTripPage from './Pages/CreateTripPage'
import LoginPage from './Pages/LoginPage'
import TripsDetailsPage from './Pages/TripsDetailsPage'
import TripsListPage from './Pages/TripsListPage'

function App() {
  return (
    <ChakraProvider>
      <HomePage />

      {/* <ApplicationFormPage />
      <AdminHomePage />
      <CreateTripPage />
      <LoginPage />
      <TripsDetailsPage />
      <TripsListPage /> */}
    </ChakraProvider>
  );
}

export default App;
