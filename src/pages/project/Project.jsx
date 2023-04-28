import React from 'react'
import classes from './Project.module.css'
import img from './../../img/projects/02-big.jpg'

import ButtonGitHub from '../../components/button/buttonGitHub/ButtonGitHub'

const Project = () => {
  return (
    <main className={classes["section-project"]}>
    <div className="container">
        <div className={classes["project-details"]}>

            <h1 className={classes["title-1"]}>Video service</h1>

            <img src={img} alt="" className={classes["project-details__cover"]} />

            <div className={classes["project-details__desc"]}>
                <p>Skills: React, Node.js, MongoDB</p>
            </div>

            <ButtonGitHub link="https://github.com" />

        </div>
    </div>
</main>
  )
}

export default Project