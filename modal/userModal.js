const mysql = require('mysql');
const sqlPoolObj = require('./sqlpool.js');
const sqlPool = sqlPoolObj.sqlpool();

module.exports = {
	checkAccount: function (params,callback){
		sqlPool.connect('SELECT * from user where name = ? and password  = ?',[params.account,params.password], callback);
	}
};