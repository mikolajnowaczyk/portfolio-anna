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
      <h1 className={classes.title}>Masaże</h1>
      <h2 className={classes.description}>Oferuję szeroką gamę masaży specjalistycznych, leczniczych oraz relaksacyjnych. Sprawdź moją ofertę.</h2>
      <div className={classes.Massages}>
        <OfferTile link={`${url}/leczniczy`} exact image={images.massage_woman}>Leczniczy</OfferTile>
        <OfferTile link={`${url}/klasyczny`} image={images.massage}>Klasyczny</OfferTile>
        <OfferTile link={`${url}/sportowy,`} exact image={images.back}>Sportowy</OfferTile>
        <OfferTile link={`${url}/izometryczny,`} exact image={images.back_roll}>Izometryczny</OfferTile>
        <OfferTile link={`${url}/drenaz-limfatyczny`} exact image={images.massage_oil}>Drenaż limfatyczny</OfferTile>

      </div>
      {/* <Switch>
        <Route path={`${path}/klasyczny`} component={OfferView} />
        <Route path={`${path}/sportowy`} component={OfferView} />
        <Route path={`${path}/izometryczny`} component={OfferView} />
        <Route path={`${path}/drenaz-limfatyczny`} component={OfferView} />
        <Route path={`${path}/leczniczy`} component={OfferView} />
      </Switch> */}
    </div>)
}

export default withRouter(ManualTherapy)