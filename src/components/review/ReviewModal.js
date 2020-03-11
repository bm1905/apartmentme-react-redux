import React from 'react';
import Modal from 'react-responsive-modal';
import StarRatings from 'react-star-ratings';

import * as actions from 'actions';

export class ReviewModal extends React.Component {

    state = {
        open: false,
        text: '',
        rating: 3
    }

    closeModal = () => {
        this.setState({ open: false });
    }

    publishReview = () => {
        const { rating, text } = this.state;
        const { rentalId } = this.props;

        console.log(rentalId);

        // debugger;

        actions.createReview({ rating, text }, rentalId)
            .then(review => {
                console.log(review);
                this.closeModal();
            })

        console.log(this.state.rating);
        console.log(this.state.text);
    }

    openModal = () => {
        this.setState({ open: true });
    }

    handleTextChange = (event) => {
        this.setState({ text: event.target.value })
    }

    changeRating = (newRating, name) => {
        this.setState({ rating: newRating });
    }


    render() {

        const { open, text, rating } = this.state;

        return (
            <React.Fragment>
                <button className='btn btn-bwm' onClick={this.openModal}>Write a review</button>
                <Modal open={open} onClose={this.closeModal} little classNames={{ modal: 'review-modal' }}>
                    <h4 className='modal-title title'> Write a review </h4>
                    <div className='modal-body'>
                        <textarea
                            style={{ marginBottom: '10px' }}
                            value={text}
                            onChange={this.handleTextChange}
                            className='form-control'
                            placeholder='Write your review here'
                            rows={3}
                            cols={50}></textarea>
                        <StarRatings
                            rating={rating}
                            starRatedColor='orange'
                            starHoverColor='orange'
                            starDimension='25px'
                            starSpacing='2px'
                            changeRating={this.changeRating}
                            numberOfStars={5}
                            name='rating' />
                    </div>

                    <div className='modal-footer'>
                        <button disabled={!text || !rating} onClick={this.publishReview} type='button' className='btn btn-bwm'>Confirm</button>
                        <button type='button' onClick={this.closeModal} className='btn btn-bwm'>Cancel</button>
                    </div>
                </Modal>
            </React.Fragment>

        )
    }


}