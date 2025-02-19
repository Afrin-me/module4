import React from 'react'
import { Button, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addApptodo } from '@/redux/actions/action';

export const TodoApp = () => {
  const [text, setText] = useState("")
    const dispatch = useDispatch()

    const handleClick= ()=>{
        
       const todoObj= {
        id:nanoid(),
        task: text,
        completed : false
       }
       dispatch(addApptodo(todoObj))
       setText("")
    }

  return (
    <>
      <HStack gap={4} m={5}>
        <Input
        p={4}
          type="text"
          placeholder='enter task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button color={"teal"} onClick={handleClick}>Add</Button>
      </HStack>
    </>
    )
    
  
}

export default TodoApp