import React from "react";
import {
	IoSunny,
	IoMoon
} from 'react-icons/io5'
import {
  FaInstagram,
  FaGithub,
  FaDiscord
} from "react-icons/fa";

import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";

// import { useMediaQuery } from "@chakra-ui/media-query";

import './App.css'

import components from "./components";
const { Header, Profile, Footer } = components;

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
	<VStack p="5">
	  <Flex w="100%">
		<Heading ml="8" size="lg" fontWeight="semibold" color="cyan.400">
		  Abdul Rahman
		</Heading>
		<IconButton
		  ml={5}
		  icon={isDark ? <IoSunny /> : <IoMoon />}
		  bgColor="transparent"
		  onClick={toggleColorMode}
		></IconButton>
		<Spacer />
		<IconButton
			size="md"
			icon={<FaDiscord />}
			isRound="true"
			_hover={{
				bg: "#BBC9D0",
				color: "black",
			}}
			onClick={() =>
				window.open("https://discord.com/users/737553088218529813")
			}
		></IconButton>
		<IconButton
			ml={3}
			icon={<FaInstagram />}
			isRound="true"
			_hover={{
				bg: "#BBC9D0",
				color: "black",
			}}
			onClick={() =>
				window.open("https://www.instagram.com/abdul.rahman.007/")
			}
		></IconButton>
		<IconButton
			ml={3}
			icon={<FaGithub />}
			isRound="true"
			_hover={{
				bg: "#BBC9D0",
				color: "black",
			}}
			onClick={() => window.open("https://github.com/Abdul1810")}
		></IconButton>
	  </Flex>
	  <Header />
	  {/* <Social /> */}
	  <Profile />
	  <Footer />
	</VStack>
  );
};

export default App;
