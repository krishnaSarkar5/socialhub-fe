import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,Text, Box,Flex,Textarea, border
} from '@chakra-ui/react'
import Avtar from '../avtar/Avtar'

export default function AppModal({isOpen, onOpen, onClose}) {

    const onSubmitHandler = ()=>{
      onClose();
    }
   
    return (
      <>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader ><Text style={{textAlign:"center"}}>Create Post</Text></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box mb="10px">
                <Flex>
                  <Avtar/>
                  <Box ml="10px" pt="10px"><Text fontWeight={"bold"}>Krishna Sarkar </Text></Box>
                </Flex>
              </Box>
              <Textarea placeholder="What's on your mind?" border={"none"} />
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onSubmitHandler} width={"100%"}>
                Post
              </Button>
              {/* <Button variant='ghost'>Secondary Action</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }