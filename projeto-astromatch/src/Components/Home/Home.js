import {React, useState, useEffect} from "react"
import { Box, Image, IconButton, Grid, Heading, Flex, Button, Icon } from '@chakra-ui/react'
import { AiFillHeart, AiOutlineClose } from 'react-icons/ai'
import { RiChatHeartLine } from 'react-icons/ri'
import { GiSmallFire } from 'react-icons/gi'
import axios  from 'axios'
import { BASE_URL } from "../../Constants/urls"

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

    const choosePerson = () => {
      const body = {
        id: person.id,
        choice: true
      }
      axios.post(`${BASE_URL}/choose-person`, body)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response))

      getProfileList()
    
    }

    const onClickChoosePerson = () => {
      setChoice(!true)
      getProfileList()
    }
   
    
    

    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' bg={'lightgray'} align={'center'} h={700} justifyContent={'center'}>
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
              <Icon as={GiSmallFire} color='red.500' marginRight={2}/>
              Txainder
            </Heading>
            <Button 
            aria-label="Ir para página de Matches"
            as={RiChatHeartLine}  
            bg={'lightgray'} 
            color={'purple.500'}
            onClick={props.goToMatchesPage}
            colorScheme='teal'
            variant={'outline'}
            />
          </Flex>
        </Box>
        <Flex
          h={380}
          align={'center'}
          >
          <Image 
            src={person.photo}
            w={400}
            maxHeight={380}
            overflowy={'hidden'}
          />
        </Flex>
        <Box p='6'>
          <Box
            mt='1'
            fontWeight='semibold'
            as='h1'
            lineHeight='tight'
            textAlign={'center'}
            h={10}
          >
            {person.name}, {person.age}
          </Box>
          <Box
            mt='1'
            fontWeight='normal'
            as='h6'
            lineHeight='tight'
            textAlign={'center'}
            h={20}
          >
            {person.bio}            
          </Box>
          <Grid templateColumns='repeat(2, 1fr)' gap={200}>
            <IconButton 
            aria-label='Não curtir' 
            as={AiOutlineClose} 
            bg={'lightgray'} 
            color={'lightcoral'}
            onClick={onClickChoosePerson}
            colorScheme='teal'
            variant={'outline'}
            w={16}
            h={16}
            />
            <IconButton 
            colorScheme='teal'
            aria-label="curtir"
            as={AiFillHeart}  
            bg={'lightgray'} 
            color={'green.600'}
            onClick={choosePerson}
            variant={'outline'}
            w={16}
            h={16}
            />
          </Grid>
        </Box>
      </Box>
    )
  }