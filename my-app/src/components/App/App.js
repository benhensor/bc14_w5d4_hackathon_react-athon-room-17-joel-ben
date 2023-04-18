import React from 'react';
import { useState } from 'react';
import './App.css';
import ToDoInput from '../Input';
import ToDoList from '../List';

function App() {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  console.log(inputValue);

  const handleAddClick = () => {
    handleAdd(inputValue);
    setInputValue(''); 
  }

  const [toDoList, setToDoList] = useState([]);

  const handleAdd = (newToDo) => {
    if (newToDo !== '') {
      setToDoList([...toDoList, newToDo]);
    }
  }

  const handleDelete = (index) => {
    setToDoList(toDoList.filter((item, i) => i !== index));
  }

  return (
        <main className="App">
        <div className="App-logo-container">
        <img src={require("./soc-logo.png")} className="App-logo" alt="logo" />
        </div>      
        <h1>Welcome to our ToDo App!</h1>
        <ToDoInput inputValue={inputValue} handleInputChange={handleInputChange} onClick={handleAddClick}/>
        <ToDoList toDoList={toDoList} inputValue={inputValue} handleDelete={handleDelete}/>
        
        <div className="fillTheScreen"></div>
        </main>
  );
}

export default App;