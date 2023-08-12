import React from 'react'
import { Box } from '@chakra-ui/react'

const Badge = ({count}) => {
    return (
        <Box as="span" position="absolute" top="-5px" right="-5px">
            <Box
                as="span"
                position="absolute"
                top="0px"
                right="0px"
                width="20px"
                height="20px"
                backgroundColor="red.500"
                borderRadius="full"
                display="flex"
                justifyContent="center"
                alignItems="center"
                fontSize="12px"
                fontWeight="bold"
                color="white"
            >
                {count}
            </Box>
        </Box>
    )
}

export default Badge