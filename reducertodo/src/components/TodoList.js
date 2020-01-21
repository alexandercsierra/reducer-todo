import React, {useReducer} from 'react'
import {initialState, TodoReducer} from '../reducers/TodoReducer'
import Todo from './Todo'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const TodoList = (props) => {
    const complete = e => {
        e.preventDefault();
        props.dispatch({type: 'MARK_COMPLETED', payload: e.target.id})
      }
    console.log("hi from todoList", props.state);
    return (
        <Container>
        {props.state.map(todo => {
          return <Todo complete={complete} todo={todo}/>
        })}
      </Container>
    )
}

export default TodoList