import React from "react";
import {
  Stack,
  HStack,
  VStack,
  Box,
  Text,
  Image,
  Flex,
  Center,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  StackDivider,
  Heading,
} from "@chakra-ui/react";
import PostHeader from "./PostHeader";

const PostBodyImage = () => {
  return (
    <>
      <Box>
        <Center>
          <Image
            borderRadius="20px"
            objectFit="cover"
            src="https://www.wallpapers13.com/wp-content/uploads/2015/12/Green-leaf-with-water-droplets-HD-wallpaper-840x525.jpg"
            alt="Dan Abramov"
          />
        </Center>

        <Center mt={"2%"}>
          <Flex w={"90%"} justifyContent={"space-between"}>
            <Box>Like</Box>
            <Box>Comment</Box>
          </Flex>
        </Center>
      </Box>
    </>
  );
};

export default PostBodyImage;
