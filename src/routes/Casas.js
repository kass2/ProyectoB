const express = require ('express');
const router = express.Router();

//app.use(express.json())
router.get('/casas', async(req, res) => {
const casas = await casas.aggregate([
        {
            $lookup: {
              from: Rentas,
              localField: '_id',
              foreignField:'id_customers',
              as:'Rentas'
            }
        }
    ])
    //res.json(casas);
  });