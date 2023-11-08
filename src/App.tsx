import React from 'react';
import {
  Avatar,
  Heading,
  Container,
  Text,
  Center,
  Box,
  SimpleGrid,
  Wrap,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import NotesApp from './components/NotesApp';
import SiteGrid from './components/SiteGrid';
import './App.css';
import { LinkButton } from './components/Buttons/LinkButton';

function App() {
  const links = [
    {
      name: 'GitHub',
      url: 'https://github.com/mikikiv',
      icon: 'FaGithub',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mikeyvillavicencio',
      icon: 'FaLinkedin',
    },
    {
      name: 'Substack',
      url: 'https://substack.com/@mikikiv',
      icon: 'SiSubstack',
    },
  ];

  return (
    <>
      <Box>
        <ColorModeSwitcher justifySelf="flex-end" pos={'fixed'} />
      </Box>
      <Container maxW={'container.xl'}>
        <Container className="aboutSection">
          <Center>
            <Avatar
              size={'2xl'}
              name="Mikey Villavicencio"
              src="https://avatars.githubusercontent.com/u/46366395?v=4"
            />
          </Center>
          <Heading
            size={'lg'}
            mt={4}
            textAlign={'center'}
            fontFamily={'JetBrainsMono'}
          >
            {'Mikey Villavicencio'}
          </Heading>
          <SimpleGrid
            p={6}
            gap={8}
            width={'full'}
            mx={'auto'}
            className="bioAndLinks"
          >
            <Text
              className="bio"
              style={{
                //@ts-ignore
                textWrap: 'balance',
              }}
              textAlign={'center'}
              fontSize={'md'}
            >
              {
                "I'm a software engineer specializing in testing and test automation. Sometimes, I work on the development of web applications and websites."
              }
            </Text>
            <Wrap className="links" justify={'center'}>
              {links.map(link => (
                <LinkButton
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={link.icon}
                  label={link.name}
                />
              ))}
            </Wrap>
          </SimpleGrid>
        </Container>
        <SiteGrid height="100%" />
      </Container>
      <NotesApp />
    </>
  );
}

export default App;
