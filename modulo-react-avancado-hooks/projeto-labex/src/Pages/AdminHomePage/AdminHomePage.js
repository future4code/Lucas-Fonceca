import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import axios from "axios"
import {
    Flex,
    Box,
    Text,
    Button,
    Grid,
    GridItem,
    IconButton,
    Tooltip
} from '@chakra-ui/react'
import { BASE_URL } from "../../Utils/links"
import { PagesHeader } from "../../Components/Header";
import CreateTripPage from "../CreateTripPage/CreateTripPage";
import { DeleteIcon } from "@chakra-ui/icons";


function AdminHomePage() {
    const history = useHistory();

    const goToHomePage = () => {
        history.push("/");
    };

    useEffect(() => {
        getTripsList()
    }, [`${BASE_URL}/trips`])  

    
    const [tripsState, setTripsState] = useState ([])

    const getTripsList = () => {
        axios.get(`${BASE_URL}/trips`)
        .then(res => setTripsState(res.data.trips))
        .catch(err => console.log(err))
    }

    const renderedTriplist = tripsState.map((trip) => {
        

        const key = (trip.id)
        
        const goToTripsDetailsPage = () => {
            localStorage.setItem("id", trip.id)
            history.push(`/admin/trips/${key}`)
        }

        const deleteTrip = () => {
            axios.delete(`${BASE_URL}/trips/${key}`, {
              headers: {
                auth: localStorage.getItem("token")
              }
            })
            .then(alert("Viagem deletada"))
            .catch(err => console.log(err))

            history.go(0)
          }

        return (
            <Flex justify={'space-around'}
            key={trip.id}>
                <Grid
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    border={'2px'} 
                    marginTop={'13px'}
                    padding={'13px'}
                    width={'500px'}
                    height={'100px'}
                    _hover={{bg: 'gray.800', color: 'white'}}
                    cursor={'pointer'}
                >
                    <GridItem 
                        colSpan={4}
                        onClick={goToTripsDetailsPage}

                        >
                        <Text fontWeight='bold'>
                        {trip.name}
                        </Text>
                    </GridItem>
                    <GridItem 
                        rowSpan={2} 
                        colSpan={1}
                        alignSelf={'center'}
                        >
                        <Tooltip label={'Deletar viagem'}>
                            <IconButton
                                colorScheme='red'
                                aria-label='Deletar viagem'
                                icon={<DeleteIcon />}
                                onClick={deleteTrip}
                            />
                        </Tooltip>
                    </GridItem>
                    <GridItem 
                        colSpan={4}
                        onClick={goToTripsDetailsPage}
                        >
                        <Text fontSize='sm'>{trip.description}</Text>
                    </GridItem>
                </Grid>
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