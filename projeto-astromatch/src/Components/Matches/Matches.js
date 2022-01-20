import { useEffect, useState } from "react"
import { Box, Flex, Heading, Button, Grid, IconButton, Icon, Alert } from '@chakra-ui/react'
import { BsPeopleFill } from 'react-icons/bs'
import { MdDeleteForever} from 'react-icons/md'
import { GiSmallFire } from 'react-icons/gi'
import MatchesInfoComponent from "../MatchesInfoComponent/MatchesInfoComponent"
import axios from "axios"
import { BASE_URL } from "../../Constants/urls"

export const Matches = (props) => {
  const [choicesList, setChoicesList] = useState([])

  const renderedMatches = choicesList.map((choice) => {
    return (
      <MatchesInfoComponent 
        key={choice.id}
        name={choice.name}
        badge={choice.photo}
        bio={choice.bio}
      />
    )
  }) 
  
  const getMatchesList =() => {
    axios.get(`${BASE_URL}/matches`)
    .then((res) => setChoicesList(res.data.matches))
    .catch((err) => console.log(err.response))
  }

  useEffect(() =>{
    getMatchesList()
  }, [])

  const clearMatches = () => {
    const headers = {
      'Content-Type': 'application/json'
    }

    axios.put(`${BASE_URL}/clear`, headers)
    .then(() => alert('Perfis resetados com sucesso'))
    .catch((err) => console.log(err.response))

    props.goToHomePage()
  }

  return(
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' bg={'lightgray'} align={'center'} maxH={600} overflowY={'scroll'}>
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
                <Button 
                variant={'outline'}
                as={MdDeleteForever}  
                bg={'lightgray'} 
                color={'red.500'}
                onClick={clearMatches}
                aria-label={'Resetar Matches'}
                />
                <Heading
                paddingBottom={2}
                as='h5'
                >
                    <Icon as={GiSmallFire} color='red.500'/>
                    Txainder
                </Heading>
                <Button 
                variant={'outline'}
                as={BsPeopleFill}  
                bg={'lightgray'} 
                color={'purple.500'}
                onClick={props.goToHomePage}
                aria-label={'Ir para perfis'}
                />
                </Flex>
        </Box>
        <Box h={500}>
        {renderedMatches}
        </Box>
    </Box>
   )

}

