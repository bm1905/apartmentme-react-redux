import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from 'components/shared/form/Input';
import { ResError } from 'components/shared/form/ResError'

const RegisterForm = props => {
  const { handleSubmit, pristine, submitting, submitCb, valid, errors } = props
  return (
    <form onSubmit={handleSubmit(submitCb)}>
          <Field
            name="username"
            type="text"
            label='Username'
            className='form-control'
            component={Input}
          />
          <Field
            name="email"
            type="email"
            label='Email'
            className='form-control'
            component={Input}
          />
          <Field
            name="password"
            type="password"
            label='Password'
            className='form-control'
            component={Input}
          />
          <Field
            name="passwordConfirmation"
            type="password"
            label='Password Confirmation'
            className='form-control'
            component={Input}
          />
        <button className='btn btn-bwm btn-form' type="submit" disabled={!valid || pristine || submitting}>
          Register
        </button>
        {
            <ResError errors={errors} />
        }
    </form>
  )
}

const validate = values => {
    const errors = {}

    if (values.username && values.username.length < 4) {
        errors.username = 'Username should be at least 4 characters!';
    }

    if (!values.email) {
        errors.email = 'Please enter email!';
    }

    if (!values.passwordConfirmation) {
        errors.passwordConfirmation = 'Please enter password!';
    }

    if (values.password !== values.passwordConfirmation) {
        errors.password = 'Password must be same!';
    }
    // if (!values.username) {
    //   errors.username = 'Required'
    // } else if (values.username.length > 15) {
    //   errors.username = 'Must be 15 characters or less'
    // }
    // if (!values.email) {
    //   errors.email = 'Required'
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //   errors.email = 'Invalid email address'
    // }
    // if (!values.age) {
    //   errors.age = 'Required'
    // } else if (isNaN(Number(values.age))) {
    //   errors.age = 'Must be a number'
    // } else if (Number(values.age) < 18) {
    //   errors.age = 'Sorry, you must be at least 18 years old'
    // }
    return errors;
  }

export default reduxForm({
  form: 'registerform', // a unique identifier for this form
  validate
})(RegisterForm)