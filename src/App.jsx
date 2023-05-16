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
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import NotesApp from './components/NotesApp';
import SiteGrid from './components/SiteGrid';

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
              <Link
                color="teal.500"
                href="https://github.com/mikikiv"
                fontSize="md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit my GitHub
              </Link>
            </VStack>
          </HStack>
          <Container fontSize={'md'} size={'sm'} h={'auto'}>
            Some of my projects...
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
