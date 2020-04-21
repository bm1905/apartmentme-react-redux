import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from 'components/shared/form/Input';
import { ResError } from 'components/shared/form/ResError';
import { TextArea } from 'components/shared/form/TextArea';
import { required, minLength4, validEmail } from 'components/shared/form/Validator';

const ContactUsForm = props => {
    const { handleSubmit, pristine, submitting, submitCb, valid, errors } = props
    return (
        <form onSubmit={handleSubmit(submitCb)}>
            <Field
                name="name"
                type="text"
                label='Name'
                className='form-control'
                validate={[required, minLength4]}
                component={Input}
            />
            <Field
                name="email"
                type="email"
                label='Email'
                className='form-control'
                component={Input}
                validate={[required, validEmail]}
            />
            <Field
                name="subject"
                type="text"
                label='Subject'
                className='form-control'
                component={Input}
                validate={[required, minLength4]}
            />
            <Field
                name="message"
                type="text"
                label='Message'
                rows='7'
                className='form-control'
                component={TextArea}
                validate={[required]}
            />
            <button className='btn btn-bwm btn-form' type="submit" disabled={!valid || pristine || submitting}>
                Submit
        </button>
            <ResError errors={errors} />
        </form>
    )
}

export default reduxForm({
    form: 'contactUsForm', // a unique identifier for this form
})(ContactUsForm)