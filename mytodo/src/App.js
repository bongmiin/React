import React, { Component, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import ToDo from "./components/ToDo";



function App() {
  const [todos, setTodos] = useState([
    "아이스크림 사먹기", "코딩하기", "자기", "커피마시기"
  ]);
  const [toggleTodos, setToggleTodos] = useState([
    true, false, true, false
  ]);

  let props = { //JSON
    todos: todos,
    setTodos: setTodos,
    toggleTodos:toggleTodos,
    setToggleTodos:setToggleTodos
  }

  return(
    <Router>
      <Routes>
        <Route exact path='/' element={<ToDo {...props}/>}/>
      </Routes>
    </Router>
  )
}

export default App;
