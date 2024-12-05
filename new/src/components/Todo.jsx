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
 
  return (
    <div className="todoapp">
      <div className="type">
        <input  className="input" type="text" placeholder="Type any text"  onChange={handleInputChange}/>
        <button className="btn" onClick={handleAddTodo}>Add </button>
      </div>
      
    </div>
  )
}
 
export default Todo;