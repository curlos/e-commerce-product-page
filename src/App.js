import React, { useState } from 'react'
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Product from './components/Product';

const App = () => {
  return (
    <Box w="100vw" maxW="100%" minH="100vh" px='60px'>
      <Navbar />
      <Product />
    </Box>
  );
}

export default App;
