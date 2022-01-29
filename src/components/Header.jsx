import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Circle, Stack, Flex, Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";

import React, { useState } from "react";

import img from "../assets/images/download.jpeg";

export const Header = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [Load, setLoad] = useState('off');
  const [ButtonValue, setButtonValue] = useState('Click This');

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Stack>
      {isNotSmallerScreen && (
        <Circle
          position="absolute"
          bg="blue.100"
          opacity="0.1"
          w="300px"
          h="300px"
          alignSelf="flex-end"
        />
      )}
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : 0}
        alignSelf="flex-start"
      >
        <Box mr={isNotSmallerScreen ? 40 : 0} mt={isNotSmallerScreen ? 0 : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Abdul Rahman
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            Full Stack Developer and A Student.
          </Text>
          <Button
		  	mt={8}
			colorScheme="#0974AF"
			borderColor='#0974AF'
			_hover={{backgroundColor:'#0974AF', color: "white"}}
			_active={{backgroundColor:'#0974AF', color: "white"}}
			_loading={{backgroundColor:'#0974AF', color: "white"}}
			variant='outline'
			isLoading={Load === 'off' ? false : true}
			onClick={() => {
			  setLoad('on');
			  setTimeout(() => {
				  setLoad('off');
				  setButtonValue('Nottu');
			  }, 2500);
		  	}}
		  >
			{ButtonValue}
		  </Button>
        </Box>
        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src={img}
          zIndex={1}
        />
      </Flex>
    </Stack>
  );
};
