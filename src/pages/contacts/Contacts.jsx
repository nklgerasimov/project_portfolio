import React from 'react'
import classes from './Contacts.module.css'

const Contacts = () => {
  return (
    <main className={classes["section-contacts"]}>
        <div className="container">
                <h1 className={classes["title-1"]}>Contacts</h1>

                <ul className={classes["content-list"]}>
                    <li className={classes["content-list__item"]}>
                        <h2 className={classes["title-2"]}>Location</h2>
                        <p>Moscow, Russia</p>
                    </li>
                    <li className={classes["content-list__item"]}>
                        <h2 className={classes["title-2"]}>Telegram / WhatsApp</h2>
                        <p><a href="tel:+79051234567">+7 (905) 123-45-67</a></p>
                    </li>
                    <li className={classes["content-list__item"]}>
                        <h2 className={classes["title-2"]}>Email</h2>
                        <p><a href="mailto:webdev@protonmail.com">webdev@protonmail.com</a></p>
                    </li>
                </ul>

        </div>
    </main>
  )
}

export default Contacts