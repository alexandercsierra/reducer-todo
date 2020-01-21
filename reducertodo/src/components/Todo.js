import React from 'react'
import styled from 'styled-components'



const Todo = props => {
    const {complete, todo} = props;
    return (
        <div
          className={`${todo.completed ? 'done' : 'notDone'}`}
          id={todo.id} onClick={complete}>{todo.item}</div>
    )
}

export default Todo