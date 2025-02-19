import { edittodo, removetodo } from "@/redux/actions/action";
import { Box, VStack, Text, HStack, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import {FaTrash}

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  console.log(todos, "this from todolist");
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [newText, setNewText] = useState("");

  const handleEdit = (id, preText) => {
    setEditId(id);
    setNewText(preText);
  };

  const handleSave = (id) => {
    dispatch(edittodo(id, newText));
    setEditId(null);
    //   console.log(setEditId)
  };

  return (
    <div>
      TodoList
      <VStack>
        {todos.length === 0 ? (
          <Text>No Todos Yet!!!</Text>
        ) : (
          todos.map((todo) => {
            return (
              <HStack key={todo.id}>
                {editId === todo.id ? (
                  <>
                    <Input
                      value={newText}
                      onChange={(e) => setNewText(e.target.value)}
                    />
                    <Button onClick={() => handleSave(todo.id)}>Save</Button>
                  </>
                ) : (
                  <>
                    <Text>{todo.task}</Text>
                    <Button
                      colorPalette={"yellow"}
                      size={"sm"}
                      onClick={() => handleEdit(todo.id, todo.task)}
                    >
                      Edit
                    </Button>
                  </>
                )}

                <Button
                  size={"sm"}
                  colorPalette={"red"}
                  onClick={() => dispatch(removetodo(todo.id))}
                >
                  Delete
                </Button>
              </HStack>
            );
          })
        )}
      </VStack>
    </div>
  );
};

export default TodoList;
