import React from 'react'
import { useHistory } from "react-router-dom";
import { Flex, Spacer, Stack, InputGroup, InputLeftAddon, Input, Button, Heading, Text, Center, Link, useToast } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'


function HomePage() {

    const history = useHistory();

    const goToTripsListPage = () => {
        history.push("/trips-list");
    };
    
    const goToAdminPage = () => {
        history.push("/admin");
    };


    return (
        <div>
            <Flex maxW='container.xl' 
            padding={8}
            align={'center'}
            justify={'space-evenly'}>
                <Heading as='h1' size={'2xl'}>LabeX</Heading>
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
            <Center>
                <Heading as='h2' size='lg'>Sobre a LabeX</Heading>
            </Center>
            <Flex justify={'center'}>
                <Flex 
                border={'2px'}
                borderColor={'gray.300'}
                w={'500px'}
                marginTop={'4'}>
                    <Text w={500}
                    padding={4}> 
                        Somos uma empresa focada em viagens interplanetárias<br/>
                        <Button
                        textAlign={'center'}
                        onClick={goToTripsListPage}
                        rightIcon={<ArrowForwardIcon />}
                        >Descubra nossos destinos!</Button>
                    </Text>
                </Flex>
            </Flex>
        </div>
    )
}

export default HomePage