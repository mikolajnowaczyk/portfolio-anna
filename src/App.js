import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import MainPage from './containers/Main/Main'
// import Offer from './containers/Offer/Offer'
// import Contact from './containers/Contact/Contact'
import Layout from './hoc/Layout/Layout'
import asyncComponent from './hoc/asyncComponent/asyncComponent'

const asyncOffer = asyncComponent(() => {
  return import('./containers/Offer/Offer');
})

const asyncPriceList = asyncComponent(() => {
  return import('./containers/PriceList/PriceList');
})

const asyncContact = asyncComponent(() => {
  return import('./containers/Contact/Contact');
})

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/kontakt" component={asyncContact} />
        <Route path="/cennik" component={asyncPriceList} />
        <Route path="/uslugi" component={asyncOffer} />
        <Route path="/" component={MainPage} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  };
};

export default App;
