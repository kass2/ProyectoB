const express = require ('express');
const router = express.Router();

const costumer = require('../models/task')

router.get('/', async(req, res) => {
    const cliente = await costumer.find();
    res.render('index', {
        cliente
    });
});

router.post('/add', async(req , res)=>{
    const cos = new costumer(req.body);
    await cos.save();
   res.redirect('/');
});
router.get('/turn/:id', async(req , res) =>{
    const { id } = req.params;
    const cos = await costumer.findById(id);
    cos.status = !cos.status;
    await cos.save();
   res.redirect('/')
});

router.get('/delete/:id', async(req , res)=>{
    const { id } = req.params;
    await costumer.remove({_id: id});
    res.redirect('/');
});
router.get('/update/:id', async(req , res)=>{
    const { id } = req.params;
    const cos = await costumer.findById(id); 
    res.render('update', {
         cos
    })
 });

 router.post('/update/:id', async(req , res)=>{
    const { id } = req.params;
    await costumer.update({_id: id}, req.body); 
    res.redirect('/')
 });



module.exports = router;