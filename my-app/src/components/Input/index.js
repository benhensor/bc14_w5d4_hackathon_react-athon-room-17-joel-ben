// Import any neccessary functions and components
import React, { useState } from 'react';

// ToDoInput function that takes a 'props' parameter
export default function ToDoInput(props) {

  // Declare a state variable called 'inputValue' and a function to update it's state called 'setInputValue'
  const [inputValue, setInputValue] = useState('');
  
  // Function that takes an event as a parameter
  const handleInputChange = (e) => {
    // Call the 'setInputValue' function and update the state of 'inputValue' using the value of the input element
    setInputValue(e.target.value);
  }

  // Function to handle the click event of the 'Add To List' button
  const handleAddClick = () => {
    // Call the 'handleAdd' function from the 'props' parameter and pass in the 'inputValue' state variable
    props.handleAdd(inputValue);
    // Update the state of 'inputValue' to an empty string
    setInputValue('');
    // console.log(inputValue);
  }

  // Return the JSX for the ToDoInput component
  // Remember to enclose your JSX in a single parent element
  return  <div>
            {/* Call the 'handleInputChange' function when the input element changes */}
            <input className="textInput" type="text" placeholder="Enter a ToDo" value={inputValue} onChange={handleInputChange}/>
            {/* Call the 'handleAddClick' function when the 'Add To List' button is clicked */}
            <button className="addButton" onClick={handleAddClick}>Add To List</button>
          </div>
}