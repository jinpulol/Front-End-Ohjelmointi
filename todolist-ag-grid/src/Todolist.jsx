import { useState } from "react";
// import TodoTable from "./components/TodoTable";
import TodoGrid from "./components/TodoGrid";

export default function Todolist() {

    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState({ descr: "", date: "" })

    const handleInputChanged = (event) => {
        event.preventDefault();
        setTodo({ ...todo, [event.target.name]: event.target.value })
    }

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, todo])
    }

    const deleteTodo = (event) => {
        event.preventDefault();
        setTodos(todos.filter((todo, index) => parseInt(event.target.id) !== index))
    }

    return (
        <>
            <h1>Todo list</h1>
            <input
                type="text"
                name="descr"
                value={todo.descr}
                onChange={handleInputChanged}
            />
            <input
                type="date"
                name="date"
                value={todo.date}
                onChange={handleInputChanged}
            />
            <button
                onClick={addTodo}>
                Add
            </button>
            <TodoGrid
            todos={todos}
            />
        </>
    )

}