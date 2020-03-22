const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);


const customers = new Schema({
    Address:{
      type: String,
      required: true
    },
    City:{
        type: String,
        required: true
      },
    Country:{
        type: String,
        required: true
      },
    District: {
        type: String,
        required: true
      },
    FirstName:{
        type: String,
        required: true
      },
    LastName:{
        type: String,
        required: true
      },
    status: {
        type: Boolean,
        default: false
    }
});

customers.plugin(autoIncrement.plugin, {
    model: '_id',
    field: '_id',
    startAt: 1,
    incrementBy: 1
});

module.exports = mongoose.model('Customers',customers);