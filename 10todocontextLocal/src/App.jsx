import { useState, useEffect } from 'react'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './contexts'

function App() {
  const [todos, setTodos] = useState([])

  // 1. Function to add a new todo
  const addTodo = (todo) => {
    // We create a new object with a unique ID and spread the rest of the todo data
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  // 2. Function to update an existing todo
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  // 3. Function to delete a todo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  // 4. Function to toggle the completed status
  const toggleComplete = (id) => {
    setTodos((prev) => 
      prev.map((prevTodo) => 
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
      )
    )
  }

  // --- Local Storage Logic ---

  // 1. Get Data (Runs only ONCE when app starts)
useEffect(() => {
  const todos = JSON.parse(localStorage.getItem("todos"))

  if (todos && todos.length > 0) {
    setTodos(todos)
  }
}, []) // Empty dependency array is critical here!

// 2. Save Data (Runs every time 'todos' changes)
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Component to add todos */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop through todos and render TodoItem for each */}
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App