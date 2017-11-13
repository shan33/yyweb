/**
 * Created by xulanshan on 17-7-6.
 * mysql数据库模块
 */


var mysql = require('mysql') ;
var async = require('async') ;
var pool  = mysql.createConnection({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'xulanshan',
    charset         : 'UTF8_GENERAL_CI',
});

var base = "CREATE DATABASE yyweb";

var userTable = "CREATE TABLE USER (\
    ID INT(4) NOT NULL AUTO_INCREMENT,\
    NAME VARCHAR(20) NOT NULL,\
    PASSWORD VARCHAR(20) NOT NULL,\
    MINORITY INT(2) NOT NULL DEFAULT 0,\
    PRIMARY KEY(ID)\
)";

var  saleTable= "CREATE TABLE SALE_THING (\
    ID INT(4) NOT NULL AUTO_INCREMENT,\
    NAME VARCHAR(50) NOT NULL,\
    INTRODUCE VARCHAR(200),\
    PIC INT(20) NOT NULL,\
    LINK INT(100) NOT NULL,\
    PRIMARY KEY(ID)\
)";

var  commentTable= "CREATE TABLE COMMIT (\
    ID INT(4) NOT NULL AUTO_INCREMENT,\
    SEND_FROM INT(11) NOT NULL,\
    SEND_TO INT(11) NOT NULL,\
    POST_ID INT(11) NOT NULL,\
    COMMIT_CONTENT VARCHAR(100),\
    TIME DATETIME NOT NULL,\
    IF_READ INT(1) DEFAULT 0,\
    FOREIGN KEY(SEND_FROM) REFERENCES USER(ID),\
    FOREIGN KEY(SEND_TO) REFERENCES USER(ID),\
    FOREIGN KEY(POST_ID) REFERENCES POST(ID),\
    PRIMARY KEY(ID)\
)";

var  postTable= "CREATE TABLE POST (\
    ID INT(4) NOT NULL AUTO_INCREMENT,\
    POST_USER INT(11) NOT NULL,\
    TITLE VARCHAR(100) NOT NULL,\
    TAG INT(2) DEFAULT 0,\
    TIME DATETIME NOT NULL,\
    FOREIGN KEY(POST_USER) REFERENCES USER(ID),\
    CONTENT VARCHAR(200),\
    PRIMARY KEY(ID)\
)";

var  travelTable= "CREATE TABLE TRAVEL_TEAM (\
    ID INT(4) NOT NULL AUTO_INCREMENT,\
    PERSON_ID INT(11) NOT NULL,\
    TIME DATETIME NOT NULL,\
    PLACE VARCHAR(100) NOT NULL,\
    PERSON_NUMBER INT(11) NOT NULL,\
    OTHER VARCHAR(100),\
    FOREIGN KEY(PERSON_ID) REFERENCES USER(ID),\
    PRIMARY KEY(ID)\
)";

var tipTable = "CREATE TABLE TIP(\
    ID INT(4) NOT NULL AUTO_INCREMENT,\
    PERSON_ID INT(11) NOT NULL,\
    TIME DATETIME NOT NULL,\
    TAG INT DEFAULT 0,\
    X INT(4) NOT NULL,\
    Y INT(4) NOT NULL,\
    INFO VARCHAR(50),\
    FOREIGN KEY(PERSON_ID) REFERENCES USER(ID),\
    PRIMARY KEY(ID)\
)";
pool.connect();
pool.query(base, function(err) {
    
});
pool.query('use yyweb');

// pool.end();
async.waterfall([
        function(callback) {    
            pool.query( userTable, function(err,result) {
            });
            pool.query( travelTable, function(err,result) {
                if (err.code !== 'ER_TABLE_EXISTS_ERROR')
                    callback(err);
                else callback();

            });
        },
        function(callback) {
            pool.query( postTable, function(err,result) {
                if (err.code !== 'ER_TABLE_EXISTS_ERROR')
                    callback(err);
                else callback();
            });
        },
        function(callback) {
            pool.query( commentTable, function(err,result) {
                if (err.code !== 'ER_TABLE_EXISTS_ERROR')
                    callback(err);
                else callback();

            });
        },
        function(callback) {
            pool.query( tipTable, function(err,result) {
                if (err.code !== 'ER_TABLE_EXISTS_ERROR')
                    callback(err);
                else callback();

            });
        },
    ], function(err) {
        if(err)
            console.log(err) ;
        else
           console.log('创建完成');
    }
);

module.exports = pool ;