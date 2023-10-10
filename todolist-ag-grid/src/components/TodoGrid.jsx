import { AgGridReact } from "ag-grid-react";
import { useRef } from "react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';


function TodoGrid(props) {

    const gridRef = useRef();

    const columns = [
        { headerName: 'Task', field: 'descr', sortable: true, filter: true, floatingFilter: true},
        { headerName: 'Date', field: 'date', sortable: true, filter: true, floatingFilter: true},
        {headerName: 'Priority', field: 'priority', sortable: true, filter: true, floatingFilter: true,
        cellStyle: params => {
            const priority = params.value.toLowerCase();
            if (priority == 'low') {
              return { color: 'green' };
            } else if (priority == 'high') {
              return { color: 'red' };
            } else  {
              return { color: 'black' }; }
        }}
    ]

    const deleteTask = () => {
        if (gridRef.current.getSelectedNodes().length == 0){
            alert('Choose task')
        } else {
            const removeIndex = parseInt(gridRef.current.getSelectedNodes()[0].id);
            props.deleteTodo(removeIndex);
        }
    }

    return (
        <>
        <button onClick={deleteTask}>Delete Task</button>
        <div className="ag-theme-material"
        style={{height:'700px', width: '70%', margin: 'auto'}}>
        <AgGridReact
        rowData={props.todos}
        columnDefs={columns}
        rowSelection="single"
        animateRows="true"
        onGridReady={params => gridRef.current = params.api}>
        </AgGridReact>
        </div>
        </>

    )

}

export default TodoGrid;