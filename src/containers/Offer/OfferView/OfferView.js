import React from "react";
import classes from './OfferView.css'
import Auxi from '../../../hoc/Auxilary/Auxilary'

const createBenefitsList = (input) => {
  const liItems = input.map((text) => {
    return <li> {text}</li>
  })
  return (
    <Auxi>
      <hr />
      <strong>Korzyści z zabiegu</strong>
      <ul>
        {liItems}
      </ul>
    </Auxi>
  )
}

const createRoutine = (text) => {
  return (
    <Auxi>
      <hr />
      <strong>Przebieg zabiegu</strong>
      <p>{text}</p>
    </Auxi>
  )
}

const OfferView = (props) => {
  const benefits = props.benefits ? createBenefitsList(props.benefits) : null;
  const routine = createRoutine(props.routine);
  return (
    <div className={classes.OfferView}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      {benefits}
      {routine}
    </div>
  )
};

export default OfferView;
