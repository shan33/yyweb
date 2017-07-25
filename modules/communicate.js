/**
 * Created by xulanshan on 17-7-22.
 */
/**
 * Created by xulanshan on 17-7-4.
 * 用户管理模块
 */
var async = require('async') ;                          //async
var mybase = {
    databases: {
        post: 'POST',
        TRAVAL_TEAM: 'TRAVEL_TEAM'
    }
} ;

var userTable = mybase.databases.user ;



//user
var user = {
    findUserQuery: 'SELECT * FROM ' +userTable ,
    insertUserQuery: 'INSERT INTO ' +userTable +' (NAME,PASSWORD,MINORITY) VALUES (?,?,?)' ,
    searchUserQuery: 'SELECT * FROM ' +userTable + ' WHERE NAME=? AND PASSWORD=?',

} ;

module.exports = user ;