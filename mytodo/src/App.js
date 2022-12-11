import React, { Component, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import ToDo from "./components/ToDo";
import AddTodo from './components/AddTodo';


function App() {
  const [todos, setTodos] = useState([]);
  const [toggleTodos, setToggleTodos] = useState([
    true, false, true, false
  ]);
  const [addTodos, setAddTodos] = useState("");

  let props = { //JSON
    todos: todos,
    setTodos: setTodos,
    toggleTodos:toggleTodos,
    setToggleTodos:setToggleTodos,
    addTodos:addTodos,
    setAddTodos:setAddTodos
  }

  return(
    <Router>
      <Routes>
        <Route exact path='/' element={<ToDo {...props}/>  }/>
      </Routes>
    </Router>
  )
}

export default App;
