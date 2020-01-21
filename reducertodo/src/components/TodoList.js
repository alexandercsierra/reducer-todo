import React, {useReducer} from 'react'
import {initialState, TodoReducer} from '../reducers/TodoReducer'

const TodoList = (props) => {
    const complete = e => {
        e.preventDefault();
        props.dispatch({type: 'MARK_COMPLETED', payload: e.target.id})
      }
    console.log("hi from todoList", props.state);
    return (
        <div>
        {props.state.map(todo => {
          return <div
          className={`${todo.completed ? 'done' : ''}`}
          id={todo.id} onClick={complete}>{todo.item}</div>
        })}
      </div>
    )
}

export default TodoList