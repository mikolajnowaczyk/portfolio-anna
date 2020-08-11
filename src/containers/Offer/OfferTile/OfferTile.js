import React from 'react'
import classes from './OfferTile.module.css'
import Link from "next/link"

const offerTile = (props) => {

  return (
    <div className={classes.OfferTile} style={{ backgroundImage: `url(${props.image})` }}>
      <div className={classes.Wrapper}>
        <Link href={props.link}>
          <a>{props.children}</a>
        </Link>
      </div>
    </div>
  );
};

export default offerTile;