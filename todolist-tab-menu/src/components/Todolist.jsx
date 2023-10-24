import { useState } from "react";
import TodoGrid from "./TodoGrid";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function Todolist() {

    const [todo, setTodo] = useState({ descr: "", date: "", priority: "" })
    const [todos, setTodos] = useState([])

    const handleInputChanged = (event) => {
        event.preventDefault();
        setTodo({ ...todo, [event.target.name]: event.target.value })
    }

    const changeDate = (props) => {
        setTodo({ ...todo, date: props })
    }

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, todo])
    }

    const deleteTodo = (index) => {
        console.log(index);
        setTodos(todos.filter((_, i) => i !== index))
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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker format="DD.MM.YYYY" name="date" value={todo.date} onChange={date => changeDate(date)} />
            </LocalizationProvider>
            <input
                type="text"
                name="priority"
                value={todo.priority}
                onChange={handleInputChanged}
            />
            <button
                onClick={addTodo}>
                Add
            </button>
            <TodoGrid
                todos={todos}
                deleteTodo={deleteTodo}

            />
        </>
    )

}

export default Todolist;