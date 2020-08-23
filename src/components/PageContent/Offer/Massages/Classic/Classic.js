import React from 'react'
import OfferView from '../../OfferView/OfferView'
const test_text = "Classic";

const Classic = () => {
  return (
    <OfferView
      title="Masaż klasyczny"
      description="Opis masażu leczniczego"
      routine="Przebieg masażu"
      benefits={["Korzysc 1", "Zdrowie"]} />
  )
}

export default Classic