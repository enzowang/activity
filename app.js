const express = require('express');
const bodyParser = require("body-parser");
const routes = require('./routes/routes.js');
const app = express();

app.use(bodyParser.urlencoded({ extended: false})); 


app.use(routes);



app.listen(8090,function(){
	console.log("success");
});