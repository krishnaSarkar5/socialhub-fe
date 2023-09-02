import React from "react";
import { Box, Heading, VStack, Flex } from "@chakra-ui/react";
import OnlineFriend from "./OnlineFriend";
import { hideScrollBar } from "../../utils/CssUtils";

const OnlineFriendList = () => {
  return (
    <Box p={5}  w={"20%"}>
      <Heading p={2} fontSize={"25px"}>Online Friends</Heading>

      <Flex direction="column" height={"662px"} overflowY={"scroll"} css={hideScrollBar}>
        <OnlineFriend />
        <OnlineFriend />
        <OnlineFriend />
        <OnlineFriend />
        <OnlineFriend />
        <OnlineFriend />
        <OnlineFriend />
        <OnlineFriend />
        <OnlineFriend />
        <OnlineFriend />
        <OnlineFriend />
        <OnlineFriend />
        <OnlineFriend />
        <OnlineFriend />
        <OnlineFriend />
        <OnlineFriend />
        <OnlineFriend />
      </Flex>
    </Box>
  );
};

export default OnlineFriendList;
