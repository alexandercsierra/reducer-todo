import React, {useState} from 'react'
import styled from 'styled-components'
import moment from 'moment'





const Todo = props => {
    const [time, setTime] = useState("");
    const {complete, todo, doneTime} = props;
    console.log(moment(`${todo.id}`, "YYYYMMDD").fromNow())
    return (
        <div
          className={`${todo.completed ? 'done' : 'notDone'}`}
          id={todo.id} onClick={(e)=>{
              
              todo.completed ? setTime(""): setTime(moment().format('LTS'));
              console.log (todo.id);
              complete(e);
              }}>{todo.item} <br></br>{time? time : null}
              </div>
    )
}

export default Todo