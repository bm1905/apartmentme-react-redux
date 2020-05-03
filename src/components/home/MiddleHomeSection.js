import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import '../styles/middleHomeSection.css';

import * as actions from 'actions';

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

import ShreveportPic from '../../styles/images/shreveport.jpg';
import ChicagoPic from '../../styles/images/chicago.jpg';
import DenverPic from '../../styles/images/denver.jpg';
import DallasPic from '../../styles/images/dallas.jpg';
import LosAngelesPic from '../../styles/images/losangeles.jpg';
import HoustonPic from '../../styles/images/houston.jpg';

import CaliforniaCollegePic from '../../styles/images/californiaCollege.jpg';
import FloridaCollegePic from '../../styles/images/floridaCollege.jpg';
import IllinoisCollegePic from '../../styles/images/illinoisCollege.jpg';
import MichiganCollegePic from '../../styles/images/michiganCollege.jpg';
import NewYorkCollegePic from '../../styles/images/newYorkCollege.jpg';
import TexasCollegePic from '../../styles/images/texasCollege.jpg';

import { TemporaryTemplate } from './TemporaryTemplate';
import { Template1 } from './templates/Template1';
import { Template2 } from './templates/Template2';
import { Template3 } from './templates/Template3';
import { Template4 } from './templates/Template4';
import { Template5 } from './templates/Template5';
import { Template6 } from './templates/Template6';
import { RentalCard } from '../../components/rental/rental-listing/RentalCard';

import { Shreveport } from './city/Shreveport';
import { Chicago } from './city/Chicago';
import { Houston } from './city/Houston';
import { Dallas } from './city/Dallas';
import { LosAngeles } from './city/LosAngeles';
import { Denver } from './city/Denver';

import { CaliforniaCollege } from './college/CaliforniaCollege';
import { TexasCollege } from './college/TexasCollege';
import { FloridaCollege } from './college/FloridaCollege';
import { NewYorkCollege } from './college/NewYorkCollege';
import { IllinoisCollege } from './college/IllinoisCollege';
import { MichiganCollege } from './college/MichiganCollege';



class MiddleHomeSection extends React.Component {

    constructor(props) {
        super(props);
    }

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

        let dummyId;

        var renderRentals = () => {
            this.props.rentals.map((rental, index) => {
                if (index === 0) {
                    var test = rental._id;
                    // console.log(test);
                    // debugger;
                    dummyId = test;
                }
            });
        }
        const rentalId = renderRentals();

        return (
            <div>
                <div className='mainContainer'>
                    <div className='textTitle'>
                        <h2 className='text'>Featured Listings</h2>
                        <h3 className='homesAvailable'>Features homes in Shreveport</h3>
                    </div>
                    <Slider {...settings}>

                        <Link to={`/rentals/${dummyId}`} >
                            <div className='mainBlock'><img src={House1} className='houseList' alt='' />< Template1 /></div>
                        </Link>
                        <Link to={`/rentals/${dummyId}`} >
                            <div className='mainBlock'><img src={House2} className='houseList' alt='' />< Template2 /></div>
                        </Link>
                        <Link to={`/rentals/${dummyId}`} >
                            <div className='mainBlock'><img src={House3} className='houseList' alt='' />< Template3 /></div>
                        </Link>
                        <Link to={`/rentals/${dummyId}`} >
                            <div className='mainBlock'><img src={House4} className='houseList' alt='' />< Template4 /></div>
                        </Link>
                        <Link to={`/rentals/${dummyId}`} >
                            <div className='mainBlock'><img src={House5} className='houseList' alt='' />< Template5 /></div>
                        </Link>
                        <Link to={`/rentals/${dummyId}`} >
                            <div className='mainBlock'><img src={House6} className='houseList' alt='' />< Template6 /></div>
                        </Link>
                    </Slider>

                    <div className='seeMoreContainer'>
                        <Link to='/rentals/Shreveport/homes'><button className='seeMoreListing'>See more listings</button></Link>
                        {/* <a href='/rentals/Shreveport/homes'><button className='seeMoreListing' onClick=''>See more listings</button></a> */}
                    </div>
                </div>
                <hr className='line'></hr>
                <div className='mainContainer'>
                    <div className='textTitle'>
                        <h2 className='text'>Apartments in all states</h2>
                        <h3 className='highestPriced'>Browse apartments by city in all 50 states</h3>
                    </div>
                    <Slider {...settings} className='hi'>
                        <Link to={`/rentals/Shreveport/homes`} >
                            <div className='mainBlock'><img src={ShreveportPic} className='houseList' alt='' /><Shreveport /></div>
                        </Link>
                        <Link to={`/rentals/Chicago/homes`} >
                            <div className='mainBlock'><img src={ChicagoPic} className='houseList' alt='' />< Chicago /></div>
                        </Link>
                        <Link to={`/rentals/Houston/homes`} >
                            <div className='mainBlock'><img src={HoustonPic} className='houseList' alt='' /> <Houston /> </div>
                        </Link>
                        <Link to={`/rentals/Dallas/homes`} >
                            <div className='mainBlock'><img src={DallasPic} className='houseList' alt='' /> <Dallas /> </div>
                        </Link>
                        <Link to={`/rentals/Denver/homes`} >
                            <div className='mainBlock'><img src={DenverPic} className='houseList' alt='' />< Denver /></div>
                        </Link>
                        <Link to={`/rentals/Los%20Angeles/homes`} >
                            <div className='mainBlock'><img src={LosAngelesPic} className='houseList' alt='' />< LosAngeles /></div>
                        </Link>
                    </Slider>
                    <div className='seeMoreContainer'>
                        <Link to='/comingsoon'><button className='seeMoreListing'>Check all 50 states</button></Link>
                    </div>
                </div>
                <hr className='line'></hr>
                <div className='mainContainer'>
                    <div className='textTitle'>
                        <h2 className='text'>Apartments near College/University</h2>
                        <h3 className='mostSquareFootage'>Browse all off-campus apartments near top colleges across 50 states</h3>
                    </div>
                    <Slider {...settings}>
                        <Link to={`/college-lists`} >
                            <div className='mainBlock'><img src={CaliforniaCollegePic} className='houseList' alt='' />< CaliforniaCollege /></div>
                        </Link>
                        <Link to={`/comingsoon`} >
                            <div className='mainBlock'><img src={TexasCollegePic} className='houseList' alt='' />< TexasCollege /></div>
                        </Link>
                        <Link to={`/comingsoon`} >
                            <div className='mainBlock'><img src={FloridaCollegePic} className='houseList' alt='' />< FloridaCollege /></div>
                        </Link>
                        <Link to={`/comingsoon`} >
                            <div className='mainBlock'><img src={NewYorkCollegePic} className='houseList' alt='' />< NewYorkCollege /></div>
                        </Link>
                        <Link to={`/comingsoon`} >
                            <div className='mainBlock'><img src={IllinoisCollegePic} className='houseList' alt='' />< IllinoisCollege /></div>
                        </Link>
                        <Link to={`/comingsoon`} >
                            <div className='mainBlock'><img src={MichiganCollegePic} className='houseList' alt='' />< MichiganCollege /></div>
                        </Link>
                    </Slider>
                    <div className='seeMoreContainer'>
                        <Link to='/comingsoon'><button className='seeMoreListing'>See more colleges</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        rentals: state.rentals.data
    }
}

export default connect(mapStateToProps)(MiddleHomeSection)
