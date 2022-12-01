import { useState } from 'react';
import Calendar from 'react-calendar';
import './App.css';
import './Calendar.css';

function App() {
  const [date, setDate] = useState(new Date());
  const [todos, setTodos] = useState(["대", "한", "민", "국"]);

  let clickHandler = () =>{
    let today = new Date();
  }

  const test = () =>{
    
  }
  return (
    <div className='app'>
      <h1 className='text-center'>React Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={test} value={date} />
      </div>
      <button onClick={clickHandler}>click me!</button>
      <br/>
      {
      todos.map((char)=>{
        if(char !== "한"){

          return(
            <p>
              {char}
            </p>
          )
        }
      })
      }
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}

export default App;