var tl = new TimelineMax();
var tlElementos = new TimelineMax();
var tlContenidos = new TimelineMax();
var tlContenidos2 = new TimelineMax();
/* /////////////////////////////////////  Funciones*/

function arleftHide(){

}

function arrightHide(){

	
}

function numDiap(e){

	/* ////////////// Subtitulos */

	tlElementos.from("#textosSubtitulo", 0.1, { y: 0, opacity:1 });

	tlElementos.to("#textosSubtitulo", 0.5, { 
		y: 0,
		opacity:0, 
		ease:Back.easeOut, 
		onComplete:function(){
			$("#textosSubtitulo").empty();
			$("#textosSubtitulo").append(subtitulos[e]);
		}
	});

	tlElementos.to("#textosSubtitulo", 0.5, { y: 0, opacity:1, ease:Back.easeOut });

	/* ////////////// Finaliza Subtitulos */


	/* ////////////// Inicia textos inferiores */



/*

if(textosInferiores[e] === ""){

	tl.from(".textos", 0.1, { y: 0 });
	tl.to(".textos", 0.5, { 
		y: +822, 
		ease:Back.easeOut
	});
}

else{

	tl.from(".textos", 0.1, { y: 0 });

	tl.to(".textos", 0.5, { 
		y: +822, 
		ease:Back.easeOut, 
		onComplete:function(){
			$("#numDiap").empty();
			$("#numDiap").append(textosInferiores[e]);
		}
	});

	tl.to(".textos", 0.5, { y: 0, ease:Back.easeOut });

}

*/


	/* ////////////// finaliza textos inferiores */

}





function llamarElementos(e){

		if( diapositivaActual === 1 ){
			TweenMax.to("#arright", 0.4, {   opacity: '0', y:0, display: "block", ease:Back.easeOut});
			TweenMax.to("#arleft", 0.1, {   opacity: '0', display: "none", ease:Back.easeOut});
		}

		if( diapositivaActual >= 2 &&  diapositivaActual <= 13 ){
			TweenMax.to("#arright", 0.4, {   opacity: '1', y:0, display: "block", ease:Back.easeOut});
			TweenMax.to("#arleft", 0.4, {   opacity: '1', y:0, display: "block", ease:Back.easeOut});
		}

		/*

		//////////  Ocultar o Mostrar Flechas
		
		if( diapositivaActual >= 2 &&  diapositivaActual <= 4  ||  diapositivaActual >= 6 &&  diapositivaActual <= 15  || diapositivaActual == 20 ||  diapositivaActual >= 22 &&  diapositivaActual <= 32){
			TweenMax.to("#arright", 0.4, {   opacity: '1', y:0, display: "block", ease:Back.easeOut});
			TweenMax.to("#arleft", 0.4, {   opacity: '1', y:0, display: "block", ease:Back.easeOut});
		}

		if( diapositivaActual == 5  ||  diapositivaActual == 21  ){
			TweenMax.to("#arright", 0.1, {   opacity: '0', display: "none", y:200, ease:Back.easeOut});
		}



		*/

		if( diapositivaActual == 6 ||  diapositivaActual == 8 ){
			TweenMax.to("#arleft", 0.1, {   opacity: '0', display: "none", y:200, ease:Back.easeOut});
			TweenMax.to("#arright", 0.1, {   opacity: '0', display: "none", y:200, ease:Back.easeOut});
		}


		if( diapositivaActual === 13 ){
			TweenMax.to("#arleft", 0.4, {   opacity: '1', y:0, display: "block", ease:Back.easeOut});
			TweenMax.to("#arright", 0.1, {   opacity: '0', display: "none", ease:Back.easeOut});
		}



	$("#bgContenidos").empty();
	//$("#bgContenidos").append("<div class='bgImgContenidos'><img src='imgs/bgs/"+ [e] +".jpg' width='1280px'></div>");
			
	/* //////////////------ Iframes */
	$("#bgContenidos").append("<iframe src='lipsync/lip"+ e +"/lip01.html' width='1280px' height='800px' id='iframe'>");
	/* //////////////------ Termina Iframes */

	tlContenidos.from("#bgContenidos", 0.5, { 
		x: 1280, 
		ease:Back.easeOut, 
		onComplete:function(){
		}
	});

	tlContenidos.to("#bgContenidos", 0.1, { x: 0 });





	// tlElementos.to("#bgContenidos", 0.5, { x: 0, ease:Back.easeOut });




/// Original
	/*
		tlElementos.from("#bgContenidos", 0.1, { y: 0 });

		tlElementos.to("#bgContenidos", 0.5, { 
			x: +1280, 
			ease:Back.easeOut, 
			onComplete:function(){
				$("#bgContenidos").empty();
				$("#bgContenidos").append("<div class='bgImgContenidos'><img src='imgs/bgs/"+ [e] +".jpg' width='1280px'></div>");
			
				$("#bgContenidos").append("<iframe src='lipsync/lip"+ e +"/lip01.html' width='1280px' height='720px' id='iframe'>");
			
			}
		});

		tlElementos.to("#bgContenidos", 0.5, { x: 0, ease:Back.easeOut });
	*/

}







/* Llamar funciones*/
/*termina de llamar funciones*/


/* ///////////////////////////////////// Terminan Funciones*/


/* ///////////////////////////////////// Inician Clics*/


$("#arright").click(function(){

		diapositivaActual++;
		numDiap(diapositivaActual);
		llamarElementos(diapositivaActual);
});


$("#arleft").click(function(){

		diapositivaActual--;
		numDiap(diapositivaActual);
		llamarElementos(diapositivaActual);

});


$("#btn-home").click(function(){

		diapositivaActual = 1;
		iraPantalla(1);

});


/* ///////////////////////////////////// Terminan clics*/