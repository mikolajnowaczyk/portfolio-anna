import React from 'react';
import './index.module.css';
import Layout from '../../hoc/Layout/Layout'
import Contact from '../../containers/Contact/Contact'


const Index = () => (
  <Layout>
    <Contact />
  </Layout>
)

export default Index;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
