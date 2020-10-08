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

$('aside>ul>li').on('click',function(){
    $('.popup-content').html('');
    console.log($(this));
    let par=$(this).text().toLowerCase();
    serverResponse(par);
    console.log(par);
});