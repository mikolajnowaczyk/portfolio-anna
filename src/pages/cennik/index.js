import React from 'react';
import './index.module.css';
import Layout from '../../hoc/Layout/Layout'
import PriceList from '../../containers/PriceList/PriceList'


const Index = () => (
  <Layout>
    <PriceList />
  </Layout>
)

export default Index;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
