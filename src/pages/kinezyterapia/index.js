import React from 'react';
import './index.module.css';
import Layout from '../../hoc/Layout/Layout'
import KinesioTherapy from '../../components/PageContent/Offer/KinesioTherapy/KinesioTherapy'
import Head from 'next/head'

const Index = () => (
  <Layout>
    <Head>
      <title>Kinezyterapia Bydgoszcz</title>
      <meta property="og:title" content="My page title" key="title" />
      <meta name="description" content="Oferuję usługi " />
    </Head>
    <KinesioTherapy />
  </Layout>
)

export default Index;
