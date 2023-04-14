// Import any neccessary functions and components
import ToDoItem from "../ListItem"

// ToDoList function that takes a 'props' parameter
export default function ToDoList(props) {
   

    return (
        <div>
          <ul className="toDoList">
            {/* Map over the 'toDoList' array and render a ToDoItem component for each item */}
            {props.toDoList.map((item, index) => (
              // Pass the 'toDoText' prop to the ToDoItem component
              <ToDoItem key={index} toDoText={item} handleDelete={() => props.handleDelete(index)} />
            ))}
          </ul>
        </div>
      );
}