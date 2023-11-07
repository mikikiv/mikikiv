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

export type SiteCardProps = {
  id: number;
  name: string;
  url: string;
  url2?: string;
  desc: string;
  urlShort: string;
  urlShort2?: string;
  lang: string[];
  img: string;
  repo?: string;
  enabled?: boolean;
  [key: string]: any;
};

export function SiteCard({
  id,
  name,
  url,
  url2,
  desc,
  urlShort,
  urlShort2,
  lang,
  img,
  repo,
  ...rest
}: SiteCardProps) {
  const LanguageBadge = (languages: String[]): React.ReactNode => {
    return languages.map(language => {
      return (
        <Badge fontSize={'xs'} mr={1} colorScheme={'green'}>
          {language as String}
        </Badge>
      );
    });
  };

  return (
    <LinkBox as="article" {...rest}>
      <Box
        p="5"
        borderWidth="1px"
        borderRadius="md"
        id={id.toString()}
        {...rest}
      >
        <Image
          borderRadius="md"
          src={img}
          borderStyle={'solid'}
          borderWidth="1px"
        />
        <HStack width={'100%'} justifyContent={'space-between'}>
          <VStack align="left" spacing={1}>
            <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
              {name}
            </Text>
            <Flex mt={2} align="center">
              <Text mx={2} fontSize="sm">
                {desc}
              </Text>
            </Flex>
          </VStack>
          <Box>
            <VStack className="links">
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
              {url2 && (
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
              )}
            </VStack>
          </Box>
        </HStack>
        {lang ? <Box mt={2}>{LanguageBadge(lang)}</Box> : null}
      </Box>
    </LinkBox>
  );
}
