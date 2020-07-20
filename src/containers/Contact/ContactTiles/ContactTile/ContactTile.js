import React from 'react'
import classes from './ContactTile.css'
import { FaEnvelope, FaPhoneAlt, FaRegClock } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md'

const iconElement = (iconType) => {
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
  let icon = props.iconType;
  return (<div className={classes.ContatctTile}>
    <h3>{props.title}</h3>
    <div className={classes.Content}>
      {iconElement(props.iconType)}
      <p className={classes.content}>{props.content}</p>
    </div>
  </div>)
}

export default contactTile;