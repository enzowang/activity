const mysql = require('mysql');
const sqlPoolObj = require('./sqlpool.js');
const sqlPool = sqlPoolObj.sqlpool();

module.exports = {
		getActivityList: function (params,urlParams,callback){

			var start = (urlParams.page - 1) * urlParams.size;
			var sql = 'SELECT COUNT(id) FROM activity;SELECT * FROM activity limit ?,?;';
			sqlPool.connect(sql, [start, urlParams.size - 0],function (error, results) {
				if(results){
					var allCount = results[0][0]['COUNT(id)'];
			        var allPage = parseInt(allCount)/20;
			        var pageStr = allPage.toString();
			        if (pageStr.indexOf('.')>0) {
			            allPage = parseInt(pageStr.split('.')[0]) + 1; 
			        }
			        var userList = results[1];
					
					if (error) throw error;
					  	callback("",{msg:'操作成功',status:'100',totalPages:allPage,currentPage:urlParams.page,data:userList});
				}else{
					if (error) throw error;
					  	callback("",{msg:'操作成功',status:'100',totalPages:0,currentPage:urlParams.page,data:[]});
				}

			});
		},
		saveActivity:function (params,urlParams,callback){
			console.log(params,urlParams);
			var start = (urlParams.page - 1) * urlParams.size;
			var sql = 'INSERT INTO users SET ?'; 
			sqlPool.connect(sql,params,function (error, results) {
				console.log(results);
				

			});
		}
};