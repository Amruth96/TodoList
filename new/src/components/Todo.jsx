import React, { useState } from "react";
 
function Todo() {
  const [inputValue, setInputValue] = useState("")
  const [todos, setTodos] = useState([])
 
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }
 
  const handleAddTodo = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
      }
      setTodos([...todos, newTodo])
      setInputValue(" ")
    }
  }
 
  const handleDeleteClick = (index) => {
    const newTodos = todos.filter((_, i) => i !== index)
    setTodos(newTodos);
  }
 
  const handleEditClick = (index) => {
    const updatedTodos = [...todos]
    const newText = prompt("Edit the todo", updatedTodos[index].text)
    if (newText !== null) {
      updatedTodos[index].text = newText.trim()
      setTodos(updatedTodos)
    }
  }
  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
    setTodos(updatedTodos)
  }
  return (
    <div className="todoapp">
      <div className="type">
        <input  className="input" type="text" placeholder="Type any text"  onChange={handleInputChange}/>
        <button className="btn" onClick={handleAddTodo}>Add </button>
      </div>
      <ul className="addlist">
        {todos.map((todo, index) => (
          <li >
            <div className="list">
              <span key={todo.id}  style={{ textDecoration: todo.completed ? "line-through" : " completed" }}>{todo.text}</span>
      <button className="editbtn" onClick={() => handleEditClick(index)}>Edit</button>
      <button className="deletebtn" onClick={() => handleDeleteClick(index)}>Delete</button>
      <button className="completebtn" onClick={() => handleComplete(todo.id)}>Completed</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
 
export default Todo;