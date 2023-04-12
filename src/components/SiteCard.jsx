import React from 'react';
import {
  Image,
  Flex,
  Badge,
  Text,
  Box,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';

function SiteCard({ id, name, url, desc, urlShort, lang, img, ...rest }) {
  // Deal with multiple languages
  let langs = [];
  for (let i = 0; i < lang.length; i++) {
    langs.push(
      <Badge id={i} fontSize="xs" mr={1} colorScheme="green">
        {lang[i]}
      </Badge>
    );
  }

  return (
    <LinkBox {...rest} as="article">
      <Box height={'100%'} p="5" borderWidth="1px" borderRadius="md" id={id}>
        <Image
          borderRadius="md"
          src={img}
          borderStyle={'solid'}
          borderWidth="1px"
        />
        <Flex align="baseline" mt={2}>
          {langs}

          <LinkOverlay
            textTransform="lowercase"
            fontSize="xs"
            fontWeight="bold"
            color="green.500"
            mt={2}
            ml={2}
            href={url}
            isExternal
          >
            {urlShort}
          </LinkOverlay>
        </Flex>
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          {name}
        </Text>
        <Flex mt={2} align="center">
          <Text ml={1} fontSize="sm">
            {desc}
          </Text>
        </Flex>
      </Box>
    </LinkBox>
  );
}

export default SiteCard;
