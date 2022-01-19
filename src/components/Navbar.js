import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';

const Navbar = () => {

  return (
    <Flex justify="space-between" align="center" py={8} borderBottom="1px" borderColor="gray.200">
      <Flex align="center" gap={7}>
        <Image src='/images/logo.svg' alt='Sneakers Logo' />
        
        <Flex justify="space-between" align="center" color="gray.500" gap={5} fontSize="15px">
          <Box>Collections</Box>
          <Box>Men</Box>
          <Box>Women</Box>
          <Box>About</Box>
          <Box>Contact</Box>
        </Flex>
      </Flex>

      <Flex align="center" gap="30px">
        <Image src="/images/icon-cart.svg" alt="" />
        <Image src="/images/image-avatar.png" alt="" borderRadius="50%" h="50px"/>
      </Flex>
    </Flex>
  );
};

export default Navbar;
