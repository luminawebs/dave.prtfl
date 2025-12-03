$(".boton").mouseenter(function(){

	var idd = ($(this).attr('id'));
	var iddsinb = idd.substring(1);
	
	odd = ("#" + idd);

		$(odd).append("<div class='personaje-tablero posicion e"+ idd +"' style='background:url(imgs/personaje-tablero/"+ iddsinb +".svg) no-repeat center;  background-size:contain;'></div>");
	 	TweenMax.from(".posicion", 0.5, { opacity: 0, display:'none', y: +30, scaleX:1.5, scaleY:1.5, ease: Bounce.easeOut  });
	 	TweenMax.to(".posicion", 0.3, { opacity: 1, display:'block' });
	  //Elimina la b del id

});

$(".boton").mouseleave(function(){

	$(this).empty();

});

/*/////////////////////////////// Funciones de popups*/

function numRandomDado() {
  return Math.floor(Math.random() * 6) + 1;
}

console.log(numRandomDado());



function abrirPop2(){
	  TweenMax.from(".bgPop", 1, { opacity: 0, display:'none' });
	  TweenMax.to(".bgPop", 1, { opacity: 1, display:'block' });

	  $(".titulo").css("font-size","3.2em");
	  TweenMax.from(".contPop", 1, { opacity: 1, display:'block', y: 500 });
	  TweenMax.to(".contPop", 0.6, { 
	  	opacity: 1, 
	  	y: 0, 
	  	delay:0.0, 
	  	ease: Circ.easeOut,
	  	display:'block'
	  });

	}


function abrirPop(opcion){
	  TweenMax.from(".bgPop", 1, { opacity: 0, display:'none' });
	  TweenMax.to(".bgPop", 1, { opacity: 1, display:'block' });

	  $(".titulo").css("font-size","3.2em");
	  TweenMax.from(".contPop", 1, { opacity: 1, display:'block', y: 500 });
	  TweenMax.to(".contPop", 0.6, { 
	  	opacity: 1, 
	  	y: 0, 
	  	delay:0.0, 
	  	ease: Circ.easeOut,
	  	display:'block'
	  	/*onComplete:function(){
	  		$(".bgPop").remove();
	  		$(".contPop").remove();
	  	}*/
	  });


	  	$(".botonaceptar").empty();
	  	$(".botonaceptar").append("Elegir camino");
	  	$(".botonaceptar").show();
	  	$(".btnCerrar").remove();


	  if(opcion === "dado"){
	  	$(".botondenegar").hide();
	  	randomactual = numRandomDado();
	  	$(".contPop").append("<div class='dado'>El número del dado es: <strong>"+ randomactual +"</strong></div>");
	  	$(".botonaceptar").empty();
	  	$(".botonaceptar").append("Elegir camino");
	  }

	  else if(opcion === "unicaopcion"){
	  	$(".botondenegar").hide();
	  	$(".botonaceptar").empty();
	  	$(".botonaceptar").append("Elegir camino");
	  }

	  else if(opcion === "solodado"){
	  	$(".botondenegar").hide();
	  	$(".puntaje").hide();
	  	randomactual = numRandomDado();
	  	$(".contPop").append("<div class='dado'>El número del dado es: <strong>"+ randomactual +"</strong></div>");
	  	$(".botonaceptar").empty();
	  	$(".botonaceptar").append("Elegir camino");
	  }

	  else if(opcion === "final"){
	  	$(".botondenegar").hide();
	  	$(".titulo").css("font-size","2em");
	  	$(".titulo").css("line-height","33px");
	  	$(".botonaceptar").empty();
	  	$(".botonaceptar").append("Finalizar");
	  	$(".puntaje").hide();
	  }

	  else if(opcion === "creditos"){
	  	$(".botondenegar").hide();
	  	$(".puntaje").hide();
	  	TweenMax.to(".contPop", 1, { width: "800px" });
	  	$(".botonaceptar").hide();
	  	$(".titulo").css("font-size","1.5em");
	  	$(".titulo").css("line-height","34px");
	  	$(".contPop").append("<div class='btnCerrar' onClick='cerrarPop();'>X</div>");
	  }

}

