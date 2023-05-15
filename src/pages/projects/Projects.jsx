import React from 'react'
import classes from './Projects.module.css'

import Project from '../../components/project/Project';
import {projects} from './../../helpers/projectsList/ProjectsList'
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';

const Projects = () => {
  return (
    <main className={classes["section-project"]}>
        <div className="container">
            <h2 className={classes["title-1"]}>Projects</h2>
            <ul className={classes.projects}>
                {projects.map((project) => {
                    return (
                                <Project
                                    key={project.id}
                                    title={project.title}
                                    img={project.img}
                                    index={project.id}
                                />
                    )
                })}
            

            </ul>
        </div>
    </main>
  )
}

export default Projects