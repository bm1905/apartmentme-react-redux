import React, { Component } from 'react';
import { RentalList } from './RentalList';
import { RentalMapMain } from './RentalMapMain';
import { connect } from 'react-redux';
// import { BrowserRouter, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';

// import { Search } from '../../../components/shared/Search';
import RentalSearchInput from '../../../components/rental/RentalSearchInput';

import * as actions from 'actions';

class RentalListing extends React.Component {
    
    componentWillMount() {
        this.props.dispatch(actions.fetchRentals());
    }

    render() {
        // return (
        //     <section id='rentalListing' className='wideView'>
        //     <RentalSearchInput />
        //         <h1 className='page-title'>Apartments/Homes within 71115</h1>
        //         <RentalList rentals={this.props.rentals} />
        //     </section>
        // )
        const rental = this.props.rentals;
        return (
            <section id='rentalListing' className='wideView'>
            <RentalSearchInput />

            <div className='mixedView'>
                <div className='row'>
                <div className='col-md-6 homesFlow'>
                    <h1 className='page-title'>Route for Testing Purpose</h1>
                    <RentalList rentals={this.props.rentals} />
                </div>
                <div className='col-md-6 mapsFlow'>
                    {/* <h1>Maps here</h1> */}
                    <RentalMapMain location={`${rental.city}, ${rental.street}`}/>
                </div>
                </div>
            </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        rentals: state.rentals.data
    }
}

export default connect(mapStateToProps)(RentalListing)