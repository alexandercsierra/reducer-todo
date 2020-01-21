import React, {useState, useReducer} from 'react';
import {initialState, TodoReducer} from '../reducers/TodoReducer'
import styled from 'styled-components'

const Div = styled.div`
  // border: 1px solid red;
  padding: 4%;
`;

const Button = styled.button`
  background: #C82333;
  border: 1px solid white;
  // width: 20%;
  padding: 1%;
  font-size: .8rem;
  box-shadow: 0.3em 0.3em 1em rgba(255,255,255,0.3);
  cursor: pointer;
  margin: 4%;
  color: white;

  &:hover{
    color: #C82333;
    background: white;
  }
`;

const Input = styled.input`
  padding: 2%;
  font-size: .8rem;
  width: 50%;
`;


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
        <Div>
            <h1>To Do</h1>
            <form autocomplete="off" onSubmit={(e)=>{
        e.preventDefault();
        props.dispatch({type: 'ADD_TODO', payload: currentTodo});
        setCurrentTodo("");
      }}>
        <Input name="todo" placeholder="add a todo" onChange={handleChange} value={currentTodo} /> 
      </form>
      <Button onClick={clear}>Clear Completed</Button>
        </Div>
    )
}

export default Form