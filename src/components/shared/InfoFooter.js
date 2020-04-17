import React from 'react';
import { Link } from 'react-router-dom';

export function InfoFooter() {
    return (
        <div className='infoFooter'>
            <footer className='subFooter'>
                <div className='content'>
                    <div className='infoBox'>
                        <h6 className='boxHeader'>Real Estate</h6>
                        <ul className='infoList'>
                            <li className='listItem'>
                                <Link to='/comingsoon'>Browse all homes</Link>
                            </li>
                            <li className='listItem'>
                                <Link to='/comingsoon'>Albuquerque real estate</Link>
                            </li>
                            <li className='listItem'>
                                <Link to='/comingsoon'>Atlanta real estate</Link>
                            </li>
                            <li className='listItem'>
                                <Link to='/comingsoon'>Austin real estate</Link>
                            </li>
                            <li className='listItem'>
                                <Link to='/comingsoon'>Baltimore real estate</Link>
                            </li>
                            <li className='listItem' id='more'>
                                <Link to='/comingsoon'>More</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='infoBox'>
                        <h6 className='boxHeader'>Rentals</h6>
                        <ul className='infoList'>
                            <li className='listItem'>
                                <Link to='/comingsoon'>Rental Buildings</Link>
                            </li>
                            <li className='listItem'>
                                <Link to='/comingsoon'>Atlanta apartments for rent</Link>
                            </li>
                            <li className='listItem'>
                                <Link to='/comingsoon'>Austin apartments for rent</Link>
                            </li>
                            <li className='listItem'>
                                <Link to='/comingsoon'>Balitmore apartments for rent</Link>
                            </li>
                            <li className='listItem'>
                                <Link to='/comingsoon'>Boston apartments for rent</Link>
                            </li>
                            <li className='listItem' id='more'>
                                <Link to='/comingsoon'>More</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='infoBox'>
                        <h6 className='boxHeader'>Mortgage Rates</h6>
                        <ul className='infoList'>
                            <li className='listItem'>
                                <Link to='/comingsoon'>Current mortgage rates</Link>
                            </li>
                            <li className='listItem'>
                                <Link to='/comingsoon'>Alaska mortgage rates</Link>
                            </li>
                            <li className='listItem'>
                                <Link to='/comingsoon'>Alabama mortgage rates</Link>
                            </li>
                            <li className='listItem'>
                                <Link to='/comingsoon'>Arkansas mortgage rates</Link>
                            </li>
                            <li className='listItem'>
                                <Link to='/comingsoon'>Arizona mortgage rates</Link>
                            </li>
                            <li className='listItem' id='more'>
                                <Link to='/comingsoon'>More</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='infoBox'>
                        <h6 className='boxHeader'>Browse Homes</h6>
                        <ul className='infolist'>
                            <li className='listItem'>
                                <Link to='/comingsoon'>California</Link>
                            </li>
                            <li className='listItem'>
                                <Link to='/comingsoon'>Texas</Link>
                            </li>
                            <li className='listItem'>
                                <Link to='/comingsoon'>New York</Link>
                            </li>
                            <li className='listItem'>
                                <Link to='/comingsoon'>Florida</Link>
                            </li>
                            <li className='listItem'>
                                <Link to='/comingsoon'>Illinois</Link>
                            </li>
                            <li className='listItem' id='more'>
                                <Link to='/comingsoon'>More</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}