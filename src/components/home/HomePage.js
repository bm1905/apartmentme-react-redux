import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import MiddleHomeSection from './MiddleHomeSection';

export class HomePage extends React.Component {
    

    render() {
        return (
        <div className='mainBody'>
            <div className='homeContainer'>
                <div className='videoSection'>
                    <header className='searchBoxHeader'>
                        <h1>Find your way home</h1>
                    </header>
                    <section className='searchBox'>
                        <div className='searchBody'>
                            {/* <label className='buy'>Buy</label> */}
                            {/* <label className='rent'>Rent</label>
                            <label className='sell'>Sell</label>
                            <label className='zestimate'>Zestimate</label> */}
                        </div>
                        <div className='searchInputAndButton'>
                            <input placeholder='Enter an address, neighborhood, city or ZIP code' className='searchInput' type='text' />
                            <button className='searchButton' type='submit'>
                                <h5 className='searchBtnText'>Search</h5>
                            </button>
                        </div>
                    </section>
                </div>
            </div> 
            <div className='featuredContainer'>
                <MiddleHomeSection />
            </div>      
        </div>  
        )
    }
}



// export default connect(HomePage)