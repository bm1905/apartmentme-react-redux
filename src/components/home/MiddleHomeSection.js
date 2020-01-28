import React from 'react';
// import '../styles/middleHomeSection.css';
import Slider from 'react-slick';
import House1 from '../../styles/images/house1.jpg';
import House2 from '../../styles/images/house2.jpg';

const MiddleHomeSection = (props) => {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    //   centerMode: true,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }, {
        breakpoint: 480,
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
                    <h2 className='text'>Featured homes in your area</h2>
                    <h3 className='homesAvailable'>10 homes in Shreveport</h3>
                </div>
                <Slider {...settings}>
                    <div><img src={ House1 } className='houseList' alt='' /> </div>
                    <div><img src={ House2 } className='houseList' alt='' /> </div>
                    <div><img src={ House1 } className='houseList' alt='' /> </div>
                    <div><img src={ House1 } className='houseList' alt='' /> </div>
                    <div><img src={ House2 } className='houseList' alt='' /> </div>
                    <div><img src={ House1 } className='houseList' alt='' /> </div> 
                </Slider>
                <div className='seeMoreContainer'>
                    <button className='seeMoreListing'>See more listings</button>
                </div>
            </div>
            <hr></hr>
            <div className='mainContainer'>
                <div className='textTitle'>
                    <h2 className='text'>Most affordable</h2>
                    <h3 className='highestPriced'>The most affordable homes in Shreveport</h3>
                </div>
                <Slider {...settings}>
                    <div><img src={ House1 } className='houseList' alt='' /> </div>
                    <div><img src={ House2 } className='houseList' alt='' /> </div>
                    <div><img src={ House1 } className='houseList' alt='' /> </div>
                    <div><img src={ House1 } className='houseList' alt='' /> </div>
                    <div><img src={ House2 } className='houseList' alt='' /> </div>
                    <div><img src={ House1 } className='houseList' alt='' /> </div> 
                </Slider>
                <div className='seeMoreContainer'>
                    <button className='seeMoreListing'>See more listings</button>
                </div>
            </div>
            <hr></hr>
            <div className='mainContainer'>
                <div className='textTitle'>
                    <h2 className='text'>Safest neighbours</h2>
                    <h3 className='mostSquareFootage'>Shreveport homes with lowest crime rates</h3>
                </div>
            <Slider {...settings}>
                    <div><img src={ House1 } className='houseList' alt='' /> </div>
                    <div><img src={ House2 } className='houseList' alt='' /> </div>
                    <div><img src={ House1 } className='houseList' alt='' /> </div>
                    <div><img src={ House1 } className='houseList' alt='' /> </div>
                    <div><img src={ House2 } className='houseList' alt='' /> </div>
                    <div><img src={ House1 } className='houseList' alt='' /> </div> 
                </Slider>
                <div className='seeMoreContainer'>
                    <button className='seeMoreListing'>See more listings</button>
                </div>
            </div>
            <hr></hr>
            <div className='mainContainer'>
                <div className='textTitle'>
                    <h2 className='text'>Most recently built</h2>
                    <h3 className='mostRecent'>Newly built homes in Shreveport</h3>
                </div>
            <Slider {...settings}>
                    <div><img src={ House1 } className='houseList' alt='' /> </div>
                    <div><img src={ House2 } className='houseList' alt='' /> </div>
                    <div><img src={ House1 } className='houseList' alt='' /> </div>
                    <div><img src={ House1 } className='houseList' alt='' /> </div>
                    <div><img src={ House2 } className='houseList' alt='' /> </div>
                    <div><img src={ House1 } className='houseList' alt='' /> </div> 
                </Slider>
                <div className='seeMoreContainer'>
                    <button className='seeMoreListing'>See more listings</button>
                </div>
            </div>
        </div>
    )
}

export default MiddleHomeSection;