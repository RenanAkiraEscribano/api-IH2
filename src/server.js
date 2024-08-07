require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression')
const routes = require('./routes.js');


const server = express();
server.use(compression())
server.use(express.json())
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }))
server.use('/api', routes);

server.listen(3001, () => {
    console.log(`Listing on: http://localhost:3001`)
})

