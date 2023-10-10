import React from "react";

function TodoTable(props) {

    const todoRows = props.todos.map((todo, index) =>

        <tr key={index}>
            <td>{todo.date}
            </td>
            <td>{todo.descr}
            </td>
            <td>
                <button
                    id={index}
                    onClick={props.deleteTodo}>
                    Delete
                </button>
            </td>
        </tr>
    )

    return (
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
    );

}

export default TodoTable;