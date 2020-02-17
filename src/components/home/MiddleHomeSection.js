import React from 'react';
import { Link } from 'react-router-dom';
import { RentalCard } from '../../components/rental/rental-listing/RentalCard';

export class MiddleHomeSection extends React.Component {

    

    renderFeatured() {
        return this.props.rentals.slice(0, 4).map((rental, index) => {
            return (
                <RentalCard key={index}
                            colNum='col-md-3 col-xs-6'
                            rental={rental}/>
            )
        }); 
    }

    renderAffordable() {
        return this.props.rentals.slice(4, 8).map((rental, index) => {
            return (
                <RentalCard key={index}
                            colNum='col-md-3 col-xs-6'
                            rental={rental}/>
            )
        }); 
    }

    renderSafe() {
        return this.props.rentals.slice(2, 6).map((rental, index) => {
            return (
                <RentalCard key={index}
                            colNum='col-md-3 col-xs-6'
                            rental={rental}/>
            )
        }); 
    }

    renderNew() {
        return this.props.rentals.slice(6, 10).map((rental, index) => {
            return (
                <RentalCard key={index}
                            colNum='col-md-3 col-xs-6'
                            rental={rental}/>
            )
        }); 
    }

 


    render() {

        return (
            <section id='rentalListing' className='wideView'>
                    <div className='mainContainer'>
                        <div className='textTitle'>
                            <h2 className='text'>Featured Listings</h2>
                            <h3 className='homesAvailable'>Features homes in Shreveport</h3>
                        </div>
                        <div className='col-md-12 '>
                            <div className='row'>
                                {this.renderFeatured()}
                            </div>
                        </div>
                        <div className='seeMoreContainer'>
                            {/* <button className='seeMoreListing'>See more listings</button> */}
                            <a href='/rentals/Shreveport/homes'><button className='seeMoreListing' onClick=''>See more listings</button></a>
                        </div>
                    </div>
                    <hr className='line'></hr>

                    <div className='mainContainer'>
                        <div className='textTitle'>
                            <h2 className='text'>Most Affordable</h2>
                            <h3 className='highestPriced'>The most affordable homes in Shreveport</h3>
                        </div>
                        <div className='col-md-12 '>
                            <div className='row'>
                                {this.renderAffordable()}
                            </div>
                        </div>
                        <div className='seeMoreContainer'>
                            {/* <button className='seeMoreListing'>See more listings</button> */}
                            <a href='/rentals/Shreveport/homes'><button className='seeMoreListing' onClick=''>See more listings</button></a>
                        </div>
                    </div>
                    <hr className='line'></hr>

                    <div className='mainContainer'>
                        <div className='textTitle'>
                            <h2 className='text'>Safe Area</h2>
                            <h3 className='homesAvailable'>Shreveport homes located at lowest crime rates</h3>
                        </div>
                        <div className='col-md-12 '>
                            <div className='row'>
                                {this.renderAffordable()}
                            </div>
                        </div>
                        <div className='seeMoreContainer'>
                            {/* <button className='seeMoreListing'>See more listings</button> */}
                            <a href='/rentals/Shreveport/homes'><button className='seeMoreListing' onClick=''>See more listings</button></a>
                        </div>
                    </div>
                    <hr className='line'></hr>

                    <div className='mainContainer'>
                        <div className='textTitle'>
                            <h2 className='text'>New Listings</h2>
                            <h3 className='homesAvailable'>Newly listed homes in Shreveport</h3>
                        </div>
                        <div className='col-md-12 '>
                            <div className='row'>
                                {this.renderAffordable()}
                            </div>
                        </div>
                        <div className='seeMoreContainer'>
                            {/* <button className='seeMoreListing' onClick=''>See more listings</button> */}
                            <a href='/rentals/Shreveport/homes'><button className='seeMoreListing' onClick=''>See more listings</button></a>
                            {/* <button className='seeMoreListing' to={`/rentals/Shreveport/homes`}>See more listings</button> */}
                        </div>
                    </div>
            </section>




        )
    }
}