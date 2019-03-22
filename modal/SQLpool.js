const mysql = require("mysql");
module.exports.sqlpool = function () {
    let pool = {
        config:{
        	  host     : 'localhost',
        	  user     : 'root',
        	  password : '123456',
        	  port	   : '3306',
        	  database : 'xn',
        	  multipleStatements: true
        },
        connect: function (sql,arr,fn) {
            //创建链接池对象
            const pool= mysql.createPool(this.config);
            //获取链接池对象
            pool.getConnection(function (err,connect) {
                if(err){
                    console.log(err);
                }else{
                    connect.query(sql,arr,fn);
                }
            });
        }
    }
    return pool;
};