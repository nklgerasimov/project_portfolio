import React from 'react'
import classes from './ButtonGitHub.module.css'
import gitHub from './../../footer/icons/gitHub-black.svg'

const ButtonGitHub = ({link}) => {
  return (
    <a href={link} target='_blank' rel='noreferrer' className={classes["btn-outline"]}>
        <img src={gitHub} alt="" />
        GitHub repo
    </a>
  )
}

export default ButtonGitHub