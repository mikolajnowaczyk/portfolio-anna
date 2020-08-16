import React, { StrictMode } from 'react';
import './index.module.css';
import Layout from '../hoc/Layout/Layout'
import Main from '../containers/Main/Main'
import HtmlHead from '../hoc/HtmlHead/HtmlHead'


const Index = () => (
  <StrictMode>
    <Layout>
      {/* <Head>
        <title>My index page</title>
        <link href="./" rel="stylesheet" />
      </Head> */}
      <HtmlHead title="Strona główna" />
      <Main />
    </Layout>
  </StrictMode>
)

export default Index;
