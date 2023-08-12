import React from 'react'
import { Stack, HStack, VStack, Box, Text, Image, Flex, Center, Button, Grid, GridItem } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, StackDivider, Heading } from '@chakra-ui/react'
import PostHeader from './PostHeader'
import PostBodyImage from './PostBodyImage'

import PostBodyComment from './PostBodyComment'
import PostBodyImageLikeComment from './PostBodyImageLikeCommentInfo'

const PostView = () => {
    return (
        <>
            <Card w="50%" mt={"2%"} ml={"20%"}>
                <CardHeader>
                    <PostHeader />

                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <PostBodyImage/>
                       
                        <PostBodyImageLikeComment/>
                       

                        <PostBodyComment/>

                        


                    </Stack>
                </CardBody>
            </Card>

        </>
    )
}

export default PostView