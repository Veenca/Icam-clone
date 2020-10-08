let strcss;
$('#main_nav>li').on('click',function(){
    strcss=$(this).children().attr('id');
    if(strcss!=undefined){
    strcss=strcss.slice(strcss.length-1,strcss.lenght);
  
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
//Open Ajax Window
  
  const xhr =new XMLHttpRequest();
  


function serverResponse(par){
    $('.popup-window').css("display","block");
   
  
   
   xhr.onreadystatechange=function (){
  
    if(xhr.readyState==4 && xhr.status==200 ){
      
       $('.popup-content').html(xhr.responseText);
      
      
    
    }else if(xhr.status==404){
      console.log('File or resource was not found');
  }
  };
  xhr.open('get','other-pages/'+par+'.html',true);
  xhr.send();
  
}

let popupBtn = $('.icam-container-items>ul>li');

let exitPopup =$('#exit-icn');
popupBtn.on('click',function(){
    $('.popup-content').html('');
    $(this).parent().parent().parent().toggleClass("hide");
    let par=$(this).text().toLowerCase();
    serverResponse(par);
});

exitPopup.on('click',function(){
    $('.popup-window').css("display","none");
});


$('#products-container>div').hover(
    
    function(){
        $(this).children().children('img').toggleClass('hide');
    }

)
//Fade effect share icon on div#Projects
 console.log();
let Projects = $('#Projects>div');

Projects.children('.proj-footer').children('.share').children('ul').children('li:not(#ShareIcn)').hide();
Projects.hover(function()
    { let icone=$(this).children('.proj-footer').children('.share').children('ul').children('li:not(#ShareIcn)');
        if(icone.parent().attr('id')=="share_Office"){
            icone.css("background-color", "#00a7eb");
        }else if(icone.parent().attr('id')=="share_Health"){
            icone.css("background-color", "#00adb3");
        }
        icone.fadeIn(200);
       
     });
Projects.mouseleave(function(){
    $(this).children('.proj-footer').children('.share').children('ul').children('li:not(#ShareIcn)').fadeOut(200);
   
});
let siloShare = $('#share_Silo');
siloShare.children('li:not(#ShareIcn)').hide();
siloShare.parent().parent().hover(
    function(){
        siloShare.children('li:not(#ShareIcn)').css("background-color", "grey").fadeIn(500); 
    }
);
siloShare.parent().parent().mouseleave(function(){
    siloShare.children('li:not(#ShareIcn)').fadeOut(500); 
});
