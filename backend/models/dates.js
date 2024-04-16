const mongoose = require('mongoose');

const datesSchema = mongoose.Schema({
	date : Date,
	departure : { type: mongoose.Schema.Types.ObjectId, ref: 'trajets' },
	arrival : { type: mongoose.Schema.Types.ObjectId, ref: 'trajets' },
});

const Date = mongoose.model('dates', datesSchema);

module.exports = Date;
