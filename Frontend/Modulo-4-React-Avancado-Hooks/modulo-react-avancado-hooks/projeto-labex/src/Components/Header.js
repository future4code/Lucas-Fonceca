import { useHistory } from "react-router-dom";
import {
    Flex,
    Heading,
    Icon
} from '@chakra-ui/react'
import {SiStarship} from 'react-icons/si'


export function PagesHeader () {

    const history = useHistory();

    const goToHomePage = () => {
        history.push("/");
    };

    return(
        <Flex maxW='container.xl' 
            padding={8}
            justify={'flex-start'}>
            <Heading as='h1' size={'2xl'} onClick={goToHomePage} cursor={'pointer'}> 
                <Icon as={SiStarship} onClick={goToHomePage} cursor={'pointer'}/> 
                LabeX
            </Heading> 
        </Flex>
    )
}