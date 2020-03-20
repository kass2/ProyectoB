const express = require ('express');
const casaModelo = require('../models/Casas')
const router = express.Router();
const casa = {};

//punto 6
router.post('/lol', async(req, res) =>{
    const casa = new casaModelo({
        name: req.body.name,
        decription: req.body.description,
        bed_type:req.body.bed_type,
        price:req.body.price,
        id_customers: req.body.id_customers
    })
    await casa.save();

    res.json({
        status: "Se guardo la casa"
    });
})

//punto 7
router.get('/siete', async(req,res)=>{
    const lis =  await casaModelo.find({$where: "this.id_customers>0"});
    res.json(lis);
});


//punto 8
router.get('/tipo', async(req,res) =>{
 const tip = await casaModelo.find({$or : [{"bed_type":  "esta soltera"},{"bed_type": "Real Bed"}]})      
            res.json(tip);
        });


  //punto 9
  router.get('/precio', async(req,res)=>{
    const pre = await casaModelo.find({$and : [{"price": {$gte:2}},{"price": {$lte:100}}]})
    res.json(pre);
});




  module.exports = router;