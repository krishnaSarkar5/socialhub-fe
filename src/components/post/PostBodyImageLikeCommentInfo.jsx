import React from 'react'
import { Stack, HStack, VStack, Box, Text, Image, Flex, Center, Button, useColorModeValue,Grid, GridItem } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, StackDivider, Heading } from '@chakra-ui/react'
import PostHeader from './PostHeader'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';


const PostBodyImageLikeComment = () => {
  return (
    <Center h="5px">

                            <Flex w={"100%"} justifyContent={"space-around"}>
                                <Button colorScheme='none' color='gray' w={"100%"} _hover={{backgroundColor:useColorModeValue('gray.100', 'gray.800')} } ><ThumbUpOutlinedIcon /> <Text ml="10px">Like</Text></Button>
                                <Button colorScheme='none' color='gray' w={"100%"} _hover={{backgroundColor:useColorModeValue('gray.100', 'gray.800')}}><ModeCommentOutlinedIcon /> <Text ml="10px">Comment</Text></Button>
                            </Flex>
                        </Center>
  )
}

export default PostBodyImageLikeComment