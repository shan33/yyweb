$(document).ready(init) ;
var posts;
var comments;
var post_index = 0;
var comments_index = 0 ;
function init(){
    showSticky("") ;      //显示便利
    
    //选择帖子板块
    $('.breadcrumb li a').click(function(){
        //$('#stickies').empty() ;
        //showSticky($(this).html()) ;
    }) ;
    
    //发帖
    $('#myWords #my-enter').click(function(err){

        var my_title = document.getElementById("my-title").value ;
        var my_content = document.getElementById("my-content").value ;
        var my_user = 1 ;
        var my_time =  getTime() ;
        alert(my_time);
        $.ajax({
            url: 'http://127.0.0.1:8080/post' ,
            type: 'post',
            data: {
                title: my_title,
                content: my_content,
                tag: 0,
                time: my_time,
                user: my_user
            },
            async: false,
            success: function (response) {
                if(response == 1) {
                    alert("发表成功！");
                    location.reload();
                } else {
                    alert('请先登录');
                }
                $('#myWords').modal('hide');
            },
            error: function () {
                alert("发表失败") ;
            }
            
        }) ;

    }) ;
}

//显示便利贴
function showSticky(type) {
    $.ajax({
        url: 'http://127.0.0.1:8080/getPosts',
        type: 'get',
        async: false,
        success: function (response) {
            if (response != 0) {
                posts = JSON.parse(JSON.stringify(response));
                showInfo(3) ;
            } else {
                $('#stickies').empty().append('<h2>亲，发个帖子可以脱单哦～</h2>');
            }
        },
        error: function () {
            alert("页面有错");
        }

    });
}
function showInfo(d){
    if( d==1)
        post_index-- ;
    else if(d==2)
        post_index++ ;
    else
        post_index=0;
    var pages = 0;
    if (posts.length / 7 == 0 && posts.length > 7)
        pages = posts.length / 7;
    else
        pages = Math.ceil(posts.length / 7);
    // 0-6,  7-13
    if( (post_index) != pages && post_index>=0) {
        $('#stickies').empty() ;
        $('#pages_index').html('第 ' +(post_index+1) +' 页') ;
        $('#pages').html('共 ' +pages +' 页') ;
        var last = (post_index + 1) * 7 - 1;
        for (var i = 7 * post_index; i < last && i < posts.length; i++) {
            var message = posts[i];
            addSticky(message.ID, message.POST_USER, message.NAME, message.TITLE, message.CONTENT, message.TIME) //,my_label) ;

        }
        $('#stickies').find('div.panel-footer')
            .append("<p><u onclick='myCommentShowDialog(this)'>参与讨论一波</u>&nbsp;&nbsp;&nbsp;" +
                        "<u onclick='otherCommentShow(this)'>查看评论</u></p>" +
                    "<div class='writeComment'>" +
                        "<textarea rows='5' cols='80' placeholder='不错不错，小伙子'></textarea>" +
                "<br><input type='button' value='提交' onclick='myComment(this)'></div>");
        $('#stickies .panel-footer .writeComment').hide();
        $('.pagination').css('visibility', 'visible');
    }else
        alert('只有这么多了哦！') ;

}

//增加便利贴
function addSticky(postID,userID,user,my_title,my_content,time ){  //,my_label){
    var sticky = document.getElementById("stickies") ;
    var span = document.createElement("div") ;     //span
    span.setAttribute("class","panel panel-default cook") ;
    var div_title = document.createElement('div') ;     //heading
    div_title.setAttribute("class","panel-heading") ;
    var p_title = document.createElement('h3') ;        //title
    p_title.setAttribute("class","panel-title") ;

    var p_id = document.createElement('label') ;
    p_id.setAttribute("class","postID") ;
    var user_id = document.createElement('label') ;
    user_id.setAttribute("class","userID") ;

    var p_label = document.createElement('span') ;        //label
    p_label.setAttribute("class","label label-info") ;
    var p_content = document.createElement('div') ;     //body
    p_content.setAttribute("class","panel-body") ;
    var p_footer = document.createElement("div") ;      //footer
    p_footer.setAttribute("class","panel-footer") ;

    p_title.innerHTML = user+ ':    ' +my_title + "<small><i>" +time +"</i></small>" ;       // postID -> user
    p_content.innerHTML = my_content ;
    p_id.innerHTML = postID ;
    user_id.innerHTML = userID ;

    div_title.appendChild(p_title) ;
    div_title.appendChild(p_id) ;
    div_title.appendChild(user_id) ;
    p_id.style.visibility = 'hidden' ;
    user_id.style.visibility = 'hidden' ;

    span.appendChild(div_title) ;
    span.appendChild(p_content) ; 
    span.appendChild(p_footer) ;
    //li.appendChild(span) ;
    sticky.appendChild(span) ;


}
//添加监听
function myComment(obj){

    var $parent = $(obj).parent().parent().parent().find('div.panel-heading');
    // alert( $parent.html());
    var postID = $parent.find('label.postID').html();
    var commentToID = $parent.find('label.userID').html();
    var commentData = $(obj).prev().prev().val();
    // alert("评论： " + commentToID +" : " +postID + " : " +commentData) ;
    $.ajax({
        url: 'http://127.0.0.1:8080/setComments',
        type: 'post',
        data:{
            postID: postID,
            commentTo: commentToID,
            commentContent: commentData,
            commentTime: getTime()
        },
        async: false,
        success: function (response) {
            if( response == 0)
                alert( "请先登录");
            else if(response != 1)
                alert("评论失败") ;
            else{
                location.reload();
                alert("评论成功") ;
            }
        },
        error: function () {
            alert("评论失败") ;
        }
    }) ;

    $(obj).parent().slideToggle() ;


}
function myCommentShowDialog(obj){
    $('.info').remove() ;
    var $next = $(obj).parent().next() ;
    $next.slideToggle() ;
}
function otherCommentShow(obj){
    //if( $(obj).next()!= null)
    $('.info').remove() ;
    var postID = $(obj).parent().parent().prev().prev().find('label.postID').html() ;
    // alert(post)
    $.ajax({
        url: 'http://127.0.0.1:8080/getComments?id=' +postID,
        type: 'get',
        success: function (response) {
            if(response == 0)
                alert("暂无评论～") ;
            else{
                var mes = JSON.parse(JSON.stringify(response));
                for(var i=0; i<mes.length; i++){
                    var message = mes[i] ;
                    $(obj).append("<div class='info'><p ><b>" +message.NAME +"</b>:  " +message.COMMIT_CONTENT + "</p></div><hr class='info'>") ;
                }
            }
        },
        error: function () {
            alert("网络错误，获取失败");
        }
    });
}
//获取时间
function getTime(){
    var time = new Date() ;
    return time.getFullYear() +"-" + (time.getMonth()+1 ) +"-" +time.getDay() +" " +time.getHours() +":" +time.getMinutes() + ":" + time.getSeconds() ;
}
