const router = require('express').Router();
 const {IsoDate} = require('../models/isoDATE');


 router.get('/', async(req, res)=>{
     const date = await IsoDate.find(req.body).sort("-isoDate");
     res.send(date);

 })

 router.post('/', async(req, res)=>{
     const obj = {
     	value: Math.floor(Math.random()*1000) + 1,
     	isoDate: new Date()
     }
     const date = new IsoDate(obj);
     
    await date.save();

     res.send(date);
 });
 module.exports = router;