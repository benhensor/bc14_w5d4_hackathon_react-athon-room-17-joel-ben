//in here, we have imported delete button to this component.
//created a li to store the to do text
// added to do text and delete button to JSX

import DeleteToDoButton from "../Button/DeleteToDo"

export default function ToDoItem () {
    return <li className="toDoItem">
        <p>{ /*import state here */ } </p>
        <DeleteToDoButton />
    </li>
}