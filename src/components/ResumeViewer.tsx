import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { FaFilePdf } from 'react-icons/fa';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { CloseIcon, DownloadIcon } from '@chakra-ui/icons';

const url = '/MikeyVillavicencio.pdf';

const ResumeViewer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        className="linkButton"
        mt={2}
        leftIcon={<FaFilePdf />}
        onClick={onOpen}
      >
        View Resume
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <HStack m={3} position="fixed" top={0} zIndex={10}>
              <Flex zIndex={10} onClick={onClose}>
                <Button
                  zIndex={10}
                  aria-label="close"
                  bg={'red.500'}
                  _hover={{ bg: 'red.600' }}
                  leftIcon={<CloseIcon />}
                >
                  Close
                </Button>
              </Flex>
              <Container right="0" zIndex={10}>
                <Button rightIcon={<DownloadIcon />}>
                  <a href={url} download={url}>
                    Download
                  </a>
                </Button>
              </Container>
            </HStack>
          </ModalHeader>
          <ModalBody>
            <Box className='resumeViewer'>
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl={url} />
              </Worker>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ResumeViewer;
