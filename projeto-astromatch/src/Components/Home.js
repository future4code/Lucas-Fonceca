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
    // Aqui eu criei o useState do choice, mas não sei onde eu tenho que usar esse choice. 

    const choosePerson = () => {
      const body = {
        id: person.id,
        choice: true
      }
      //eu imagino que eu precise usar esse id em algum lugar pra poder fazer o match aparecer na lista de match, mas eu não sei como.

      axios.post(`${BASE_URL}/choose-person`, body)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response))

      getProfileList()
      //aqui é a requisição pra escolher o match. Essa função choosePerson tá no coraçãozinho que dá like, e o getProfileList tá ali pra poder apresentar outro card quando eu dou like.
    }

    const onClickChoosePerson = () => {
      setChoice(!true)
      getProfileList()
      // e essa função seta o "choice" pra falso, pra poder ir no "dislike" e não dar match.
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
            onClick={onClickChoosePerson}
            />
            <IconButton 
            as={AiFillHeart}  
            bg={'lightgray'} 
            color={'green.600'}
            onClick={choosePerson}            
            />
          </Grid>
        </Box>
      </Box>
    )
  }