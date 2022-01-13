import { Box, Avatar, Text, Badge, Flex } from '@chakra-ui/react'

const MatchesInfoComponent = (props) => {
    return <Flex padding={2} border='1px' borderColor='gray.200' _hover={{ bg: 'gray.400' }}>
    <Avatar src={props.badge} alignSelf={'center'}/>
    <Box ml='3'>
        <Text fontWeight='bold' textAlign={'left'}>
        {props.name}
        <Badge ml='1' colorScheme='green'>
            Match
        </Badge>
        </Text>
        <Text fontSize='sm' textAlign={'left'}>{props.bio}</Text>
    </Box>
</Flex>
}

export default MatchesInfoComponent