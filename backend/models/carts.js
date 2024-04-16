const mongoose = require('mongoose');

const cartsSchema = mongoose.Schema({
	trips : [{ type: mongoose.Schema.Types.ObjectId, ref: 'trips' }],
	total : Number,
});

const Cart = mongoose.model('carts', cartsSchema);

module.exports = Cart;
