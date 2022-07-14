import React, { useState } from 'react'
import  useForm  from '../../hooks/useForm'
import { useHistory } from "react-router-dom";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Button,
    useDisclosure
  } from '@chakra-ui/react'
import { LockIcon } from '@chakra-ui/icons'
import axios from 'axios';
import { BASE_URL } from '../../Utils/links';


export function LoginPopUp() {

    const { form, onChange, cleanFields } = useForm({ email: "", password: ""});
    const history = useHistory()
    
    
    const onSubmitLogin = (event) => {
        event.preventDefault();

        cleanFields();

        axios.post(`${BASE_URL}/login`, {
            ...form
        })
        .then(({data}) => {
            localStorage.setItem("token", data.token)
            history.push('/admin')
        })
        .catch((error) => {
            console.log(error);
        })
          
    }


    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const initialRef = React.useRef()
    return (
        <>
        <Button onClick={onOpen} rightIcon={<LockIcon />}>Área Administrativa</Button>
    
        <Modal
            initialFocusRef={initialRef}
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Login</ModalHeader>
            <ModalCloseButton />
            <form onSubmit={onSubmitLogin}>
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>E-mail</FormLabel>
                        <Input 
                            ref={initialRef} 
                            name={'email'} 
                            type={'email'}
                            placeholder='E-mail' 
                            value={form.email} 
                            onChange={onChange}/>
                        </FormControl>
            
                        <FormControl mt={4}>
                        <FormLabel>Senha</FormLabel>
                        <Input 
                            name={'password'}
                            placeholder='Senha' 
                            type='password' 
                            value={form.password} 
                            onChange={onChange}/>
                    </FormControl>
                </ModalBody>
        
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} type='submit'>
                    Entrar
                    </Button>
                    <Button onClick={onClose}>Cancelar</Button>
                </ModalFooter>
            </form>
            </ModalContent>
        </Modal>
        </>
    )
}