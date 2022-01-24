import React from 'react'
import { useHistory } from "react-router-dom";
import { Flex, Spacer, Stack, InputGroup, InputLeftAddon, Input, Button, Heading, Box, Icon, Grid, GridItem } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import  CardTrip  from '../../Components/CardTrip';
import {SiStarship} from 'react-icons/si'



function TripsListPage() {
    const history = useHistory();

    const goToAdminPage = () => {
        history.push("/admin");
    };

    const goToApplicationFormPage = () => {
        history.push("/trips-list/application-form")
    }

    const goToHomePage = () => {
        history.push("/");
    };
    
    return (
        <div>
            <Flex maxW='container.xl' 
            padding={8}
            align={'center'}
            justify={'space-evenly'}>
                <Heading as='h1' size={'2xl'} onClick={goToHomePage} cursor={'pointer'}> 
                <Icon as={SiStarship} onClick={goToHomePage} cursor={'pointer'}/> 
                LabeX
                </Heading>
                <Spacer />
                <Stack spacing={4} justifySelf={'flex-end'}>
                    <InputGroup>
                        <InputLeftAddon children='Login:' />
                        <Input type='text' placeholder='Login' />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftAddon children='Senha:' />
                        <Input type={'password'} placeholder='Senha' />
                    </InputGroup>
                </Stack>
                <Button 
                rightIcon={<ArrowForwardIcon />} 
                colorScheme='teal' 
                variant='outline' 
                margin={2}
                onClick={goToAdminPage}
                >
                    Login
                </Button>
            </Flex>
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