import React from 'react'
import classes from './Navbar.module.css';

import btn_sun from "./icons/sun.svg";
import btn_moon from "./icons/moon.svg";

import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const activeLink = `${classes["nav-list__link"]} ${classes["nav-list__link--active"]}`
    const normalLink = classes["nav-list__link"]

  return (
    <nav className={classes.nav}>
        <div className="container">
            <div className={classes["nav-row"]}>
                <NavLink to='/' className={classes.logo}>
                    <strong>Freelancer</strong> portfolio
                </NavLink>

                <button className={classes["dark-mode-btn"]}>
                    <img src={btn_sun} alt="Light mode" className={classes["dark-mode-btn__icon"]}/>
                    <img src={btn_moon} alt="Dark mode" className={classes["dark-mode-btn__icon"]}/>
                </button>

                <ul className={classes["nav-list"]}>
                    <li className={classes["nav-list__item"]}>
                        <NavLink to='/' className={({isActive}) => isActive ? activeLink : normalLink}>
                            Home
                        </NavLink>
                    </li>
                    <li className={classes["nav-list__item"]}>
                        <NavLink to='/projects' className={({isActive}) => isActive ? activeLink : normalLink}>
                            Projects
                        </NavLink>
                    </li>

                    <li className={classes["nav-list__item"]}>
                        <NavLink to='/contacts' className={({isActive}) => isActive ? activeLink : normalLink}>
                            Contacts
                        </NavLink>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar