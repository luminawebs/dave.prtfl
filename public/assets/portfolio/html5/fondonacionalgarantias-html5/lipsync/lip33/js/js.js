
$( document ).ready(function() {
	TweenMax.set($("div"), { autoAlpha: 0});
	TweenMax.staggerTo($("div"), 0.6, { autoAlpha: 1, y:"0", ease: Power2.easeOut}, 0.2);
});


var preguntasSeleccionadas1 = 0;
var preguntasSeleccionadas2 = 0;
var preguntasSeleccionadas3 = 0;
var preguntasSeleccionadas4 = 0;


var validacionElementos = [false, false, false, false];


var lista1 = false; 
var lista2 = false; 
var lista3 = false; 
var lista4 = false; 

var alturaSelector = "180px";
var alturaUnselected = "57px";

function fLista1(){
		if (!lista1){
			$(".l1").css( "height", alturaSelector );
			lista1 = true;
		}
		else {
			$(".l1").css( "height", alturaUnselected );
			lista1 = false;
		}
}
function fLista2(){
		if (!lista2){
			$(".l2").css( "height", alturaSelector );
			lista2 = true;
		}
		else {
			$(".l2").css( "height", alturaUnselected );
			lista2 = false;
		}
}
function fLista3(){
		if (!lista3){
			$(".l3").css( "height", alturaSelector );
			lista3 = true;
		}
		else {
			$(".l3").css( "height", alturaUnselected );
			lista3 = false;
		}
}
function fLista4(){
		if (!lista4){
			$(".l4").css( "height", alturaSelector );
			lista4 = true;
		}
		else {
			$(".l4").css( "height", alturaUnselected );
			lista4 = false;
		}
}




	function seleccion1(btn, validacion, listas){

				if (lista1){
					$(".p1" ).css({"opacity": "0", "display": "none"}); 
					$(".p1" ).removeClass("seleccionado"); 
					$(btn).addClass("seleccionado"); 
					validacionElementos[validacion] = true;
					console.log(validacionElementos);
					lista2 = false;
					lista3 = false;
					lista4 = false;
					preguntasSeleccionadas1 = 1 ;
				}

				else{
					$(".p1" ).css({"opacity": "1", "display": "block"});
				}

		fLista1();
		fValidacion();


	}

	
	function seleccion2(btn, validacion, listas){


				if (lista2){
					$(".p2" ).css({"opacity": "0", "display": "none"}); 
					$(".p2" ).removeClass("seleccionado"); 
					$(btn).addClass("seleccionado"); 
					validacionElementos[validacion] = true;
					console.log(validacionElementos);
					preguntasSeleccionadas2 = 1 ;

				}

				else{
					$(".p2" ).css({"opacity": "1", "display": "block"}); 
				}

		fLista2();
		fValidacion();

	}

	
	function seleccion3(btn, validacion, listas){


				if (lista3){
					$(".p3" ).css({"opacity": "0", "display": "none"}); 
					$(".p3" ).removeClass("seleccionado"); 
					$(btn).addClass("seleccionado"); 
					validacionElementos[validacion] = true;
					console.log(validacionElementos);
					preguntasSeleccionadas3 = 1 ;
				}

				else{
					$(".p3" ).css({"opacity": "1", "display": "block"}); 
				}

		fLista3();
		fValidacion();

	}

	
	function seleccion4(btn, validacion, listas){


				if (lista4){
					$(".p4" ).css({"opacity": "0", "display": "none"}); 
					$(".p4" ).removeClass("seleccionado"); 
					$(btn).addClass("seleccionado"); 
					validacionElementos[validacion] = true;
					console.log(validacionElementos);
					preguntasSeleccionadas4 = 1 ;
				}

				else{
					$(".p4" ).css({"opacity": "1", "display": "block"}); 
				}

		fLista4();
		fValidacion();

	}



				//preguntasSeleccionadas++;

/*
			if ($(btn).hasClass( "seleccionado" )){
				$(btn).removeClass("seleccionado"); 
				preguntasSeleccionadas--;
			}

			else{
				$(btn).addClass("seleccionado"); 
				preguntasSeleccionadas++;
			}
*/		


function fValidacion(){

		if (preguntasSeleccionadas1 === 1 && preguntasSeleccionadas2 === 1 && preguntasSeleccionadas3 === 1 && preguntasSeleccionadas4 === 1 ){


			if (validacionElementos[0] === true && validacionElementos[1] === true && validacionElementos[2] === true && validacionElementos[3] === true){
				correcto();

				validacionElementos = [false, false, false, false];

				parent.postMessage("message", "*");
			}
			else{
				incorrecto();

				validacionElementos = [false, false, false, false];
			}


			preguntasSeleccionadas1 = 0;
			preguntasSeleccionadas2 = 0;
			preguntasSeleccionadas3 = 0;
			preguntasSeleccionadas4 = 0;
			//$(".p").removeClass("seleccionado");

		}

	}




/* ///////////////////////////////// POPUP */


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

	};
	

	function incorrecto(){

			TweenMax.from($(".hover"), 0.6, { display:"block", autoAlpha: 0, ease: Power2.easeOut}, 0.5);
			TweenMax.to($(".hover"), 0.6, { display:"block", autoAlpha: 1, y:"0", ease: Power2.easeOut}, 0.5);
			TweenMax.from($("#mal"), 0.6, { display:"flex", autoAlpha: 0, y:"-40", ease: Power2.easeOut}, 0.5);
			TweenMax.to($("#mal"), 0.6, { display:"flex",  autoAlpha: 1, ease: Power2.easeOut}, 0.5);

	};

