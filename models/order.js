const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./productSchema');

const lineItemSchema = new Schema({
    qty: { type: Number, default: 1 },
    item: itemSchema
  }, {
    timestamps: true,
  });

const orderSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    total: {
        type: Number,
        required: true
    },
    lineItems: [lineItemSchema],
    
  }, {
    timestamps: true,
  });

module.exports = mongoose.model('Order', orderSchema);