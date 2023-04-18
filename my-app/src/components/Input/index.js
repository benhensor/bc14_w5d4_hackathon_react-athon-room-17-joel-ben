// ToDoInput function that takes a 'props' parameter
export default function ToDoInput(props) {

  const { inputValue, handleInputChange, onClick } = props;
  // Return the JSX for the ToDoInput component
  // Remember to enclose your JSX in a single parent element
  return  <div>
            {/* Call the 'handleInputChange' function when the input element changes */}
            <input className="textInput" type="text" placeholder="Enter a ToDo" value={inputValue} onChange={handleInputChange}/>
            {/* Call the 'handleAddClick' function when the 'Add To List' button is clicked */}
            <button className="addButton" onClick={onClick}>Add To List</button>
          </div>
}