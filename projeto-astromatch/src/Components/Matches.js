import {React, useState, useEffect} from "react"
import { Box, Image, IconButton, Grid, Avatar, Heading, Flex, Button, Badge, Text } from '@chakra-ui/react'
import { AiFillHeart, AiOutlineClose } from 'react-icons/ai'
import { BsPeopleFill } from 'react-icons/bs'
import axios  from 'axios'
import { BASE_URL } from "../Constants/urls"

export function Matches(props) {

    const [choiceList, setChoiceList] = useState([])

    const getMatches = () => {
        axios.get(`${BASE_URL}/matches`)
        .then((res) => setChoiceList([...res.data.profile]))
        .catch((err) => console.log (err.response))
      }
  
      useEffect(() =>{
        getMatches()
      }, [])


   return(
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
                as={BsPeopleFill}  
                bg={'lightgray'} 
                color={'purple.500'}
                onClick={props.goToHomePage}
                />
                </Flex>
        </Box>
        <Flex>
            <Avatar src={choiceList.photo} />
            <Box ml='3'>
                <Text fontWeight='bold'>
                {choiceList.name}
                <Badge ml='1' colorScheme='green'>
                    New
                </Badge>
                </Text>
                <Text fontSize='sm'>{choiceList.bio}</Text>
            </Box>
        </Flex>
      <Grid templateColumns='repeat(2, 1fr)' gap={200}>
        <IconButton aria-label='Search database' as={AiOutlineClose} bg={'lightgray'} color={'lightcoral'}/>
        <IconButton as={AiFillHeart}  bg={'lightgray'} color={'green.600'}/>
      </Grid>
    </Box>
   )
}