const express = require('express');

const app = express();

require('./startup/routes')(app);

require('./startup/db');


const port = 8081;
 app.listen(port,()=> console.log(`listening on port ${port}...`));