import React from "react"
import { useHistory, useParams } from "react-router-dom";
import { Flex, Input, Button, Heading, Box, Icon, FormControl, FormLabel, Select, NumberInput, NumberDecrementStepper, NumberIncrementStepper, NumberInputField, NumberInputStepper, Textarea, useToast } from '@chakra-ui/react'
import {SiStarship} from 'react-icons/si'
import { PagesHeader } from "../../Components/Header";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../Utils/links";


function ApplicationFormPage() {

    const { id } = useParams;
    const { form, onChange, cleanFields } = useForm({name: "", age: "", applicationText: "", profession: "", country: "" });
    const history = useHistory();

    const onSubmitApplication = (event) => {
        event.preventDefault();

        cleanFields();

        axios.post(`${BASE_URL}/trips/${id}`, {
            ...form
        })
        .then(({data}) => {
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const goToTripsListPage = () => {
        history.push("/trips-list");
    };


    const toast = useToast()



    return (
        <div>
            {PagesHeader()}
            <form onSubmit={onSubmitApplication}>
            <Box align={'center'}>
            <FormControl isRequired>
                <FormLabel htmlFor='name' textAlign={'center'} >Nome Completo:</FormLabel>
                <Input 
                    id='name' 
                    type='name' 
                    w={'400px'} 
                    placeholder={'Nome Completo'}
                    name="name"
                    value={form.name}
                    onChange={onChange}
                />
                <FormLabel htmlFor='amount' textAlign={'center'}>Idade:</FormLabel>
                <Input
                    id='age' 
                    type='number' 
                    w={'400px'} 
                    placeholder={'Qual sua idade?'}
                    name="age"
                    value={form.age}
                    onChange={onChange}
                />
                <FormLabel htmlFor='email' textAlign={'center'}>Endereço de Email:</FormLabel>
                <Input 
                    id='email' 
                    type='email' 
                    w={'400px'} 
                    placeholder="nome@exemplo.com"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                />
                <FormLabel htmlFor='country' textAlign={'center'}>País de origem:</FormLabel>
                <Select 
                    id='country' 
                    placeholder='Selecione seu país de origem' 
                    w={'400px'}
                    name="country"
                    value={form.country}
                    onChange={onChange}
                    >
                    <option>Brasil</option>
                    <option>Noruega</option>
                    <option>Outros</option>
                </Select>
                <FormLabel htmlFor='profession' textAlign={'center'}>Profissão:</FormLabel>
                <Input 
                    id='profession' 
                    type='profession' 
                    w={'400px'} 
                    placeholder="Qual sua profissão?"
                    name="profession"
                    value={form.profession}
                    onChange={onChange}
                />
                <FormLabel htmlFor='applicationText' textAlign={'center'}>Texto de candidatura:</FormLabel>
                <Textarea 
                    placeholder='Conte para a gente o porquê você deve ser escolhide para essa viagem' 
                    w={'400px'} 
                    h={'150px'}
                    name="applicationText"
                    value={form.applicationText}
                    onChange={onChange}
                    />
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
                type="submit"
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
            </form>
        </div>
    )
}

export default ApplicationFormPage