import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todo() {
    const [task, setTask] = useState([{ todo: "this is a sample task", key: uuidv4() , status : false }]);
    const [newTodo, setNewTodo] = useState("");

    const addNewTask = () => {
        if (newTodo.trim() === "") return;
        const newTask = { todo: newTodo, key: uuidv4() };
        setTask([...task, newTask]);
        setNewTodo("");
    };
let deleteTode = (id) =>{
let copy = task.filter((todo) => todo.key != id);
setTask(copy);
}
    const updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };
const doneStatus = (id) => {
   const updatedTasks = task.map((t) =>
            t.key === id ? { ...t, status: !t.status } : t
        );
        setTask(updatedTasks);
}
    return (
        <>
            <h1>Basic Todo app</h1>
            <input
                placeholder="Add new todo"
                value={newTodo}
                onChange={updateTodoValue}
            />
            <button onClick={addNewTask}>Add Task</button>
            <h4>Here are your todos:</h4>
            <ul>
                {task.map((todo) => (
                    <li style={{textDecoration: todo.status ? "line-through" : "none"}} key={todo.key}>
                        <span>{todo.todo}</span>
                        <button onClick={() => deleteTode(todo.key)}>Delete   
                        </button>
                        <button onClick={() => doneStatus(todo.key)}> Done</button>
                        </li>
                ))}
            </ul>
        </>
    );
}
