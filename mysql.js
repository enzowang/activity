var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'xn'
});

connection.connect();

function checkoutAccount(params,callback){
	connection.query('SELECT * from user where name = ? and password  = ?',[params.account,params.password], function (error, results) {
	  if (error) throw error;
	  	callback(results);
	});
}
function getActivityList(params,urlParams,callback){
	console.log(params,urlParams);
	var start = (urlParams.page - 1) * urlParams.size;
	var sql = 'SELECT COUNT(*) FROM activity; SELECT * FROM activity limit ' + start + ',' + urlParams.size; 
	connection.query(sql, function (error, results) {
		console.log(results);
		if(results){
			var allCount = results[0][0]['COUNT(*)'];
	        var allPage = parseInt(allCount)/20;
	        var pageStr = allPage.toString();
	        if (pageStr.indexOf('.')>0) {
	            allPage = parseInt(pageStr.split('.')[0]) + 1; 
	        }
	        var userList = results[1];
			
			if (error) throw error;
			  	callback({msg:'操作成功',status:'100',totalPages:allPage,currentPage:param.page,data:userList});
		}else{

			if (error) throw error;
			  	callback({msg:'操作成功',status:'100',totalPages:0,currentPage:param.page,data:[]});
		}

	});
}
module.exports = sqlOperation = {
	checkAccount:checkoutAccount,
	getActivityList:getActivityList
};
