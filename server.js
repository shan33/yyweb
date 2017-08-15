var express = require('express') ;						//express
var body_parser = require('body-parser') ;				//body-parser
//var file = require('fs') ;
var url = require('url') ;
var sql = require('mysql') ;							//mysql
var path = require('path') ;							//path
var async = require('async') ;                          //async
var session = require('express-session') ;              //session
var cookieParser = require('cookie-parser') ;          //cookie-parser

/*链接数据库 yyweb数据库*/
var mydatabase = sql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'xulanshan',
	database: 'yyweb'
}) ;

mydatabase.connect() ;

/*自定义模块导入*/
var user = require('./modules/user1') ;
var speInfo = require('./modules/specificInfo') ;

/*express设置*/
var app = express() ;
app.use(express.static('public') ) ;
app.set('views','./views') ;
app.set('view engine','jade') ;
app.use(body_parser.urlencoded({extended:true})) ;
app.use(cookieParser('mySession')) ;
app.use(session({
    secret: 'mySession',
    resave: true,
    saveUninitialized: false
})) ;

/*监听端口*/
var port = 8080 ;
app.listen(port) ;
console.log("服务器开启：　"+ port) ;


/*路由设置*/
app.get('/',function(req,res){              //主页面
    // console.log("server.js--主页面请求") ;
    async.waterfall([
        //查询
        function(callback){
            mydatabase.query( user.findUserQuery, function(err,result){
                var resu = result.length ;
                callback(err,resu) ;
            } ) ;
        }
    ],function(err,personNumber){
        if(err)
            console.log(err ) ;
        else{
            console.log( "server.js--人数： " +personNumber ) ;
            var welcomeName = '未登录' ;
            if( req.session.Cookie )
                welcomeName = req.session.Cookie.name ;
            res.render('./pages/index',{
                title: welcomeName
            }) ;
        }
    })
}) ;



/*用户登录*/
app.post('/login',function(req,res){
    console.log( 'server.js--用户登录--' +req.body.name +" ---姓名　　"　+req.body.pass +"----密码") ;
    async.waterfall([
        //查询
        function(callback){
            mydatabase.query( user.searchUserQuery, [req.body.name,req.body.pass] , function(err,result){
                console.log("登录") ;
                if(result == null || result=='' )
                    callback(null, 0) ;
                else{
                    console.log( "登录 result："　+ result[0].NAME) ;
                    var user = {
                        name: result[0].NAME,
                        id: result[0].ID,
                        minority: result[0].MINORITY
                    } ;
                    callback(null, user ) ;
                }
            } ) ;
        }
    ],function(err,myuser){
        if(err) {
            console.log(err);
            res.send('0') ;
        }else if(myuser == 0) {
            console.log("用户不存在") ;
            res.send('0') ;
        }else{
            console.log( "登录成功-- " +myuser) ;
            req.session.Cookie = myuser ;
            res.send( myuser.name) ;

        }
    })
}) ;

