import React from 'react';
import Auxi from '../Auxilary/Auxilary'
import Head from 'next/head'

const HtmlHead = (props) => {
  return (
    <Auxi>
      <Head>
        <title>{props.title}</title>
        <meta property="og:title" content="My page title" key="title" />
        <link href="/static/styles.css" rel="stylesheet" />
      </Head>
    </Auxi>
  )
}

export default HtmlHead
