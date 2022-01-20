import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import {axios} from 'axios'
import { BASE_URL } from "../Links/links";

export default function CardTrip(props) {

    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Box p='6'>
            <Box display='flex' alignItems='baseline'>
                <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                ml='2'
                >
                Data: DD/MM/AAAA  &bull; Duração: XX dias
                </Box>
            </Box>
    
            <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                isTruncated
            >
                NOME DA VIAGEM
            </Box>
    
            <Box>
                PEQUENO TEXTO DESCRITIVO SOBRE A VIAGEM
                <Box as='span' color='gray.600' fontSize='sm'>
                </Box>
            </Box>
            </Box>
        </Box>  
    )
}