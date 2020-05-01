import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { BookingCard } from './BookingCard';

import * as actions from 'actions';

class BookingManage extends React.Component {

    componentWillMount() {
        this.props.dispatch(actions.fetchUserBookings());
    }

    renderBookings(bookings) {
        return bookings.map((booking, index) => <BookingCard booking={booking} key={index} />)
    }

    render() {
        const { data: bookings, isFetching } = this.props.userBookings;

        return (
            <section id='userBookings'>
                <h1 className='page-title'>Rooms you rented</h1>
                <div className='row'>
                    { this.renderBookings(bookings) }
                </div>
                { !isFetching && bookings.length === 0 &&
                    <div className='alert alert-warning'>
                        You have not rented any rooms yet! If you find a suitable room, book it and it will appear here. <br></br>
                        <Link style={{'marginLeft': '10px'}} className='btn btn-bwm' to='/'>Search Listings</Link>
                    </div>
                }
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        userBookings: state.userBookings
    }
}

export default connect(mapStateToProps)(BookingManage)