import React, { useState } from 'react'
import './Header.css'
import logo from '../../icons/logo.png'

export default function Header({mode : mode, setMode : setMode}) {
  const toggleMode=()=>{
      setMode((prev) => !prev);
  }

  return (
    <>
      <div className={mode ? 'header-light' : 'header-dark'}>
        <img className='logo' src={logo} alt='logo' />
        <h1 className={mode ? 'heading-light' : 'heading-dark'} >Weather App</h1>
        <div className='mode-button-div'>
          <button className={mode? 'mode-button-light'  : 'mode-button-dark'} onClick={toggleMode}></button>
          <div className={ mode ? 'mode-circle-div-light' : 'mode-circle-div-dark'} onClick={toggleMode}></div>
        </div>
      </div>
    </>
  )
}
