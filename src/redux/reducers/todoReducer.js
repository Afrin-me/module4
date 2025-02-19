import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "../actions/action";

const initState= {todos : [{id:1, task:"buy something",completed:false}]}

export const todoReducer = (state=initState, action) => {
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

        case EDIT_TODO:
            const editedtodos = {
                ...state, 
                todos: state.todos.map((todo)=>todo.id==action.payload.id?{
                  ...todo, task:action.payload.task
                }:todo,)

                
            }
            return editedtodos;
      default:
        return state;
    }
  
}

export default todoReducer