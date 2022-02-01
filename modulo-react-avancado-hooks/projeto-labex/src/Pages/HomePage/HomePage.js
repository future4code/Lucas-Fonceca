import React from 'react'
import { useHistory } from "react-router-dom";
import { 
    Flex, 
    Button, 
    Heading,  
    Center,
    Box 
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { LoginPopUp } from '../LoginPage/ModalLogin';
import { PagesHeader } from '../../Components/Header';


function HomePage() {

    const history = useHistory();

    const goToTripsListPage = () => {
        history.push("/trips-list");
    };

    return (
        <Box
        bgImage={"url('../images/542730.png')"}>
            {PagesHeader()}
            <Center>
                <Heading as='h2' size='lg'>Sobre a LabeX</Heading>
            </Center>
            <Flex justify={'center'}>
                <Flex 
                w={'500px'}
                marginTop={'4'}
                justify={'space-evenly'}>
                    <Button
                    textAlign={'center'}
                    onClick={goToTripsListPage}
                    rightIcon={<ArrowForwardIcon />}
                    >Descubra nossos destinos!</Button>
                    {LoginPopUp()}
                </Flex>
            </Flex>
        </Box>
    )
}

export default HomePage