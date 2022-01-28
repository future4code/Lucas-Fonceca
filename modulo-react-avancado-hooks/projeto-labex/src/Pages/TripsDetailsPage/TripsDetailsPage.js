import { PagesHeader } from "../../Components/Header"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios'
import { BASE_URL } from "../../Utils/links"
import { 
    Flex,
    Box,
    Text,
    Grid,
    Heading,
    GridItem,
    ButtonGroup,
    Button,
    IconButton,
    Tooltip,
} from "@chakra-ui/react"
import { AddIcon } from '@chakra-ui/icons'

function TripsDetailsPage() {
    
    const { id } = useParams();
    const [tripCandidates, setTripCandidates] = useState([]);

    const getTripsById = () => {
        axios.get(`${BASE_URL}/trip/${id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then(res => setTripCandidates(res.data.trip.candidates))
        .catch(err => console.log(err)) 
    }

    useEffect (() => {
        getTripsById()
    }, [])


    const renderedTripCandidatesList = tripCandidates.map((candidates) => {
        
        const key = candidates.id;
        
        let onClickCrewMember = () => {
            axios.post(`${BASE_URL}/trips/${id}/candidates/${key}/decide`, {
                headers: {
                    auth: localStorage.getItem("token")
                }
            })
            .then(res => console.log(res.data.trip.candidates.approve))
            .catch(err => console.log(err))
        }

        return(
        <Flex
            justify={'center'}
            key={candidates.id}
            >
            <Flex 
                border={"1px"}
                w={'350px'}
                marginTop={'13px'}
                justify={'space-evenly'}
                paddingTop={'8px'}
                paddingBottom={'8px'}
                >
                <Box ml='3'>
                    <Text>
                        <strong>
                            {`Nome: `}
                        </strong> 
                            {candidates.name}
                    </Text>
                    <Text fontSize='sm'> <strong>{`Profissão: `}</strong>
                        {candidates.profession}
                    </Text>
                </Box>
                <ButtonGroup size='sm' isAttached variant='outline' alignSelf={'center'}>
                    
                    <Tooltip label='Ver detalhes'>
                        <Button mr='-px'>Detalhes</Button>
                    </Tooltip>
                    <Tooltip label='Adicionar à lista de Tripulantes'>
                        <IconButton aria-label='Add to friends' icon={<AddIcon />} onClick={onClickCrewMember}/>
                    </Tooltip>
                </ButtonGroup>
            </Flex>
        </Flex>
        )
    })

    return (
        <div>
            {PagesHeader()}
            <Grid gridTemplateColumns={'repeat(2, 1fr)'}>
                <GridItem align={'center'}>
                    <Heading as='h3' size='lg'>
                        Lista de Candidatos:
                    </Heading>
                    {renderedTripCandidatesList}
                </GridItem>
                <GridItem align={'center'}>
                    <Heading as='h3' size='lg'>
                        Lista de Tripulantes
                    </Heading>
                </GridItem>
            </Grid>
        </div>
    )
}

export default TripsDetailsPage