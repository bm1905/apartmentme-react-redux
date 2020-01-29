import React from 'react';

export const Input = ({
    input,
    label,
    type,
    className,
    meta: { touched, error, warning }
  }) => (
    <div className='form-group'>
      <label>{label}</label>
        <div className='imput-group'>
            <input {...input} type={type} className={className}/>
        </div>
        {touched &&
          ((error && <div className='alert alert-danger'>{error}</div>))}
      
    </div>
  )