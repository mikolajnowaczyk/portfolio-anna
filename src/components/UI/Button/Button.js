import React from 'react'

import classes from './Button.css'
import PropTypes from 'prop-types'

const button = (props) => (
  <button
    disabled={props.disabled}
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}>{props.children}</button>
)

button.propTypes = {
  btnType: PropTypes.string,
  children: PropTypes.any,
  clicked: PropTypes.func,
  disabled: PropTypes.bool
}

export default button