"use strict";

const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000 )

require('./src/routes/routes')(app)

app.listen(process.env.PORT || 3000, function(){
    console.log("Node app is running at localhost:" + app.get('port'));
});

module.exports = app