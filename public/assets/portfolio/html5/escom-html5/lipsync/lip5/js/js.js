
/*
function mensaje(msj){
	parent.postMessage(msj, "*");
}
*/

/*Animacion Inicial*/
TweenMax.staggerFrom($("div"), 1.2, {opacity:0, y:"+=800px", delay:0, ease:Back.easeOut}, 0.1);




t = TweenLite.to($("#bocadillo"), 1, { left:"1300px", rotation:90, ease:Back.easeOut }).reversed(true);

function toggleDirection() {
  t.reversed( !t.reversed() );
}


$("#triggerBocadillo").click(function(){
  toggleDirection();
});


	function cerrarPop(poph){

			TweenMax.to($(".hover"), 0.6, { autoAlpha: 0, 
				
				ease: Power2.easeOut, 
				onComplete: function(){
					$(poph).hide();

				}}, 0.5);
	};
	

	function pop(popx){

			TweenMax.from($(".hover"), 0.6, { display:"block", autoAlpha: 0, ease: Power2.easeOut}, 0.5);
			TweenMax.to($(".hover"), 0.6, { display:"block", autoAlpha: 1, y:"0", ease: Power2.easeOut}, 0.5);
			TweenMax.from($(popx), 0.6, { display:"flex", autoAlpha: 0, y:"-40", ease: Power2.easeOut}, 0.5);
			TweenMax.to($(popx), 0.6, { display:"flex",  autoAlpha: 1, ease: Power2.easeOut}, 0.5);
			//parent.postMessage("message", "*");

	};
	
$(".btn").hover(

	function(){
	TweenMax.to($(this), 0.6, { display:"block", autoAlpha: 0.5, scale:0.9, ease: Power2.easeOut}, 0.5);
	},
	function(){
	TweenMax.to($(this), 0.6, { display:"block", autoAlpha: 1,  scale:1, ease: Power2.easeOut}, 0.5);
	},

);

