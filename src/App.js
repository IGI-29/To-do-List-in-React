import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import {AddTodo} from "./MyComponents/AddTodo"
import React,  {useState, useEffect} from 'react';

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
  initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
   const onDelete = (todo) =>{
     console.log("I am on delete",todo);
     setTodos(todos.filter((e)=>{
       return e!==todo;
      }))
      localStorage.setItem("todos",JSON.stringify(todos));
   }

   const addTodo =(title,desc)=>{
     console.log("I am adding this todo",title,desc);
     let sno = todos.length;
     const myTodo ={
       sno: sno,
       title: title,
       desc:desc

     }
     setTodos([...todos, myTodo])
     console.log(myTodo);

    }
 const [todos, setTodos] = useState(initTodo);
 
 useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos));
 },[todos])

    return (
      <>
      <Header title="My Todos List" searchBar={true}/>
        <AddTodo addTodo={addTodo}/>
        <Todos todos = {todos} onDelete ={onDelete} />  
      <Footer/>
  
      </>
    );
    }
export default App;
