const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/dev');
const Rental = require('./models/rental');
const FakeDb = require('./fake-db');

const   rentalRoutes = require('./routes/rentals'),
        userRoutes = require('./routes/users'),
        bookingRoutes = require('./routes/bookings');

// var url = config.DB_URI || "mongodb://localhost/apartmentme-react-redux";
var url = config.DB_URI;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }).then(() => {
    const fakeDb = new FakeDb();
    // fakeDb.seedDb();
}).catch(err => console.error(err));

const app = express();

app.use(bodyParser.json());

app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/bookings', bookingRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, function(){
    console.log("Server started!");
});