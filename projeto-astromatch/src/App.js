import { React, useState } from 'react'
import { ChakraProvider, Heading, Grid, GridItem, Flex, IconButton  } from '@chakra-ui/react'
import { Home } from './Components/Home'
import { RiChatHeartLine } from 'react-icons/ri'
import { Matches } from "./Components/Matches"



function App() {

  const [screen, setScreen] = useState('')

  const goToMatchesPage = () => {
    setScreen("matches")
  }

  const goToHomePage = () => {
    setScreen("home")
  }

  const changeScreen = () => {

    switch (screen) {
      case "home":
        return <Home goToMatchesPage={goToMatchesPage}/>
      case "matches":
        return <Matches goToHomePage={goToHomePage}/>
      default:
        return <Home goToMatchesPage={goToMatchesPage}/>
    }
  }


  return (
    <ChakraProvider>
      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        <GridItem 
        w='100%' 
        colStart={3} 
        bg={'lightgray'} 
        marginTop={9} 
        borderRadius={13}
        boxShadow='base'
        >
          <Flex
          mt='1'
          fontWeight='bold'
          lineHeight='tall'
          isTruncated
          textAlign={'left'}
          justify={'space-around'}
          >
            <Heading
            paddingBottom={2}
            as='h5'
            >
            AstroMatch</Heading>
            <IconButton as={RiChatHeartLine}  bg={'lightgray'} color={'purple.500'} onClick={changeScreen()}/>
          </Flex>
          {changeScreen()}
          {/* <Home></Home> */}
        </GridItem> 
      </Grid>
      
    </ChakraProvider>
  )
} 

export default App;
