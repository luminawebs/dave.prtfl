
    var answers = [
      false, false, false, false, false, false
    ];


TweenMax.staggerFrom($("div"), 0.6, { autoAlpha: 0, y:"-30", ease: Power2.easeOut}, 0.2);


t = TweenLite.to($("#bocadillo"), 1, { left:"-400px", rotation:90, ease:Back.easeIn }).reversed(true);


function toggleDirection() {
  t.reversed( !t.reversed() );
}


  function cerrarPop(){

      TweenMax.to($(".hover"), 0.6, { autoAlpha: 0, 
        
        ease: Power2.easeOut, 
        onComplete: function(){
          $("#bien").hide();
          $("#mal").hide();

        }}, 0.5);

  };
  

  function correcto(elID, posi, mensajje, numero){

      TweenMax.from($(".hover"), 0.6, { display:"block", autoAlpha: 0, ease: Power2.easeOut}, 0.5);
      TweenMax.to($(".hover"), 0.6, { display:"block", autoAlpha: 1, y:"0", ease: Power2.easeOut}, 0.5);
      TweenMax.from($("#bien"), 0.6, { display:"flex", autoAlpha: 0, y:"-40", ease: Power2.easeOut}, 0.5);
      TweenMax.to($("#bien"), 0.6, { display:"flex",  autoAlpha: 1, ease: Power2.easeOut}, 0.5);

      $(".textoPop").empty();
      $(".textoPop").append("<h1>" + posi + " ¡Muy bien!</h1> " + mensajje);
      //parent.postMessage("message", "*");

      $(elID).css("opacity","0.5");

      answers[numero] = true;



      if(answers[0] == true && answers[1] == true && answers[2] == true && answers[3] == true && answers[4] == true && answers[5] == true){
          parent.postMessage("message", "*");
      }


  };
  
