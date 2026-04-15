import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App(props) {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "abhishek",
    age: 20
  }
  let myArr = [1,2,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl '>
        Tailwind Test </h1>
      < Card username="AbhishekKumar"  />
      < Card username="shubham"/>
      < Card/>
      

    </>
  )
}

export default App
