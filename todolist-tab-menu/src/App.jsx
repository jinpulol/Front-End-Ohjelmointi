import "./App.css"
import Todolist from "./components/Todolist"
import Home from "./components/Home"
import { useState } from "react";
import { Tab, Tabs } from "@mui/material";

function App() {

  const [value, setValue] = useState('Home');

  const handleChange = (event, value) => {
    setValue(value)
  }

  return (
    <>
      <div>
        <Tabs value={value} onChange={handleChange}>
          <Tab value='Home' label='Home' />
          <Tab value='List' label='Todolist' />
        </Tabs>
      </div>
      {value === 'Home' && <div><Home /></div>}
      {value === 'List' && <div><Todolist /></div>}
    </>
  )
}

export default App
