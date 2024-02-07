import {
  Box,
  Button,
  CloseButton,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import { Document, Page, pdfjs } from 'react-pdf';

const url = '/MikeyVillavicencio.pdf';

const ResumeViewer = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState<any>(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: any }) {
    setNumPages(numPages);
    setPageNumber(1);
    console.log(numPages, pageNumber);
  }

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
        <ModalContent height={800}>
          <ModalHeader>
            <Flex justifyContent={'space-evenly'} mb={3}>
              ResumeViewer
              <Button
                onClick={() => setPageNumber(pageNumber - 1)}
                isDisabled={pageNumber < numPages}
              >
                Previous Page
              </Button>
              <Button
                onClick={() => setPageNumber(pageNumber + 1)}
                isDisabled={pageNumber >= numPages}
              >
                Next Page
              </Button>
              <CloseButton
                float={'right'}
                onClick={onClose}
                aria-label="close"
                bg={'red.500'}
                _hover={{ bg: 'red.600' }}
              />
            </Flex>
          </ModalHeader>
          <ModalBody>
            <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
              <Box height={'90vh'} overflow={'scroll'} mx={'auto'}>
                <Page
                  width={1000}
                  height={10}
                  pageNumber={pageNumber}
                  pageIndex={pageNumber}
                />
              </Box>
            </Document>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ResumeViewer;
