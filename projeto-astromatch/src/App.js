import { React, useState } from 'react'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import { Home } from './Components/Home'

import { Matches } from "./Components/Matches"



function App() {

  const [screen, setScreen] = useState("home")

  const goToMatchesPage = () => {
    setScreen("matches")
  }

  const goToHomePage = () => {
    setScreen("home")
  }


  return (
    <ChakraProvider>
      <Flex justify={'center'}>
        {screen === "home" ? 
        <Home
        goToMatchesPage={goToMatchesPage} 
        /> : 
        <Matches goToHomePage={goToHomePage} />
        }
      </Flex>
    </ChakraProvider>
  )
} 

export default App;
