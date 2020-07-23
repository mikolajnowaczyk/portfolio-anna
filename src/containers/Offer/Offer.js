import React, { Component } from 'react'
import OfferTile from './OfferTile/OfferTile'
import classes from './Offer.css'
import { withRouter, Route, Switch, useRouteMatch } from 'react-router-dom'
import * as images from '../../shared/images'

const Offer = (props) => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h1 className={classes.head}>Moja oferta</h1>
      <div className={classes.Offer}>
        <OfferTile link={`${url}/masaze`} image={images.massage}>Masaże</OfferTile>
        <OfferTile link={`${url}/terapia-manualna`} exact image={images.back}>Terapia manualna</OfferTile>
        <OfferTile link={`${url}/kinesiology-taping`} exact image={images.back_roll}>Kinesiology taping</OfferTile>
        <OfferTile link={`${url}/kinezyterapia`} exact image={images.massage_oil}>Kinezyterapia</OfferTile>
        <OfferTile link={`${url}/wizyta-domowa`} exact image={images.massage_woman}>Wizyta domowa</OfferTile>
      </div>
    </div>)
}

export default withRouter(Offer)