const mongoose = require('mongoose');

const trajetsSchema = mongoose.Schema({
	departure: String,
	arrival: String,
	time: Date,
	price: Number,
});

const Trajet = mongoose.model('trajets', trajetsSchema);

module.exports = Trajet;
