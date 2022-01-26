import React, { useEffect, useState } from 'react';
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
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

const Carousel = ({ isOpen, onOpen, onClose, images }) => {

  const [num, setNum] = useState(0)
  const [selectedImage, setSelectedImage] = useState(Object.values(images)[0])

  useEffect(() => {
    const imageSrc = Object.keys(images)[num]
    setSelectedImage(images[imageSrc])
  }, [num])

  const handlePrev = () => {
    if (num > 0) {
      setNum(num - 1)
    } else {
      setNum(Object.keys(images).length - 1)
    }
  }

  const handleNext = () => {
    if (num < Object.keys(images).length - 1) {
      setNum(num + 1)
    } else {
      setNum(0)
    }
  }

  console.log(images)

  return (
    <Box>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor="transparent" boxShadow="none">
          <ModalHeader bgColor="transparent" p="25px" borderRadius="15px" />
          <ModalCloseButton color="white" fontSize="20px" p="0px" ml="12px" />
          <Box p="0px" borderRadius="15px" position="relative" width="100%">
            <Image src={selectedImage} alt="" borderRadius="15px" cursor="pointer" bgColor="transparent" width="100%" />

            <Flex justify="space-between" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" width="110%">
              <Flex p="10px" borderRadius="50%" bgColor="white" onClick={handlePrev}> 
                <ChevronLeftIcon h="30px" w="30px" color="w" cursor="pointer" />
              </Flex>

              <Flex p="10px" borderRadius="50%" bgColor="white" onClick={handleNext}> 
                <ChevronRightIcon h="30px" w="30px" color="w" cursor="pointer" />
              </Flex>
            </Flex>
          </Box>

          <ModalFooter bgColor="transparent">
            <Grid gap="10px" w="100%" templateColumns="repeat(4, 1fr)" mt="0px" mx="10px">
              {Object.keys(images).map((imageSrc, i) => (
                <Box key={imageSrc} border={selectedImage === images[imageSrc] ? '2px' : '0px'} borderColor="orange.400" borderRadius="15px" bgColor="white">
                  <Image src={imageSrc} alt="" borderRadius="15px" onClick={() => setNum(i)} cursor="pointer" opacity={selectedImage === images[imageSrc] ? '40%' : '100%'}/>
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
