import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }
  if (props.elementType === "textarea") {
    inputClasses.push(classes.TextArea);
  }
  switch (props.elementType) {
    case ("input"):
      inputElement = <input
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        name={props.name}
        onChange={props.changed} />;
      break;
    case ('textarea'):
      inputElement = <textarea
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        name={props.name}
        onChange={props.changed}
        type={"text"}
        onKeyPress={props.supressEnterPropagation} />;
      break;
    case ('select'):
      inputElement = <select
        className={inputClasses.join(' ')}
        value={props.value}
        name={props.name}
        onChange={props.changed}>
        {
          props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))
        }
      </select>;
      break;
    default:
      inputElement = <input
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        name={props.name}
        onChange={props.changed} />;
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;