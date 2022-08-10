import { FC } from 'react'
import type { Todo } from '../types/todo'
import { Stack, Typography } from '@mui/material'
import TodoItem from './TodoItem'

type Props = {
  todos: Todo[]
  onUpdate: (todo: Todo) => void
  onDelete: (id: number) => void
}

const TodoList: FC<Props> = ({ todos, onUpdate, onDelete }) => {
  return (
    <Stack spacing={2}>
      <Typography variant="h2">todo list</Typography>
      <Stack spacing={2}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </Stack>
    </Stack>
  )
}

export default TodoList
