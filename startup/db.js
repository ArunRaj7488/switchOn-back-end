const mongoose = require('mongoose');
 

module.exports= mongoose.connect('mongodb://localhost:27017/isoDate')
.then(()=>console.log("conncted to database"))
.catch(err =>console.log('not connected to databbse'));