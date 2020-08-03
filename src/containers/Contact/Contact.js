import React, { Component } from 'react'
// import Auxi from '../../hoc/Auxilary/Auxilary'
import classes from './Contact.css'
import ContactTiles from './ContactTiles/ContactTiles'
import ContactForm from './ContactForm/ContactForm'


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