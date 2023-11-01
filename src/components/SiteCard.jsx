import React from 'react';
import {
  Image,
  Flex,
  Badge,
  Text,
  Box,
  LinkBox,
  HStack,
  Button,
  Link,
  LinkOverlay,
  VStack,
} from '@chakra-ui/react';
import { GoMarkGithub } from 'react-icons/go';

function SiteCard({ id, name, url, url2, desc, urlShort, urlShort2, lang, img, repo, ...rest }) {
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
    <LinkBox as="article" {...rest}>
      <Box
        maxW={'100%'}
        height={'100%'}
        p="5"
        borderWidth="1px"
        borderRadius="md"
        id={id}
      >
        <Image
          borderRadius="md"
          src={img}
          borderStyle={'solid'}
          borderWidth="1px"
        />
        <HStack width={'100%'} justifyContent={'space-between'}>
          <Box align="baseline" mt={2}>
            {langs}
          </Box>
          <Box pt={1}>
            <VStack>

            {repo && (
              <Link
              textTransform="lowercase"
              fontSize="xs"
              fontWeight="bold"
              color="green.500"
              mt={2}
              href={repo}
              isExternal
              >
                <Button variant={'solid'} leftIcon={<GoMarkGithub />} mr={1}>
                  OpenSource
                </Button>
              </Link>
            )}
            <LinkOverlay
              textTransform="lowercase"
              fontSize="xs"
              fontWeight="bold"
              color="green.500"
              mt={2}
              href={url}
              isExternal
              >
              <Button variant={'outline'}>{urlShort}</Button>
            </LinkOverlay>
            {url2 &&
              <Link
              textTransform="lowercase"
              fontSize="xs"
              fontWeight="bold"
              color="green.500"
              mt={2}
              href={url2}
              isExternal
              >
                <Button variant={'outline'}>{urlShort2}</Button>
              </Link>
            }
            </VStack>
          </Box>
        </HStack>
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
