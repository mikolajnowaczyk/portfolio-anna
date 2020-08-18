import React from 'react'
import classes from './Button.module.css'

const button = (props) => {
  const subjectType = props.subject ? "subject" : "";
  return (
    <button
      type={subjectType}
      disabled={props.disabled}
      className={[classes.Button, classes[props.btnType]].join(' ')}
      onClick={props.clicked}>{props.children}</button>
  )
}

export default button