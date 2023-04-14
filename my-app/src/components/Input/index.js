// importing any neccessary functions and components
// create the component function
// export function
import React, { useState } from 'react';

export default function ToDoInputTextField(props) {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleAddClick = () => {
    props.handleAdd(inputValue);
    setInputValue('');
  }


  return  <div>
            <input 
            className="textInput" 
            type="text" 
            placeholder="Enter a ToDo"
            value={inputValue}
            onChange={handleInputChange}
            />
            <button className="addButton" onClick={handleAddClick}>Add To List</button>
          </div>
}

// onChange={props.onChange} value={props.value}