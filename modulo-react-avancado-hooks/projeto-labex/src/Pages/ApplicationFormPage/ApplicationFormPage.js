import React from "react"
import { useHistory } from "react-router-dom";
import { Flex, Input, Button, Heading, Box, Icon, FormControl, FormLabel, Select, NumberInput, NumberDecrementStepper, NumberIncrementStepper, NumberInputField, NumberInputStepper, Textarea, useToast } from '@chakra-ui/react'
import {SiStarship} from 'react-icons/si'
import { PagesHeader } from "../../Components/Header";


function ApplicationFormPage() {
    const history = useHistory();

    const goToTripsListPage = () => {
        history.push("/trips-list");
    };

    const goToHomePage = () => {
        history.push("/");
    };

    const toast = useToast()


    return (
        <div>
            {PagesHeader()}
            <Box align={'center'}>
            <FormControl isRequired>
                <FormLabel htmlFor='name' textAlign={'center'} >Nome Completo:</FormLabel>
                <Input id='name' type='name' w={'400px'} placeholder={'Nome Completo'}/>
                <FormLabel htmlFor='amount' textAlign={'center'}>Idade:</FormLabel>
                <NumberInput max={50} min={0} w={'400px'}>
                    <NumberInputField id='amount' />
                    <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <FormLabel htmlFor='email' textAlign={'center'}>Endereço de Email:</FormLabel>
                <Input id='email' type='email' w={'400px'} placeholder="email@email.com"/>
                <FormLabel htmlFor='country' textAlign={'center'}>País de origem:</FormLabel>
                <Select id='country' placeholder='Selecione seu país de origem' w={'400px'}>
                    <option>Brasil</option>
                    <option>Noruega</option>
                    <option>Outros</option>
                </Select>
                <FormLabel htmlFor='profession' textAlign={'center'}>Profissão:</FormLabel>
                <Input id='profession' type='profession' w={'400px'} placeholder="Qual sua profissão?"/>
                <FormLabel htmlFor='application-text' textAlign={'center'}>Texto de candidatura:</FormLabel>
                <Textarea placeholder='Conte para a gente o porquê você deve ser escolhide para essa viagem' w={'400px'} h={'150px'}/>
            </FormControl>
            <Button  
                colorScheme='teal' 
                variant='outline' 
                margin={2}
                marginTop={8}
                onClick={goToTripsListPage}
                >
                    Voltar
            </Button>
            <Button  
                colorScheme='teal' 
                variant='outline' 
                margin={2}
                marginTop={8}
                onClick={() =>
                    toast({
                    title: 'Formulário enviado. Boa sorte!',
                    description: "Seu formulário de inscrição foi enviado. Agora é só aguardar.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                    })}
                >
                    Enviar
            </Button>
            </Box>
            
        </div>
    )
}

export default ApplicationFormPage