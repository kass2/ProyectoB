const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


const clienteSchema = new Schema({
    Address:String,
    City:String,
    Country:String,
    District: String,
    FirstName:String,
    LastName: String,
    Status:String
});

module.exports = mongoose.model('Customers',clienteSchema);