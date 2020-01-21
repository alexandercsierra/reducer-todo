import React, {useState, useReducer} from 'react';
import {initialState, TodoReducer} from '../reducers/TodoReducer'



const Form = (props) => {

    const [currentTodo, setCurrentTodo] = useState("");
  // const [currentID, setCurrentID] = useState("");
  
  const handleChange = (e) => {
    setCurrentTodo(e.target.value);
  }

  const clear = (e) => {
      e.preventDefault();
      props.dispatch({type: 'CLEAR_TODOS'});
  }

    return (
        <div>
            <form onSubmit={(e)=>{
        e.preventDefault();
        props.dispatch({type: 'ADD_TODO', payload: currentTodo});
        setCurrentTodo("");
      }}>
        <input name="todo" placeholder="add a todo" onChange={handleChange} value={currentTodo} /> 
      </form>
      <button onClick={clear}>Clear Completed</button>
        </div>
    )
}

export default Form