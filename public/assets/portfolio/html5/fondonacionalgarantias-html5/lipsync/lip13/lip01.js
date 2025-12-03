(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 35,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/17.mp3", id:"17"},
		{src:"images/Path.png", id:"Path"},
		{src:"images/Path_1.png", id:"Path_1"},
		{src:"images/flash0aiActivos.png", id:"flash0aiActivos"},
		{src:"images/Mapadebits1.png", id:"Mapadebits1"},
		{src:"images/Mapadebits2.png", id:"Mapadebits2"},
		{src:"images/Mapadebits3.png", id:"Mapadebits3"},
		{src:"images/Mapadebits4.png", id:"Mapadebits4"},
		{src:"images/Mapadebits5.png", id:"Mapadebits5"}
	]
};



// symbols:



(lib.Path = function() {
	this.initialize(img.Path);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,303,303);


(lib.Path_1 = function() {
	this.initialize(img.Path_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,356,421);


(lib.flash0aiActivos = function() {
	this.initialize(img.flash0aiActivos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,15);


(lib.Mapadebits1 = function() {
	this.initialize(img.Mapadebits1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,54);


(lib.Mapadebits2 = function() {
	this.initialize(img.Mapadebits2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,54);


(lib.Mapadebits3 = function() {
	this.initialize(img.Mapadebits3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,54);


(lib.Mapadebits4 = function() {
	this.initialize(img.Mapadebits4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,54);


(lib.Mapadebits5 = function() {
	this.initialize(img.Mapadebits5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,54);


(lib.Símbolo11 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Mapadebits5();
	this.instance.setTransform(81,17);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiICvQgCgDAEgDQAOgNAFgaQAFgcgNgMQg4g0AAg7QAAhBA1guQA1gtBJAAQBKAAA1AtQA1AuAABBQAABDg6AuQg/AyhcgMQgIgCgEAFQgNARgbAOQgZANgTABIgBAAQgFAAgBgDgAA/grQgIAIAAALQAAAMAIAIQAJAGALAAQAMAAAIgGQAIgIAAgMQAAgLgIgIQgIgIgMAAQgLAAgJAIgAgSgrQgIAIAAALQAAAMAIAIQAIAGAKAAQALAAAIgGQAIgIAAgMQAAgLgIgIQgIgIgLAAQgKAAgIAIgAhmgrQgIAIAAALQAAAMAIAIQAIAGAMAAQALAAAJgGQAIgIAAgMQAAgLgIgIQgJgIgLAAQgMAAgIAIg");
	this.shape.setTransform(33.7,34);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABHB1QgOgBgSgJQgUgKgKgNQgCgCgHAAQhFAAgngYQBAgKAtgoQA8gyADhKQAVAQAMAWQAMAXAAAZQAAAsgrAmQgJAJAEAVQADATALAKQAAAAABABQAAABABAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgCAAg");
	this.shape_1.setTransform(48.4,44);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F76841").s().p("AkDEFQhthsAAiZQAAiXBthsQBshtCXAAQCYAABtBtQBsBsAACXQAACZhsBsQhtBsiYAAQiXAAhshsg");
	this.shape_2.setTransform(36.5,36.9);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.4,0,252.5,73.9);


(lib.Símbolo9 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Mapadebits4();
	this.instance.setTransform(80,12);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXAtIgZgbQgEgEgFAEIgMALQgDAFgCgGIgShFQgBgGAGACIBFARQAFABgEAFIgMAMQgEAEAEAEIAcAaQAEAEgEAEIgNANQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape.setTransform(37.1,31);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiWCpQgNAAgNgHQgOgHgFgKIgIgPQgEgGACgHIAmhMIAAi0QAAgMAKgIQAKgJAOAAIELAAQAOAAAKAJQAKAIAAAMIAAC0IAmBMQACAGgEAHIgIAPQgFAKgOAHQgNAHgNAAgAhFB4QgEAEAAAGQAAAFAEAEQAEADAFAAIB5AAQAGAAADgDQAEgEAAgFQAAgGgEgEQgDgDgGAAIh5AAQgFAAgEADgAiBh8IAACUQAAAHAHAAID2AAQAGAAAAgHIAAiUQAAgHgGAAIj2AAQgHAAAAAHg");
	this.shape_1.setTransform(37.1,36.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0068AF").s().p("AkDEFQhthtAAiYQAAiYBthsQBshsCXAAQCZAABsBsQBsBsAACYQAACYhsBtQhsBsiZAAQiXAAhshsg");
	this.shape_2.setTransform(36.5,37);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.4,0.1,251.5,73.9);


(lib.Símbolo8 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Mapadebits1();

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFArIhLgsQgGgEAHAAIAsAAQAIAAAAgIIAAgXQAAgIAIAAIAnAAQAIAAAAAIIAAAXQAAAIAIAAIAsAAQABAAABAAQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAgBAAIhLAsQgDACgDAAQgCAAgDgCg");
	this.shape.setTransform(213.5,42.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AinDGQgMAAgJgJQgJgJAAgMIAAivQAAgMAHgPQAHgOAJgJICZiEQAJgHAMAAQANAAAJAHICZCEQAKAJAGAOQAHAOAAANIAACvQAAAMgJAJQgJAJgMAAgAiVgsQgCADAAADIAAApQAAAFAKAHIBzBHQAMAIAOgBQAQABALgIIBzhHQAKgHAAgFIAAgpQAAgIgIgBIkfAAQgDABgDACg");
	this.shape_1.setTransform(213.5,40.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F76841").s().p("AkDEFQhthtAAiYQAAiXBthtQBshsCXAAQCZAABsBsQBsBtAACXQAACYhsBtQhsBsiZAAQiXAAhshsg");
	this.shape_2.setTransform(213.5,45);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,250.4,81.9);


(lib.Símbolo7 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Mapadebits2();
	this.instance.setTransform(0,12);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABGBgIgCgKQAAg/gugrQgsgthAAAQgJAAgGgGQgFgGgBgIQABgIAFgGQAGgGAJAAQAnAAAkAPQAiAPAbAaQAbAbAPAhQAPAkAAAnQAAAFgCAFQgGAKgMAAQgMAAgFgKg");
	this.shape.setTransform(225.4,26.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAoBEQgFgGgBgIQAAglgZgYQgZgagmAAQgIAAgGgGQgFgFgBgJQABgIAFgGQAGgGAIAAQA1AAAlAmQAnAjAAA2QAAAIgHAGQgFAGgIAAQgIAAgHgGg");
	this.shape_1.setTransform(221.1,30.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABLC1QhVgbhIhIQgsgsgZgsQgRgfgMglQgKghALgdQAIgYAPgHIAcgKIAbgIQAWgDAVA3QAVA3gWALQgPAHgCACQgKAJAKAQQAHANAuAsQAsAtANAIQAPAJAJgJQACgCAIgPQAKgWA3AVQA3AVgDAWIgHAbQgHAWgDAGQgHAPgZAIQgOAGgQAAQgPAAgQgFg");
	this.shape_2.setTransform(215,36.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0068AF").s().p("AkEEFQhshtAAiYQAAiYBshsQBshsCYAAQCYAABtBsQBsBsAACYQAACYhsBtQhtBsiYAAQiYAAhshsg");
	this.shape_3.setTransform(217.5,37);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,254.4,73.9);


(lib.Símbolo6 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Mapadebits3();
	this.instance.setTransform(0,15);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAkQgXgGAHgiQAGgfAYgBQANAAALAFIgFA2QgLAOgNAAIgJgBg");
	this.shape.setTransform(217.8,36.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhoDFQgmAAgcgbQgbgaAAgnIAAjRQAAgnAbgbQAbgbAnAAIDSAAQAmAAAbAbQAbAbAAAnIAADRQAAAmgbAbQgbAbgmAAgAhphbQghAoAAA2QAAA7AmAnQAoAoA/gBQAvABApgUQAagMAIgLIACgDIgHgSQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgMAMgUAIQgkAQgtAAQgyAAgdgdQgegdAAgzQAAgwAfgfQAfggAvAAQA1AAAeAeQAeAegJAvQgGAegUAKQgSAKgHgNQgDgHAGglIAJgyQAAgFgDgBQgLgEgUAAQgDAAgBADIgCAKQgcgNgcAOQggARgEAsQgEAvAiAPQAhAPAggbQAFAMARAFQARAEASgHQAugSAFhAQADgvgggkQglgshGAAQhFAAgnAvg");
	this.shape_1.setTransform(218.1,36);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F76841").s().p("AkEEFQhshsAAiZQAAiXBshsQBshtCYAAQCYAABtBtQBsBsAACXQAACZhsBsQhtBsiYAAQiYAAhshsg");
	this.shape_2.setTransform(218.5,36.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0068AF").s().p("AApAYQgdgBgJgZIgEAAQAAACgFAGQgGAHgIAFQgLAGgNAAQgXgCgKgXQgFgIgGgBIABgHQAVgGATAAQAZgBAOAIQAEACAEAAQAHAAADgBQAUgJAVABQAPABAXAGIAAAHQgGACgDAHQgJAYgaAAIgEAAgAhIgLQgBAlAkgEQAOgCAJgJQAKgKgEgKQgBgIgfgDIgLAAQgVAAAAAJgAArgUQggADAAAHQgEALAKAKQAIAJAOABQAlAEgBgjQAAgKgWAAIgKAAg");
	this.shape_3.setTransform(219.2,25.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,255.4,73.9);


(lib.Símbolo4 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Path();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,303,303);


(lib.ojos_cerrados = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#42210B").s().p("AhPAiQA6ABAFgDQAggTAfgiQAVgYANAGQAMAGANgHQAHgEAUgSQgMAVgTARQgOANgFACQgEABgbAaQgYAZgqAMQgVAGgngHQghgHgZAQQAIgeAtABg");
	this.shape.setTransform(52.6,12.6,1,1,14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#A67C52","#EDA161"],[0.333,1],11,-1.1,-10.2,1.4).s().p("Ag/AJQAXgGAQACQA1AHApgTQAUgKAKgLQgPAYgdAMQgpATg4gMQgIgBgUAEQgWAFgIAGQAKgMAagIg");
	this.shape_1.setTransform(48.2,15,1,1,14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#A87042","#F7B073"],[0.333,1],14.6,-0.7,-11,0.4).s().p("AhjAkQAEgMAHgMQARgaAPgOQAcgbAjgEQAggDAiANQAnAQgLAYQgJARgXASQgXARgVAEQgSAEgXgBIgsgEQgGAAgRAHIgQAIQgGgHAGgSg");
	this.shape_2.setTransform(49.5,11.8,1,1,14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#42210B").s().p("AAWAgQgugDgbgSQgRgOgCADQgFAIgXgMQgTgMgJgLQASAJALAAQANAAAKgJQANgLAcAVQAiAZAcADQARACAfgKQAZgGAZAIQgSAEgpANQgbAKgQAAIgDAAg");
	this.shape_3.setTransform(5.3,8.8,1,1,14.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#AA7243","#B67B4A","#D5945E","#F7B073"],[0.341,0.49,0.753,1],-8.5,7.2,7.3,-2.2).s().p("AhiAwQgBAAgCgKQgCgKABgBQAQgoAjgUQAggSAhAEQAuAGAmA+QANAbgQAAIiAABIgjAAIgegBg");
	this.shape_4.setTransform(7.8,3.7,1,1,14.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#EDA161","#A67C52"],[0,0.667],9.2,-1,-9,1.1).s().p("AhbgEQARAIAdADQApADAggSQARgJAPAAQAPAAARAMQgcAAgQAEQgeANgXAEQgLACgKAAQgjAAgegWg");
	this.shape_5.setTransform(8.5,11.1,1,1,14.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#AA7243","#B67B4A","#D5945E","#F7B073"],[0.341,0.49,0.753,1],-9.4,0,9.5,0).s().p("AhQAdQgLgNgCgGQgCgHAFgIQAagqAsgFQAngFAjAdQAJAIAOARQASASgBAIQAAAHgRAEQgTACgEACQgfANgaADIgMAAQgpAAgYgZg");
	this.shape_6.setTransform(8.1,6.7,1,1,14.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#A87042","#F7B073"],[0.333,1],12.5,2.1,-11.6,-0.8).s().p("AhzA6QgEgNAAgDQAQglAKgOQAYgoAfgOQAYgLAtAHQA7AJAeAoQgJAGgHAHQgLgHgVgJQgggOgUgCQghgEgnAoQgUASglA2QgCgBgEgMg");
	this.shape_7.setTransform(50.9,10.1,1,1,14.9);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.3,-1.4,73.4,19);


(lib.ojos_abiertos = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#42210B").s().p("AheAkQgUgMgIgLQAQAIAPgFQANgEAJgMQAbghAngIQAcgGAYAKQAQAHAVATQAWATAPAaQgdgcgOgJQgXgTgTgBQgvgCghAdQgOAPgKAVQgCAEgFAAQgIAAgNgIg");
	this.shape.setTransform(6.1,5.3,1,1,14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#AA7243","#B67B4A","#D5945E","#F7B073"],[0.341,0.49,0.753,1],-9.1,6,7.1,-3.6).s().p("AhkAmQgCgJABgCQARgoAjgUQAfgSAhAEQAuAGApA5QgCAAghgQQghgTgIAAQg3AAgmAhQgTASgKARQgCgBgCgKg");
	this.shape_1.setTransform(7.8,4.4,1,1,14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#EDA161","#A67C52"],[0,0.667],9.2,-1,-9,1.1).s().p("AhbgEQARAIAdACQApADAggRQARgKAPAAQAPABARAMQgcAAgQAEQgeANgXAEQgLADgKAAQgjAAgegXg");
	this.shape_2.setTransform(8.6,11.8,1,1,14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFAMQgHgCgBgHQAAgFAFgFQAJgKAHAIQAGAGAAAEQAAAGgFAEQgEADgFAAIgFgCg");
	this.shape_3.setTransform(11.5,9.2,1,1,14.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2F1D12").s().p("AgNAZQgLgGgCgMQgEgJAHgLQAGgKALgDQAKgEAJAGQALAGAEAMQACAJgFALQgHAKgLADIgHACQgGAAgHgEg");
	this.shape_4.setTransform(8.8,7.8,1,1,14.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#42210B","#67481B","#BDA140"],[0,0.329,1],0.8,7,0.6,-4.3).s().p("AgbArQgSgMgFgVQgDgSAKgSQALgRAUgGIADgBQAVgEARAMQASAMAEAVQAEATgMASQgMATgVAEIgKABQgOAAgNgJg");
	this.shape_5.setTransform(8.7,7.7,1,1,14.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhQAcQgLgMgCgGQgCgIAFgHQAagrAsgEQAngFAjAdQAJAGAOASQASATgBAIQAAAHgRADQgTADgEACQgdANgcACIgNABQgoAAgYgag");
	this.shape_6.setTransform(8.2,7.5,1,1,14.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#42210B").s().p("AhqAAQAYggAVgLQBDgiBCArQANAIAQgEQARgEAQgOQgMAVgTARQgPANgEgBQgXgPgdgLQg3gWgwAeQgUAMgVAdIgVAiQACgZAZgig");
	this.shape_7.setTransform(53,12,1,1,14.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#A67C52","#EDA161"],[0.333,1],11,-1.1,-10.2,1.4).s().p("Ag/AKQAXgHAQACQA1AGApgSQAUgKAKgLQgPAYgdAMQgpATg4gLQgIgCgUAEQgWAFgIAGQAKgMAagHg");
	this.shape_8.setTransform(48.3,15.8,1,1,14.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHANQgHgEAAgIQAAgGAHgFQAIgHAIAGQAHAGgBAJQgBAJgIACIgEAAQgDAAgGgCg");
	this.shape_9.setTransform(54.1,13.4,1,1,14.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2F1D12").s().p("AgCAfQgNgCgIgKQgIgLACgKQABgNAKgIQALgIAKABQANACAIAKQAIAKgBALQgCANgKAIQgJAHgKAAIgCAAg");
	this.shape_10.setTransform(51.1,12.4,1,1,14.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#42210B","#67481B","#BDA140"],[0,0.329,1],1.6,8.3,0.4,-4.2).s().p("AgJA1QgWgEgNgTQgMgTAEgUQAEgVARgNQASgMATACIAEABQAWAEANATQANATgFAUQgEAWgTANQgOAJgQAAIgJgBg");
	this.shape_11.setTransform(51,12.3,1,1,14.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#A87042","#F7B073"],[0.333,1],12.6,2.2,-11.5,-0.7).s().p("Ah3AyQAQglAKgNQAYgoAfgPQAYgLAtAIQA7AJAeAnIgQALQgLgFgVgJQgggNgUgDQgigDgpAfQghAXgcApQgEgEABgJg");
	this.shape_12.setTransform(51.3,10.1,1,1,14.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhjAkQAEgMAHgMQARgaAPgOQAcgbAjgEQAggDAiANQAnAPgLAZQgJARgXASQgXAQgVAFQgSAEgXgBIgsgEQgGAAgRAHIgQAHQgGgGAGgSg");
	this.shape_13.setTransform(49.7,12.6,1,1,14.9);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.1,-0.6,73.4,18.9);


(lib.Layer001STROKES = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5584A").s().p("AmFCiQjRAAixgRQiugQjyg5QkQhFiGgcIAJgqQGRBYGkAnQC1ARDFAAIAAArIABgrQERAGEZgRIADAqIAAgqQJwAFGDhXQDVgxCIhNIAQAcIgPgcIAKgGIAVAmQhmA/g8AhQhrA5hdAWQmOBcp3gGQjOANjXAAQhFAAhFgCgAYZhuIgPgoQAVgIATgFIAMAoQgGABgFAZQgFAYgEACgAYZhug");
	this.shape.setTransform(159.9,16.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,319.8,32.9);


(lib.Path_2 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D5AEB1","#D89B9E"],[0.035,1],-11.3,2.3,11.3,-2.2).s().p("Ag0CVQgsgxgPhOQgQhMAWg+QAWg+AvgJQAtgKAsAyQAsAwAPBOQAQBMgWA+QgWA9gvAKQgIACgHAAQglAAglgpg");
	this.shape.setTransform(11.9,19);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23.9,38);


(lib.Path_3 = function() {
	this.initialize();

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D5AEB1","#D89B9E"],[0.035,1],-11.3,2.3,11.3,-2.2).s().p("Ag0CVQgsgxgPhOQgQhMAWg+QAWg+AvgJQAtgKAsAyQAsAwAQBOQAPBMgWA+QgXA9gvAKQgHACgIAAQgkAAglgpg");
	this.shape_1.setTransform(11.9,19);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23.9,38);


(lib.Path_4 = function() {
	this.initialize();

	// Capa 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#D5AEB1","#D89B9E"],[0.035,1],-9.6,1.9,9.7,-1.9).s().p("AgsCUQglgwgNhOQgNhMASg+QAUg+AngJQAmgJAlAxQAmAwAMBOQANBMgTA+QgSA+goAJQgGABgHAAQgfAAgfgpg");
	this.shape_2.setTransform(10.1,19);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.2,38);


(lib.Path_5 = function() {
	this.initialize();

	// Capa 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#D5AEB1","#D89B9E"],[0.035,1],-9.6,1.9,9.7,-1.9).s().p("AgsCUQglgwgNhOQgNhMASg+QAUg+AngJQAmgJAlAxQAmAwAMBOQANBMgTA+QgSA+goAJQgGABgHAAQgfAAgfgpg");
	this.shape_3.setTransform(10.1,19);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.2,38);


(lib.Path_6 = function() {
	this.initialize();

	// Capa 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#D5AEB1","#D89B9E"],[0.035,1],-11.3,2.3,11.3,-2.2).s().p("Ag0CUQgsgwgPhOQgQhMAWg+QAXg+AugJQAtgJAsAxQAsAwAQBOQAPBMgWA+QgXA+gvAJQgHABgIAAQgkAAglgpg");
	this.shape_4.setTransform(11.9,19);

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23.9,38);


(lib.Path_7 = function() {
	this.initialize();

	// Capa 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#D5AEB1","#D89B9E"],[0.035,1],-7.7,1.6,7.8,-1.5).s().p("AgiCVQgegxgKhOQgKhMAPg+QAPg+AfgJQAdgJAdAxQAeAwAKBOQAKBMgPA+QgPA+gfAJIgJABQgYAAgZgog");
	this.shape_5.setTransform(7.9,19);

	this.addChild(this.shape_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16,38);


(lib.Path_1_1 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AEF761").s().p("EgHDAiiQjqgXjOh2QjNh2iKi/QiPjHgtj1MgG6gl+QgUhuA3hiQA3hiBqgnIc9q3QDHhLDQATQDIATCwBlQCvBlB0CjQB6CrAjDSMAHCAphQATBvg5BhQg5BhhpAmI5pJSQi0BCi9AAQg1AAg2gFg");
	this.shape.setTransform(187.1,221.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,374.3,443.1);


(lib.Group = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54CEE2").s().p("AApbrIzfpFQiyhTh7iVQh2iPgyi1Qgxi0Aei4QAei/BvifIRT5HQAyhJBVgYQBWgYBRAlIWPKDQCZBFBqB/QBlB6AqCaQAqCagaCdQgbCjhhCJIzNbIQgzBIhWAXQghAIgfAAQg0AAgygXg");
	this.shape.setTransform(170.7,179.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,341.4,359);


(lib.Path_61 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A2260F","#D6590A"],[0.208,0.976],-23,8.4,11.9,-7).s().p("AgzgKQgBg0AEgUQAbgCAYgIQAEAAASAfQATAiAJAbQgOgUgSgHQgSgGgMAMQgOAMgNAoIgQA+QABghAAhGg");
	this.shape.setTransform(5.4,9.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10.7,18.7);


(lib.Path_23 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37363A").s().p("AEmMmIAAgCIgxhXIgig5IgkgyIAAAAIgigpIgBgBQgigngjgcIgCgBIgVgLQgcgRgagaIgXgXIgCgBIgNgQIgBgBQhNhfgriiQgUhJgLhMIgHhGQgDgcAAgZIABgSQADgsAMgiQANgdACgKQAFgOABgGQABgKgEgLQgFgLgHgJIgVgbIAAgBQgyg8g5gjQgjgUgJgLQgGgHAFgCIgCAAQgIADgMABQhWANh6gbQgLgBgPgFQg0gUgPgyQgMgrAjglQASgSATgJQAMgGAVgGQApgLAsACIAegRQAmgYAggmIAAAAQAWgSAWgGIAAgBIABAAQAagHAVAGIAOAFIAHAEIAGAFQALAMgGAPIgBADIgBABIgBACIgBACIgEAIQgEALAIAIQAGAFANACQAaAFAsAcIArAaIAMAGIAGAEIAVAMIAfAXIACACIAmAeQApAjAxAwIAzA1IADACIAQAOIAiAgIBCBBIAQATQAPASAPAYIAiA/IAEALQANAbATAwIAVA5QASAxAMAnIAQA9IAPBfQANBqAIAsIASBOQAUA+gvArIgQANQgUAPgiAOIhBAWIAAAAIAOgDQCMggAkAAIALAAQAjABAUAKQAYAMAUAfIAMAVQAbAxAyCPg");
	this.shape.setTransform(68.4,80.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,136.9,161.3);


(lib.CompoundPath_2 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("AG/c+IgMgWIifllQielmAIgCIAGgDIAJgDIg3hEQgOgBgHgBQgLgCgLgFQgYgPgrgsIgNgOIAAgBQgbghgwhaIg6hxQgHgMgYg7QgfhJgPggIhzkBQgHgRgPgVQgcgoglgNIl2AAQg9AAgqgrQgrgqAAg8IAAgMIgUAEQgrAJgugDQg/gEgdgfQgggggGgcQgFgUAKgYQAHgOAPgHIAegKIA1gZQAtgWAWgHIAQgFQATgEAbACIAAgyIgRgBIhkABIgBAAQgnAAgIgBQglgFgMgFQghgMgMgbIAAgBQgNgeAEgkQAEgeAMgOQAKgLAJgFQAJgEAPgCQATgDAVgHQAggLA/ggIALgEQAXgJAbAAIAEAAIAJABIAAi6QgngPgcgYIgBAAQgNgNgIgKIgIgMQgXglASgmQAKgUAPgNIALgKQAJgHALgFQAUgIAaAAIAAtIQAAgpAWghQATgdAegRQAfgSAkAAIK7AAQAgAAAdAOQAPAHAKAIIABABIABABQAZAUAPAdQAMAdAAAiIAAIMIAEADIAAAAIACAEIgBgEQAnAhAoBRICWExIABACIAGANIABABIBrDWQAIANAPAfQAcA7AVBBQAMAlAHAfIADAKQAOA8ATA4IAVA+IAWBNQATBGAOBZQBEHHAUAuIAcBBIAAABIBOC+IgBABIgyASIgBABIg0AUIgBAAIhvApIEbAAIGiN7g");
	this.shape.setTransform(123.9,185.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,247.9,371);


(lib.Path_41 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494949").s().p("AAcBjQg5gWgNgKQgYgUgUgjQgohDARhHQAcAoBEAbQAkAPBEAUQABAMANBFQALBCgBAEQgagEg9gYg");
	this.shape.setTransform(11.6,12.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23.2,25.6);


(lib.Path_36 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494949").s().p("AhIGKQgRjngJg1QgEgchdgxQhUgsgsgIQBTjqAOgXQCjAQA1gJQA8gJA8hsQAWgoBWjLQAVAJAsBSQAvBXgHAhQgLA1hNCKQgZAuh2DGQhQCJAbBRQANA4A0BsQBDCKAIATQhpA0h+AWQgEgQgQjcg");
	this.shape.setTransform(32.4,63);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.9,126);


(lib.Path_26 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494949").s().p("AhYA3Qg1gCgvgYQg3gbgQgrIANAGQAHAEAFABQATAEBsgOQBygPAYABQAiACBXAcIBlAgIAHAVQgZADiYALQiVAMgVAAIgBAAg");
	this.shape.setTransform(26,5.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,52.1,11.1);


(lib.ceja_izquierda = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#754524","#7A4927","#8A5631","#A46B40","#C88956","#F5AF72","#F7B073"],[0,0.125,0.282,0.459,0.647,0.843,0.847],9.8,17.2,-15.8,-15.8).s().p("AilAdQASgUA1gdQBHgqA0gGQAXgCAnAQQAwAVAbAjQgagOgtgJQgqgIgaAFQgqAIg4AeQgsAagiAdIgQgog");
	this.shape.setTransform(7,5.7,1,1,16);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.8,-0.4,32.8,11);


(lib.ceja_derecha = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F7B073","#CD8D59","#8E5933","#754524"],[0.098,0.267,0.537,0.667],17.9,-2,-18.1,1).s().p("AgugxQAbgKBCAPQA+ANAQANIgBAmQgngNgsgIQgrgKgTAAQgiAAgdAUQgTAPgVAeQAchVAygSg");
	this.shape.setTransform(8,6.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.6,0.7,25.2,10.9);


(lib.boca44 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7A673").s().p("AgUAKQgDgDADgGIAGgGQAGgFAIgDQANgDAGAHQAKAJgVAKQgIAFgIAAQgHAAgFgFg");
	this.shape.setTransform(26.3,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB965C").s().p("AgIATQgEgKAAgHQABgFAVgcIADAEQgHARgFAOQgEAUABAHQgDgDgDgJg");
	this.shape_1.setTransform(1.3,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EB965C").s().p("AgdgXIACgDIAiAQQASAIADACQACACAAAIIgDARQgKgOgugkg");
	this.shape_2.setTransform(38.1,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#C71F21","#C82222","#DF5E3B","#E87545","#E66F42","#DF5D3B","#D33F2E","#C71F21"],[0.145,0.161,0.408,0.525,0.576,0.643,0.718,0.788],20.4,6.7,-20.6,-6.6).s().p("Ai4APQgCgEABgHIABgEQAOARA9gBQAVAABAgHQBVgJAUgCQBSgQAPgdIAGAGQAFAHgHAIQgzA2h7AQQggAEgdAAQhRAAgyghg");
	this.shape_3.setTransform(19.4,6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#C71F21","#D74933","#E36940","#E87545","#E56E42","#DE5C3A","#D33E2E","#C71F21"],[0,0.188,0.361,0.455,0.529,0.635,0.761,0.867],15.9,1.1,-18.7,-3.5).s().p("AhQBRQgygcgqhnIAMAFQAWApARATQATAYAXALQAhAOAugDQA8gHAfgVQAtgfAZheIAMgJQgJBAgNAjQgOAmgXAVQgoAlhAAHIgNABQgpAAgkgVg");
	this.shape_4.setTransform(20,14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiA2QgdgBgagPQgbgQgTgZQBPAbBBgNQBAgLA/g1QgPAug4AfQgyAeguAAIgDAAg");
	this.shape_5.setTransform(21.6,17.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhcAqQgegJgmgtQA5ATBogHQBxgKAvgkQgDAJgQAVQgPARgKAIQgfAXhCAKQgdAFgcAAQgeAAgZgFg");
	this.shape_6.setTransform(19.5,9.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#84321C").s().p("AgkBVQgugEgiglQgUgXghg9QAfARBVgDQA4gCAhgGQBQgOA2glQgEA6gXAgQgfApgtAVQgoATgsAAIgTgBg");
	this.shape_7.setTransform(20,12.9);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41.2,24.3);


(lib.boca1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.flash0aiActivos();
	this.instance.setTransform(-1.9,-9.2,0.762,0.767,15);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.9,-9.2,33.9,19.4);


(lib.Símbolo12 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Group();
	this.instance.setTransform(221.6,248.2,1,1,0,0,0,170.7,179.5);
	this.instance.alpha = 0.551;

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(9.3,11.2);

	this.instance_2 = new lib.Path_1_1();
	this.instance_2.setTransform(187.2,221.6,1,1,0,0,0,187.1,221.5);
	this.instance_2.alpha = 0.77;

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,392.3,443.1);


(lib.Símbolo10 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#602913","#6A311B","#854731","#A15E47","#A15E47","#602913"],[0.133,0.208,0.329,0.435,0.557,0.843],20.3,-37.2,-15.3,32.7).s().p("AAyECQATiGgRiEQgplBjPiWQBDAECRB9QAXATAlBQQAkBOAfBhQBNDwghBOQgfBJhPBTQg7BAgdASQAshdARiBg");
	this.shape.setTransform(189.7,130.9,1.673,1.673);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#602913","#6A311B","#854731","#A15E47","#A15E47","#602913"],[0.169,0.235,0.341,0.435,0.557,0.843],-1.5,-49.7,-1,56.7).s().p("AADEkQhEgvgPgkQg1h9A0jdQAShPAahEQAXg8AKgFQgeBPgBBRQgBFaCPDBQgzgWg1gkg");
	this.shape_1.setTransform(103.5,157.7,1.673,1.673);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#602913","#844634","#420F0B"],[0,0.408,0.941],-16.5,-26.8,13.5,28.7).s().p("Ag6hJQBaiGB4AUQABAognArQgWAYhFA5QhEA2ghAlQg2A8gTA+QAMiUBRhzg");
	this.shape_2.setTransform(109,84.7,1.673,1.673);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#4C1A0E","#552110","#5E2712","#602913","#420F0B"],[0,0.106,0.286,0.592,0.933],22.2,-41.6,-34.3,27.9).s().p("AiCJFQBOgmAziQQAxiOgCisQgCi5hAiPQhMijiShCIAZhuQDeARB/DrQA/B0AgDaQAkD1gwCTQgFARggAhQgjAjguAfQhoBHhdAAQgPAAgPgCg");
	this.shape_3.setTransform(189.8,129.5,1.673,1.673);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#4C1A0E","#521E0F","#5D2612","#602913","#420F0B"],[0,0.082,0.322,0.592,0.933],-6.4,-46.7,3.2,63.6).s().p("AilGFQgthpgJipQgLjQA9izQAqh8BHhIQBohsCugJQgFAXgKAkIgPA2QguBZg7A6QgUAUhGA4QgwAlgTAlQgZAygBBaQgBCZA0CeQA/DEB8ByQjkgNhPi4g");
	this.shape_4.setTransform(115.6,129.9,1.673,1.673);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EB965C").s().p("AgFAUIAEgFQAEgGAAgHQAAgLgEgPQACAFAEAJQAEAJAAAEQAAARgQAFQgBgCADgDg");
	this.shape_5.setTransform(153.9,133.6,1.673,1.673);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C97A42").s().p("AgTADQALgGAGgBIAKABQAKABACACIgLAAQgNABgLAFg");
	this.shape_6.setTransform(149,137.4,1.673,1.673);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EB965C").s().p("AAGBbQgQgKgCgHQAJgnADgjQAFhCghghIAkAeQAFAngIAtQgEAXgDAXQgBAMAOAOQAJAIAJAFQgJgCgOgHg");
	this.shape_7.setTransform(139.3,123.3,1.673,1.673);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#F7B073","#F8B47B","#FCCBA3","#FED9BC","#FFDEC5"],[0.012,0.082,0.486,0.804,1],3.7,4.8,-12.9,7.2).s().p("AgIBSQAHghABgdIAAgzQAAgSgWgSQgXgPABgBQAKgHAeAPQAbAQAJASQALAXACAsQABAugKAHQgFAEgVACIgKABQgJAAABgEg");
	this.shape_8.setTransform(142.1,120.7,1.673,1.673);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EB965C").s().p("AgGABQABgEAFgHQACgHAFgEQgHANgBAJQAAAEABAIIAFAJQgOgGADgPg");
	this.shape_9.setTransform(137.3,134.2,1.673,1.673);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#F29166","#F6A870","#F7B073"],[0,0.78,1],-7,-8.4,0,-7,-8.4,20.4).s().p("AgiCbQgQgPgTgeQgcgugPhSQgRhjAjgbQBRg+BFA7QAbAWASAiQAQAdABAWQAEBCgZBDQgeBSg0ACIgCAAQgXAAgYgWg");
	this.shape_10.setTransform(117.7,128.6,1.673,1.673);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#F29166","#F49B6A","#F7B073"],[0,0.427,1],6.7,-6.1,0,6.7,-6.1,22.4).s().p("AgxCOQgJgIgKgMQghgkgVgpQggg5AHgxQAEgZAageQAcgfAlgRQBegtBIBRQAmAqgEBfQgDBfglAnQgNANgSALQgVAMgPACIgIAAQgnAAgrgng");
	this.shape_11.setTransform(174.5,119.8,1.673,1.673);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F7B073").s().p("AhQGYQhHgygngrQhGhNgThdIgfiIQgOg/ABg0QABhBCYiHQCPh/BDgUIBeA8QBgBDARAqQATAwAyDkQAlCmh8CXQgoAxg1ApQglAdgSAIQgnASgUAAQgoAAg+gug");
	this.shape_12.setTransform(146.3,108.4,1.673,1.673);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C97A42").s().p("AAZHMQgngFhAguQhEgxgpgvQhGhQgThdIgfiHQgOg+ABg0QAAgjApg8QAmg5A7g6QCMiLBWgBQAfAABuDQQBYCoAdBLQA7CZh8ChQgpA1g3AvQgoAhgRAIQgcANgWAAIgJAAg");
	this.shape_13.setTransform(145.6,109.4,1.673,1.673);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F76841").s().p("AD9C3QgZgBg1gOIgVgFQh9geiIgqQiJgqhLgfQAIgvARg3QAXhLAXgXIAKAFQAWAMA+ARQAzAOASADIC+AeQB0ATAIAHQAlAZAcBBQAeBIgFBGQgaAagnAAIgBAAg");
	this.shape_14.setTransform(139.4,346.3,1.673,1.673);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9E2F1D").s().p("AD9C7QgZAAg0gPIgWgFQh9geiIgsQiKgrhJggQAKgtAUg8QAYhMAQgYIAKAFQAWAMA/ARQAyAPATADQBlASDLAVQBDA6AOBBQADAQAEAuQAFArAHAdQgbAbgnAAIgBgBg");
	this.shape_15.setTransform(139.3,346.4,1.673,1.673);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#E89358","#F7B073"],[0,0.867],1.8,-2.4,-0.6,5.5).s().p("AhJAZQAigbAJgEQASgIBUgWQAFgCgEALQgEAJgEAEQgKAKgeAKIgoAQQgIADgKAMQgTgKgVgCg");
	this.shape_16.setTransform(164.3,326.2,1.673,1.673);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C97A42").s().p("AgzAeQgQgHgHgCQAYgaAwgPQAZgIA0gMQgDAgg1ATIgbAMQgQAIgFAKIgWgLg");
	this.shape_17.setTransform(164.9,326.2,1.673,1.673);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#E89358","#F7B073"],[0.298,0.722],3.9,-7.1,-3.3,10.4).s().p("Ah1AvQAagdAPgNQAdgYAYgHQAXgHAogGIAvgGQAegDAAABQACAHgNAKQgMAKgMADQgSAFgoAIIguAIIgeAJQgQAFgMAGQgNAGgSASg");
	this.shape_18.setTransform(171.9,322.4,1.673,1.673);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C97A42").s().p("Ah4AwQAtgwA/gZQAygVBTgCQgBAbg4APIhbAPQg4AOgcAXIgDADg");
	this.shape_19.setTransform(171.9,322.2,1.673,1.673);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#F7B073","#ED9D61","#E89358"],[0.369,0.725,1],-3.4,6.3,6.9,-1.9).s().p("AhTALQAUgWAPgJQAQgJAggIQAQgEA0gHIA1gIQAAALgKAIQgGAGgPAHQgFACgWADIgbAEQg3AJgZAGIgbAKQgNAEgPAVQgPAVgFABIAkgug");
	this.shape_20.setTransform(177.3,316.6,1.673,1.673);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C97A42").s().p("AhWANQATgWAPgIQAVgMAcgHQAWgGAkgFIBDgLQADAVglASQgGACguAGQgHABgmAKQgoAJgNAFQgNAEgUAUQgUATgGACIAjgug");
	this.shape_21.setTransform(177.5,316.4,1.673,1.673);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#E89358","#F7B073"],[0.133,0.569],14.1,-8.4,-7,16.2).s().p("AgyARQAMgMAagOIAvgeQAjgVABACIACAFQABAPgSAPIg4AlIgpAYQgaAOgFAIQADgYATgTg");
	this.shape_22.setTransform(179.5,307.2,1.673,1.673);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C97A42").s().p("AhEAwIADgOQAfgiAfgTQAVgRAzgaQAFAMgHAPQgHANgNAKQgcASgPAIIgpAWQghATAAAIQAAgEACgLg");
	this.shape_23.setTransform(180,307.4,1.673,1.673);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F76841").s().p("Ah3FvQguhFgYgmQBUkAAtjFIAbi8QAKhHAAghQBPgBBBAmQA3AgAIAiQAeB/huFjQgtCSgwBtQgwBygeASQgOg7gmg9g");
	this.shape_24.setTransform(202.3,293.7,1.673,1.673);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FCF7DB").s().p("AgjBJIgngUQAMg1AMgcQARguAbgdIAhALQAdAJAUAHQgJAngSA1QgRAzgIAlQgYgPgjgQg");
	this.shape_25.setTransform(87,331.3,1.673,1.673);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CFB885").s().p("AhPA2QAPhtA0g4IAjAMIA5AUQgkBIgYB3QhQgwgTgKg");
	this.shape_26.setTransform(87.7,331.5,1.673,1.673);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#E89358","#F7B073"],[0,0.635],-10,2.7,8.2,-7.1).s().p("AgcATQgdgNgXgGQAYgeAdgOQAbgNAXAFIAcAJQAXAHAGADQAFADgWAjQgTAggNARQgPgPgsgUg");
	this.shape_27.setTransform(76.2,321.3,1.673,1.673);

	this.instance = new lib.Path_26();
	this.instance.setTransform(73.1,353.2,1.673,1.673,0,0,0,25.9,5.5);
	this.instance.alpha = 0.43;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F76841").s().p("AiWCBQgNgCgXgNQgVgMgNgLQg2gvgGgtQgDgcAIgYQAIgVAdgXQAlgcAugGQAugFA4ARQAgAKA/AaQABAEB5BTQB4BVgCAHQgDAJi3ARQh3ALhEAAQgmAAgVgEg");
	this.shape_28.setTransform(72,340.7,1.673,1.673);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9E2F1D").s().p("AACAHQhSgKgcAHQATgPAhgNQAjgOAVADQA2AIAgAeQAOAOAJAUQgVgRhWgNg");
	this.shape_29.setTransform(58.6,322.7,1.673,1.673);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FCF7DB").s().p("AAkBdQgKhGgdgRQgMgGglAOQgMAFgnATQAJgXAvhHIA5hbQAQgMAXgPQAkgXASgEQgnBegNByQgJBRAEByQgFhHgFgmg");
	this.shape_30.setTransform(112.9,236.5,1.673,1.673);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FCF7DB").s().p("AjGDfIgDgJQBth9BWh1QBZh9AkhOQAZAMA6BAQgGAXgYB0QgYBwgHAWQgTgcgdgdQgjgjgSgBQgwADi7DMIgDgJg");
	this.shape_31.setTransform(152.2,237.4,1.673,1.673);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CFB885").s().p("AAWBzQgJhSgYgSQgTgEgbAGQgfAGgaASQAIgWArhDQAwhPAIgNQBIg4ArgWIAHAGQg0BngPCCQgIBJgGB9QgCgFgKhjg");
	this.shape_32.setTransform(114.8,236.1,1.673,1.673);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CFB885").s().p("AgNgNQBPh8ArhhQARAGAeAaQAkAeAMAZIhHERQgXghgegYQgagTgUgGQgiADhVBPQgvAqhHBDQBmh0BYiEg");
	this.shape_33.setTransform(153.5,236.1,1.673,1.673);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BC452A").s().p("AiSDwQAYgyBCiCQAxhdBdiiICIjjQANAGglDCQglDNgmBQQgWANiRCYQiSCWgiAsQAfhTAvhjg");
	this.shape_34.setTransform(134.1,279.8,1.673,1.673);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8E180C").s().p("AiSDwQAYgyBCiCQAxhdBdiiICIjjQAMAFgeDCQgfDKgiBWQgYAQiVCTQieCYggAqQAfhTAvhjg");
	this.shape_35.setTransform(134.2,279.8,1.673,1.673);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3A2E12").s().p("AgPAEQgDgNAOgFQAMgGAHAPQAIAPgSAGIgHABQgLAAgCgNg");
	this.shape_36.setTransform(107.3,352,1.673,1.673);

	this.instance_1 = new lib.Path_36();
	this.instance_1.setTransform(158.8,357.9,1.673,1.673,0,0,0,32.5,62.8);
	this.instance_1.alpha = 0.43;

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F76841").s().p("AlAL8QABiMAJjTQAKjoAEhtQAehSAwhkQAYgyBEiEQAxhgBcifICHjhQBPAgA2AEQAPAJAPDCQANC9gIAnQgRBShuC0IiJDRQgpBAgNBCQgGAqAEAQQAJAoBWBkQBcBrAbBGQh5BFiOAXQhCAKhFAAQhCAAhEgJg");
	this.shape_37.setTransform(153.1,339.2,1.673,1.673);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#9E2F1D").s().p("AlRL7QgEihAFjGIALlNQAchMA4hqQBCh3Agg/QAxhgBeihICHjjQAjAOBZDVQBXDRgGAmQgRBjhkCwQgpBGhWCEQgpA/AEBEQACAiAKAZQAMAsA0BcQA9BtAZBAQh5BFirAZQhKALg/AAQhIAAg5gPg");
	this.shape_38.setTransform(155.9,339.2,1.673,1.673);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BC452A").s().p("Ag4C4Qg8ibADgkQAbhXBhilQBbibAMABQgKBAg2CWQgyCPgIBFQgIBRAUB4IAlDJQguhkgziDg");
	this.shape_39.setTransform(99.8,281.6,1.673,1.673);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#8E180C").s().p("Ag8CpQgghQghhZQAghgBhieQBhidAZACQgKBBg5CRQg4CLgFBGQgJBQAUB4IAmDJQgqhLhBing");
	this.shape_40.setTransform(98.9,282.2,1.673,1.673);

	this.instance_2 = new lib.Path_41();
	this.instance_2.setTransform(81.6,312.6,1.673,1.673,0,0,0,11.4,12.9);
	this.instance_2.alpha = 0.43;

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F76841").s().p("AhaLOQhCgcgjgiQAUg1BEh+QBEh9AJgXQAbhOgRh2Ig2j9QgRgagOgaQgbg0AKgwQAJgrA1heQA3hiAggdQAehBgJhHIgJguQgDgVADgIQBFgLBQABQgJA/gqCZQgoCOgHBJQgJBTAXB+IAnDOQACgFgxEyQgyE4gNA4QhEgPg7gZg");
	this.shape_41.setTransform(82.5,338.7,1.673,1.673);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F2E6BF").s().p("Ah3DWQgJgbgGh8QgGiAABiVQB3AkCgANQjeF8gjAAIgCgBg");
	this.shape_42.setTransform(114.8,342.1,1.673,1.673);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FCF7DB").s().p("AiDL2Qh7gEhpg/QBSkxAQlLQAOk3AVjHQAZjpAegrQAVACA1gGIA9gIQgXBMgIBqQgEA9gBB4QCFijCgjXQAOAFAyAUQAnARAkAJQgGANhPD2IixIeQhDDKgQCHQgUCtAtCKQhiARg6AAIgPgBg");
	this.shape_43.setTransform(132.4,335.1,1.673,1.673);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#F7B073","#E89358"],[0.733,0.957],0.1,-54.3,-1,39.1).s().p("AkaKmQgJgegGiIQgHiRADifQAJmoBAhdQAhADAmgLQAUgFAUgIQBjgeAAhMQAAgvg4iEQgGgQAwgRQArgPBBgJQBCgIApAEQAvAFgMAVQgkBDgRBIQgVBjAiA7QAZAcAfATQAmAWAfgBQoJPEg9AAIgDgBg");
	this.shape_44.setTransform(142,264.5,1.673,1.673);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C97A42").s().p("AiwEUQgFi4AFhRQBcgIAKhHQAJg+gxh1QgHgPAxgPQAsgNA+gGQBBgGAoAHQAuAHgMAVQghA9gMBSQgQBmAjA6QAJAKAYAHQgQAvgdBMIgvB7QiMgEh8gTg");
	this.shape_45.setTransform(149.9,205.4,1.673,1.673);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3A2E12").s().p("AjLA2IjEiFIAMhFQE0BNHJhIQAJANANAWQiwCRkCBwQg4gUhxhLg");
	this.shape_46.setTransform(123.2,475.7,1.673,1.673);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#4C1A0E","#420F0B"],[0,0.933],-6.8,-14.1,14.6,116.7).s().p("AkQJFQhahkgtjRQgmivACjEQADi2AfhMQAqhlBohgQBphgBVgNQAPABAxAZQA5AfA6ArQCpB/A3CcQBQDfAXCFQAaCYghBlQgiBohpBNQhmBJi/BBQgxAQgsAAQhjAAhKhTg");
	this.shape_47.setTransform(165.5,143.6,1.673,1.673);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#9E2F1D").s().p("AgODyQgDgMgVgaIgog0Qg0hJAOg0QAShBAmhEQAthJATgmQAcgaAmgQQAngSAKAMQgRA5gODlQgIB1gGCFQgYgJhAgUg");
	this.shape_48.setTransform(80.1,289.4,1.673,1.673);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F76841").s().p("AjSGlQhGgqADhlQBOhdA/ipQBJjTAziDQATg2AVgRQAhgbBmgHQA0gEA2ABQAjBUhiC4QgbAyg4BdQg0BSgOAdIg5CJQg9CGgnAxQgTAYgfADIgKAAQgZAAgZgOg");
	this.shape_49.setTransform(72.9,283.9,1.673,1.673);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#3A2E12").s().p("AjYA6IjQiOIANhJQFGBSHmhNQAKAOAOAXQi5CZkUB4Qg8gVh4hPg");
	this.shape_50.setTransform(126.5,477.7,1.673,1.673);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3A2E12").s().p("AgkMBQgZg+hspUQhnpFgBAAQCchZBLgvQCChRBKhTQB+CbgPFGQgEBagXDOQgXDMgEBuQgFB0ABA5QABBlAMA0QAJAlAHAKQgqAthXAUQg0AMg2AAQgWAAgXgCg");
	this.shape_51.setTransform(165.2,578.5,1.673,1.673);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#3A2E12").s().p("AgyMeQADhmhkrRQhgq4gLggIEPg+QBABaAiCQQAbBtAMCfQAQDeAVDuQAnHJAZCjQg0AihMAKQgdAFgeAAQg8AAg6gSg");
	this.shape_52.setTransform(200.3,826.8,1.673,1.673);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#241A08").s().p("ACnLiIiZp+QiQpcAIACQgLgEgnglQgtgpgegnIAKhsQCiAQCUgXQgBDHBQJ2QBMJRAUA1QgFABghABIgQAAQgVAAgGgBg");
	this.shape_53.setTransform(135.7,592.1,1.673,1.673);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3A2E12").s().p("AhSMUQgMifgpkVIhDnOQhIojBBi4QArARAqAMQBpBpEEDdQgMAcgSJGQgRJAAGAmQgyA7hSAfQgjAOgdAAQg3AAgfg2g");
	this.shape_54.setTransform(87.6,588.4,1.673,1.673);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#3A2E12").s().p("Ah9MqQAIk9gLm4QgPo2gok6QAsBBBWAnQBdAqBCgfQA5C4AMI2QACB1ABE+QACDuAFBYQhKAZhoADIgaABQhPAAgbgSg");
	this.shape_55.setTransform(99.4,812.1,1.673,1.673);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#6D1F0D","#841B0D"],[0,1],12.3,0.3,-11.9,-0.3).s().p("AhVDhQgPgNgLgtQgKglABgWQAEgtAOg0QALgpADgCIgJBGQgFAnADAFQAGAKBEgCQBGgCAWgVQASgPAQh/QAQh6gFgiIAFgBQgEAxAEB5IAFBzQAAAmgTAhQgQAbggAbQgjAfgmAPQgXAJgRAAQgQAAgLgIg");
	this.shape_56.setTransform(212.8,992.6,1.673,1.673);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E89658").s().p("AgaFUQgxgCgfgGQgHgzAIgvIAOg3QAMgyAEg1QADgjAAg3QAAgSALh1QAJhlgEhaQBKAHBFAMQgPCWAIBaQACAZAKAXIASAkQACBLgUB2QgYCKggAFQgKACgVAAIgfgBg");
	this.shape_57.setTransform(213.2,957.7,1.673,1.673);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#6D1F0D","#841B0D"],[0,1],22.6,0,-22.5,0).s().p("AjZDaQgagNBChPQA7hFAPgIIgYAjQgNASAEAFQAGAJArAFQAvAFAegMQAwgSBAh7QA7h0APhVQAUAOAQAeQAUAogKAkQglAfgWAXQgfAggUAjQgRAfgRBKQgMA1geARQg4AihZAGIglABQgxAAgWgLg");
	this.shape_58.setTransform(83.1,976.7,1.673,1.673);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E89658").s().p("AixEqIAbgjQAPgTANgMQBQiZARhEQAZhfgVj6QBJAEBQAKQgMCQALBYQADAUAXAlQAWAfgCAQQgEAphLB2QhYCKhFAQQgaAGgVAAQg0AAgTglg");
	this.shape_59.setTransform(86.5,945.8,1.673,1.673);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#6D1F0D").s().p("AggBsQgEgEAAgEIAChEQAAgxgGgJIATgfIAig1QABABANgBIAOAAQgZBAgGAtQgDAWAABKQgKAMgTAFQgFAAgFgEg");
	this.shape_60.setTransform(113.3,977.1,1.673,1.673);

	this.addChild(this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.instance_2,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.instance_1,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.instance,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(24.8,31.8,218.3,999.9);


(lib.ClipGroup = function() {
	this.initialize();

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Am7MUIAA4nIN3AAIAAYng");
	mask.setTransform(58.8,78.9);

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E39461","#E99967","#F1A070","#E39461"],[0.012,0.169,0.478,0.992],-13.7,-0.8,13.2,1).s().p("AgDASQg/gEgogXIgCgJIAYANQAvAHAqABIBGgBQAHgBAbgKIgEAKQgQAKggAFQgUADgVAAIgTgBg");
	this.shape.setTransform(57.2,76.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E39461","#F6AB78","#F6AB78","#E39461"],[0.012,0.224,0.69,0.992],-14.2,-1.3,13.9,1.9).s().p("AgGAVQg1gFgSgOIgLgGQgJgIgGgKQAfAXBIACQBEADAkgNQgCACgPAJIgSALQgRAIgfAAIgbgCg");
	this.shape_1.setTransform(57.2,77.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#9C5233","#974A3B","#9C5233"],[0.325,0.557,0.835],-11.2,-0.3,11,0.8).s().p("Ag+AHQgYgJgRgPIgCgDQAPAIAbAHQAhAFAmAAQA+ABAkgLIgEAIQgZAXhMAAIgBAAQgfAAgfgOg");
	this.shape_2.setTransform(57.1,77.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#542E0F","#552F10","#704829","#7A5233"],[0.075,0.082,0.443,0.655],-54,0,33.4,0).s().p("Ah4BHQgagSgHgRQgHgQAHgYQANgMAhgMIARAIQATAIAIAAQgTgRgQgSQAVgTAWgGQAagIAVAKQAMAGAaAVQAcAXACAKQALABAEgIQADgFgLgZQgMgagKgCIAgAFQATADANAEQAcAWANAmQANAigJARQgMAMhiALQg1AGgqAAQgoAAgdgGg");
	this.shape_3.setTransform(54.6,22.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#542E0F").s().p("AjSAxQgBgRAKgjQArgoA+gWQBTgdAvAoQgFgIgQgLQgOgKgQgHQAtgQBWAWQBOAUATAVQABABgFAvQgGA2gFATQgRAQk8AEQg5gogQgJg");
	this.shape_4.setTransform(54.5,22.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#542E0F").s().p("AgVDCQgKgTgKgYIgNjGQgChEALgUQAMgTAfgaQAfgdAagKQgCAVABAcIABAxQgVADgPATQgNAPgEAQQgLA2ACBrQACA4AEBHQgHgDgNgXg");
	this.shape_5.setTransform(34.1,43.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#542E0F").s().p("AAWBjQgBhpgPg7QgEgPgGgOQgLgUgMgCQABgmgihHQAiAKAkAqQAgAiAMAcQAGANABA5QABBMgMB+QgDANgKAWQgKAVgIAJQADhGAAg5g");
	this.shape_6.setTransform(78.8,42.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#7A5233","#805737","#936642","#B07E53","#DAA06C","#F7B87D"],[0.275,0.376,0.525,0.694,0.882,1],-16.2,-1.2,21.7,2.4).s().p("AhHAXQgCgIAHgPQAFgNAEgEQAIgHAqAAQAogBAhAHQAGAJABAfQg8gGgWAAQgkAAgVAJg");
	this.shape_7.setTransform(46,46.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#7A5233","#835938","#9C6E47","#C48F5F","#F7B87D"],[0.216,0.329,0.514,0.749,1],5.3,13.3,-18.7,-11.1).s().p("AALAPQgQAAhBAHQgCgMACgMQABgMADgGQAogGAlACQAmABAIAHQAEACAGAOQAHAQgCAIIgFACQgRgMgnABg");
	this.shape_8.setTransform(69.1,47.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#E89C69","#B3774C"],[0.067,1],4.1,-1.2,-3.7,1.4).s().p("AgBAIQgfAAgJgIQA+AGAVgOIgEAKQgJAHgZAAIgFgBg");
	this.shape_9.setTransform(68.9,58.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#734A29","#774D2B","#825532","#95643E","#B0784E","#D09061"],[0.502,0.612,0.714,0.812,0.91,1],10.4,4.6,-4.1,-5).s().p("AgygBQAGgRAMgDQAQgEATACQAZACAMAJQAJAHAGAXIgRgTQgIgIgXgDQgWgDgOAGQgHADgHAIQgIALgDAMQgBgOAFgMg");
	this.shape_10.setTransform(69,55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E39163").s().p("AgqADQAIgPAKgHQAdgGAWAIQARAGAEAKIACAMQgWgbghAFQgZAEgMAOQgGAJgBAHQgCgFAJgPg");
	this.shape_11.setTransform(68.6,53.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDAIQgEgCgBgEQgBgCACgDQADgDADgBQACgBADACQAEABAAAEQABACgCADQgCADgDABIgCABIgDgBg");
	this.shape_12.setTransform(71,56);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1A1A1A").s().p("AgGANQgGgDgCgGQgCgFAEgFQADgGAGgCQAEgCAGAEQAGADACAGQABAFgDAFQgDAGgGACIgEAAQgCAAgEgCg");
	this.shape_13.setTransform(68.8,56.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#999999","#838383","#666666","#545454","#4D4D4D"],[0,0.196,0.522,0.8,1],1.2,-2.9,-1.1,3).s().p("AgPAbQgLgHgEgLQgDgKAGgMQAHgMAMgDQALgFALAHQAMAHAEALQAEAKgGAMQgHAMgNAEIgIABQgHAAgIgEg");
	this.shape_14.setTransform(68.8,56.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgpAbQgMgJAGgSQAFgSAKgHQAPgKAUABQAYABAOAOQAOAOgHAQQgGAPgOAEQgXAFgOAAQgVAAgLgIg");
	this.shape_15.setTransform(68.8,56.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#E89C69","#B3774C"],[0.067,1],-4,-1.2,3.8,1.4).s().p("AglACIgEgKQAVAOA+gGQgJAIgfAAIgFABQgZAAgJgHg");
	this.shape_16.setTransform(45.3,58.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#734A29","#774D2B","#825532","#95643E","#B0784E","#D09061"],[0.502,0.612,0.714,0.812,0.91,1],-11.8,-0.6,5.7,0.1).s().p("AAtACQgHgIgHgDQgPgGgWADQgXADgIAIQgMAKgFAKQACgJAEgKQAFgJAEgDQAMgJAZgCQATgCAQAEQAMADAGARQAFAMgBAOQgCgMgIgLg");
	this.shape_17.setTransform(45.2,55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E39163").s().p("AArAHQgLgOgagEQghgFgWAbIACgMQAEgKARgGQAWgIAdAGQAKAHAJAPQAIAPgCAFQgBgHgGgJg");
	this.shape_18.setTransform(45.6,53.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgBAIQgEgBgCgDQgCgDABgCQABgEAEgBQADgCACABQADABACADQAFAGgIAFIgEABIgBgBg");
	this.shape_19.setTransform(43.3,56);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1A1A1A").s().p("AgDAPQgGgCgDgGQgDgFACgFQABgGAGgDQAGgEAEACQAGACADAGQAEAFgCAFQgCAGgGADQgEACgDAAIgDAAg");
	this.shape_20.setTransform(45.5,56.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#999999","#838383","#666666","#545454","#4D4D4D"],[0,0.196,0.522,0.8,1],0.1,3.2,0,-3.1).s().p("AgHAeQgNgEgHgMQgGgMAEgKQAEgLAMgHQALgHALAFQAMAEAHALQAGAMgDAKQgDALgMAHQgIAEgIAAIgHgBg");
	this.shape_21.setTransform(45.5,56.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAJAjQgQAAgTgFQgPgDgGgQQgHgPAOgOQAPgPAXgBQAUgBAPALQAKAHAFARQAGASgMAJQgKAIgVAAIgCAAg");
	this.shape_22.setTransform(45.5,56.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B3774C").s().p("AgBgCQAHgDAGADIgNACIgKAEQADgEAHgCg");
	this.shape_23.setTransform(60.9,69.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DE8F5E").s().p("AgIATIAEgCQAEgDAAgFQADgHgGgUIAHANQAGAIgBAGQAAACgJAFQgFADgDAAIAAAAg");
	this.shape_24.setTransform(62.1,68.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B3774C").s().p("AAAAAIgLgCIAEgBQAFgBAEACQAHACADAEIgMgEg");
	this.shape_25.setTransform(54.6,70.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DE8F5E").s().p("AAAAQQgIgEAAgDQgCgGAHgJQADgIAEgEQgFAXABAFQACAGAHADIgBAAQgDAAgFgDg");
	this.shape_26.setTransform(52.9,68.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#F7B87D","#FFF0CF"],[0.267,1],-0.6,-20.1,0.6,28.5).s().p("AgPA8QgHgKABgGQAFglACgVQADgngIgQIAiAAQgIARADAkQADATAJAqQABAFgHAKQgHAKgJAAQgHAAgIgKg");
	this.shape_27.setTransform(57.5,61.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#F7B87D","#F1AE75","#E19361","#DE8F5E"],[0.012,0.173,0.447,0.486],-16.3,13.4,29.9,-24.5).s().p("AgYCAQAQg6AHgLQAag/APhrIALhfQACBPgGBgQgHB4gSAeQgIAOhABKQAKgTAQg8g");
	this.shape_28.setTransform(76.5,64.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#F7B87D","#DE8F5E"],[0.012,0.545],5.8,18.7,-18.7,-37).s().p("AgcBNQgYhmgIiWQAIA3A7CjQAMAsARAjIAZA2QhUhLgFgYg");
	this.shape_29.setTransform(38.6,68.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#F0A871","#F7B87D"],[0.51,0.682],-1.2,-13.8,1.2,13.3).s().p("AgfBCQgpgMgRgfQgHguAVgaQAZgeBnANQALAMAOAaQAOAcAAAKQAAAMgSATQgPAQgNAHQgVAHgWAAQgQAAgSgFg");
	this.shape_30.setTransform(46,52.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#DE8F5E","#E19462","#EAA36D","#F7B87D"],[0.459,0.62,0.816,1],-4.2,3.2,4.4,-7).s().p("AgCAPQgYgBgQgGQgLgEgHgGQgGgHABgGQgBACBCAEQBBAFACgCQgJAOgVAHIgXABIgQgBgABDgGIAAAAIAAAAg");
	this.shape_31.setTransform(57.3,79.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#F7B87D","#F0A871"],[0.318,0.855],-6.3,8,6.2,-8.6).s().p("AAEAdIg6ACQgHgGgMgYQgNgXABgIQAYACA9ACQBCABAUgCQgCAVgUAlQgYgDgkABg");
	this.shape_32.setTransform(57.8,80.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#F0A871","#F7B87D"],[0.514,0.682],-8.1,10.7,8.2,-11).s().p("AgnBCQgPgIgQgPQgUgSAAgNQAAgMANgbQAMgdALgLQAEgFA0ADQA7ADAQAUQAMAPACARQAAAJgDAXQgRAgglAOQgUAHgSAAQgSAAgRgFg");
	this.shape_33.setTransform(68.5,52.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DE8F5E").s().p("AgMAAIgGgDQANAFAHgBQAFgBAMgFQgKALgJAAQgFAAgHgGg");
	this.shape_34.setTransform(57.8,70.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DE8F5E").s().p("AgCAGQgFgKAAgEIAHgHQAFgGACgBQgHAWAIAXQgGgFgEgMg");
	this.shape_35.setTransform(45.7,74.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DE8F5E").s().p("AgJgVQABAAAIAMQAKAKAAABQAAAFgPAPQALgZgPgSg");
	this.shape_36.setTransform(68.4,74.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["#F7AB77","#F7B87D"],[0,0.89],2.2,-0.7,0,2.2,-0.7,11.9).s().p("AhkA9QghhBAxg+QAXgdAjgOQAhgOAjAGQAVAEASAOQAQAOALAVIAGAPIgVB1QgRAVgXAOQgYAOgbACIgLABQg+AAgdg7g");
	this.shape_37.setTransform(69.2,66.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#F7AB77","#F7B87D"],[0,0.89],-1.6,-0.2,0,-1.6,-0.2,11.9).s().p("AgCB1QgcgCgYgOQgYgNgRgWQgUhggBgKQAFgNAFgIQAKgVASgOQASgOAWgEQAkgGAhANQAjANAXAcQAwA7giBAQggA8hAAAIgJAAg");
	this.shape_38.setTransform(45.5,65);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#F7B87D","#F7B87D","#EA9966"],[0.286,0.725,1],0,43.9,0,-36.1).s().p("Ag4FcQgfgTg4gzQhAg5gFgWQgShSgKh4QgIhkACgkQAFhKAFgYQAJgtAXgYQA1g1C9AIQCJAFAmAzQARAXAHAoQADASAFBFQAFA4gGB0QgHCNgTAgQgLASgtA0Qg1A7gcATQgiAEgtABIgLAAQgnAAgIgFg");
	this.shape_39.setTransform(57,56.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C4784F").s().p("Ag9FmQgXgLg+g+Qg+g+gEgPQgThLgLh9QgKhmACgkQAFhDAHgeQALgrAagZQA5g1C/gMQBqgHAxBAQAnAzAJBxQAEAngLBmQgLBogQBXQgDAOgyA+Qg3BEggAUQgfAEgtABIgJAAQgqAAgKgEg");
	this.shape_40.setTransform(57.5,56.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#E09663","#E69E69","#F5B47A","#F7B87D"],[0.475,0.663,0.961,1],1.3,12.2,-4.1,-6.3).s().p("AgVAeQgCgaAEgQQABgGAKgSQAJgUAFgBQAHgBAFAEQAGAGgBAPQgJgQgOAWQgMAVgFAjQgBAQAAANQgCgMgBgQg");
	this.shape_41.setTransform(84.2,61.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#F7B87D","#DE8F5E"],[0,1],-3.1,1.2,1.3,-1).s().p("AgMAcQgEgCAHgaQAGgaADgBQAEgBAFACQAFADAAAFQABANgKAPQgBAEgHAHQgHAHgBAAIgBAAg");
	this.shape_42.setTransform(83.7,61.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#EA9966","#F7B87D"],[0,0.667],-7.8,2.8,4.1,-1.9).s().p("AgnAfQgGhAAYgkQAMgTAWAEQAZAEACAXQAFA5giA3QgMAYgJAGIgHABQgRAAgFg3g");
	this.shape_43.setTransform(83,61.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#E09663","#E69E69","#F5B47A","#F7B87D"],[0.475,0.663,0.961,1],-1.3,-6.4,4.2,12.2).s().p("AATAdQgEgjgPgVQgPgWgJAQQgBgPAHgGQAFgEAHABQAGABAKAUQAKARACAGQAFARgCAaIgEAcQAAgPgCgOg");
	this.shape_44.setTransform(30,62.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#F7B87D","#DE8F5E"],[0,1],3.5,-0.7,-1.4,0.9).s().p("AAEAVIgJgLQgJgOAAgOQAAgFAGgDQAFgCADABQAEABAHAaQAHAagEACIgBAAQgBAAgIgHg");
	this.shape_45.setTransform(30.6,62.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#EA9966","#F7B87D"],[0,0.667],8.2,-2.2,-4.2,3.1).s().p("AANBVQgLgIgNgWQglg5AFg3QADgXAbgEQAYgFANATQAaAkgHBBQgFA3gSAAQgEAAgDgBg");
	this.shape_46.setTransform(31.3,62.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#404041").s().p("AANENQhCiHgwhkQhci7gThYQA1gYA2gFQA0gEBCAMQBFB9BHCXQA+CFgDADQgnA2hEAnQgyAdgcAAQgIAAgGgDg");
	this.shape_47.setTransform(21.3,205);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EDEDED").s().p("AhaA6QgVgpgGgMQAYgGBCg1QBAg2ACgMQAKAJAeAxIAnA+QgUAegoAgQg4Atg8AOIggg/g");
	this.shape_48.setTransform(32.9,224.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#404041").s().p("AgnFXQgngDhCgRQAKg1AnkKQAhjgAdh7QAuAeA1BFQBQBpgCBsQgfBQgQBwIgYCsQgxALgqAAIgVgBg");
	this.shape_49.setTransform(14.5,148.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#231F20").s().p("AgNAOQgNgOANgNQANgMANAHQgRgBAAARQAAAKAHAGQAJAGAIgOQgDANgMACIgFABQgGAAgHgIg");
	this.shape_50.setTransform(88.1,210.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#231F20").s().p("AgNANQgNgOANgMQANgMANAHQgQgCAAARQAAALAGAGQAJAGAIgPQgDANgMADIgEAAQgHAAgHgIg");
	this.shape_51.setTransform(86,185.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#323233").s().p("AgaiOQgOiEgvizQA6AJAxANQAEAHAgBRQAfBRABAGQgJAOggAmQgaAfgMAMIAoAkQAeAbAIALQgUB8gaB9QgpDGgpBeQAplMgakIg");
	this.shape_52.setTransform(85.4,140.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#282829").s().p("AgeiGQgMhygridIAqAHQAgAEASAFQAHACBHCsQABAEggAnQgeAkgLALIAiAhQAXAXAIAMQgRBrgZBnQgkCegrBfQAjlAgWjcg");
	this.shape_53.setTransform(86.4,136.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#282829","#2E2E2F","#3D3D3E","#404041"],[0.067,0.447,0.933,1],109.5,-44.6,-78.2,33.7).s().p("AgugEIBYgSQADATACAGIhWAUg");
	this.shape_54.setTransform(105.5,205.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#404041").s().p("Ah3JIQgRhhgDgcQgJhjgFhzIgEhpQAqkygKj7QgHizghiIQAqAJC/AdQACABAEADQAEADABAFQAIAogFDAIgHDvQgHDdAbC8QARCPAWCDQAHAqAZCAQgLAQj3BLIgbiVg");
	this.shape_55.setTransform(98.8,169.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#282829").s().p("AhGAcIgOh5QgPh3ABgEQAahqAFgXQAOACAcAUQAaAVAOAAQAQCzARB/QAVCmAeCKQgbAWhfAPQgvkzAAgKg");
	this.shape_56.setTransform(91.1,207.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#282829","#2E2E2F","#3D3D3E","#404041"],[0.067,0.447,0.933,1],-109.1,-15.3,92.4,12.7).s().p("Ah+AKIAFgXID4AAIgBAbIj8gEg");
	this.shape_57.setTransform(47.6,209.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#282829","#333334","#404041"],[0,0.486,0.906],-44.6,-16.4,35.3,12.8).s().p("AgLAaQg8gogoghIAJg5QAVASAxAkQAuAjAoAiIAuAtQAFAUAHAVQg5gghCgvg");
	this.shape_58.setTransform(44.5,220.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#282829","#333334","#404041"],[0.067,0.404,0.69],-39.6,1.3,51.1,-1.4).s().p("ABMGfQgxgTgbgaQASiBAChaQABhBhMjfIhwk2QgEgKA5A8QBABEA2BQQCuD5gKDpIgEDYIhYgig");
	this.shape_59.setTransform(34.4,175);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#323233").s().p("AhsAbQAWg2AGgRQgCAAgrgMIhPgaIgkiFQgjiAgDgHIBmg7QAcBiC3FCQCsEtBIBig");
	this.shape_60.setTransform(57.7,139.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#282829").s().p("ABWDbQi9i2gTgUQAFgRAKgWIAPgiQgDAAgrgOIhHgYQgHgggahvQgbhwgEgKIAtgaQASgJANgCQANBODFFAQCsEXBZB0Ii8iyg");
	this.shape_61.setTransform(58.3,140.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#404041").s().p("AgKIrQg7g5gYgSQgpghgfAAIAWicQAKhTABgrQgChVgrh9QgghegthgQgZhUgphpQgnhkgHgZIgCgfQAAgFAEgHQAEgLAIgEQAxgZBTgkQBLghAdgQQANBODMFBQCpEGBjCBQgCgBgBBRQgCBnAFB3QgDAlgBB/IgCCvQgbADiAABQhcgoh+h7gAFxBJIAAAAIAAAAg");
	this.shape_62.setTransform(47.8,173);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#DBDBDB").s().p("AhQAdIgphIQAEgPAMgeQALgdACAAQAQAiA4AmQA7AqBSAZQgkAFgPAIQgfAUgtA/Qgsgpgegwg");
	this.shape_63.setTransform(52.5,103);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#AFAFAF").s().p("Ah/gqQgBgFANglQAOgnAJgFQAWAnAyAkQA7AsBZAaQgZgBgiAUQgVAOgfApIgYAmQhrhtgNg+g");
	this.shape_64.setTransform(52.5,103.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EDEDED").s().p("AgOAwQgJgCgWABIgWAAQAjgUAbgpQAXgoAFgiQACgBAOASQAPAUAIASQAFAgABAeQABAngFAVQglgfgpgKg");
	this.shape_65.setTransform(70.7,100.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#AFAFAF").s().p("AgPAyQgTgGgqACQA0gZAYg0QAVgpgDggQADACAZAfQAZAfAAAEIAFA/QADA8gFASQgogngxgQg");
	this.shape_66.setTransform(70.6,100.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#0068AF","#004F91"],[0,1],3.9,-14.1,-3.6,13.4).s().p("AgoARQgYgbAEgHQAKgOANgKIALgHQAFgDAUgDQASgDAIABIAeAGQAHABgBAGIgHBZQgYALgjAAQgSgTgRgVg");
	this.shape_67.setTransform(64.5,110.8);

	this.instance = new lib.Path_61();
	this.instance.setTransform(69.3,125.8,1,1,0,0,0,5.4,9.3);
	this.instance.alpha = 0.34;

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#0068AF","#004F91"],[0,1],-35.9,15.8,17.3,-7.6).s().p("AgEEMQg8g3gYgRQAChJgNjzQgJi4ANgRQAfgEARgKQAdAfArB3QA2CQAZCYQgFAUgJBdQgLBYgQAYQgIgNg7g3g");
	this.shape_68.setTransform(74.3,150.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#00317D","#004F91"],[0,1],-13.8,0,13.9,0).s().p("AAWFKQhBg8gagSQADhCgJj0QgIjAAOgYQg4g4gMgXQgBgBAJgNQAKgOgBgBIA1gKQAXgEAKgFQASAGAIAFQAGADADAGQACARgDAhQAAAegEAQIANAZQATAjASAuQA7CSAhDIQADAlgMBSQgOBbgQAZQgJgMhEg8g");
	this.shape_69.setTransform(70.9,144.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EDEDED").s().p("AjjHkQgBgzhGljQhIlvgJhvQAcgYBAgrQAwggAagQQAQAbBPAYQBIAXAvAAQA2AAAjgcQAggaANgsIBqAUQBSASAXAYQAeB2ADFbQACCzgBDqQhEBijAAfQg6AKg2AAQiBAAhqg4g");
	this.shape_70.setTransform(62.7,149.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#1A1A1A","#272727","#343433"],[0,0.576,1],-13.4,0.9,20.7,-1.4).s().p("Ah+BhQgCgOABgJQAogUBGg1QBXhBAng2IATAXQhABDgzArQhDA8hGAsIgCgWg");
	this.shape_71.setTransform(44.7,233.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#EA9966","#F7B87D"],[0.224,0.667],-12.9,-12.3,12.1,17.9).s().p("Ag2B8QgRgjgRg3QgOgvACgEQAEgCBghpQAsAzA5BNQgoAigxAmQguAmgTALg");
	this.shape_72.setTransform(38.3,228.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#DE8F5E").s().p("Ag0B8QgPgjgag3QgRgjAAgDIBBg9QAtgsAMgQQAXAZAiAvIAqA5QhCA9hgA9g");
	this.shape_73.setTransform(37.5,228.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#404041").s().p("AiFDyQg7gsgNg8QgRhFA0g8QA3g9A8hYQArg/AUglQABgCAHgCQAHgDAFABQBFBFBxA3QhDCEhZBvQhjB+g/AAQgNAAgMgFg");
	this.shape_74.setTransform(148.5,124);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#282829","#333334","#404041"],[0.067,0.4,0.69],-49.2,0,25.6,0).s().p("AhBB4IiUhWQgXhFAWhOQAUhHAwgzQAFgFADAEQBsBODeB3QAqBbgKBPQgJBSg7AZQhWgliHhRg");
	this.shape_75.setTransform(120.3,124.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EDEDED").s().p("AgpA7QhLg1AIgZQAHgYASgeQASgeAMgKQAOAgBBAoQA4AhAcAIQgDANgQAgQgVAngZAeQgvgcgngbg");
	this.shape_76.setTransform(159.2,107.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F7B87D").s().p("AgxAwQALgoALgWQADgHASgIQATgKADgCQAPgOAKgBQAKAIgBAKQgCAIgKAMQgDAFgVAKQgSAJgEAFIgcAsQgCACgCAAQgFAAgEgJg");
	this.shape_77.setTransform(161.9,76.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#E09663").s().p("AgrAYQAFgQAGgKQAGgLAQgIIAXgNIANgIQALgGADAAQAKAHACAGQABAFgDAQQgDAKgPAKQgTAQgYABQgIAFgKAOQgEAHgSABIAIgag");
	this.shape_78.setTransform(161.8,75);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#F7B87D","#F3B279","#E7A36D"],[0.51,0.729,1],-8.2,1.7,7,-1.7).s().p("AhDAzQgFgCgCgFQgEgGAFgGQAIgLAUgPQAPgKALgGQAsgjAJgFQAEgDAJADQAJAEADAHQALAXAHAiIgRgNQgRgLgEABQgMADgYAPIghAZIgQAKQgIAFgHAAIgGgCg");
	this.shape_79.setTransform(167.5,76.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#F7B87D","#F3B279","#E7A36D"],[0.51,0.729,1],-8.4,2.1,7.3,-1.4).s().p("AhQAgIAAgGIACgEIASgPIAUgNQAzgmASgBQARgBAWAhQAFAHADAKQAEAMABAKIgdgVQgOgIgEABQgEABgaAQQgZASgKAFQgRAHgIABIgEAAQgPAAgFgOg");
	this.shape_80.setTransform(168.7,81.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#FFFFFF","#FEF5ED","#FCE2CA","#FAD3AE","#F9C798","#F8BF89","#F7BA80","#F7B87D"],[0,0.055,0.173,0.298,0.435,0.584,0.753,1],-10.4,-7.6,14.2,11.8).s().p("Ag/BEQgUgTAFgVQAEgOARgLIAogZIANgMQAFgIAHgCQABAAAKATQAJALANAEQgCgEgJgHQgJgHgDgGQgCgGACgGQACgGAHAAQAEABAGAFQAHAGAEABQAHABAHgCIgNgJQgJgFgBgFQgCgIAJgIQAIgHAIAFQANAKADAJQAGAPgKATIgUAcQgHALgVATIgXAYQgMAOgNAFQgHADgHAAQgOAAgNgMg");
	this.shape_81.setTransform(169.4,94.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#F7B87D","#F3B279","#E7A36D"],[0.51,0.729,1],-5.3,5.1,6.3,-3).s().p("AA3ArQgSgEgOgLIgMgMQgKgLABgBIAPgJQgNACgNAGQgSAIgLADQgPAEgLgIQgLgIADgDQAFgGAagRQAMgIAhgJQAMgEAXASQAVARAOAUQAAAHgEAMQgGAOgIAAIgBAAg");
	this.shape_82.setTransform(172,86.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#E09663").s().p("ABbBmIAAAAIAAAAgAA5BZQglgMAAgCIgDgIIgGABIgRAHQgHADgMAAQgMABgNgKQgOgJAFgCQgVAFgLgQQgKgOAGgIQAFgIAJgGQgKABgGgHQgGgFACgIQACgIARgQQAPgPANgIIAggXQATgPALgHQADgCAMACQAPACAEAHQAFAIAEAOIAGATIAGAUIAEAVQABAJAIAbQABACAJANQAKAOADAGQAFAKgCAIQgCAIgJAOIgigNg");
	this.shape_83.setTransform(169.7,80.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#D9915E","#D78D5B","#CF8252","#C9784A"],[0,0.247,0.475,0.608],-76.1,-23.3,65.8,-53.2).s().p("AAAAEQATgZADgMQAKATgYAVIgNAPQgIAIgLAEQAJgIAPgWg");
	this.shape_84.setTransform(161.9,91.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#E7A36D","#EEAC74","#F7B87D"],[0.4,0.584,0.741],12.2,-5.7,-11.6,7.8).s().p("AhVAiQAjg5AGgNIAMgeQAJgQAVgDQA0gHAbAlQANATADAVQgGATg7AqQg5ApgYAAQg2gBAWg0g");
	this.shape_85.setTransform(167.4,92.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F7B87D").s().p("Ag/CmQgogTgVgQQAAgNAGgtIAHg4QgCgRABgWQACguAWg+QAHgcAKgXQAEgKBGAwQBJAwAMAXQAGAIAWANQARAOgOARQgWAggaAdQgnAsgeAPQgMAGgDBOQgMAAgmgSg");
	this.shape_86.setTransform(166.2,92.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E09663").s().p("Ag+CbQhCgggGgBQABgFAJggQAJghAEgaQgDgJgCgPQgBgcALgqIAQg/QALglAIgRQAHgMBgBPQAyAoA0AtQAAAIgGALQgGAKgTAWQgFAFgUAYQgRAWgvAhQgMAJgCAdQAAAdAIASQgHAAg/ggg");
	this.shape_87.setTransform(165.7,93.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#F7B87D","#F3B279","#E7A36D"],[0.51,0.729,1],4.1,-3.9,-6.1,7.4).s().p("AhAAqQADgEAmgmQAFgCATgcIAXgcQALgKAMgCQAOgDAEAKQACAHhCBhQgBAEgNANIgQANQgLgKgYgTg");
	this.shape_88.setTransform(177,66.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E09663").s().p("Ag9A8IgJgfQALgIAhgkQAfglAIgNQAGgIANgIQAQgKANACQAFAAADAGQADAHgCADIgaAjQgHAKgMAZIgPAaQgFAIgWAZQgWAXgNALQgDgGgGgYg");
	this.shape_89.setTransform(176.7,68.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#282829","#404041"],[0.102,1],1.8,-117.8,-5.1,160.1).s().p("Ai/ReQh1gHgjgcQAEhBAEgKQARgiABgGQABgEgJgGQgJgIgBgEQgBgJAGhHIAHhaQARj5ABm5QABmggNlfQgFhuAGhKQAMiYA0hQQA9gDDwgKQEBgJAjABQASBQhfCXQghA2gmAvQghAqgLAGQgdAUg+AdQgJBJgcHWQgeIhgKFlQgHEUgIBEQgeAThPAAIgwgBg");
	this.shape_90.setTransform(63.7,319.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#1A1A1A","#282829","#404041"],[0.035,0.192,1],-57.7,-28.5,112.2,50.8).s().p("AhlQ0IgEgjQgEgYAAgGIAHgYQAFgSABgHQABAAgIgIQgLgKgCgFIgco5Qgfp3gSkUQgEgwgFjSQgFjCAAhLQB+gMDOgcQgBAdAFCZIAIDTQAKGVAMGtQASI4AIBgIAXEFQgaAhiCASQgqAGgcAAQhGAAgNgdg");
	this.shape_91.setTransform(90.6,315.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#E09663","#F7B378"],[0.141,0.675],-1.1,-14.7,1.4,20.2).s().p("AAECMQhWgOhQhvQAFgwACgcQACgwgKggICUAJQBUADA9gMQgBAlAGAgQAIAnAVArQgyCEhZAAQgKAAgLgCg");
	this.shape_92.setTransform(59.1,99.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#1A1A1A","#1E1E1E","#2B2B2B","#414141","#4D4D4D"],[0,0.204,0.424,0.651,0.753],1.3,-42.9,-1.9,59.2).s().p("Ag8BeQgIgBAHi/QAGACA4ADQA5ADAGgBQAFANgJBVQgIBXgFACQgXADgXAAQgdAAgggFg");
	this.shape_93.setTransform(45.2,430.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#1A1A1A").s().p("Ag0CKQgVgCgfgbQgggcAAgTQAAgUAVhCQAVhBAVg0QB7ACA9gBIAOBlQAJA9ADAcQABASgZAeQgUAYgWARQgaADgcAAQggAAglgEg");
	this.shape_94.setTransform(44.7,429.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AAACfQgugBgOgEQgQgFgdghQgfgkAAgUQAAgWAUhGQAUhGAVg5QB9ACA/AAIANBrIALBeQABAVgaAtQgaAsgQAFQgOABgUAAIgkgBg");
	this.shape_95.setTransform(44.7,430.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("ABCBTIgFgBQgVgFhKghIhjgsIADAQQgqgQhUghQgIgEgEgUIgEgaQAPAIBbAkQAkAPBbApQBRAlAoAFQALABAogCQAtgDAYgFQAJgBAYgRQAcgTgFgKIABAAQAGABAFALQAFAKgDAEQgHAKgTANQgUAPgUAGQgXAFgtADQgeADgVAAIgVgBg");
	this.shape_96.setTransform(109.4,434.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#1A1A1A","#1E1E1E","#2B2B2B","#414141","#4D4D4D"],[0,0.271,0.565,0.867,1],-20.5,0,24.3,0).s().p("AgkAVQiMhJgcghQBVAABJgLQAZAhBUAxQAkASBqA3QgGAHgXALQgZAMgcAIQgggIh/hEg");
	this.shape_97.setTransform(107.5,425.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#1A1A1A").s().p("ABOCBQgdgFiWg/QiFg3gZgKQgJgfgCgdQgCgjALgVQBrAIBxgRQAgAqCPBMQCJBFAAAFQAAANgNANQgNAMgcAQQgbAFgoAEQglAEgWAAIgNgBg");
	this.shape_98.setTransform(108.7,429);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = this.shape_50.mask = this.shape_51.mask = this.shape_52.mask = this.shape_53.mask = this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = this.shape_57.mask = this.shape_58.mask = this.shape_59.mask = this.shape_60.mask = this.shape_61.mask = this.shape_62.mask = this.shape_63.mask = this.shape_64.mask = this.shape_65.mask = this.shape_66.mask = this.shape_67.mask = this.instance.mask = this.shape_68.mask = this.shape_69.mask = this.shape_70.mask = this.shape_71.mask = this.shape_72.mask = this.shape_73.mask = this.shape_74.mask = this.shape_75.mask = this.shape_76.mask = this.shape_77.mask = this.shape_78.mask = this.shape_79.mask = this.shape_80.mask = this.shape_81.mask = this.shape_82.mask = this.shape_83.mask = this.shape_84.mask = this.shape_85.mask = this.shape_86.mask = this.shape_87.mask = this.shape_88.mask = this.shape_89.mask = this.shape_90.mask = this.shape_91.mask = this.shape_92.mask = this.shape_93.mask = this.shape_94.mask = this.shape_95.mask = this.shape_96.mask = this.shape_97.mask = this.shape_98.mask = mask;

	this.addChild(this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.instance,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(14.4,12.3,89,145.5);


(lib.boca7 = function() {
	this.initialize();

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C71F21","#D74933","#E36940","#E87545","#E56E42","#DE5C3A","#D33E2E","#C71F21"],[0,0.188,0.361,0.455,0.529,0.635,0.761,0.867],-147.7,0,147.8,0).s().p("AAHCnQiUALjfAEQk+AAjwgdQiJgOi9hCQh3gmhJgiQgXgKgNgKIBXAEQA4ACA9gEQA9gFAygJQAsAHF2hOQC7gnCygoQBAAACUBRQBMAqBaA2QATgJCPhPQCShKBAAAQAeABDcAnQDkAoCYAFQB6ABCwAOQCLAMAmgFQgIAFgKAKQgOAHgMALIgDAAQhOAnhgArQi+BXiBAKQj0Adk9AAQjcgEiVgLg");
	this.shape.setTransform(147.7,18.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C71F21","#D74933","#E36940","#E87545","#E56E42","#DE5C3A","#D33E2E","#C71F21"],[0,0.188,0.361,0.455,0.529,0.635,0.761,0.867],-145.7,0,145.8,0).s().p("ACYLiIiTgzQhHAchYAXQixAvhIgUQiDgghrg6QhcgwiDhiQhthRh/jUQiJj3hDhrQiNjsgHlJQgEgVAAgXQCRFqC4C9QC5C6EXCjQEWCjFkgSIBGAAQCDAHCXghQDZgnDPh4QDOh7DBjbQDAjeB3lTIAAAoQgLFaiND3QiIDyhWCAQiODTh0BVQiLBphHApQhmA7h+AfQgVAGgeAAQhFAAhzghg");
	this.shape_1.setTransform(147.9,91.2);

	// Capa 1
	this.instance = new lib.Path_4();
	this.instance.setTransform(217.1,129.9,1,1,0,0,0,10.1,18.9);
	this.instance.alpha = 0.5;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AquALQgYgThSgxQhFgpgaglIgHhKQAJgIALgHQAXgPANADQEiA6ItAmQHcARFfiRQAPgFASAHQATAIABAQIAFA9QACAggEAHQgbAtg7AtQhZBCgXAWQiKCCjCA5QiiAwjVAAQmDAAkekEg");
	this.shape_2.setTransform(148.7,109.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAEAEA").s().p("AquALQgYgThSgxQhFgpgaglIgHhKQAJgIALgHQAXgPANADQEiA6ItAmQHcARFfiRQAPgFASAHQATAIABAQIAFA9QACAggEAHQgbAtg7AtQhZBCgXAWQiKCCjCA5QiiAwjVAAQmDAAkekEg");
	this.shape_3.setTransform(148.7,109.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EAEAEA").s().p("AnQDsQkKgiiXhxQgPgFgmhtIg0ihIguhCIO5ATIRYgHIghCtQgYBsgVAPQieB9kgAsQi4Ack7AAQlQAAiKgRg");
	this.shape_4.setTransform(145.9,43.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CE1E22").s().p("AmuB3Qj5hTAAgZQAxg0BYg+QB8hUBWgKQCagTBnAdQA1AQAZARQAqAAA4gkQArghCjAaQBXAOB/BTQA1AnBqBPQmzDAj1AAQifAAkPhbg");
	this.shape_5.setTransform(154.6,87.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#874846").s().p("AqVGWQkXiji5i8Qi5i7iQlqQAAAXADAVIgZg3IAkALQBJAiB3AnQC9BBCJAOQDwAdE+AAQDfgECUgKQCVAKDcAEQE9AAD0gdQCBgKC+hXQBggrBOgpIADAAQAOgKAMgEQh3FTjBDcQjADdjOB7QjPB4jZAnQiXAhiDgHIgEgEIhCAAIAAAEQgkACgiAAQk6AAj6iTgAkHgFQhWAJh8BTQhYA/gxA1QAAAaD5BTQEPBaCeAAQD2AAGzjAQhqhQg1gnQh/hUhXgMQijgZgrAeQg4AlgqAAQgbgSgzgPQg/gQhSAAQg0AAg8AHgAWzoZQAMgIAGgHIgSA3g");
	this.shape_6.setTransform(147.7,67.9);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,295.5,168.4);


(lib.boca6 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Path_5();
	this.instance.setTransform(124,154.9,1,1,0,0,0,10.1,18.9);
	this.instance.alpha = 0.5;

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C71F21","#D74933","#E36940","#E87545","#E56E42","#DE5C3A","#D33E2E","#C71F21"],[0,0.188,0.361,0.455,0.529,0.635,0.761,0.867],-47.7,8.8,67.9,8.8).s().p("AkZH9QhXgohJhEQhEhBhOhxQgsg8g7h3Qg5h0gMgYQgsiRgMhiQgDhFgEgIIAJAHIE7GOQDBDXFGgKQDRgICKhXQBAgrByh9QA8hDA5h8QBDidAthgIAbACIAVgIIgQCwQgVDDgcBeQg4CkhSBxQhMBsg9A8QhDBChRAqQg6AdiJgcIh+gjQgyAVhAAQQhHASgwAAQgmAAgYgLg");
	this.shape.setTransform(83,130.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C71F21","#D74933","#E36940","#E87545","#E56E42","#DE5C3A","#D33E2E","#C71F21"],[0,0.188,0.361,0.455,0.529,0.635,0.761,0.867],-56.1,11,46,11).s().p("As3G2QgDgYgBgCQAYiUAZhWQAih1A6hZQBpipCZiEQBShGBTgyQAfgSB5A2QBqAwAWAWQARgRBggmQBqgrA1AAQAZAABNBPQAfAhBhBdQBeBeA0BKQANASAtBDQAjA5AhBqQAdBeAIBEQgDgKgNAHQgXANgMgPQhCiJgzhIQhOhwhfgwQkhiXj2AOQj5APkvEJQhVBJg5CEIgkBWQgRAngOAKQgDADgCAAQgGAAgDgQg");
	this.shape_1.setTransform(82.8,45.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AqXAbQgggngHhGQgJhRgSgnIgxhtQCyBcCoAfQCqAhD3gLQD2AHC8gzQC0gyC0h2QgXBCgiB+QgjBvg5BNQkdF4luAAQlwAAkSlfg");
	this.shape_2.setTransform(85.7,130);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAEAEA").s().p("AqXAbQgggngHhGQgJhRgSgnIgxhtQCyBcCoAfQCqAhD3gLQD2AHC8gzQC0gyC0h2QgXBCgiB+QgjBvg5BNQkdF4luAAQlwAAkSlfg");
	this.shape_3.setTransform(85.7,130);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EAEAEA").s().p("AgqC4QnHAAgth0QgqhwCJg1IgYg6IGVAwIHphMQDGBQhnCOQhlCRmzAAIgYAAg");
	this.shape_4.setTransform(86.8,35.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#874846").s().p("AnoGSIk7mOIgJgUIAWg2QAOgLAPgaIAgg4QA1hYBUhJQEwkMD4gPQD2gOEhCYQBbAvBDBJQAnAqBFBXQAlBSAPApIgDAAIglCiQg4B1gyA1Qg+A3gwA2QhyB/hAArQiKBXjRAHIgeABQkyAAi4jPg");
	this.shape_5.setTransform(82,89.2);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,165.7,182.8);


(lib.boca5 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Path_6();
	this.instance.setTransform(217.9,151.8,1,1,0,0,0,11.9,18.9);
	this.instance.alpha = 0.5;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAEAEA").s().p("ApOCpQjGgBh3gIQgdgCgkgoQgkgmACgYQDVhMFLhKQE1hGB3gDQEFgIEtA6QD9AwDfBQQAMAQgkAsQgkArgVADQi5AdjkAMQjaALlhAAIoRAAg");
	this.shape.setTransform(139.2,50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#874846").s().p("AvFCrQnEmOgGgBQBBgkCEgpIDxhMQD0hWEHg3QD1g0C5gIQDagKEJAvQDrAqEoBbQETBWC3BVInAGcQoZGemwAAQmvAAodmegA2PjkIAAAAIAAAAg");
	this.shape_1.setTransform(143,92.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C71F21","#D74933","#E36940","#E87545","#E56E42","#DE5C3A","#D33E2E","#C71F21"],[0,0.188,0.361,0.455,0.529,0.635,0.761,0.867],87.2,-11.6,-64,16.3).s().p("AojIpQijgtjTi7QjDishsiqQhwiwg1jXIglivQALgFAgAaIAFAFQAbAUBwBIQB3BUBeBjQAfAZBCBMQA4BAAwAaQFJCyGPAAQJHAAIUlIIGZlOIgQAxQhPDciWD2QktHqlmB/QhzAojZgTQhEgGhGgLIg2gKQg8AXhiAMQg9AHg9AAQiGAAiEgkg");
	this.shape_2.setTransform(142.7,126.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#C71F21","#D74933","#E36940","#E87545","#E56E42","#DE5C3A","#D33E2E","#C71F21"],[0,0.188,0.361,0.455,0.529,0.635,0.761,0.867],92.8,9.9,-97.9,27.5).s().p("A2AFYQgJgQADgXIAGgVIBUhGQBHg/BdhNQC5iXBshCQBthDCQhMIB6g/IG9BjIHnh3ICPA8QChBHBfA3QBUAyDMCdQBmBQBVBGIA8BHQAsBHgCAOQgDAMgwgNQh3gWjgg8ImZhvQoHiLiVAAQiXAAmQCOQjaBRhqAlQi2BBhuAdQhIATgtAAQg0AAgRgag");
	this.shape_3.setTransform(143.3,37);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,285.5,185.6);


(lib.boca4 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Path_7();
	this.instance.setTransform(150.1,89.8,1,0.698,0,0,0,7.9,19);
	this.instance.alpha = 0.5;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAEAEA").s().p("AnEBJQhCgdg1gkIhYhBIBuAoQB/AmBZgBQBYAACMgVQBHgLAzgMIBkAWQB2AQBZgOQA+gLCQhGQBHgjA7ggIgMA3QgHAKgPAQQgeAfgnAdQhMA0hUAfQiRA2jeAQQgtADguAAQjYAAivhMg");
	this.shape.setTransform(104.4,54.6,1,0.698);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#874846").s().p("Ai7FwQjhgWiXh4QiYh3i5isQhdhWg+g/QBxBECXA/QEuB9C6gYQC6gVA/gLQAfgGgFgBICCAXQCXARBYgiQCMg7I/krQg1BkhbB7Qi2D1i/B2Qi/B2i+AeQg7AJg1AAIgogDQgoAHg0AAQgvAAg2gGg");
	this.shape_1.setTransform(109.1,54.4,1,0.698);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C71F21","#D74933","#E36940","#E87545","#E56E42","#DE5C3A","#D33E2E","#C71F21"],[0,0.188,0.361,0.455,0.529,0.635,0.761,0.867],69.5,2,-62.6,24.3).s().p("AizKTQj8gUi1j3QjBkHiZkhQhMiSgmhdICMgvQCig0BvgcQAtgLCEgzQBhgmAgAHQBFANCOBHQB5A8AagIQAZgICRhhQB9hUArANQDfBDEUAgQCKAQBdACQgpBshOClQiaFJixEeQimELj+AgQhOAJhIgOIgsgOQg0AjhbAAQgWAAgXgCg");
	this.shape_2.setTransform(107.4,66.3,1,0.698);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,20.1,214.8,92.4);


(lib.boca3 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Path_2();
	this.instance.setTransform(235.3,51.2,1,1,73.2,0,0,11.9,19.1);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Layer001STROKES();
	this.instance_1.setTransform(160.5,21.9,1,1,-1.8,0,0,159.8,16.4);
	this.instance_1.alpha = 0.5;

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C71F21","#D74933","#E36940","#E87545","#E56E42","#DE5C3A","#D33E2E","#C71F21"],[0,0.188,0.361,0.455,0.529,0.635,0.761,0.867],-156.6,0.9,169.1,0.8).s().p("ABtFYIhzgwQhHAZhYAXQiwAuhSgJQjLgXjRhpQhHgkhqg+QiNhUgggRQhkg3ioiKQhVhFhAg6IgFgnQAwA5DGAbQBsAQD4AeQBoAVB+ASQCvARDPAAQDtgGCjgWQBHALBWAGID2ALQFZAAELg4QA6gKBpgeQBBgSBHgbQCfg0BCghIAKgGQAbgRAKgRIAPAoQAAAcgEgEQgDgEgIglQgqBxhuBXQggAYhHAvQhIAwglAdQjXCljIBcQjyBwkQAeIgQABQg9AAhygqg");
	this.shape.setTransform(161.8,45.9,1,1,-1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C71F21","#D74933","#E36940","#E87545","#E56E42","#DE5C3A","#D33E2E","#C71F21"],[0,0.188,0.361,0.455,0.529,0.635,0.761,0.867],-128.5,6.7,131.9,6.7).s().p("AsKDIQh9gShpgVQj3gehtgQQjGgcgwg5QFqiGFahAQEBgwDDAAQAiAAC4BVQC2BTAkAdQAegbCxhTQCuhSAXAAQCKABBfAEQD2ALC2AjQHnBrA0gLIAVgFIgVAWQgKAQgbASIgKAGQhCAeifA0QhHAchBASQmLBapxgFQhXgGhHgLQijAWjtAGQjPAAivgRg");
	this.shape_1.setTransform(161,12.2,1,1,-1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EE867A").s().p("An9AkQJwAGGLhYQhpAdg6AKQkLA2lXAAIj2gLg");
	this.shape_2.setTransform(228.7,27,1,1,-1.8);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-10.6,321.8,96.1);


(lib.boca2 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Path_3();
	this.instance.setTransform(193.6,87.5,1,1,0,0,0,11.9,19);
	this.instance.alpha = 0.5;

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C71F21","#D74933","#E36940","#E87545","#E56E42","#DE5C3A","#D33E2E","#C71F21"],[0,0.188,0.361,0.455,0.529,0.635,0.761,0.867],-47.5,7.2,65,7.2).s().p("AoUHGQirgeisiBQh4hai2jBIjVlAIBTBMIALAHQDAC9CjA7QCfA9BXAEQBWAADMgyQDGg1EPAIQELAHDIA/QFfArDkkUIDSkNIBHgcIgRAdQmaIwiTBkQhvBZhEAvQh7BVhoAPQiBATiugcIiTgfQg9AUhcAPQheAPhXAAQhTAAhMgOg");
	this.shape.setTransform(146.8,63.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C71F21","#D74933","#E36940","#E87545","#E56E42","#DE5C3A","#D33E2E","#C71F21"],[0,0.188,0.361,0.455,0.529,0.635,0.761,0.867],-87.8,8.7,93.5,8.6).s().p("AAZDOQgRgEgNAAQijAOjWAEQlGAAjygkQgfgDgqgIQgQgHgUgEQgpgIh5ghQiLgmgSgLIgDgEQgNgGgJgIQgKgKgXhPIALAAQAmACHDhdQHHhdArAAQBGAAClBFQB0AwBFAmQAogYDDg+QDWhFBHAAQArAAGXBGQGSBGAvgDQATgEARAAIAAAhQgBAAgBAAQAAABgBAAQAAABgBAAQAAABAAABQgIAEgGAHQgHAAAAADQgIAEgDADQgHAEgIAHQgLAEgHAHQg7AkgxAbQi/BwiHAPQj2AklCAAQi/gDiWgLg");
	this.shape_1.setTransform(143.7,22.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAEAEA").s().p("AlqDLQmwg9hojJIgvheIChgIQEoBFHpAAQHsAAEfhaQCNgsAYAHQhbBjhMCcIjjBJQlaBwk/AAQh+AAh6gSg");
	this.shape_2.setTransform(144.3,39.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#874846").s().p("AuLDFQiig9jBi7IgKgHQg9gogkg0Qglg3AfgKIChBGQCLA9AUAEQAUAEAQAHQAqAIAfADQDyAkFGAAQDWgECjgOQANAAARADQCWALC/AEQFCAAD2gkQCHgPC/hwQAxgcA7glQAHgHALgEQgTAbgRAcIjSDQQjkEWlfgsQjHhAkMgHQkOgIjHA2QjLAzhWAAQhYgEifg9g");
	this.shape_3.setTransform(143.3,46.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,287.5,110.7);


(lib.Símbolo3 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F4F4F").s().p("ABnIrImat1IgDgFIhCiLIBEgaIABAAIACAAIAAgBIAigNIAFgBIAlgOIACAAIACgBIA+gYIAKAWIDqHqQDrHhA9B0g");
	this.shape.setTransform(250.4,336.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#424242").s().p("AhwIDQgMgcldruIgQglIgMgWIAbgKIAEgBIAcgKIABAAICTg2IACgBIBAgYIACAAIAEgBIABgBIBsgoICGgyIBCCLIADAFIGcN1g");
	this.shape_1.setTransform(210.5,340.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BABABA").s().p("AkbBNIEkhbIEThXIkuBuIgBABIj8Bcg");
	this.shape_2.setTransform(190.2,296.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAFAFA").s().p("AGYJUIl3t6IglilIgBABIgBAAIgBAAIkyBiIgBAAIgzAQIgBABIiNAsIAAAAIhKAXIgYgyIgLgTIA2gUIABgBIANgEIABgBICzhBIACgBIAHgDIABAAIFUh+IACgBIAvgSIACgBIAYgJIIwSng");
	this.shape_3.setTransform(220,332.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E8AF80").s().p("ACwDhIgHhFQgDgcAAgYIABgSQADgtAMgiQANgbACgKIAGgUQABgKgEgLQgEgKgIgLIgVgbIAAAAQgyg9g5giQg6giANgGIgCAAQgBgIgGglIgHgrQACAaABAXQACAogJADQhYAMh4gaQgLgBgPgGIBLAFQBXgHA+gzQACAAACgGQACgOgGggIAPAUQAPAYAAASQgEBJAuAMQAMADAPACIAOAEIAKAHQBAAvAUAUQAnAlAHAaQALApgtBeQgNAeAABkQABBlAOBeQgThJgLhPg");
	this.shape_4.setTransform(123.3,195.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9F5F2").s().p("Ag3AyQgFgEgDgEQgGgJAEgNQAEgNASgSQAQgSAGgDQAKgFAZgHQAigJAPACIAEABQADACgEAIIgNAZQgOAagCAIQgCAKgOALQgOAJgIABIgnACQgNAAgCgCg");
	this.shape_5.setTransform(100.6,154.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D69365").s().p("Ag2AyQgGgEgDgEQgGgJAEgNQAEgNASgSQAQgSAHgDQAKgFAYgHQAigJAPACIAEABQADACgEAIIgNAaQgNAZgCAJQgCAJgPALQgOAJgIABIgnACQgNAAgBgCg");
	this.shape_6.setTransform(100.9,154.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D69365").s().p("AAAACQAAgUgEgaIAHArQAGAiAAAIIgSAEQAKgDgBgog");
	this.shape_7.setTransform(123.6,165.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F4D8C6").s().p("AHxSZIhvjtQgMgbgNgPQgSgVgXgCIgKAAQgUABg7ALQg3AKgrAJIgHACIgDABIADgBIAAAAIA7gVQAhgOAUgNIARgOQAvgrgUg+IgThOQgIgvgNhoIgFgpIgUhdIgGgWIgziRQgLgdgUgwIgLgWIgLgWIgggzIgLgQIhThWQgTgSgTgRIgNgLIgDgCIgFgGIhHhIQgggegigcIgmgfIgDgBIgXgSIhag2QgqgbgcgEQgNgDgGgFIgDgGQgCgGABgGIABgBIADgIIADgEIABgBIABgDIABgCQADgNgIgKIgCgCIgGgFIgHgEIgNgFQgXgGgZAHIAAABIgBAAQgWAGgVARIACgCQATgXAXgMIAAgBQAagOAcgDQAPgBAJABIAQAFQAWAMAhAjIAZAYQAeAZAaAMIBKA2QAeAVAmAfQAZAXAIAJIAuAmQAxAoALAHIAAABIABAAIAIAGIASATIA8BHQArAyAJAOQgGgZgFggQgCgYgDgRIgBgKIgBgYQgBgQgCgHQgLgtgCgdQgEgjgKgrQgWhegvh2QgxiCh2kIIh4kIQAnAgAoBRQD2H5ASAeQATAfAXA4QAgBOARBHQAPBBATA5IAWBCIAXBNQATBFANBaQBEHGAVAvIA0B+IA/CaIAKAWIBqDyg");
	this.shape_8.setTransform(178.2,184.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D69365").s().p("AgwE9IAAqhQAagGACAAQABAAABABQABAAAAAAQABAAAAABQAAAAABAAIgBAEIgLArQgLAtgBAZQAAAoAGBQQAGBcAHASQAIASAMAFQAJAEAcgBQgLABgMAHQgWAPgDAcQgFAiAGBnQAGBnAFAJQAJALAngjIgRAcQgQAegDAQQgZgVgkgZg");
	this.shape_9.setTransform(153.8,115.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E8AF80").s().p("ABLHKIgvgmQgSgYhQg8QADgRAQgdIAQgdQgmAkgJgMQgHgIgGhnQgGhnAEgiQAEgdAYgMQAMgHALgBQgdABgKgFQgNgEgIgUQgHgSgGhdQgFhPAAgpQAAgYALguIAMgqIAAgEQAAAAAAgBQgBAAAAAAQgBgBgBAAQAAAAgBAAQgDgBgZAHIAAh5QATAkAUBHQAKAjAGAbIgCAlQgBArADAdQAGA1AJA0QAMBHAIAJIAXAVQANALgEABQgIADgPATQgSAYAAAUQAAAiAEA1QAGBCAHAIQACACAVAKQAMAGAAAOQAAAVANA0QAOA7ANAZQAPAeBPBDQgLgHgwgog");
	this.shape_10.setTransform(162.4,118.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D69365").s().p("AA3B3QhrhugnhEQgfg6gkgyQgQgYg4hGIgFgFIDyAAQAlAAAfgRIgOAWQgBAZADAcIAGA3QAHA9AOA8QAsC/BYBtIABABIANAPQhnhXhOhOg");
	this.shape_11.setTransform(133.8,232.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F7C58D").s().p("AE0M4IgTgiIAAgBIgyhZQgXgogMgSQgRgagSgYIAAAAIgDgEIgfglIgBgBQghglgkgeIAAAAIgBAAIgHgEIgBgBIgFgCIgJgFQgcgRgagaIgZgYIgNgPIgBgCQhNhfgsiiQgOhegBhjQAAhkANgdQAthhgLgpQgHgagnglQgQgQhEgzQgEgEgGgDIgOgDQgNgCgOgEQgqgLAAg8IAAgTIgBgDQgCgRgPgUIgOgRQAGAhgCANQgBAHgDAAQg+AzhXAGIhLgEQg1gTgOgzQgMgrAjglIAlgbIAhgMQApgLAsACQAMgFASgMQAmgYAggmIAAAAQAWgRAWgHIAAAAIABgBQAYgHAXAGIAOAFIAHAEIAGAFIACADQAIAKgEAMIgBACIgBADIgBABIgCAEIgEAIIAAACQgCAGACAFIAEAGQAGAFANADQAbAEArAcIASAMIA7AhIAEAEIAIAFIAYARIACACIAmAeQAiAdAeAeIBIBHIAFAGIAQAOQASAQATASIBWBZIALAPIAUAgIAhBAQAVAvALAdIAyCQIAGAVIAVBdIAFAqQAMBnAJAwIASBNQAUA+gvArIgRAOQgUANghAPIg6AUIgBAAIgGACIAAAAIADgBIADAAIAIgCQAwgLAxgJQA8gMATAAIALAAQAjABAUAKQAYAMAUAfIAMAVQAeA3A7Ctg");
	this.shape_12.setTransform(161.3,220.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E8AF80").s().p("Ag+hKQANAFArAYQAjAOAAgoQARAoAKAxQALAzgHAHQgRgbhph7g");
	this.shape_13.setTransform(185.1,178.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F7C58D").s().p("ADFE7IgPgaIgZglIg5hHQgOAAgIgBQgKgCgLgGQgWgMgtguQgagag0hfQg1hngMgWQgHgLgXg4QgehHgOgfIgFgNIBgCyQBmCvA0AtIBEA6QAYAQAugKQgQAHANAcQAJAWAjAvIADAFIAAAAIAiA6g");
	this.shape_14.setTransform(146.4,271);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F7C58D").s().p("ABcHGIgTgTIgIgGIgBAAQhOhDgPgfQgNgZgOg6QgMg1AAgUQgBgOgOgHQgUgKgCgCQgIgIgGhCQgDg0AAghQAAgUARgYQAPgVAIgDQAFgBgOgLIgXgVQgIgJgMhHQgJg0gGg0QgDgeABgrIACglQgGgbgKgjQgUhGgTglIAAgJIAEADIABABIB4EIQBzEIA0CAQAvB3AWBeQAMAzACAbQAEAlAJAlQABAGABAQIACAZIABAJQADASACAXQAFAgAGAbQgMgShlh3g");
	this.shape_15.setTransform(169.5,125.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E8AF80").s().p("ADZHmIgdg6IAAgBIgDgFQgtg3gIgPQgIgPAKgNQgsAJgagSQghghgfgbQgugmhdihIhZikIAAAAIgBgBIiAkcQgIgSgOgUQgcgpglgNIC2AAQANAJAMAPQAuA3BKCCQA+BuAZA6QAYA1BaBoIABACIAmAnQAcAaAcARIAJAFIAFADIADABIAFADIAAAAIABAAQAaASArAxIABABIABABIAeAkIADAEIAAAAQAnA0AgA3IAMAVQAQAdAOAcIABAAIAGAMIAAABIATAig");
	this.shape_16.setTransform(147.6,254);

	this.instance = new lib.Path_23();
	this.instance.setTransform(158.8,222,1,1,0,0,0,68.4,80.6);
	this.instance.alpha = 0.48;

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.setTransform(133,247,1,1,0,0,0,91.9,223.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#455A64").s().p("Am7MUIAA4nIN3AAIAAYng");
	this.shape_17.setTransform(99.9,102.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#90A4AE").s().p("AgcA7QAWgBAPgPQAQgRAAgYIAAgDQAAgYgQgQQgPgRgXAAIADAAQAYAAAPARQARAQAAAYIAAADQAAAYgRARQgPAQgYAAg");
	this.shape_18.setTransform(106.6,193.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E5E8EA").s().p("AgmA7QgXAAgRgQQgRgRAAgYIAAgDQAAgYARgQQARgRAXAAIBNAAQAYAAARARQAQAQAAAYIAAADQAAAYgQARQgRAQgYAAg");
	this.shape_19.setTransform(99.5,193.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A3A3A3").s().p("AgDhLQADAAABACQADADAAAEIAACFQAAAEgDADQgBACgDAAg");
	this.shape_20.setTransform(149.4,42.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B0BEC5").s().p("AgqBEQgaAAgTgTQgSgTgBgaIAAgGQABgbASgSQATgUAaABIBTAAQAbAAAUATQASATAAAbIAAAFQAAAagSATQgTATgbAAgABOgpQAQAQAAAYIAAAJIAAABIAAADIgBACIgEAMIgDAGIgCADIAAAAIgGAHIgCACQgJAIgHADIgDABIgMADIgCABIADAAIALgCIACgBIACgBIAHgDIAFgDIAHgGIAGgHIACgBIADgHQADgDACgHIABgEIAAgCIABgEIAAgEIAAgDIAAgDQABgYgSgQQgQgRgYAAIgDAAQAXABARAQg");
	this.shape_21.setTransform(99.8,193.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#616161").s().p("AhJAIQgDABgDgDQgDgDAAgDQAAgCADgDQADgCADgBICTAAQAEABACACQADADAAACQAAADgDADQgCADgEgBg");
	this.shape_22.setTransform(100,11.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#616161").s().p("AgCASQgLgCgDgKQgEgIAHgIQAIgIAIABQALADADAJQAEAIgHAJQgGAGgIAAgAgMgKQgGAIADAHQADAJAKADQAIABAHgHQAGgHgDgIQgEgKgJgBIgDgBQgGAAgGAGg");
	this.shape_23.setTransform(83.8,11.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#616161").s().p("AgCARQgKgBgDgKQgEgIAHgIQAGgIAJACQAKACADAKQAEAHgHAIQgFAGgIAAIgCAAg");
	this.shape_24.setTransform(83.8,11.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Am9MWIAA4rIN7AAIAAYrgAm7MUIN3AAIAA4nIt3AAg");
	this.shape_25.setTransform(99.9,102.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#ECEFF1").s().p("AlWP7IgCAAQg6gCgngqQgogqAAg5IAA7iQAAg3AmgmQAngnA3AAIK5AAIABAAIAGAAQA1ADAlAnQAlAmAAA2IAAbgQAAA8grAqQgRAQgUALIgPAGQgXAIgaAAgAm8MVIN4AAIAA4qIt4AAg");
	this.shape_26.setTransform(99.9,102.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BDBDBD").s().p("AlWQCQgVAAgWgGIgQgGIgRgJIgUgOIgKgKIAAAAIgFgFIgLgPIgCgDIgDgGIgLgXIgFgSIAAgCIgBgDIAAgDIgCgQIAA72IABgIIAAgCIABgHIAEgRIAMgbIASgYIAJgKIARgNIAWgMIAMgEIAHgCIACgBIABAAIANgCIABAAIADgBIADAAIAEAAILBAAQA7AAAqApQApAqAAA6IAAbrIgBACIAAAGIAAACIgCAPIgBADIAAAEIgDAKIgIASIgOAWIgCACIgIAKIgDADIgPANIgSAMIgBAAIAAAAIAAABIgCAAIgBABIgBAAIgBABIgBAAIgCABIgBABIgCABIgDABIgBAAIgBAAIgJAEIAAAAIgMADIgBAAIgDABIgBAAIgDAAIgBABIgDAAIgLABIgBAAgAm7vSQgnAmAAA3IAAbiQAAA5AoAqQAoApA4ADIADAAIKqAAQAXAAAYgIIAOgGQAUgKARgPQAVgUAMgaQAMgcAAgeIAA7gQAAg2gmgnQglgmg2gDIq+AAQg3AAgnAng");
	this.shape_27.setTransform(100,102.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#222323").s().p("AlWQCQg9AAgrgqQgqgrAAg8IAA7pQAAg5AogoQApgoA5AAIK5AAQA7AAAqApQApAqAAA6IAAbnQAAA7gqAqQgqAqg8AAg");
	this.shape_28.setTransform(100,102.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_29.setTransform(39.3,162.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_30.setTransform(52,167.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E8AF80").s().p("AgKBiQgggPgXgTQAdAVAKhgQAEgmgFgaQgEgdgMAEQAegLAuAFQA0AEgdBpQgPA1gZA1QgLgEgPgHg");
	this.shape_31.setTransform(51,108.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F7C58D").s().p("AgGBRIgBgBQgSgQgLgSQgWgkAQgiQAJgVARgPIALgKQAGgIAMgEQAVgEAKAdQAIAbgEAkQgEAmgOAWQgLASgPAAQgEAAgGgDg");
	this.shape_32.setTransform(45.1,106.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E8AF80").s().p("AACB8QgkAAgJgBQglgGgMgEQghgMgMgbQAWAeBMABQBJAAAWgaQAbgfAAgjQADgqgHglQgIgmgOgKQAjgOAtAHIgKBaIABAiQgEArgTAdQgQAcgpANQgXAHgWABg");
	this.shape_33.setTransform(39,149.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D69365").s().p("AgWB2IhkACQAXgCAWgHQApgNARgcQASgdACgpIgBgkIALhaQAmAGApAWQAUAKANAKIhXDNQgmgJgUAAg");
	this.shape_34.setTransform(51.6,150.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F7C58D").s().p("AgHBuQhNgBgVgeIAAgBQgNgfAEgjQAEgcAMgOQAKgMAJgEQAJgFAQgBQASgDAVgHQAegMA/gfIALgEQAOAKAIAmQAHAlgDAqQgBAjgaAfQgWAahHAAIgCAAg");
	this.shape_35.setTransform(35.8,149.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E8AF80").s().p("AhYBRQgggigGgbQACAKASARQAaAZAhgCQAjgBAfgNQAbgLAHgJQAOgSAHglQAJg4gighIAQgEQAVgEAjACQAMADgKBBQgLA7gLAWQgPAhgsAbQgVAOgTAHQg+gEgcgfg");
	this.shape_36.setTransform(39.9,178.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D69365").s().p("AhKBzQATgHAVgOQAqgbAPghQALgWALg7QAKhBgMgDIAgACIAADJQghASgeAEQgcAGggAAIgagBg");
	this.shape_37.setTransform(47.7,179);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F7C58D").s().p("AhQBCQgRgRgDgKQgFgUALgWQAGgPAPgHIAegJQAHgCAsgXQAugWAVgIQAjAhgKA4QgGAlgOASQgIAJgaALQgiANghABIgDABQgfAAgZgYg");
	this.shape_38.setTransform(37.3,177);

	this.instance_2 = new lib.CompoundPath_2();
	this.instance_2.setTransform(123.9,206.3,1,1,0,0,0,123.9,185.5);
	this.instance_2.alpha = 0.328;

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#32A1BF").s().p("AiiAoIBvgoIABAAIAzgTIAAgBIAygSIABgBIAKAYIACgBIgEgGIBBgQIAmBOg");
	this.shape_39.setTransform(194.1,298.6);

	this.addChild(this.shape_39,this.instance_2,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.instance_1,this.instance,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,288.2,470.2);


(lib.Símbolo5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_224 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(224).call(this.frame_224).wait(1));

	// Capa 7
	this.instance = new lib.Símbolo11();
	this.instance.setTransform(484.5,267.7,0.234,0.234,0,0,0,38.1,31.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(182).to({_off:false},0).to({scaleX:1,scaleY:1,y:267.8,alpha:1},39,cjs.Ease.get(1)).wait(4));

	// Capa 6
	this.instance_1 = new lib.Símbolo9();
	this.instance_1.setTransform(481.8,123.4,0.181,0.181,0,0,0,34,40.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150).to({_off:false},0).to({regX:34.1,regY:40.3,scaleX:1,scaleY:1,alpha:1},39,cjs.Ease.get(1)).wait(36));

	// Capa 5
	this.instance_2 = new lib.Símbolo8();
	this.instance_2.setTransform(348.4,46.3,0.249,0.249,0,0,0,211.8,46.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(129).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},39,cjs.Ease.get(1)).wait(57));

	// Capa 4
	this.instance_3 = new lib.Símbolo7();
	this.instance_3.setTransform(224,121.7,0.21,0.21,0,0,0,224,38.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(96).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},39,cjs.Ease.get(1)).wait(90));

	// Capa 1
	this.instance_4 = new lib.Símbolo6();
	this.instance_4.setTransform(222.5,278.1,0.406,0.406,0,0,0,222.5,40.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(66).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},39,cjs.Ease.get(1)).wait(120));

	// Capa 2
	this.instance_5 = new lib.Símbolo3();
	this.instance_5.setTransform(396.9,982.8,1.605,1.605,-10,0,0,144.1,235);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:235.1,scaleX:1,scaleY:1,rotation:0,y:456.2},42,cjs.Ease.get(1)).wait(183));

	// Capa 3
	this.instance_6 = new lib.Símbolo4();
	this.instance_6.setTransform(352.8,195.4,0.139,0.139,0,0,0,151.5,151.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(34).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},33,cjs.Ease.get(1)).wait(158));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(109.6,609.9,558.6,764.7);


// stage content:



(lib.lip01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		//Creación de pointer
		var frequency = 100;
		stage.enableMouseOver(frequency);
		
		
		var var_personaje = this.personaje;
		var x_personaje = this.personaje.x;
		var y_personaje = this.personaje.y;
		
		
		
		var boton = "";
		var globo = "";
		
		
		var contador = true;
		
		var velocidad = 300;
		var velocidad_2 = 600;
		var velocidad_3 = 150;
		var velocidad_4 = 150;
		
		var pagina = "";
		
		var activar_over_cerrar = true;
		
		var numero_arreglo = "";
		var pops_numero_arreglo = "";
		
		var activar_over = true;
		
		var var_enlace = this.enlace;
		
		/////////////////////VAR LIPSYNC////////////////////////////////
		
		var frequency = 100;
		stage.enableMouseOver(frequency);
		
		var audio1 = createjs.Sound.play("sounds/17.mp3");
		//var audio1 = createjs.Sound.createInstance("sounds/m1_01.mp3");
		//audio1.play({offset:1, loop:2, pan:0.5}); 
		//audio1.stop();
		this.addChild(audio1);
		
		var var_boca1 = this.boca1;
		var var_boca2 = this.boca2;
		var var_boca3 = this.boca3;
		var var_boca4 = this.boca4;
		var var_boca5 = this.boca5;
		var var_boca6 = this.boca6;
		var var_boca7 = this.boca7;
		var var_boca8 = this.boca8;
		
		
		var bocas = [
			var_boca1,
			var_boca2,
			var_boca3,
			var_boca4,
			var_boca5,
			var_boca6,
			var_boca7,
			var_boca8
		]
		
		var var_ojos_abiertos = this.ojos_abiertos;
		var var_ojos_cerrados = this.ojos_cerrados;
		var duracion_ojos = 100;
		
		var var_ceja_derecha = this.ceja_derecha;
		var y_ceja_derecha = var_ceja_derecha.y;
		var y_ceja_derecha_2 = y_ceja_derecha - 3;
		
		var var_ceja_izquierda = this.ceja_izquierda;
		var y_ceja_izquierda = var_ceja_izquierda.y;
		var y_ceja_izquierda_2 = y_ceja_izquierda - 3;
		
		var var_boton_audio = this.boton_audio;
		
		var iniciar = true;
		
		//////////////////////////////////////////////////////////
		
		
		
		/////////////////////LYPSINC ////////////////////////////////////////
		
		
		setInterval(function () {
			createjs.Tween.get(var_ojos_abiertos).to({alpha:0},duracion_ojos);
			createjs.Tween.get(var_ojos_cerrados).to({alpha:1},duracion_ojos );
			createjs.Tween.get(var_ojos_cerrados).wait(duracion_ojos).to({alpha:0},duracion_ojos);
			createjs.Tween.get(var_ojos_abiertos).wait(duracion_ojos).to({alpha:1},duracion_ojos);
		}, 3000);
			
		
		setInterval(function () {
			var azar_2 = Math.floor((Math.random() * 20) + 1)
			if (var_ceja_izquierda.y == y_ceja_izquierda && azar_2 < 10){
				createjs.Tween.get(var_ceja_izquierda).to({y:y_ceja_izquierda_2},duracion_ojos);
			} else{
				createjs.Tween.get(var_ceja_izquierda).to({y:y_ceja_izquierda},duracion_ojos);
			}
		}, 4000);
		
		setInterval(function () {
			var azar_3 = Math.floor((Math.random() * 20) + 1)
			if (var_ceja_derecha.y == y_ceja_derecha && azar_3 < 10){
				createjs.Tween.get(var_ceja_derecha).to({y:y_ceja_derecha_2},duracion_ojos);
			} else{
				createjs.Tween.get(var_ceja_derecha).to({y:y_ceja_derecha},duracion_ojos);
			}
		}, 4000);
		
		var iniciar = true;
		
		this.addEventListener("tick", Lipsync.bind(this));
		
		function Lipsync() {
		
			posicion1 = audio1.getPosition();
			var duracion1 = audio1.getDuration();
			if (posicion1 != 0 && posicion1 > duracion1-100) {
				
			}
				
			if (iniciar) {
				iniciar = false;
				for (i = 0; i < bocas.length; i++) { 
				bocas[i].alpha = 0;
				}
				if ((0 <= posicion1  && posicion1 < 321) || (1063 <= posicion1  && posicion1 < 1237) ||(3134 <= posicion1  && posicion1 < 3637)  ||(10837 <= posicion1  && posicion1 < duracion1) ) {
					var_boca3.alpha = 1; 
				} else {
					var azar = Math.floor((Math.random() * 60) + 1);
					if(azar<10){
						var_boca1.alpha = 1;
					} else if (azar<20){
						var_boca2.alpha = 1;
					} else if (azar<30) {
						var_boca4.alpha = 1;
					} else if (azar<40) {
						var_boca5.alpha = 1;
					} else if (azar<50) {
						var_boca6.alpha = 1;
					} else if (azar<=60) {
						var_boca7.alpha = 1;
					} else if (azar<=70) {
						var_boca8.alpha = 1;
					} 
				}
				setTimeout(function(){
					iniciar = true;
				}, 45);
			}
		}
					
		////////////////////////////
		
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Items
	this.instance = new lib.Símbolo5();
	this.instance.setTransform(532.9,467.9,1,1,0,0,0,349.4,345.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(1));

	// 2
	this.boca2 = new lib.boca2();
	this.boca2.setTransform(1111.8,197,0.08,0.079,-3.3,0,0,145,55.2);
	this.boca2.alpha = 0;
	this.boca2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.boca2).wait(28).to({_off:false},0).wait(2));

	// 3
	this.boca3 = new lib.boca3();
	this.boca3.setTransform(1111.6,197,0.069,0.069,0,-3.3,-3.4,162.4,47);
	this.boca3.alpha = 0;
	this.boca3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.boca3).wait(28).to({_off:false},0).wait(2));

	// 4
	this.boca4 = new lib.boca4();
	this.boca4.setTransform(1111,197.5,0.093,0.093,0.6,0,0,107.9,66.5);
	this.boca4.alpha = 0;
	this.boca4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.boca4).wait(28).to({_off:false},0).wait(2));

	// 5
	this.boca5 = new lib.boca5();
	this.boca5.setTransform(1111.1,197.5,0.078,0.073,-3.4,0,0,143.5,91.5);
	this.boca5.alpha = 0;
	this.boca5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.boca5).wait(28).to({_off:false},0).wait(2));

	// 6
	this.boca6 = new lib.boca6();
	this.boca6.setTransform(1111,197.9,0.09,0.089,0,-3.3,-3.4,83.5,90.3);
	this.boca6.alpha = 0;
	this.boca6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.boca6).wait(28).to({_off:false},0).wait(2));

	// 7
	this.boca7 = new lib.boca7();
	this.boca7.setTransform(1112,198.1,0.085,0.071,-3.3,0,0,147.5,84.2);
	this.boca7.alpha = 0;
	this.boca7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.boca7).wait(28).to({_off:false},0).wait(2));

	// 8
	this.boca8 = new lib.boca44();
	this.boca8.setTransform(1111.6,195,0.738,0.738,2.2,0,0,20.4,12.3);
	this.boca8.alpha = 0;
	this.boca8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.boca8).wait(28).to({_off:false},0).wait(2));

	// OjosCerrados
	this.ojos_cerrados = new lib.ojos_cerrados();
	this.ojos_cerrados.setTransform(1113.9,169.6,0.738,0.738,-12.8,0,0,36.5,9);
	this.ojos_cerrados.alpha = 0;
	this.ojos_cerrados._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ojos_cerrados).wait(28).to({_off:false},0).wait(2));

	// CejaDerecha
	this.ceja_derecha = new lib.ceja_derecha();
	this.ceja_derecha.setTransform(1458.4,161.8,0.745,0.745,-4.8,0,0,15,5.4);

	this.timeline.addTween(cjs.Tween.get(this.ceja_derecha).to({regY:5.3,scaleX:0.74,scaleY:0.74,rotation:-12.8,x:1095.5,y:162.5},28,cjs.Ease.get(0.99)).wait(2));

	// CejaIzquierda
	this.ceja_izquierda = new lib.ceja_izquierda();
	this.ceja_izquierda.setTransform(1493.7,161.3,0.745,0.745,-4.8,0,0,15.5,3.7);

	this.timeline.addTween(cjs.Tween.get(this.ceja_izquierda).to({regY:3.8,scaleX:0.74,scaleY:0.74,rotation:-12.8,x:1130,y:157.2},28,cjs.Ease.get(0.99)).wait(2));

	// Bocas
	this.boca1 = new lib.boca1();
	this.boca1.setTransform(1474.9,202.4,0.745,0.745,-4.8,0,0,17.4,7);

	this.timeline.addTween(cjs.Tween.get(this.boca1).to({scaleX:0.74,scaleY:0.74,rotation:-12.8,x:1117.3,y:200.1},28,cjs.Ease.get(0.99)).wait(2));

	// OjosAbiertos
	this.ojos_abiertos = new lib.ojos_abiertos();
	this.ojos_abiertos.setTransform(1475.7,170.9,0.745,0.745,-4.8,0,0,36.4,9);

	this.timeline.addTween(cjs.Tween.get(this.ojos_abiertos).to({scaleX:0.74,scaleY:0.74,rotation:-12.8,x:1113.7,y:169},28,cjs.Ease.get(0.99)).wait(2));

	// Personaje
	this.personaje = new lib.Símbolo10();
	this.personaje.setTransform(1375.5,105.3,0.598,0.598,0,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.personaje).to({x:1022.4},28,cjs.Ease.get(0.99)).wait(2));

	// personaje
	this.instance_1 = new lib.Símbolo12();
	this.instance_1.setTransform(1128.5,379.5,0.689,0.689,0,0,0,196.2,221.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},13).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1520.5,725);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;