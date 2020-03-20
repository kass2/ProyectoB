const express = require ('express');
const router = express.Router();

//conection url
const url = 'mongodb://localhost:27017';
const dbname  = "sample_airbnb"

//create a new Mongocliente
const client = new MongoClient(url, {useUnifiedTopology: true});

app.use(express.json())
router.get('/casas', async(req, res) => {
const casas = await casas.aggregate([
        {
            $lookup: {
              from: rentas,
              localField: '_id',
              foreignField:'_id',
              as:'Rentas'
            }
        }
    ])
    res.json(casas);
  });

