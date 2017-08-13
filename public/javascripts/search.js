var messageNum = 0;
var infoNum = 0;
var userName = '';


$(function(){


    $('#right .panel-body textarea').hide() ;

    getinfo(0,0);
    getinfo(1,0);

    addListener() ;	//添加监听函数
}) ;



function addListener(){
    //移动到我的信息
    $('#info').mouseenter(function(event) {
        var $target = $(this);

        var info;
            info = "<hr>" +
                "<p id='postInfo'><u onclick='getinfo(0,0)'>我的发帖</u>：  <span class='badge'>" +infoNum +"</span><hr>" +
                "<p id='message'><u onclick='getinfo(1,1)'>我的消息</u>： <span class='badge'>" +messageNum +"</span>";
            $target.popover({
                trigger: 'click', //触发方式
                html: true,
                placement: right,
                title: userName,
                content: info,
            });
            $(this).popover('show');

    }).click(function (event) {
        var $target = $(event.target);
        $target.popover('hide');
    }) ;

    $('#back').click(function(){
       location.href = '/';
    });
    //回复
    $('#right .panel-body a').click(function(){
 		$('#right .panel-body textarea').slideToggle() ;
    }) ;
	
}

function getinfo(obj,mes){
    $('#info').popover('hide');
    var url = 'http://127.0.0.1:8080/self_info?message=';
    // alert($(obj).html());

        if (obj == 1)
            url += 'message';
        else
            url += 'info';

    $.ajax({
        url: url,
        method: 'get',
        asyns: false,
        success: function(response){
            var right = $('#right ul');
            var name = response.name;
            if (name == 'info') {
                infoNum = response.result.length;
                if (response.result != 0)
                    addInfo(response.result, right);
                else {
                    right.empty();
                    right.append('<h3>我这里没有你的发帖信息哦～</h3>');
                }
            }else {
                messageNum = response.result.length;
                if (mes == 1) {
                    if (response.result != 0)
                        addMessage(response.result, right);
                    else {
                        right.empty();
                        right.append('<h3>您暂时没有新的消息</h3>');
                    }
                }
            }
        },
        error: function(response){

        }
    });
}

//addINFO
function addInfo(res,obj){
    obj.empty();
    for (var i = 0; i<res.length; i++){
        var response = res[i];
        obj.append("<li><div class='panel panel-default'>" +
                        "<p><b>我</b> 发表了 ---- (&nbsp;&nbsp;<small>" +response.TIME +"</small>)</p><hr>" +
                            "<p>" +response.CONTENT  +"</p><br>" +
                            "<a class='commit'>移动到这里获取评论</a> " +
                            "<a>获赞</a><small>10</small>" +
                            "<label style='visibility: hidden'>" +response.ID +"</label>" +
                            "</div><ul></ul></li>");
    }
    obj.find('.commit').mouseenter(function(event){
        $.ajax({
            url: 'http://127.0.0.1:8080/getComments?id=' +$(event.target).next().next().next().html(),
            type: 'get',
            success: function (response) {
                if(response == 0)
                    alert("暂无评论～") ;
                else{
                    var mes = JSON.parse(JSON.stringify(response));
                    $(event.target).parent().next().empty();
                    for(var i=0; i<mes.length; i++){
                        var message = mes[i] ;
                        $(event.target).parent().next().append("<div class='info'><p ><b>" +message.NAME +"</b>:  " +message.COMMIT_CONTENT + "</p></div><hr class='info'>") ;
                    }
                    $(event.target).popover({
                        content: "点击可以关闭评论"
                    }).popover('show');
                }
            },
            error: function () {
                alert("网络错误，获取失败");
            }
        });

    }).click(function(event){
        $(event.target).parent().next().empty();

    }).mouseleave(function(){
        $(this).popover('hide');
    });
}
function addMessage(res, obj){
    obj.empty();
    for (var i = 0; i<res.length; i++){
        var response = res[i];
        obj.append("<li><div class='panel panel-default'><div class='panel-body'>" +
            "<p><b>" +response.SEND_FROM +"</b>回复了你的帖子 ---- (&nbsp;&nbsp;<a><i>" +response.CONTENT +"</i></a>)</p><hr>" +
            "<p>" +response.COMMIT_CONTENT  +"</p>" +
            "<a onclick='$(this).next().next().slideToggle();'>回复</a><br><textarea class='col-sm-10' placeholder='回复内容: '></textarea>" +
            "</div></div></li>");
    }
    obj.find('textarea').hide();
}