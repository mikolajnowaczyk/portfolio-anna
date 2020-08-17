import React from 'react'
import classes from './OfferTile.module.css'
import Link from "next/link"

const offerTile = (props) => {

  return (
    <div className={classes.Wrapper}>
      <img src={props.image} alt={props.imageAlt} className={classes.Image} />
      <div className={classes.LinkWrapper}>
        <Link href={props.link}>
          <a>{props.text}</a>
        </Link>
      </div>
    </div>
  );
};

export default offerTile;