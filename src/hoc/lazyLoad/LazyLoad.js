import React, { Suspense } from 'react'

const LazyLoad = ({ component: Component, ...rest }) => {
  //console.log(rest)
  return (
    <Suspense fallback={<h1>Ładowanie ...</h1>}>
      <Component {...rest} />
    </Suspense>
  )
}

export default LazyLoad;