import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Flex, 
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { ChevronDownIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

const CATEGORIES = ['Collections', 'Men', 'Women', 'About', 'Contact']

const Navbar = ({ cart, handleRemoveFromCart }) => {

  const { colorMode, toggleColorMode } = useColorMode()
  const blackWhiteColor = useColorModeValue('black', 'white')
  const categoryColor = useColorModeValue('gray.500', 'white')
  
  const getTotalPrice = (quantity, price) => {
    return quantity * price
  }

  return (
    <Flex justify="space-between" align="center" borderBottom="1px" borderColor="gray.200">
      <Flex align="center" gap={7}>
        <Image src='/images/logo.svg' alt='Sneakers Logo' cursor="pointer" color={blackWhiteColor}/>

        <Button onClick={toggleColorMode} bgColor="transparent">
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
        
        <Flex justify="space-between" align="center" color={categoryColor} gap={5} fontSize="15px">
          {CATEGORIES.map((category) => (
            <Box cursor="pointer" py={8} borderBottom="4px" borderColor="transparent" _hover={{ borderColor: "orange.400"}}>{category}</Box>
          ))}
        </Flex>
      </Flex>

      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton isActive={isOpen} as={Button} py="30px" bgColor="transparent" _focus={{ bgColor: "transparent" }} _active={{ bgColor: "transparent" }} _hover={{ bgColor: "transparent" }}>
              <Flex align="center" gap="30px">
                <Flex align="start">
                  <Image src="/images/icon-cart.svg" alt="" color="blue" />
                  {cart.length ? (
                    <Text fontSize="12px" color="white" bgColor="orange.400" borderRadius="5px" px="2px" ml="-12px" mt="-7px">{cart.length}</Text>
                  ) : null}
                </Flex>
                <Box borderRadius="50%" border="2px" borderColor={isOpen ? 'orange.400' : 'transparent'}>
                  <Image src="/images/image-avatar.png" alt="" borderRadius="50%" h="50px" />
                </Box>
              </Flex>
            </MenuButton>
            <MenuList boxShadow="2xl" border="none" outline="none" w="350px">

              <Box px="20px" py="10px" pb="20px" fontWeight="bold" borderBottom="1px" borderColor="gray.200">Cart</Box>
              
              {cart.length > 0 && cart.map((item, index) => {
                return (
                  <MenuItem d="flex" justifyContent="space-between" alignItems="center" px="20px">
                    <Flex align="center" gap="10px">
                      <Image src={Object.keys(item.images)[0]} alt={item.name} h="50px" borderRadius="5px"/>
                      <Box>
                        <Text color={categoryColor}>{item.name}</Text>
                        <Flex align="center" gap="8px" color={categoryColor}>
                          <Text>${item.onSalePrice}.00 x {item.quantity}</Text>
                          <Text color={blackWhiteColor} fontWeight="bold">${getTotalPrice(item.quantity, item.onSalePrice)}.00</Text>
                        </Flex>
                      </Box>
                    </Flex>

                    <Image src="images/icon-delete.svg" alt="Delete Icon" onClick={() => handleRemoveFromCart(index)} _hover={{ color: 'red' }}/>
                  </MenuItem>
                )
              })}

              {cart.length === 0 && (
                <Box>Your cart is empty.</Box>
              )}

              <Box p="20px">
                <Button bgColor="orange.400" color="white" w="100%" p="20px">Checkout</Button>
              </Box>
            </MenuList>
          </>
        )}
      </Menu>

      
    </Flex>
  );
};

export default Navbar;
