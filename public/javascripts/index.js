//主页面动态效果设置
$(function(){
}) ;
$(document).ready(function(){
	var clickOnce = true ;	//作为切换
    var myZIndex = 0 ;
    var $vacation = $("#vacation") ;
    var $communication = $("#communication") ;
    var $culture = $("#calture") ;
    
    $('#canvas').hide() ;
    $vacation.mouseenter(function(){
        $(this).tooltip('show') ;
        // console.log("enter vacation") ;
        //$(this).animate({'border':'solid 2px #eee'},500) ;
    }).mouseleave(function(){
        $(this).popover('hide') ;
        //$(this).animate({"opacity":"0"},500) ;
    }) ;

    $communication.mouseenter(function(){
        $(this).tooltip('show') ;
        // console.log("enter communication") ;
       // $(this).animate({"opacity":"1"},500) ;
    }).mouseleave(function(){
        $(this).popover('hide') ;
        //$(this).animate({"opacity":"0"},500) ;
    }) ;
   
    $culture.mouseenter(function(){
        $(this).tooltip('show') ;
        // console.log("enter culture") ;
       // $(this).animate({"opacity":"1"},500) ;
    }).mouseleave(function(){
        $(this).popover('hide') ;
       // $(this).animate({"opacity":"0"},500) ;
    }) ;

    $(".top").click(function(){
        if(clickOnce){
            $(".page").animate({"width":"100%","height":"100%",
                "margin":"0 100%"}) ;
            clickOnce = false ;
        }else{
            $(".page").animate({"width":"80%","height":"80%",
                "margin-top":"5%","margin-left":"120%"}) ;
            clickOnce = true ;
        }
    })

}) ;


//onclick
function showOther(event){
    var old = event.target ;
    console.log(old.id) ;
    switch(old.id){
        case 'vacation':
            location.href= '/vacation' ;
            break;
        case 'calture':
            location.href= '/culture' ;
            break;
        case 'communication':
            location.href= '/store' ;
            break;
    }
}
function backOther(event) {
}
function backMe(event) {
}

//onmouseenter
function displayMe(event) {
    console.log(event.target) ;
    var me = event.target ;
    me.style.visibility = "visible" ;
}
//onmouseleave
function unDisplayMe(event){
}

//跳转页面
function tickPage(event){
    var $class = event.target ;
    switch($class.className){
        case "to_right":
            $("html").animate({"scrollLeft":$("#two").css("marginLeft") },1000) ;
            break;
        case "to_left":
            $("html").animate({"scrollLeft":$("#header").css("marginLeft") },1000) ;
            break;
        default:
            break;
    }
}



var canvas,context;
var img,        //图片对象
    imgIsLoaded,//图片是否加载完成;
    imgX=0,
    imgY=0,
    imgScale=1;


function addIMG(){
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    loadImg();

} ;

function loadImg(){
    img = new Image();
    img.onload = function(){
    imgIsLoaded=true;
        drawImage();
    }
    img.src="pic/person1.jpg";

}
function drawImage(){
    context.clearRect(0,0,canvas.width,canvas.height);
    context.drawImage(img,0,0,img.width,img.height,imgX,imgY,img.width*imgScale,canvas.height*imgScale);

}
//点击中心点扩大，还原
var scale = false ;
/*canvas.onmousedown = function(event){
    var pos = windowToCanvas(canvas,event.clientX,event.clientY) ;
    if(!scale){
        imgScale = 2 ;
        imgX = imgX*1.5 - pos.x ;
        imgY = imgY*1.5 - pos.x ;
        drawImage() ;
        scale = true ;
    }else{
        imgScale = 1 ;
        imgX = 0 ;
        imgY = 0 ;
        drawImage() ;
    }
}*/

function windowToCanvas(canvas,x,y){
    var bbox = canvas.getBoundingClientRect();
    return {
        x:x - bbox.left - (bbox.width - canvas.width) / 2,
        y:y - bbox.top - (bbox.height - canvas.height) / 2
    };
}

