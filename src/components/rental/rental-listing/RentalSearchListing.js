import React, { Component } from 'react';
import { RentalList } from './RentalList';
import { RentalMapMain } from './RentalMapMain';
import { connect } from 'react-redux';
// import { BrowserRouter, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';

import RentalSearchInput from '../../../components/rental/RentalSearchInput';

import { toUpperCase } from 'helpers';
import * as actions from 'actions';
import { MiddleHomeSection } from '../../home/MiddleHomeSection';

class RentalSearchListing extends React.Component {

    constructor() {
        super();

        this.state = {
            searchedCity: ''
        }
    }
    
    componentWillMount() {
        this.searchRentalsByCity();

    }

    componentDidUpdate(prevProps) {
        const currentUrlParam = this.props.match.params.city;
        const prevUrlParam = prevProps.match.params.city;

        if (currentUrlParam !== prevUrlParam) {
            this.searchRentalsByCity();
        }
    }

    searchRentalsByCity() {
        const searchedCity = this.props.match.params.city;
        this.setState({searchedCity});

        this.props.dispatch(actions.fetchRentals(searchedCity));
    }

    renderTitle() {
        const { errors, data } = this.props.rentals;
        const { searchedCity } = this.state;
        let title = '';

        if (errors.length > 0) {
            title = errors[0].detail;
        }
        if(data.length > 0) {
            title = `Apartments/Homes within ${toUpperCase(searchedCity)}.`;
        }
        return <h1 className='page-title'>{title}</h1>
    }

    // render() {
    //     return (
    //         <section id='rentalListing'>
    //         <RentalSearchInput />
    //             {this.renderTitle()}
    //             <RentalList rentals={this.props.rentals.data} />
    //         </section>
    //     )
    // }
    render() {
        const rental = this.props.rentals;
        return (
            <section id='rentalListing' className='wideView'>
                <div className='mainContainerSearch'>
                <RentalSearchInput />
                    <div className='mixedView'>
                        <div className='row'>
                        <div className='col-md-12 '>
                            {this.renderTitle()}
                            <RentalList rentals={this.props.rentals.data} />
                        </div>
                        {/* <div className='col-md-6 mapsFlow'> */}
                            {/* <h1>Maps here</h1> */}
                            {/* <RentalMapMain location={`${rental.city}, ${rental.street}`}/> */}
                        {/* </div> */}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        rentals: state.rentals
    }
}

export default connect(mapStateToProps)(RentalSearchListing)

