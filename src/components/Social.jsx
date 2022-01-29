// import Icon from "@chakra-ui/icon";
import { IconButton } from '@chakra-ui/button'
import { HStack } from "@chakra-ui/layout";
import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

export const Social = () => {
  return (
    <HStack spacing={24}>
      <IconButton as={FaFacebookF} boxSize={50} />
      <IconButton as={FaYoutube} boxSize={50} />
      <IconButton as={FaInstagram} boxSize={50} />
      <IconButton as={FaTwitter} boxSize={50} />
    </HStack>
  );
};