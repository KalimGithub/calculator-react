import React from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaDiaspora, FaDivide } from "react-icons/fa";


const MainPage = () => {
  return (
    <div className='main-page' >
        <form>
        <h1>React Calculator</h1>
        <input type='text' placeholder='Num 1'/>
        <br/>
        <input type='text' placeholder='Num 2'/>
        <div className='btns'>
            <button><FaPlus/></button>
            <button><FaMinus/></button>
            <button><FaDiaspora/></button>
            <button><FaDivide/></button>
        </div>
        <p>ERROR!!!!</p>
        <p>YOUR RESULT IS HERE</p>
        </form>
    </div>
  )
}

export default MainPage