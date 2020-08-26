import React from 'react';
import './index.module.css';
import Layout from '../../../hoc/Layout/Layout'
import Classic from '../../../components/PageContent/Offer/ManualTherapy/Cyriax/Cyriax'

const Index = () => (
  <Layout>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <title>Fizjoterapia Anna Karpińska | Terapia manualna, rehabilitacja, wizyty domowe | Bydgoszcz</title>
      {/* <link rel="canonical" href="http://www.anna-karpinska.pl/"></link> */}
      <meta name="description" content="Magister fizjoterapi Anna Karpińska. Moja oferta to kinesiotaping, masaże, kinezyterapia i wizyty domowe. Moją ofertę realizuję w okolicach Bydgoszczy i okolic." />
      <meta name="keywords" content="fizjoterapia, bydgoszcz, wizyta domowa, rehabilitacja, terapia manualna" />
    </Head>
    <Classic />
  </Layout>
)

export default Index;
