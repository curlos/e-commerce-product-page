import React, { useState } from 'react';
import { 
  Box, 
  Text, 
  Flex, 
  Grid, 
  Image, 
  useDisclosure, 
  Button,  
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton 
} from '@chakra-ui/react';

const Carousel = ({ isOpen, onOpen, onClose, images }) => {

  const [num, setNum] = useState(0)
  const [selectedImage, setSelectedImage] = useState(Object.values(images)[0])

  console.log(images)

  return (
    <Box>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor="transparent" boxShadow="none">
          <ModalHeader bgColor="transparent" p="25px" borderRadius="15px" />
          <ModalCloseButton color="white" fontSize="20px" p="0px" ml="12px" />
          <Box p="0px" bgColor="red" borderRadius="15px">
            <Image src={'images/' + selectedImage} alt="" borderRadius="15px" cursor="pointer" bgColor="transparent" />
          </Box>

          <ModalFooter bgColor="transparent">
            <Grid gap="10px" w="100%" templateColumns="repeat(4, 1fr)" mt="0px" mx="10px">
              {Object.keys(images).map((imageSrc) => (
                <Box key={imageSrc} border={selectedImage === images[imageSrc] ? '2px' : '0px'} borderColor="orange.400" borderRadius="17px" bgColor="white">
                  <Image src={'images/' + imageSrc} alt="" borderRadius="15px" onClick={() => setSelectedImage(images[imageSrc])} cursor="pointer" opacity={selectedImage === images[imageSrc] ? '40%' : '100%'}/>
                </Box>
              ))}
            </Grid>
          </ModalFooter>
        </ModalContent>

        
      </Modal>
    </Box>
  );
};

export default Carousel;
