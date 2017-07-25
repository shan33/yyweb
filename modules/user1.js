/**
 * Created by xulanshan on 17-7-4.
 * 用户管理模块
 */
var async = require('async') ;                          //async
var mybase = {
    databases: {
        user: 'USER',
        travel_team: 'TRAVEL_TEAM',
        post: 'POST',
        comment: 'COMMIT'
    }
} ;

var userTable = mybase.databases.user ;



//user
var user = {
    findUserQuery: 'SELECT * FROM ' +userTable ,
    findUserNameQuery: 'SELECT NAME FROM ' +userTable +' WHERE ID=(?)' ,
    insertUserQuery: 'INSERT INTO ' +userTable +' (NAME,PASSWORD,MINORITY) VALUES (?,?,?)' ,
    searchUserQuery: 'SELECT * FROM ' +userTable + ' WHERE NAME=? AND PASSWORD=?',

    //发帖
    postMessageQuery: 'INSERT INTO ' + mybase.databases.post +' (POST_USER,TITLE,CONTENT,TIME) VALUES (?,?,?,?)',
    getTotalMessageQuery: 'SELECT * FROM ' +mybase.databases.post ,
    getSomeoneMessageQuery: 'SELECT * FROM ' +mybase.databases.post +" WHERE ID=(?)",
    //评论
    CommentMessageQuery: 'INSERT INTO ' + mybase.databases.comment +' (SEND_FROM,SEND_TO,POST_ID,CONTENT,TIME) VALUES (?,?,?,?,?)'
} ;

module.exports = user ;