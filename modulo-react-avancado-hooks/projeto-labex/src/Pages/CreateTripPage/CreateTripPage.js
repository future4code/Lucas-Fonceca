import React, { useEffect } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Stack,
    Box,
    FormLabel,
    Input,
    Select,
    Textarea,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberDecrementStepper,
    NumberIncrementStepper,
    FormControl
  } from '@chakra-ui/react'
import {
    AddIcon
} from '@chakra-ui/icons'
import useForm from '../../hooks/useForm'
import axios from 'axios';
import { BASE_URL } from '../../Utils/links';
import { useParams } from 'react-router-dom';


  function CreateTripPage() {
    
    const { id } = useParams();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
    const { form, onChange, cleanFields } = useForm({name: "", planet: "", date: "", description: "", durationInDays: ""})

    const onSubmitCreateTrip = (event) => {
      event.preventDefault();
      cleanFields();

      axios.post(`${BASE_URL}/trips`, {
        ...form
      }, {
        headers: {
          auth: localStorage.getItem("token")
        }
      })
      .then(alert("Viagem criada com sucesso!"))
      .catch(err => console.log(err))
    }



  
    return (
      <>
        <Button leftIcon={<AddIcon />} colorScheme='teal' onClick={onOpen}>
          Criar nova viagem
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          initialFocusRef={firstField}
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
              Criar uma nova viagem
            </DrawerHeader>
  
            <form onSubmit={onSubmitCreateTrip}>
              <DrawerBody>
                <Stack spacing='24px'>
                <FormControl isRequired>
                  <Box>
                    <FormLabel htmlFor='name'>Nome</FormLabel>
                    <Input
                      ref={firstField}
                      id='name'
                      type={'name'}
                      placeholder='Digite o nome da viagem'
                      name='name'
                      value={form.name}
                      onChange={onChange}
                    />
                  </Box>
    
                  <Box>
                    <FormLabel htmlFor='days'>Tempo estimado de viagem (em dias)</FormLabel>
                    <Input
                    id='durationInDays' 
                    type='number' 
                    placeholder={'Tempo de viagem (em dias)'}
                    name="durationInDays"
                    value={form.durationInDays}
                    onChange={onChange}
                    />
                  </Box>

                  <Box>
                      <FormLabel htmlFor='date'>Data da viagem:</FormLabel>
                      <Input 
                      type={'date'}
                      id='date'
                      name='date'
                      value={form.date}
                      onChange={onChange}
                      ></Input>
                  </Box>
                  <Box>
                    <FormLabel htmlFor='planet'>Selecione o Planeta</FormLabel>
                    <Select 
                      id='planet'
                      placeholder='Planeta de destino'
                      name='planet'
                      value={form.planet}
                      onChange={onChange}
                      >
                      <option value='mercury'>Mercúrio</option>
                      <option value='venus'>Vênus</option>
                      <option value='earth'>Terra</option>
                      <option value='mars'>Marte</option>
                      <option value='jupiter'>Júpiter</option>
                      <option value='saturn'>Saturno</option>
                      <option value='uranus'>Urano</option>
                      <option value='neptune'>Netuno</option>
                      <option value='pluto'>Plutão</option>
                    </Select>
                  </Box>
    
                  <Box>
                    <FormLabel htmlFor='description'>Descrição</FormLabel>
                    <Textarea 
                      id='description' 
                      name='description'
                      value={form.description}
                      placeholder='Descrição da viagem'
                      onChange={onChange}
                      />
                  </Box>
                </FormControl>
                </Stack>
              </DrawerBody>
    
              <DrawerFooter borderTopWidth='1px'>
                <Button variant='outline' mr={3} onClick={onClose}>
                  Cancelar
                </Button>
                <Button colorScheme='blue' type='submit'>Criar</Button>
              </DrawerFooter>
            </form>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export default CreateTripPage