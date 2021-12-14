import React from 'react'
import {TodoItem} from "./TodoItem";
export default function Todos (props) {
  let myStyle={
    minHeight: "70vh"

  }
  return (
  <div className="container my-2" style={myStyle}>
      <h3 className =" my-3">Todos List<br/></h3>
      {props.todos.length==0? "No To-dos to Display" :
      props.todos.map((todo)=>{
         return (
           <>
         <TodoItem todo = {todo} key={todo.sno} onDelete={props.onDelete}/><hr/>
         </>
         )
      })}


  </div>
  )
}