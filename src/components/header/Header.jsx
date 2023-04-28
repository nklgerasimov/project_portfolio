import React from 'react'
import classes from './Header.module.css';
import Button from '../button/Button';

const Header = () => {
  return (
    <header className={classes.header}>
        <div className={classes["header__wrapper"]}>
            <h1 className={classes["header__title"]}>
                <strong>Hi, my name is <em>Yuri</em></strong><br/>
                a frontend developer
            </h1>
            <div className={classes["header__text"]}>
                <p>with passion for learning and creating.</p>
            </div>
            <Button/>
            
        </div>
    </header>
  )
}

export default Header