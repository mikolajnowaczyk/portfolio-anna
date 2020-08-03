import React, { Component } from 'react'
import OfferView from '../OfferView/OfferView'
// import classes from './Healing.css'
const test_text = "KinesioTherapy";

const KinesioTherapy = (props) => {
  return (
    <OfferView
      title={test_text}
      description={test_text}
      routine={test_text}
      benefits={["Korzyść 2"]} />
  )
}

export default KinesioTherapy