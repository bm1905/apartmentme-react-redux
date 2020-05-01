import React from 'react';

export const AboutUs = () => {
    return (
        <React.Fragment>
            <div className="aboutus-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-6 col-xs-12">
                            <div className="aboutus">
                                <h2 className="aboutus-title">ApartmentMe</h2>
                                <p className="aboutus-text">ApartmentMe is a web application that serves a variety of customers seeking homes.
                                We allow users the option to list their apartment, house, or just a single room for rent.
                                Similarly, the users can browse for an available house, apartment, or room using our application.
                                The website provides all the required features to ensure a smooth transition for moving families, students, and travelers.
                            </p>
                                <p className="aboutus-text">Our mission is empowering home seekers by making their journey as simple and efficient as possible.</p>
                            </div>
                        </div>
                        {/* <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="aboutus-banner">
                            <img src="http://themeinnovation.com/demo2/html/build-up/img/home1/about1.jpg" alt="" />
                        </div>
                    </div> */}
                        <div className="col-md-5 col-sm-6 col-xs-12">
                            <div className="feature">
                                <div className="feature-box">
                                    <div className="clearfix">
                                        <div className="iconset">
                                            <span className="glyphicon glyphicon-cog icon"><i className="fa fa-graduation-cap"></i></span>
                                        </div>
                                        <div className="feature-content">
                                            <h4>For Students</h4>
                                            <p>Students can browse all off-campus apartments around their selected colleges/universities.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="feature-box">
                                    <div className="clearfix">
                                        <div className="iconset">
                                            <span className="glyphicon glyphicon-cog icon"><i className="fa fa-home"></i></span>
                                        </div>
                                        <div className="feature-content">
                                            <h4>For People wanting temporary stay</h4>
                                            <p>Users can browse for single room rentals to rent and stay for very few period of time.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="feature-box">
                                    <div className="clearfix">
                                        <div className="iconset">
                                            <span className="glyphicon glyphicon-cog icon"><i className="fa fa-users"></i></span>
                                        </div>
                                        <div className="feature-content">
                                            <h4>For people looking for roomates</h4>
                                            <p>Users can post their rooms for rental if any rooms in their house/apartment are vacant.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="our-webcoderskull padding-lg">
                <div className="container">
                    <div className="row heading heading-icon">
                        <h2>Our Team</h2>
                    </div>
                    <ul className="row">
                        <li className="col-12 col-md-6 col-lg-4">
                            <div className="cnt-block equal-hight" style={{ height: "349px" }}>
                                <figure> <img src={process.env.PUBLIC_URL + '/img/bm.png'} className="img-responsive" alt="" /></figure>
                                <h3><a href="">Bijay Maharjan</a></h3>
                                <p>Full-Stack Web Developer</p>
                                <ul className="follow-us clearfix">
                                    <li><a href="http://www.bmaharjan.com/" target='_blank' rel='noopener noreferrer'><i className="fa fa-globe" aria-hidden="true"></i></a></li>
                                    <li><a href="mailTo:bijay.maharjan5@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/bijay-maharjan" target='_blank' rel='noopener noreferrer'><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="col-12 col-md-6 col-lg-4">
                            <div className="cnt-block equal-hight" style={{ height: "349px" }}>
                                <figure><img src={process.env.PUBLIC_URL + '/img/luji.png'} className="img-responsive" alt="" /></figure>
                                <h3><a href="#">Lujien Sallam </a></h3>
                                <p>Developer/Buisness Analyst</p>
                                <ul className="follow-us clearfix">
                                    {/* <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                    <li><a href="mailTo:lujienosamafarag@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/lujien-sallam/" target='_blank' rel='noopener noreferrer'><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="col-12 col-md-6 col-lg-4">
                            <div className="cnt-block equal-hight" style={{ height: "349px" }}>
                                <figure><img src={process.env.PUBLIC_URL + '/img/kenisha.png'} className="img-responsive" alt="" /></figure>
                                <h3><a href="#">Kenisha Lewis </a></h3>
                                <p>Developer/Financial Application Analyst</p>
                                <ul className="follow-us clearfix">
                                    {/* <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                                    <li><a href="mailTo:babynishaloves@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/kenisha-lewis-992170116/" target='_blank' rel='noopener noreferrer'><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </React.Fragment>
    )


}