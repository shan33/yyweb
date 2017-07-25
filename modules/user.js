/**
 * Created by xulanshan on 17-7-4.
 * 用户管理模块
 */
var async = require('async') ;                          //async
var mysql = require('mysql') ;
var mydatabase  = mysql.createConnection({
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
mydatabase.connect() ;

// var mydatabase = require('./mysql') ;
var userTable = mybase.databases.user ;


var findUserQuery = 'SELECT * FROM ' +userTable ;
var insertUserQuery = 'INSERT INTO ' +userTable +' (NAME,PASSWORD,MINORITY) VALUES (?,?,?)' ;
var searchUserQuery = 'SELECT * FROM ' +userTable + ' WHERE NAME=? AND PASSWORD=?' ;

//user
var user = {} ;
user.findUser = function(){                                               //获取用户表人数
         // console.log('user.js--查找用户--' +mydatabase.myquery( findUserQuery,null) ) ;

}
user.insertUser = function(name,pass,minority,response){                           //注册用户
        console.log('user.js--注册用户') ;
        mydatabase.myquery( insertUserQuery,[name,pass,minority],response ) ;

    }
user.searchUser = function(name,password,response){
        console.log('user.js--登录用户') ;
        // console.log('user.js--' +mydatabase.myquery( searchUserQuery,[name,password],response )  );
    }



module.exports = user ;