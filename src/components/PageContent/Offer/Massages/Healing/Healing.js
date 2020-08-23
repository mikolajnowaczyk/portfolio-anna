import React from 'react'
import OfferView from '../../OfferView/OfferView'
// import classes from './Healing.css'

const Healing = (props) => {
  return (
    <OfferView
      title="Masaż leczniczy"
      description="Opis masażu leczniczego"
      routine="Przebieg masażu"
      benefits={["Korzysc 1", "Zdrowie"]} />
  )
}

export default Healing