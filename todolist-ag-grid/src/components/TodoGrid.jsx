import { AgGridReact } from "ag-grid-react";
import { useRef } from "react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-materials.css';

function TodoGrid(props) {

    const gridRef = useRef();

    const columns = [
        { headerName: 'Task', field: 'descr', filter: true, floatingFilter: true },
        { headerName: 'Date', field: 'date', filter: true, floatingFilter: true }
    ]

    return (
        <>
        <div className="ag-theme-material"
        style={{height:'700px', width: '70%', margin: 'auto'}}>
        <AgGridReact
        rowData={props.todos}
        columnDefs={columns}
        rowSelection="single">

        </AgGridReact>
        </div>
        </>

    )

}

export default TodoGrid;