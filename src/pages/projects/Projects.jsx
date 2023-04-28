import React from 'react'
import classes from './Projects.module.css'

import Project from '../../components/project/Project';
import {projects} from './../../helpers/projectsList/ProjectsList'

const Projects = () => {
  return (
    <main className={classes["section-project"]}>
        <div className="container">
            <h2 className={classes["title-1"]}>Projects</h2>
            <ul className={classes.projects}>
                {projects.map((project, index) => {
                    return (
                        <Project
                            key={index}
                            title={project.title}
                            img={project.img}
                        />
                    )
                })}
            

            </ul>
        </div>
    </main>
  )
}

export default Projects