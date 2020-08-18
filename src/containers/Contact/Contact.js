import React, { Component } from 'react'
// import Auxi from '../../hoc/Auxilary/Auxilary'
import classes from './Contact.module.css'
import ContactTiles from './ContactTiles/ContactTiles'
import ContactForm from './ContactForm/ContactForm'
// import emailjs from 'emailjs-com'

class Contact extends Component {
  render() {
    return (
      <div className={classes.Content}>
        <ContactTiles />
        <ContactForm />
      </div>
    )
  }
}

export default Contact