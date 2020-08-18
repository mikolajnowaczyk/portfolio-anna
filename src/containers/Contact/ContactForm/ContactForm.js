import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from "./ContactForm.module.css";
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from "../../../components/UI/Input/Input"
import { updateObject, checkValidity } from '../../../shared/utility'
import emailjs from 'emailjs-com';

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
        name: 'name',
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
        name: 'email',
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
        name: 'subject',
        validation: {
          required: true
        },
        valid: false,
        label: "Temat"
      },

      emailContent: {
        elementType: 'textarea',
        elementConfig: {
          placeholder: 'Wiadomość'
        },
        value: '',
        name: 'message',
        validation: {
          required: true
        },
        valid: false,
        label: "Treść wiadomości"
      }
    },
    formIsValid: false
  }

  supressEnterPropagation = (event) => {
    if (event.which === 13 || event.keyCode === 13 || event.key === "Enter")
      event.stopPropagation()
  }


  sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('gmail', 'portfolio_anna', e.target, 'user_z9SF83dTGjO3PzYOHuzWh')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  // submitHandler = (event) => {
  //   event.preventDefault();
  //   //[TODO] Send email

  // }

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
        config: this.state.form[key],
        name: this.state.form[key].name
      })
    }
    let form = (
      // <form onSubmit={this.sendEmail}>
      <form onSubmit={this.sendEmail} autoComplete="false">
        {formElementsArray.map(formElement => (
          <Input
            label={formElement.label}
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            name={formElement.config.name}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            supressEnterPropagation={this.supressEnterPropagation}
            changed={(event) => this.inputChangedHandler(event, formElement.id)} />
        ))}
        <Button btnType="Success" disabled={!this.state.formIsValid}>Wyślij wiadomość</Button>
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