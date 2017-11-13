var index = 100;
var pageCount = 7;
var pics = [];
var coords = [];
var content = null;


$(document).ready(function(){
    $('[data-toggle="popover"]').popover();

    $('.choose:first-child').mouseenter(function(){
        // console.log('mouseenter label') ;
        $(this).css('backgroundColor','#ccc') ;
    }).mouseleave(function () {
        // console.log('mouseleave label') ;
        $(this).css('backgroundColor','#8a6d3b') ;
    }) ;
    $('.choose:last-child').mouseenter(function(){
        // console.log('mouseenter label') ;
        $(this).css('backgroundColor','#ccc') ;
    }).mouseleave(function () {
        // console.log('mouseleave label') ;
        $(this).css('backgroundColor','#8a6d3b') ;
    }) ;
    $('.choose:first-child').click(function(){
        //console.log('click info') ;
        $(this).css('backgroundColor','#545454') ;
    }) ;

    //激活popover
    $(function(){
        $("[data-toggle='popover']").popover({
            html:true,
            title: '有关信息'
        }) ;
    }) ;
    
    //信息切换
    $('#left img').click(function(event){
        $("[data-toggle='popover']").popover('hide') ;

        changeInfo(event) ; 
        $("[data-toggle='popover']").popover('show') ;
    }).mouseenter(function(event){
        var tar = $(event.target);
        tar.css('width','180px'); 
        // tar.css('height','25%'); 
        var parent = $(event.target).parent();
        parent.css('width','180px'); 
        parent.css('height','25%'); 
    }).mouseleave((event)=>{
        var tar = $(event.target);
        tar.css('width','150px'); 
        var parent = $(event.target).parent();
        parent.css('width','150px'); 
        parent.css('height','20%'); 
    }) ;

    $("#content").click(function(event){
        var tar = event ;
        var width = tar.offsetX ;
        var height = tar.offsetY ;
        console.log(width +"," +height) ;
        if (pics.length == 0) {
            alert( '亲爱的，图片还在选取中，现在显示是测试图片哦~');
            pics.push('test1');
            pics.push('test2');
        }
        var picIn = '';
        for (var i = 0; i < pics.length; i++) {
            if (i == 0) {
                 picIn += '<div class="item active">\
            <img alt="图片暂时无法显示" src="pic/' +pics[i] +'.jpg" style="height:500px;width:100%"></div>';
            } else {
                 picIn += '<div class="item">\
            <img alt="图片暂时无法显示" src="pic/' +pics[i] +'.jpg" style="height:500px;width:100%"></div>';
            } 
        }
        $('.carousel-inner').html(picIn);

    }) ;

    //播放音乐
    var music = $("aside div a[index=2]") ;
    music.click(function(event){
    }) ;
});

var info = {
    image: [
        "musicMain.jpg",
        "danceMain.jpg",
        "historyMain.jpg",
        "girlMain.jpg",
        "boyMain.jpg",
        "mapMain.jpg",
        "eatMain.jpg",
        "drinkMain.jpg",
        "houseMain.jpg",
        "marryMain.jpg",
        "workMain.jpg",
        "tabooMain.jpg",
        "communicateMain.jpg",
        "developMain.jpg"
    ],
    image1: [
        "muyeqingge.jpg",
        "dance4.jpg",
        "historyPic.png",
        "woman.jpg",
        "man.jpg",
        "map.jpg",
        "larou.jpg",
        "tujiajiu.jpg",
        "houseMain.jpg",
        "marryMain.jpg",
        "workMain.jpg",
        "taboo.jpg",
        "communicate.jpg",
        "develop.jpg"
    ],
    data: {
        "music": [],
        "dance": []
    },
};


//click
function changeInfo(event){
    var tar = event.target.parentNode ;
    index = $(tar).index() ;
    if (index == 0) {
        $('audio').css('display','block');
        alert('点击右边 audio按钮可以播放歌曲哦~');

    } else if(index == 9){
        alert('点击右边 切换按钮可以播放视频哦~');
        $('aside a:last-child').css('display','block');

    } else {
        $('audio').css('display','none');
        $('aside a:last-child').css('display','none');
    }
    $("#left").animate({"background":"#eee"}) ;
    var pa = document.getElementById("one") ;
    var frame = document.createElement('div') ;
    frame.class = 'well well-lg infoOne' ;
    var img = $("#right > img") ;
    addIframe( frame,pa, (index+1),img,index) ;
}

