const User = require('../models/user');
const Rental = require('../models/rental');

const Review = require('../models/review');
const Booking = require('../models/booking');
const moment = require('moment');

const { normalizeErrors } = require('../helpers/mongoose');

exports.getReviews = function (req, res) {
    const { rentalId } = req.query;

    Review.find({ 'rental': rentalId })
        .populate('user')
        .exec((err, reviews) => {
            if (err) {
                return res.status(422).send({ errors: normalizeErrors(err.errors) });
            }
            return res.json(reviews);
        });
}

exports.createReview = function (req, res) {

    const reviewData = req.body;
    const { rentalid } = req.query;
    const user = res.locals.user;

    Rental.findById(rentalid)
        .populate({ path: 'rental', populate: { path: 'user' } })
        .populate('review')
        .populate('user')
        .exec(async (err, foundRental) => {
            if (err) {
                return res.status(422).send({ errors: normalizeErrors(err.errors) });
            }

            const { rental } = foundRental;

            // if (rental.user.id === user.id) {
            //     return res.status(422).send({ errors: [{ title: 'Invalid User!', detail: 'Sorry, cannot review your own property!' }] });
            // }

            // if (foundBooking.review) {
            //     return res.status(422).send({ errors: [{ title: 'Not allowed!', detail: 'Sorry, Multiple reviews not allowed!' }] });
            // }

            const review = new Review(reviewData);
            review.user = user;
            review.rental = rental;
            foundRental.review = review;

            try {
                await foundRental.save();
                const savedReview = await review.save();

                return res.json(savedReview);
            } catch (err) {
                return res.status(422).send({ errors: normalizeErrors(err.errors) });
            }
        });
}
