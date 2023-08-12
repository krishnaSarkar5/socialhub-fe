import React from 'react'
import { Box,Image } from '@chakra-ui/react'

const Avtar = () => {
    return (
        <Box >
            <Image
                borderRadius="50px"
                boxSize='50px'
                objectFit='cover'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
            />
        </Box>
    )
}

export default Avtar