import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import '../styles/middleHomeSection.css';
import Slider from 'react-slick';
import House1 from '../../styles/images/h1.jpg';
import House2 from '../../styles/images/h2.jpg';
import House3 from '../../styles/images/h3.jpg';
import House4 from '../../styles/images/h4.jpg';
import House5 from '../../styles/images/h5.jpg';
import House6 from '../../styles/images/h6.jpg';
import House7 from '../../styles/images/h7.jpg';
import House8 from '../../styles/images/h8.jpg';
import House9 from '../../styles/images/h9.jpg';
import House10 from '../../styles/images/h10.jpg';

import { TemporaryTemplate } from './TemporaryTemplate';
import { Template1 } from './templates/Template1';
import { Template2 } from './templates/Template2';
import { Template3 } from './templates/Template3';
import { Template4 } from './templates/Template4';
import { Template5 } from './templates/Template5';
import { Template6 } from './templates/Template6';
import { RentalCard } from '../../components/rental/rental-listing/RentalCard';

export class MiddleHomeSection extends React.Component {

    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            // centerMode: true,
            responsive: [

                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                }, {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                }, {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
        };

        return (
            <div>
                <div className='mainContainer'>
                    <div className='textTitle'>
                        <h2 className='text'>Featured Listings</h2>
                        <h3 className='homesAvailable'>Features homes in Shreveport</h3>
                    </div>
                    <Slider {...settings}>
                        <div className='mainBlock'><img src={House1} className='houseList' alt='' />< Template1 /></div>
                        <div className='mainBlock'><img src={House2} className='houseList' alt='' />< Template2 /></div>
                        <div className='mainBlock'><img src={House3} className='houseList' alt='' />< Template3 /></div>
                        <div className='mainBlock'><img src={House4} className='houseList' alt='' />< Template4 /></div>
                        <div className='mainBlock'><img src={House5} className='houseList' alt='' />< Template5 /></div>
                        <div className='mainBlock'><img src={House6} className='houseList' alt='' />< Template6 /></div>
                    </Slider>

                    <div className='seeMoreContainer'>
                        <Link to='/rentals/Shreveport/homes'><button className='seeMoreListing'>See more listings</button></Link>
                        {/* <a href='/rentals/Shreveport/homes'><button className='seeMoreListing' onClick=''>See more listings</button></a> */}
                    </div>
                </div>
                <hr className='line'></hr>
                <div className='mainContainer'>
                    <div className='textTitle'>
                        <h2 className='text'>Most affordable</h2>
                        <h3 className='highestPriced'>The most affordable homes in Shreveport</h3>
                    </div>
                    <Slider {...settings} className='hi'>
                        <div className='mainBlock'><img src={House7} className='houseList' alt='' />< Template6 /></div>
                        <div className='mainBlock'><img src={House8} className='houseList' alt='' />< Template5 /></div>
                        <div className='mainBlock'><img src={House9} className='houseList' alt='' />< Template3 /></div>
                        <div className='mainBlock'><img src={House10} className='houseList' alt='' />< Template4 /></div>
                        <div className='mainBlock'><img src={House1} className='houseList' alt='' />< Template2 /></div>
                        <div className='mainBlock'><img src={House2} className='houseList' alt='' />< Template1 /></div>
                    </Slider>
                    <div className='seeMoreContainer'>
                        <Link to='/rentals/Shreveport/homes'><button className='seeMoreListing'>See more listings</button></Link>
                    </div>
                </div>
                <hr className='line'></hr>
                <div className='mainContainer'>
                    <div className='textTitle'>
                        <h2 className='text'>Safe Area</h2>
                        <h3 className='mostSquareFootage'>Shreveport homes located at lowest crime rates area</h3>
                    </div>
                    <Slider {...settings}>
                        <div className='mainBlock'><img src={House6} className='houseList' alt='' />< Template2 /></div>
                        <div className='mainBlock'><img src={House4} className='houseList' alt='' />< Template4 /></div>
                        <div className='mainBlock'><img src={House5} className='houseList' alt='' />< Template3 /></div>
                        <div className='mainBlock'><img src={House3} className='houseList' alt='' />< Template4 /></div>
                        <div className='mainBlock'><img src={House2} className='houseList' alt='' />< Template6 /></div>
                        <div className='mainBlock'><img src={House1} className='houseList' alt='' />< Template5 /></div>
                    </Slider>
                    <div className='seeMoreContainer'>
                        <Link to='/rentals/Shreveport/homes'><button className='seeMoreListing'>See more listings</button></Link>
                    </div>
                </div>
                <hr className='line'></hr>
                <div className='mainContainer'>
                    <div className='textTitle'>
                        <h2 className='text'>New Listings</h2>
                        <h3 className='mostRecent'>Newly listed homes in Shreveport</h3>
                    </div>
                    <Slider {...settings}>
                        <div className='mainBlock'><img src={House1} className='houseList' alt='' />< Template1 /></div>
                        <div className='mainBlock'><img src={House2} className='houseList' alt='' />< Template6 /></div>
                        <div className='mainBlock'><img src={House4} className='houseList' alt='' />< Template3 /></div>
                        <div className='mainBlock'><img src={House3} className='houseList' alt='' />< Template2 /></div>
                        <div className='mainBlock'><img src={House5} className='houseList' alt='' />< Template5 /></div>
                        <div className='mainBlock'><img src={House6} className='houseList' alt='' />< Template4 /></div>
                    </Slider>
                    <div className='seeMoreContainer'>
                        <Link to='/rentals/Shreveport/homes'><button className='seeMoreListing'>See more listings</button></Link>
                    </div>
                </div>
            </div>
        )
    }

}
