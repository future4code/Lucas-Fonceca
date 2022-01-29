import { PagesHeader } from "../../Components/Header"
import { useHistory, useParams } from "react-router-dom"
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
    
    const history = useHistory()
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

    const goToAdminPage = () => {
        history.push("/admin")
    } 

    let onClickCrewMember = (candidateId, approve) => {

        const body = { approve: approve }
        
        axios.put(`${BASE_URL}/trips/${id}/candidates/${candidateId}/decide`, body, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    const renderedTripCandidatesList = tripCandidates.map((candidates) => {
        
        const candidateId = candidates.id;
        
        
        return(
        <div>
            <Flex
                justify={'center'}
                key={candidates.id}
                >
                <Flex 
                    border={"1px"}
                    w={'400px'}
                    marginTop={'13px'}
                    justify={'space-evenly'}
                    paddingTop={'8px'}
                    paddingBottom={'8px'}
                    >
                    <Box ml='3' textAlign={'left'} marg>
                        <Text>
                            <strong>
                                {`Nome: `}
                            </strong> 
                                {candidates.name}
                        </Text>
                        <Text fontSize='sm'> <strong>{`Profissão: `}</strong>
                            {candidates.profession}
                        </Text>
                        <Text fontSize='sm'> <strong>{`Idade: `}</strong>
                            {candidates.age}
                        </Text>
                        <Text fontSize='sm'> <strong>{`Texto de inscrição: `}</strong>
                            {candidates.applicationText}
                        </Text>
                    </Box>
                    <ButtonGroup size='sm' isAttached variant='outline' alignSelf={'center'}>    
                        <Tooltip label='Adicionar à lista de Tripulantes'>
                            <Button  onClick={() => onClickCrewMember(true)} mr='-px' >Aceitar</Button>
                        </Tooltip>
                        <Tooltip label='Adicionar à lista de Tripulantes'>
                            <IconButton aria-label='Add to Crew List' icon={<AddIcon />} onClick={() => onClickCrewMember(true)}/>
                        </Tooltip>
                    </ButtonGroup>
                </Flex>
            </Flex>
        </div>
        )
    })

    return (
        <div>
            {PagesHeader()}
            <Flex align={'space-between'} flexDirection={'column'}>
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
                <Button marginTop={'25px'} onClick={goToAdminPage} w={'200px'} alignSelf={'center'}>Voltar</Button>
            </Flex>
        </div>
    )
}

export default TripsDetailsPage