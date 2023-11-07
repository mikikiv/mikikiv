import React from 'react';
import {
  Link,
  Avatar,
  Heading,
  Container,
  HStack,
  Button,
  Text,
  Center,
  Flex,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import NotesApp from './components/NotesApp';
import SiteGrid from './components/SiteGrid';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiSubstack } from '@icons-pack/react-simple-icons';

function App() {
  const links = [
    {
      name: 'GitHub',
      url: 'https://github.com/mikikiv',
      icon: <FaGithub />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mikeyvillavicencio',
      icon: <FaLinkedin />,
    },
    {
      name: 'Substack',
      url: 'https://substack.com/@mikikiv',
      icon: <SiSubstack />,
    },
  ];

  return (
    <>
      <ColorModeSwitcher justifySelf="flex-end" pos={'fixed'} />
      <Container maxW={'container.xl'} w={'full'}>
        <Container maxW={'container.lg'} className="aboutSection">
          <Center>
            <Avatar
              size={'xl'}
              name="Mikey Villavicencio"
              src="https://avatars.githubusercontent.com/u/46366395?v=4"
            />
          </Center>
          <Heading size={'md'} textAlign={'center'}>
            {'Mikey Villavicencio'}
          </Heading>
          <Flex p={8} gap={8} className="bioAndLinks">
            <Text className="bio">
              {
                "I'm a software engineer specializing in testing and test automation. Sometimes, I work on the development of web applications and websites."
              }
            </Text>
            <HStack className="links">
              {links.map(link => (
                <Link
                  color={'teal.500'}
                  href={link.url}
                  fontSize="md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button leftIcon={link.icon}>{link.name}</Button>
                </Link>
              ))}
            </HStack>
          </Flex>
        </Container>
        <SiteGrid height={'full'} />
      </Container>
      <NotesApp />
    </>
  );
}

export default App;
