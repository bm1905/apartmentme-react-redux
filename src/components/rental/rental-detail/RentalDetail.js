import React from 'react';
import { connect } from 'react-redux';
import ImageGallery from 'react-image-gallery';
import House1 from '../../../styles/images/1.jpg';
import StarRatings from 'react-star-ratings';
import { RentalAssets } from './RentalAssets';
import Collapsible from 'react-collapsible';

import { shortDate } from 'helpers';

import ReviewModal from '../../review/ReviewModal';


import { RentalDetailInfo } from './RentalDetailInfo';
import { RentalDetailUpdate } from './RentalDetailUpdate';
import RentalMap from './RentalMap';
// import { Search } from '../../../components/shared/Search';
import Booking from 'components/booking/Booking';
import { UserGuard } from '../../shared/auth/UserGuard';

import * as actions from 'actions';
import { ContactOwnerCard } from 'components/contact/ContactOwnerCard';

const PREFIX_URL = 'https://apt-ng-dev.s3.amazonaws.com/pictures/';
{/* <img src={rental.image} alt=''></img> */ }

class RentalDetail extends React.Component {

    constructor() {

        super();

        this.state = {
            isAllowed: false,
            isFetching: true,
            reviews: []
        }

        this.verifyRentalOwner = this.verifyRentalOwner.bind(this);
    }

    componentWillMount() {
        // Dispatch action.
        const rentalId = this.props.match.params.id;
        // debugger;

        this.props.dispatch(actions.fetchRentalById(rentalId)).then(
            (rental) => {
                // debugger;
                this.getReviews(rental._id);
            }
        );
    }

    componentDidMount() {
        const { isUpdate } = this.props.location.state || false;
        if (isUpdate) this.verifyRentalOwner();
    }

    verifyRentalOwner() {
        const rentalId = this.props.match.params.id;
        this.setState({ isFetching: true });

        return actions.verifyRentalOwner(rentalId).then(
            () => {
                this.setState({ isAllowed: true, isFetching: false });
            },
            () => {
                this.setState({ isAllowed: false, isFetching: false });
            }
        );
    }

    renderRentalDetail(rental, errors) {
        const { isUpdate } = this.props.location.state || false;
        const { isAllowed, isFetching } = this.state;

        return isUpdate ? <UserGuard isAllowed={isAllowed} isFetching={isFetching}><RentalDetailUpdate
            dispatch={this.props.dispatch}
            errors={errors}
            rental={rental}
            verifyUser={this.verifyRentalOwner} />
        </UserGuard>
            : <RentalDetailInfo rental={rental} />;
    }

    getReviews = (rentalId) => {
        actions.getReviews(rentalId)
            .then((reviews) => {
                // debugger;
                this.setState({ reviews });
            })
    }

