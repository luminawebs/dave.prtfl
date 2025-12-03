(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1280,
	height: 800,
	fps: 35,
	color: "#FFFFFF",
	manifest: [
		{src:"images/BIENVENIDOALCURSO.png", id:"BIENVENIDOALCURSO"},
		{src:"images/BUENASPRÁCTICASENCIBERSEGURIDAD.png", id:"BUENASPRÁCTICASENCIBERSEGURIDAD"},
		{src:"images/Lineas.png", id:"Lineas"},
		{src:"images/shutterstock_1319173457.png", id:"shutterstock_1319173457"},
		{src:"images/TxtInf.png", id:"TxtInf"}
	]
};



// symbols:



(lib.BIENVENIDOALCURSO = function() {
	this.initialize(img.BIENVENIDOALCURSO);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,438,30);


(lib.BUENASPRÁCTICASENCIBERSEGURIDAD = function() {
	this.initialize(img.BUENASPRÁCTICASENCIBERSEGURIDAD);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,619,104);


(lib.Lineas = function() {
	this.initialize(img.Lineas);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.shutterstock_1319173457 = function() {
	this.initialize(img.shutterstock_1319173457);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650,768);


(lib.TxtInf = function() {
	this.initialize(img.TxtInf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,617,20);


(lib.Símbolo8 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.BIENVENIDOALCURSO();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,438,30);


(lib.Símbolo7 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.BUENASPRÁCTICASENCIBERSEGURIDAD();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,619,104);


(lib.Símbolo6 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.TxtInf();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,617,20);


(lib.Símbolo4 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.shutterstock_1319173457();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,650,768);


(lib.it06 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Lineas();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


// stage content:
(lib.lip01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var items = [this.it01, this.it02, this.it03, this.it06]
		var items2 = [this.it05]
		
		var tl = new TimelineMax();
		
		tl.staggerFrom(items, 1.2, {alpha:0, y:"+=300px", ease:Back.easeOut}, 0.1);
		tl.staggerFrom(items2, 1.8, {alpha:0, x:"+=800px", ease:Back.easeOut}, 0.1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa 32
	this.it01 = new lib.Símbolo8();
	this.it01.setTransform(305.6,326.1,1,1,0,0,0,219,15);

	this.it02 = new lib.Símbolo7();
	this.it02.setTransform(395.1,406.1,1,1,0,0,0,309.5,52);

	this.it03 = new lib.Símbolo6();
	this.it03.setTransform(396.1,495.2,1,1,0,0,0,308.5,10);

	this.it05 = new lib.Símbolo4();
	this.it05.setTransform(951.2,416,1,1,0,0,0,325,384);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.it05},{t:this.it03},{t:this.it02},{t:this.it01}]}).wait(1));

	// Capa 34
	this.it06 = new lib.it06();
	this.it06.setTransform(640,400,1,1,0,0,0,640,400);

	this.timeline.addTween(cjs.Tween.get(this.it06).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,400,1280,800);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;