function addIframe(frame,pa,myHtml,img,index){
        //删除原有数据
        if(pa.firstChild !== null){
            var oldFrame = pa.firstChild ;
            pa.removeChild(oldFrame) ;
        }
        img.remove() ;
        var newImg = document.createElement("img") ;
        newImg.src = "/pic/" +info.image1[index];
        newImg.style.height = "100%" ;
        newImg.style.width = "100%" ;
        content = document.getElementById("content");

        if( !($("#content embed") === null ))
            $("#content embed").remove() ;
        if( !(index==info.image1.length-1) ){
            if (content.childNodes.length > 0) 
                $(content).empty();
                content.appendChild(newImg) ;

        } else{
            var video = document.createElement("embed") ;
            video.width = "100%" ;
            video.height = "100%" ;
            video.src="video/花轿婚假.mp4" ;
            content.appendChild(video) ;
        }
        $(frame).css("height","400px") ;
        pa.appendChild(frame) ;

        //获取具体的信息
        $.ajax({
            url: 'http://127.0.0.1:8080/spe_info?index=' +index,
            type: 'GET',
            success: function (response) {
                var info = JSON.parse( JSON.stringify(response) ) ;
                coords = info.info.coords;
                
                if (coords != null) {
                    for (var i = 0; i < coords.length; i++) {
                        var c = coords[i];
                        var temp = document.createElement('div');
                        $(content).append('<div class="popo" title="' +'<h3>'+c[4] + '</h3><hr>'+ c[5] 
                                            + '" style="left:' +c[0] + 'px;top:' 
                                            + c[1]+'px;width:'+c[2] +'px;height:' +c[3]+'px;"></div>');
                    }
                        $('.popo').popover({
                            container: 'body',
                            trigger: 'hover',
                            placement: 'right',
                            html: true
                        });
                }
                $(frame).html(info.info.info1) ;
                pics = info.info.pic;
                var talks = JSON.parse(JSON.stringify(info.talks));
                var con = '';
                if (talks === '') 
                    con += '<pre>没有多余的消息哦 ~</pre>';
                else {
                    for (var i = 0; i < talks.length; i++) {
                        con += '<pre>' +talks[i].NAME +":  " +talks[i].CONTENT + '</pre>'
                    }
                }
                $('#three div').empty().append(con);

            },
            error: function (response) {

            }
        })

}

//hover
function sug(){
    $.ajax({
            url: 'http://127.0.0.1:8080/post' ,
            type: 'post',
            data: {
                title: 'none',
                content: $('#title').val(),
                tag: (index+1),
                time: getTime
            },
            async: false,
            success: function (response) {
                if(response == 1) {
                    alert("发表成功！");
                } else{
                    alert('请先登录');
                }
                $('#mySug').modal('hide');
            },
            error: function () {
                alert("发表失败") ;
            }
            
        }) ;
}

//获取时间
function getTime(){
    var time = new Date() ;
    return time.getFullYear() +"-" + (time.getMonth()+1 ) +"-" +time.getDay() +" " +time.getHours() +":" +time.getMinutes() + ":" + time.getSeconds() ;
}

var turn = true;
function playVideo(name) {
    if (turn) {
        $('#content').empty();
        var video = document.createElement("embed") ;
                video.width = "100%";
                video.height = "100%" ;
                video.src="video/花轿婚假.mp4" ;
                content.appendChild(video) ;
        turn = false;
    } else {
        $('#content').empty();
        var newImg = document.createElement("img") ;
        newImg.src = "/pic/" +info.image1[index];
        newImg.style.height = "100%" ;
        newImg.style.width = "100%" ;
        content.appendChild(newImg);
        turn = true;
    }
}

//自定义重点
function drawMyImportance(){
    if (index != 100)
        $('#tip').css('visibility','visible');
    alert('请将下面的小花花移动到你想要了解的内容上面就可以了哦');
    
}
function drag(event){
    event.dataTransfer.setData('Text', event.target.id);
}
function drop(event){
    event.preventDefault();
    console.log('begin');

    var data = event.dataTransfer.getData("Text");

    var rect = document.createElement('div');
    $(rect).css('position','absolute');
    $(rect).css('left',(event.offsetX-50) + 'px');
    $(rect).css('top',(event.offsetY-50) + 'px');
    $(rect).css('width', '150px');
    $(rect).css('height', '100px');
    $(rect).css('background', 'gray');
    $('#content').append(rect);

    setTimeout(function(){
        var tip = prompt('您已经选择了区域，请输入您想要了解的信息(可以附上你的联系方式哦~)','');
        // alert('您输入的信息： ' + tip);
        $.ajax({
            url: 'http://127.0.0.1:8080/other/tip',
            type: 'post',
            data: {
                tag: index+1,
                x: event.offsetX,
                y: event.offsetY,
                info: tip,
                time: getTime()
            },
            success: function (response) {
                if (response == 1) 
                    alert('提交成功，感谢您的支持，我们会尽快处理的呢~');
                else
                    alert('请先登录');
            }
        });
    },500);
    

}
function dropDown(event){
    event.preventDefault();
}