import React from 'react';
import './index.module.css';
import Layout from '../../hoc/Layout/Layout'
import Contact from '../../components/PageContent/Contact/Contact'
import Head from 'next/head'

const Index = () => (
  <Layout>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <title>Fizjoterapia Anna Karpińska | Terapia manualna, rehabilitacja, wizyty domowe | Bydgoszcz</title>
      {/* <link rel="canonical" href="http://www.anna-karpinska.pl/"></link> */}
      <meta name="description" content="Skontaktuj się ze mną - Anna Karpińska. Prowadzę działalność na terenie miasta Bydgoszcz i okolic. Zajmuję się rehabilitacją, masażem, terpią manualną oraz szeroko rozumianą fizjoterapią." />
      <meta name="keywords" content="kontakt, fizjoterapia, bydgoszcz, wizyta domowa, rehabilitacja, terapia manualna" />
    </Head>
    <Contact />
  </Layout>
)

export default Index;
