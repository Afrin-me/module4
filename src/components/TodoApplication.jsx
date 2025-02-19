import React from 'react'
import TodoApp from './TodoApp'
import TodoList from './todos.jsx/TodoList'
import TodoAppList from './TodoAppList'

const TodoApplication = () => {
  return (
    <div>TodoApplication
        <TodoApp/>
        <TodoAppList/>
    </div>
  )
}

export default TodoApplication