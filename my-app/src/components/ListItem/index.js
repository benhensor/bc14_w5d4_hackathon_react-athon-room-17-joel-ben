//in here, we have imported delete button to this component.
//created a li to store the to do text
// added to do text and delete button to JSX




export default function ToDoItem(props) {

    //we need to import the inputValue from the input component
    // we need to print this to the screen in the p tag

    return <li className="toDoItem">
        <p>{ props.toDoText } </p>
        <button className="deleteButton" onClick={props.handleDelete}>Delete</button>
    </li>
}