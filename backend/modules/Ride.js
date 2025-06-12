const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  provider: String,
  pickup: String,
  dropoff: String,
  date: String,
  time: String,
  seats: Number
});

module.exports = mongoose.model('Ride', rideSchema);
