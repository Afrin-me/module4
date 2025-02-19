
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const EDIT_TODO = "EDIT_TODO";

//counter action
export const INC_COUNT = "INC_COUNT";
export const DEC_COUNT = "DEC_COUNT";


//action creators
export const addtodo = (todoObj) => {
  console.log("addtodo is called when add btn clicked");
  return {
    type: ADD_TODO,
    payload: todoObj,
  };
};

export const removetodo = (id)=>{
    console.log(id, "from remove fn")
    return {
      type: REMOVE_TODO,
      payload: id
      
    };
}

export const edittodo = (id, newTask)=>{
    return {
      type: EDIT_TODO,
      payload : {id, task: newTask}
    };
}

export const addApptodo = (todoObj) => {
  console.log("addtodo is called when add btn clicked");
  return {
    type: ADD_TODO,
    payload: todoObj,
  };
};
