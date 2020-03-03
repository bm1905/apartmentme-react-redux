import React from 'react';
import { connect } from 'react-redux';
import ImageGallery from 'react-image-gallery';
import House1 from '../../../styles/images/1.jpg';


import { RentalDetailInfo } from './RentalDetailInfo';
import { RentalDetailUpdate } from './RentalDetailUpdate';
import RentalMap from './RentalMap';
// import { Search } from '../../../components/shared/Search';
import Booking from 'components/booking/Booking';
import { UserGuard } from '../../shared/auth/UserGuard';

import * as actions from 'actions';
import { ContactOwnerCard } from 'components/contact/ContactOwnerCard';

const PREFIX_URL = 'https://apt-ng-dev.s3.amazonaws.com/pictures/';
{/* <img src={rental.image} alt=''></img> */}

class RentalDetail extends React.Component {

    constructor() {

        super();

        this.state = {
            isAllowed: false,
            isFetching: true
        }

        this.verifyRentalOwner = this.verifyRentalOwner.bind(this);
    }

    componentWillMount() {
        // Dispatch action.
        const rentalId = this.props.match.params.id;

        this.props.dispatch(actions.fetchRentalById(rentalId));
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

    render() {
        const { rental, errors } = this.props;

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
                    </div>
                    <div className='col-md-8'>
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
        errors: state.rental.errors
    }
}

export default connect(mapStateToProps)(RentalDetail)