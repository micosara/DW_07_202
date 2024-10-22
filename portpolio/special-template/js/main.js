const swiper = new Swiper('.wrap',{	
    direction: "horizontal",
    loop: true,						
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
    },	
    navigation : {				
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',			
    },
    spaceBetween: 0,
    slidesPerView: "auto",
    grabCursor: true,
    centeredSlides :true,
    speed:1000,
    effect:"coverflow",	
    coverflowEffect: {
        rotate: 50,
        stretch: -100,
        depth: 400,
        modifier: 1,
        slideShadows: false,
    },
    autoplay: {
        delay:1000,		
        disableOnInteraction : true
    }	
});


// .btnStart 요소를 찾아서 btnStart에 저장
const btnStart = document.querySelector(".btnStart");
// .btnStop 요소를 찾아서 btnStop에 저장
const btnStop = document.querySelector(".btnStop");

btnStart.onclick=function(event){
    //alert("click start");
    swiper.autoplay.start();
}
btnStop.onclick=function(event){
    //alert("click stop");
    swiper.autoplay.stop();
}