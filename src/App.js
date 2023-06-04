import './App.css';
import React, {useState} from 'react';
import ToDoTables from './components/ToDoTables';
import NewTodoForm from './components/NewTodoForm';
function App() {

  const [showAddToDoForm, setShowAddToDoForm] = useState(false);
  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'Feed Puppy', rowAssigned: 'User One'},
    {rowNumber: 2, rowDescription: 'Water Plants', rowAssigned: 'User Two'},
    {rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'User One'},
    {rowNumber: 4, rowDescription: 'charge phone', rowAssigned: 'User One'}
  ]
  )
  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if(todos.length > 0){
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    }else{
      rowNumber = 1;
    }
      const newTodo = {
        rowNumber: rowNumber, 
        rowDescription: description, 
        rowAssigned: assigned};

        setTodos(todos => [...todos, newTodo])
      //todos.push(newTodo);
     // console.log(todos)
    
  }  

  const deleteToDos = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    
    setTodos(filtered);
  }

  
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todos
        </div>
        <div className='card-body'>
          <ToDoTables todos={todos} deleteToDos={deleteToDos}/>
          <button className="btn btn-primary" 
          onClick={()=>{
            setShowAddToDoForm(!showAddToDoForm)
          }}>
            {showAddToDoForm ? 'Close Form': 'New Todo'}
            </button>

            {showAddToDoForm && 
            <NewTodoForm addTodo={addTodo}/>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
