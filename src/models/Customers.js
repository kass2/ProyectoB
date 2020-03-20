const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);


const customers = new Schema({
    Address:String,
    City:String,
    Country:String,
    District: String,
    FirstName:String,
    LastName: String,
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