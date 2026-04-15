import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)
  //let counter = 15;

  const addValue = () => {
    if (counter < 20) {
    setCounter(prevcounter => prevcounter + 1 );
    setCounter(prevcounter => prevcounter + 1 );
    setCounter(prevcounter => prevcounter + 1 );
    setCounter(prevcounter => prevcounter + 1 );
    }
  };

  const removeValue = () => {
    if (counter > 0){
    setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>
      <br />
      <button
      onClick={addValue}
      >add value {counter}</button>
      <button
      onClick={removeValue}>
        remove value {counter}</button>
      <p>{counter}</p>

    </>
  )
}

export default App
