import React from 'react'
import { useState } from 'react';
import classes from './BtnDarkMode.module.css'

import btn_sun from "./icons/sun.svg";
import btn_moon from "./icons/moon.svg";

const BtnDarkMode = () => {
    const [darkMode, setDarkMode] = useState('light');
    const toggleDarkMode = () => {
        setDarkMode('dark')
    }

  return (
    <>
    {darkMode}
    <button className={classes["dark-mode-btn"]} onClick={toggleDarkMode}>
        <img src={btn_sun} alt="Light mode" className={classes["dark-mode-btn__icon"]}/>
        <img src={btn_moon} alt="Dark mode" className={classes["dark-mode-btn__icon"]}/>
    </button>
    </>
  )
}

export default BtnDarkMode