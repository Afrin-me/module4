import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <Box p={5} bg={"teal.400"}>
        <Flex justify={"space-between"}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/todo">Todo</NavLink>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar