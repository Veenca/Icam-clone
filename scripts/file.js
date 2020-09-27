let strcss;
$('#main_nav>li').on('click',function(){
    strcss=$(this).children().attr('id');
    if(strcss!=undefined){
    strcss=strcss.slice(strcss.length-1,strcss.lenght);
    console.log(strcss);
    }
    for(let i=0;i<=3;i++){
        if(i!=strcss){
        if(!($('#menu'+i).hasClass("hide"))){
            $('#menu'+i).addClass("hide");
        }
    }
}
    $('#menu'+strcss).toggleClass("hide");

})
//Swiper
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
   direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      
    },
  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-pagination',
      
    },
  
    // And if we need scrollbar
    
  })