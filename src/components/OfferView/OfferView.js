import React from "react";
import classes from './OfferView.css'

const offerView = (props) => (
  <div className={classes.OfferView}>
    <h2>Offer Title</h2>
    <p>Some text</p>
    <hr />
    <ul>
      <li>Adventages</li>
      <li>Adv1</li>
      <li>Adv1</li>
      <li>Adv1</li>
    </ul>
  </div>
);

export default offerView;
