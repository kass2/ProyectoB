const express = require ('express');
const router = express.Router();
const customerModelo = require('../models/Customers');
const casaModelo = require('../models/Casas')


router.get('/', async(req, res) => {
    const cliente = await customerModelo.find();
    res.render('index', {
        cliente
    });
});

router.post('/add', async(req , res)=>{
    const cos = new customerModelo(req.body);
    await cos.save();
   res.redirect('/');
});

router.get('/turn/:id', async(req , res) =>{
    const { id } = req.params;
    const cos = await customerModelo.findById(id);
    cos.status = !cos.status;
    await cos.save();
   res.redirect('/')
});

router.get('/delete/:id', async(req , res)=>{
    const { id } = req.params;
    await customerModelo.remove({_id: id});
    res.redirect('/');
});
router.get('/update/:id', async(req , res)=>{
    const { id } = req.params;
    const cos = await customerModelo.findById(id); 
    res.render('update', {
         cos
    })
 });
 router.post('/buscador', async(req , res)=>{
    const { id } = req.params;
    await customerModelo.findById(id);
    console.log(req.params)
    res.redirect('/');
});
 router.post('/update/:id', async(req , res)=>{
    const { id } = req.params;
    await customerModelo.update({_id: id}, req.body); 
    res.redirect('/')
 });

 router.get('/a', async(req, res) => {
     const nombre = casaModelo.collection.collectionName;
    const cliente = await customerModelo.aggregate([
            {
                $lookup: {
                  from: nombre,
                  localField: '_id',
                  foreignField:'id_customers',
                  as:'Rentas'
                }
            }
        ])
        res.json(cliente);
      });


module.exports = router;