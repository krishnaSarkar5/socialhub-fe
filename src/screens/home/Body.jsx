import React from "react";
import PostView from "../../components/post/PostView";
import Navbar from "../../components/nav/Navbar";
import NewPost from "../../components/post/NewPost";
import { Box, Flex, Grid, GridItem, HStack ,} from "@chakra-ui/react";
import OnlineFriendList from "../../components/friends/OnlineFriendList";
import PostSection from "./PostSection";

const Body = () => {
  return (
      <Flex  mt={16}>
    
        <OnlineFriendList />
   
  
        <PostSection />
 
 
        <OnlineFriendList />
      
      </Flex>
  );
};

export default Body;
