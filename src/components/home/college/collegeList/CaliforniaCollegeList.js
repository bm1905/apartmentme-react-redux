import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export class CaliforniaCollegeList extends React.Component {

    render() {
        return (
            <div>
                <h1 className='page-title'>California College/University Lists</h1>
                <h1 className='main-title'><strong>Find your suitable apartments around top colleges in California.</strong></h1>
                <hr />
                <div style={{ backgroundColor: "lightgrey", padding: "10px" }}>
                    <h1 className='main-title'><strong>Popular Colleges/Universities</strong></h1>
                    < br />
                    {/* <div className='container'> */}
                    <div className='row'>
                        <div className='col-md-4'>

                            <Link to={`/rentals/Berkeley/homes`} >
                                <p className='main-detail' style={{ padding: "7px", color: "black" }}>University of California-Berkeley</p>
                            </Link>
                            <Link to={`/rentals/San%20Francisco/homes`} >
                                <p className='main-detail' style={{ padding: "7px", color: "black" }}>University of San Francisco</p>
                            </Link>


                        </div>
                        <div className='col-md-4'>
                            <Link to={`/comingsoon`} >
                                <p className='main-detail' style={{ padding: "7px", color: "black" }}>San Jose State University</p>
                            </Link>
                            <Link to={`/comingsoon`} >
                                <p className='main-detail' style={{ padding: "7px", color: "black" }}>University of Southern California</p>
                            </Link>
                        </div>
                        <div className='col-md-4'>
                            <Link to={`/comingsoon`} >
                                <p className='main-detail' style={{ padding: "7px", color: "black" }}>University of California-Los Angeles</p>
                            </Link>
                            <Link to={`/comingsoon`} >
                                <p className='main-detail' style={{ padding: "7px", color: "black" }}>Santa Monica College</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <br />

                <div style={{ backgroundColor: "#f3f2f2", padding: "10px" }}>
                    <h1 className='main-title'><strong>All Colleges/Universities</strong></h1>
                    < br />
                    {/* <div className='container'> */}
                    <div className='row'>
                        <div className='col-md-4'>
                            <Link to={`/comingsoon`} >
                                <p className='main-detail' style={{ padding: "7px", color: "black" }}>California State University-San Marcos</p>
                            </Link>
                            <Link to={`/comingsoon`} >
                                <p className='main-detail' style={{ padding: "7px", color: "black" }}>California State University-Sacramento</p>
                            </Link>
                            <Link to={`/comingsoon`} >
                                <p className='main-detail' style={{ padding: "7px", color: "black" }}>California State University-Fullerton</p>
                            </Link>
                            <Link to={`/comingsoon`} >
                                <p className='main-detail' style={{ padding: "7px", color: "black" }}>California State University-Fresno</p>
                            </Link>
                            <Link to={`/comingsoon`} >
                                <p className='main-detail' style={{ padding: "7px", color: "black" }}>California State University-East Bay</p>
                            </Link>
                            <Link to={`/comingsoon`} >
                                <p className='main-detail' style={{ padding: "7px", color: "black" }}>California State University-Chico</p>
                            </Link>
                            <Link to={`/comingsoon`} >
                                <p className='main-detail' style={{ padding: "7px", color: "black" }}>California State University-Channel Islands</p>
                            </Link>
                        </div>
                        <div className='col-md-4'>
                            <Link to={`/comingsoon`} >
                                <p className='main-detail' style={{ padding: "7px", color: "black" }}>California State University-Northridge</p>
                            </Link>
                            <Link to={`/comingsoon`} >
                                <p className='main-detail' style={{ padding: "7px", color: "black" }}>California State University-Monterey Bay</p>
                            </Link>
                            <Link to={`/comingsoon`} >
                                <p className='main-detail' style={{ padding: "7px", color: "black" }}>California State University-Bakersfield</p>
                            </Link>
                            <Link to={`/comingsoon`} >
                                <p className='main-detail' style={{ padding: "7px", color: "black" }}>California State Polytechnic University-Pomona</p>
                            </Link>
                            <Link to={`/comingsoon`} >
                                <p className='main-detail' style={{ padding: "7px", color: "black" }}>California Institute of the Arts</p>
                            </Link>
                            <Link to={`/comingsoon`} >
                                <p className='main-detail' style={{ padding: "7px", color: "black" }}>California Institute of Technology</p>
                            </Link>
                            <Link to={`/comingsoon`} >
                                <p className='main-detail' style={{ padding: "7px", color: "black" }}>California Institute of Integral Studies</p>
                            </Link>
                        </div>
                        <div className='col-md-4'>
                            <Link to={`/comingsoon`} >
                                <p className='main-detail' style={{ padding: "7px", color: "black" }}>California State University Maritime Academy</p>
                            </Link>
                            <Link to={`/comingsoon`} >
                                <p className='main-detail' style={{ padding: "7px", color: "black" }}>California State University-Los Angeles</p>
                            </Link>
                            <Link to={`/comingsoon`} >
                                <p className='main-detail' style={{ padding: "7px", color: "black" }}>Los Angeles Valley College</p>
                            </Link>
                            <Link to={`/comingsoon`} >
                                <p className='main-detail' style={{ padding: "7px", color: "black" }}>Monterey Peninsula College</p>
                            </Link>
                            <Link to={`/comingsoon`} >
                                <p className='main-detail' style={{ padding: "7px", color: "black" }}>Santa Monica Collegey</p>
                            </Link>
                            <Link to={`/comingsoon`} >
                                <p className='main-detail' style={{ padding: "7px", color: "black" }}>Santa Clara University</p>
                            </Link>
                            <Link to={`/comingsoon`} >
                                <p className='main-detail' style={{ padding: "7px", color: "black" }}>Sacramento City College</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}