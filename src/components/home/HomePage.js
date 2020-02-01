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
                        <h1 className='headerText'>Find your way home...</h1>
                    </header>
                    {/* <div className='searchInputAndButton'>
                        <input placeholder='Enter an address, neighborhood, city or ZIP code' className='searchInput' type='text' />
                        <button className='searchButton' type='submit'>
                            <h5 className='searchBtnText'>Search</h5>
                        </button>
                    </div> */}

                <div className="search-box">
                    <input type="text" name="" className="search-txt" placeholder="Enter an address, city or ZIP Code..."/>
                    <a className="search-btn" href="#">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                </div>
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