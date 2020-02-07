import React from 'react';
// import '../styles/middleHomeSection.css';
import Slider from 'react-slick';
import House1 from '../../styles/images/house1.jpg';
import House2 from '../../styles/images/house2.jpg';
import  { TemporaryTemplate } from './TemporaryTemplate';

const MiddleHomeSection = (props) => {
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
                    <div className='mainBlock'><img src={ House1 } className='houseList' alt='' />< TemporaryTemplate /></div>
                    <div className='mainBlock'><img src={ House2 } className='houseList' alt='' />< TemporaryTemplate /></div>
                    <div className='mainBlock'><img src={ House1 } className='houseList' alt='' />< TemporaryTemplate /></div>
                    <div className='mainBlock'><img src={ House1 } className='houseList' alt='' />< TemporaryTemplate /></div>
                    <div className='mainBlock'><img src={ House2 } className='houseList' alt='' />< TemporaryTemplate /></div>
                    <div className='mainBlock'><img src={ House1 } className='houseList' alt='' />< TemporaryTemplate /></div> 
                </Slider>

                <div className='seeMoreContainer'>
                    <button className='seeMoreListing'>See more listings</button>
                </div>
            </div>
            <hr className='line'></hr>
            <div className='mainContainer'>
                <div className='textTitle'>
                    <h2 className='text'>Most affordable</h2>
                    <h3 className='highestPriced'>The most affordable homes in Shreveport</h3>
                </div>
                <Slider {...settings} className='hi'>
                    <div className='mainBlock'><img src={ House1 } className='houseList' alt='' /> < TemporaryTemplate /></div>
                    <div className='mainBlock'><img src={ House2 } className='houseList' alt='' /> < TemporaryTemplate /></div>
                    <div className='mainBlock'><img src={ House1 } className='houseList' alt='' /> < TemporaryTemplate /></div>
                    <div className='mainBlock'><img src={ House1 } className='houseList' alt='' /> < TemporaryTemplate /></div>
                    <div className='mainBlock'><img src={ House2 } className='houseList' alt='' /> < TemporaryTemplate /></div>
                    <div className='mainBlock'><img src={ House1 } className='houseList' alt='' /> < TemporaryTemplate /></div> 
                </Slider>
                <div className='seeMoreContainer'>
                    <button className='seeMoreListing'>See more listings</button>
                </div>
            </div>
            <hr className='line'></hr>
            <div className='mainContainer'>
                <div className='textTitle'>
                    <h2 className='text'>Safe Area</h2>
                    <h3 className='mostSquareFootage'>Shreveport homes located at lowest crime rates</h3>
                </div>
            <Slider {...settings}>
                    <div className='mainBlock'><img src={ House1 } className='houseList' alt='' /> < TemporaryTemplate /></div>
                    <div className='mainBlock'><img src={ House2 } className='houseList' alt='' /> < TemporaryTemplate /></div>
                    <div className='mainBlock'><img src={ House1 } className='houseList' alt='' /> < TemporaryTemplate /></div>
                    <div className='mainBlock'><img src={ House1 } className='houseList' alt='' /> < TemporaryTemplate /></div>
                    <div className='mainBlock'><img src={ House2 } className='houseList' alt='' /> < TemporaryTemplate /></div>
                    <div className='mainBlock'><img src={ House1 } className='houseList' alt='' /> < TemporaryTemplate /></div> 
                </Slider>
                <div className='seeMoreContainer'>
                    <button className='seeMoreListing'>See more listings</button>
                </div>
            </div>
            <hr className='line'></hr>
            <div className='mainContainer'>
                <div className='textTitle'>
                    <h2 className='text'>New Listings</h2>
                    <h3 className='mostRecent'>Newly listed homes in Shreveport</h3>
                </div>
            <Slider {...settings}>
                    <div className='mainBlock'><img src={ House1 } className='houseList' alt='' /> < TemporaryTemplate /></div>
                    <div className='mainBlock'><img src={ House2 } className='houseList' alt='' /> < TemporaryTemplate /></div>
                    <div className='mainBlock'><img src={ House1 } className='houseList' alt='' /> < TemporaryTemplate /></div>
                    <div className='mainBlock'><img src={ House1 } className='houseList' alt='' /> < TemporaryTemplate /></div>
                    <div className='mainBlock'><img src={ House2 } className='houseList' alt='' /> < TemporaryTemplate /></div>
                    <div className='mainBlock'><img src={ House1 } className='houseList' alt='' /> < TemporaryTemplate /></div> 
                </Slider>
                <div className='seeMoreContainer'>
                    <button className='seeMoreListing'>See more listings</button>
                </div>
            </div>
        </div>
    )
}

export default MiddleHomeSection;