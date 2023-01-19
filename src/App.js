import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import HeaderComponent from './header';
// import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';

function App() {

  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);


  const rows = [
    createData('Frozen yoghurt', 159, 6.0),
  ];

  function createData(
    TaskName,
    Complete,
    Delete,
  ) {
    return { TaskName, Complete, Delete};
  }


  const handleChange = (event) => {
    setTask(event.target.value)
  }


  const completedTask = (elmId) =>{
        setTodoList(todoList.map((elm)=>{
          if (elmId == elm.id)
          {return {...elm, completedTask:true}}
          else{return elm;}
        }))
  }

  const newTaskToDo = () => {

    const newTask = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: task,
      completedTask: false
    }

    setTodoList([...todoList, newTask]);
    console.log(todoList);

  }

  const deleteTask=(id)=>{
        return setTodoList(todoList.filter((elm)=> elm.id == id ? false : true))
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
      {/* Table Component */}
      <Grid container justifyContent="center">
      <Box
          sx={{
            // width: 500,
            maxWidth: '100%',
          }}
        >
          <br/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Task Name</TableCell>
              <TableCell align="right">Delete</TableCell>
              <TableCell align="right">Complete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todoList.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0}  }}
              >
                <TableCell component="th" scope="row">
                  {row.taskName}
                </TableCell>
                <TableCell align="right"><button onClick={()=>deleteTask(row.id)}><DeleteIcon/></button></TableCell>
                {!row.completedTask ?
                <TableCell align="right"><button onClick={()=>completedTask(row.id)}>{!row.completedTask ?<DoneIcon/> : ""}</button></TableCell>
                :
                <TableCell align="right"><PublishedWithChangesIcon/></TableCell>
                
                }
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
      </Grid>
      {/* Table Component */}
    </div>
  );
}

export default App;