function cerrarPop(){
	  TweenMax.to(".bgPop", 0.8, { opacity: 0, display:'none' });
	  TweenMax.to(".contPop", 0.4, { 
	  	opacity: 0, 
	  	y: -500, 
	  	delay:0.0, 
	  	ease: Circ.easeIn,
	  	display:'none',
	  	onComplete:function(){
	  		$(".dado").remove();
	  		$(".botondenegar").show();
	  		$(".puntaje").show();
	  	}
	  });

}


function cerrarPopIntro(){
	  TweenMax.to(".popIntro", 0.8, { opacity: 0, display:'none' });

}
function abrirPopIntro(){
	  TweenMax.to(".popIntro", 0.8, { opacity: 1, display:'block' });
}

function pop01(titulo, imagen, puntaje, dado){

	$(".titulo").empty();
	$(".imagen").empty();
	$(".puntaje").empty();

	$(".titulo").append(titulo);
	$(".imagen").append("<img src='imgs/personaje-tablero/" + imagen + ".svg'>");
	$(".puntaje").append(puntaje);
	abrirPop(dado);
}



function elegir(a){
			b[a] = true;
			a = ("#b" + a);
			$(a).fadeTo( "slow", 1 );
	  		//TweenMax.to(a, 0.8, {'-webkit-filter':'grayscale(60%)'});
}

function estadoboton(a){
	be[a] = true;
	b[a] = false;
	bs[a] = false;
}

/*/////////////////////////////// Finaliza Funciones de popups*/

/* Loop que indica: b = botón seleccionable, bs = botón seleccionado, be = botón elegido */

  var b = [];
  var bs = [];
  var be = [];

  for (var i = 1; i <= 103; ++i) {
      b[i] = false;
      bs[i] = false;
      be[i] = false;
  }


b[1] = true;
bs[1] = true;


/* Finalizan los loops */


		  	var cancion = document.getElementById("cancion"); 
		  	var pop = document.getElementById("pop"); 
		  	//pop.volume = 2;

