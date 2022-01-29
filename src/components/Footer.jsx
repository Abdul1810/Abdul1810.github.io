import React from "react";

import { Text, Flex, Box } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/icon";
import { Image } from "@chakra-ui/image";
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";

import { DiGithubFull as git } from "react-icons/di"

export const Footer = () => {
	const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")

	const { colorMode } = useColorMode();
  	const isDark = colorMode === "dark";

	return (
		<Flex
			direction="column"
			w="100%"
			// maxWidth={{ base: "50vh", md: "50vh", lg: "50vh", xl: "50vh" }}
		>
			<Box alignSelf="center">
				<Text color={isDark ? "gray.200" : "gray.500"}>
					Thanks For Visiting This Site.
				</Text>
			</Box>
			<Box alignSelf="center">
				<Flex
					rounded="xl"
					direction="row"
					mt={4}
					bg="blackAlpha.800"
					h={12}
					w="35vh"
					justify="center"
				>
					<Text color="white" mt={4} fontSize="sm" fontWeight="semibold">
						Deployed By
					</Text>
					<Icon color="white" ml={-3.5} mt={-6} mr={-3.5} p="5" w="24" h="24" as={git} />
					<Text color="white" mt={4} fontSize="sm" fontWeight="semibold">
						Pages
					</Text>
				</Flex>
			</Box>
		</Flex>
	)
}