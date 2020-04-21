const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more!` : undefined

const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less!` : undefined

export const minLength4 = minLength(4);

export const maxLength15 = maxLength(15);

export const required = value => (value ? undefined : 'This input is required!');

export const validEmail = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address!' : undefined

export const validPhone = value =>
    value && !/^\d{10}$/i.test(value) ?
        'Invalid Phone Number! Required format: 1112220000' : undefined