/*用户注册*/
app.post('/register',function(req,res){
    console.log( 'server.js--用户登录--' +req.body.name +" --姓名　　"　+req.body.pass +"--密码" +req.body.minority +"--少数民族") ;
    async.waterfall([
        //查询
        function(callback){
            mydatabase.query( user.insertUserQuery, [req.body.name,req.body.pass,req.body.minority] , function(err,result){
                callback(err, req.body.name)/*{
                    name: result[0].name
                }) ;*/
            } ) ;
        }
    ],function(err,myuser){
        if(err) {
            console.log(err);
            res.status(304) ;
        }
        else{
            console.log( "注册成功-- " +myuser) ;
            res.render('./pages/index',{
                title: myuser
            }) ;
        }
    })
})
/*退出登录*/
app.post('/logout',function(req,res){
    console.log('server.js--用户退出登录') ;
    req.session.Cookie = null ;
    res.redirect('/') ;
}) ;
/*发帖*/
app.post('/post',function(req,res){
    //console.log("发帖信息： " + req.body.user +" : " +req.body.time +" -- " + req.body.title) ;
    if( req.session.Cookie) {
        var message = {
            user: req.session.Cookie.id,
            time: req.body.time,
            title: req.body.title,
            content: req.body.content
        };
        async.waterfall([
            //查询
            function (callback) {
                mydatabase.query(user.postMessageQuery, [message.user, message.title, message.content, message.time], function (err, result) {
                    //console.log("发帖") ;
                    if (result == null || result == '')
                        callback(null, 0);
                    else {
                        callback(null, req.body.user);
                    }
                });
            }
        ], function (err, myuser) {
            if (err) {
                console.log(err);
                res.send('0');
            } else if (myuser == 0) {
                console.log("发帖失败");
                res.send('0');
            } else {
                //console.log( "发帖成功-- " +myuser) ;
                res.send('1');
            }
        })
    }else
        res.send('0');


}) ;
/*获取帖子信息*/
app.get('/getPosts',function(req,res){
    console.log("获取帖子信息") ;
    async.waterfall([
        //查询
        function(callback){
            mydatabase.query( user.getTotalMessageQuery , function(err,result){
                if(result == null || result=='' )
                    callback(err, 0) ;
                else {
                    //console.log(result[0]) ;
                    callback(err, result);
                }
            } ) ;
        }
    ],function(err,info){
        if(err) {
            console.log(err);
            res.send('0') ;
        }else{
            console.log( "查询帖子成功-- " ) ;
            res.send(info) ;
        }
    })
}) ;
/*评论*/
app.post('/setComments',function(req,res){
    //评论
    console.log("评论--: " ) ; //+req.body.postID +" - " +req.body.commentTo +" - " + req.body.commentContent + " - " +req.body.commentTime) ;
    if(req.session.Cookie){
        async.waterfall([
            //查询
            function(callback){
                mydatabase.query( user.CommentMessageQuery, [req.session.Cookie.id,req.body.commentTo,req.body.postID,req.body.commentContent,req.body.commentTime] , function(err,result){
                    console.log("评论") ;
                    if(result == null || result=='' )
                        callback(null, 0) ;
                    else{
                        //console.log( "评论成功 result："　+ result[0]) ;
                        callback(null, '1' ) ;
                    }
                } ) ;
            }
        ],function(err,myuser){
            if(err) {
                console.log(err);
                res.send('0') ;
            }else if(myuser == 0) {
                console.log("评论失败") ;
                res.send('0') ;
            }else{
                console.log( "评论成功");
                res.send( myuser) ;

            }
        })
    }else
        res.send('0') ;
}) ;
/*获取评论*/
app.get('/getComments',function(req,res){
    //评论
    // console.log( "评论 :" +req.query.id) ;
    async.waterfall([
        //查询
        function(callback){
            mydatabase.query(user.getTotalCommentQuery,[req.query.id],function (error,result) {
                console.log("获取评论") ;
                if(result == null || result=='' )
                    callback(null, 0) ;
                else{
                    console.log(result[0]) ;
                    callback(null, result ) ;
                }
            }) ;
        }
    ],function(err,result){
        if(err) {
            console.log(err);
            res.send('0') ;
        }else if(result == 0) {
            console.log('获取失败') ;
            res.send('0') ;
        }else{
            res.send(result) ;
        }
    }) ;
}) ;

//获取文化界面具体信息
app.get('/spe_info',function(req,res){
    var info_index = req.query.index ;
    res.send(  speInfo[(speInfo.infoIndex[info_index])] ) ;
}) ;

app.get('/admin:id',function(){             //用户登录的页面

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
    var queryMean = req.query.message;
    // console.log(req.query.message + "----" +req.params.message);
    if (typeof(queryMean) == 'undefined') {
        // console.log("hjd");
        if (req.session.Cookie) {
            res.render('./pages/self-info', {
                title: '个人信息',
                //myInfo: '暂无新的消息'
            });
        }
        /*else
         res.send('0');*/
    }else{
        if( req.session.Cookie) {
            var userID = req.session.Cookie.id;
            console.log("query: " + queryMean +" ID:" +userID);
            async.waterfall([
                    //查询
                    function (callback) {
                        if (queryMean == 'info') {
                            mydatabase.query(user.getSelfPostQuery, [userID], function (err, result) {
                                console.log("个人发帖") ;
                                if (result == null || result == '')
                                    callback(null, {
                                        name: "info",
                                        result: '0'
                                    });
                                else {
                                    // console.log(result[0]);
                                    callback(null, {
                                        name: "info",
                                        result: result
                                    });
                                }
                            });
                        }else{
                            mydatabase.query(user.getSelfMessageQuery, [userID], function (err, result) {
                                console.log("个人消息") ;
                                if (result == null || result == '')
                                    callback(null, {
                                        name: "message",
                                        result: '0'
                                    });
                                else {
                                     // console.log(result[0]);
                                    callback(null, {
                                        name: "message",
                                        result: result
                                    });
                                }
                            });
                        }
                    }
                ], function (err, result) {
                    if (err) {
                        console.log(err);
                        res.send('失败');
                    }else {
                        res.send(result);
                    }
                });
        }else
            res.redirect('/');
    }
});
app.get('/self_info',function(req,res){		//talking


}) ;
