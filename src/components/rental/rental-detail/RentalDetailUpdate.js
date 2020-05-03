import React from 'react';
import { RentalAssets } from './RentalAssets';
import { toUpperCase, rentalType } from 'helpers';
import Collapsible from 'react-collapsible';
import { petsFriendly } from 'helpers';
import { reservedParking, insideLaundry } from 'helpers';
import{ toast } from 'react-toastify';

import * as actions from 'actions';

import { EditableInput } from '../../shared/editable/EditableInput';
import { EditableText } from '../../shared/editable/EditableText';
import { EditableSelect} from '../../shared/editable/EditableSelect';

export class RentalDetailUpdate extends React.Component{

    constructor() {
        super();

        this.updateRental = this.updateRental.bind(this);
        this.resetRentalErrors = this.resetRentalErrors.bind(this);
    }

    updateRental(rentalData) {

        const {rental: {_id}, dispatch} = this.props;

        dispatch(actions.updateRental(_id, rentalData));
    }

    resetRentalErrors() {
        this.props.dispatch(actions.resetRentalErrors());
    }

    render() {
        
    const { rental, errors } = this.props;

    if (errors && errors.length > 0) {
        toast.error(errors[0].detail);
    }

    return (
        <div className='rental'>
            {/* { rentalType(rental.shared) === 'shared' &&  <h1 className='rental-title'>${rental.dailyRate}<span className='smallLetter'> per day</span></h1> } */}
            {/* { rentalType(rental.shared) === 'entire' &&  <h1 className='rental-title'>${rental.monthlyRate}<span className='smallLetter'> per month</span></h1> } */}

            { rentalType(rental.shared) === 'shared' &&  <h1 className='rental-title'>$ per day
            {/* {rental.dailyRate} */}
            <EditableInput entity={rental} 
                            entityField={'dailyRate'} 
                            className={'rental-title'}
                            updateEntity={this.updateRental}
                            errors={errors}
                            resetErrors={this.resetRentalErrors}/>
            <span className='smallLetter'></span></h1> }

            { rentalType(rental.shared) === 'entire' &&  <h1 className='rental-title'>$ per month
                {/* ${rental.monthlyRate} */}
                <EditableInput entity={rental} 
                            entityField={'monthlyRate'} 
                            className={'rental-title'}
                            updateEntity={this.updateRental}
                            errors={errors}
                            resetErrors={this.resetRentalErrors}/>
                <span className='smallLetter'> 
            </span></h1> }

  

            <hr/>
            {/* <h2 className={`rental-type ${rental.category}`}>{rentalType(rental.shared)} {rental.category}</h2> */}

            <label className={`rental-label rental-type ${rental.category}`}>Shared</label>

            <EditableSelect entity={rental} 
                            entityField={'shared'} 
                            className={`rental-type ${rental.category}`}
                            updateEntity={this.updateRental}
                            options={[true, false]}
                            containerStyle={{'display': 'inline-block'}}
                            errors={errors}
                            resetErrors={this.resetRentalErrors}/>

            <EditableSelect entity={rental} 
                            entityField={'category'} 
                            className={`rental-type ${rental.category}`}
                            updateEntity={this.updateRental}
                            options={['Apartment', 'House', 'Condo']}
                            errors={errors}
                            resetErrors={this.resetRentalErrors}/>

            <div className='rental-owner'>
                <img src='https://api.adorable.io/avatars/285/abott@adorable.png' alt='owner'/>
                <span>{rental.user && rental.user.username}</span>
            </div>
            {/* <h1 className='rental-title'>{rental.title}</h1> */}

            <EditableInput entity={rental} 
                            entityField={'title'} 
                            className={'rental-title'}
                            updateEntity={this.updateRental}
                            errors={errors}
                            resetErrors={this.resetRentalErrors}/>

            <EditableInput entity={rental} 
                            entityField={'street'} 
                            className={'rental-street'}
                            updateEntity={this.updateRental}
                            errors={errors}
                            resetErrors={this.resetRentalErrors}/>

            <EditableInput entity={rental} 
                            entityField={'city'} 
                            className={'rental-city'}
                            updateEntity={this.updateRental}
                            errors={errors}
                            formatPipe={[toUpperCase]}
                            resetErrors={this.resetRentalErrors}/> 

            <EditableInput entity={rental} 
                            entityField={'zip'} 
                            className={'rental-zip'}
                            updateEntity={this.updateRental}
                            errors={errors}
                            resetErrors={this.resetRentalErrors}/> 

            <br/>
            <h2 className='rental-city'>{rental.street}, {toUpperCase(rental.city)} - {rental.zip}</h2>
            <hr/>
            <div className='rental-room-info'>
                <div className='row rental-assets'>
                    <div className='col-md-6 blockObject'>
                        <span><i className='fa fa-bed'></i>
                            <EditableInput entity={rental} 
                                entityField={'bedrooms'} 
                                className={'rental-bedrooms'}
                                containerStyle={{'display': 'inline-block'}}
                                updateEntity={this.updateRental}
                                errors={errors}
                                resetErrors={this.resetRentalErrors}/>
                         bedrooms</span>
                        <span><i className='fa fa-paw'></i> Pets Allowed:&nbsp;  
                        <EditableSelect entity={rental} 
                                entityField={'pets'} 
                                className={'rental-pets'}
                                containerStyle={{'display': 'inline-block'}}
                                updateEntity={this.updateRental}
                                options={[true, false]}
                                errors={errors}
                                resetErrors={this.resetRentalErrors}/>
                        {/* {petsFriendly(rental.pets)} */}
                        </span>
                        <span><i className='fa fa-cube'></i> Laundry Room:&nbsp;
                        <EditableSelect entity={rental} 
                                entityField={'laundry'} 
                                className={'rental-laundry'}
                                containerStyle={{'display': 'inline-block'}}
                                updateEntity={this.updateRental}
                                options={[true, false]}
                                errors={errors}
                                resetErrors={this.resetRentalErrors}/>
                        {/* {insideLaundry(rental.laundry)} */}
                        </span>
                    </div>
                    <div className='col-md-6 blockObject'>
                        <span><i className='fa fa-bath'></i> 
                        {/* {rental.bath}  */}
                        <EditableInput entity={rental} 
                                entityField={'bath'} 
                                className={'rental-baths'}
                                containerStyle={{'display': 'inline-block'}}
                                updateEntity={this.updateRental}
                                errors={errors}
                                resetErrors={this.resetRentalErrors}/>
                        baths</span>
                        <span><i className='fa fa-car'></i> Reserved Parking:&nbsp; 
                        <EditableSelect entity={rental} 
                                entityField={'parking'} 
                                className={'rental-parking'}
                                containerStyle={{'display': 'inline-block'}}
                                updateEntity={this.updateRental}
                                options={[true, false]}
                                errors={errors}
                                resetErrors={this.resetRentalErrors}/>
                        {/* {reservedParking(rental.parking)} */}
                        </span>
                    </div>
                </div>

                {/* <hr></hr> */}
                {/* <Collapsible trigger="Details">
                <EditableText entity={rental} 
                            entityField={'description'} 
                            className={'rental-description'}
                            updateEntity={this.updateRental}
                            rows={6}
                            cols={33}
                            errors={errors}/>
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
                </Collapsible> */}
            </div>
        </div>
    )

    }

}