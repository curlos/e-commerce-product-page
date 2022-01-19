import React from 'react';
import { 
  Box, 
  Flex, 
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'

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

      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton isActive={isOpen} as={Button} py="30px" bgColor="transparent" _focus={{ bgColor: "transparent" }} _active={{ bgColor: "transparent" }} _hover={{ bgColor: "transparent" }}>
              <Flex align="center" gap="30px">
                <Image src="/images/icon-cart.svg" alt="" color="blue" />
                <Box borderRadius="50%" border="2px" borderColor={isOpen ? 'orange.400' : 'transparent'}>
                  <Image src="/images/image-avatar.png" alt="" borderRadius="50%" h="50px" />
                </Box>
              </Flex>
            </MenuButton>
            <MenuList boxShadow="2xl" border="none" outline="none">
              
              <MenuItem>Cart Item</MenuItem>
            </MenuList>
          </>
        )}
      </Menu>

      
    </Flex>
  );
};

export default Navbar;