$(document).ready(function() {


	  	TweenMax.staggerFrom("#iniciar", 1, {opacity:"0"}, 0.1);
	  	TweenMax.staggerFrom("#iniciar div", 1, {top:"1000px", scaleX:1.5, scaleY:1.5,  ease: Bounce.easeOut}, 0.5);


    	$("#b1").fadeTo( "slow", 1 );

		$("body").prepend("<div class='bgPop'><div class='contPop'> <div class='contPopSup'><div class='titulo'></div><div class='bg-personaje2'></div><div class='imagen'></div><div class='puntaje'></div>  </div>  <div class='contenedor-botones'>  <div class='botonaceptar'>Elegir camino</div> <div class='botondenegar' onClick='cerrarPop();'>No elegir camino</div></div></div></div></div>");


		$("#btn-init").click(function(){

		  	TweenMax.to("#iniciar", 1, {opacity:"0", display:"none"}, 1);
		  	TweenMax.to("#iniciar div", 1, {top:"0px", scaleX:0.5, scaleY:0.5}, 0.5);

		  	TweenMax.to("#todo", 1, {opacity:"1"}, 1);

		  	cancion.play(); 

		  	abrirPopIntro();

		});


		var musicaonoff = "on";

		$(".musica").click(function(){

			if(musicaonoff === "on"){
		  		cancion.pause(); 
		  		musicaonoff = "off";
		  		TweenMax.to(".musica", 0.5, {opacity:"0.5"}, 0);
			}
			else{
		  		cancion.play(); 
		  		musicaonoff = "on";
		  		TweenMax.to(".musica", 0.5, {opacity:"1"}, 0);
			}


		});



		$(".botonaceptar").click(function(){

			pop.play(); 

			var puntuacionaSumar = $(".puntaje").text();
			var puntuacionActual = $(".puntaje-top strong").text();

			var apuntuacionaSumar = parseInt(puntuacionaSumar);
			var apuntuacionActual = parseInt(puntuacionActual);

			$(".puntaje-top strong").html(apuntuacionaSumar + apuntuacionActual);

			if(bs[1] === true){
				estadoboton(1);
				elegir(5);
				elegir(6);
			}			
			
			else if(bs[5] === true){
				estadoboton(5);
				estadoboton(6);
				elegir(4);
				elegir(11);
			}		
			
			else if(bs[6] === true){
				estadoboton(6);
				elegir(12);
				elegir(7);

				b[5] = false;
				be[5] = false;
			}	
			
			else if(bs[4] === true){
				estadoboton(4);
				estadoboton(11);
				elegir(10);
			}
			
			else if(bs[10] === true){
				estadoboton(10);
				if(randomactual === 1 || randomactual === 3 ||  randomactual === 5){
				elegir(3);
				}
				else if(randomactual === 2 || randomactual === 4 ||  randomactual === 6){
				elegir(9);
				}

			}
			
			else if(bs[9] === true){
				estadoboton(9);
				elegir(16);
			}
			
			else if(bs[16] === true){
				estadoboton(16);
				elegir(23);
			}
			
			else if(bs[23] === true){
				estadoboton(23);
				elegir(30);
			}
			
			else if(bs[30] === true){
				estadoboton(30);
				elegir(37);
			}
			
			else if(bs[37] === true){
				estadoboton(37);
				elegir(44);
			}
			


			else if(bs[3] === true){
				estadoboton(3);
				elegir(2);
			}

			else if(bs[2] === true){
				estadoboton(2);
				elegir(8);
			}

			else if(bs[8] === true){
				estadoboton(8);
				elegir(15);
			}

			else if(bs[15] === true){
				estadoboton(15);
				elegir(22);
			}

			else if(bs[22] === true){
				estadoboton(22);
				elegir(29);
			}

			else if(bs[29] === true){
				estadoboton(29);
				elegir(36);
			}

			else if(bs[36] === true){
				estadoboton(36);
				elegir(44);
			}

			else if(bs[44] === true){
				estadoboton(44);
				elegir(43);
				elegir(55);
				elegir(56);
			}

			else if(bs[43] === true){
				estadoboton(43);
				estadoboton(55);
				estadoboton(56);
				if(randomactual === 1 || randomactual === 3 ||  randomactual === 5){
				elegir(49);
				}
				else if(randomactual === 2 || randomactual === 4 ||  randomactual === 6){
				elegir(54);
				}

			}

			else if(bs[49] === true){
				estadoboton(49);
				elegir(60);
			}

			else if(bs[54] === true){
				estadoboton(54);
				elegir(60);
			}

			else if(bs[60] === true){
				estadoboton(60);
				elegir(67);
				elegir(68);
			}


			else if(bs[67] === true){
				estadoboton(67);
				estadoboton(68);
				elegir(74);
			}


			else if(bs[74] === true){
				estadoboton(74);
				elegir(81);
			}

			else if(bs[68] === true){
				estadoboton(67);
				estadoboton(68);
				elegir(75);
			}

			else if(bs[75] === true){
				estadoboton(75);
				elegir(81);
			}


			else if(bs[81] === true){
				estadoboton(81);
				if(randomactual === 2 || randomactual === 3){
				elegir(86);
				}
				else if(randomactual === 1 || randomactual === 5){
				elegir(87);
				}
				else if(randomactual === 4 ||  randomactual === 6){
				elegir(88);
				}

			}

			else if(bs[86] === true){
				estadoboton(86);
				elegir(93);
			}

			else if(bs[93] === true){
				estadoboton(93);
				elegir(100);
			}

			else if(bs[87] === true){
				estadoboton(87);
				elegir(94);
			}

			else if(bs[94] === true){
				estadoboton(94);
				elegir(100);
			}

			else if(bs[88] === true){
				estadoboton(88);
				elegir(95);
			}

			else if(bs[95] === true){
				estadoboton(95);
				elegir(100);
			}


			/*Segunda columna*/


			else if(bs[55] === true){
				estadoboton(55);
				estadoboton(43);
				estadoboton(56);
				if(randomactual === 1 || randomactual === 3 ||  randomactual === 5){
				elegir(61);
				}
				else if(randomactual === 2 || randomactual === 4 ||  randomactual === 6){
				elegir(62);
				}

			}

			else if(bs[61] === true){
				estadoboton(61);
				elegir(69);
			}

			else if(bs[62] === true){
				estadoboton(62);
				elegir(69);
			}

			else if(bs[69] === true){
				estadoboton(69);
				elegir(76);
				elegir(70);
			}

			else if(bs[70] === true){
				estadoboton(70);
				estadoboton(76);
				elegir(83);
			}

			else if(bs[76] === true){
				estadoboton(70);
				estadoboton(76);
				elegir(82);
			}

			else if(bs[82] === true){
				estadoboton(82);
				elegir(96);
			}

			else if(bs[96] === true){
				estadoboton(96);
				elegir(101);
			}

			else if(bs[11] === true){
				estadoboton(11);
				estadoboton(4);
				elegir(18);
			}

			else if(bs[18] === true){
				estadoboton(18);
				elegir(17);
			}

			else if(bs[17] === true){
				estadoboton(17);
				elegir(24);
			}

			else if(bs[24] === true){
				estadoboton(24);
				elegir(31);
			}

			else if(bs[31] === true){
				estadoboton(31);
				elegir(30);
			}

			else if(bs[30] === true){
				estadoboton(30);
				if(randomactual === 1 || randomactual === 3 ||  randomactual === 5){
				elegir(45);
				}
				else if(randomactual === 2 || randomactual === 4 ||  randomactual === 6){
				elegir(46);
				}
			}

			else if(bs[45] === true){
				estadoboton(45);
				elegir(44);
			}

			else if(bs[46] === true){
				estadoboton(46);
				elegir(44);
			}

			else if(bs[56] === true){
				estadoboton(56);
				estadoboton(43);
				estadoboton(55);
				if(randomactual === 1 || randomactual === 3 ||  randomactual === 5){
				elegir(50);
				}
				else if(randomactual === 2 || randomactual === 4 ||  randomactual === 6){
				elegir(57);
				}
			}

			else if(bs[50] === true){
				estadoboton(50);
				elegir(63);
			}

			else if(bs[57] === true){
				estadoboton(57);
				elegir(63);
			}

			else if(bs[63] === true){
				estadoboton(63);
				elegir(77);
			}

			else if(bs[77] === true){
				estadoboton(77);
				elegir(83);
			}

			else if(bs[83] === true){
				estadoboton(83);
				elegir(89);
			}

			else if(bs[89] === true){
				estadoboton(89);
				elegir(84);
			}

			else if(bs[7] === true){
				estadoboton(7);
				estadoboton(12);
				elegir(13);
			}

			else if(bs[13] === true){
				estadoboton(13);
				if(randomactual === 1 || randomactual === 3 ||  randomactual === 5){
				elegir(14);
				}
				else if(randomactual === 2 || randomactual === 4 ||  randomactual === 6){
				elegir(20);
				}
			}

			else if(bs[14] === true){
				estadoboton(14);
				elegir(21);
			}

			else if(bs[21] === true){
				estadoboton(21);
				elegir(28);
			}

			else if(bs[28] === true){
				estadoboton(28);
				elegir(35);
			}

			else if(bs[35] === true){
				estadoboton(35);
				elegir(42);
				elegir(48);
			}

			else if(bs[42] === true){
				estadoboton(42);
				estadoboton(48);
				elegir(47);
			}

			else if(bs[48] === true){
				estadoboton(42);
				estadoboton(48);
				elegir(59);
			}

			else if(bs[59] === true){
				estadoboton(59);
				elegir(85);
			}

			else if(bs[85] === true){
				estadoboton(85);
				alert("Inicia desde el principio");
				location.reload(); 
			}

			else if(bs[20] === true){
				estadoboton(20);
				elegir(27);
			}

			else if(bs[27] === true){
				estadoboton(27);
				elegir(28);
			}

			else if(bs[12] === true){
				estadoboton(7);
				estadoboton(12);
				elegir(19);
			}

			else if(bs[19] === true){
				estadoboton(19);
				if(randomactual === 3 || randomactual === 6){
				elegir(25);
				}
				else if(randomactual === 2 || randomactual === 5){
				elegir(26);
				}
				else if(randomactual === 1 ||  randomactual === 4){
				elegir(34);
				}

			}

			else if(bs[25] === true){
				estadoboton(25);
				elegir(32);
			}

			else if(bs[32] === true){
				estadoboton(32);
				elegir(39);
			}

			else if(bs[39] === true){
				estadoboton(39);
				elegir(47);
			}

			else if(bs[26] === true){
				estadoboton(26);
				elegir(33);
			}

			else if(bs[33] === true){
				estadoboton(33);
				elegir(40);
			}

			else if(bs[40] === true){
				estadoboton(40);
				elegir(47);
			}

			else if(bs[34] === true){
				estadoboton(34);
				elegir(41);
			}

			else if(bs[41] === true){
				estadoboton(41);
				elegir(47);
			}

			else if(bs[47] === true){
				estadoboton(47);

				if(randomactual === 2 || randomactual === 5){
				elegir(51);
				}
				else if(randomactual === 3 || randomactual === 6){
				elegir(52);
				}
				else if(randomactual === 4 ||  randomactual === 1){
				elegir(53);
				}

			}

			else if(bs[51] === true){
				estadoboton(51);
				elegir(58);
			}

			else if(bs[52] === true){
				estadoboton(52);
				elegir(58);
			}

			else if(bs[53] === true){
				estadoboton(53);
				elegir(58);
			}

			else if(bs[58] === true){
				estadoboton(58);
				elegir(64);
				elegir(65);
				elegir(66);
			}

			else if(bs[64] === true){
				estadoboton(64);
				estadoboton(65);
				estadoboton(66);
				elegir(71);
			}

			else if(bs[71] === true){
				estadoboton(71);
				elegir(78);
			}

			else if(bs[78] === true){
				estadoboton(78);
				elegir(84);
			}



			else if(bs[65] === true){
				estadoboton(64);
				estadoboton(65);
				estadoboton(66);
				elegir(72);
			}

			else if(bs[72] === true){
				estadoboton(72);
				elegir(79);
			}

			else if(bs[79] === true){
				estadoboton(79);
				elegir(84);
			}


			else if(bs[66] === true){
				estadoboton(64);
				estadoboton(65);
				estadoboton(66);
				elegir(73);
			}

			else if(bs[73] === true){
				estadoboton(73);
				elegir(80);
			}

			else if(bs[80] === true){
				estadoboton(80);
				elegir(84);
			}

			else if(bs[84] === true){
				estadoboton(84);

				if(randomactual === 2 || randomactual === 5){
				elegir(90);
				}
				else if(randomactual === 3 || randomactual === 6){
				elegir(97);
				}
				else if(randomactual === 4 ||  randomactual === 1){
				elegir(91);
				}

			}

			else if(bs[90] === true){
				estadoboton(90);
				elegir(101);
			}

			else if(bs[97] === true){
				estadoboton(97);
				elegir(98);
			}

			else if(bs[98] === true){
				estadoboton(98);
				elegir(102);
			}

			else if(bs[91] === true){
				estadoboton(91);
				elegir(92);
			}

			else if(bs[92] === true){
				estadoboton(92);
				elegir(99);
			}

			else if(bs[99] === true){
				estadoboton(99);
				elegir(102);
			}

			else if(bs[101] === true){
				estadoboton(102);
				estadoboton(103);
			}

			else if(bs[102] === true){
				estadoboton(101);
				estadoboton(103);
			}

			else if(bs[103] === true){
				estadoboton(101);
				estadoboton(102);
			}


			cerrarPop();
		});

});


/*Opciones finales::::: dado, unicaopcion, solodado */


