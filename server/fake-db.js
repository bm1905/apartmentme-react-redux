const Rental = require('./models/rental');

class FakeDb {
    constructor() {
        this.rentals = [{
            title: "One bed/bath available",
            city: "Shreveport",
            street: "8501 Millicent Way",
            category: "apartment",
            image: "https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
            bedrooms: 2,
            shared: true,
            description: "Very nice and clean double bed apartment. One room is vacant with attached bathroom. Very close to walmart, cinemark and LSUS.",
            dailyRate: 12
            },
            {
            title: "Two bed apartment to share",
            city: "New York",
            street: "Time Square",
            category: "apartment",
            image: "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            bedrooms: 2,
            shared: false,
            description: "Located at the heart of the city. One bed and bath completely available.",
            dailyRate: 50
            },
            {
            title: "Whole house to share",
            city: "Bossier City",
            street: "1000 Maize St",
            category: "house",
            image: "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            bedrooms: 5,
            shared: true,
            description: "Big open space, only single couple living in the house. Very good neighbourhood.",
            dailyRate: 23
        }]
    }

    async cleanDb() {
        await Rental.deleteMany({});
    }

    pushRentalsToDb() {
        this.rentals.forEach((rental) => {
            const newRental = new Rental(rental);
            newRental.save();
        })
    }

    seedDb() {
        this.cleanDb();
        this.pushRentalsToDb();
    }
}

module.exports = FakeDb;