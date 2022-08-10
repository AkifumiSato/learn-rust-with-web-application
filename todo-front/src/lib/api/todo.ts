import type { NewTodoPayload, Todo, UpdateTodoPayload } from '../../types/todo'

export const addTodoItem = async (payload: NewTodoPayload) => {
  const res = await fetch('http://localhost:3000/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  if (!res.ok) {
    throw new Error('add todo request failed')
  }
  const json: Todo = await res.json()
  return json
}

export const getTodoItems = async () => {
  const res = await fetch('http://localhost:3000/todos')
  if (!res.ok) {
    throw new Error('get todo request failed')
  }
  const json: Todo[] = await res.json()
  return json
}

export const updateTodoItem = async (todo: UpdateTodoPayload) => {
  const { id, ...updateTodo } = todo
  const res = await fetch(`http://localhost:3000/todos/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateTodo),
  })
  if (!res.ok) {
    throw new Error('update todo request failed')
  }
  const json: Todo = await res.json()
  return json
}

export const deleteTodoItem = async (id: number) => {
  const res = await fetch(`http://localhost:3000/todos/${id}`, {
    method: 'DELETE',
  })
  if (!res.ok) {
    throw new Error('delete todo request failed')
  }
}
