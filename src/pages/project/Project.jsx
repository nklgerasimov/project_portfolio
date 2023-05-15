import React from 'react'
import { useParams } from 'react-router-dom'
import ButtonGitHub from '../../components/button/buttonGitHub/ButtonGitHub'
import classes from './Project.module.css'
import { projects } from '../../helpers/projectsList/ProjectsList'

import img from './../../img/projects/02-big.jpg'


const Project = () => {
  const {id} = useParams()
  const project = projects[id]

  return (
    <main className={classes["section-project"]}>
    <div className="container">
        <div className={classes["project-details"]}>
            <h1 className={classes["title-1"]}>{project.title}</h1>
           
            <img src={project.imgBig} alt={project.title} className={classes["project-details__cover"]} />

            <div className={classes["project-details__desc"]}>
                <p>{project.skills}</p>
            </div>

            {project.gitHubLink && (
                <ButtonGitHub link="https://github.com" />
            )}

        </div>
    </div>
</main>
  )
}

export default Project