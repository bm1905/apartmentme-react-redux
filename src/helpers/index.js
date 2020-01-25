import titelize from 'titleize';

export const rentalType = isShared => isShared ? 'shared' : 'entire';

export const toUpperCase = value => value ? titelize(value) : '';