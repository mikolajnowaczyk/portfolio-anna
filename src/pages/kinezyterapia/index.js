import React from 'react';
import './index.module.css';
import Layout from '../../hoc/Layout/Layout'
import KinesioTherapy from '../../components/PageContent/Offer/KinesioTherapy/KinesioTherapy'
import Head from 'next/head'

const Index = () => (
  <Layout>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <title>Fizjoterapia Anna Karpińska | Terapia manualna, rehabilitacja, wizyty domowe | Bydgoszcz</title>
      {/* <link rel="canonical" href="http://www.anna-karpinska.pl/"></link> */}
      <meta name="description" content="Magister fizjoterapi Anna Karpińska. Moja oferta to kinesiotaping, masaże, kinezyterapia i wizyty domowe. Moją ofertę realizuję w okolicach Bydgoszczy i okolic." />
      <meta name="keywords" content="fizjoterapia, bydgoszcz, wizyta domowa, rehabilitacja, terapia manualna" />
    </Head>
    <KinesioTherapy />
  </Layout>
)

export default Index;
