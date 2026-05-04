import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddTodo from './components/addTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Learn about Redux Toolkit
        </h1>

        <AddTodo />
        <Todos />

      </div>
    </div>
  )
}

export default App
