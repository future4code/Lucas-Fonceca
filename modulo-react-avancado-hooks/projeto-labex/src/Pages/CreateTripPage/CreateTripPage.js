import React from 'react'
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
    NumberIncrementStepper
  } from '@chakra-ui/react'
import {
    AddIcon
} from '@chakra-ui/icons'


  function CreateTripPage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
  
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
  
            <DrawerBody>
              <Stack spacing='24px'>
                <Box>
                  <FormLabel htmlFor='name'>Nome</FormLabel>
                  <Input
                    ref={firstField}
                    id='username'
                    placeholder='Digite o nome da viagem'
                  />
                </Box>
  
                <Box>
                  <FormLabel htmlFor='days'>Tempo estimado de viagem (em dias)</FormLabel>
                  <NumberInput size='md' maxW={24} defaultValue={0} min={0}>
                    <NumberInputField />
                    <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                </Box>

                <Box>
                    <FormLabel htmlFor='date'>Data da viagem:</FormLabel>
                    <Input type={'date'}></Input>
                </Box>
                <Box>
                  <FormLabel htmlFor='planet'>Selecione o Planeta</FormLabel>
                  <Select id='owner' defaultValue='earth'>
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
                  <FormLabel htmlFor='desc'>Descrição</FormLabel>
                  <Textarea id='desc' />
                </Box>
              </Stack>
            </DrawerBody>
  
            <DrawerFooter borderTopWidth='1px'>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme='blue'>Criar</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export default CreateTripPage