$(document).ready(function(){
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
        $("#left").animate({"opacity":"1"}) ;
    }) ;

    $("#content").click(function(event){
        var tar = event ;
        var width = tar.offsetX ;
        var height = tar.offsetY ;
        console.log(width +"," +height) ;
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
        "music.jpg",
        "dance.jpg",
        "history.jpg",
        "girl.jpg",
        "boy.jpg",
        "map.jpg",
        "eat.jpg",
        "drink.jpg",
        "house.jpg",
        "marry.jpg",
        "work.jpg",
        "taboo.jpg",
        "communicate.jpg",
        "develop.jpg"
    ],
    data: {
        "music": [],
        "dance": []
    },
    coords: [
        "459,357,467,359,477,355,497,352,491,346,498,353,502,354,507,353,509,352,510,352,514,354,520,351,532,351,539,345,548,336,543,332,553,324,557,323,566,323,567,328,565,328,570,334,570,339,579,343,584,344,587,352,599,353,592,370,564,390,559,392,554,396,546,400,548,402,531,402,518,413,512,418,509,431,498,433,494,429,497,418,496,411,501,402,485,401,462,394,461,391,466,382,458,361"
    ]
};

//click
function changeInfo(event){
    var tar = event.target.parentNode ;
    var index_tar = $(tar).index() ;
    $("#left").animate({"background":"#eee"}) ;
    var pa = document.getElementById("one") ;
    var frame = document.createElement('div') ;
    frame.class = 'well well-lg infoOne' ;
    var img = $("#right img") ;
    addIframe( frame,pa, (index_tar+1),img,index_tar) ;

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
        var content = document.getElementById("content") ;
        if( !($("#content embed") === null ))
            $("#content embed").remove() ;
        if( !(index==info.image1.length-1) ){
            if(index == 5){
                console.log("map") ;
                var hotMap = document.createElement("map") ;
                var area = document.createElement("area") ;
                area.shape = "poly" ;
                area.coords = info.coords[0] ;
                area.href = "#" ;
                area.dataPlacement = "left" ;
                area.dataContent = "<h4>酉阳</h4>" ;
                area.dataToggle = "popover" ;
                area.dataContainer = "body" ;
                area.alt = "酉阳" ;
                hotMap.appendChild(area) ;
                newImg.appendChild(hotMap) ;
                console.log("map添加成功") ;
            }
            content.appendChild(newImg) ;
        } else{
            var video = document.createElement("embed") ;
            video.width = "100%";
            video.height = "100%" ;
            video.src="video/老家.mp4" ;
           // var source = document.createElement("source") ;
           // source.src = "video/花轿婚假.mp4" ;
           // source.type = "video/mp4" ;
           // video.appendChild(source) ;
            content.appendChild(video) ;
        }
        //frame.src = '/specify_info' ;
        console.log(img.src) ;
        //frame.setAttribute("frameborder","0") ;
        $(frame).css("height","500px") ;
        pa.appendChild(frame) ;

        //获取具体的信息
        $.ajax({
            url: 'http://127.0.0.1:8080/spe_info?index=' +index,
            type: 'GET',
            asyns: false,
            success: function (response) {
                var info = JSON.parse( JSON.stringify(response) ) ;
                //alert( info.info1) ;
                $(frame).html(info.info1) ;
            },
            error: function (response) {

            }
        })

}

/**创建图片以及热点对象
 * father: 父集元素
 * id：    此图片的id
 * coords：热点的区域坐标范围
 * pic：   图片
 * content：热点的内容 {title,content}
 * */
var createNewImage = function(father,itId,coords,pic,content){
    this.father = father ;
    this.id = itId ;
    this.coords = coords ;
    this.content = content ;
    this.init = function(){
        
    }
}
//hover
function hoverInfo(event){

}
