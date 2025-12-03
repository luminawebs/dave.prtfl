(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 35,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/11.mp3", id:"11"},
		{src:"images/CopiadeSintítulo1fw.png", id:"CopiadeSintítulo1fw"},
		{src:"images/flash0aiActivos.png", id:"flash0aiActivos"},
		{src:"images/Mapadebits1.png", id:"Mapadebits1"},
		{src:"images/Mapadebits2.png", id:"Mapadebits2"},
		{src:"images/Mapadebits3.png", id:"Mapadebits3"},
		{src:"images/Mapadebits4.png", id:"Mapadebits4"},
		{src:"images/Mapadebits5.png", id:"Mapadebits5"},
		{src:"images/Mapadebits6.png", id:"Mapadebits6"}
	]
};



// symbols:



(lib.CopiadeSintítulo1fw = function() {
	this.initialize(img.CopiadeSintítulo1fw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,79);


(lib.flash0aiActivos = function() {
	this.initialize(img.flash0aiActivos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,15);


(lib.Mapadebits1 = function() {
	this.initialize(img.Mapadebits1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,73);


(lib.Mapadebits2 = function() {
	this.initialize(img.Mapadebits2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,73);


(lib.Mapadebits3 = function() {
	this.initialize(img.Mapadebits3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,495,76);


(lib.Mapadebits4 = function() {
	this.initialize(img.Mapadebits4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,476,84);


(lib.Mapadebits5 = function() {
	this.initialize(img.Mapadebits5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,476,84);


(lib.Mapadebits6 = function() {
	this.initialize(img.Mapadebits6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,476,84);


(lib.Símbolo14 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.CopiadeSintítulo1fw();
	this.instance.setTransform(-352,21);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgnRAICQh3AAhuhTQg0gnhlhwIkPlDIM8AAQgngegpgsIhChHIkOlFMBchAAAIkOFFQgoArl0GpQhlBwg0AnQhuBTh3AAg");
	this.shape.setTransform(-127.2,57.1,1,1,0,0,180);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-444,5.7,633.5,102.9);


(lib.Símbolo12 = function() {
	this.initialize();

	// Items
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004F91").s().p("AgWAXQgKgJAAgOQAAgMAKgKQAJgKANAAQANAAAKAKQAKAKAAAMQAAAOgKAJQgKAKgNAAQgNAAgJgKg");
	this.shape.setTransform(-1.3,30.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#004F91").ss(3).p("AAegvIgwAxIAsAu");
	this.shape_1.setTransform(0.6,308);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#004F91").ss(3).p("AAegvIgwAxIAsAu");
	this.shape_2.setTransform(0.6,219.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#004F91").ss(3).p("AAegvIgwAwIAsAv");
	this.shape_3.setTransform(0.6,122.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#004F91").ss(3).p("ACyAAIljAA");
	this.shape_4.setTransform(16.5,219.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#004F91").ss(3).p("ACyAAIljAA");
	this.shape_5.setTransform(16.5,122.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#004F91").ss(3).p("Ai41pIDSAAQA8AAAqA1QAqA0AABKMAAAAltQAABKgqA0QgqA1g8AAIjSAA");
	this.shape_6.setTransform(17.2,169.4);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.7,23.5,40.5,291.9);


(lib.Símbolo11 = function() {
	this.initialize();

	// Items
	this.instance = new lib.Mapadebits6();
	this.instance.setTransform(10.3,38.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(10.3,38.2,476,84);


(lib.Símbolo9 = function() {
	this.initialize();

	// Items
	this.instance = new lib.Mapadebits5();
	this.instance.setTransform(8.8,24.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(8.8,24.8,476,84);


(lib.Símbolo8 = function() {
	this.initialize();

	// Items
	this.instance = new lib.Mapadebits4();
	this.instance.setTransform(8.7,21.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(8.7,21.7,476,84);


(lib.Símbolo7 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Mapadebits3();
	this.instance.setTransform(1.1,21.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.1,21.2,495,76);


(lib.Símbolo4 = function() {
	this.initialize();

	// Items
	this.instance = new lib.Mapadebits1();
	this.instance.setTransform(-14.4,-1.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.4,-1.3,223,73);


(lib.Símbolo3 = function() {
	this.initialize();

	// Items
	this.instance = new lib.Mapadebits2();
	this.instance.setTransform(-12.9,-1.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.9,-1.2,276,73);


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


(lib.Path = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D5AEB1","#D89B9E"],[0.035,1],-11.3,2.3,11.3,-2.2).s().p("Ag0CVQgsgxgPhOQgQhMAWg+QAWg+AvgJQAtgKAsAyQAsAwAPBOQAQBMgWA+QgWA9gvAKQgIACgHAAQglAAglgpg");
	this.shape.setTransform(11.9,19);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23.9,38);


(lib.Path_1 = function() {
	this.initialize();

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D5AEB1","#D89B9E"],[0.035,1],-11.3,2.3,11.3,-2.2).s().p("Ag0CVQgsgxgPhOQgQhMAWg+QAWg+AvgJQAtgKAsAyQAsAwAQBOQAPBMgWA+QgXA9gvAKQgHACgIAAQgkAAglgpg");
	this.shape_1.setTransform(11.9,19);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23.9,38);


(lib.Path_2 = function() {
	this.initialize();

	// Capa 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#D5AEB1","#D89B9E"],[0.035,1],-9.6,1.9,9.7,-1.9).s().p("AgsCUQglgwgNhOQgNhMASg+QAUg+AngJQAmgJAlAxQAmAwAMBOQANBMgTA+QgSA+goAJQgGABgHAAQgfAAgfgpg");
	this.shape_2.setTransform(10.1,19);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.2,38);


(lib.Path_3 = function() {
	this.initialize();

	// Capa 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#D5AEB1","#D89B9E"],[0.035,1],-9.6,1.9,9.7,-1.9).s().p("AgsCUQglgwgNhOQgNhMASg+QAUg+AngJQAmgJAlAxQAmAwAMBOQANBMgTA+QgSA+goAJQgGABgHAAQgfAAgfgpg");
	this.shape_3.setTransform(10.1,19);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.2,38);


(lib.Path_4 = function() {
	this.initialize();

	// Capa 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#D5AEB1","#D89B9E"],[0.035,1],-11.3,2.3,11.3,-2.2).s().p("Ag0CUQgsgwgPhOQgQhMAWg+QAXg+AugJQAtgJAsAxQAsAwAQBOQAPBMgWA+QgXA+gvAJQgHABgIAAQgkAAglgpg");
	this.shape_4.setTransform(11.9,19);

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23.9,38);


(lib.Path_5 = function() {
	this.initialize();

	// Capa 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#D5AEB1","#D89B9E"],[0.035,1],-7.7,1.6,7.8,-1.5).s().p("AgiCVQgegxgKhOQgKhMAPg+QAPg+AfgJQAdgJAdAxQAeAwAKBOQAKBMgPA+QgPA+gfAJIgJABQgYAAgZgog");
	this.shape_5.setTransform(7.9,19);

	this.addChild(this.shape_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16,38);


(lib.Path_32 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494949").s().p("AAwCqQhjgmgXgRQgpgigig8QhFh0Adh7QAwBGB2AtQA/AZB1AjQACAVAVB3QAUBxgCAJQgtgIhpgpg");
	this.shape.setTransform(19.9,21.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,39.8,43.9);


(lib.Path_27 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494949").s().p("AhuGYQANovgQheQgHgsiwgSQhdgKiPgLQAGgSAuhjQAvhnARgbQBkATBpAQQDQAhA3gJQB7gTBghrQBghsBijnQAiAOAUAqQAWAwgMA7QgTBZiFDuQgdA1jZFyQgzBVgbBNQgqB9AdBVQAWBfBaC6QBzDtANAhQizBZjbAmQgGgXAOong");
	this.shape.setTransform(53.3,98.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,106.7,196.5);


(lib.Path_1_1 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B4B4B4").s().p("AgmECQgcgBAVgcQALgQgLgJQgGgFgYgIQg5gSgFgeQgEgTALgRIAUgaQAUgag1gZQghgQgDgPQgDgOAVgVQBNg8AzgzQA+g/hogbQg1gNhCgBQA+gIBMADQCYAFBMAyQBJAwibA9QgRAHhnAkQhBAWgIAKQgQARAyALQBCAPAMATQAKANgTAUQgJAJglAcQgeAVgDAKQgGAOAkADQA/AHgFAqQgDAVgNAUQgQAFgNAAIgCAAg");
	this.shape.setTransform(19.5,25.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,39.1,51.7);


(lib.Group = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AADAuQgPgBgNgPQgNgOgCgRQgCgTALgNQALgNASABQAPABANAPQAOAOABARQACAUgLANQgKALgPAAIgEAAg");
	this.shape.setTransform(4.2,4.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,8.4,9.3);


(lib.Path_6_0 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhkDFQABg4AEgcQAGgwAZgaQAJgJgNg4QgNg8AIgLQAOgQA/gwQAvgkALgmQAJgdAUguIAehKIhLE9IhWC9IAzDtQgLACh5AYQAOhIAHh0g");
	this.shape.setTransform(12.2,38.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.4,77.2);


(lib.Path_6 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgJFnIAzjtIhXi9IhLk9IAfBKQATAuAJAdQALAmAvAkQA+AwAOAQQAKALgOA8QgNA4AIAJQAaAaAGAwQAEAcABA4QAIB4AMBEQh2gYgMgCg");
	this.shape.setTransform(12.2,38.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.4,77.2);


(lib.Path_1_0 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ACRDZQAbiGAEhoQAGh5gGiLQhDAHhdABIhWABQgzgBgmgEQgagDgmgLIg/gTIgIiPIIDAAIAAABIADADIAEAHQAXAmARBVQAPBLAJBoQAKArgdDSQgXCjghCxIh9ABQAsi/AJgug");
	this.shape.setTransform(29.6,45.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,59.1,90.9);


(lib.Path_1_2 = function() {
	this.initialize();

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AjXHFQgiixgWijQgejSAKgrQAIhpAQhKQAShWAWglIAFgHIACgDIAAgBIIDAAIgJCPIg+ATQgmALgaADQgnAEgxABIhXgBQhdgBhEgHQgFCLAFB5QAFBoAbCGQAKAyArC7g");
	this.shape_1.setTransform(29.5,45.4);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,59,90.9);


(lib.Group_5 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAdgXIgUAEIgggNIAvgIIhSgTIgEgIIBZADIg6grIgKgYIBoBIIhbCiIgiAdg");
	this.shape.setTransform(6.3,13.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12.7,26.5);


(lib.Group_1 = function() {
	this.initialize();

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AEPAJQkPgFkOACQgIAAAAgGQAAgHAIAAQEGgCEXAEQAIABAAAFQgBAIgHAAg");
	this.shape_1.setTransform(27.9,0.9);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,55.9,1.9);


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


(lib.Símbolo13 = function() {
	this.initialize();

	// Modo de aislamiento
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181F21").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(114.4,-136.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjNAPIGagmIABAJImbAmg");
	this.shape_1.setTransform(105.9,-135.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#181F21").s().p("AgGAIQgEgEAAgEQAAgDAEgDQADgEADAAQAEAAAEAEQADADAAADQAAAEgDAEQgEADgEAAQgDAAgDgDg");
	this.shape_2.setTransform(114.4,-136.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#858585").s().p("Ag5AdIBchLIAFAVIASAMIhoA8g");
	this.shape_3.setTransform(103.2,-128.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ACACAC").s().p("AghAZIgFgYIAxgkIAcAmIg1Aig");
	this.shape_4.setTransform(110.6,-133.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#969696").s().p("AAAB2IgMAPIAIkJIALAAIAFEJg");
	this.shape_5.setTransform(114.7,-158.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BDBDBD").s().p("AgOA8IADhoIALgPIAOAPIABBog");
	this.shape_6.setTransform(114.6,-140.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2E2E2").s().p("AijEiQhAgvglhGQgmhIABhTQAAiIBihjQBihiCJAAQBEAABAAbQBAAuAlBHQAlBIAABSQAACJhiBiQhjBjiIgBQhFAAg/gag");
	this.shape_7.setTransform(117.3,-135.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DDD9DE").s().p("AjQDIQg5hVAAhmQAAiJBjhiQBihjCJAAQBsAABZBAQhAgbhEAAQiJAAhiBjQhiBiAACJQgBBSAmBJQAlBGBAAvQhbgng4hTg");
	this.shape_8.setTransform(107.1,-138.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BDBDBD").s().p("Aj8D9QhqhpAAiUQAAiUBqhpQBphpCTAAQCUAABpBpQBqBpAACUQAACUhqBpQhpBqiUAAQiTAAhphqg");
	this.shape_9.setTransform(114,-137.2);

	this.instance = new lib.Group();
	this.instance.setTransform(279.5,-44,1,1,0,0,0,4.2,4.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B2B2B2").s().p("AibAWQgJABgHgIQgHgGAAgJQAAgIAHgHQAGgGAKAAIE3AAQAKAAAGAGQAHAHAAAIQAAAJgHAGQgGAIgKgBg");
	this.shape_10.setTransform(333.3,-23);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#B2B2B2","#E6E6E6"],[0.055,0.961],32.8,0,-32.7,0).s().p("Ai+DUQgKAAgJgGQgIgGgDgKIhplpQgEgQAJgMQAKgMAQAAIHnAAQALAAAIAGQAJAHACAKIBnFoQAEAQgJAMQgKAMgQAAg");
	this.shape_11.setTransform(281.9,-44);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#808080").s().p("AEgDcIhVmPQgDgJgIgHQgJgGgKAAIn4AEIAKgFQAbgQAfAAIHOAAQALAAAJAGQAIAHADAKIBlF1QACAIgDAHQgDAHgHAEIggAQg");
	this.shape_12.setTransform(283.9,-45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8C8C8C").s().p("AkJAWQgJABgIgIQgGgGgBgJQABgIAGgHQAIgGAJAAIISAAQALAAAGAGQAIAHAAAIQAAAJgIAGQgGAIgLgBg");
	this.shape_13.setTransform(291.1,-23);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF8E5B").s().p("A01A1IgIhpMAp7AAAIgFBpg");
	this.shape_14.setTransform(293.1,-16.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E95A3A").s().p("AmzA1IAHhpINgAAIgHBpg");
	this.shape_15.setTransform(467.3,-16.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4F2712").s().p("AhJCxIAAlhICTAAIAAFhg");
	this.shape_16.setTransform(487.1,4.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4F2712").s().p("AjLCxIAAlhIGXAAIAAFhg");
	this.shape_17.setTransform(210.7,-1.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#80808E").s().p("AiMKpIAA1RIEZAAIAAVRg");
	this.shape_18.setTransform(250.7,88.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A1ABB9").s().p("AlWKpIAA1RIKtAAIAAVRg");
	this.shape_19.setTransform(202.2,88.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#80808E").s().p("AhyC4IAAlvIDlAAIAAFvg");
	this.shape_20.setTransform(211.3,6.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4F2712").s().p("AhJCxIAAlhICTAAIAAFhg");
	this.shape_21.setTransform(438.8,5.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#80808E").s().p("AgiNMIAA6XIBFAAIAAaXg");
	this.shape_22.setTransform(487.1,74.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#80808E").s().p("AgiNMIAA6XIBGAAIAAaXg");
	this.shape_23.setTransform(438.9,74.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#7F3400").s().p("AgDAPQgFgHAAgIQAAgHAFgGQADgHAGAAQgGAKAFAKQAGALgFAIIgBADQgFgCgDgFg");
	this.shape_24.setTransform(454,-34.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7F3400").s().p("AgFAAQgFgKAHgKQADABAEAGQAEAHAAAGQAAAIgEAGQgEAGgDABQADgKgFgLg");
	this.shape_25.setTransform(455.6,-34.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#682900").s().p("AgngKQAngCAjgFIAFAbQgpAGgkABg");
	this.shape_26.setTransform(461,-48.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#7F3400").s().p("Ag9AKIAFgbQA4AJA8gCIACAcIgTAAQg3AAgxgIg");
	this.shape_27.setTransform(451.1,-48.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A27855").s().p("AgTgmIAqgFIgKBVIgjACg");
	this.shape_28.setTransform(461.2,-43.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A27855").s().p("AgMgxIAcgCIgKBeQgLAGgKADg");
	this.shape_29.setTransform(460.1,-25.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#773200").s().p("AgQgqIAjgCIgJBXIgcACg");
	this.shape_30.setTransform(460.7,-34.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CB936B").s().p("AgYAYQgLgLAAgNQAAgNALgJQAKgLAOAAQAPAAAKALQALAJAAANQAAANgLALQgKAKgPAAQgOAAgKgKg");
	this.shape_31.setTransform(454.8,-34.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#7F3400").s().p("AgxArIgKhXQA7AGA8gEIgDBWIgsABQggAAgegCg");
	this.shape_32.setTransform(452.9,-34.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CB936B").s().p("AgeCRIgcgKIgdkaICvAAIgBAJIAAADIgsAFIgGERQgTAFgSAAQgOAAgQgDg");
	this.shape_33.setTransform(454.8,-34.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A27855").s().p("AgxAMIgugUQA+gHBGADQAkABAXADIgoAWg");
	this.shape_34.setTransform(455,-49.4);

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.setTransform(458.5,-75.4,1,1,0,0,0,19.6,25.8);
	this.instance_1.alpha = 0.488;

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8EA414").s().p("AA7BBIgMgRIgDgEQgPgUgTgVIgKgKIgCgBIgRACIgUAEIgmAIIgkAJQAFgPAPgRQAPgRAVgMIAkgPIAPgDQAKgBAJACIALAEIAJAFQAIAGANAOIAdAiIAQAbIAHAPIAAAAIABABIAGAQIABADIgDACQgQABgQAAIgUAAg");
	this.shape_35.setTransform(467.9,-74.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#8EA414").s().p("AiCA9IAAgDIABgKQADgPAKgPQAMgSASgLQAUgQATgKQAvgZAxgCQAzgDAfAWQgJAFhBAXQgsAPggAQQgOAHgTAMQgMAIgJAJQgGAGgCAGIgCAEg");
	this.shape_36.setTransform(488.2,-75.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#859911").s().p("ABCB/QgSg7gXgvQgag4grg1QgTgYgXgXIgoglQAbABAdAMQAeANAdAYQAZAWAZAhQAXAeARAiQAYAxAPBCIAIAlIABAOIguAKg");
	this.shape_37.setTransform(466.2,-87.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#7E9D53").s().p("AgKDkIAEg2QAEhBgEg+IgIhKQgGgtgHgfQgThfgFglQAKAKAJANQAIAKALASQASAjAMAhQAMAgALAvIAHAnIAEApQAFBDgKBGIgLA4g");
	this.shape_38.setTransform(475.8,-94.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#8EA414").s().p("AhVDXIAFg2QAGhKANg5QAUhYAlg9IAVggQAJgMAOgPQAWgYAXgSQgGAZgOAhIgcBBQgYA9gQBPQgIAhgQBcIgKA1g");
	this.shape_39.setTransform(484.7,-93.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#859911").s().p("AiFCbIADgTIAAgBIAAgBIAAgBIAEgfIAAgBIAEgbQAHgvANgkIAFgNQAPglAUgdIADgEQAMgRAQgOQASgQARgIQAVgIAVABQATAAASAHQAaAJAZAVQglgBgTAAQgPAAgOADQgPAFgJAGQgVAOgQAeQgRAbgMAgIgKAbQgKAegMAyIgKArQgKADgMACIgOACg");
	this.shape_40.setTransform(491.4,-84.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#8EA414").s().p("AAxBpIgDgJQgGgZgMgdIgKgWIgVgqQgPgYgMgMQgHgJgIgFQgGgGgMgFIgmgVQAXgIAVAAQAOAAAOADQAOAEAPAJQAVAOAVAcQAOAUAKAUIAGAKQAUApAHAxIACAbQgdgDgXgFg");
	this.shape_41.setTransform(462.6,-79.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3B4046").s().p("AgdAJIg9gJIBFgIQBKgHAmAPQgkALgvAAQgRAAgUgCg");
	this.shape_42.setTransform(475.3,-69.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A1ABB9").s().p("AhnDzIAAnlIAQAIQAWAIAXAEQgLCWAUBuQAhCxBoAcg");
	this.shape_43.setTransform(475.8,-45.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B3BED0").s().p("Ag9AmQgVhuAMiWQBJAMBJggIAAHlQhogcghixg");
	this.shape_44.setTransform(478.6,-45.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A1ABB9").s().p("AhnAwIAAhNQBLgZBJAKQAlAFAWAKIAABNg");
	this.shape_45.setTransform(475.8,-66.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#75CFCD").s().p("AgQL1IAA3pIAhAAIAAXpg");
	this.shape_46.setTransform(226.3,-133.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF3370").s().p("AgIANQgGgDgBgHQgBgFAEgGQAEgGAGgBQAFgBAHAEQAFAEABAHQABAEgEAGQgEAGgGABIgDAAQgEAAgEgDg");
	this.shape_47.setTransform(259,-165.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF5A8A").s().p("AgTgNIATgEQAHgBAGAEQAGAEABAHQABAFgEAGQgEAFgHACIgTADg");
	this.shape_48.setTransform(260.7,-165.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#491B02").s().p("AgEAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAEgBABAFQABAEgGABIAAAAQgDAAgBgFg");
	this.shape_49.setTransform(262.1,-166.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#491B02").s().p("AgFgDIAFgCQAFgBABAGQABADgFACIgFABg");
	this.shape_50.setTransform(262.7,-166.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#808080").s().p("AhwAHIDcglIAFAYIjdAlg");
	this.shape_51.setTransform(263.2,-163.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00FF5D").s().p("Aixh8IEug2IA1EvIkuA2g");
	this.shape_52.setTransform(265.7,-152.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF3370").s().p("AgDAQQgGgCgEgGQgEgGACgFQACgHAGgDQAGgEAFACQAHACADAGQAEAGgCAFQgCAHgGADQgEACgEAAIgDAAg");
	this.shape_53.setTransform(327.1,-200.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF5A8A").s().p("AAAASIgTgFIAJgfIASAGQAHACADAGQAEAEgCAHQgCAHgGADQgEACgEAAIgEgBg");
	this.shape_54.setTransform(328.8,-200.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#491B02").s().p("AAAAFQgFgCABgDQACgFADABQAFABgBAEQgBAEgEAAIAAAAg");
	this.shape_55.setTransform(330.1,-199.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#491B02").s().p("AAAAGIgGgCIADgJIAFACQAGACgCADQgBAEgEAAIgBAAg");
	this.shape_56.setTransform(330.7,-199.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#808080").s().p("AhvgRIAHgYIDYA7IgHAYg");
	this.shape_57.setTransform(330,-196.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00FF5D").s().p("Ai9BrIBTkoIEoBTIhTEog");
	this.shape_58.setTransform(327.6,-186);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00A164").s().p("AgJANQgFgEgBgHQgBgFAEgGQAEgFAHgBQAFgBAGAEQAFAEABAHQABAFgEAGQgEAFgHABIgCAAQgEAAgFgDg");
	this.shape_59.setTransform(292.9,-189);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00FF5D").s().p("AgTgOIATgDQAHgBAGAEQAFAFABAHQABAFgEAFQgEAGgHABIgTADg");
	this.shape_60.setTransform(294.7,-189.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#491B02").s().p("AgEAAQgBgEAFAAQAFgBAAAFQABAEgGABIAAAAQgDAAgBgFg");
	this.shape_61.setTransform(296,-189.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#491B02").s().p("AgFgDIAFgBQAGgBAAAFQABAEgGABIgFABg");
	this.shape_62.setTransform(296.6,-189.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFE62C").s().p("AitiDIExgqIAqExIkxAqg");
	this.shape_63.setTransform(299.8,-176);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00A164").s().p("AgBAQQgHgBgEgGQgEgFABgFQABgHAGgEQAGgEAFABQAGABAEAGQAEAFgBAFQgBAHgFAEQgFADgFAAIgBAAg");
	this.shape_64.setTransform(323.2,-142.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00FF5D").s().p("AAAASIgTgEIAGgfIATADQAHABAEAGQAEAGgBAFQgBAHgGAEQgFADgFAAIgDAAg");
	this.shape_65.setTransform(325,-142.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#491B02").s().p("AAAAFQgFgBABgEQABgFADABQAGABgBADQgBAFgEAAIAAAAg");
	this.shape_66.setTransform(326.3,-141.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#491B02").s().p("AAAAFIgFgBIABgJIAFABQAGABgBAEQgBAFgEAAIgBgBg");
	this.shape_67.setTransform(326.9,-141.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#808080").s().p("AhwgFIAEgZIDdAkIgEAZg");
	this.shape_68.setTransform(326.1,-132.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFE62C").s().p("AixB+IA0kvIEvA0Ig0Evg");
	this.shape_69.setTransform(325.4,-128.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00A164").s().p("AgIANQgGgDgBgHQgBgFADgGQAFgGAHgBQAEgBAGAEQAGAEABAGQABAFgDAGQgEAGgHABIgDAAQgDAAgFgDg");
	this.shape_70.setTransform(366.1,-145.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00FF5D").s().p("AgTgNIATgEQAHgBAGAEQAGAEABAGQABAFgEAGQgEAGgHABIgSAEg");
	this.shape_71.setTransform(367.8,-145.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#491B02").s().p("AgEAAQgCgDAGgBQAEgBABAFQABAEgFABIgBAAQgDAAgBgFg");
	this.shape_72.setTransform(369.1,-146.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#491B02").s().p("AgGgDIAGgCQAFAAABAFQABADgFABIgFACg");
	this.shape_73.setTransform(369.7,-146.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#808080").s().p("AhwAJIDcgpIAFAZIjcAog");
	this.shape_74.setTransform(373.3,-131.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#808080").s().p("AhwAJIDcgpIAFAYIjcApg");
	this.shape_75.setTransform(372.2,-137.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#808080").s().p("AhwAIIDcgoIAFAYIjcApg");
	this.shape_76.setTransform(371.1,-143.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFE62C").s().p("Ai0h5IEug7IA7EuIkuA7g");
	this.shape_77.setTransform(373,-133.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#00A164").s().p("AAAAQQgGAAgFgGQgFgFAAgFQABgHAFgEQAFgFAFABQAHAAAFAFQAFAFgBAGQAAAGgFAFQgFAFgGAAIAAgBg");
	this.shape_78.setTransform(270.1,-127.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#00FF5D").s().p("AABARIgTgBIACggIATABQAHABAFAFQAFAFgBAFQgBAHgFAFQgEAEgGAAIgCAAg");
	this.shape_79.setTransform(271.9,-127.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#491B02").s().p("AAAAFQgEAAAAgFQABgFADABQAFAAAAAEQgBAFgDAAIgBAAg");
	this.shape_80.setTransform(273.2,-127.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#491B02").s().p("AgFAFIAAgJIAFAAQAGAAAAAEQAAAFgGAAg");
	this.shape_81.setTransform(273.8,-127.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#808080").s().p("AhwAFIABgXIDgAOIgCAXg");
	this.shape_82.setTransform(274.1,-118.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#808080").s().p("AhwAFIACgXIDfAOIgBAXg");
	this.shape_83.setTransform(274.4,-123.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFE62C").s().p("AijCQIAUkzIEzAUIgUEzg");
	this.shape_84.setTransform(273.3,-114.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#00A164").s().p("AgDAQQgHgCgDgGQgEgGACgFQACgHAGgDQAGgEAFACQAHACADAGQAEAHgCAEQgCAHgGAEQgEACgEAAIgDgBg");
	this.shape_85.setTransform(283.5,-99.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#00FF5D").s().p("AAAASIgUgGIAJgeIATAGQAHACADAGQAEAEgCAHQgCAGgGAEQgEACgEAAIgEgBg");
	this.shape_86.setTransform(285.1,-99.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#491B02").s().p("AAAAFQgFgBABgEQABgGAEACQAFACgBADQgBAEgEAAIAAAAg");
	this.shape_87.setTransform(286.5,-98.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#491B02").s().p("AAAAGIgGgCIADgJIAFACQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABAAAAQABAAAAAAQAAAAAAABQAAAAgBABQgBAEgEAAIgBAAg");
	this.shape_88.setTransform(287,-98.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#808080").s().p("AhvgRIAHgYIDYA7IgHAYg");
	this.shape_89.setTransform(283.5,-89.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#808080").s().p("AhvgRIAHgYIDYA7IgHAYg");
	this.shape_90.setTransform(284.9,-93.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF5A8A").s().p("Ai9BrIBTkoIEoBTIhTEog");
	this.shape_91.setTransform(283,-87);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#00A164").s().p("AgLALQgEgEAAgHQAAgFAEgFQAFgFAGAAQAGAAAFAFQAFAFABAFQgBAHgFAEQgFAFgGAAQgGAAgFgFg");
	this.shape_92.setTransform(368.6,-193.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#00FF5D").s().p("AgSAQIAAgfIAUAAQAHAAAFAFQAFAFAAAFQAAAGgFAFQgFAFgHAAg");
	this.shape_93.setTransform(370.5,-193.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#491B02").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_94.setTransform(371.7,-193.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#491B02").s().p("AgFAFIAAgJIAFAAQAGAAAAAEQAAAFgGAAg");
	this.shape_95.setTransform(372.3,-193.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#808080").s().p("AhvAMIAAgXIDfAAIAAAXg");
	this.shape_96.setTransform(371.4,-189);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF5A8A").s().p("AiZCaIAAkzIEzAAIAAEzg");
	this.shape_97.setTransform(371.4,-181.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#B5B5B5").s().p("AunAFIAAgJIdPAAIAAAJg");
	this.shape_98.setTransform(321.7,-81.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#B5B5B5").s().p("AunAFIAAgJIdPAAIAAAJg");
	this.shape_99.setTransform(321.7,-107.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#CCCCCC").s().p("AunAFIAAgJIdPAAIAAAJg");
	this.shape_100.setTransform(321.7,-107.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#B5B5B5").s().p("AunAFIAAgJIdPAAIAAAJg");
	this.shape_101.setTransform(321.7,-134.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#CCCCCC").s().p("AunAFIAAgJIdPAAIAAAJg");
	this.shape_102.setTransform(321.7,-134.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#B5B5B5").s().p("AunAFIAAgJIdPAAIAAAJg");
	this.shape_103.setTransform(321.7,-161);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#CCCCCC").s().p("AunAFIAAgJIdPAAIAAAJg");
	this.shape_104.setTransform(321.7,-161);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#B5B5B5").s().p("AunAFIAAgJIdPAAIAAAJg");
	this.shape_105.setTransform(321.7,-187.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#75CFCD").s().p("AgQMYIAA4vIAhAAIAAYvg");
	this.shape_106.setTransform(420.6,-133.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#ADCFCE").s().p("AvcMYIAA4vIe5AAIAAYvgAu4L1IdyAAIAA3pI9yAAg");
	this.shape_107.setTransform(320,-133.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#DEDEDE").s().p("AvKMGIAA4MIeVAAIAAYMg");
	this.shape_108.setTransform(320,-133.5);

	// Bg
	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#A1ABB9").s().p("AmYAhIAAhBIMxAAIAABBg");
	this.shape_109.setTransform(-5.6,110.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#90C200").s().p("AAABFQi7kOgMh1IBMAoQBaA1BDBCQDcDThHELQhbhxhciJg");
	this.shape_110.setTransform(8.3,-12.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#87B950").s().p("AAsBNQkUhVhLhaIBJgaQBZgYBTADQEHAKBrEaQh8gaiMgsg");
	this.shape_111.setTransform(20.2,-33.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#A1ABB9").s().p("Ai3FPIiJqdQA6DwB2CkQCzD+EeALg");
	this.shape_112.setTransform(-12.4,153.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#B3BED0").s().p("AjUB2Qh2ijg6jwIgUhiIMxAAIicL/QkcgLi1j/g");
	this.shape_113.setTransform(-5.6,148.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#9D6D48").s().p("AhwluQgGljAXjoIABAGQADNcBmJaQA0EuAzCCIhAAHQiVpjgNrFg");
	this.shape_114.setTransform(-1,52.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#8B603F").s().p("Ahgl0QARlmAnjoIAAALIgBgHQgXDpAGFjQANLECVJjIh3AOQhxpvAgrIg");
	this.shape_115.setTransform(-6.4,53);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#90C200").s().p("AlFBtQBChoByhCQDjiID0C1Qh3AsiMAnQjAA1hxAAQg0AAgjgLg");
	this.shape_116.setTransform(20.9,-55.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#65B155").s().p("AizgUQCIjlErAqQhSBhhpBmQjQDIh0AXQAIh7BEhwg");
	this.shape_117.setTransform(13.8,-64.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#90C200").s().p("AgfiZQBhhUBxggQgKBrimDhQhRByhSBcQhEkBDFilg");
	this.shape_118.setTransform(-28.5,-16.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#90B652").s().p("AAsiiQCDgUB1AmQhABjkJB0QiFA7h5AoQBKkkEFgog");
	this.shape_119.setTransform(-40,-31.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#87B950").s().p("AhDA4QiKgxhzgzQD/ikDaCXQBtBJA6BsQgZAHghAAQh1gBjUhKg");
	this.shape_120.setTransform(-41,-52.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#628C4A").s().p("AhCgZQhTh4g+huQEtAQBZD5QAtB9gQB5Qhsgrimjug");
	this.shape_121.setTransform(-29.9,-66.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#5E8252").s().p("Ahag0QgUiQgEh/QEECZgkEFQgRCEhGBlQhKhZgnkfg");
	this.shape_122.setTransform(-15.6,-66);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#7BA445").s().p("AANAoQiRiGgXhDIAyAPQA8ATAvAeQCeBhgEChQhFg2hKhDg");
	this.shape_123.setTransform(13.3,-27.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#7BA445").s().p("AgOAlQhLiRAEhAIAmAWQArAdAdAlQBkBxhBCPQgmg9gkhKg");
	this.shape_124.setTransform(-9.2,-26.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#7BA445").s().p("AgjAcQhPgahCgcQCEhUB/BRQBAAmAmA6QgNADgRAAQhAAAh6gqg");
	this.shape_125.setTransform(-40.5,-65.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#7BA445").s().p("AgfhKQAWgqAigmQASgTANgLQATA9goCfQgUBQgWBFQhfh+BHiFg");
	this.shape_126.setTransform(-17.1,-21.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#87B950").s().p("AgMhpQBCgoBIgFQgNBEh1B6Qg8A+g5AxQgZivCGhRg");
	this.shape_127.setTransform(-24.8,-26.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#87B950").s().p("AjBA6QBniQCXAiQBNAQA3AsQg4ApipAIQgwADgtAAQgjAAghgCg");
	this.shape_128.setTransform(-29.2,-39.3);

	this.addChild(this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.instance_1,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.instance,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-73.1,-212.8,584,399.6);


(lib.Símbolo10 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#602913","#6A311B","#854731","#A15E47","#A15E47","#602913"],[0.133,0.208,0.329,0.435,0.557,0.843],40.3,-54.5,-39.5,54.1).s().p("AgdHhQBDjeAIjoQAJj7hBjXQhKjvigihQBwAaDUD9QAiAmAoCRQAnCPAaCtQAbC6gBCOQgBCigoA/QhIBziaB3Qh3Bbg5AXQBniSBCjVg");
	this.shape.setTransform(206.9,136.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#602913","#6A311B","#854731","#A15E47","#A15E47","#602913"],[0.169,0.235,0.341,0.435,0.557,0.843],17.4,-86.2,-11.3,94.4).s().p("AgNHiQhphigQhCQg3jjCWlpQAziBA/hrQA4hgATgGQhLB/gXCIQhgJLC9FvQhQgzhOhMg");
	this.shape_1.setTransform(104.6,154);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#602913","#844634","#420F0B"],[0,0.408,0.941],-20.6,-49.5,14.8,53).s().p("AjeBAQA+hyBRhVQC/jJDGBDQgIBEhOA/QgtAjiFBMQiDBKhDA2QhrBVgzBlQAdhwA7hvg");
	this.shape_2.setTransform(128.4,79);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#4C1A0E","#552110","#5E2712","#602913","#420F0B"],[0,0.106,0.286,0.592,0.933],49.1,-60.2,-65.9,41.8).s().p("AmAPfQCPgrB/jmQB7jjAtkkQAxk8hIkEQhRkqjliXQAuh4Aag9QDLAyCICYQB0B/BEDEQAiBhASCfQATCjgDCwQgIGph5DsQgOAbg/AuQhGAzhWAnQiaBHiCAAQhAAAg6gRg");
	this.shape_3.setTransform(202.8,134.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#4C1A0E","#521E0F","#5D2612","#602913","#420F0B"],[0,0.082,0.322,0.592,0.933],-4,-85.8,-18.4,103.9).s().p("AkyM3QhohlgnicQgvi/AfkgQAnllCakfQBpjGCNhnQDPiZEpAhQgOAmgbA6QgeA+gKAaQhnCJh0BTQgnAbiLBLQhZAxgqA5Qg5BOgaCZQgsEFAsEaQA2FeCxDjQjMguh3h0g");
	this.shape_4.setTransform(133.7,131.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EB965C").s().p("AgMAiIAIgGQAKgLACgJQAEgTgGgeQAGAKADAQQAEAPgCAKQgCARgLAIQgHAFgOABQAAgDAFgEg");
	this.shape_5.setTransform(165.4,136.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C97A42").s().p("AgiADQAUgJALgBQADAAAQAFQARAEACADQABABgTgBQgZgBgUAEg");
	this.shape_6.setTransform(160.1,139.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EB965C").s().p("AgICcQgcgVgBgNQgBgHAPglQASgwAGgeQAehwgvhBIA2A9QgDBFgaBKQgLAngQAlQgFAUAXAdQALAPAOALQgOgGgTgQg");
	this.shape_7.setTransform(152.3,123.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#F7B073","#F8B47B","#FCCBA3","#FED9BC","#FFDEC5"],[0.012,0.082,0.486,0.804,1],4.5,16.1,-32,16.1).s().p("AgPCXQglgCAEgIQAWg1AMgyQAEgUAKhEQAEgeghglQgjgfACgBQAUgJArAhQAuAiAJAhQANArgKBNQgKBOgTAJQgHADgTAAIgTgBg");
	this.shape_8.setTransform(156.9,121.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EB965C").s().p("AgNgBQADgJAKgLQAIgLAIgFQgQAVgEAQQgDAIAEANIADAIQABAGgBADQgWgQAJgXg");
	this.shape_9.setTransform(149,134.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#F29166","#F6A870","#F7B073"],[0,0.78,1],-10.9,-16.2,0,-10.9,-16.2,35).s().p("AgjExQgtgGgjgtQgXgegYg4QgjhWgCiRQgBisBDgkQCYhSBpB3QAnAtAVA9QATA4gEAkQgNByg9BsQhEB4hOAAIgOgBg");
	this.shape_10.setTransform(131.2,125.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#F29166","#F49B6A","#F7B073"],[0,0.427,1],12.2,-9.1,0,12.2,-9.1,38.4).s().p("AAKE5QhLgGhDhWQgOgRgNgVQguhIgZhKQglhtAZhQQAOgqA1gqQA3gtBEgTQCugxBjCdQA1BSgiChQghCghJA3QgZATgiAOQgiAOgZAAIgGAAg");
	this.shape_11.setTransform(189.8,126.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F7B073").s().p("AhaL+QhIgMhdhdQhqhsg1hRQhiiYgGigQgMipgDhFQgGhzAQhXQAVhvEoi6QB2hLBwg2QBzg2A0gHICPCAQCPCMARBNQAMA0AOC+IAPDzQAREnj8DdQhTBIhlA3QhGAmghAJQg1APggAAQgKAAgIgCg");
	this.shape_12.setTransform(162.5,110.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C97A42").s().p("AhTMIQhGgThehgQhkhmg5hcQhhibgGijQgMingEhEQgGhxAQhXQALg7BVhaQBQhWB1hTQB4hVBsgvQB5g0BJALQA2AIB/GAQBpE7AbB/QA5EWkADwQhTBOhqA/QhOAugeAJQgkAJgdAAQgUAAgRgEg");
	this.shape_13.setTransform(161.4,111.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F76841").s().p("AmjGdQhYhegThDQBFhQEEj8QEKkGBehLQA1gpB7gqQBlgiASAAQAwBOASAxQAPBQg5BWQgOAWhkBzQgoAskQESQkREVgwAsQhGghhUhZg");
	this.shape_14.setTransform(228.7,414.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9E2F1D").s().p("AmcEFQAugzEBkJQDljxAjgsQAyg+DQAzIlCFKQkvE2hPBWQhWhFgjgtg");
	this.shape_15.setTransform(230,401.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FCF7DB").s().p("AiohIQAGgIAigdQAigfAXgYQAqBCA8AxQAdAXBtBEQiBBogUATQhphJhTikg");
	this.shape_16.setTransform(185.5,456.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CFB885").s().p("AhdA3Qg3hDgfhAQAJgLAlgdQAzgoAcgYQAtBNAzAvQAoAkBiA8QgwAmg2AxIg7A2Qg9g8gzhCg");
	this.shape_17.setTransform(185.2,456.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#EB9F62","#F7B073"],[0,0.42],-27,-27.3,17.4,24.4).s().p("AhlDtIgdgLQA6gOBrhBQgJABg1AcQg5AdgQADQgbAGgegFQgggGgLgRIASgDIAbgHQAUgGA0gZQA6gbASgOIhJAgQg4AYgRAFQg1APgdgSQgWgMABgLQABgBAUgBQAZgCAVgMIA7glQAwgfADgFQgFAAhEAjQhHAlgLADQgQADgTgBQgUgBgKgGQgagQgPgjQADgHAWAEQAfAGAhgQQAOgHAlgaQAhgXAJgJQAagTASgRQAmghADgRQAAgDgxANIhQAWQgnALgcgCQgigDgZgVQAAAAgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQACgDADgBQA2gNBrgqICAgxQA0gRASgEQAOgDAngEQBCgHAigOQAkAbA4A+QA4A+AFARQgYALgiAbIgzAoQgPANg7BAQg6A/gRANQgWATgzAZQgyAagkAJIgIABQgIAAgJgDg");
	this.shape_18.setTransform(160.6,471.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C97A42").s().p("AhUDzQgPgCgKgGIgWgPIgJgCQgsgLgUgbIgDgFQgJgBgPgJQgTgNgJgSQgDgHgMgIIgUgNQgdgWgLgSQAwgEAbgKQAigMAdgVQAVgPArglQAWgUAPgZQgXAMgmAIQguALgdAAQhCAAgcgnQAQgDCrhHQCuhDA5AGQAaADAjgJIAygPQAKgCA6BUQA7BTAEATIkEDqQgTARg/AaQg7AYgQAAIgCAAg");
	this.shape_19.setTransform(160,471.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#B3B3B3","#CCCCCC"],[0.188,1],-3.1,-111.6,1.6,55.4).s().p("AjsC4Qmmk+hkhTQDbitDshOQC7g8DKgEQB4gCBFAIQBtAMBGAoICoCRIB9BsQAKAIABAWQABAWgFAIQhKBwjgEhQjcEcgGAKQhMg1mGkpg");
	this.shape_20.setTransform(163.5,462.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("AC4L0Qiih5k7jzQlckKh8hjQgTgPgHgWQgGgYAMgPQBch5C0jgQDOkDBZhmQALgMAVgBQAYgCAPANQBpBcFXEVQEuDzCiB+QAbATACAbQACAXgOAVQhGBoi+D9IjzFEQgNARgdABIgCAAQgbAAgYgOg");
	this.shape_21.setTransform(162.7,440.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E6E6E6").s().p("ADKMDQitiBk6j0QlfkNh8hlQgUgPgDgaQgEgdARgWQBriLCjjNQDFj3BahpQAPgQALgFQAZgLAeATQC8CnE1EIQF6FDAqAVQgeBci9EbQhbCIixD7QgKAPgYAFQgIACgIAAQgXAAgXgPg");
	this.shape_22.setTransform(159.8,440.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F76841").s().p("AgyFMQjQmmgrheQhNilgriVQgghbgHhsQgHhqAThXIBEAHQA+AFAuAJQCVAeA7BVQA5BlBlEZQAjBeCyH8QAWA+A2CKIBQDPQgZAYhlBtQhiBogRARQhViri7mEg");
	this.shape_23.setTransform(234.6,308.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9E2F1D").s().p("AhYBAQiIj4gZg+Ig2iKQgBg6gEg4QAoANEUG3QCeD6CPDtQhTAbhQAfIjqmzg");
	this.shape_24.setTransform(231.2,324.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FCF7DB").s().p("AA9CfQgRh4gygcQgVgLhAAZQgSAHhEAjQAPgoBQh9IBiibQAbgVApgZQA/goAggGQhGChgVDFQgQCNAIDBQgJh5gKhDg");
	this.shape_25.setTransform(113,245.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FCF7DB").s().p("AlVF/QgFgNAAgDQC7jVCTjKQCbjYA9iGQAdAOA6A4QA3A1ABAHQgLApgqDHQgoDDgLAlQghgwgzgyQg9g8gdgDQg2ADiKCFQhQBLiFCRQAAgDgFgNg");
	this.shape_26.setTransform(154.3,247.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CFB885").s().p("AAuEwQgEhEgEglQgOiOgsgdQghgIguAKQg3ALgqAfQANgmBJh1QBUiHAMgYQAZgUA2gmQBOg1AqgVIANAIQhZCygaDhQgHBDgGBxQgGBxgFAuQgIgSgFg2g");
	this.shape_27.setTransform(114.9,245.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CFB885").s().p("AgYgXQCLjWBJimQAdALAzAtQA9AzAVArQhqGkgOAyQgog5g0goQgtgjgkgJQg4AFiUCIQifCXgrAkQCujICXjjg");
	this.shape_28.setTransform(155.6,246.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#BC452A").s().p("Aj9GdQAqhVByjgQBUihCikWIDpmGQAVAJg+FPQhBFehACNQgmAWj7EEQj7ECg7BMQA1iOBRirg");
	this.shape_29.setTransform(143.1,291.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8E180C").s().p("Aj9GdQAphVBzjgQBUihChkWIDqmGQAVAJg0FMQg2Fbg6CVQgpAckCD8QkPEGg4BIQA1iOBRirg");
	this.shape_30.setTransform(143.1,291.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3A2E12").s().p("AgcAIQgEgYAYgKQAWgKAMAZQANAcgfAKQgIADgFAAQgSAAgFgWg");
	this.shape_31.setTransform(108.2,365.3);

	this.instance = new lib.Path_27();
	this.instance.setTransform(163.7,381.8,1,1,0,0,0,53.4,98.2);
	this.instance.alpha = 0.43;

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F76841").s().p("AonUgQACjyAPlqQASmOAGi6QA1iQBSirQAthdBxjcQBUijCfkSIDnmCQA+AZA+ARQA+AQArAEQAaAQAZFMQAYFFgOBCQgeCOi+E1IjrFpQhGBtgWBxQgMBHAGAcQAMAxAwBCQAaAjBPBcQCeC4AvB3QjQB4j1AmQhyASh3AAQhwAAh1gQg");
	this.shape_32.setTransform(155.2,352.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9E2F1D").s().p("ApEUgQgHkUAIlVIATo8QAxiFBhi2QBxjNA3hrQBUijCikWIDomGQA8AYCZFtQA+CUAoB4QAqB/gFAeQgdCpisEvQhHB8iSDhQhGBtAFB0QADA6ATArQAUBLBZCfQBpC6ArBuQjQB4kmAqQiAAShrAAQh9AAhigYg");
	this.shape_33.setTransform(158.1,352.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BC452A").s().p("AhgE8QhokJAFg/QAuiWCokdQCdkIAVAAQgRBvheEBQhXD1gNB6QgPCKAkDOIAiCsQAVBpAKBDQhSithWjfg");
	this.shape_34.setTransform(100.5,293);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8E180C").s().p("AhoEiQhLi7glhoQA3ilCokPQCnkOArADQgRBwhjD5QhfDvgLB5QgPCLAkDOIAiCsQAVBoAKBDQhJiAhwkfg");
	this.shape_35.setTransform(99.6,293.6);

	this.instance_1 = new lib.Path_32();
	this.instance_1.setTransform(82.2,324.8,1,1,0,0,0,19.9,21.9);
	this.instance_1.alpha = 0.43;

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F76841").s().p("AibTWQhygwg9g6QAjhbB1jZQB1jYAPgmQAviFgejLQgLhGgeiDQgniugMg8QgegtgYguQguhZARhRQAQhLBaiiQBfioA4gxQAzhwgKiIIgLhZQgEgoAGgOQAyALBPABIB1AAQgRBqhJEHQhCD0gOB+QgQCOAqDZQALA7AZB4QAUBoAJBIQADgLhUIPQhVIagWBgQh4gbhjgrg");
	this.shape_36.setTransform(82.8,351.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F2E6BF").s().p("AjNFxQgQgwgKjUQgLjdACkAQDPA+ESAVQl+KOg9AAIgDAAg");
	this.shape_37.setTransform(115.9,355.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FCF7DB").s().p("AjiUXQjSgIi2htQCOoKAbo5QAZoZAklVQAqmPA0hKQAkADBZgLIBrgNQgnCEgSDKQgMCMgCDAQCDieCUjQIDqlFQAZAIBUAjQBDAcA/AQQgLAXiJGmQjXKahXEJQhzFdgcDmQgjEpBPDuQiuAchlAAIgVAAg");
	this.shape_38.setTransform(134,348);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#F7B073","#E89358"],[0.733,0.957],0.2,-93.4,-1.6,68).s().p("AnkSaQgRgzgLjrQgLj5AFkRQAOraBwifQA5AGBBgTQAigJAhgPQCHgsAjioQAhilhNi6QgLgaBMgSQBEgPBlAAQBoAAA+ARQBIAUgUAkQg/BzgbB8QgmCqA7BmQAqAwA3AhQBBAmA0gDQuAZ5hpAAIgDgBg");
	this.shape_39.setTransform(143.8,274.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C97A42").s().p("AkwHzQgIlFAJiCQCNgLAkitQAkiohQi+QgLgbBPgJQBJgJBlAKQBsAKBAAZQBKAbgUAkQg5BpgVCMQgcCvA8BmQAQARApALQgcBTgxCCIhRDTQjxgHjWghg");
	this.shape_40.setTransform(151.9,212.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3A2E12").s().p("AleBeIlRjmQAFgcARhbQE5BPGYgNQEWgHE7gyQAUAbATAgQkuD5m8DCQhhgijDiAg");
	this.shape_41.setTransform(124.5,492.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3A2E12").s().p("Ag8TcQgohlivvEQinurgBgBQD9iRB5hLQDTiDB3iGQBzCNAqDRQAjCugMD+QgGCRglFPQgkFJgICzQgHC0ABBjQABCjAUBTQAQBAAKANQhFBJiLAhQhVAThXAAQgkAAgngDg");
	this.shape_42.setTransform(161.9,589.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3A2E12").s().p("AhSULQAFilihyPQibxlgTg0IG4hjQBnCRA4DoQArCyATD/QAWE1AmGzQA/LkApEIQhUA2h7ARQgwAGgvAAQhhAAhggbg");
	this.shape_43.setTransform(195.8,829.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#241A08").s().p("AENSpIj3wIQjovRALAEQgRgGhAg8QhIhDgwg+IAPivQEKAZDvglQgEFBCDP9QAxF/AvFAQAuE0AMAhQgIACg2ABIgUAAQgmAAgMgCg");
	this.shape_44.setTransform(133.5,602.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3A2E12").s().p("AiET6QgUkAhBnBIhtrsQg4mkgHkGQgJlIA8iqQBGAaBEAUQBrBqDzDVQB8BsB2BkQgUAtgcOvQgcOjAJA9QgeAkg3AnQhBAvg/AXQg5AVguAAQhbAAgyhWg");
	this.shape_45.setTransform(86.8,599.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3A2E12").s().p("AjKUeQALoGgSrCQgXuVhCn7QBJBoCLA/QCXBGBrgzQBdEpASOVQADC/ADH/QACGCAICNQh3ApioAGIgsABQiAAAgqgdg");
	this.shape_46.setTransform(98.4,815.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F76841").s().p("AFMHyQhWgihag/QgwgikokzQkPkVgWgaQAghIBfhnQBBhGAlgeQIOHqA+A2QBcBRAlCgQAjCUgkBPQgLAZgkAAQggAAg1gVg");
	this.shape_47.setTransform(-22.2,303.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#9E2F1D").s().p("AldllIADABIAYACQAQADAHAEQAQAIEZDkQEfDpARAXQAKAPATBeIATBoQqFqMg2g/g");
	this.shape_48.setTransform(-9.9,295.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FCF7DB").s().p("Ah3BYIgtg0QBNiGB0hIQAIAHAxAvQA1AyAaAVQhlBKgTAQQg0AzgnBKQghghgogxg");
	this.shape_49.setTransform(-56.9,264.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CFB885").s().p("Ah1BXQgogtgJgIQA2hNAwgxQAwgxA8gmQAJAGAqAvQAtAxAbAWQhPA3glAqQgnAtguBdQgkgmgvg3g");
	this.shape_50.setTransform(-58.5,264);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#6D1F0D","#841B0D"],[0,1],19.9,0.4,-19.2,-0.5).s().p("AiKFrQgZgTgShJQgPg9ABgjQAGhKAWhTQAThEAFgDQgEAmgLBNQgIA+AFAJQAKAQBtgEQBygDAlghQAcgZAbjPQAZjDgHg4IAHgCQgHBPAHDDQADBjAFBaQAAA9geA1QgaAsgzAsQg6Ayg+AYQglAOgbAAQgbAAgRgOg");
	this.shape_51.setTransform(207.9,989.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E89658").s().p("AgqInQhQgEgygKQgMhTANhMIAXhZQAThRAHhVQAEg3ABhbQAAgeASi9QAPijgIiSQB4AMBxATQgYDxANCTQAEApAQAkIAdA8QADB6ghC+QgmDfgzAJQgSADgkAAIgwgBg");
	this.shape_52.setTransform(208.3,956.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#6D1F0D","#841B0D"],[0,1],36.5,0,-36.5,0).s().p("AlgFgQgqgVBrh/QAjgpArgsQAlglAEgCQgLASgcAmQgVAeAHAIQAKAOBFAIQBMAIAxgTQBPgeBnjIQBgi7AYiKQAgAXAaAxQAgBAgPA7Qg9AygkAlQgwA0ghA6QgcAxgbB4QgTBWgyAcQhcA2iQAKQggACgbAAQhPAAgkgTg");
	this.shape_53.setTransform(82.6,974.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E89658").s().p("AjIIcQg+gJgYgwIArg5QAYgfAWgTQCBj4AchtQAWhUAAiXQAAiCgQjDQCHAJByAPQgUDpASCNQAEAgAmA8QAjA0gDAZQgCAWgjBJQgoBSgyBQQiPDfhwAbQgpAJgiAAQgQAAgOgCg");
	this.shape_54.setTransform(85.9,944.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6D1F0D").s().p("Ag0CuQgIgGABgGQAEhLAAgjQAAhQgMgPQAFgJAagpQAdgtAcgpQABABAXgBQAVgBABABQgoBngKBJQgGAoAAB0QgHAKgPAIQgOAHgMADQgIAAgHgHg");
	this.shape_55.setTransform(111.9,974.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#9E2F1D").s().p("AgYGfQgGgUgkguIhEhYQhah9AYhZQAfhyBBh0QBNh+AihBQAxgtBAgcQBEgfASAWQgeBigZGJQgMDKgMDlQg0gUhjgfg");
	this.shape_56.setTransform(80.3,301.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F76841").s().p("AnFIEQg0hhgmg6QAthEDylMQDckxB8jHQA1hVApgWQBBgiCQASQBKAJBLASQAgCbi/ETQg8BWhnB8Qh0CPgTAaQkoFnicCRIhUieg");
	this.shape_57.setTransform(61.3,285.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#FFDEC5","#FCCEA8","#F9BE8B","#F8B479","#F7B073"],[0,0.176,0.4,0.592,0.733],52.7,-1.9,-42,2.3).s().p("AisA5QAFgMAugfQAygfAMgJQAjgcAkgMQArgOAnAKQApALAUAyQAMAZAIA5Qghg/hkASQgfAFgxAQQg1ARgQADQgcAGgRAAQgcAAAIgSg");
	this.shape_58.setTransform(-80.3,250.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#EB9F62","#F7B073"],[0,0.42],52.5,-4,-49.2,-11.5).s().p("AE/CYQgbhMgLgVQgLgXgWgLQgKgGhPAJIhvAPQg6AHhHAFQhpAIgSgHQgRgHgigTQgWgLglgYQg2gmgRgLIAOgEQAPgDAEAAQAZACAmAbQAqAdAUADQAWAEA9gFQAygFAYgFQgSADg+ACQhGACgMgEQgKgEgogXQgpgYgIgDQgPgGgSADIgQAEIgIgFQhKgwgegOQAQgPAXABIAcAFIg8gnQAYgQAuAPQATAGAQAJIBQAsQA+AfAWgCIBIgGQA9gFAFgCQhFgDgiAEQgsAEgcgHQgUgGg9gfQg8gfgVgFQAggEBBAZIBQAgQBBAQCNgdQBFgOA5gSQgCgJg0gEQhBgGgNgEQgsgLgXgZQgVgWAJgBQAQgBA6AFIBBAFQBWAAAtAEQA7AGAlAQQBGAfAzBBQADAEAwBMQAJARA/BQIAAACQgJA2gnA4QgdAog1AzQgTghgZhHgAlDhQQBCAkAcACQAPABA3gHQAwgFAhgGQgMgCg/AFQg/AGgOgCQgggEhKglQg3gbgRgLQAhAXA0Acg");
	this.shape_59.setTransform(-95.4,255.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#C97A42","#EB9F62"],[0,1],49.8,4.6,-49.9,-8.8).s().p("AEaBOQgNgigjgEQgRgDg0AIQg/AIhoAHQiRAJgzgHQgRgDhRg2Ihdg/QAMgIAFACIAAAAIAAAAQgEgCgxgcQg0gegPgHQAPgPAWgBQALAAAWAEQgugcgOgLQAUgPA7ARQA2AQAjAaQAKAHApAGIBCAJQAcADBEgLQAXgDA6gRQAwgPAOgFIANgFQAEgCgPgBIg/gGQgegDgbgPQgggTgMgdQgGgNAQgBQAFAAARADQBYAMBAAFQAWABA3AGQBBAHAKAEQBBAYAXAWQAeAdBUCBIBJBSQALASg3BNQgvBCgiAgQgig9gyh4g");
	this.shape_60.setTransform(-96.1,255.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#4C1A0E","#420F0B"],[0,0.933],-4.5,-23,-4.6,197.3).s().p("AoXOMQiLi7gplgQgikqApk/QAnkqBKh3QBjigDLiFQDNiGCRABQAZAFBMA5QBcBFBWBaQD7EFAyEYQBOGsANDDQAREDg/CSQhCCbi3BZQivBWlZA4QgwAHgtAAQjaAAiJi4g");
	this.shape_61.setTransform(175.9,143.1);

	this.addChild(this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.instance_1,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.instance,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-145.4,32.7,426.9,995);


(lib.Símbolo5 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#292728").s().p("AgiH0QADg0gBhNQAAiZgPh9QgJhLggh8QgchsABgZQADhQBEhqQAig2AfglIBfIyIhBHXg");
	this.shape.setTransform(217.2,117.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAB57A").s().p("AgVB0QgOgKgEgmIgCgkQgQAUgQARQggAhgBgRQAAgKAqhLIAqhIIAsgtQBWAOgCADQgBABAAAcIgBAcIAAAQIgBBMQgCAwgHABQgIACgIgZIgFgZIgCAbQgDAbgKACQgJACgFgZIgEgaIgCAgQgEAggLgEQgLgFgGgbIgDgaIgDAiQgFAZgKAAQgDAAgDgCg");
	this.shape_1.setTransform(211.4,179.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A87C4F").s().p("AkHARIAAhWIIOAAIAABzIgXAYg");
	this.shape_2.setTransform(216.4,208.2);

	this.instance = new lib.Group_1();
	this.instance.setTransform(216.2,198.3,1,1,0,0,0,27.9,0.9);
	this.instance.alpha = 0.5;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C1B49A").s().p("AiUAHIAAgNIEpAAIAAANg");
	this.shape_3.setTransform(212.9,194.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C1B49A").s().p("AgyAoIAAhPIBlAAIAABPg");
	this.shape_4.setTransform(217.2,218.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#766757").s().p("AgzAoIAAhPIBnAAIAABPg");
	this.shape_5.setTransform(216.7,218.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A87C4F").s().p("AkPARIAAgBQAAgOgKgIQgJgKgOAAII/AAQANAAALAJQAKAIAAAPIAAABg");
	this.shape_6.setTransform(214.6,196.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8A5D3B").s().p("AkIBiIgYg0IAAiOIJAAAIAACOIgXA0g");
	this.shape_7.setTransform(216.3,208.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#603813").s().p("AkHBuIgXgpIAAiQIgBgYIgCgKIIhAAQANAAAKAJQALALAAAOIAACQIgYApg");
	this.shape_8.setTransform(216.2,208.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#754C28").s().p("AkgCGIAAkMIAYA0IIRAAIAXg0IAAEBQAAAFgCADQgDADgFAAg");
	this.shape_9.setTransform(216.3,226.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3B2314").s().p("ABkBCIAAhCQAAgOgKgJQgKgKgOAAIiEAAQgOAAgJAKQgKAJAAAOIAABCIggAAIAAhCQAAgaATgUQATgSAbgBICEAAQAbABAUASQATAUAAAaIAABCg");
	this.shape_10.setTransform(212.9,190.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#603813").s().p("AgJDIQgMAAgHgIQgHgIAAgMIAAlzIBHAAIAAGPg");
	this.shape_11.setTransform(183.7,219.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3B2314").s().p("AgJDgQgMAAgHgHQgHgIAAgNIAAmBQAAgOAKgKQAKgLAOAAIADAAQAOAAAKALQAKAKAAAOIAAGdg");
	this.shape_12.setTransform(183.7,217.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E88252").s().p("AgRAoIAAgBIACgCIABgDIgBgGIAAgFIAEgEIABgBIABAAIABgBIAAAAIAAgBIAAAAIABAAIAAgBQAEgFgCgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgCgCIgBgBIgGgHQgDgEABgGQgBgKAKgHQAEgDAFgBQAFAAADACQAFABADADQADAEAAAEIAAABIgBgBQgFgEgHABQgGAAAAADQgDADgCAFIAAAEIAGALQACADAAAEQABAEgCAEQgBAEgBAEIgCACIgCABIgDABIgBAAIgBABIgBADIAAADIAAAEIgDAEIgBABIgDABg");
	this.shape_13.setTransform(207.2,24.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FBBE7D").s().p("AgdAoQgKgbAHgXQAHgaAPgQQAMgPAOAEQAOAEAEAVQAFAVgHAYQgGAUgNAPIgLAPQgDAHgGABIgBAAQgMAAgJgZg");
	this.shape_14.setTransform(206.8,24.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AggABIgOgNIBegCQgFAIgKAGQgQAPgRAAIAAAAQgPAAgRgOg");
	this.shape_15.setTransform(186.3,35.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#58391B").s().p("AgwAOQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIACgDIAYgOQAegOAoALQADABAAAFQAAABAAABQAAAAAAAAQAAAAgBAAQAAAAgBAAIgDAAQghgJgcAJIgWALQgFADgDAAIgCAAg");
	this.shape_16.setTransform(175.5,15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#58391B").s().p("AApAOQgHgIgPgGQgbgNgmAHIgDABQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgCQACgFADgBQAtgHAdATQAPAHAHAKQAEAFgEAAQgEAAgFgEg");
	this.shape_17.setTransform(193.1,14.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#917050").s().p("AgrgdQgbgDgnACQgfABgHgDIApgYQA3gVA+AIQBcALAfBCQAQAhgCAgQhchahjgMg");
	this.shape_18.setTransform(191.2,0.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#754C24").s().p("AgDA9QiZhjgigeIAPgUQAVgXAZgSQBRg4BfAZQCKAiAGCWQACBLgYBFQgWgGiWhlg");
	this.shape_19.setTransform(190.2,8.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#754C24").s().p("AgtA6QgpgzATg2QATg3A+AGQAgADAcAOIhKCxQgYgPgVgZg");
	this.shape_20.setTransform(172.8,11.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E58052").s().p("AAGAZQgGgBgCgCIgFgGIgEgGQgBgEAGgFQALgIAEgRQAIATgKANIgCAEIABADQABADAFAEQACADgGAAIgCAAg");
	this.shape_21.setTransform(181.6,28.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AgKAYQgFgJgBgMQgBgLAEgKQAFgKAHgBQAGgCAFAIQAGAJABANQABALgFAKQgEAKgIABIgBAAQgEAAgGgHg");
	this.shape_22.setTransform(177.7,20.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AgJAYQgGgIgBgOQgBgLAFgKQAEgKAIgBQAFgBAGAIQAGAIAAANQABALgEAKQgFAKgHABIgCABQgFAAgEgHg");
	this.shape_23.setTransform(192.2,21.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E88252").s().p("AADA4IhqhEQgyBZgPATIgChAIANgbQASgeAYgaQBMhVBlADQBnAEAGBYQADAqgRArQgEArgGAvQgfgGhxhIg");
	this.shape_24.setTransform(189.8,10.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FBBE7D").s().p("AgeDyQghgBgpgrQghgigPghQgJgUgGhfIgDhaIANgbQASggAYgaQBMhVBlADQBnAEAGBYQADAsgRArQgPCsgRAfQgOAbg0AkQg3AmggAAIgCAAg");
	this.shape_25.setTransform(189.8,21.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#58391B").s().p("AgXBrQgigGgRgkQgRgkAKgqQAKgtAggbQAfgbAgAGQAiAGARAkQARAkgKAqQgKAtggAbQgaAWgZAAIgMgBg");
	this.shape_26.setTransform(206.6,28.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#292728").s().p("AgOAPQgFgHgBgIQABgHAFgHQAHgFAHAAQAIAAAGAFQAHAHgBAHQABAIgHAHQgGAFgIAAQgHAAgHgFg");
	this.shape_27.setTransform(173.7,129.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#292728").s().p("AgOAPQgFgHgBgIQABgHAFgGQAHgHAHAAQAIAAAGAHQAHAGgBAHQABAIgHAHQgGAFgIABQgHgBgHgFg");
	this.shape_28.setTransform(173.7,110.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#292728").s().p("AgOAPQgFgHgBgIQABgHAFgHQAHgGAHAAQAIAAAGAGQAHAHgBAHQABAIgHAHQgGAGgIAAQgHAAgHgGg");
	this.shape_29.setTransform(174.6,91.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C5C2E1").s().p("AAOAvIgqglIgUAjQgfAyAag5QAeg/AugpQAYgVATgIIgGAdIADCiQgEgKgtgng");
	this.shape_30.setTransform(173.9,60.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#292728").s().p("AgoAVIA2gYIg6gIIAQh8IBHgaQAEAjgDEFIgCAbg");
	this.shape_31.setTransform(171,71.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C5C2E1").s().p("AgaAVQBThkAJgjIATAUQATAWADAIQAGAQgEBrIg6gsIigBlg");
	this.shape_32.setTransform(191.5,62.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#292728").s().p("AhxBXQBAhXAyg7QBMhaAfgJIAsAXIgdCiIhdgMIA4BAIjtBQg");
	this.shape_33.setTransform(190.5,71.6);

	this.instance_1 = new lib.Path_6_0();
	this.instance_1.setTransform(206.9,106.9,1,1,0,0,0,12.2,38.6);
	this.instance_1.alpha = 0.5;

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#313032").s().p("AhUHNQhdgJhUgfIhBgeQARgmAVg7QAph2AOhtIg4iuQAKgjAIgpQAThTgCghQgCgxABglIABgaICNgyQAFAugFECIBpiOQBwiQAogMIC3BkIhRFXIhZC9IA1DuIiMAbQheAUgtAAIgPgBg");
	this.shape_34.setTransform(186.9,101.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DDDBED").s().p("Ah5CsQhtgWAQiWQAFguAQg2IAQgtIBRgeIAFDMIDLi4IBpA8QgpBNhABFQhtB9heAAQgQAAgOgEg");
	this.shape_35.setTransform(189.6,71.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E68052").s().p("AhJBPQgUgDgDgWIAmh/ICbgGIgNAzQgnAmgiAaQgXAUgPAJQgZAPgQAAIgFgBg");
	this.shape_36.setTransform(190.3,45.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FAB57A").s().p("Ah/CEIhFhlIBQgeIAtiZICagGIgSBRQgKBSAlAPQATAIBXA1IiIBOg");
	this.shape_37.setTransform(191.6,53.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#231F20").s().p("AhRAqQgCggAKggQAoAPApgFQAtgEAcgZQADA1gMAeg");
	this.shape_38.setTransform(203.3,335);

	this.instance_2 = new lib.Path_1_0();
	this.instance_2.setTransform(184.4,185.6,1,1,0,0,0,29.6,45.4);
	this.instance_2.alpha = 0.5;

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#292728").s().p("AAaHFQiQAAgdgEIhPgIIgTg/Igxs/IIDAAIAIAMQAKASAJAcQAfBbANCkQAKArgdDSQgXCjghCxIhiABIhdgBg");
	this.shape_39.setTransform(184.4,185.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E78052").s().p("AhsHYIgnhoIgVtIIEIAAIAIAMQAKASAJAcQAfBbANCkQARBKh0IqQgwAEhWAAIgqgBg");
	this.shape_40.setTransform(196.9,187.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E78052").s().p("AhNHOIgehmIgxs/ID5AAIBBENIhKKiQhSgBhPgJg");
	this.shape_41.setTransform(170.6,187.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FAB57A").s().p("AgRPjQgCgiAMgnIAXhEQAihagQhMIhencQgIiLgLgmQgGgYgghTIgehQIgVtKIEIAAIAIAMQAKASAJAcQAfBbANCkQAMA0g7E7QgdCeggCTIAHA3QAKBDAOAwQAOAwACDwQABB4gCBuIAcB+QAYCIgVA2g");
	this.shape_42.setTransform(196.9,239.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#231F20").s().p("ABMBlIALh8IhlB8IifAAQgBgSAigSQAtgXADgEIAGgGQAmAGAfgNQAbgNAcgfQAdghA1geQA2geAAATQAAAbgrBVQgXAsgVAmg");
	this.shape_43.setTransform(166.7,329);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FAB57A").s().p("ABBPjIALh/IhlB/IifAAQgBgSAigSQAtgXADgEQAwgyAVgeQA1hOgChJQgChYgPjnQgRkJgRiBIgCAAIgriVIgxtBID5AAIBBEOIhOLIQAEAqAUBiQAPBjgLBhQgHA8gQE9IAZAgQAZAmAAAbQAAAbgrBYQgXAsgVAmg");
	this.shape_44.setTransform(167.8,239.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FAB57A").s().p("AhUHHQhdgIhUggIhBgeQARglAVg7QAph2AOhtIg4iuQAKgjAIgqQAThSgCghQgCgyABgkIABgbIBsgmQAKAUAtAZQAzAeAwAEQA1AFBFgKQA5gIA3gRIBVAuIhRFXIhZC9IA1DtQgfAFhXASQh0AYgvAAIgNgBg");
	this.shape_45.setTransform(186.9,101.8);

	this.instance_3 = new lib.Group_5();
	this.instance_3.setTransform(187,192.5,1,1,0,0,0,6.3,13.2);
	this.instance_3.alpha = 0.102;

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#292728").s().p("AlOEwIGQiTIDQolIA9ETIiWGpInVBVg");
	this.shape_46.setTransform(134.7,100);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EB9756").s().p("AgVARQgmgVgBgFQgBgEAOgMQANgLAIgCQAJgCAkAUQAmAUAEAFQADAHgQANQgQAMgJACIgBAAQgJAAgigWg");
	this.shape_47.setTransform(87.5,146.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EB9756").s().p("AgsAeQgJgCgDgNIAAgNIBaggIAYAqQhNATgUAAIgFgBg");
	this.shape_48.setTransform(90.6,130.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FBBE7D").s().p("AgWBDIh2gIIgdhiIBaAeIAvg9QA4gpAMgIQAJgFAGAWQAEAMABAMIgyATIBSAlQBRAkABAMQAAANgoAoQgnAngOADIgCAAQgUAAhNg2g");
	this.shape_49.setTransform(86.2,136.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EB9756").s().p("AlJBaIBtiMIAoAmIHIiCIA2BjInXBoIg9BSg");
	this.shape_50.setTransform(116.2,133);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#292728").s().p("AgCF9QhdgFhqi8QhQiNg6i2Qglh1AbhRQAJgbAOgSIAMgPIEoJZIF1BUIAGBmQjigGiJgHg");
	this.shape_51.setTransform(40,105.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E88252").s().p("AAPAoIgCgBIgCgEIgBgKIgCgBIAAAAIgDgBIgCgBIgCgCQgBgDgBgFQgCgDAAgFIADgHIAFgLQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBgFgDgDQgBgDgFAAQgHgBgFAEIgBABIAAgBQABgFACgDQADgDAFgBQADgCAEAAQAFABAFADQAKAHgBAKQAAAHgCADIgGAHIgBABIgDACIgCAEQgBAGAEAEIAAABIABABIABABIABAAIABABIAEAEIAAAFIgBAGIABADQAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAIABABIgBABg");
	this.shape_52.setTransform(20.9,24.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FBBE7D").s().p("AAIBBQgGgBgDgHQgGgKgFgFQgOgQgFgTQgHgYAFgVQAEgVAOgEQAOgEAMAPQAPAQAHAaQAHAXgKAbQgIAZgNAAIgBAAg");
	this.shape_53.setTransform(21.3,24.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAAAPQgQAAgRgPIgNgOIBdACQgFAIgJAFQgRAOgQAAIAAAAg");
	this.shape_54.setTransform(41.8,35.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#3F3422").s().p("AAoALQgIgHgPgEQgcgJghAJIgDAAQgCABAAgDQAAgFADgBQAogLAeAOQAQAFAIAJQAFAEgEABIgCAAQgDAAgEgDg");
	this.shape_55.setTransform(51.3,14.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#3F3422").s().p("AgzARIADgEQAGgKAPgHQAdgTAsAHQAEABACAFQAAACAAABQAAABAAAAQAAABgBAAQAAAAgBAAIgEgBQglgHgbANIgWAOQgFAEgEAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_56.setTransform(31.8,14.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#BE9C67").s().p("AAMgFQg3gpg+gOQAZgbA+gDQBQAUAdBDQATApgFA1Qgmg5g3gng");
	this.shape_57.setTransform(41.6,3.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#7F6845").s().p("AADA9QiRhLgfgbQAFghAYgcQAxg4BfAZQCJAiAdB7QAOA+gNA4QgbgIiJhJg");
	this.shape_58.setTransform(38.9,5.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#7F6845").s().p("AgtA6QgpgzATg2QATg3A+AGQAgADAcAOIhKCxQgYgPgVgZg");
	this.shape_59.setTransform(23.3,11.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E58052").s().p("AgLAYIAGgHIABgDIgCgEQgGgKABgNQABgRABAHQAGASAKAIQAGAFgBAEIgJALQgCADgGAAIgCAAQgGAAACgCg");
	this.shape_60.setTransform(46.5,28.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#231F20").s().p("AAAAfQgIgBgEgKQgFgKABgLQABgNAFgJQAGgIAGACQAHABAEAKQAFAKgBALQAAAMgGAJQgGAHgFAAIAAAAg");
	this.shape_61.setTransform(50.3,20.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#231F20").s().p("AAAAeQgIgBgEgKQgFgKABgLQABgNAFgIQAGgIAGABQAHABAEAKQAFAKgBALQAAANgGAJQgFAHgGAAIAAgBg");
	this.shape_62.setTransform(35.8,21.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E68052").s().p("AijAvQgBgrATgqQAmhYBngEQBkgEAsBVQAWArACApIgDBIQgrgPgqgVIhGggQgngUgZgSIgNgHQgIgEgGADQgGADgFAIIgGARQgPArglBEg");
	this.shape_63.setTransform(39,10.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FBBE7D").s().p("AhBDMQg0gkgOgbQgLgTgLhfIgKhZQgBgrATgsQAmhYBngEQBkgDAsBVQAWAqACArQgECtgOAgQgPAhghAiQgpArghABIgCAAQggAAg3gmg");
	this.shape_64.setTransform(39,21.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#292728").s().p("AgOAPQgFgHgBgIQABgHAFgHQAGgFAIAAQAIAAAGAFQAHAHgBAHQABAIgHAHQgGAFgIAAQgIAAgGgFg");
	this.shape_65.setTransform(54.4,129.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#292728").s().p("AgOAPQgFgHgBgIQABgHAFgGQAGgHAIAAQAIAAAGAHQAHAGgBAHQABAIgHAHQgGAFgIABQgIgBgGgFg");
	this.shape_66.setTransform(54.4,110.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#292728").s().p("AgNAPQgHgHAAgIQAAgHAHgHQAGgGAHAAQAIAAAHAGQAGAHAAAHQAAAIgGAHQgHAGgIAAQgHAAgGgGg");
	this.shape_67.setTransform(53.4,91.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C5C2E1").s().p("Ag6hCIgGgdIArAdQAuApAeA/QAQAkgJgLIggg1IgqAlQgtAngFAKg");
	this.shape_68.setTransform(54.1,60.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#292728").s().p("AgqCHQgCg0AAhdQgBh8ADgbIBHAaIARB8Ig7AIIA2AYIhRCNg");
	this.shape_69.setTransform(57,71.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#C5C2E1").s().p("AgxAPIg6AsQgEhrAFgQQADgIAUgWIATgUQAIAjBTBkQArAzAoAsg");
	this.shape_70.setTransform(36.6,62.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#292728").s().p("AhWBPIA6hAIheAMIgdiiIAsgXQAgAJBLBaQA0A8A+BWIAmBIg");
	this.shape_71.setTransform(37.6,71.6);

	this.instance_4 = new lib.Path_6();
	this.instance_4.setTransform(21.3,106.9,1,1,0,0,0,12.2,38.6);
	this.instance_4.alpha = 0.5;

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#313032").s().p("AhFG6IiLgbIA1juIhZi9IhRlXIC2hkQApAMBvCQQA5BIAwBGQgFkCAGguICLAyIACAaQABAlgCAxQgBAWAUBDQATBAgEAnQgEAtgaBEQgNAjgMAaQAOBtAoB2QAVA7ARAmQgWAOgrAQQhTAfhdAJIgPABQgtAAhegUg");
	this.shape_72.setTransform(41.2,101.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#DDDBED").s().p("AhvAzQgogtglg2IgcgvIBqg8IDKC4IAFjMIBQAeIAQAtQARA2AFAuQAQCWhtAWQgPAEgPAAQheAAhth9g");
	this.shape_73.setTransform(38.4,71.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E68052").s().p("AAcBBQgOgJgYgUQgigagmgmQgDgSgGgSIgFgPICcAGIAkB/QgBAVgVAEIgFABQgQAAgZgPg");
	this.shape_74.setTransform(37.8,45.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FAB57A").s().p("AjEBRIAtgbQAxgdAMgFQAlgPgLhSIgShRICbAGIAsCZIBQAeIhFBlIi9Abg");
	this.shape_75.setTransform(36.4,53.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#231F20").s().p("AhHAqQgMgeADg1QAcAZAtAEQApAFAogPQAKAggCAgg");
	this.shape_76.setTransform(24.8,335);

	this.instance_5 = new lib.Path_1_2();
	this.instance_5.setTransform(43.7,185.6,1,1,0,0,0,29.5,45.4);
	this.instance_5.alpha = 0.5;

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#292728").s().p("AjYHFQghixgWijQgejSAKgrQANikAfhbQAJgcAKgSIAIgMIICAAIgxM/IgSA/IhPAIQgeAEiPAAIhcABIhjgBg");
	this.shape_77.setTransform(43.7,185.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#E78052").s().p("AhCHVQgpjBgaiTQgrjzAKgtQANikAfhbQAJgcAKgSIAIgMIEIAAIgVNIIgnBoIgpABQhXAAgvgEg");
	this.shape_78.setTransform(31.2,187.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#E78052").s().p("AicjKIBBkNID4AAIgyM/IgdBmQhPAJhSABg");
	this.shape_79.setTransform(57.5,187.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FAB57A").s().p("AiHPjQgUg2AXiIIAch+QgChuABh4QACjwAOgwQAOgwAKhDIAIg3QggiTgeieQg7k7AMg0QANikAfhbQAJgcAKgSIAIgMIEIAAIgVNKIgeBQQgfBTgHAYQgLAmgICLIheHcQgQBMAjBaIAXBEQALAngCAig");
	this.shape_80.setTransform(31.2,239.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#231F20").s().p("AAOBlIhjh8IAKB8IgKAAQgWgmgWgsQgshVgBgbQABgTA2AeQA2AeAcAhQAcAfAcANQAeANAlgGIAHAGQAEAEArAXQAjASAAASg");
	this.shape_81.setTransform(61.4,329);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FAB57A").s().p("AAZPjIhkh/IALB/IgLAAQgWgmgWgsQgshYAAgbQAAgbAagmIAZggQgQk9gHg8QgLhhAPhjQAUhiAEgqIhNrIIBAkOID5AAIgyNBIgrCVIgCAAQgQCCgSEIQgPDqgCBVQgCBJA1BOQAXAhAvAvQAEAEArAXQAiASAAASg");
	this.shape_82.setTransform(60.3,239.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FAB57A").s().p("AAFHCQgfgFhBgNQhWgSgfgFIA1jtIhZi9IhRlXIBUguQA4ARA5AIQBFAKA0gFQAvgEA0geQAtgaAJgTIBsAmIACAbQABAkgCAyQgBAhARBSQAJAqAJAjIg3CuQAOBtAoB2QAVA7ARAlQgWAOgrAQQhTAghdAIIgPABQgaAAgngGg");
	this.shape_83.setTransform(41.2,101.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#292728").s().p("AjQA/Ihnj5ICBh/IC0HpIEohAQAFANAFApIAIA2QhUApiTAeQhvAWgrABIAAAAQgcAAhrj7g");
	this.shape_84.setTransform(84.7,91.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#DDDBED").s().p("AjZA/Ihnj5ICCh/IC0HpIE8g6IACAIQAFAKAEAhIAEAjQhQAniaAmQiEAgglABIAAAAQgcAAhrj7g");
	this.shape_85.setTransform(85.6,91.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FAB57A").s().p("AiTBCQAqgxAtgwQBXhjAPgDQAQgDgjAzQgRAagTAaIBJgVQBNgSAKAMQAJANhAAVIhCASIAygJQAzgHAEALQAFALg2AQIg3AQIArgKQAsgHgBAKQgBALgtASIgsAPQBCgLgCAOQgCAPixAtIgUABQgVABgBACIgBAAQgCAAgKhEg");
	this.shape_86.setTransform(129.6,98.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#7F6845").s().p("AjpCQQADhfAaiFQANhEAMgwIGGCGQgSArATBtQAJA4ANAvQguAMhRAAIgDAAQigAAixg5g");
	this.shape_87.setTransform(34.5,26.7);

	this.addChild(this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.instance_5,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.instance_4,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.instance_3,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.instance_2,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.instance_1,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.instance,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.8,-8.4,241.4,347.7);


(lib.items = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var var_it00 = this.it00;
		var var_it01 = this.it01;
		var var_it02 = this.it02;
		var var_it03 = this.it03;
		var var_it04 = this.it04;
		var var_it05 = this.it05;
		
		var_it00.alpha = 0;
		var_it01.alpha = 0;
		var_it02.alpha = 0;
		var_it03.alpha = 0;
		var_it04.alpha = 0;
		var_it05.alpha = 0;
		
		
		createjs.Tween.get(var_it00).wait(0).to({alpha:1}, 600, createjs.Ease.quadOut);
		createjs.Tween.get(var_it01).wait(12376).to({alpha:1}, 600, createjs.Ease.quadOut);
		createjs.Tween.get(var_it02).wait(14251).to({alpha:1}, 600, createjs.Ease.quadOut);
		createjs.Tween.get(var_it03).wait(15000).to({alpha:1}, 600, createjs.Ease.quadOut);
		createjs.Tween.get(var_it04).wait(20000).to({alpha:1}, 600, createjs.Ease.quadOut);
		createjs.Tween.get(var_it05).wait(23489).to({alpha:1}, 600, createjs.Ease.quadOut);
	}
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(71).call(this.frame_71).wait(1));

	// Capa 6
	this.it00 = new lib.Símbolo14();
	this.it00.setTransform(818.8,-75.7,1,1,0,0,0,316.8,54.3);

	this.timeline.addTween(cjs.Tween.get(this.it00).wait(72));

	// Items
	this.it02 = new lib.Símbolo12();
	this.it02.setTransform(1076.1,181.1,1,1,0,0,0,23.1,148.1);

	this.it05 = new lib.Símbolo11();
	this.it05.setTransform(800.9,318.7,1,1,0,0,0,244.7,52.9);

	this.it04 = new lib.Símbolo9();
	this.it04.setTransform(800.9,219.5,1,1,0,0,0,244.7,35);

	this.it03 = new lib.Símbolo8();
	this.it03.setTransform(800.9,131.3,1,1,0,0,0,244.7,42);

	this.it01 = new lib.Símbolo7();
	this.it01.setTransform(800.9,43.1,1,1,0,0,0,244.7,35.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.it01},{t:this.it03},{t:this.it04},{t:this.it05},{t:this.it02}]}).wait(72));

	// Capa 5
	this.instance = new lib.Símbolo3();
	this.instance.setTransform(136,-13.8,1,1,0,0,0,137.8,36.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).to({y:42,alpha:1},26,cjs.Ease.get(1)).wait(12));

	// Capa 1
	this.instance_1 = new lib.Símbolo4();
	this.instance_1.setTransform(396.3,-13.8,1,1,0,0,0,111.6,36.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45).to({_off:false},0).to({y:42,alpha:1},26,cjs.Ease.get(1)).wait(1));

	// Capa 4
	this.instance_2 = new lib.Símbolo5();
	this.instance_2.setTransform(-286,264.7,1,1,0,0,0,116.2,178.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:266.1},26,cjs.Ease.get(1)).wait(46));

	// Capa 3
	this.instance_3 = new lib.Símbolo13();
	this.instance_3.setTransform(-487.7,356.1,1,1,0,0,0,68.3,98.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({x:8.5,alpha:1},26,cjs.Ease.get(1)).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-398.4,-124.3,1487.2,550.1);


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
	this.instance = new lib.Path_2();
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
	this.instance = new lib.Path_3();
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
	this.instance = new lib.Path_4();
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
	this.instance = new lib.Path_5();
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
	this.instance = new lib.Path();
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
	this.instance = new lib.Path_1();
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


// stage content:



(lib.lip01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
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
		
		var audio1 = createjs.Sound.play("sounds/11.mp3");
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
				if ((0 <= posicion1  && posicion1 < 183) || (5300 <= posicion1  && posicion1 < 6050) ||(9820 <= posicion1  && posicion1 < 10284) ||(15000 <= posicion1  && posicion1 < 15588) || (17826 <= posicion1  && posicion1 < 18230) || (19641 <= posicion1  && posicion1 < 20000) || (22586 <= posicion1  && posicion1 < 22929) ||(27047 <= posicion1  && posicion1 < duracion1) ) {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// items
	this.instance = new lib.items();
	this.instance.setTransform(459.6,296.5,1,1,0,0,0,320.6,174.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 2
	this.boca2 = new lib.boca2();
	this.boca2.setTransform(1634.9,261.4,0.135,0.134,4.7,0,0,143.7,56.2);
	this.boca2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.boca2).wait(2));

	// 3
	this.boca3 = new lib.boca3();
	this.boca3.setTransform(1634.6,261.3,0.117,0.116,0,4.7,4.6,162.2,46.8);
	this.boca3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.boca3).wait(2));

	// 4
	this.boca4 = new lib.boca4();
	this.boca4.setTransform(1633.4,261.8,0.157,0.157,8.6,0,0,107.4,66.3);
	this.boca4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.boca4).wait(2));

	// 5
	this.boca5 = new lib.boca5();
	this.boca5.setTransform(1633.8,262,0.132,0.124,4.7,0,0,143.2,93);
	this.boca5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.boca5).wait(2));

	// 6
	this.boca6 = new lib.boca6();
	this.boca6.setTransform(1633.5,262.6,0.152,0.151,4.7,0,0,83.7,90.6);
	this.boca6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.boca6).wait(2));

	// 7
	this.boca7 = new lib.boca7();
	this.boca7.setTransform(1635,263.2,0.144,0.121,4.7,0,0,146.9,84.4);
	this.boca7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.boca7).wait(2));

	// 8
	this.boca8 = new lib.boca44();
	this.boca8.setTransform(1635.2,257.8,1.247,1.247,10.2,0,0,20.4,12.3);
	this.boca8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.boca8).wait(2));

	// OjosCerrados
	this.ojos_cerrados = new lib.ojos_cerrados();
	this.ojos_cerrados.setTransform(1645,216,1.247,1.247,-4.8,0,0,36.5,9);
	this.ojos_cerrados.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.ojos_cerrados).wait(2));

	// CejaDerecha
	this.ceja_derecha = new lib.ceja_derecha();
	this.ceja_derecha.setTransform(1615.8,199.7,1.247,1.247,-4.8,0,0,15,5.5);

	this.timeline.addTween(cjs.Tween.get(this.ceja_derecha).wait(2));

	// CejaIzquierda
	this.ceja_izquierda = new lib.ceja_izquierda();
	this.ceja_izquierda.setTransform(1674.9,198.8,1.247,1.247,-4.8,0,0,15.4,3.7);

	this.timeline.addTween(cjs.Tween.get(this.ceja_izquierda).wait(2));

	// Bocas
	this.boca1 = new lib.boca1();
	this.boca1.setTransform(1643.6,267.6,1.247,1.247,-4.8,0,0,17.4,7);

	this.timeline.addTween(cjs.Tween.get(this.boca1).wait(2));

	// OjosAbiertos
	this.ojos_abiertos = new lib.ojos_abiertos();
	this.ojos_abiertos.setTransform(1644.9,214.8,1.247,1.247,-4.8,0,0,36.4,9);

	this.timeline.addTween(cjs.Tween.get(this.ojos_abiertos).wait(2));

	// Personaje
	this.personaje = new lib.Símbolo10();
	this.personaje.setTransform(1477.3,105,1,1,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.personaje).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(380.6,357.7,2017.7,1134.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;