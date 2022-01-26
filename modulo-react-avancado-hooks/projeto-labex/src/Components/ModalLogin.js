import React, { useState } from 'react'
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
import { BASE_URL } from '../Utils/links';


export function LoginPopUp() {
    const history = useHistory();

    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState("")

    const onChangeEmail = ({target}) => {
        setEmail(target.value);
    }

    const onChangePassword = ({target}) => {
        setPassword(target.value);
    }

    const onSubmitLogin = () => {
        axios.post(`${BASE_URL}/login`, {
            email,
            password
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
            <ModalBody pb={6}>
                <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input ref={initialRef} placeholder='E-mail' value={email} onChange={onChangeEmail}/>
                </FormControl>
    
                <FormControl mt={4}>
                <FormLabel>Senha</FormLabel>
                <Input placeholder='Senha' type='password' value={password} onChange={onChangePassword}/>
                </FormControl>
            </ModalBody>
    
            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onSubmitLogin}>
                Entrar
                </Button>
                <Button onClick={onClose}>Cancelar</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}