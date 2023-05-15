import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import classes from './Project.module.css'


const Project = (props) => {
  return (
    <NavLink to={`/project/${props.index}`}>
        <li className={classes.project}>
          
                <img src={props.img} alt={props.title} className={classes["project__img"]} />
                {props.index}
                <h3 className={classes["project__title"]}>{props.title}</h3>
       
        </li>
    </NavLink>
  )
}

export default Project