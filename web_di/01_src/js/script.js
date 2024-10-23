$('.navi>li').mouseover(function(){        
    $(this).find('.submenu').stop().slideDown(500);
}).mouseout(function(){
    $(this).find('.submenu').stop().slideUp(500);
});

$('.imgslide a:gt(0)').hide();
setInterval(function(){
    $('.imgslide a:first-child')
    .fadeOut(1000)
    .next('a')
    .fadeIn(1000)
    .end()
    .appendTo('.imgslide');
},3000);  
