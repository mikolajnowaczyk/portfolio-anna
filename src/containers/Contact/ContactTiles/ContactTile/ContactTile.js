import React from 'react'
import classes from './ContactTile.css'
import { FaEnvelope, FaPhoneAlt, FaRegClock } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md'

export const iconElement = (iconType) => {
  switch (iconType) {
    case "email":
      return <FaEnvelope />;
    case "location":
      return <MdLocationOn />;
    case "hours":
      return <FaRegClock />;
    case "phone":
      return <FaPhoneAlt />;

    default:
      return null;
  }
}

const contactTile = (props) => {
  return (
    <div className={classes.ContatctTile}>
      <div className={classes.ContactTileTitle}>{props.title}</div>
      <div className={classes.Content}>
        {iconElement(props.iconType)}
        <p className={classes.content}>{props.content}</p>
      </div>
    </div>
  )
}

export default contactTile;