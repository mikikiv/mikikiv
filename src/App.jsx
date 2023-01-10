import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Grid,
  theme,
  Avatar,
  Heading,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import NotesApp from './components/NotesApp';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
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
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis veritatis maiores aliquid voluptates dolores harum!
              Accusamus quisquam nihil odit fugit. Architecto vel nobis delectus
              quos esse veritatis explicabo, quidem earum.
            </Text>
          </VStack>
          <NotesApp />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
