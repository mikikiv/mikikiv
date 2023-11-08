import React from 'react';
import {
  Image,
  Badge,
  Text,
  Box,
  LinkBox,
  VStack,
  Wrap,
  useColorModeValue,
} from '@chakra-ui/react';
import { LinkButton, LinkButtonProps } from './Buttons/LinkButton';

export type SiteCardProps = {
  id: number;
  name: string;
  links: LinkButtonProps[];
  desc: string;
  lang: string[];
  img: string;
  enabled?: boolean;
  [key: string]: any;
};

export const SiteCard = ({
  id,
  name,
  links,
  desc,
  lang,
  img,
  ...rest
}: SiteCardProps) => {
  return (
    <LinkBox as="article" {...rest}>
      <VStack
        bg={useColorModeValue('gray.100', 'gray.700')}
        p="5"
        borderWidth="1px"
        borderRadius="md"
        id={id.toString()}
        justify={'space-between'}
        {...rest}
      >
        <Box>
          <Image
            borderRadius="md"
            src={img}
            borderStyle={'solid'}
            borderWidth="1px"
          />
          <Text my={4} fontSize="xl" fontWeight="semibold" align={'center'}>
            {name}
          </Text>
          <Text mx={4} fontSize="md" align={'center'}>
            {desc}
          </Text>
        </Box>
        <Box>
          <Wrap className="links" justify={'center'}>
            {links.map(link => {
              return (
                <LinkButton
                  key={link.label}
                  href={link.href}
                  label={link.label}
                  overlay={!!link.overlay}
                  icon={link.icon && link.icon}
                />
              );
            })}
          </Wrap>
        </Box>

        {lang ? (
          <Wrap mt={2} mx={10} justify={'space-evenly'}>
            {lang.map(language => {
              return (
                <Badge fontSize={'xs'} px={2} colorScheme={'green'}>
                  {language}
                </Badge>
              );
            })}
          </Wrap>
        ) : null}
      </VStack>
    </LinkBox>
  );
};
