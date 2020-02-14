import React from 'react';
import { RentalCard } from '../../components/rental/rental-listing/RentalCard';

export class MiddleHomeSection extends React.Component {

    

    renderRentals() {
        return this.props.rentals.slice(0, 5).map((rental, index) => {
            return (
            // <h1> A </h1>
                
                <RentalCard key={index}
                            colNum='col-md-3 col-xs-6'
                            rental={rental}/>
            )
        }); 
    }

 


    render() {

        
        // alert(this.index);
        return (

            <div>
            <div className='mainContainer'>
                <div className='textTitle'>
                    <h2 className='text'>Featured Listings</h2>
                    <h3 className='homesAvailable'>Features homes in Shreveport</h3>
                </div>
                {/* <Slider {...settings}>
                    <div className='mainBlock'><img src='' className='houseList' alt='' />{this.renderRentals()}</div>
                </Slider> */}
                <div className='mainBlock'>{this.renderRentals()}</div>
                

                <div className='seeMoreContainer'>
                    <button className='seeMoreListing'>See more listings</button>
                </div>
            </div>


            </div>
            // <div className='row'>
            //      {this.renderRentals()}
            // </div>
        )
    }
}