import * as React from "react"
import './App.css'

export default function Todo ({ todo, handleUpdateTodo, handleDeleteTodo }) {
  const [completed, setCompleted] = React.useState(false)
  const [editing, setEditing] = React.useState(false)

  const handleCheckboxClick = () => handleUpdateTodo({
    ... todo,
    completed: !todo.completed
  })

  const handleEditClick = () => setEditing(!editing)

  const handleEditTodo = (e) => handleUpdateTodo({
    ... todo,
    label: e.target.value
  })

  const handleDeleteClick = () => handleDeleteTodo(todo.id)

  return (
    <div>
      <label htmlFor={todo.id}>
        <div>
          <input
            type="checkbox"
            id={todo.id}
            checked={todo.completed}
            onChange={handleCheckboxClick}
          />
          <span />
          {editing === true ? (
          <input
            type="text"
            value={todo.label}
            onChange={handleEditTodo}
          />
        ) : (
          <span>{todo.label}</span>
        )}
        <button onClick={handleEditClick}>
          {editing ? "Save" : "Edit"}
        </button>
        <button onClick={handleDeleteClick}>
          Delete
        </button>
          </div>
      </label>
    </div>
  )
}