import {React, useState, useEffect, Profiler} from "react"
import { Box, Image, IconButton, Grid } from '@chakra-ui/react'
import { AiFillHeart, AiOutlineClose } from 'react-icons/ai'
import axios  from 'axios'
import { BASE_URL } from "../Constants/urls"

export const Home = () => {
    const [person, setPerson] = useState([])

  

    const getProfileList = () => {
      axios.get(`${BASE_URL}/person`)
      .then((res) => setPerson(res.data.profile))
      .catch((err) => console.log (err.response))
    }

    useEffect(() =>{
      getProfileList()
    }, [])
    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' bg={'lightgray'}>
        
        <Image src={person.photo}/>
          <Box p='6'>
          <Box display='flex' alignItems='baseline'>
          </Box>
          <Box
            mt='1'
            fontWeight='semibold'
            as='h1'
            lineHeight='tight'
            isTruncated
            textAlign={'center'}
          >
            {person.name}, {person.age}
            
          </Box>
          <Box
            mt='1'
            fontWeight='normal'
            as='h6'
            lineHeight='tight'
            isTruncated
            textAlign={'center'}
          >
            {person.bio}            
          </Box>
          <Grid templateColumns='repeat(2, 1fr)' gap={200}>
            <IconButton aria-label='Search database' as={AiOutlineClose} bg={'lightgray'} color={'lightcoral'}/>
            <IconButton as={AiFillHeart}  bg={'lightgray'} color={'green.600'}/>
          </Grid>
        </Box>
      </Box>
    )
  }