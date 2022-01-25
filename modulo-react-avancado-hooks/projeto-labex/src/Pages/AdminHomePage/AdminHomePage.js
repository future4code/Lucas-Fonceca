import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import axios from "axios"
import {
    Flex,
    Box,
    Text,
    Button,
    Grid
} from '@chakra-ui/react'
import { BASE_URL } from "../../Utils/links"
import { PagesHeader } from "../../Components/Header";
import CreateTripPage from "../CreateTripPage/CreateTripPage";


function AdminHomePage() {
    const history = useHistory();

    const goToHomePage = () => {
        history.push("/");
    };


    useEffect(() => {
        getTripsList()
    }, [])  

    
    const [tripsState, setTripsState] = useState ([])

    const getTripsList = () => {
        axios.get(`${BASE_URL}/trips`)
        .then(res => setTripsState(res.data.trips))
        .catch(err => console.log(err))
    }

   


    const renderedTriplist = tripsState.map((trip) => {
        return (
            <Flex justify={'space-around'}>
                <Box ml='3' border={'2px'} 
                marginTop={'13px'}
                paddingRight={'13px'}
                paddingLeft={'13px'}
                width={'300px'}
                _hover={{bg: 'gray.800', color: 'white'}}>
                    <Text fontWeight='bold'>
                    {trip.planet}
                    </Text>
                    <Text fontSize='sm'>{trip.name}</Text>
                </Box>
            </Flex>
        )
    })


    return (
    <div>
        {PagesHeader()}
        <Box
        align={'center'}>
            <Button onClick={goToHomePage} marginRight={'20px'}>Voltar</Button>
            {CreateTripPage()}
            <Grid templateColumns='repeat(2, 1fr)'
            marginTop={'50px'}
            >
                {renderedTriplist}
            </Grid>
        </Box>
    </div>
    )
}

export default AdminHomePage