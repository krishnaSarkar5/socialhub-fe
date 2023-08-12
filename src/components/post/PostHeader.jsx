import React from 'react'
import { Stack, HStack, VStack, Box, Text,Image, Flex,Heading } from '@chakra-ui/react'
import Avtar from '../avtar/Avtar'

const PostHeader = () => {
    return (
        <HStack>
            {/* <Box >
                <Image
                borderRadius="50px"
                    boxSize='50px'
                    objectFit='cover'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                />
            </Box> */}
            <Avtar/>
            <VStack>
                <Box height={"100%"}>
                <Heading size='md'>Krishna Sarkar</Heading>
                    {/* <Text as='b'></Text> */}
                </Box>
                <Flex mt="-10px" width="100%" justifyContent="start">
                    <Box>5d</Box>
                    <Box ml="10%">Kolkata</Box>
                </Flex>
            </VStack>
        </HStack>

    )
}

export default PostHeader