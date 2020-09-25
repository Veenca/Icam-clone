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