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


    const approvedCandidates = tripCandidates && 
    tripCandidates.approved && 
    tripCandidates.approved.map((trip) => {
        return (
          <ul>
            <li>
              <p key={trip.id} >Nome: {trip.name}</p>
              <p>Idade: {trip.age}</p>
              <p>País: {trip.country}</p>
            </li>
          </ul>
        )
      })

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
                    <Box ml='3' textAlign={'left'} marginRight={'13px'}>
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
                </Flex>
            </Flex>
        </div>
        )
    })

    return (
        <div>
            {PagesHeader()}
            <Flex align={'space-between'} flexDirection={'column'}>
                        <Heading as='h3' size='lg' textAlign={'center'} marginBottom={'13px'}>
                            Lista de Candidatos:
                        </Heading>
                        {renderedTripCandidatesList}
                <Button marginTop={'25px'} onClick={goToAdminPage} w={'200px'} alignSelf={'center'}>Voltar</Button>
            </Flex>
        </div>
    )
}

export default TripsDetailsPage