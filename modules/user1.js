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

    //登录注册
    insertUserQuery: 'INSERT INTO ' +userTable +' (NAME,PASSWORD,MINORITY) VALUES (?,?,?)' ,
    searchUserQuery: 'SELECT * FROM ' +userTable + ' WHERE NAME=? AND PASSWORD=?',

    //发帖
    postMessageQuery: 'INSERT INTO ' + mybase.databases.post +' (POST_USER,TITLE,CONTENT,TIME) VALUES (?,?,?,?)',
    postMessageQueryWithTag: 'INSERT INTO ' + mybase.databases.post +' (POST_USER,TAG,TITLE,CONTENT,TIME) VALUES (?,?,?,?,?)',
    
    getTotalMessageQuery: 'SELECT post.ID,post.POST_USER,post.TITLE,post.CONTENT,post.TIME,user.NAME FROM ' +mybase.databases.post
                            +' post,' +mybase.databases.user +' user WHERE post.POST_USER=user.id ORDER BY post.ID DESC',
    getTotalMessageQueryWithTag: 'SELECT post.ID,post.POST_USER,post.TITLE,post.CONTENT,post.TIME, post.TAG,user.NAME FROM ' +mybase.databases.post
                            +' post,' +mybase.databases.user +' user WHERE post.POST_USER=user.id AND TAG=?',
    
    getSomeoneMessageQuery: 'SELECT * FROM ' +mybase.databases.post +" WHERE ID=(?)",

    //评论
    CommentMessageQuery: 'INSERT INTO ' + mybase.databases.comment +' (SEND_FROM,SEND_TO,POST_ID,COMMIT_CONTENT,TIME) VALUES (?,?,?,?,?)',
    getTotalCommentQuery: 'SELECT com.COMMIT_CONTENT,com.SEND_FROM,user.NAME,com.TIME FROM ' +mybase.databases.comment +' com, '+
                                           mybase.databases.user + ' user WHERE com.SEND_FROM=user.ID AND POST_ID=(?)',
    //个人信息
    findUserNameQuery: 'SELECT NAME FROM ' +userTable +' WHERE ID=(?)' ,
    getSelfMessageQuery: 'SELECT com.COMMIT_CONTENT,com.SEND_FROM,com.POST_ID,user.NAME,com.TIME,p.CONTENT FROM ' +mybase.databases.comment +' com, '+
                         mybase.databases.user+ ' user,' +mybase.databases.post +' p WHERE p.ID=com.POST_ID AND com.IF_READ=0 AND com.SEND_TO=user.ID AND user.ID=(?)',
    getSelfPostQuery: 'SELECT p.*,u.NAME FROM ' +mybase.databases.post + " p," + mybase.databases.user +" u WHERE p.POST_USER=u.ID AND u.ID=(?)"
} ;

module.exports = user ;
