import { addtodo } from '@/redux/actions/action'
import { Button, HStack, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'

const TodoForm = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()

    const handleClick= ()=>{
       const todoObj= {
        id:nanoid(),
        task: text,
        completed : false
       }
       dispatch(addtodo(todoObj))
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
  );
}

export default TodoForm