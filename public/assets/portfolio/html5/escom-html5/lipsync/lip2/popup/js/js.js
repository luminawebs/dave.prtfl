/*Animacion Inicial*/
TweenMax.staggerFrom($("div"), 1.2, {opacity:0, y:"+=800px", delay:0, ease:Back.easeOut}, 0.1);



function mensaje(msj){
	parent.postMessage(msj, "*");
}


function izquierda(){
TweenMax.to($(".mensajes"), 1, { y:"+=200", ease:Back.easeOut });
}


function derecha(){
TweenMax.to($(".mensajes"), 1, { y:"-=200", ease:Back.easeOut });
}