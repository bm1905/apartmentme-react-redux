import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <div>
            <div className='footerWrapper'>
                {/* <nav className='brandLinks'>
                    <ul className='footerList'>
                        <li>
                            <a href='#'>
                                <span>ApartmentMe Homepage</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <span>Search Apartments</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <span>List Apartments</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <span>Popular Apartments</span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <span>Affordable Apartments</span>
                            </a>
                        </li>
                    </ul>
                </nav> */}

                <footer className='footer'>
                    <div className='navSeparator'>
                        <nav className='links'>
                            <ul className='footerLinks'>
                                <li>
                                    <Link to='/aboutUs'>About</Link>
                                </li>
                                <li>
                                    <Link to='/contactUs'>Contact Us</Link>
                                </li>
                                <li>
                                    <Link to='/survey'>Survey</Link>
                                </li>
                                <li>
                                    <Link to='/comingsoon'>Careers</Link>
                                </li>
                                <li>
                                    <Link to='/comingsoon'>Advertise</Link>
                                </li>
                                <li>
                                    <Link to='/comingsoon'>Terms of use and Privacy</Link>
                                </li>
                                <li>
                                    <Link to='/comingsoon'>Ad Choice</Link>
                                </li>
                                <li>
                                    <Link to='/comingsoon'>Cookie Preferences</Link>
                                </li>
                                <li>
                                    <Link to='/comingsoon'>Blog</Link>
                                </li>
                                <li>
                                    <Link to='/comingsoon'>Data Science</Link>
                                </li>
                                <li>
                                    <Link to='/comingsoon'>Mobile Apps</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {/* <div className='socialMedia'>
                        <ul className='social-links'>
                            <li>© 2019 ApartmentMe</li>
                            <li>
                                <div className='followUs'>
                                    <span>Follow Us:</span>
                                    <a className='facebook' href='#'>
                                        <span><i className='fa fa-desktop'></i></span>
                                    </a>
                                    <a className='twitter' href='#'>
                                        <span><i className='fa fa-desktop'></i></span>
                                    </a>
                                    <a className='googlePlus' href='#'>
                                        <span><i className='fa fa-desktop'></i></span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div> */}

                    <div className="copyrightSection">
                        <div className="col-md-12 text-center">
                            <ul className="social-links">
                                <li><a href="https://www.facebook.com"><i className='fa fa-facebook'></i></a></li>
                                <li><a href="https://www.instagram.com"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="https://www.twitter.com"><i className="fa fa-twitter"></i></a></li>
                            </ul>
                            <p>&copy; Copyright ApartmentMe Project 2019 </p>
                        </div>
                    </div>


                </footer>
            </div>
        </div>
    )
}