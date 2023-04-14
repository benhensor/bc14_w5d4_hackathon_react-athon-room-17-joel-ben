// Function that takes a 'props' parameter
export default function ToDoItem(props) {

    // Return the JSX for the ToDoItem component
    return <li className="toDoItem">
        {/* Render the 'toDoText' prop */}
        <p>{ props.toDoText } </p>
        {/* Call the 'handleDelete' function when the 'Delete' button is clicked */}
        <button className="deleteButton" onClick={props.handleDelete}>Delete</button>
    </li>
}