    render() {
        const { rental, errors } = this.props;
        const { reviews } = this.state;
        const { isAuth } = this.props.auth;

        const images = [
            {
                original: rental.image,
                thumbnail: rental.image,
            },
            {
                original: `${PREFIX_URL}1.jpg`,
                thumbnail: `${PREFIX_URL}t1.jpg`,
            },
            {
                original: `${PREFIX_URL}2.jpg`,
                thumbnail: `${PREFIX_URL}t2.jpg`,
            },
            {
                original: `${PREFIX_URL}3.jpg`,
                thumbnail: `${PREFIX_URL}t3.jpg`,
            },
            {
                original: `${PREFIX_URL}4.jpg`,
                thumbnail: `${PREFIX_URL}t4.jpg`,
            },
            {
                original: `${PREFIX_URL}5.jpg`,
                thumbnail: `${PREFIX_URL}t5.jpg`,
            },
            {
                original: `${PREFIX_URL}6.jpg`,
                thumbnail: `${PREFIX_URL}t6.jpg`,
            },
            {
                original: `${PREFIX_URL}7.jpg`,
                thumbnail: `${PREFIX_URL}t7.jpg`,
            },
            {
                original: `${PREFIX_URL}9.jpg`,
                thumbnail: `${PREFIX_URL}t9.jpg`,
            },
            {
                original: `${PREFIX_URL}8.jpg`,
                thumbnail: `${PREFIX_URL}t8.jpg`,
            },
            {
                original: `${PREFIX_URL}10.jpg`,
                thumbnail: `${PREFIX_URL}t10.jpg`,
            },
        ];


        if (rental._id) {
            return (
                <section id='rentalDetails'>
                    {/* <Search /> */}
                    <div className='upper-section'>
                        <div className='row'>
                            {/* <div className='col-md-6'>
                        <RentalMap location={`${rental.city}, ${rental.street}`}/>
                        </div> */}
                            <div className='col-md-8'>
                                {/* <img src={rental.image} alt=''></img> */}
                                <ImageGallery items={images} />
                            </div>
                            <div className='col-md-4'>
                                <ContactOwnerCard />
                            </div>
                        </div>
                    </div>

                    <div className='details-section'>
                        <div className='row'>
                            <div className='col-md-8'>
                                {this.renderRentalDetail(rental, errors)}
                            </div>
                            <div className='col-md-4'>
                                <Booking rental={rental} />
                            </div>
                        </div>


                        <div className="container collap">
                            <div className="row">
                                <div className="col-md-12">
                                    <hr></hr>
                                    <Collapsible trigger="Details">
                                        <p className='rental-description'>
                                            {rental.description}
                                        </p>
                                    </Collapsible>
                                    <hr></hr>
                                    <Collapsible trigger="Assets">
                                        <RentalAssets />
                                    </Collapsible>
                                    <hr></hr>
                                    <Collapsible trigger="Neighborhood">
                                        <p>To be filled</p>
                                    </Collapsible>
                                    <hr></hr>
                                    <Collapsible trigger="Nearby Schools">
                                        <p>To be filled</p>
                                    </Collapsible>
                                    <hr />
                                    <Collapsible trigger="Reviews">
                                        {!isAuth &&
                                            <p>Please login to view or write reviews!</p>
                                        }
                                        {reviews && reviews.length > 0 &&
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <section style={{ marginBottom: '40px' }}>
                                                        {/* <h2>Reviews</h2> */}
                                                        <hr></hr>
                                                        {reviews.map(review =>
                                                            // <div key={review._id} className="card review-card">
                                                            //     <div className="card-body">
                                                            //         <div className="row">
                                                            //             <div className="col-md-3 user-image">
                                                            //                 <img src="https://image.ibb.co/jw55Ex/def_face.jpg" className="img img-rounded img-fluid" />
                                                            //                 <a><strong>{review.user.username}</strong></a>

                                                            //             </div>
                                                            //             <div className="col-md-9">
                                                            //                 <div>
                                                            //                     <p>{shortDate(review.createdAt)}</p>
                                                            //                     <div className="review-section">
                                                            //                         <StarRatings
                                                            //                             rating={review.rating}
                                                            //                             starRatedColor="orange"
                                                            //                             starHoverColor="orange"
                                                            //                             starDimension="25px"
                                                            //                             starSpacing="2px"
                                                            //                             numberOfStars={5}
                                                            //                             name='rating'
                                                            //                         />
                                                            //                     </div>
                                                            //                 </div>
                                                            //                 <div className="clearfix"></div>
                                                            //                 <p>{review.text}</p>
                                                            //             </div>
                                                            //         </div>
                                                            //     </div>
                                                            // </div>
                                                            <div key={review._id}>
                                                                <div>
                                                                    <div className="review-image-container">
                                                                        <img src="https://image.ibb.co/jw55Ex/def_face.jpg" className="review-image" />
                                                                    </div>
                                                                    <div style={{ marginLeft: '60px' }}>
                                                                        <div>
                                                                            <div>{review.user.username}</div>
                                                                        </div>
                                                                        <div>
                                                                            <span>{shortDate(review.createdAt)}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div style={{ marginTop: '10px' }}>
                                                                    <div>
                                                                        <StarRatings
                                                                            rating={review.rating}
                                                                            starRatedColor="orange"
                                                                            starHoverColor="orange"
                                                                            starDimension="20px"
                                                                            starSpacing="2px"
                                                                            numberOfStars={5}
                                                                            name='rating'
                                                                        />
                                                                    </div>
                                                                    <div>
                                                                        <p>{review.text}</p>
                                                                    </div>
                                                                </div>
                                                                <hr></hr>
                                                            </div>
                                                        )}
                                                    </section>
                                                </div>
                                            </div>
                                        }
                                        < ReviewModal rentalId={rental._id} />
                                    </Collapsible>
                                </div>
                            </div>
                        </div>




                        {/* <p>Properies: {rental._id}</p>
                        <p>Properies: {rental.street}</p>
                        <p>Properies: {rental.title}</p>

                        <div>
                            {reviews.map(review =>
                                <div key={review._id}>
                                     <p>Reviews: {review._id}</p>
                                    <p>Reviews: {review.text}</p>
                                </div>
                            )}
                        </div> */}
                        {/* < ReviewModal rentalId={rental._id} /> */}

                    </div>
                    <div className='col-md-12'>
                        <hr></hr>
                        <RentalMap location={`${rental.city}, ${rental.street}`} />
                    </div>
                </section>

            )
        }
        else {
            return (
                <h1>Loading....</h1>
            )
        }

    }
}

function mapStateToProps(state) {
    return {
        rental: state.rental.data,
        errors: state.rental.errors,
        auth: state.auth
    }
}

export default connect(mapStateToProps)(RentalDetail)