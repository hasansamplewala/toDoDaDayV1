import { Button, ButtonBase, Checkbox, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FormControlLabel from '@mui/material/FormControlLabel';
import DoneIcon from '@mui/icons-material/Done';
export default function Todo({ taskName, index, edit, completed, handleEditTask, handleDeleteTask, handleCompleteTask, handleEditChange, handleSaveChange }) {

    const todo = (<> <FormControlLabel
        control={<Checkbox checked={completed} onChange={() => handleCompleteTask(index)} />}
        label={taskName}
    />
        <br />

        <Stack direction="row" spacing={4}>
            <Button onClick={() => handleEditTask(index)} startIcon={<EditIcon />} size="small" variant="outlined">Edit</Button>
            <Button onClick={() => handleDeleteTask(index)} startIcon={<DeleteIcon />} size="small" variant="contained" color="error">Delete</Button>
        </Stack></>)
    const editTodo = (
        <>
        <Stack direction="row" spacing={4}>
            <TextField onChange={(event)=>handleEditChange(index, event)} id="standard-basic" variant="standard" value={taskName}/>
            <Button onClick={() => handleSaveChange(index)} startIcon={<DoneIcon />} size="small" variant="contained" color="success">Save</Button>
        </Stack>
        </>
    )

    return (
        <>
            {
            edit ? editTodo : todo
            }
        </>
    )
}
// https://refine.dev/blog/material-ui-checkbox-component/