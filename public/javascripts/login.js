$(document).ready(function(){
    //隐藏
    $('.alert').hide() ;
    console.log('ready') ;
    init(); 
}) ;
function init(){
    var $login = $('#login_rel') ;
    var $register = $('#register_rel') ;
    var $visiter = $('#visitor') ;
    $("#register_panel").hide() ;
    $login.click(function( event ){
        changePage(event) ;
    }) ;
    $register.click(function(event){
        changePage(event) ;
    }) ;
    $('.panel-footer a').click(function(event){
        changePage(event) ;
    });
    $visiter.click(function(event){
        changePage(event) ;
    }) ;



    //登录
    $('#login_panel form').find("input:submit").click(function(event){
        event.preventDefault() ;
        loginUser(event) ;
    }) ;
    $('#login_panel form').find("input").blur(function(event){
        var $target = $(event.target) ;
        switch( $target.attr('id') ){
            case 'your_name':
                if( $target.val() == '' )
                    $target.next().slideDown() ;
                else
                    $target.next().slideUp() ;
                break ;
            case 'your_password':
                if( $target.val() == '' )
                    $target.next().slideDown() ;
                else
                    $target.next().slideUp() ;
                break ;
        }

    }) ;
    //注册
    $('#register_panel form').find("input:submit").click(function(event){
        event.preventDefault() ;
        registerUser(this) ;
    }) ;
    $('#register_panel form').find("input").blur(function(event){
        var $target = $(event.target) ;
        switch( $target.attr('id') ){
            case 're_name':
                if( $target.val() == '' )
                    $target.next().slideDown() ;
                else
                    $target.next().slideUp() ;
                break ;
            case 're_password1':
                if( $target.val() == '' )
                    $target.next().slideDown() ;
                else
                    $target.next().slideUp() ;
                break ;
            case 're_password2':
                if( $target.val() == '' )
                    $target.next().slideDown() ;
                else {
                    $target.next().slideUp();
                    var userpass1 = $target.parent().parent().prev().find('input').val() ;
                    var userpass2 = $target.val() ;
                    if(userpass1 !== userpass2 )
                        alert("两次输入密码不一样") ;
                }
                break ;
        }

    })
}
function changePage(event){
    var $this = event.target.parentNode ;
    console.log( $this) ;
    switch($this.id){
        case 'login_rel':
            $($this).addClass("active") ;
            $("#register_rel").removeClass('active') ;
            $("#register_panel").hide() ;
            $("#login_panel").show() ;
            break;
        case 'register_rel':
            $($this).addClass("active") ;
            $("#login_rel").removeClass('active') ;
            $("#login_panel").hide() ;
            $("#register_panel").show() ;
            break;
        default:
            $("#register_rel").addClass("active") ;
            $("#login_rel").removeClass('active') ;
            $("#register_panel").show() ;
            $("#login_panel").hide() ;
            break;
    }
}

//　登录账号
function loginUser(obj){
    var username = $(obj.target).parent().prev().prev().find('input').val() ;
    var userpass = $(obj.target).parent().prev().find('input').val() ;
    console.log("登录用户: " +username +" --" +userpass ) ;
    if( username == '' || userpass == '' )
        var username = $(obj.target).parent().prev().find('input').next().children().slideDown() ;
    else{
        $.ajax({
            url: 'http://127.0.0.1:8080/login',
            type: 'POST',
            data: {
                name: username,
                pass: userpass
            },
            asyns: false,
            success: function(response){
                console.log("服务器回复： " +response) ;
                if( response == 0 ){
                    alert("用户名或者密码错误!");
                }else{
                    $('#index-login').modal('hide') ;
                    var $user = $('#header p a') ;
                    $user.html( response ) ;
                    $user.attr('href','/self_info' ) ;
                }
            },
            error: function(err){
                alert("用户名或者密码错误!") ;
            }
        }) ;
    }
}

//注册账号
function registerUser(obj){
    var username = $(obj).parent().prev().prev().prev().prev().prev().find('input').val() ;
    var userpass1 = $(obj).parent().prev().prev().prev().prev().find('input').val() ;
    var minority = $(obj).parent().prev().prev().find(':checked').val() ;
    if( minority == '是')
        minority = 1 ;
    else
        minority = 0 ;
    $.ajax({
        url: 'http://127.0.0.1:8080/register',
        type: 'POST',
        data: {
            name: username,
            pass: userpass1,
            minority: minority,
        },
        asyns: true,
        success: function(response){
            alert("注册成功") ;
            $($this).addClass("active") ;
            $("#login_rel").removeClass('active') ;
            $("#register_panel").hide() ;
            $("#login_panel").show() ;
        },
        error: function(err){

        }
    }) ;
}
