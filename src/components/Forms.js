import React from 'react'
import FormSignup from './FormSignup'
import './Forms.css';

const Forms = () => {
  return (
    <>
    <div className='form-container'>
      <span className="close-btn">x</span>
      <div className="form-content-left">
        <img 
       // src="https://www.searchpng.com/wp-content/uploads/2019/01/Rocket-Ship-Png-715x715.png"
        src="https://www.freeiconspng.com/thumbs/rocket-ship-png/rocket-ship-png-6.png"
        
        alt="left" 
         className="form-img" />
      </div>
      <FormSignup />
    </div>
   
    </>
  )
}

export default Forms