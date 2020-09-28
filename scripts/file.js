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
  //AJAX
  
  const xhr =new XMLHttpRequest();
  
//Open Ajax Window
let popupBtn = $('.icam-container-items>ul>li');
let exitPopup =$('#exit-icn');
popupBtn.on('click',function(){
   $('.popup-window').css("display","block");
    let par=$(this).text().toLowerCase();
    $(this).parent().parent().parent().toggleClass("hide")
   xhr.onreadystatechange=function (){
     
    if(xhr.readyState==4 ){
      
        if(xhr.status==200){ $('.popup-content').html(xhr.responseText);
      
      }else if(xhr.status==404){
          console.log('File or resource was not found');
      }
    
    }
  };
  xhr.open('get','other-pages/'+par+'.html',true);
  xhr.send();
});
exitPopup.on('click',function(){
    $('.popup-window').css("display","none");
});