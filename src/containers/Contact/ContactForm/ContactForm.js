import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from "./ContactForm.module.css";
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from "../../../components/UI/Input/Input"
import { updateObject, checkValidity } from '../../../shared/utility'

class ContactData extends Component {
  state = {
    form: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Imię i nazwisko'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        label: "Imię i nazwisko"
      },

      email: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Adres email'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        label: "Adres email"
      },

      temat: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Temat'
        },
        value: '',
        validation: {},
        valid: true,
        label: "Temat"
      },

      emailContent: {
        elementType: 'textarea',
        elementConfig: {
          placeholder: 'Wiadomość'
        },
        value: '',
        validation: {},
        valid: true,
        label: "Treść wiadomości"
      }
    },
    name: '',
    email: '',
    adress: {
      street: '',
      postalCode: ''
    },
    formIsValid: false
  }

  submitHandler = (event) => {
    event.preventDefault();
    //[TODO] Send email

  }

  inputChangedHandler = (event, inputIdentyfier) => {
    const updatedFormElement = updateObject(this.state.form[inputIdentyfier], {
      value: event.target.value,
      valid: checkValidity(event.target.value, this.state.form[inputIdentyfier].validation),
      touched: true
    });
    const updatedForm = updateObject(this.state.form, {
      [inputIdentyfier]: updatedFormElement
    });

    let formIsValid = true;
    for (let inputIdentifier in updatedForm) {
      formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ form: updatedForm, formIsValid: formIsValid });
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.form) {
      formElementsArray.push({
        id: key,
        label: this.state.form[key].label,
        config: this.state.form[key]
      })
    }
    let form = (
      <form onSubmit={this.submitHandler}>
        {formElementsArray.map(formElement => (
          <Input
            label={formElement.label}
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event, formElement.id)} />
        ))}
        <Button btnType="Success" disabled={!this.state.formIsValid} clicked={this.submitHandler}>Wyślij wiadomość</Button>
      </form>
    );
    if (this.props.loading) {
      form = <Spinner />
    }
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Masz pytania?</h2>
        <h3 style={{ textAlign: "center" }}>Zadzwoń lub wypełnij formularz!</h3>
        <div className={classes.ContactData}>
          {form}
        </div>
      </div >
    );
  }
}

export default ContactData;