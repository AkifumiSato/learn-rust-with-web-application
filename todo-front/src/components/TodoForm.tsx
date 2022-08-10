import { FC, useState } from 'react'
import { NewTodoPayload } from '../types/todo'
import { Box, Button, TextField, Paper, Grid } from '@mui/material'

type Prosp = {
  onSubmit: (newTodo: NewTodoPayload) => void
}

const TodoForm: FC<Prosp> = ({ onSubmit }) => {
  const [editText, setEditText] = useState('')

  const addTodoHandler = async () => {
    if (!editText) return

    onSubmit({
      text: editText,
    })
    setEditText('')
  }

  return (
    <Paper elevation={2}>
      <Box sx={{ p: 2 }}>
        <Grid container rowSpacing={2} columnSpacing={5}>
          <Grid item xs={12}>
            <TextField
              label="new todo text"
              variant="filled"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={9} />
          <Grid item xs={3}>
            <Button onClick={addTodoHandler} fullWidth>
              add todo
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  )
}

export default TodoForm
