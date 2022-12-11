import { Component, useState } from 'react'; 
import AddTodo from './AddTodo';

function ToDo(props) {


  const clickHandler = (e) =>{
    let toggleList = [...props.toggleTodos];
    toggleList[Number(e.target.id)] = !props.toggleTodos[Number(e.target.id)];
    props.setToggleTodos(toggleList);
  }

  return (
    <div className="App">
      <h1>오늘 할 일</h1>
      <div className="TodoList">
        {
          props.todos.map((todo, idx)=>{
            if(!props.toggleTodos[idx]){
              return(
                <div className="item yet" id={idx} onClick={clickHandler}>
                  {todo}
                  <br/>
                </div>
              ) 
            }
          })
        }
        {
          props.todos.map((todo, idx)=>{
            if(props.toggleTodos[idx]){
              return(
                <div className="item done" id={idx} onClick={clickHandler}>
                  {todo}
                  <br/>
                </div>
              ) 
            }
          })
        }
      </div>
      <input />
      <button>Click Me</button>
    </div>
  );
      }
  export default ToDo;