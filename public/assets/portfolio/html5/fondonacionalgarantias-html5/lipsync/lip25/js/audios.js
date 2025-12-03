
$(document).ready(function(){

/*Animacion inicial*/
TweenMax.staggerFrom($("div"), 0.6, { autoAlpha: 0, y:"-30", ease: Power2.easeOut}, 0.2);
TweenMax.staggerTo($("div"), 0.6, { autoAlpha: 1, ease: Power2.easeOut}, 0.2);

});


/*Variables*/
var a01 = document.getElementById("a01"); 
var a02 = document.getElementById("a02"); 
var a03 = document.getElementById("a03"); 
var a04 = document.getElementById("a04"); 
var a05 = document.getElementById("a05"); 
var a06 = document.getElementById("a06"); 


var btns = ["01", "02", "03", "04", "05", "06"];


	for(i=0; i<btns.length; i++) {
		var g = "#b" + btns[i];
		$("body").append("<div style='background-image: url(imgs/p"+ btns[i] +".png);'></div>");
	}


var sounds = document.getElementsByTagName('audio');


/*Funcion de audio*/


	for(i=0; i<sounds.length; i++) {

		    	var g = "#b" + btns;

		sounds[i].onended = function() {
			 		$("#b01").empty();
			 		$("#b02").empty();
			 		$("#b03").empty();
			 		$("#b04").empty();
			 		$("#b05").empty();
			 		$("#b06").empty();

			 		$("#b01").append("<img src ='imgs/h01.png'>");
			 		$("#b02").append("<img src ='imgs/h02.png'>");
			 		$("#b03").append("<img src ='imgs/h03.png'>");
			 		$("#b04").append("<img src ='imgs/h04.png'>");
			 		$("#b05").append("<img src ='imgs/h05.png'>");
			 		$("#b06").append("<img src ='imgs/h06.png'>");
		    		
			 		//$(g).append("<img src = 'imgs/h"+ btns[i] +".png'>");
		}; 
	}


function audio(a, b){

		if (a.duration > 0 && !a.paused) {

		 		for(i=0; i<btns.length; i++) {
			 		var g = "#b" + btns[i];
			 		$(g).empty();
			 		$(g).append("<img src = 'imgs/h"+ btns[i] +".png'>");
		 		}

		 		for(i=0; i<sounds.length; i++) 
			 		{
			 			sounds[i].pause();
			 			a.pause();
					}


		} else {

				for(i=0; i<btns.length; i++) {
			 		var g = "#b" + btns[i];
			 		$(g).empty();
			 		$(g).append("<img src = 'imgs/h"+ btns[i] +".png'>");
		 		}


				var f = "#b" + b;
		 		$(f).empty();
		 		$(f).append("<img src = 'imgs/p"+ b +".png'>");
		 		for(i=0; i<sounds.length; i++) {
		 			sounds[i].pause();
					a.play();
				}

		}

};
	