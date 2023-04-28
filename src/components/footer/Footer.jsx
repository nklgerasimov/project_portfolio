import React from 'react'
import classes from './Footer.module.css'

import icon_vk from "./icons/vk.svg";
import icon_twitter from "./icons/twitter.svg";
import icon_linkedIn from "./icons/linkedIn.svg";
import icon_instagram from "./icons/instagram.svg";
import icon_gitHub from "./icons/gitHub.svg";
import icon_gitHubBlack from "./icons/gitHub-black.svg";

const Footer = () => {
  return (
    <footer className={classes.footer}>
        <div className="container">
            <div className={classes["footer__wrapper"]}>
                <ul className={classes.social}>
                    <li className={classes["social__item"]}><a href="#!"><img src={icon_vk} alt="Link"/></a></li>
                    <li className={classes["social__item"]}><a href="#!"><img src={icon_instagram} alt="Link"/></a></li>
                    <li className={classes["social__item"]}><a href="#!"><img src={icon_twitter} alt="Link"/></a></li>
                    <li className={classes["social__item"]}><a href="#!"><img src={icon_linkedIn} alt="Link"/></a></li>
                    <li className={classes["social__item"]}><a href="#!"><img src={icon_gitHub} alt="Link"/></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2022 frontend-dev.com</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer