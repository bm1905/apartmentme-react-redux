const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const Rental = require('./models/rental');
const FakeDb = require('./fake-db');

const rentalRoutes = require('./routes/rentals');

// var url = config.DB_URI || "mongodb://localhost/apartmentme-react-redux";
var url = config.DB_URI;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }).then(() => {
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
}).catch(err => console.error(err));

const app = express();

app.use('/api/v1/rentals', rentalRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, function(){
    console.log("Server started!");
});