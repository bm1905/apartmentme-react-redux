import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from 'components/shared/form/Input';
import { ResError } from 'components/shared/form/ResError';
import { Select } from 'components/shared/form/Select';
import { TextArea } from 'components/shared/form/TextArea';
import { required, minLength4, validEmail } from 'components/shared/form/Validator';

const SurveyForm = props => {
    const { handleSubmit, pristine, submitting, submitCb, valid, yesNoOptions, listOptions, likelyOptions, errors } = props
    return (
        <form onSubmit={handleSubmit(submitCb)}>
            <Field
                options={yesNoOptions}
                name="q1"
                type="text"
                label='Did you find the website user friendly?'
                className='form-control'
                component={Select}
            />
            <Field
                options={yesNoOptions}
                name="q2"
                type="text"
                label='Did the website match your expectations?'
                className='form-control'
                component={Select}
            />
            <Field
                options={listOptions}
                name="q3"
                type="text"
                label='Are you trying to list or search for apartments?'
                className='form-control'
                component={Select}
            />
            <Field
                options={likelyOptions}
                name="q4"
                type="text"
                label='How likely are you to post your apartments/search for apartments to this website?'
                className='form-control'
                component={Select}
            />
            <Field
                name="q5"
                type="text"
                label='Where did you hear about us?'
                rows='2'
                className='form-control'
                component={TextArea}
                validate={[required]}
            />
            <Field
                name="q6"
                type="text"
                label='Do you have any suggestions or feedback?'
                rows='4'
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
    form: 'surveyForm', // a unique identifier for this form
})(SurveyForm)