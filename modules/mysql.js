/**
 * Created by xulanshan on 17-7-6.
 * mysql数据库模块
 */

var mysql = require('mysql') ;
var pool  = mysql.createConnection({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'xulanshan',
    database        : 'yyweb'
});

var mybase = {
    databases: {
        user: 'USER',
        TRAVAL_TEAM: 'TRAVEL_TEAM'
    }
} ;
mybase.myquery = function(que,data,res){
    // pool.connect() ;
    pool.query(que, data, function(err, result){
        if (err) {
            console.log("mysql.js--" +err);
        } else {
            console.log("mysql.js--" +result) ;

            return result ;
        }
    }) ;
} ;


module.exports = mybase ;