import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { DiReact, DiNodejsSmall, DiAws } from "react-icons/di";

export const Profile = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box alignSelf="center" px="-24" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          3+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Years of Experience in Development
        </Text>
      </Box>
      <Box alignSelf="center" px={isNotSmallerScreen ? "44" : "0"} py="16">
        <Text fontWeight="bold" fontSize="2xl" pl={3}>
          Known Technologies
        </Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} px={isNotSmallerScreen ? "0" : "20"} mt={8}>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
			_hover={{ bg:"blue.400" }}
            h="30vh"
            w="30vh"
            justify="flex-end"
          >
            <Icon color="white" p="4" w="24" h="24" as={DiReact} />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              React
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            ml={isNotSmallerScreen ? 4 : 0}
            _hover={{ bg: "green.400" }}
          >
            <Icon color="black" p="4" w="24" h="24" as={DiNodejsSmall} />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Nodejs
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            ml={isNotSmallerScreen ? 4 : 0}
            _hover={{ bg: "yellow.400" }}
          >
            <Icon color="black" p="4" w="24" h="24" as={DiAws} />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              AWS
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};