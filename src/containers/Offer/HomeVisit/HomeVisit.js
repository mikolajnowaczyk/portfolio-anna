import React, { Component } from 'react'
import OfferView from '../OfferView/OfferView'
import classes from './HomeVisit.css'

const HomeVisit = (props) => {
  return (
    <OfferView
      title="Wizyta domowa"
      description="Opis Wizyta domowa"
      // routine="Przebieg masażu"
      benefits={["Korzysc 1", "Zdrowie"]} />
  )
}

export default HomeVisit