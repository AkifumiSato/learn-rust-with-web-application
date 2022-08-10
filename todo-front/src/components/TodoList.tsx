import { FC } from 'react'
import type { Todo } from '../types/todo'
import { Card, Checkbox, Stack, Typography } from '@mui/material'

type Props = {
  todos: Todo[]
  onUpdate: (todo: Todo) => void
}

const TodoList: FC<Props> = ({ todos, onUpdate }) => {
  const handleCompletedCheckbox = (todo: Todo) => {
    onUpdate({
      ...todo,
      completed: !todo.completed,
    })
  }

  return (
    <Stack spacing={2}>
      <Typography variant="h2">todo list</Typography>
      <Stack spacing={2}>
        {todos.map((todo) => (
          <Card key={todo.id} sx={{ p: 2 }}>
            <Stack direction="row" alignItems="center">
              <Checkbox
                checked={todo.completed}
                onChange={() => handleCompletedCheckbox(todo)}
              />
              <Typography variant="body1">{todo.text}</Typography>
            </Stack>
          </Card>
        ))}
      </Stack>
    </Stack>
  )
}

export default TodoList
