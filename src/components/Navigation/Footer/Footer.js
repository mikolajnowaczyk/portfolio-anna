import React from 'react'
import classes from './Footer.module.css'
import Link from 'next/link'
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
        <div className={classes.Footer__Content__Link}>
          <FaPlus />
          <Link href="/">
            <a>Strona główna</a>
          </Link>
        </div>
        <div className={classes.Footer__Content__Link}>
          <FaPlus />
          <Link href="/uslugi">
            <a>Usługi</a>
          </Link>
        </div>
        <div className={classes.Footer__Content__Link}>
          <FaPlus />
          <Link href="/cennik">
            <a>Cennik</a>
          </Link>
        </div>
        <div className={classes.Footer__Content__Link}>
          <FaPlus />
          <Link href="/kontakt">
            <a>Kontakt</a>
          </Link>
        </div>
      </div>

      <div className={classes.ContatctTile}>
        <h3>Polecane usługi</h3>
        <div className={classes.Footer__Content__Link}>
          <FaArrowCircleRight />
          <Link href="/kinesiology-taping">
            <a>Kinesiology Taping</a>
          </Link>
        </div>
        <div className={classes.Footer__Content__Link}>
          <FaArrowCircleRight />
          <Link href="/kinezyterapia">
            <a>Kinezyterapia</a>
          </Link>
        </div>
      </div>
    </div>
    <div className={classes.FooterBottom}>Projekt i wykonanie MN © 2020</div>
  </footer>
)

export default footer