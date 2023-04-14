import React from 'react';
import { useState } from 'react';
import './App.css';
import ToDoInputTextField from '../Input';
import ToDoList from '../List';

// ### App

// _state_

// - list of to dos ✅

// _behaviour_

// - add item to list ✅
// - remove item from list
// - render an Input and List

function App() {

  const [toDoList, setToDoList] = useState([]);
  // take input from ToDoInputTextField and add to toDoList
  // user entered text will be added to our todo list
  //setToDoList(toDoList.push(ToDoInputTextField));

  const handleAdd = (newToDo) => {
    if (newToDo !== '') {
      setToDoList([...toDoList, newToDo]);
    }
  }

  const handleDelete = (index) => {
    // logic for deleting todo item here
    setToDoList(toDoList.filter((item, i) => i !== index));
  }


  return (
        <main className="App">
        <div className="App-logo">
        <img src={require("./soc-logo.png")} className="App-logo" alt="logo" />
        </div>      
      <h1>Welcome to our ToDo App!</h1>
      <ToDoInputTextField handleAdd={handleAdd}/>
      <ToDoList toDoList={toDoList} inputValue={ToDoInputTextField.inputValue} handleDelete={handleDelete}/>
      
      <div className="fillTheScreen"></div>
    </main>
  );
}

export default App;





/* <header className="App-header">
 <img src={logo} className="App-logo" alt="logo" />
</header> */
