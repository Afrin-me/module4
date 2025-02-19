import { ADD_TODO, REMOVE_TODO } from "../actions/action";

const initState= {todos : []}

export const todoAppReducer = (state=initState, action) => {
    switch (action.type) {
      case ADD_TODO:
        const updatedTodos = {
          ...state,
          todos: [...state.todos, action.payload],
        };
        return updatedTodos;
      case REMOVE_TODO:
        const todos = {
          ...state,
          todos: state.todos.filter((todo)=>todo.id!==action.payload),
          //see here you had make mistake... the remaining state + filter todos 
        };
        return todos;

              default:
        return state;
    }
  
}

export default todoAppReducer