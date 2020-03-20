const mongoose = require ('mongoose');
const Schema = mongoose.Schema;



const casa = new Schema({
    
    name:String,
    description:String,
    bed_type:String,
    price:Number,
    id_customers:Number
});

module.exports = mongoose.model('Casas',casa);