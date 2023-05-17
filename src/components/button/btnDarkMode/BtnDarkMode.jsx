import React from 'react'
import { useEffect } from 'react';
import { useLocalStorage } from '../../../utils/useLocalStorage';
import classes from './BtnDarkMode.module.css'

import btn_sun from "./icons/sun.svg";
import btn_moon from "./icons/moon.svg";
import detectDarkMode from '../../../utils/detectDarkMode';

const BtnDarkMode = () => {
    // const [darkMode, setDarkMode] = useState('light');

    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode)

    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }

    }, [darkMode])

    useEffect(() => {
      // Если меняются системные настройки, меняем тему
      window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
          const newColorScheme = event.matches ? "dark" : "light";
          setDarkMode(newColorScheme)
      });
    }, [setDarkMode])

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
          return currentValue === 'light' ? 'dark' : 'light'
        })
    }

    const btnNormal = classes["dark-mode-btn"]
    const btnActive = `${classes["dark-mode-btn"]} ${classes["dark-mode-btn--active"]}`

  return (
    <>
    {darkMode}
    <button className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
        <img src={btn_sun} alt="Light mode" className={classes["dark-mode-btn__icon"]}/>
        <img src={btn_moon} alt="Dark mode" className={classes["dark-mode-btn__icon"]}/>
    </button>
    </>
  )
}

export default BtnDarkMode