import React from 'react'
import classes from './Project.module.css'


const Project = (props) => {
  return (
    <li className={classes.project}>
        <a href="./project-page.html">
            <img src={props.img} alt={props.title} className={classes["project__img"]} />
            <h3 className={classes["project__title"]}>{props.title}</h3>
        </a>
    </li>
  )
}

export default Project