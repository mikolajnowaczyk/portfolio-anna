import React from 'react'
import OfferView from '../OfferView/OfferView'
import classes from './KinesioTherapy.module.css'
const test_text = "KinesioTherapy";

const KinesioTherapy = () => {
  return (
    // <OfferView
    //   title={test_text}
    //   description={test_text}
    //   routine={test_text}
    //   benefits={["Korzyść 2"]} />
    <div className={classes.Wrapper}>
      <h2>Kinezyterapia</h2>
      <section>
        Kinezyterapia wykorzystuje ruch jako środek leczniczy. Najczęściej wykorzystywana jest we wszelkiego rodzaju schorzeniach i dysfunkcjach układu ruchu – bólach kręgosłupa, wadach postawy, po udarze mózgu, zawale serca, chorobach reumatycznych. Prawidłowo prowadzone ćwiczenia rehabilitacyjne znacząco przyspieszają leczenie i powrót do pełnej sprawności.
      </section>
      <section>
        Efekty działania:
        <ul>
          <li>Przywrócenie możliwie największej sprawności fizycznej</li>
          <li>Przywrócenie ruchomości w stawach, siły i wytrzymałości mięśni</li>
          <li>Poprawa funkcji układu nerwowego</li>
          <li>Poprawa wydolności narządowej</li>
          <li>Korekcja wad postawy i patologicznych wzorców ruchowych</li>
        </ul>
      </section>
      <section>
        Wskazania do kinezyterapii:
        <ul>
          <li>Bóle kręgosłupa</li>
          <li>Schorzenia i dysfunkcje narządu ruchu</li>
          <li>Niektóre choroby układu oddechowego</li>
          <li>Choroby reumatoidalne</li>
          <li>Wady postawy</li>
        </ul>
      </section>
    </div >
  )
}

export default KinesioTherapy