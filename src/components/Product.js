import React, { useState } from 'react';
import { Box, Text, Flex, Grid, Image } from '@chakra-ui/react';

const images = {
  'image-product-1-thumbnail.jpg': 'image-product-1.jpg',
  'image-product-2-thumbnail.jpg': 'image-product-2.jpg',
  'image-product-3-thumbnail.jpg': 'image-product-3.jpg',
  'image-product-4-thumbnail.jpg': 'image-product-4.jpg'
}

const Product = () => {

  const [selectedImage, setSelectedImage] = useState(Object.values(images)[0])

  console.log(selectedImage)


  return (
    <Grid p="20px" pt="70px" templateColumns="2fr 3fr">
      <Box w="100%">
        <Image src={'images/' + selectedImage} alt="" borderRadius="15px"/>

        <Grid gap="10px" w="100%" templateColumns="repeat(4, 1fr)" mt="20px">
          {Object.keys(images).map((imageSrc) => (
            <Box border={selectedImage === images[imageSrc] ? '2px' : '0px'} borderColor="orange.400" borderRadius="17px">
              <Image src={'images/' + imageSrc} alt="" borderRadius="15px" onClick={() => setSelectedImage(images[imageSrc])} cursor="pointer" opacity={selectedImage === images[imageSrc] ? '40%' : '100%'}/>
            </Box>
          ))}
        </Grid>
      </Box>

      <Box p="20px" ps="50px">
        <Text color="orange.300" fontWeight="semibold" letterSpacing={1}>SNEAKER COMPANY</Text>

        <Text fontWeight="bold" fontSize="40px" lineHeight="42px">Fall Limited Edition Sneakers</Text>

        <Text color="gray.500" my="20px">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</Text>

        <Flex align="center" gap="10px">
          <Text fontWeight="bold" fontSize="26px">$125.00</Text>
          <Text fontWeight="bold" fontSize="16px" bgColor="orange.100" color="orange.400" borderRadius="5px" p="2px" px="10px">50%</Text>
        </Flex>

        <Text fontWeight="bold" fontSize="16px" color="gray.300" textDecoration={'line-through'}>$250.00</Text>

        <Grid templateColumns="2fr 3fr" gap="10px">
          <Flex justify="space-between" align="center" p="10px" bgColor="gray.100" borderRadius="10px">
            <Image src="images/icon-minus.svg" alt="" />
            <Text fontWeight="bold">0</Text>
            <Image src="images/icon-plus.svg" alt="" />
          </Flex>

          <Flex justify="center" align="center" gap="10px" bgColor="orange.400" color="white" borderRadius="10px" boxShadow="xl">
            <Image src="images/icon-cart.svg" alt="" filter="invert(100%) sepia(100%) saturate(2%) hue-rotate(72deg) brightness(106%) contrast(101%)"/>
            <Text fontWeight="bold" fontSize="14px">Add to cart</Text>
          </Flex>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Product;
