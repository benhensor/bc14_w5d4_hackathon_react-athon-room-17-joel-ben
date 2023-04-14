// Import React library, styles and app components
import React from 'react';
import { useState } from 'react';
import './App.css';
import ToDoInput from '../Input';
import ToDoList from '../List';

// Primary app function
function App() {

  // State declaration for updating the todo list
  // Const called 'toDoList', the function to update it's state 'setToDoList', assigned to an empty array in 'useState'
  const [toDoList, setToDoList] = useState([]);

  // Function that takes a 'newTodo' parameter
  const handleAdd = (newToDo) => {
    // If 'newToDo' is NOT an empty strinf
    if (newToDo !== '') {
      // Use the SPREAD OPERATOR to create a shallow copy of 'toDoList' and append it with 'newToDo'
      // Call the 'setToDoList' function to re-render the component
      setToDoList([...toDoList, newToDo]);
    }
  }

  // Function that takes an index value as a parameter
  const handleDelete = (index) => {
    // Call the setToDoList function and remove the target listItem from the 'toDoList' array
    // using the filter() method. The callback function compares the index of each element (i) 
    // with the index parameter passed in.
    setToDoList(toDoList.filter((item, i) => i !== index));
  }

  // Return the JSX for the App component
  return (
        <main className="App">
        <div className="App-logo-container">
        <img src={require("./soc-logo.png")} className="App-logo" alt="logo" />
        </div>      
        <h1>Welcome to our ToDo App!</h1>
        {/* Pass the 'handleAdd' function as a prop to the ToDoInput component */}
        <ToDoInput handleAdd={handleAdd}/>
        {/* Pass the 'toDoList' state variable and the 'handleDelete' function as props to the ToDoList component */}
        <ToDoList toDoList={toDoList} inputValue={ToDoInput.inputValue} handleDelete={handleDelete}/>
        
        <div className="fillTheScreen"></div>
        </main>
  );
}

export default App;





/* <header className="App-header">
 <img src={logo} className="App-logo" alt="logo" />
</header> */
