import * as React from "react"
import './App.css'

export default function Todo() {
  const [todo, setTodo] = React.useState({
    id: 1,
    label: "Learn React",
    completed: false,
  })
  const [completed, setCompleted] = React.useState(false)
  const [editing, setEditing] = React.useState(false)

  const handleCheckboxClick = () => setTodo({
    ... todo,
    completed: !todo.completed
  })

  const handleEditClick = () => setEditing(!editing)

  const handleUpdateLabel = (e) => setTodo({
    ... todo,
    label: e.target.value
  })

  return (
    <div>
      <label htmlFor="checkbox">
        <div>
          <input
            type="checkbox"
            id="checkbox"
            checked={todo.completed}
            onChange={handleCheckboxClick}
          />
          <span />
          {editing === true ? (
          <input
            type="text"
            value={todo.label}
            onChange={handleUpdateLabel}
          />
        ) : (
          <span>{todo.label}</span>
        )}
        <button onClick={handleEditClick}>
          {editing ? "Save" : "Edit"}
        </button>
          </div>
      </label>
    </div>
  )
}