var express = require('express');
var router = express.Router();


const Trip = require('../models/trips');
const Booking = require('../models/bookings');
const Cart = require('../models/carts');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET trips from search*/
router.get('/trips/:departure/:arrival/:date', async (req, res) => {
  const { departure, arrival, date } = req.params;

  
  if (!departure || !arrival || !date) {
    return res.send('Departure, arrival, and date must be provided.');
  }

  const searchDate = new Date(date);
  console.log(searchDate)

  const endDate = new Date(date);
  console.log(endDate)
 
    const availableTrips = await Trip.find({
     departure: departure,
      arrival: arrival,
      date: {
        $gte: searchDate,
        $lte: endDate
      }
    });
    console.log(availableTrips)
    
    if (!availableTrips.length) {
      return res.json({ message: 'No trips found.' });
    }

    res.json(availableTrips);
  
});






/* POST trips in cart */
router.post('/cart', (req, res) => {

  // Get trip ID and find trip by ID
  const tripId = req.body._id;
  const trip = Trip.findById(tripId);

  if (!trip){
            return res.json({result : false, error: 'No ticket in your cart'});
            }

   let cart = Cart({ trips: [], total: 0 }); // create cart

   cart.trips.push(trip._id); //push trip
   cart.total += trip.price; //increment total
   
   cart.save();
   res.json({ result: true, cart : cart});
})


/* POST trips in booking */
router.post('/bookings', (req, res) => {

  // Get trip ID and find trip by ID
  const tripId = req.body._id;
  const trip = Trip.findById(tripId);

  if (!trip){
            return res.json({result : false, erro :'No ticket in your cart'});
            }

   let booking = Booking({ trips: [], departure: trips.date }); // create bookint

   booking.trips.push(trip._id); //push trip
   booking.departure = trips.date; //revoke date
   
   booking.save();
   res.json({ result: true, booking : booking});
})



module.exports = router;
