import {
  HStack,
  VStack,
  Button
  
  
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removetodo } from "@/redux/actions/action"; 

const TodoAppList = () => {
  const todos = useSelector((state) => state.todo.todos);
  console.log(todos, "from todolist");

  const dispatch = useDispatch();

  return (
    <VStack spacing={4} align="stretch">
      {todos.length ===0 ? (
        <h2>No Todos Yet!!!</h2>
      ) : (
        <ul>
          {todos.map((todo) => (
            <HStack key={todo.id} justify="space-between">
              <li>{todo.task}</li>
              <Button
                size="sm"
                colorScheme="red" 
                onClick={() => dispatch(removetodo(todo.id))} 
              >
                Delete
              </Button>
            </HStack>
          ))}
        </ul>
      )}
    </VStack>
  );
};

export default TodoAppList;
