import React, { Component } from 'react';
import { RentalList } from './RentalList';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Search } from '../../../shared/Search';

import * as actions from 'actions';

class RentalListing extends React.Component {
    
    componentWillMount() {
        this.props.dispatch(actions.fetchRentals());
    }

    render() {
        return (
            <section id='rentalListing'>
            <Search />
                <h1 className='page-title'>Apartments/Homes within 71115</h1>
                <RentalList rentals={this.props.rentals} />
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