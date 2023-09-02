import React from "react";
import PostView from "../../components/post/PostView";
import Navbar from "../../components/nav/Navbar";
import NewPost from "../../components/post/NewPost";
import { Box, Flex, HStack } from "@chakra-ui/react";
import OnlineFriendList from "../../components/friends/OnlineFriendList";
import { hideScrollBar } from "../../utils/CssUtils";

const PostSection = () => {
  return (
        <Box w="60%"  height={"760px"} overflowY={"scroll"} style={{scrollbarWidth:"100px"}} css={hideScrollBar}>
          <NewPost />
          <PostView />
          <PostView />
          <PostView />
        </Box>
        
  )
}

export default PostSection