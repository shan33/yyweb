$(document).ready(init) ;
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
        var time = new Date() ;
        var my_time =  time.getFullYear() +"-" +time.getMonth() +"-" +time.getDay() +" " +time.getHours() +":" +time.getMinutes() +":" +time.getSeconds() ;
        $.ajax({
            url: 'http://127.0.0.1:8080/post' ,
            type: 'post',
            data: {
                title: my_title,
                content: my_content,
                time: my_time,
                user: my_user
            },
            async: false,
            success: function (response) {
                if(response == 1) {
                    alert("发表成功！");
                    $('#myWords').modal('hide');
                }
            },
            error: function () {
                alert("发表失败") ;
            }
            
        }) ;
        //post_label(my_title,my_content ) ;  //,my_label) ;      //提交帖子

    }) ;
}

//发帖到服务器z
function post_label(my_title,my_content,id,time ){  //,my_label){
    var key = "sticky_" +localStorage.length ;
    console.log(key,my_title+":" + my_content + ": user"  ) ;   //+my_label + ":" + 'user') ;
    localStorage.setItem( key,my_title+":" + my_content + ": user"  ) ;//key,my_title+":" + my_content + ": " +my_label + ":" + 'user') ;



}


//显示便利贴
function showSticky(type){
    var flag = true ;
    $.ajax({
        url: 'http://127.0.0.1:8080/getPosts',
        type: 'get',
        async: false,
        success: function ( response ) {
            if( response != 0) {
                var mes = JSON.parse(JSON.stringify(response));
                //alert( JSON.stringify(mes[0])) ;
                var pages ;
                if( mes.length%7 == 0)
                    pages = mes.length%7 ;
                else
                    pages = mes.length%7+1 ;
                for(var i=0;i<mes.length;i++){
                    var message = mes[i] ;
                    addSticky(message.POST_USER, message.TITLE, message.CONTENT,message.TIME) //,my_label) ;

                }
                addCommentLitener() ;
                $('.pagination').css('visibility','visible') ;
            }else{
                $('#stickies').empty().append('<h2>亲，发个帖子可以脱单哦～</h2>') ;
            }
        },
        error: function () {
            alert("页面有错") ;
        }
        
    }) ;
   /* for(var i=0; i<localStorage.length;i++){
        var key = localStorage.key(i) ;
        if(key.substring(0,6) == "sticky"){
            flag = false ;
            $('#stickies').empty() ;
            var items = localStorage.getItem(key).split(':') ;      //根据冒号分出 标题和内容
            var my_content = items[1] ;                             //获取内容
            var my_title = items[0] ;                               //获取标题
            // var my_label = items[2] ;                               //获取标签
            var user = items[3] ;                                   //获取用户
            addSticky(user,my_title,my_content ) //,my_label) ;
        }
    }
    if(flag)
        $('#stickies').empty().append('<h2>亲，发个帖子可以脱单哦～</h2>') ;
    else
        $('.pagination').css('visibility','visible') ;*/
    
}



//增加便利贴
function addSticky(user,my_title,my_content,time ){  //,my_label){
    var sticky = document.getElementById("stickies") ;
    var span = document.createElement("div") ;     //span
    span.setAttribute("class","panel panel-default cook") ;
    var div_title = document.createElement('div') ;     //heading
    div_title.setAttribute("class","panel-heading") ;
    var p_title = document.createElement('h3') ;        //title
    p_title.setAttribute("class","panel-title") ;
    var p_label = document.createElement('span') ;        //label
    p_label.setAttribute("class","label label-info") ;
    var p_content = document.createElement('div') ;     //body
    p_content.setAttribute("class","panel-body") ;
    var p_footer = document.createElement("div") ;      //footer
    p_footer.setAttribute("class","panel-footer") ;
    // var li = document.createElement("li") ;
    var comment = document.createElement("p") ;      //footer
    comment.setAttribute("class","comment") ;
    comment.innerHTML = '<u> 参与讨论一波？ </u>' ;

    p_title.innerHTML = user+ ':    ' +my_title + "<small><i>" +time +"</i></small>" ;
    // p_label.innerHTML = my_label ;
    p_content.innerHTML = my_content ;


    p_footer.appendChild(comment) ;
    div_title.appendChild(p_title) ;
    //div_title.appendChild(p_label) ;		//添加标签
    span.appendChild(div_title) ;
    span.appendChild(p_content) ; 
    span.appendChild(p_footer) ;
    //li.appendChild(span) ;
    sticky.appendChild(span) ;




}
//添加监听
function addCommentLitener(){
    $('#stickies').find('div.panel-footer').append("<p><u onclick='alert('提交评论')'>参与讨论一波</u></p>") ;
    //监听
    $('.comment').addEventListener("mouseover",function(){
        p_footer.appendChild( document.createElement('ul') ) ;
    }) ;
    //评论
    $('.comment').childNodes[0].addEventListener('click',function(){
        $('#myComment').modal('show') ;
        //$(this).append("<br>" + comment_data + '<hr>') ;
    }) ;

    $("#myComment button[type='submit']").click(function(){
        var comment_data ;
        comment_data = $('#myComment textarea').val() ;
        alert("您提交给1"  + "的内容为： " +comment_data) ;
        $('#myComment').modal('hide') ;
    }) ;
    $('.comment').addEventListener("mouseleave",function(){
         $(this).empty() ;
    }) ;
}

