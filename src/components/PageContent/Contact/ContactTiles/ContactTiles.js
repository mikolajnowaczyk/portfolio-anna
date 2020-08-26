import React from 'react'
import ContactTile from './ContactTile/ContactTile'
import classes from './ContactTiles.module.css'
import Auxi from '../../../../hoc/Auxilary/Auxilary'

const contactTiles = () => {
  return (
    <div className={classes.ContactTilesWrapper}>
      <h2 style={{ textAlign: "center", color: "#0080FF", marginBottom: "62px" }}>Dane kontaktowe</h2>
      <div className={classes.ContactTiles}>
        <ContactTile title="ADRES" content="ul. Anny 1, 85-347 Bydgoszcz" iconType="location"></ContactTile>
        <ContactTile title="TELEFON" content="123-456-789" iconType="phone"></ContactTile>
        <ContactTile title="EMAIL" content="ania.fizjo@gmail.com" iconType="email"></ContactTile>
        <ContactTile title="GODZINY OTWARCIA" content="pon-pt: 09:00 - 18:00" iconType="hours"></ContactTile>
      </div>
    </div>
  )
}

export default contactTiles;