const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
    title: { type: String, required: true, max: [128, 'Too Long, maximum character is 128'] },
    city: { type: String, required: true, lowercase: true },
    street: { type: String, required: true, min: [4, 'Minimum 4 character required'] },
    zip: Number,
    category: { type: String, required: true, lowercase: true },
    image: { type: String, required: true },
    bedrooms: Number,
    bath: Number,
    laundry: Boolean,
    shared: Boolean,
    pets: Boolean,
    parking: Boolean,
    area: Number,
    description: { type: String, required: true },
    dailyRate: Number,
    monthlyRate: Number,
    createdAt: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }]
});

module.exports = mongoose.model('Rental', rentalSchema);