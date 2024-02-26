import {useState} from "react";

export default function App() {

  let [color, setcolor] = useState("olive")

  const doRed = () => {
    color = "red"
    setcolor(color)
  }
  const doGreen = () => {
    color = "green"
    setcolor(color)
  }

  const doYellow = () => {
    color = "yellow"
    setcolor(color)
  }

  const doBlue = () => {
    color = "blue"
    setcolor(color)
  }

  const doPurple = () => {

    color = "purple"
    setcolor(color)
  }


  return (

    <>
      <div className=" h-screen w-screen justify-center items-center" style={{ backgroundColor:color }}>
        <h1 className="text-black text-center" >bg changer</h1>

        <div className=" fixed flex flex-wrap justify-center bottom-12 p-1 inset-x-0 px-2 py-2 gap-6 shadow-lg" style={{backgroundColor:"black"}} >

          <div onClick={ doRed } className='flex flex-wrap justify-center shadow-2xl bg-red-700 py-2 px-4 rounded-2xl cursor-pointer border-2 ' style={{backgroundColor:"red"}}> test </div>
          <div onClick={ doGreen } className='flex flex-wrap justify-center shadow-2xl bg-red-700 py-2 px-4 rounded-2xl cursor-pointer border-2' style={{backgroundColor:"green"}}> test </div>
          <div onClick={ doYellow } className='flex flex-wrap justify-center shadow-2xl bg-red-700 py-2 px-4 rounded-2xl cursor-pointer border-2' style={{backgroundColor:"blue"}}> test </div>
          <div onClick={ doBlue } className='flex flex-wrap justify-center shadow-2xl bg-red-700 py-2 px-4 rounded-2xl cursor-pointer border-2' style={{backgroundColor:"yellow"}}> test </div>
          <div onClick={ doPurple} className='flex flex-wrap justify-center shadow-2xl bg-red-700 py-2 px-4 rounded-2xl cursor-pointer border-2' style={{backgroundColor:"purple"}}> test </div>
          {/*<div className='flex flex-wrap justify-center shadow-2xl bg-red-700 py-2 px-4 rounded-2xl' style={{backgroundColor:"lavenderblush"}}> test </div>*/}
        </div>



      </div>
    </>
  )
}