import titelize from 'titleize';
import * as moment from 'moment';

export const rentalType = isShared => isShared ? 'shared' : 'entire';

export const reservedParking = parking => parking? 'Yes' : 'No';

export const insideLaundry = laundry => laundry? 'Yes' : 'No';

export const petsFriendly = pets => pets? 'Yes' : 'No';

export const toUpperCase = value => value ? titelize(value) : '';

export const pretifyDate = date => moment(date).format('MMM Do YY');

export const shortDate = date => moment(date).format('MMMM Do, YYYY');

export const addComma = value => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const getRangeOfDates = (startAt, endAt, dateFormat = 'Y/MM/YY') => {
    const tempDates = [];
    const mEndAt = moment(endAt);
    let mStartAt = moment(startAt);

    while (mStartAt < mEndAt) {
        tempDates.push(mStartAt.format(dateFormat));
        mStartAt = mStartAt.add(1, 'day');
    }

    tempDates.push(mEndAt.format(dateFormat));

    return tempDates;
}
