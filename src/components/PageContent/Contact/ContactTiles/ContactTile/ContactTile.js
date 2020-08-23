import React from 'react'
import classes from './ContactTile.module.css'
import { FaEnvelope, FaPhoneAlt, FaRegClock } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md'
import Auxi from '../../../../../hoc/Auxilary/Auxilary'

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
    <Auxi>
      <div className={classes.ContactTileTitle}>{props.title}</div>
      <div className={classes.Content}>
        {iconElement(props.iconType)}
        <p className={classes.content}>{props.content}</p>
      </div>
    </Auxi>
  )
}

export default contactTile;