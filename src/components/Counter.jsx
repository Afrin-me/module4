import { DEC_COUNT, INC_COUNT } from '@/redux/actions/action';
import { Box, Button } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {


  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.count)
  return (
    <>
      <Box>
        <h2>The Count : {count}</h2>
        <Button onClick={()=>dispatch({type:INC_COUNT})}>INC</Button>
        <Button onClick={()=>dispatch({type:DEC_COUNT})}>DEC</Button>
      </Box>
    </>
  );
}

export default Counter;