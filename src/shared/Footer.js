import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <div>
            <div className='footerWrapper'>
                <nav className='brandLinks'>
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
                </nav>
                
                <footer className='footer'>
                    <div className='navSeparator'>
                        <nav className='links'>
                            <ul className='footerLinks'>
                                <li>
                                    <a href='#'>About</a>
                                </li>
                                <li>
                                    <a href='#'>Research</a>
                                </li>
                                <li>
                                    <a href='#'>Careers</a>
                                </li>
                                <li>
                                    <a href='#'>Help</a>
                                </li>
                                <li>
                                    <a href='#'>Advertise</a>
                                </li>
                                <li>
                                    <a href='#'>Terms of use and Privacy</a>
                                </li>
                                <li>
                                    <a href='#'>Ad Choice</a>
                                </li>
                                <li>
                                    <a href='#'>Cookie Preferences</a>
                                </li>
                                <li>
                                    <a href='#'>Blog</a>
                                </li>
                                <li>
                                    <a href='#'>Data Science</a>
                                </li>
                                <li>
                                    <a href='#'>Mobile Apps</a>
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
                                <li><a href="https://www.facebook.com/bmaharjan.chelsea"><i className='fa fa-facebook'></i></a></li>
                                <li><a href="https://www.instagram.com/m_reus111"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/bijay-maharjan-10654b92"><i className="fa fa-linkedin"></i></a></li>
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