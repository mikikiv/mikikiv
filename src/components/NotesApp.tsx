import {
  Textarea,
  FormControl,
  Button,
  FormLabel,
  Card,
  Text,
  CardBody,
  CardFooter,
  Show,
  Divider,
} from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';

function NotesApp() {
  const [value, setValue] = useState(localStorage.getItem('notes') || '');
  let [openNotes, setOpenNotes] = useState(false);

  let handleInputChange = (e: any) => {
    let inputValue = e.target.value;
    setValue(inputValue);
    localStorage.setItem('notes', inputValue);
  };
  const onOpenClose = () => {
    setOpenNotes(!openNotes);
  };

  const notesCardOpen = (
    <>
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
          {/* @todo maybe someday we make this send an email or text
           <Button mt={4} disabled>
            Send to yourself
          </Button> */}
        </FormControl>
      </CardBody>
      <CardFooter>
        <Text fontSize={'xs'} color={'silver'} maxW={'45ch'} margin={'auto'}>
          notes are not visible to anyone except anyone looking over your
          shoulder. data is stored in your local browser only
        </Text>
      </CardFooter>
    </>
  );
  return (
    <Show above="sm">
      <Card
        w="md"
        bottom="0"
        pos="fixed"
        zIndex={'overlay'}
        borderRadius={'lg'}
        border={'2px solid'}
        borderColor={'blue.200'}
      >
        {openNotes && notesCardOpen}
        <Button onClick={onOpenClose}>
          <Text p="2">Save a note for yourself</Text>
          {openNotes === true ? <TriangleDownIcon /> : <TriangleUpIcon />}
        </Button>
      </Card>
    </Show>
  );
}

export default NotesApp;
