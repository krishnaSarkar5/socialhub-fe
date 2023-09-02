import React from "react";
import { Box, Avatar, AvatarBadge, Flex, Text, Center ,useColorModeValue,} from "@chakra-ui/react";

const OnlineFriend = () => {
    const color = useColorModeValue('gray.100', 'gray.900');
  return (
    <Box cursor={"pointer"} _hover={{backgroundColor:color}} borderRadius={5}>
      <Flex p={2}>
        <Avatar src="https://bit.ly/dan-abramov">
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>
        <Center ml="15px">
          <Text fontSize={"15px"}>
            Krishna Sarkar
          </Text>
        </Center>
      </Flex>
    </Box>
  );
};

export default OnlineFriend;
