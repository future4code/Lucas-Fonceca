import { Flex, Spacer, Stack, InputGroup, InputLeftAddon, Input, Button, Heading, Text, Center } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

function HomePage() {

    
    return (
        <div>
            <Flex maxW='container.xl' padding={8}>
                <Heading as='h1' size={'2xl'}>LabeX</Heading>
                <Spacer />
                <Stack spacing={4}>
                    <InputGroup>
                        <InputLeftAddon children='Login:' />
                        <Input type='text' placeholder='Login' />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftAddon children='Senha:' />
                        <Input type={'password'} placeholder='Senha' />
                    </InputGroup>
                </Stack>
                <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                    Login
                </Button>
            </Flex>
            <Center>
                <Heading as='h2' size='lg'>Sobre a LabeX</Heading>
            </Center>
            <Flex textAlign={'center'}>
                <Text w={500}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia erat et ligula commodo, non gravida elit elementum. Donec euismod mi diam, quis auctor enim pretium sit amet. Curabitur pellentesque odio eu lectus tincidunt, vel mattis nunc suscipit. Sed faucibus leo nibh, vitae sodales massa pellentesque quis. Donec semper turpis leo, quis tempor risus luctus sit amet. Phasellus facilisis bibendum elit, vel hendrerit velit tristique nec. Morbi faucibus sed felis id gravida. Nullam diam erat, rhoncus id mattis at, faucibus quis arcu.</Text>
            </Flex>
        </div>
    )
}

export default HomePage