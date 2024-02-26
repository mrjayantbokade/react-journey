"use client"

import { useState } from "react"

// use  render client

function App() {

  let [counter, setCounter] = useState(15)

  const AddValue = () => {
    if (counter >= 20) {
      return
    }
    counter = counter + 1
    
   setCounter(counter)

  }

  const RemoveValue = () => {
    if (counter === 0) {
      return
    }
    counter = counter - 1
    
    setCounter(counter)
  }

  return (
    <>
      <h1>Hello Jayant!</h1>
      <h1>counter :{counter} </h1>
      <button onClick={AddValue}>Add value</button>
      <br />
      <br />
      <button onClick={RemoveValue}>Remove value</button>
    </>
    

  )
}

export default App
