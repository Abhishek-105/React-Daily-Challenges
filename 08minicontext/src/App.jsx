import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './componenets/Login'
import Profile from './componenets/Profile'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Abhishek Kumar</h1>
      <Login />
      <Profile/>
    </UserContextProvider>
  )
}

export default App
