
    var answer1;
    var answer2;
    var answer3;
    var answer4;

    var completo1;
    var completo2;
    var completo3;
    var completo4;




  TweenMax.staggerFrom($("div"), 0.6, { autoAlpha: 0, y:"-30", ease: Power2.easeOut}, 0.2);

  function cerrarPop(){

      TweenMax.to($(".hover"), 0.6, { autoAlpha: 0, 
        
        ease: Power2.easeOut, 
        onComplete: function(){
          $("#bien").hide();
          $("#mal").hide();

        }}, 0.5);

  };
  

  function correcto(){

      TweenMax.from($(".hover"), 0.6, { display:"block", autoAlpha: 0, ease: Power2.easeOut}, 0.5);
      TweenMax.to($(".hover"), 0.6, { display:"block", autoAlpha: 1, y:"0", ease: Power2.easeOut}, 0.5);
      TweenMax.from($("#bien"), 0.6, { display:"flex", autoAlpha: 0, y:"-40", ease: Power2.easeOut}, 0.5);
      TweenMax.to($("#bien"), 0.6, { display:"flex",  autoAlpha: 1, ease: Power2.easeOut}, 0.5);

      parent.postMessage("message", "*");


  };
  

  function incorrecto(){

      TweenMax.from($(".hover"), 0.6, { display:"block", autoAlpha: 0, ease: Power2.easeOut}, 0.5);
      TweenMax.to($(".hover"), 0.6, { display:"block", autoAlpha: 1, y:"0", ease: Power2.easeOut}, 0.5);
      TweenMax.from($("#mal"), 0.6, { display:"flex", autoAlpha: 0, y:"-40", ease: Power2.easeOut}, 0.5);
      TweenMax.to($("#mal"), 0.6, { display:"flex",  autoAlpha: 1, ease: Power2.easeOut}, 0.5);

  };

   






  $( function() {
    $( ".draggable" ).draggable({snap: ".droppable", snapTolerance: 5});
    $( ".droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" );
      }

    });

    /////////////////////////////////////////
   
    $("#droppable1").droppable({
      drop: function(event,ui) {
       answer1 = $(ui.draggable).attr("id");
       console.log("answer1 === " + answer1);

      if (answer1 == "draggable1" || answer1 == "draggable2" || answer1 == "draggable3" || answer1 == "draggable4"){
        completo1 = true;
      }

      else {
        completo1 = false;
      }
       validar();
      }

    });


    $("#droppable2").droppable({
      drop: function(event,ui) {
       answer2 = $(ui.draggable).attr("id");
       console.log("answer2 === " + answer2);


      if (answer2 == "draggable1" || answer2 == "draggable2" || answer2 == "draggable3" || answer2 == "draggable4"){
        completo2 = true;
      }

      else {
        completo2 = false;
      }
       validar();

      }

    });

    /////////////////////////////////////////


    $("#droppable3").droppable({
      drop: function(event,ui) {
       answer3 = $(ui.draggable).attr("id");
       console.log("answer3 === " + answer3);


      if (answer3 == "draggable1" || answer3 == "draggable2" || answer3 == "draggable3" || answer3 == "draggable4"){
        completo3 = true;
      }

      else {
        completo3 = false;
      }
       validar();





      }
    });

    /////////////////////////////////////////

    $("#droppable4").droppable({
      drop: function(event,ui) {
       answer4 = $(ui.draggable).attr("id");
       console.log("answer4 === " + answer4);

      if (answer4 == "draggable1" || answer4 == "draggable2" || answer4 == "draggable3" || answer4 == "draggable4"){
        completo4 = true;
      }

      else {
        completo4 = false;
      }
       validar();

      }

    });

  });


function validar(){

  if (completo1 && completo2 && completo3 && completo4){

  if (answer1 == "draggable4" && answer2 == "draggable2" && answer3 == "draggable3" && answer4 == "draggable1"){

   correcto();

  }


  else{
      incorrecto();
      completo1 = false;
      completo2 = false;
      completo3 = false;
      completo4 = false;

      answer1 = false;
      answer2 = false;
      answer3 = false;
      answer4 = false;

      TweenMax.to($("#draggable1"), 0.6, { top:0, left:10, ease: Power2.easeOut}, 0.5);
      TweenMax.to($("#draggable2"), 0.6, { top:0, left:10, ease: Power2.easeOut}, 0.5);
      TweenMax.to($("#draggable3"), 0.6, { top:0, left:10, ease: Power2.easeOut}, 0.5);
      TweenMax.to($("#draggable4"), 0.6, { top:0, left:10, ease: Power2.easeOut}, 0.5);

  }

  }

      /*/////////////////////////////// draggable 2*/


   /*//////////////////////////////////////////////////////////////////////////////////////////////////// Fila 2 */


}
