/*Animacion Inicial*/
TweenMax.staggerFrom($("div"), 1.2, {opacity:0, y:"+=800px", delay:0, ease:Back.easeOut}, 0.1);


t = TweenLite.to($("#bocadillo"), 1, { left:"-400px", rotation:90, ease:Back.easeIn }).reversed(true);

function mensaje(msj){
	parent.postMessage(msj, "*");
}

function toggleDirection() {
  t.reversed( !t.reversed() );
}



$("#triggerBocadillo").click(function(){
  toggleDirection();
});


$("#bocadillo").click(function(){
  toggleDirection();
});
