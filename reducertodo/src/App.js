import React, {useState, useReducer} from 'react';
import {initialState, TodoReducer} from './reducers/TodoReducer'
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  
  return (
    <div className="App">
      <Form state={state} dispatch={dispatch}/>
      <TodoList state={state} dispatch={dispatch}/>
      
    </div>
  );
}

export default App;
