import React from 'react'
import { useHistory } from "react-router-dom";
import { Flex, Spacer, Stack, InputGroup, InputLeftAddon, Input, Button, Heading, Text, Center, Link } from '@chakra-ui/react'
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
                marginTop={'4'}
                justifyItems={'center'}>
                    <Text w={500}
                    padding={4}> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia erat et ligula commodo, non gravida elit elementum. Donec euismod mi diam, quis auctor enim pretium sit amet. Curabitur pellentesque odio eu lectus tincidunt, vel mattis nunc suscipit. Sed faucibus leo nibh, vitae sodales massa pellentesque quis. Donec semper turpis leo, quis tempor risus luctus sit amet. Phasellus facilisis bibendum elit, vel hendrerit velit tristique nec. Morbi faucibus sed felis id gravida. {' '} <br/>
                        <Link 
                        href='#' 
                        color={'red'} 
                        textDecoration={'underline'} 
                        textAlign={'center'}
                        onClick={goToTripsListPage}
                        >Descubra nossos destinos!</Link>
                    </Text>
                </Flex>
            </Flex>
        </div>
    )
}

export default HomePage