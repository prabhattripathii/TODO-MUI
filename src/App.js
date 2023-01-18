import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import HeaderComponent from './header';
// import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function App() {

  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    setTask(event.target.value)
  }

  const newTaskToDo = () => {

    const newTask = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: task
    }

    setTodoList([...todoList, newTask]);
    console.log(todoList);

  }

  return (
    <div className="App">
      {/* Header Component */}
      <HeaderComponent />
      {/* Header Component */}
      <br />
      <Grid container justifyContent="center">
        <Box
          sx={{
            width: 500,
            maxWidth: '100%',
          }}
        >
          <TextField fullWidth label="Enter Your Task" onChange={handleChange} id="fullWidth" />
          <br />
          <br />
          <Button variant="contained" onClick={newTaskToDo}>ADD TASK</Button>
        </Box>
      </Grid>
      {/* <div>
        <input onChange={handleChange}/>
        <button onClick={newTaskToDo}>Add Task</button>

        {todoList.map((item)=>
            <>
            <h1>{item.id}</h1>
            <h2>{item.taskName}</h2>
            </>
        )}
      </div> */}
      {todoList.map((item) =>
        <>
          <h1>{item.id}</h1>
          <h2>{item.taskName}</h2>
        </>
      )}
    </div>
  );
}

export default App;
