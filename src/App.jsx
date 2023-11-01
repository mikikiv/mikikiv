import React from 'react';
import {
  Box,
  Link,
  VStack,
  Grid,
  Avatar,
  Heading,
  Container,
  HStack,
  Button,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import NotesApp from './components/NotesApp';
import SiteGrid from './components/SiteGrid';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiSubstack } from '@icons-pack/react-simple-icons';


function App() {
  return (
    <Box fontSize="xl">
      <Grid minH="20vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" pos={'fixed'} />
        <VStack spacing={8}>
          <HStack alignItems={'flex-end'}>
            <Avatar
              size="xl"
              name="Mikey Villavicencio"
              src="https://avatars.githubusercontent.com/u/46366395?v=4"
            />
            <VStack alignItems={'left'}>
              <Heading size={'md'}>Mikey Villavicencio</Heading>
              <HStack>
              <Link
                color="teal.500"
                href="https://github.com/mikikiv"
                fontSize="md"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <Button leftIcon={<FaGithub />}>
                    GitHub
                  </Button>
                </Link>
              <Link
                color="teal.500"
                href="https://www.linkedin.com/in/mikeyvillavicencio"
                fontSize="md"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <Button leftIcon={<FaLinkedin />}>LinkedIn</Button>
                </Link>
              <Link
                color="teal.500"
                href="https://substack.com/@mikikiv"
                fontSize="md"
                target="_blank"
                >
                  <Button leftIcon={<SiSubstack />}>
                    Substack
                  </Button>
              </Link>
              </HStack>
            </VStack>
          </HStack>
          <Container fontSize={'md'} size={'sm'} h={'auto'}>
            I'm a software engineer specializing in testing and test automation. Sometimes, I work on the development of web applications and websites.
          </Container>
        </VStack>
      </Grid>
      <Container>
        <SiteGrid />
      </Container>
      <NotesApp />
    </Box>
  );
}

export default App;
