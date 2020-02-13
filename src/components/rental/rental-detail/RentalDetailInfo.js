import React from 'react';
import { RentalAssets } from './RentalAssets';
import { toUpperCase, rentalType } from 'helpers';
import Collapsible from 'react-collapsible';
import { petsFriendly } from 'helpers';
import { reservedParking, insideLaundry } from 'helpers';

export function RentalDetailInfo(props) {

    const rental = props.rental;

    return (
        <div className='rental'>
            { rentalType(rental.shared) === 'shared' &&  <h1 className='rental-title'>${rental.dailyRate}<span className='smallLetter'> per day</span></h1> }
            { rentalType(rental.shared) === 'entire' &&  <h1 className='rental-title'>${rental.monthlyRate}<span className='smallLetter'> per month</span></h1> }

            <hr/>
            <h2 className={`rental-type ${rental.category}`}>{rentalType(rental.shared)} {rental.category}</h2>
            <div className='rental-owner'>
                <img src='https://api.adorable.io/avatars/285/abott@adorable.png' alt='owner'/>
                <span>{rental.user && rental.user.username}</span>
            </div>
            <h1 className='rental-title'>{rental.title}</h1>
            <h2 className='rental-city'>{rental.street}, {toUpperCase(rental.city)} - {rental.zip}</h2>
            <hr></hr>
            <div className='rental-room-info'>
                <div className='row rental-assets'>
                    <div className='col-md-6 blockObject'>
                        <span><i className='fa fa-bed'></i>{rental.bedrooms} bedrooms</span>
                        <span><i className='fa fa-paw'></i> Pets Allowed: {petsFriendly(rental.pets)}</span>
                        <span><i className='fa fa-cube'></i> Laundry Room: {insideLaundry(rental.laundry)}</span>
                    </div>
                    <div className='col-md-6 blockObject'>
                        <span><i className='fa fa-bath'></i> {rental.bedrooms} baths</span>
                        <span><i className='fa fa-car'></i> Reserved Parking: {reservedParking(rental.parking)}</span>
                    </div>
                </div>

                <hr></hr>
                <Collapsible trigger="Details">
                    <p className='rental-description'>
                        {rental.description}
                    </p>
                </Collapsible>
                <hr></hr>
                <Collapsible trigger="Assets">
                    <RentalAssets />
                </Collapsible>
                <hr></hr>
                <Collapsible trigger="Neighborhood">
                    <p>To be filled</p>
                </Collapsible>
                <hr></hr>
                <Collapsible trigger="Nearby Schools">
                    <p>To be filled</p>
                </Collapsible>
            </div>
        </div>
    )
}