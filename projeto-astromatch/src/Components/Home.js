import {React, useState, useEffect} from "react"
import { Box, Image, IconButton, Grid, GridItem, Heading, Flex, Button, propNames } from '@chakra-ui/react'
import { AiFillHeart, AiOutlineClose } from 'react-icons/ai'
import { RiChatHeartLine } from 'react-icons/ri'
import axios  from 'axios'
import { BASE_URL } from "../Constants/urls"

export const Home = (props) => {
    const [person, setPerson] = useState([])

    const getProfileList = () => {
      axios.get(`${BASE_URL}/person`)
      .then((res) => setPerson(res.data.profile))
      .catch((err) => console.log (err.response))
    }

    useEffect(() =>{
      getProfileList()
    }, [])


    const [choice, setChoice] = useState(true)

    const didChoice = () => { 
      setChoice(true)
      getProfileList()
    }
    
    const didNotChoice = () => {
      setChoice(false)
      getProfileList()
    }
    
    

    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' bg={'lightgray'} align={'center'}>
        <Box w='100%' 
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
                    AstroMatch
                  </Heading>
                  <Button 
                  as={RiChatHeartLine}  
                  bg={'lightgray'} 
                  color={'purple.500'}
                  onClick={props.goToMatchesPage}
                  />
              </Flex>
            </Box>
        <Image 
        src={person.photo}
        w={400}/>
          <Box p='6'>
          <Box display='flex' alignItems='baseline'>
          </Box>
          <Box
            mt='1'
            fontWeight='semibold'
            as='h1'
            lineHeight='tight'
            textAlign={'center'}
          >
            {person.name}, {person.age}
            
          </Box>
          <Box
            mt='1'
            fontWeight='normal'
            as='h6'
            lineHeight='tight'
            textAlign={'center'}
          >
            {person.bio}            
          </Box>
          <Grid templateColumns='repeat(2, 1fr)' gap={200}>
            <IconButton 
            aria-label='Search database' 
            as={AiOutlineClose} 
            bg={'lightgray'} 
            color={'lightcoral'}
            onClick={didNotChoice}
            />
            <IconButton 
            as={AiFillHeart}  
            bg={'lightgray'} 
            color={'green.600'}
            onClick={didChoice}
            />
          </Grid>
        </Box>
      </Box>
    )
  }