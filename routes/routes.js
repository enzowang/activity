const express = require('express');
const route = express.Router();

const userController = require('./../controller/userController.js');
const activityController = require('./../controller/activityController.js');

route.all('*',function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','content-type');
	res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
	res.header('X-Powered-By','3.2.1');
	res.header('Content-Type','application/json;charset=utf-8');
	next();
});

route.post('/check-account' ,userController.checkAccount);
route.post('/get/activity/list' ,activityController.getActivityList);
route.post('/save/activity' ,activityController.saveActivity);

module.exports = route; 