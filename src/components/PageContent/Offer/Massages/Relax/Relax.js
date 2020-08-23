import React from 'react'
import OfferView from '../../OfferView/OfferView'
// import classes from './Healing.css'
const test_text = "Relax";

const Relax = (props) => {
  return (
    <OfferView
      title={test_text}
      description={test_text}
      routine={test_text}
      benefits={[{ test_text }, "Korzyść 2"]} />
  )
}

export default Relax