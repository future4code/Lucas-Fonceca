import React from 'react'
import { useHistory } from "react-router-dom";
import { 
    Flex,
    Button, 
    Box, 
    Grid, 
    GridItem 
} from '@chakra-ui/react'
import  CardTrip  from '../../Components/CardTrip';
import { PagesHeader } from '../../Components/Header';



function TripsListPage() {
    const history = useHistory();

    const goToApplicationFormPage = () => {
        history.push("/trips-list/application-form")
    }

    const goToHomePage = () => {
        history.push("/");
    };
    
    return (
        <div>
            {PagesHeader()}
            <Box align={'center'}>
                <Flex justify={'space-around'}>
                    <Grid templateColumns='repeat(1, 1fr)' gap={10} align={'center'} justify={'space-around'}>
                        <GridItem boxShadow='md' 
                            p='6' 
                            rounded='md' 
                            w={'fit-content'} 
                            bg={'gray.50'} 
                            >
                            <CardTrip />
                        </GridItem>
                    </Grid>
                </Flex>
                <Button  
                    colorScheme='teal' 
                    variant='outline' 
                    margin={2}
                    marginTop={8}
                    onClick={goToHomePage}
                    >
                        Voltar
                </Button>
                <Button  
                    colorScheme='teal' 
                    variant='outline' 
                    margin={2}
                    marginTop={8}
                    onClick={goToApplicationFormPage}
                    >
                        Inscreva-se
                </Button>
            </Box>
            
        </div>
    )
}

export default TripsListPage