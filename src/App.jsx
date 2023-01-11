import React from 'react';
import {
  Box,
  Text,
  Link,
  VStack,
  Grid,
  Avatar,
  Heading,
  Container,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import NotesApp from './components/NotesApp';
import SiteGrid from './components/SiteGrid';

function App() {
  return (
    <Box fontSize="xl">
      <Grid minH="20vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Avatar
            size="4xl"
            name="Mikey Villavicencio"
            src="https://avatars.githubusercontent.com/u/46366395?v=4"
          />
          <Heading>Mikey Villavicencio</Heading>
          <Link
            color="teal.500"
            href="https://github.com/mikikiv"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Find me online
          </Link>
          <Container>
            <Text>
              Software developer specializing in tests. But also can do a lot of
              this and that...
            </Text>
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
