import {useCallback, useEffect, useRef, useState} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    let [password, setPassword] = useState("")
  const passwordRef = useRef(null)
  const [btnColor, setBtnColor] = useState("blue")
  const [btnText, setBtnText] = useState("Copy")


  const passwordGenerator = useCallback( () => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    let pass = ""
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+{}|[]:<>?/.,-"

    for (let i=0; i<= length; i++){
      let char =  (Math.floor(Math.random() * str.length+1))
      pass += str.charAt(char)

    }

    setPassword(pass)
    setBtnText("Copy")
    setBtnColor("blue")

  }, [length, numberAllowed, charAllowed, setCharAllowed, setPassword])

  const copyToClipboard =  useCallback(() => {

     window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
    setBtnText("✔️")
    setBtnColor("pink")
  }, [])

  useEffect(()=>{

    passwordGenerator()

  }, [length, charAllowed, numberAllowed, passwordGenerator])

  return (
    <>

      <div className=' w-full max-w-md mx-auto text-orange-500 bg-gray-700 shadow-md rounded-lg p-4 my-8'>

        <h1 className='text-2xl text-white text-center mb-2 overflow-hidden'> Password Generator </h1>
        <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>

          <input
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='generated password'
              readOnly
              type="text"
              ref={passwordRef}
          />
          <button
              onClick={copyToClipboard}
              style={{background: btnColor}}

              className='cursor-pointer outline-none  text-white px-3 py-0.5 shrink-0'>{btnText}</button>

        </div>

        <div className='flex text-sm gap-x-2 overflow-hidden'>
          <div className='flex items-center gap-x-1'>
            <input
                className='cursor-pointer'
                type="range"
                value={length}
                min={6}
                max={20}
                onChange={(e) => {
                  setLength(e.target.value)
                }}
            />
            <label> Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1 overflow-hidden'>
            <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prevState) => !prevState)
                }}
            />
            <label> Numbers </label>

          </div>
          

          
          
          <div className='flex items-center gap-x-1 overflow-hidden'>
            <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                onChange={() => {
                  setCharAllowed((prevState) => !prevState)
                }}
            />
            <label> Characters </label>

          </div>


        </div>


      </div>


    </>
  )
}

export default App
