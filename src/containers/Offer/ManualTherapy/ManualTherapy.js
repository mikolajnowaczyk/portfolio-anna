import React, { Component } from 'react'
import OfferTile from '../OfferTile/OfferTile'
import classes from './ManualTherapy.css'
import { withRouter, Route, Switch, useRouteMatch } from 'react-router-dom'
import * as images from '../../../shared/images'
// import OfferView from './OfferView/OfferView'

const ManualTherapy = (props) => {
  let { path, url } = useRouteMatch();
  //console.log(path, url)
  return (
    <div>
      <h1 className={classes.title}>Terapie</h1>
      <h2 className={classes.description}>Oferuję szeroką gamę terapii. Sprawdź moją ofertę.</h2>
      <div className={classes.Massages}>
        <OfferTile link={`${url}/Cyriax`} exact image={images.shoulder}>Cyriax</OfferTile>
        <OfferTile link={`${url}/masaz-tkanek-glebokich`} image={images.test}>Masaż tkanek głebokich</OfferTile>
        <OfferTile link={`${url}/miesniowo-powieziowa`} exact image={images.back}>Terapia mięśniowo-powięziowa</OfferTile>
      </div>
    </div>)
}

export default withRouter(ManualTherapy)