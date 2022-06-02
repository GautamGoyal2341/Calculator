// (function(

// ))();

(function(){


    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear  = document.getElementById('.btn-clear');
    let ac =     document.getElementById('.btn-equal');
 
      buttons.forEach(function(button){

        button.addEventListener('click',function(e){

          let value = e.target.dataset.num;
          screen.value += value;

           })
           


      })






})();


