import { Component, useState } from 'react'; 

function AddTodo(props) {
    const onChange = (e) => {
      props.setAddTodos(e.target.value)
    };

    const todoClick = (e) => {
        let todos = [...props.todos, props.addTodos]
        props.setTodos(todos)
        reset();
    }

    const todoKeyPress = (e) => {
        if (e.key === 'Enter') {
           todoClick();
        }
    }

    const reset = () => {
        props.setAddTodos(' ');
    }

    return (
        <>
            <input onChange={onChange} onKeyDown={todoKeyPress} value={props.addTodos} />
            <button onClick={todoClick}>Click Me!</button>
        </>
    )
  }   


  export default AddTodo;
  