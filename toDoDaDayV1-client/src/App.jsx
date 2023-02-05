import { Button, TextField } from '@mui/material'
import { useId, useState } from 'react'
import Todo from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([])
  const [currentTask, setCurrentTask] = useState()
console.log('tasks', tasks)

const handleChange = (e)=>{
setCurrentTask(e.target.value)
}

  const handleAddTask = ()=>{
let iD = crypto.randomUUID()
    setTasks([...tasks, {name: currentTask, completed: false, id: iD, edit: false}])
    setCurrentTask('')
  }
  const handleCompleteTask = (index)=>{
    let newTasks = tasks.slice()
        newTasks[index].completed = !newTasks[index].completed
    setTasks(newTasks)
  }

  const handleEditTask = (index)=>{
    let newTasks = tasks.slice()
    newTasks[index].edit = true
    setTasks(newTasks)
  }

  const handleDeleteTask =(index)=>{
    // console.log('index', index)
    let newTasks = tasks.slice()
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  const handleEditChange = (index, event)=>{
    let newTasks = tasks.slice()
    newTasks[index].name = event.target.value
    setTasks(newTasks)
  }

  const handleSaveChange = (index)=>{
    let newTasks = tasks.slice()
    newTasks[index].edit = false
    setTasks(newTasks)
  }

  return (
    <div className="App">
<h1>Your ToDo Da's</h1>

<TextField required onChange={handleChange} value={currentTask} label="What's next" variant="outlined" />
<Button onClick={handleAddTask} variant="contained">ADD</Button>
<h4>Filters</h4>
<Button variant="outlined">All tasks</Button>
<Button variant="outlined">Active tasks</Button>
<Button variant="outlined">Completed tasks</Button>
<br/>
{
  tasks.map((task, index)=>
  <Todo key={task.id} edit={task.edit} index={index} taskName={task.name} completed={task.completed} handleEditTask={handleEditTask} handleDeleteTask={handleDeleteTask} handleCompleteTask={handleCompleteTask} handleEditChange={handleEditChange} handleSaveChange={handleSaveChange}/>
  )
}

    </div>
  )
}

export default App
