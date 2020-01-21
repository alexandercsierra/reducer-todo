import React, {useReducer, useState} from 'react'
import {initialState, TodoReducer} from '../reducers/TodoReducer'
import Todo from './Todo'
import styled from 'styled-components'
import moment from 'moment'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const TodoList = (props) => {
    const [doneTime, setDoneTime] = useState('');
    const complete = e => {
        e.preventDefault();
        props.dispatch({type: 'MARK_COMPLETED', payload: e.target.id})
        setDoneTime("completed: " + moment().calendar());
      }
    console.log("hi from todoList", props.state);
    return (
        <Container>
        {props.state.map(todo => {
          return <Todo doneTime={doneTime} complete={complete} todo={todo}/>
        })}
      </Container>
    )
}

export default TodoList