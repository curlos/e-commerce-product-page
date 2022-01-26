import React, { useState } from 'react'
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Product from './components/Product';

const App = () => {

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])

  const handleAddToCart = (newItem) => {
    const newCart = [...cart, newItem]
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
  }

  const handleRemoveFromCart = (index) => {
    const newCart = cart.filter((item, i) => i !== index)
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
  }

  console.log(cart)

  return (
    <Box w="100vw" maxW="100%" minH="100vh" px={{ base: '10px', lg: '60px'}}>
      <Navbar cart={cart} handleRemoveFromCart={handleRemoveFromCart}/>
      <Product handleAddToCart={handleAddToCart} />
    </Box>
  );
}

export default App;
