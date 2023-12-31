import { useState } from "react";

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

    const todoRows = todos.map((todo, index) =>

        <tr key={index}>
            <td>{todo.date}
            </td>
            <td>{todo.descr}
            </td>
            <td>
                <button
                    id={index}
                    onClick={deleteTodo}>
                    Delete
                </button>
            </td>
        </tr>
    )

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
            <table>
                <thead>
                    <tr>
                        <th>
                            Date:
                        </th>
                        <th>
                            Task:
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {todoRows}
                </tbody>
            </table>
        </>
    )

}