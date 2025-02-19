import React from 'react'
import Navbar from './components/Navbar'
import { Container } from '@chakra-ui/react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import ToDo from './components/ToDo'
import Counter from './components/Counter'
// import TodoApp from './components/TodoApp'
import TodoApplication from './components/TodoApplication'

const App = () => {
  return (
    <>
      {/* <Counter/>
    <TodoApplication/> */}
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<ToDo />} />
        </Routes>
      </Container>
    </>
  );
}

export default App