/**
 * Created by xulanshan on 17-7-7.
 */
var express = require('express') ;						//express
var body_parser = require('body-parser') ;				//body-parser
var file = require('fs') ;
var url = require('url') ;
var sql = require('mysql') ;							//mysql
var path = require('path') ;							//path
var async = require('async') ;                          //async

/*
 /!*链接数据库 yyweb数据库*!/
 var mysql = sql.createConnection({
 host: 'localhost',
 user: 'root',
 password: 'xulanshan',
 database: 'yyweb'
 }) ;
 */


/*自定义模块导入*/
var user = require('./modules/user.js') ;

/*express设置*/
var app = express() ;
app.use(express.static('public') ) ;
app.set('views','./views') ;
app.set('view engine','jade') ;
app.use(body_parser.urlencoded({extended:true}))

/*监听端口*/
var port = 8080 ;
app.listen(port) ;
console.log("服务器开启：　"+ port) ;


/*路由设置*/
app.get('/',function(req,res){              //主页面
    // console.log("server.js--主页面请求") ;
    // user.findUser() ;
    // console.log("server.js--" +user.personLength) ;

    async.waterfall([
        function(callback){
            user.findUser() ;
            callback(null,'') ;
        },
        function(a,callback){
            console.log("server.js--" +user.personLength) ;
            callback(null,user.personLength) ;
        }
    ],function(err,personLength){
        console.log("server.js--" +personLength) ;
        res.render('./pages/index',{
            title: 'xls'
        }) ;
    })
}) ;

/*页面跳转*/
app.get('/culture',function(req,res){		//跳转culture页面
    // console.log("server.js--跳转vacation页面请求") ;
    res.render('./pages/culture',{
        title: '文化板块'
    }) ;
}) ;
app.get('/vacation',function(req,res){		//跳转vacation页面
    // console.log("server.js--跳转vacation页面请求") ;
    res.render('./pages/vacation',{
        title: '攻略攻略'
    }) ;
}) ;
app.get('/talking',function(req,res){		//talking
    // console.log("server.js--跳转vacation页面请求") ;
    res.render('./pages/talking',{
        title: '聊一聊'
    }) ;
}) ;
app.get('/store',function(req,res){		//talking
    // console.log("server.js--跳store页面请求") ;
    res.render('./pages/store',{
        title: '商品逛一逛'
    }) ;
}) ;
app.get('/new',function(req,res){		//talking
    // console.log("server.js--new页面请求") ;
    res.render('./pages/new',{
        title: '商品逛一逛'
    }) ;
}) ;
app.get('/self_info',function(req,res){		//talking
    // console.log("server.js--self_info页面请求") ;
    res.render('./pages/self-info',{
        title: '个人信息'
    }) ;
}) ;

/*用户登录*/
app.post('/login',function(req,res){
    console.log( 'server.js--用户登录--' +req.body.name +" ---姓名　　"　+req.body.pass +"----密码") ;
    user.searchUser(req.query.username, req.query.userpass,res) ;
    var name = req.body.name ;
    res.render('./pages/index',{
        title: 'xls'
    }) ;
}) ;
/*用户注册*/
app.post('/register',function(req,res){
    console.log( 'server.js--用户登录--' +req.body.name +" --姓名　　"　+req.body.pass +"--密码" +req.body.minority +"--少数民族") ;
    user.insertUser(req.body.name,req.body.pass,req.body.minority,res) ;
    /*res.render('./pages/index',{
     title: 'xls'
     }) ;*/
})
/*退出登录*/
app.post('/logout',function(req,res){
    console.log('server.js--用户退出登录') ;
    res.redirect('/') ;
}) ;

app.get('/admin:id',function(){             //用户登录的页面

}) ;


