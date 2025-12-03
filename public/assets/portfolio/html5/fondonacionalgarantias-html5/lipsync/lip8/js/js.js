var valores = [false, false, false, false];


function iframes(lip, btn, valor){
		valores[valor] = true;
		console.log("añañai" + valores[valor]);

		$("body").prepend("<iframe id='iframesInternos' src='pops/"+ lip +"/lip01.html' width='1280px' height='720px'></iframe>");
		TweenMax.to($(".btnVolver"), 0.6, { autoAlpha: 1, x:"250", ease: Power2.easeOut}, 0.2);
		
		$("#framepersonaje").remove();
		$("body").append("<iframe src='personaje-sinaudio/lip01.html' id='framepersonaje' width='1280' height='720px'></iframe>");
		TweenMax.to($(btn), 0.6, { autoAlpha: 0.2, ease: Power2.easeOut}, 0.2);
}

function removeIframe(){
	TweenMax.to($(".btnVolver"), 0.6, { autoAlpha: 1, x:"-300", ease: Power2.easeOut}, 0.2);
		$("#iframesInternos").remove();
		
		if (valores[0] == true && valores[1] == true && valores[2] == true && valores[3] == true) {
			parent.postMessage("message", "*");
		}
}



/*Animacion inicial*/
TweenMax.staggerFrom($("div"), 0.6, { autoAlpha: 0, y:"-30", ease: Power2.easeOut}, 0.2);
