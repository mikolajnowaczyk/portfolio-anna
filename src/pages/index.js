import React, { StrictMode } from 'react';
import './index.module.css';
import Layout from '../hoc/Layout/Layout'
import Main from '../components/PageContent/Main/Main'
import HtmlHead from '../hoc/HtmlHead/HtmlHead'


const Index = () => (
  <StrictMode>
    <Layout>
      <HtmlHead title="Strona główna" />
      <Main />
    </Layout>
  </StrictMode>
)

export default Index;
