import React, { useEffect, useState } from "react";
import { Box, color } from "@chakra-ui/react";
import { BASE_URL } from "../Utils/links";
import axios from "axios";

export default function CardTrip(props) {

    const [tripsState, setTripsState] = useState ([])

    const getTripsList = () => {
        axios.get(`${BASE_URL}/trips`)
        .then(res => setTripsState(res.data.trips))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getTripsList()
    }, [])  

    const renderedTriplist = tripsState.map((trip) => {
        return (
            <Box maxW='sm' 
                borderWidth='1px' 
                borderRadius='lg' 
                overflow='hidden' 
                _hover={{bg: 'gray.800', color: 'white'}}>

                <Box p='6'>

                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        isTruncated
                    >
                        {trip.name}
                    </Box>
                
                    <Box>
                        {trip.description}
                        <Box as='span' color='gray.600' fontSize='sm'>
                        </Box>
                    </Box>
                    <Box display='flex' justifyContent={'center'}>
                        <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                        >
                        Data: {trip.date}  &bull; Duração: {trip.durationInDays} dias
                        </Box>
                    </Box>
                    </Box>
                
            </Box>
        )
    })


    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            {renderedTriplist}
        </Box>  
    )
}