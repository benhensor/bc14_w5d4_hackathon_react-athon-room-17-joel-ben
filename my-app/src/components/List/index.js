import ToDoItem from "../ListItem"

export default function ToDoList(props) {
   
    return (
        <ul className="toDoList">
          {props.toDoList.map((item, index) => (
            <ToDoItem key={index} toDoText={item} handleDelete={() => props.handleDelete(index)} />
          ))}
        </ul>
      );
}