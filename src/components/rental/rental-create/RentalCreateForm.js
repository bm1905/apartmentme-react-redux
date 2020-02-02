import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from 'components/shared/form/Input';
import { TextArea } from 'components/shared/form/TextArea';
import { Select } from 'components/shared/form/Select';
import { FileUpload } from 'components/shared/form/FileUpload';
import { ResError } from 'components/shared/form/ResError';
import { required, minLength4 } from 'components/shared/form/Validator';

const RentalCreateForm = props => {
  const { handleSubmit, pristine, submitting, submitCb, valid, options, errors} = props
  return (
    <form onSubmit={handleSubmit(submitCb)}>
          <Field
            name="title"
            type="text"
            label='Title'
            className='form-control'
            component={Input}
          />
        <Field
            name="description"
            type="text"
            label='Description'
            rows='7'
            className='form-control'
            component={TextArea}
          />
         <Field
            name="street"
            type="text"
            label='Street'
            className='form-control'
            component={Input}
          />
            <Field
            name="city"
            type="text"
            label='City'
            className='form-control'
            component={Input}
          />
            <Field
            options={options}
            name="category"
            type="text"
            label='Category'
            className='form-control'
            component={Select}
          />
        <Field
            name="image"
            label='Image'
            component={FileUpload}
          />
            <Field
            name="bedrooms"
            type="number"
            label='Bedrooms'
            className='form-control'
            component={Input}
          />
        <Field
            name="shared"
            type="checkbox"
            label='Shared'
            className='form-control'
            className='sharedBox'
            component={Input}
          />
          <Field
            name="dailyRate"
            type="text"
            label='Daily Rate'
            className='form-control'
            symbol='$'
            component={Input}
          />
        <button className='btn btn-bwm btn-form' type="submit" disabled={!valid || pristine || submitting}>
          Post Rental
        </button>
        <ResError errors={errors}/>
    </form>
  )
}

export default reduxForm({
  form: 'rentalcreateform', // a unique identifier for this form
  initialValues: { shared: true, category: 'apartment' }
})(RentalCreateForm)