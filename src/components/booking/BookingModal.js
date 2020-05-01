import React from 'react';
import Modal from 'react-responsive-modal';
import { ResError } from 'components/shared/form/ResError';

export function BookingModal(props) {
    const { open, closeModal, booking, confirmModal, errors, rentalPrice } = props;

    return (
        <Modal open={open} onClose={closeModal} little classNames={{ modal: 'booking-modal' }}>
            <h4 className='modal-title title'>Confirm Reservation </h4>
            <hr></hr>
            <p className='dates'><em>{booking.startAt}</em> to <em>{booking.endAt}</em></p>
            <hr></hr>
            <div className='modal-body'>
                <p>Length: <em>{booking.days}</em> days</p>
                <p>Rate: <em>${rentalPrice}</em> per day</p>
                <p>Total guests: <em>{booking.guests}</em></p>
                <hr></hr>
                <p>Total Price: <em>${booking.totalPrice} </em></p>
                <hr></hr>
                <p>Do you want to confirm your reservation?</p>
            </div>
            <ResError errors={errors} />
            <div className='modal-footer'>
                <button onClick= {confirmModal} type='button' className='btn btn-bwm'>Confirm</button>
                <button type='button' onClick={closeModal} className='btn btn-bwm'>Cancel</button>
            </div>
        </Modal>

    )
}