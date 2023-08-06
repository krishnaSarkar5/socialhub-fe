import React from 'react'
import { Stack, HStack, VStack, Box, Text, Image, Flex, Center, Button, Grid, GridItem } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, StackDivider, Heading } from '@chakra-ui/react'
import PostHeader from './PostHeader'
import PostBodyImage from './PostBodyImage'
import PostBodyComment from './PostBodyComment'

const PostBody = () => {
    return (
        <>
          <PostBodyImage />
        <PostBodyComment />
                    
        </>
    )
}

export default PostBody