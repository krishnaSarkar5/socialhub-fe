import React from "react";
import PostView from "../../components/post/PostView";
import Navbar from "../../components/nav/Navbar";
import NewPost from "../../components/post/NewPost";
import { Box, Flex, HStack } from "@chakra-ui/react";
import OnlineFriendList from "../../components/friends/OnlineFriendList";
import PostSection from "./PostSection";
import Body from "./Body";

const Home = () => {
  return (
    <>
      <Navbar />
      <Body/>
      {/* <Flex>
        <Box w="80%">
          <NewPost />
          <PostView />
          <PostView />
          <PostView />
        </Box>
        <Box>
          <OnlineFriendList/>
        </Box>
      </Flex> */}
    </>
  );
};

export default Home;
