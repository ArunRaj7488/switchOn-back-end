const mongoose = require('mongoose');

const isoDateSchema = new mongoose.Schema({
    value: {
        type: Number,
    },
    isoDate: {
        type: Date,
        default: Date.now()
    }
}) ;
 const IsoDate = mongoose.model('IsoDate', isoDateSchema);


 exports.IsoDate = IsoDate;

