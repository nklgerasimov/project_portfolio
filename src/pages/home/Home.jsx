import React from 'react';
import classes from './Home.module.css';

import Header from '../../components/header/Header';

const Home = () => {
  return (
    <>
        <Header/>
        <main className={classes["section-home"]}>
            <div className="container">

                    <ul className={classes["content-list"]}>
                        <li className={classes["content-list__item"]}>
                            <h2 className={classes["title-2"]}>Frontend</h2>
                            <p>JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</p>
                        </li>
                        <li className={classes["content-list__item"]}>
                            <h2 className={classes["title-2"]}>Backend</h2>
                            <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
                        </li>
                    </ul>

            </div>
        </main>
    </>
  )
}

export default Home