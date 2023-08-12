import React from 'react'
import { Stack, HStack, VStack, Box, Text, Image, Flex, Center, Button, useColorModeValue, Grid, GridItem } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, StackDivider, Heading } from '@chakra-ui/react'
import PostHeader from './PostHeader'

const PostBodyComment = () => {
    return (
        <>
            <Flex>
                <Box mt={0}>
                    <Image
                        borderRadius="50px"
                        boxSize='30px'
                        objectFit='cover'
                        src='https://bit.ly/dan-abramov'
                        alt='Dan Abramov'
                    />
                </Box>
                <Flex ml="1%" direction={"column"} bg={useColorModeValue('gray.100', 'gray.800')} borderRadius={"20px"} paddingLeft={"10px"} paddingRight={"30px"} paddingTop={"10px"}>
                    <Box height={"100%"} justifyContent={"start"} >

                        <Heading fontSize="15px" >Krishna Sarkar</Heading>
                        {/* <Text as='b'></Text> */}
                    </Box>
                    <Flex width="100%" justifyContent="start">
                        <Box ><Text fontSize="14px" pr="10px" pt="5px" pb="10px">Lorem ipsum dolorLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 😊😊😊</Text></Box>
                    </Flex>
                </Flex>
            </Flex>

        </>
    )
}

export default PostBodyComment