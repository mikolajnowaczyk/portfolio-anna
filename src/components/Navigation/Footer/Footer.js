import React from 'react'

import classes from './Footer.css'
import { NavLink } from 'react-router-dom'
import { FaEnvelope, FaPhoneAlt, FaPlus, FaArrowCircleRight } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md'

const footer = () => (
  <footer className={classes.Footer}>
    <div className={classes.FooterElementWrapper}>
      <div className={classes.ContatctTile}>
        <h3>Kontakt</h3>
        <div className={classes.Footer__Content}>
          <FaEnvelope /><p className={classes.Footer__Content__Text}>ania.fizjo@gmail.com</p>
        </div>
        <div className={classes.Footer__Content}>
          <FaPhoneAlt /><p className={classes.Footer__Content__Text}>+48 123 456 789</p>
        </div>
        <div className={classes.Footer__Content}>
          <MdLocationOn /><p className={classes.Footer__Content__Text}>Bydgoszcz</p>
        </div>
        <div className={classes.Footer__Content}>
          <FaEnvelope /><p className={classes.Footer__Content__Text}>ania.fizjo@gmail.com</p>
        </div>
      </div>
      <div className={classes.ContatctTile}>
        <h3>Nawigacja</h3>
        <div className={classes.Footer__Content}>
          <FaPlus />
          <NavLink exact to="/" className={classes.Footer__Content__Link}> Strona główna </NavLink>
        </div>
        <div className={classes.Footer__Content}>
          <FaPlus />
          <NavLink exact to="/uslugi" className={classes.Footer__Content__Link}> Usługi </NavLink>
        </div>
        <div className={classes.Footer__Content}>
          <FaPlus />
          <NavLink exact to="/cennik" className={classes.Footer__Content__Link}> Cennik </NavLink>
        </div>
        <div className={classes.Footer__Content}>
          <FaPlus />
          <NavLink exact to="/kontakt" className={classes.Footer__Content__Link}> Kontakt </NavLink>
        </div>
      </div>
      <div className={classes.ContatctTile}>
        <h3>Polecane usługi</h3>
        <div className={classes.Footer__Content}>
          <FaArrowCircleRight />
          <NavLink exact to="/kinesiology-taping" className={classes.Footer__Content__Link}> Kinesiology Taping </NavLink>
        </div>
        <div className={classes.Footer__Content}>
          <FaArrowCircleRight />
          <NavLink exact to="/kinezyterapia" className={classes.Footer__Content__Link}> Kinezyterapia </NavLink>
        </div>
      </div>
    </div>
    <section className={classes.FooterBottom}>Projekt i wykonanie MN © 2020</section>
  </footer>
)

export default footer