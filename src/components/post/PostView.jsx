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
            <Card  mt={"2%"}>
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