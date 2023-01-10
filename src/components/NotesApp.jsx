import {
  Textarea,
  FormControl,
  Button,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Card,
  CardHeader,
  SimpleGrid,
  Center,
  HStack,
  Box,
  CardBody,
  Text,
  Show,
  Hide,
  CardFooter,
  Stack,
  Divider,
  Icon,
  IconButton,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import React from 'react';

function NotesApp() {
  let [value, setValue] = React.useState(localStorage.getItem('notes'));
  let handleInputChange = e => {
    let inputValue = e.target.value;
    setValue(inputValue);
    localStorage.setItem('notes', inputValue);
  };
  return (
    <Show above="sm">
      <Card maxW="md" variant={'elevated'}>
        <CardHeader>
          <Center>
            <HStack>
              <Box>Save a note for yourself</Box>
              <Box>
                <IconButton>
                  <CloseIcon />
                </IconButton>
              </Box>
            </HStack>
          </Center>
        </CardHeader>
        <Divider />
        <CardBody>
          <FormControl>
            <FormLabel>Notes</FormLabel>
            <Textarea
              height={'max-content'}
              value={value}
              onChange={handleInputChange}
              size="sm"
              variant={'filled'}
            />
            <FormHelperText fontSize={'xs'}>
              notes are not visible to anyone except anyone looking over your
              shoulder. data is stored in your local browser only. unless you
              send them to yourself with the button below...
            </FormHelperText>
            <Button mt={4}>Send to yourself</Button>
          </FormControl>
        </CardBody>
      </Card>
    </Show>
  );
}

export default NotesApp;
