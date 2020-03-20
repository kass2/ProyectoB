const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const MongoClient = require('mongodb').MongoClient;


const casaSchema = new Schema({
    
    name:String,
    description:String,
    bed_type:String,
    price:int,
    id_customers:int
});

module.exports = mongoose.model('rentas',casaSchema);