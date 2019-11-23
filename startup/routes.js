const express = require('express');
const date = require('../routes/isoDATE');
const cors = require("cors");

module.exports = (app) => {
    app.use(express.json());

    app.use(cors());
    
    app.use('/api/date',date);
}


