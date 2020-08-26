import React from 'react';
import './index.module.css';
import Layout from '../../hoc/Layout/Layout'
import PriceList from '../../components/PageContent/PriceList/PriceList'

const Index = () => (
  <Layout>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <title>Fizjoterapia Anna Karpińska | Terapia manualna, rehabilitacja, wizyty domowe | Bydgoszcz</title>
      {/* <link rel="canonical" href="http://www.anna-karpinska.pl/"></link> */}
      <meta name="description" content="Cennik moich usług. Proszę o zapoznanie się z cenami za moje usługi wizyt domowych oraz z zakresu masażu, rehabilitacji, terapii manualnej oraz szeroko pojętej fizjoterapii w Bydgoszczy." />
      <meta name="keywords" content="cennik, fizjoterapia, bydgoszcz, wizyta domowa, rehabilitacja, terapia manualna" />
    </Head>
    <PriceList />
  </Layout>
)

export default Index;
