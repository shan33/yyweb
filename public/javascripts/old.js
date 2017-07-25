$(document).ready(init) ;
function init(){
    showSticky() ;      //显示便利
    $('.jumbotron a').click(function(err){
        addSticky("e","ew") ;
        addSticky("e","ew") ;
        //let my_title = document.getElementById("my-title").value ;
        //let my_content = document.getElementById("my-content").value ;

    }) ;
}
//显示二手闲置
function showSticky(){
    var flag = true ;
    for(let i=0; i<localStorage.length;i++){
        var key = localStorage.key(i) ;
        if(key.substring(0,6) == "sticky"){
            flag = false ;
            $('#stickies').empty() ;
            let items = localStorage.getItem(key).split(':') ;      //根据冒号分出 标题和内容
            let my_content = items[1] ;                             //获取内容
            let my_title = items[0] ;                               //获取标题
            let my_label = items[2] ;                               //获取标签
            let user = items[3] ;                                   //获取用户
            addSticky(user +':   ' + my_title+"---(" + my_label + ")",my_content) ;
        }
    }    
    if(flag)
        $('#second_hand').empty().append('<h2>暂时没有备用的闲置物品在线哦～</h2>') ;
    else
        $('.pagination').css('visibility','visible') ;
    
}
//增加便利贴
function addSticky(my_title,my_content){
    $('#second_hand').empty() ;
    $('.pagination').css('visibility','visible') ;
    let sticky = document.getElementById("second_hand") ;
    var span = document.createElement("div") ;     //span
    span.setAttribute("class","panel panel-default sale_thing") ;
    var div_title = document.createElement('div') ;     //heading
    div_title.setAttribute("class","panel-heading") ;
    var p_title = document.createElement('h3') ;        //title
    p_title.setAttribute("class","panel-title") ;
    var p_content = document.createElement('div') ;     //body
    p_content.setAttribute("class","panel-body") ;
    var p_footer = document.createElement("div") ;      //footer
    p_footer.setAttribute("class","panel-footer") ;
    // var li = document.createElement("li") ;
    var comment = document.createElement("p") ;      //footer
    comment.setAttribute("class","comment") ;
    comment.innerHTML = '<u> 我中意这个！ </u>' ;

    p_title.innerHTML = my_title ;
    p_content.innerHTML = my_content ;

    
    //监听
    p_footer.addEventListener("mouseover",function(){
        p_footer.appendChild( document.createElement('ul') ) ;
        let comment_link =  my_title.split(':')[0] ;
        //评论
        p_footer.childNodes[0].addEventListener('click',function(){
            //console.log("user: " + comment_link) ;
            $('#myComment').modal('show') ;
            let comment_data ;
            $("#myComment button[type='submit']").click(function(){
                comment_data = $('#myComment textarea').val() ;
                console.log("您提交给" + comment_link + "的内容为： " +comment_data) ;
                $('#myComment').modal('hide') ;
            }) ;
            $(this).append("<br>" + comment_data + '<hr>') ; 
        }) ;
    }) ;
    p_footer.addEventListener("mouseleave",function(){
       // $(this).empty() ;
    }) ;


    p_footer.appendChild(comment) ;
    div_title.appendChild(p_title) ;
    span.appendChild(div_title) ;
    span.appendChild(p_content) ; 
    span.appendChild(p_footer) ;
    //li.appendChild(span) ;
    sticky.appendChild(span) ;

    $('.comment').on('click',function(event){
        console.log("click comment") ;
        $(this).modal('myComment') ;
    }) ;

}

