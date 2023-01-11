import React from 'react';
import { Center, Image, Flex, Badge, Text, Box, Link } from '@chakra-ui/react';

function SiteCard() {
  return (
    <Center mb={10}>
      <Box p="5" maxW="320px" borderWidth="1px" borderRadius="md">
        <Link as="Box">
          <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
          <Flex align="baseline" pt={2}>
            <Badge colorScheme="green">ReactJS</Badge>
          </Flex>
          <Text
            href="https://home.taylerandmikey.com/"
            isExternal
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="green.500"
          >
            home.taylerandmikey.com
          </Text>
        </Link>
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          Documentation site
        </Text>
        <Flex mt={2} align="center">
          <Text ml={1} fontSize="sm">
            Built with React components with
            {<Link href="https://docusaurus.io/"> Docusaurus</Link>}, A simple
            website about how a guest would watch my pets
          </Text>
        </Flex>
      </Box>
    </Center>
  );
}

export default SiteCard;
