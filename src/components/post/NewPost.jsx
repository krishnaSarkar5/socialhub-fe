import React from 'react'
import {
    Box,
    Flex,
    Avatar,
    Text,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
    Stack,
    useColorMode,
    Card, CardHeader, CardBody, CardFooter, StackDivider, Heading, Input
} from '@chakra-ui/react'
import Avtar from '../avtar/Avtar'
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import AppModal from '../modal/AppModal';
import { useDisclosure } from '@chakra-ui/react';

const NewPost = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <>
        <AppModal isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
            <Card w="50%" mt={"5%"} ml={"20%"}>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Flex>
                                <Avtar />
                                <Box onClick={onOpen} w="100%" ml="10px" variant='Unstyled' bg={useColorModeValue('gray.100', '#3B3B3B')} borderRadius={"50px"} cursor={"pointer"} ><Text p="10px" fontSize={"20px"} color={"gray.500"}>whats's on your mind?</Text></Box>
                            </Flex>

                        </Box>
                        <Box>
                            <Flex>
                                <Button onClick={onOpen} colorScheme='none' color='gray' w={"100%"} _hover={{ backgroundColor: useColorModeValue('gray.100', 'gray.800') }}><PostAddOutlinedIcon style={{ color: "orange" }} /><Text ml="10px">Post</Text></Button>
                                <Button onClick={onOpen} colorScheme='none' color='gray' w={"100%"} _hover={{ backgroundColor: useColorModeValue('gray.100', 'gray.800') }}><PhotoOutlinedIcon style={{ color: "green" }} /><Text ml="10px">Photo</Text></Button>
                            </Flex>

                        </Box>

                    </Stack>
                </CardBody>
            </Card>
        </>
    )
}

export default NewPost