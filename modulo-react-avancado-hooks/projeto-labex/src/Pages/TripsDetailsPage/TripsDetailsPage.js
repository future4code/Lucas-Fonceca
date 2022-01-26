import { PagesHeader } from "../../Components/Header"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios'
import { BASE_URL } from "../../Utils/links"
import { 
    Flex,
    Box,
    Text
} from "@chakra-ui/react"

function TripsDetailsPage() {
    
    const { id } = useParams();
    const [tripId, setTripId] = useState();
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
        return(
        <Flex>
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
        </Flex>
        )
    })

    return (
        <div>
            {PagesHeader()}    
            {renderedTripCandidatesList}
        </div>
    )
}

export default TripsDetailsPage