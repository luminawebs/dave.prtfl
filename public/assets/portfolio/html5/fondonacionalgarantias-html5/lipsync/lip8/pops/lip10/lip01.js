(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 35,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/10.mp3", id:"10"},
		{src:"images/flash0aiActivos.png", id:"flash0aiActivos"},
		{src:"images/Mapadebits1.png", id:"Mapadebits1"},
		{src:"images/Mapadebits2.png", id:"Mapadebits2"},
		{src:"images/Mapadebits3.png", id:"Mapadebits3"},
		{src:"images/Mapadebits4.png", id:"Mapadebits4"},
		{src:"images/Mapadebits5.png", id:"Mapadebits5"},
		{src:"images/Mapadebits6.png", id:"Mapadebits6"},
		{src:"images/Sintítulo1fw.png", id:"Sintítulo1fw"}
	]
};



// symbols:



(lib.flash0aiActivos = function() {
	this.initialize(img.flash0aiActivos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,15);


(lib.Mapadebits1 = function() {
	this.initialize(img.Mapadebits1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,269,73);


(lib.Mapadebits2 = function() {
	this.initialize(img.Mapadebits2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,73);


(lib.Mapadebits3 = function() {
	this.initialize(img.Mapadebits3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,522,64);


(lib.Mapadebits4 = function() {
	this.initialize(img.Mapadebits4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,522,77);


(lib.Mapadebits5 = function() {
	this.initialize(img.Mapadebits5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,522,77);


(lib.Mapadebits6 = function() {
	this.initialize(img.Mapadebits6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,522,97);


(lib.Sintítulo1fw = function() {
	this.initialize(img.Sintítulo1fw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,70);


(lib.Símbolo14 = function() {
	this.initialize();

	// botoneras
	this.instance = new lib.Sintítulo1fw();
	this.instance.setTransform(-359,25);

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgnRAICQh3AAhuhTQg0gnhlhwIkPlDIM8AAQgngegpgsIhChHIkOlFMBchAAAIkOFFQgoArl0GpQhlBwg0AnQhuBTh3AAg");
	this.shape.setTransform(-116.2,57.1,1,1,0,0,180);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-433,5.7,633.5,102.9);


(lib.Símbolo12 = function() {
	this.initialize();

	// Items
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004F91").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape.setTransform(-529.4,24);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#004F91").ss(3).p("AgegxIAyAzIguAw");
	this.shape_1.setTransform(-531.4,298.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#004F91").ss(3).p("AgegxIAyAzIguAw");
	this.shape_2.setTransform(-531.4,197.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#004F91").ss(3).p("AgegxIAyAzIguAw");
	this.shape_3.setTransform(-531.4,109.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#004F91").ss(3).p("Ai2AAIFtAA");
	this.shape_4.setTransform(-547.7,197.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#004F91").ss(3).p("Ai2AAIFtAA");
	this.shape_5.setTransform(-547.7,109.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#004F91").ss(3).p("AC+1aIjYAAQg9AAgsArQgrAsAAA9MAAAAmNQAAA9ArAsQAsArA9AAIDYAA");
	this.shape_6.setTransform(-548.5,161.2);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-567.5,20.6,41.6,284.3);


(lib.Símbolo11 = function() {
	this.initialize();

	// Items
	this.instance = new lib.Mapadebits6();
	this.instance.setTransform(-14.3,9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.3,9,522,97);


(lib.Símbolo10 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.Símbolo9 = function() {
	this.initialize();

	// Items
	this.instance = new lib.Mapadebits5();
	this.instance.setTransform(-13.4,4.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.4,4.5,522,77);


(lib.Símbolo8 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Mapadebits4();
	this.instance.setTransform(-14.3,11.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.3,11.8,522,77);


(lib.Símbolo7 = function() {
	this.initialize();

	// Items
	this.instance = new lib.Mapadebits3();
	this.instance.setTransform(-14.3,17.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.3,17.1,522,64);


(lib.Símbolo4 = function() {
	this.initialize();

	// Items
	this.instance = new lib.Mapadebits2();
	this.instance.setTransform(16,-0.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(16,-0.3,237,73);


(lib.Símbolo3 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Mapadebits1();
	this.instance.setTransform(1.5,0.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.5,0.6,269,73);


(lib.ojos_cerrados = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


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


(lib.Path_11 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020201").s().p("AgHCHQg2heghh5QAngEAhgQQAjgSALgbIABABQAKAqAUBDQAXBLARAuQgKAPgXARQgXARgWAJIgMACg");
	this.shape.setTransform(9.6,14.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19.2,29.3);


(lib.Path_2_0 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BECAC9").s().p("AgQgNQgfAfgiAsQg2g1AChCIAFgDIAGgCQAYgEAhAOIA3AWIAMgBQAWgCArgRQAjgOAKAFIAXAHQgYA+hRA2QgMgYgig1g");
	this.shape.setTransform(13.5,6.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27,12.9);


(lib.Path_2_1 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCDAB").s().p("AAVBtQiggPg6hKQAOhWAwgtQASA/BdA4QBPAyBcAWQAeAHAVABQgCAFgJAHIgKAIQgnAEgoAAQgmAAgngDg");
	this.shape.setTransform(19.9,11.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,39.8,22.6);


(lib.Path_0 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#262E35").s().p("ABaBlQgBg3gmggQgfgZgmgBQg3gBgnAJIAHgJQANgVAAglQABgHAEgHQAIgPANAAIB0AAQAPAAAIAOQADAIABAHQAAAJACAMQAEAXAIANQALAQADAIQAHARAAAhIAAApg");
	this.shape.setTransform(11.3,10.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.6,20.4);


(lib.Path_6 = function() {
	this.initialize();

	// Capa 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9096A5").s().p("AptXRQAKgHAXgDQAagDALgEQAWgJAOgZIATzVQgGgEgBgTQgHjOABi6QgCipAHirQANlVAtgTQgFgBBPgYQAUgRAjgPIAKgLIgKAAQgiAAghgbQgfgYgNggQgTgugFhWQgFhGAGgwQgFhFASgsQgGgkAcgNQASgHAzgPQA+gmBIAKQBBAKAYAjQAzAMAeAsQAdAqgCA/QgBA0gVA9QgBAUgJAUQgKAWgQAMQgXAjgaASIAHBOIAaAlIATAMQAvAGA2ARQAvAOALAHQAdAQAaAgQAfAlANAKQALAIAtAcQAnAZAyApIABAAQASgaAvh6QAyiCAEgIQgNgggDg7QgDgvACgJQADgKAegiQAjgpATADIAEgGQAHgGAOgSQANgNAQAAQAVAAAHATQAIATgOASIgBABIgCACIAKgBIACAAQAZACAHAVQAIAVgSAOIAKANQAIAPgIAQQADAKgEAKQgDAJgIAGQgMAHgPgEQgDA7gdAdQADAGgDAJIgHAZQAKAHgDALQgNAsgwDaQg0DFg0AJQgcAFgggLQgdgLilhKIgUgJIgkgSIAFEvQACBwALC1IACAxQABARgOADIgJACIA7VjQAIAMADAKQAFAOABAYIj9ABQABgbAFgPQADgJALgQIiMzIIgGgBIg6TJQACATAAAlIABALIl3AAQAGgeAPgLg");
	this.shape_6.setTransform(64.3,153);

	this.addChild(this.shape_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,128.7,306.2);


(lib.Path_7 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#695C70").s().p("AknmnII6gBIAVNQIo7ABg");
	this.shape.setTransform(29.7,42.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,59.4,85.1);


(lib.Path_6_1 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#695C70").s().p("AiDCEIABkHIEGABIAAEGg");
	this.shape.setTransform(13.3,13.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,26.5,26.5);


(lib.Path_4_1 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#695C70").s().p("AiDCEIABkHIEGABIAAEGg");
	this.shape.setTransform(13.3,13.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,26.5,26.5);


(lib.Path_2_0_1 = function() {
	this.initialize();

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B1B6BC").s().p("AgiAjQgPgOAAgVQAAgTAPgPQAOgPAUAAQAUAAAPAPQAPAPAAATQAAAVgPAOQgPAPgUAAQgTAAgPgPg");
	this.shape_1.setTransform(5.1,5.1);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10.2,10.1);


(lib.Path_2_2 = function() {
	this.initialize();

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B1B6BC").s().p("AgiAjQgPgPAAgUQAAgUAPgOQAPgPATAAQAVAAAPAPQAOAOAAAUQAAAUgOAPQgPAPgVAAIAAAAQgUAAgOgPg");
	this.shape_1.setTransform(5,5.1);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10.1,10.1);


(lib.Path_1_25 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("AhxBDIABiFIDiAAIgBCFg");
	this.shape.setTransform(11.4,6.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.9,13.6);


(lib.Path_1_24 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("AhxBDIABiFIDhAAIAACFg");
	this.shape.setTransform(11.4,6.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.8,13.6);


(lib.Path_1_23 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("AiyBYIABiwIFkABIAACwg");
	this.shape.setTransform(17.9,8.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,35.9,17.8);


(lib.Path_1_22 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("Ai2BQIAJivIFkAQIgICvg");
	this.shape.setTransform(18.3,9.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36.6,19.4);


(lib.Path_1_21 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("AiyBYIAAiwIFlABIgBCwg");
	this.shape.setTransform(17.9,8.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,35.9,17.8);


(lib.Path_1_20 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("Ai0hRIFkgMIAFCwIlkALg");
	this.shape.setTransform(18.2,9.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36.4,18.9);


(lib.Path_1_19 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("AiyBYIABiwIFkABIAACwg");
	this.shape.setTransform(17.9,8.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,35.9,17.9);


(lib.Path_1_18 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("AiyBYIABiwIFkABIAACwg");
	this.shape.setTransform(17.9,8.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,35.9,17.9);


(lib.Path_1_17 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("AiyBYIAAiwIFlABIgBCwg");
	this.shape.setTransform(17.9,8.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,35.9,17.8);


(lib.Path_1_16 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("AmQDHIABmPIMfACIgBGPg");
	this.shape.setTransform(40.1,20.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80.2,40.2);


(lib.Path_1_15 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("AhxBDIAAiFIDiAAIAACFg");
	this.shape.setTransform(11.4,6.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.8,13.5);


(lib.Path_1_14 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("AhxBDIAAiFIDiABIAACEg");
	this.shape.setTransform(11.4,6.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.8,13.5);


(lib.Path_1_13 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("AhxBDIAAiFIDiAAIAACFg");
	this.shape.setTransform(11.4,6.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.8,13.6);


(lib.Path_1_12 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("AhxBDIABiFIDhAAIAACFg");
	this.shape.setTransform(11.4,6.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.8,13.6);


(lib.Path_1_11 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("AiABtIAUjtIDtAUIgUDtg");
	this.shape.setTransform(13,12.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25.9,25.9);


(lib.Path_1_10 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("Ah3h2IDugBIABDuIjuABg");
	this.shape.setTransform(12,12);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.1,24.1);


(lib.Path_1_9 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("AiPhiIDygtIAtDyIjyAsg");
	this.shape.setTransform(14.4,14.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,28.9,28.8);


(lib.Path_1_8 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("AiBB1IAOj2ID1ANIgND2g");
	this.shape.setTransform(13.1,13);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,26.1,26.1);


(lib.Path_1_7 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("Ah7h6ID2gBIABD2Ij2ABg");
	this.shape.setTransform(12.4,12.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.9,24.9);


(lib.Path_1_6 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("Ah7h6ID2gBIABD2Ij3ABg");
	this.shape.setTransform(12.4,12.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.8,24.9);


(lib.Path_1_5 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("AiFiMIDwAUIAbD6IjuALg");
	this.shape.setTransform(13.4,14.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,26.9,28.3);


(lib.Path_1_4 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("AiHhhIAAAAIDpgmIABAAIAlDqIjpAlg");
	this.shape.setTransform(13.7,13.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27.4,27.3);


(lib.Path_1_3 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("Ah9BvIAPjsIDsAPIgPDsg");
	this.shape.setTransform(12.7,12.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25.4,25.4);


(lib.Path_1_2 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("Ah/BtIATjsIDrATIgSDsg");
	this.shape.setTransform(12.8,12.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25.6,25.7);


(lib.Path_1_1 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("Ah4h4IDwAAIABDwIjwABg");
	this.shape.setTransform(12.1,12.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.3,24.3);


(lib.Path_1_0 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("Ah3B5IgBjwIDxgBIAADxg");
	this.shape.setTransform(12.1,12.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.3,24.3);


(lib.Path_1_26 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5D5D").s().p("Ah4B5IAAjwIDxgBIAADxg");
	this.shape.setTransform(12.1,12.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.2,24.3);


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

	// personaje
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE527").s().p("AhxBCIABiEIDhAAIAACFg");
	this.shape.setTransform(416,-73.6);

	this.instance = new lib.Path_1_25();
	this.instance.setTransform(417.8,-71.4,1,1,0,0,0,11.4,6.8);
	this.instance.alpha = 0.75;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFA21A").s().p("AhxBDIAAiFIDiAAIAACFg");
	this.shape_1.setTransform(363.4,-123.6);

	this.instance_1 = new lib.Path_1_24();
	this.instance_1.setTransform(365.1,-121.4,1,1,0,0,0,11.4,6.8);
	this.instance_1.alpha = 0.75;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#8E9EAD").ss(4.2,1).p("AgYAAIAxAA");
	this.shape_2.setTransform(364.3,-84.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#8E9EAD").ss(4.2,1).p("AhUgFICpAL");
	this.shape_3.setTransform(422.1,-137);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#8E9EAD").ss(4.2,1).p("AhRAAICjAB");
	this.shape_4.setTransform(422.4,-83.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#8E9EAD").ss(4.2,1).p("Ag6AAIB1AA");
	this.shape_5.setTransform(420.5,-89.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#8E9EAD").ss(4.2,1).p("AhRAAICjAB");
	this.shape_6.setTransform(321.3,-56.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#8E9EAD").ss(4.2,1).p("AhRAAICjAA");
	this.shape_7.setTransform(365.4,-89.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#8E9EAD").ss(4.2,1).p("Ag4AAIBxAA");
	this.shape_8.setTransform(321.2,-87.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#8E9EAD").ss(4.2,1).p("AgtACIBbgD");
	this.shape_9.setTransform(360.5,-134.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#8E9EAD").ss(4.2,1).p("AhPAEICfgH");
	this.shape_10.setTransform(363.8,-139.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#8E9EAD").ss(4.2,1).p("AhRAAICjAB");
	this.shape_11.setTransform(321.5,-137.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#8E9EAD").ss(4.2,1).p("AhjAAIDHAA");
	this.shape_12.setTransform(323.3,-176.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#8E9EAD").ss(4.2,1).p("AhjAAIDHAA");
	this.shape_13.setTransform(323.3,-186.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#8E9EAD").ss(4.2,1).p("AjBAAIGCAA");
	this.shape_14.setTransform(332.7,-192.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E5D4C7").s().p("AgRgXIAiAAIABAuIgiABg");
	this.shape_15.setTransform(321.3,-66.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E5D4C7").s().p("AgSgXIAjgBIACAwIgjABg");
	this.shape_16.setTransform(365.3,-96.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E5D4C7").s().p("AgSgXIAkgBIABAwIgjABg");
	this.shape_17.setTransform(321.3,-96.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E5D4C7").s().p("AgRAYIABgvIAiAAIAAAvg");
	this.shape_18.setTransform(423.3,-96.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E5D4C7").s().p("AgSAXIADgvIAiACIgDAvg");
	this.shape_19.setTransform(423.4,-146.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E5D4C7").s().p("AgSgXIAjgBIACAwIgjABg");
	this.shape_20.setTransform(370.7,-203.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E5D4C7").s().p("AgSgXIAjgBIACAvIgjACg");
	this.shape_21.setTransform(316.2,-203.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E5D4C7").s().p("AgSgWIAkgBIABAuIgjABg");
	this.shape_22.setTransform(362.7,-146.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E5D4C7").s().p("AgRAYIAAgvIAjAAIAAAvg");
	this.shape_23.setTransform(321.4,-147);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFBF3").s().p("AiyBYIABiwIFkABIgBCvg");
	this.shape_24.setTransform(422.9,-87.3);

	this.instance_2 = new lib.Path_1_23();
	this.instance_2.setTransform(424.7,-85.1,1,1,0,0,0,17.9,8.9);
	this.instance_2.alpha = 0.75;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFE7A4").s().p("Ai2BQIAIivIFlAQIgJCvg");
	this.shape_25.setTransform(423,-137.5);

	this.instance_3 = new lib.Path_1_22();
	this.instance_3.setTransform(424.8,-135.3,1,1,0,0,0,18.3,9.7);
	this.instance_3.alpha = 0.75;

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFE7A4").s().p("AiyBYIABiwIFkABIAACvg");
	this.shape_26.setTransform(365.3,-87.4);

	this.instance_4 = new lib.Path_1_21();
	this.instance_4.setTransform(367.1,-85.2,1,1,0,0,0,17.9,8.9);
	this.instance_4.alpha = 0.75;

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFE7A4").s().p("Ai0hSIFkgLIAFCwIlkALg");
	this.shape_27.setTransform(364,-137.6);

	this.instance_5 = new lib.Path_1_20();
	this.instance_5.setTransform(365.8,-135.4,1,1,0,0,0,18.2,9.4);
	this.instance_5.alpha = 0.75;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFE7A4").s().p("AiyBYIABivIFkAAIgBCvg");
	this.shape_28.setTransform(320.6,-57.4);

	this.instance_6 = new lib.Path_1_19();
	this.instance_6.setTransform(322.4,-55.2,1,1,0,0,0,17.9,8.9);
	this.instance_6.alpha = 0.75;

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFE7A4").s().p("AiyBYIAAivIFlAAIgBCwg");
	this.shape_29.setTransform(320.7,-87.4);

	this.instance_7 = new lib.Path_1_18();
	this.instance_7.setTransform(322.4,-85.3,1,1,0,0,0,17.9,8.9);
	this.instance_7.alpha = 0.75;

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFE7A4").s().p("AiyBYIABiwIFkABIAACwg");
	this.shape_30.setTransform(320.7,-137.6);

	this.instance_8 = new lib.Path_1_17();
	this.instance_8.setTransform(322.5,-135.5,1,1,0,0,0,17.9,8.9);
	this.instance_8.alpha = 0.75;

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFE7A4").s().p("AmPDHIAAmOIMfABIAAGOg");
	this.shape_31.setTransform(343,-183.8);

	this.instance_9 = new lib.Path_1_16();
	this.instance_9.setTransform(344.8,-181.6,1,1,0,0,0,40.1,20.1);
	this.instance_9.alpha = 0.75;

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFA21A").s().p("AhwBDIAAiFIDiAAIAACFg");
	this.shape_32.setTransform(429.6,-169.3);

	this.instance_10 = new lib.Path_1_15();
	this.instance_10.setTransform(431.5,-167.2,1,1,0,0,0,11.4,6.8);
	this.instance_10.alpha = 0.75;

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFA21A").s().p("AhxBDIAAiFIDiAAIAACFg");
	this.shape_33.setTransform(403,-169.3);

	this.instance_11 = new lib.Path_1_14();
	this.instance_11.setTransform(404.9,-167.3,1,1,0,0,0,11.4,6.8);
	this.instance_11.alpha = 0.75;

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#64DBFF").s().p("AhxBDIAAiFIDjAAIAACFg");
	this.shape_34.setTransform(429.6,-191.1);

	this.instance_12 = new lib.Path_1_13();
	this.instance_12.setTransform(431.7,-189.3,1,1,0,0,0,11.4,6.8);
	this.instance_12.alpha = 0.75;

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#64DBFF").s().p("AhxBDIABiFIDiAAIgBCFg");
	this.shape_35.setTransform(403,-191.2);

	this.instance_13 = new lib.Path_1_12();
	this.instance_13.setTransform(405,-189.3,1,1,0,0,0,11.4,6.8);
	this.instance_13.alpha = 0.75;

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#67B0F9").ss(4.2,1).p("AAAlVIAAKr");
	this.shape_36.setTransform(315.5,-96.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#67B0F9").ss(4.2,1).p("AjNAAIGbAA");
	this.shape_37.setTransform(395.4,-136.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#67B0F9").ss(4.2,1).p("AAAjdIAAG7");
	this.shape_38.setTransform(420,-111.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#67B0F9").ss(4.2,1).p("AAAmAIAAMB");
	this.shape_39.setTransform(358.9,-127.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#67B0F9").ss(4.2,1).p("AAAiNIAAEb");
	this.shape_40.setTransform(316.1,-152.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#695C70").ss(5.6,1,1).p("Ag+AAIB9AA");
	this.shape_41.setTransform(205.7,-6.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#695C70").ss(5.6,1,1).p("AgzAAIBnAA");
	this.shape_42.setTransform(164.1,-0.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#695C70").ss(5.6,1,1).p("AhBAAICCAA");
	this.shape_43.setTransform(162,-6.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EE5B49").s().p("AhxB+IgYh0QgMhEABhDIEGAAQAABjAkCYg");
	this.shape_44.setTransform(207.2,-1.4);

	this.instance_14 = new lib.Path_4_1();
	this.instance_14.setTransform(205.5,-0.7,1,1,0,0,0,13.3,13.3);
	this.instance_14.alpha = 0.602;

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EE5B49").s().p("AhxB+IgYh0QgMhEABhDIEGAAQAABjAkCYg");
	this.shape_45.setTransform(163.6,-2.7);

	this.instance_15 = new lib.Path_6_1();
	this.instance_15.setTransform(161.9,-2.1,1,1,0,0,0,13.3,13.3);
	this.instance_15.alpha = 0.602;

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#695C70").s().p("AhKAJQgGgBgBgGIAAgCQgCgIAJgCQAJgDACAKQAAgCBAgBIBIgCQAJAAAAAIQAAAKgJAAQg5gBgbABIgfACQgRAAgPgDg");
	this.shape_46.setTransform(152.3,-91.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#695C70").s().p("ABBAMQgNgEgTAAIghABQgLAAgWgBIgigCQgKAAAAgIQAAgKAKAAIAmACQAZACAMgBIAfAAQASAAANAEQAJADgCAHQgCAIgGAAIgEgBg");
	this.shape_47.setTransform(183.8,-87.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#695C70").s().p("AhFAMQgJAAAAgJQAAgIAJAAIBFABQAmgBAdgHQAJgCACAKQADAHgJACQgeAIgpAAIhGgBg");
	this.shape_48.setTransform(183.3,-92.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#695C70").s().p("AgkAIQgHgHAHgEQAKgIATABIAmABQAKAAAAAJQAAAIgKAAIgeAAIgLgBQgIgBgEADQgDACgEAAQgEAAgDgDg");
	this.shape_49.setTransform(157.1,-71.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#695C70").s().p("AhRAPQgBgKAKAAQAOgBAXgFQAZgHAKgCIATgCQALgBAJgDQATgGAPgBQAJAAAAAKQABAJgKABQgJAAgMADIgVAFQgFACgOAAQgMAAgFACIghAKQgTAFgPAAQgKAAABgJg");
	this.shape_50.setTransform(152.3,-74.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#695C70").s().p("AhUAUQgCgKAIgEQANgFAUgBIAhgFQA8gJAZgKQAJgEADAJQACAKgIADQgiAMgoAGIgnAEQgYADgPAGIgEABQgFAAgCgGg");
	this.shape_51.setTransform(152,-79.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#695C70").s().p("AAmAOQgPgHgXgDIgrgBQgJgBAAgHQAAgKAJAAQAhABANABQAbADASAJQAJACgFAJQgEAGgFAAIgFgCg");
	this.shape_52.setTransform(122,-84.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#695C70").s().p("ABFAOQgDgGgiACIglACQgaAAgFgBIgUgGQgNgFgIAAQgKAAAAgJQAAgKAKABQAJAAAQAGQARAGAJABIAaABIAcgBIAfgCQAUABAHAKQAFAIgJAFQgDACgCAAQgFAAgDgFg");
	this.shape_53.setTransform(122.5,-89.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#695C70").s().p("AA5AMQgJgGgTgBIgdgBIg8AAQgKAAAAgIQAAgKAKAAIBNABIAZACQAQACAIAGQAIAEgFAIQgDAGgEAAQgCAAgDgDg");
	this.shape_54.setTransform(223.7,-182);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#695C70").s().p("AhKAHQgDgIAJgDQAdgJAmAAQAUABAvAFQAKABAAAHQAAAKgKgBQgsgFgWAAQgjgBgcAJIgEABQgFAAgCgHg");
	this.shape_55.setTransform(223.5,-186.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#695C70").s().p("AhAADQAAgIAKAAQAQAAAjgEIAcgBIAegCQAKAAAAAKQAAAIgKAAIgeABIgcACQgiADgRABQgKAAAAgKg");
	this.shape_56.setTransform(224,-190.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#8E9EAD").s().p("ABLATQgCgEgKgBIgOgBIgxgIIgrgFQgaAAgRgEQgKgCADgKQACgJAKACQAVAFAkADQApADAPADIAgAEQAVAFAHAJQAGAIgJAFQgDACgDAAQgEAAgEgFg");
	this.shape_57.setTransform(194.4,-186.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#8E9EAD").s().p("ABMATIhNgEQgugDgfgMQgIgCACgKQADgJAIADQAfAMAqADIBMADQAKAAAAAKQAAAKgIAAIgCgBg");
	this.shape_58.setTransform(195.1,-190.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#BEE51C").s().p("AiABtIAUjtIDtAUIgUDtg");
	this.shape_59.setTransform(194.5,-184.4);

	this.instance_16 = new lib.Path_1_11();
	this.instance_16.setTransform(196,-182.5,1,1,0,0,0,13,12.9);
	this.instance_16.alpha = 0.75;

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF5592").s().p("Ah3h2IDugBIABDuIjuABg");
	this.shape_60.setTransform(222.9,-184.5);

	this.instance_17 = new lib.Path_1_10();
	this.instance_17.setTransform(224.4,-182.6,1,1,0,0,0,12,12);
	this.instance_17.alpha = 0.75;

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFE527").s().p("AiOhiIDxgtIAtDyIjyAtg");
	this.shape_61.setTransform(153.8,-73.6);

	this.instance_18 = new lib.Path_1_9();
	this.instance_18.setTransform(155.2,-71.6,1,1,0,0,0,14.4,14.4);
	this.instance_18.alpha = 0.75;

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#64DBFF").s().p("AiBB0IANj1ID2ANIgND2g");
	this.shape_62.setTransform(122.5,-85.5);

	this.instance_19 = new lib.Path_1_8();
	this.instance_19.setTransform(124,-83.5,1,1,0,0,0,13.1,13);
	this.instance_19.alpha = 0.75;

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#64DBFF").s().p("Ah7h6ID2AAIABD1Ij2AAg");
	this.shape_63.setTransform(153.6,-86.2);

	this.instance_20 = new lib.Path_1_7();
	this.instance_20.setTransform(155.1,-84.2,1,1,0,0,0,12.4,12.4);
	this.instance_20.alpha = 0.75;

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFA21A").s().p("Ah6h7ID1AAIAAD2Ij1ABg");
	this.shape_64.setTransform(183.7,-86.2);

	this.instance_21 = new lib.Path_1_6();
	this.instance_21.setTransform(185.2,-84.3,1,1,0,0,0,12.4,12.4);
	this.instance_21.alpha = 0.75;

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#695C70").ss(5.6,1,1).p("Ag5AAIB0AA");
	this.shape_65.setTransform(126.2,-149.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#695C70").ss(5.6,1,1).p("AipAAIFTAA");
	this.shape_66.setTransform(137.4,-156.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#695C70").ss(5.6,1,1).p("AhJAAICTAA");
	this.shape_67.setTransform(127.8,-164);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#695C70").ss(5.6,1,1).p("AifAAIE/AA");
	this.shape_68.setTransform(136.4,-171);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#695C70").ss(5.6,1,1).p("AiQAAIEhAA");
	this.shape_69.setTransform(134.9,-178);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#1784AD").ss(8.4,1,1).p("AhYAAICxAA");
	this.shape_70.setTransform(136.6,-189.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#A72E1F").s().p("AgqAjIAKABQAVAAANgPQAOgPAAgTQAAgUgOgQQASAEALAOQAMAOAAARQAAAUgPAPQgPAPgTAAQgVAAgPgPg");
	this.shape_71.setTransform(110.1,-197.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F24938").s().p("AgiAkQgPgPAAgVQAAgTAPgPQAPgPATAAQAVAAAPAPQAOAPAAATQAAAUgOAPQgPAPgVAAQgTAAgPgOg");
	this.shape_72.setTransform(109.4,-197.9);

	this.instance_22 = new lib.Path_2_0_1();
	this.instance_22.setTransform(110.1,-196.6,1,1,0,0,0,5,5);
	this.instance_22.alpha = 0.5;

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#A72E1F").s().p("AgqAiIAKACQAVAAANgPQAPgPAAgTQAAgVgPgPQASAEALAOQAMAOAAARQAAAUgPAPQgPAOgTAAQgVABgPgQg");
	this.shape_73.setTransform(165.9,-197.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F24938").s().p("AgiAjQgPgOAAgVQAAgUAPgOQAPgPATAAQAVAAAOAPQAPAOAAAUQAAAVgPAOQgOAPgVAAQgTAAgPgPg");
	this.shape_74.setTransform(165.2,-197.4);

	this.instance_23 = new lib.Path_2_2();
	this.instance_23.setTransform(165.9,-196.1,1,1,0,0,0,5,5);
	this.instance_23.alpha = 0.5;

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F2FAFD").s().p("AkXAfQAEikAAkSII8gBQABEtgECjQgEDCgOCeIo8ABQANi9AEi9g");
	this.shape_75.setTransform(136.6,-159.1);

	this.instance_24 = new lib.Path_7();
	this.instance_24.setTransform(138.9,-156.5,1,1,0,0,0,29.7,42.5);
	this.instance_24.alpha = 0.602;

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#695C70").s().p("ABDAOQgMAAgZgDQgYgDgLAAIggAAQgSAAgNgEQgJgCADgHQACgKAJACQAOAEAUAAIAggBIAgAEQAVADALAAQAJAAAAAIQAAAJgJAAIAAAAg");
	this.shape_76.setTransform(560.6,-170.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#695C70").s().p("AA+ARQg8gQhCAAQgJAAAAgIQAAgKAJAAQBEAAA/ARQAJAAgCAKQgCAIgHAAIgDgBg");
	this.shape_77.setTransform(537.1,-91.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#695C70").s().p("AAcAMIgcgEQgOgDgHABQgEAGgIgEQgIgDACgGIABgDQABgFAGgCQAMgDATAEIAhAGQAKACgDAHQgCAIgHAAIgDgBg");
	this.shape_78.setTransform(534.4,-121);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#695C70").s().p("AApAQQgLgDgGgBQgOAAgPgEIgfgCQgSgBgKgGQgHgGAHgHQAHgHAHAGQAFADAJABIAQAAIAWADQAKACAWACIAMADQAIABAEAAQAKAAAAAKQAAAJgKAAQgGAAgLgDg");
	this.shape_79.setTransform(533.9,-125.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#695C70").s().p("AgVAQQgIgDABgIIABgDQACgDAFgBQAGgCANgFQAKgGAHgBQAKgCACAKQADAIgJABQgHABgKAEIgPAHQgCAEgEAAIgFgBg");
	this.shape_80.setTransform(558.7,-113);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#695C70").s().p("AhGASQgCgJAJgDIBBgPIA5gPQAJgCADAJQACAKgJACIg4ANIhCARIgDABQgHAAgCgIg");
	this.shape_81.setTransform(559.3,-118);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFE527").s().p("AiBBuIAUjvIDvAUIgUDvg");
	this.shape_82.setTransform(561,-170.3);

	this.instance_25 = new lib.Path_1_5();
	this.instance_25.setTransform(562.8,-167.3,1,1,0,0,0,13.4,14.1);
	this.instance_25.alpha = 0.75;

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#695C70").s().p("AhNANQgDgKAJgDQAXgIAqgEIAkAAQAYgBANgFQAJgDADAJQACAKgJACQgLAEgTAAIgfABIgmAEQgXADgQAGIgFABQgFAAgBgGg");
	this.shape_83.setTransform(557.5,-121.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#695C70").s().p("AhBACQAAgIAKgBQA1gDA6AAQAKAAAAAKQAAAHgKAAQg6AAg1AEIgCAAQgIAAAAgJg");
	this.shape_84.setTransform(527.9,-181.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#695C70").s().p("AAxALQgKgEgOAAIgYABIg0AAQgJAAAAgIQAAgJAJAAIA6gBIAYAAQANAAAKAEQAJADgDAIQgBAGgGAAIgEAAg");
	this.shape_85.setTransform(528.7,-186.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#695C70").s().p("Ag4ALQgJABAAgKQAAgIAJAAQAqAAATgDQAZgEAcAEQAGABABAGIABACQACAHgIADQgHAEgEgGQgLgBgQABIgYADIgbABIgbgBg");
	this.shape_86.setTransform(561.2,-181.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#695C70").s().p("AhOADQAAgIAJgBQAvgEAXAAQAogBAfAFQAJACgCAHQgDAKgJgCQgdgFgmABIhFAFIgBAAQgIAAAAgJg");
	this.shape_87.setTransform(560.5,-185.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#695C70").s().p("AAPAMQgPgGgRAAQgJAAAAgIQAAgKAJAAQAUABARAGQAJAEgDAHQgCAHgFAAIgEgBg");
	this.shape_88.setTransform(596.1,-184.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#695C70").s().p("AAwAJQgDgGgTACIgZAEQgKABgTgDQgWgEgIAAQgJAAAAgIQAAgKAJABQALAAAdAEQAJACAKgBIAVgDQAlgCAIASQAEAIgKADIgEAAQgGAAgDgGg");
	this.shape_89.setTransform(593,-188.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#BEE51C").s().p("AhiCIIgljqIDpglIAmDpIAAAAIjpAmg");
	this.shape_90.setTransform(557.6,-119);

	this.instance_26 = new lib.Path_1_4();
	this.instance_26.setTransform(556.2,-117,1,1,0,0,0,13.7,13.7);
	this.instance_26.alpha = 0.75;

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#BEE51C").s().p("Ah9BvIAPjsIDsAPIgPDsg");
	this.shape_91.setTransform(537.2,-91.1);

	this.instance_27 = new lib.Path_1_3();
	this.instance_27.setTransform(535.8,-89.2,1,1,0,0,0,12.7,12.7);
	this.instance_27.alpha = 0.75;

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFA21A").s().p("Ah/BtIATjsIDsATIgTDsg");
	this.shape_92.setTransform(533.9,-120.9);

	this.instance_28 = new lib.Path_1_2();
	this.instance_28.setTransform(532.5,-119,1,1,0,0,0,12.8,12.8);
	this.instance_28.alpha = 0.75;

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF5592").s().p("Ah4h3IDwgBIABDwIjwABg");
	this.shape_93.setTransform(592.2,-183.6);

	this.instance_29 = new lib.Path_1_1();
	this.instance_29.setTransform(593.7,-181.7,1,1,0,0,0,12.1,12.1);
	this.instance_29.alpha = 0.75;

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#64DBFF").s().p("Ah4h4IDxAAIAADwIjwABg");
	this.shape_94.setTransform(529,-183);

	this.instance_30 = new lib.Path_1_0();
	this.instance_30.setTransform(530.5,-181.1,1,1,0,0,0,12.1,12.1);
	this.instance_30.alpha = 0.75;

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#64DBFF").s().p("Ah4h4IDxAAIAADwIjwABg");
	this.shape_95.setTransform(560.5,-183.1);

	this.instance_31 = new lib.Path_1_26();
	this.instance_31.setTransform(562,-181.2,1,1,0,0,0,12.1,12.1);
	this.instance_31.alpha = 0.75;

	this.addChild(this.instance_31,this.shape_95,this.instance_30,this.shape_94,this.instance_29,this.shape_93,this.instance_28,this.shape_92,this.instance_27,this.shape_91,this.instance_26,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.instance_25,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.instance_24,this.shape_75,this.instance_23,this.shape_74,this.shape_73,this.instance_22,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.instance_21,this.shape_64,this.instance_20,this.shape_63,this.instance_19,this.shape_62,this.instance_18,this.shape_61,this.instance_17,this.shape_60,this.instance_16,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.instance_15,this.shape_45,this.instance_14,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.instance_13,this.shape_35,this.instance_12,this.shape_34,this.instance_11,this.shape_33,this.instance_10,this.shape_32,this.instance_9,this.shape_31,this.instance_8,this.shape_30,this.instance_7,this.shape_29,this.instance_6,this.shape_28,this.instance_5,this.shape_27,this.instance_4,this.shape_26,this.instance_3,this.shape_25,this.instance_2,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.instance_1,this.shape_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(104.4,-206.4,501.4,218.9);


(lib.Símbolo5 = function() {
	this.initialize();

	// personaje
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E86060").s().p("AgWAJIgDgBQgIgDgGgFQAjgSAsAKIgEAFQgKAGgJAEQgMAFgKAAQgJAAgIgDg");
	this.shape.setTransform(28.5,49.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#6E203A","#A32F34"],[0,0.953],0.1,2.7,0,-2.7).s().p("AgSAYIgDgBQgMgFgHgIQgPgMgFgUQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBIAGAAQAOASAoAAQAogBAOgQIAFAAQAGgBgGANQgHAMgMAKQgKAJgJAEQgNAFgJAAQgJAAgIgDg");
	this.shape_1.setTransform(28.1,48.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTAYIgDgBQgOgGgLgOQgKgKgEgPQgBgEAJAAQAfADAWAAQAhABAagDQAJgCgOAVQgPAUgSAIQgNAFgKAAQgJAAgIgDg");
	this.shape_2.setTransform(28.1,48.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#14181C").s().p("AgQg6IAhAnIgcBPQgChIgDgug");
	this.shape_3.setTransform(100.2,102.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#14181C").s().p("AgzAFIgBAAIAQgvQAiAUAdAgQAQASAKAPQg/ghgpgFg");
	this.shape_4.setTransform(-6.1,118);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3E464C").s().p("AiKCIQgyh1gMhpQgBgGAGgDIA5gYIABgCIgBgCIg+geQgHgDACgGQAUhBAbgwQAMgVAjgUQARgKAPgFQgaAfgBAOQgVFjBpDlQAhhfA1jDQA2jCAihfQAHgRgHgNIgKgQIAbARQAcAVADAWQAGAnAABGQAAAGgGACIhJAcQAAABgBAAQAAABAAAAQAAABAAAAQAAABABABIA0AaQAHADgDAIQgaBgg9B0QgnBLhNB+QhDhOgzh3g");
	this.shape_5.setTransform(37.1,95.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#14181C").s().p("AiSCHQg1hzgOhpIBRgfIhPgbQAUhMAgg1QAMgWAggTQAQgKANgGQgKALgIAHQgLAJgBAOQgRFqBvDnQAjhiA1jBQA4jFAihfQAGgRgHgPIgLgPIAeASQAfAVADAVQADAaABAlIACBAIgsALQgbAFgQAFIBAAkQgYBhhBB0QggA5hbCNQhIhRg1hyg");
	this.shape_6.setTransform(37.2,95.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCFCFC").s().p("AgOASQglAigYAjQg1gogGhAQAPgMAOgRQARgTAMgMIAKAnQASAmAsAHQAhgDAZgbQAWgaAIgmQAjAzAQAVQgeA/hHAoIgwhGg");
	this.shape_7.setTransform(39.7,66.8);

	this.instance = new lib.Path_2_0();
	this.instance.setTransform(39.9,70.9,1,1,0,0,0,13.5,6.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#14181C").s().p("AgOCeQgeiqBEihIgOEEQgKArgKAoIgCAEg");
	this.shape_8.setTransform(8.8,105.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#14181C").s().p("AgeAbIgChiIBBCPg");
	this.shape_9.setTransform(73.8,98.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#363C45","#22292D"],[0,1],-126.1,-40.4,0,-126.1,-40.4,155.5).s().p("AiAC5QgPgIg7gmQASgYAgg9QAagyAYgTIAPAPQAigdA1g5QAxg3AqgyIBwBLQhFCShfBZQhMBJg0AAQgXAAgQgHg");
	this.shape_10.setTransform(110.8,100.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#363C45","#22292D"],[0,1],4.9,-67.4,0,4.9,-67.4,155.5).s().p("AAxBmQiigrhugbQATAEAPgWQAOgSAFggQAFgbgHgXQgGgVgMgDQDVAXBCAAQAjAZA1BNQAxBJgDACQghAVg5AAQglAAgvgJg");
	this.shape_11.setTransform(-20.3,127.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FCFCFC").s().p("AhFgBIAkg0IBnAvIgeA8g");
	this.shape_12.setTransform(125,84.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#14181C").ss(3.1,1).p("AAAkIIABIR");
	this.shape_13.setTransform(35.2,153.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#14181C").s().p("AhEAhIAihlQAuAHA5ARQgxAGgbAzIgVA4g");
	this.shape_14.setTransform(57.5,71.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#363C45","#22292D"],[0,1],-73.6,-61.6,0,-73.6,-61.6,155.5).s().p("AnkIoQgIjtACjQQABhuAEiBIADhqQAQheAFgqQAIhHgKhCQARgOAlgNQA0gSAigLQgVDiAsDHQAiCbAmAjQAAgLA4i6QA1i1AsiMIAhhnQAvAHA4ARQAtANAWALQAiATApAnQAWAWAoAsICJCYIAiAoQAlArASAYQgoAJgpAYIhLAvIhzhOIhghCIADElQACCBAJCzIAICUQh7AcjHACIgrABQirAAhegWg");
	this.shape_15.setTransform(58.2,121.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#363C45","#22292D"],[0,1],-16.8,-42.5,0,-16.8,-42.5,155.5).s().p("AhHEYQgrgyghAJQADgPARg9IAOgxQBBjcAbhEQAsh2BtgtQAaA1gPBuQgSCDAGAnIgNgnIgCAZIgpCpQgtCugZANQgdgDgvg3g");
	this.shape_16.setTransform(1.5,102.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F1F2F1").s().p("AiKC9IgYgJQABhFABgUQADgyAMglIAQAQQATgVBHhMQBAhJAggnIBqAnQg9CghuBoQgpAmgnAWQgeAQgPAAIgFgBg");
	this.shape_17.setTransform(114.9,100.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D4DDDD").s().p("AgGgCIANACIgDADIgKgFg");
	this.shape_18.setTransform(0.5,120.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#732C1C","#592820"],[0,1],-6.7,30.2,34.5,-8.7).s().p("AATBDQgeAAgdglQgKgMgCgQQgCgLADgLQACgIAMgFIAfgJQAegIAdgQQADAigDAgQgFBDgdAAIAAAAg");
	this.shape_19.setTransform(22,9.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#422826").s().p("AgMATQgGgIAAgLQAAgKAGgIQAFgIAHAAQAHAAAGAIQAGAIAAAKQAAALgGAIQgGAIgHAAQgHAAgFgIg");
	this.shape_20.setTransform(20,32.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#EF8E73").ss(2.7,1).p("AgWgCQAGADAQACQAPACAHgF");
	this.shape_21.setTransform(25.6,41);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F8A383").s().p("AglBAIgHhbQAZgoAcADQAVADAKAXQALAYgLAcQgPArggAIg");
	this.shape_22.setTransform(51.7,35.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#732C1C","#592820"],[0,1],-19.9,21.5,21.3,-17.4).s().p("AB1CZQgOAFgIgEQgNgGAAgvQAAgUgVgYQgUgYAAgsQABgbgWAMQgbAQgoAKQguAIgpgEQghgDgOgPIgHgSQgUAogIA0QgFhRAXguQAEgHAMgCQAOgBAFgGQBJhRBhAJQAmAEAdAPQAbAPAGAPQA/ALAfA/QAkBKgpBzg");
	this.shape_23.setTransform(37,16.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6F2B1D").s().p("AgfAIQgDgFALgFQALgGALgBIAFgBIAHAAQALAAAGADQAGAEgBADQgBAIgVAAIgEAAIgZADIgFAAQgHAAgBgDg");
	this.shape_24.setTransform(19.2,26);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6F2B1D").s().p("AAYALIglgDQgZAAgCgIQAAgEAHgDQAIgEAMAAIAMAAQARABAOAIQANAHgDAFQgCACgEAAIgKgBg");
	this.shape_25.setTransform(33.9,26.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#422826").s().p("AgMATQgGgIAAgLQAAgKAGgIQAFgIAHAAQAHAAAGAIQAGAIAAAKQAAALgGAIQgGAIgHAAQgHAAgFgIg");
	this.shape_26.setTransform(34.4,32.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F8A383").s().p("AiLD3QgdgYgMgeQgSgsgFhMQgDgpABhEQAAgjAGghQAIgoAVgjQAYgpAngZQAxgfBFAEQBEAEAtAgQAuAhAVA2QAZA+gQBKIgJAcIg/BBQAABXg9A3Qg6A0hVAAQgfAAgggbg");
	this.shape_27.setTransform(35.7,30.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D87E6A").s().p("AgtA+QgQgFgLgKQgNgLgCgOIAEgDIADgCICYhnQAEBUAKBQIACAJQhSgKgzgPg");
	this.shape_28.setTransform(39.7,52.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E0372F").s().p("AgmFSIgYgWQgbitAejOQAXiiAfg/QgTgJgEglIAAgkIA1gIIAwAJIgNAlQgRAlgUAHQAFAtAJCBQAGBGAGCPQAHCCAUBXQgCAJgIANQgPAZgcAPIABABQgfgPgfgag");
	this.shape_29.setTransform(36.5,106.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FCFCFC").s().p("AAQG6QhyAAh+gTQghjtgJimQgMjXAUi7QAVgJCHgxQAWgFAkARQApATAOAAQAUABAogQQAogPAVABQBdAfAvAOQgrDBgCDWQAAC7AfDeQh6AThyAAIgGAAg");
	this.shape_30.setTransform(37.9,108.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F8A383").s().p("AgnC2QhtgFgJh9QArgOAPgJQAVgOgCgTIgHhIICZhpQAEBVAJBRIACAKQAJAXAiASQASAJAQAEQADAkgXAiQgsA/hyAAIgTAAg");
	this.shape_31.setTransform(40.3,62.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#732C1C","#592820"],[0,1],-35.8,4.8,5.5,-34.1).s().p("AhQBDIANg9IBPhVQBPhMgJA6QgKBGgiA9QgpBRg5AIIgDAAQgYAAAHg4g");
	this.shape_32.setTransform(49.9,36.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F8A383").s().p("AgDBoIgGgBIAAAAIgkgGIgGgCIgfgPQgIgDgDgKIgPgHQgOgGABgQIgVgKQgIgDgDgJQgDgIADgIIABAAQgJgIAEgMQADgIAIgEQAIgDAJADIA0ATIABABIA2ADIAFABQATgGAWgJQgIgVgDgCQgFgDgOgDIgXgFQgQgFgGgEQgLgJADgRQACgLAOgBQAIAAAGABIBKAMQAoAGAnAtIAUAFIAIANQAJARgCARQgCAegSAZIgKgCQgcAdgvAIQgRADgRAAIgXgBg");
	this.shape_33.setTransform(-56.4,119.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FCFCFC").s().p("AggA0QgJgCgCgJQgFgcABgYQACgnATgQIADgBIBIALIgGB8g");
	this.shape_34.setTransform(-39.3,122.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#14181C").s().p("AgZBHQgRgFgBgXQgBgTAJghQAKgiAKgOQALgRAMADQAUADAKAYQALAYgJAcQgIAfgUATQgNAPgPAAIgJgCg");
	this.shape_35.setTransform(-40.1,123.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F8A383").s().p("AgXAZQAIgVgFgMQgGgQALgLQAGgFAGgDIAjARIgMBEIg0ACQAFgIAEgLg");
	this.shape_36.setTransform(124,80.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F8A383").s().p("AgYB8QgagRgJghQgIghAQg5IASg0IAlglQAogjAKAKQAUASgbAbIgnApIgCAyIASApQALAxgjAlQgLgBgNgIg");
	this.shape_37.setTransform(127.5,70.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D87E6A").s().p("AgwBSIgIgFIAAiMIArgXIBGAzIgNA6QgWA8guADIgFABQgMAAgHgFg");
	this.shape_38.setTransform(131.8,74.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D87E6A").s().p("AACASIgMgCQgIgCgFgHQgFgGABgGQACgHAIgDQAHgEAJACIALACQAJACAFAHQAFAGgCAGQgCAHgHADQgEACgGAAIgGAAg");
	this.shape_39.setTransform(140.4,62.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D87E6A").s().p("AgBAZQgHgEgEgIIgHgMQgDgGACgIQACgIAHgDQAHgDAFADQAIAEADAIIAHAMQAEAGgCAIQgCAIgHADQgDACgEAAQgEAAgCgCg");
	this.shape_40.setTransform(140.2,67.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D87E6A").s().p("AAAAXQgHgDgEgIIgGgLQgEgGADgHQABgIAHgDQAGgDAGAEQAGADADAIIAIALQADAGgCAHQgDAIgGADIgGABQgDAAgCgCg");
	this.shape_41.setTransform(139.7,70.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D87E6A").s().p("AAOAUIgkgIQgIgDgFgGQgEgEACgHQABgHAHgDQAIgDAIACIAkAIQAIACAFAGQAEAEgCAHQgBAHgHAEQgFACgEAAIgHgBg");
	this.shape_42.setTransform(136.6,68.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D87E6A").s().p("AAFBIQgHgEABgLIgGgBQgJgFgBgLQgKADgIgHIgBAAIgHgCQgJgDgEgJQgDgKADgIIAYg/QAEgJAJgEQAJgDAJAEQAKAFADAMQAMgGAKAIQALAKgGAPQALAIgGAPQADgBADACQAHADABAFQACAIgFAHIgYArQgEAHgIADIgHABQgEAAgDgCg");
	this.shape_43.setTransform(132.1,68.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D87E6A").s().p("AgbAYQgIgDgDgHQgCgIAEgGQAFgGAJgDIAigOQAJgDAIADQAIADACAHQACAIgEAFQgFAHgIADIgjAOIgIACQgEAAgEgCg");
	this.shape_44.setTransform(137.2,67.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D87E6A").s().p("AgdAgQgJgDgDgIQgEgIAEgIQADgGAJgEIAqgYQAJgEAIADQAJACADAIQAEAIgEAIQgDAGgJAEIgqAYQgFADgGAAIgGgBg");
	this.shape_45.setTransform(136.6,64);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D87E6A").s().p("AgcAaQgFgGABgJQACgIAHgFIAXgVQAFgGAJgBQAJAAAFAFQAGAGgCAJQgBAIgHAFIgYAUQgFAHgJABIgBAAQgIAAgFgFg");
	this.shape_46.setTransform(137.4,56.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D87E6A").s().p("AgpAtQgFgFAAgJQABgJAGgHIAzg2QAHgHAIgCQAJgBAFAFQAGAFAAAJQgBAJgHAHIgyA3QgGAHgJABIgEAAQgGAAgFgEg");
	this.shape_47.setTransform(132.9,61.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#14181C").s().p("ADBARQhMgbhjgPQjjgjhcA2IAAhLIJVADIAGCgQgcgjhRgeg");
	this.shape_48.setTransform(40.7,184.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#262E35").s().p("AjWMuQhSgNgtAMIAa54IJJAAIADCYIABAFIgEBOIALAmIA9WBQgdgOhJgCQhIgCgbALIiW1SIgBACIgmgGIhAViQgagShMgMg");
	this.shape_49.setTransform(42.6,245.8);

	this.instance_1 = new lib.Path_0();
	this.instance_1.setTransform(67.4,332,1,1,0,0,0,11.3,10.2);
	this.instance_1.alpha = 0.148;

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1E1815").s().p("Ah4AUIAAgnIDxAAIAAAng");
	this.shape_50.setTransform(66.6,340.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#803F33").s().p("Ah4BiIABgmQABgcAEgPQADgKAIgJIAGgJQANgUAAglIAFgOQAIgPAOAAIBzAAQAPAAAIAPQADAHABAHIACAVQADAXAJANQAMASACAFQAHAPAAAhIABAmg");
	this.shape_51.setTransform(66.6,331.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1E1815").s().p("AB3AeIAAgVIhBAVIjwAAIABgjQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIACAAIDpAAQAKAAANgEIArgOIAXgGIAuAAQACAigEAZg");
	this.shape_52.setTransform(13,339.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#803F33").s().p("ACDA+Ih9AjIi+AAIAAgOIABgSQADgdAJgLQALgOAZAAQAxAAAeglQAKgOANghQAJgVAWgDQAWgDATACQAKACAUAFQANAEAIAJQAIAKABANQAFAiAaAAQAPAAAFgXQACgJAAgYQAAgMADABQADAAADAEQAQAWAGAqQACAVAAAtIgCAzIgzACg");
	this.shape_53.setTransform(13,331.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E0E0E0").s().p("AiXB2QAGgHArAAQAdAAAdgiQAagfAQguQAIgaAEg6IAFhaICEAAQgEANAHANQAIAOgDAGQgfBUAWBTQAIAegHAjQgDATgFAMIkmAoQAAg0AEgFg");
	this.shape_54.setTransform(14.2,322.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#020201").s().p("Ag0AWIAAgVIBpgVIAAAqg");
	this.shape_55.setTransform(20.8,339.9);

	this.instance_2 = new lib.Path_6();
	this.instance_2.setTransform(76.9,189,1,1,0,0,0,64.3,153);
	this.instance_2.alpha = 0.25;

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#30363D").s().p("AgLAoQgEgYgBgQQgBgVACgTQAAgEAEgDQAEgCAEAAIAHABQAJACAAAKQgCAVACAVIAEAcQACANgOACIgFABQgJAAgCgKg");
	this.shape_56.setTransform(-213.7,153.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#30363D").s().p("AgIAoQgEgOgDgTQgDgQgBghQAAgGAHAAIAPgBQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAABAAAAQAAABAAAAQABAgADAQIAGAcQADAMgPAEIgFABQgIAAgCgKg");
	this.shape_57.setTransform(-183,154.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C16D2F").s().p("AgWAKIANgXIAGAFQAHAHASAFIgVAIQgHACgFAAQgIAAgDgEg");
	this.shape_58.setTransform(-153.7,111.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B6CECD").s().p("Ah5C/QgagJgLgiQAfgTA+hQQAngxA8hZQAmg4AXgWQApgpAXAYIAAADQAHBBg2BfQg8BphqBXQgcAXgXAAQgJAAgHgDg");
	this.shape_59.setTransform(-149.9,123.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#803F33").s().p("AhIAmQhPgFg0gKQgQgDgKgEQgegIgBgJQgFgaADgLQAMAEAXAFIAZAFQA4AJBLAEQBMADBIgDIAagCQBsgGAygVQADAPAAARQAAAIgIAEQgnAahuAIIgaACIg/ABQgrAAgvgDg");
	this.shape_60.setTransform(-192.4,151.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#23292D").s().p("ADCAtIkNgRQg3gDhBgGIhHgHQAGggAGgNIAagBIAFABIAZAFQA3AJBMADQBLAEBJgDIBBgFQBNgHApgRQADAQAAAQQAAAJgIADIgVAdQgMAQgaAAIgGAAg");
	this.shape_61.setTransform(-192.7,153);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgPGLQgcgRgFgtQgEgiAUggQAeguBFiSIjQjOQg2g0gohGQg6hiAfgyIBNAKQBXAPAyAXQAaANAsArIBKBIQAnAkA2BMQArA9AhA2QAIAOABAIIAAADQACA9g3BgQg9BqhkBXQgdAZgYAAQgLAAgLgHg");
	this.shape_62.setTransform(-161.5,102.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D77E6A").s().p("AgTA8QgfgKgSgiQAHAMAPAIQAOAHAOgJQANgJAAgQQgEg6AhgNQAHAeAUAVQAKALAIACQgKATgQARQgYAZgWAAQgIAAgIgDg");
	this.shape_63.setTransform(-165.9,137.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F8A383").s().p("AgHBhQgkgMgTgqQgPghgCgjQgCgMAEgPQAFgVASgTIAHgFQAJgEAIAGQAKAGgHAXQgDAIgBALQAMALATgYQAJgLAHgOQAHgKAGAAQAGAAgBAIQgGAhAHAcQAHAdAUAVQAKAKAJAFQgKATgRARQgYAZgXAAQgHAAgHgDg");
	this.shape_64.setTransform(-167,133.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#14181C").s().p("AANinIhXhWIB7AnIAaHUg");
	this.shape_65.setTransform(-202.1,193.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#C16D2F").s().p("AgoANIgHhVQAKgEAkADQAfgDAEgdQACAwAMBCQgCBMgHAMQgHAFgIAEQgwgGgQhXg");
	this.shape_66.setTransform(-170.3,137.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#B6CECD").s().p("AjUGHIgEAAIgagDIgVgEIgEgCIAAgBIAAgBIAAAAIACgEQAFgLgFgEIgEgFIgBgBQgEgIgEgTIAAAAIAAAAQCbA1B7gkQB1gjA0hkQAfg+AMhgQALhcgGiLQgDhVAMgzQANg1AhgdIACAOQAKBUgLCyQgGBZgIBGQAHCPgDBbQgCBAgGAVIgBACQgHAFgJAEQg3AYifAFIhKABQhZAAhJgHg");
	this.shape_67.setTransform(-191.8,111.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AjOG6IgEgBIgagDIgVgEIgEgCIAAgBIAAAAIAAgBIACgEQAFgKgFgEIgEgFIgBgCQgEgHgEgTIAAgBQgPhGAGjGIAJi1IABisQgUg0AVg0QArhnDLAAQBUAABXATQBHAQAnAVQAPAHAGApIACAOQAKBUgSC6QgIBbgLBMQAABUAIDbIABAbQgqAQiqAAIgOAAQiQAAhigJg");
	this.shape_68.setTransform(-192.4,106.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#23292D").s().p("AAIE1IgEmvQgEh/gLigQgak/gqigIgFgTIBgAUIAZAtIAaL1IAWPFQgXANggAJIgdAHQAJiLgCnNg");
	this.shape_69.setTransform(-169.9,235.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#30363D").s().p("AhTOEIhg4vIA5h0IABgBIBThmIACgBICQABIAYAtIAwa6QgXANgfAIIgeAHQgrAIgtACIgbABQgiAAgegEg");
	this.shape_70.setTransform(-179.4,237.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#23292D").s().p("Ag/AgQAzoUgEkPICpAhIAAAXQgTAdgPAUIghAzIgGAZIg5HbIg3NeQgQAFgsAJIg8ALQAuksArm4g");
	this.shape_71.setTransform(-199.2,250.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#30363D").s().p("AjbOMIgjgFIAYoNQAaogAXk3QAAhoAGhfQAGhmALg6QAGgdAGgQIFbgaIAzAAIACAmIABAvQABBogIAZQgOAugmA+QgTAdgPATIghA0IgTAZIgsHYIhkNpQgkALgnAGQgvAGgmAAIgZAAg");
	this.shape_72.setTransform(-203.5,237.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F9A387").s().p("AgCBAQgLgHgFgqQgIhCASgLQAMgJAJAUQAIASABAhIgFAtIgKASQgDADgDAAQgBAAgCgCg");
	this.shape_73.setTransform(-172.3,31.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#512D2D").s().p("AhED1QgngDgcgVQgZgTgXglIgMgUQA9AYBHgXQA/gVA5g2QA6g+ATheQAVhqg1g1QAaAQAUAZIANARIAAAAQAUAeAJAjQAMAngNAjQgFAMgJAQQgIAOACARQAIBLgfgZIgTgFIgDAZQgBAHgFAPQgNAqgcAhQgcAhglARIgEACQgdAOgjAAIgMAAg");
	this.shape_74.setTransform(-185.9,23.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#5B3231").s().p("AgpEGQgxgEgigjQgQgQgPgZIgNgUQhJiBAahpQAVhRA1gZQAIg4BcgUQBegWBNAxQAaAQAUAZIAMARIABAAQATAeAKAjQAJAdgGAeQgEASgMASQgKASACAUQAHBLgfgZIgTgFIgDAZQAAAHgFAPIgKAYIgHAQQggA7g6AaIgDACQggAOghAAIgMAAg");
	this.shape_75.setTransform(-188.7,21.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D77E6A").s().p("AACA7QgNgHgFgqQgEgdADgQQACgPALgHQAWgOACBLIgFA1QgEADgEAAIgFgBg");
	this.shape_76.setTransform(-173.6,32.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AieAbIAjggQAwgiBFAAQBDgBA4AoQAcAUAOAVg");
	this.shape_77.setTransform(-191.1,60.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F9A387").s().p("AhmCkQgMgHgGgSQgHgcgHgVIAcgeQAbgkAEgbQAFgyAAgeQgBg+gVgdIDDBMIgGA2QgGA3ACAPQADAgABABQAGAMAgAKQgEA5gMAPQgRAXg7AAQh+AAgTgMg");
	this.shape_78.setTransform(-190.1,58.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#B6CECD").s().p("AgSG+IgmjOQgVhwgOhzQAEAUAOAJQAQAKAUgIQAwgVgEhRQgBgjADiOIADilIgMg6IBIATIALFPIgUBVIAIAXQAKAkAFAuQAQCUgdDOQgYARgcACIgEAAQgWAAgNgNg");
	this.shape_79.setTransform(-223,134.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("Ag7G3Qg9idgRiFQgHg6AXjTQAckMA7hqQAPgcA2gbQAygZAmgEQAkgFgpDwQgbCcg1DfIgUBVIAHAZQAIAjADAtQAMCTgdDOIgDABQgVAAg2iNg");
	this.shape_80.setTransform(-218.5,120.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F7A282").s().p("AgSBrQgQgggFgiQAAgFAPg4QAQg6gGgoQgEgeAWAWQAMALAMARQAWAqgTAjQgJARgOAHIgGAfQADAMATAoQAOAlgRAKQgFADgFAAQgOAAgPgdg");
	this.shape_81.setTransform(-222,186);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F7A282").s().p("AABAhQgEgDgDgGIgPghQgDgGACgIQADgGAGgDQAGgDAHADQAFADADAGIAOAhQADAHgCAHQgCAGgHADIgGABIgHgBg");
	this.shape_82.setTransform(-213.6,192.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F7A282").s().p("AgQAnQgHgDgDgIQgDgIAEgIIASgmQADgIAFgDQAIgEAIADQAHAEADAIQADAHgDAIIgSAmQgDAIgGAEQgEABgEAAQgEAAgEgBg");
	this.shape_83.setTransform(-213,194.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F7A282").s().p("AAIAqQgIgCgCgIIgbgsQgEgHACgIQACgIAHgEQAHgEAIACQAHACADAIIAbAsQAEAHgCAIQgCAIgHAEQgFADgFAAIgFgBg");
	this.shape_84.setTransform(-215.2,193.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F7A282").s().p("AgmARQgGgFgBgIQgBgGAGgHQAFgGAJgBIAygFQAIAAAHAFQAHAFAAAIQABAGgGAGQgFAHgJAAIgyAFIgCABQgHAAgGgFg");
	this.shape_85.setTransform(-212.8,197.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F7A282").s().p("AAIAqQgIgDgCgHIgbgrQgEgIACgIQACgJAHgDQAHgFAIADQAHACADAIIAbAsQAEAHgCAIQgCAJgHAEQgEACgFAAIgGgBg");
	this.shape_86.setTransform(-217,195.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F7A282").s().p("AAKAbIgkgUQgIgEgEgGQgCgHADgIQADgHAJgCQAHgDAJAEIAlATQAHAEADAGQADAIgDAHQgEAHgHADIgHABQgFAAgFgCg");
	this.shape_87.setTransform(-216.2,202.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F7A282").s().p("AABArQgFgEgDgIIgTgwQgDgHADgIQADgIAIgDQAHgCAIADQAFAEADAIIATAvQADAJgDAHQgDAIgIACIgHACQgEAAgEgCg");
	this.shape_88.setTransform(-219.9,198.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F7A282").s().p("AgQBeQgRgdgKglQgThIAogtIAVgGQAVgDALAPQAOASAEAYQAEAZgIATQgKAZAHArQAFAUgJADQgDACgNAAQgOAAgYgCg");
	this.shape_89.setTransform(-218.4,185.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F8A383").s().p("AAFgiIgcAJQgIADgIgEQgIgEgDgIQgCgIAEgHQAFgIAIgCIA4gSQAJgDAIAEQAIAEADAIIAAAAQAEAHgBAOIgLCCg");
	this.shape_90.setTransform(-166.3,132);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D77E6A").s().p("AgvAXIgPgDIAIgiQAYAOAjgDQAlgDAVgSQgUAYgbANQgVAMgYAAQgJAAgJgCg");
	this.shape_91.setTransform(-176.4,50);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F9A387").s().p("AA0EJIgPgDQhNgQgogrQgsguAAhSIg+hBIgJgbQgQhOAJgrQAJgrApgdQAygkBOgOQBWgRAvAeQAmAZAZApQAUAiAHAoQAGAeABAmQABBCgDApQgFBLgSAsQgGAQgLANQgUAZgbAOQgXAMgYAAQgJAAgJgCg");
	this.shape_92.setTransform(-186.5,25.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#412C27").s().p("AggAHIAAAbIibAAQgDgfACgkICYAAQAFAAAHACIAMAEIAsAPQAUAFAEAAICCAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABAmIiRABg");
	this.shape_93.setTransform(-210,339.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#803F33").s().p("Ai5BpIAAgaIgBgSIgBgUIAAgFIAAghQAChDAXgeIAGgEIAEAAQAXAAAiADQAsAEAAAFQAAAHAGAOQAHANAJAKQAOAOANAAQAXAAAGgfIABgEQABgIgCgDIgEAAIgDgHIgCgEIgGgTIAOACQAQAGAIAQIAGAOQAHANANAhQATAZAqAAQAaAAALAOQAKAMAEAeIAAAsIhzAAIijgvIgoAvg");
	this.shape_94.setTransform(-210,332);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#E0E0E0").s().p("AiKCIQgHgPgEgYQgFgeAHgdQAFgQACgTQAEgsgOhBIgGgbQgDgOAKgPQALgPAQAAIB/AAIADA7QAFBXALAfQACADAFAHQAJAWAQAtQAQAhAeABQArgBAHAHQAGAGgBAqIAAAMg");
	this.shape_95.setTransform(-211.2,321.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#31211F").s().p("AgmANIAAgZIBNAZg");
	this.shape_96.setTransform(-209.4,341.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#31211F").s().p("AgtANIAAgZIBbAZg");
	this.shape_97.setTransform(-168.1,341.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#412C27").s().p("AjkAgIgBg/ICOAAQAFAAAbAGIA7APQAWAFALAAIDAAAIABAlg");
	this.shape_98.setTransform(-165.1,339.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#803F33").s().p("AgfBmIhlgdIAAARIhfAAIgBg1QgBgOACgWQAFhCAYggIACgBQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAIAAQAaAAAcADQAkADAAAGQgBAkAXANQANAIAVAAQAWAAAPgVQAHgNAFgRIABgFIgIgNIAAAAQACgCAFACQAGABAGAIIAAAAQALAOAZAqQAgAjBFACQAbABASARQARAPAFAXIACANIAAACIAAAdg");
	this.shape_99.setTransform(-165.2,332.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#E0E0E0").s().p("Ai0COQgHgPgDgVQgGgiAHgcQAFgRADgTQAHg2gPg4IgJgZQgJgYgBgEQgBgQAUAAICPAAIAKBfQAJAmAQAWIAdAnIAqA+QAXAdAWAAQBAAAALADQAdAKAAAtg");
	this.shape_100.setTransform(-165.5,321.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#1A1512").s().p("Ag3AXIAAgsIBvAVIAAAXg");
	this.shape_101.setTransform(-174.1,340.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#5E332F").s().p("Ag2gkQASgLAJgCQAMgCAGALQAKAWASAUQAWAdAOABQgBABhiARg");
	this.shape_102.setTransform(-158.7,329.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#E8AA80").s().p("AASAWQgPhJgrgmQAoAUARAZQAuA4goBOQACgegHgmg");
	this.shape_103.setTransform(-74.9,26);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#22282D").s().p("AgNgaIANgbIAOBrg");
	this.shape_104.setTransform(-53.6,111.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.rf(["#2A3036","#30363D"],[0,1],16.6,13.5,0,16.6,13.5,51.4).s().p("ABQEOQgRgEgQgNIgOgNIAAAAQgUgYi3kxIARi2IA0AXQA6AiAcAxQAWAsBECVQBBCSAFAHIAOgBQAOADgCAVQggBEgsAAQgHAAgIgCg");
	this.shape_105.setTransform(-64,102.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.rf(["#2A3036","#30363D"],[0,1],9.3,9.2,0,9.3,9.2,35.2).s().p("AgyBoQgPgfgdgsQAIgLAOgaIAOgaQAjhJARg1QAGgVAQgDQANgDAbAIIABAAQATAHALARQALASgDAUQgMBtgsBdQgkBPgeAWQgDgmgUgsg");
	this.shape_106.setTransform(-47.7,109.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgOATIggAIIAMgjQAGgOAOgHQANgHANACIABABQAQADALAOQAKAOgDAQIgDAWQgWgUgkADg");
	this.shape_107.setTransform(-43.4,91.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#F8A383").s().p("AgkCLQgcgBgHgEIAGgWIADgMQgMgKgIgTQgHgRgCgfQgCgcAEgSIAAAAIADgJIAMghQAIgUAEgFQAEgEAGABQAHAAADAHQACAEAAAGIgDARIgHAeQgCAWALALIAthQIAUg4QADgFAGgCQAHgBAFADQAGAEACAGQACAHgEAFIgRA3IgPAfIAIgKQAKgJAJAHQAJAGgEAMQAHgHAKAFQAJAFgEANIgCAEQAFgHAIADQAIAEAAAHIAAADQABAIgEAIQgPArgiAjQggAigCAFIgqgBg");
	this.shape_108.setTransform(-39.7,77.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#F8A383").s().p("AgZArIAKgyQAQgwANAKQAJAHADAeQACAbgFAKIgDALIgCAHg");
	this.shape_109.setTransform(-36.9,71.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#F8A383").s().p("AgaAqIAEgYQAEgWACgEIAGgXQAGgSAHAEQATAIAEAYQAEASgHAMQgEAGAAAKQgBAKgBADg");
	this.shape_110.setTransform(-34.8,75.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#F8A383").s().p("AgQArQgGgLgBgVQgEgjAJgTQAIgRAOABQAFAAAEAFQAHAIADAQQADAPgBAPIgEA0QgEAFgEABIgCADQgTgDgIgPg");
	this.shape_111.setTransform(-72.4,44.2);

	this.instance_3 = new lib.Path_2_1();
	this.instance_3.setTransform(-91.2,30.6,1,1,0,0,0,19.9,11.3);
	this.instance_3.alpha = 0.461;

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#FFC699","#E39F6F"],[0.004,1],20.4,-26.4,-15.1,30.3).s().p("AhMEdQgBgLgUhvIAEB4IhBgIQABgmgEgpIgLhGQgWiNAPhcQAOhYAwgtQAsgqBJgIQAzgFAxBWQAlBAAcBiIAIAeQAMAsgBAJQgFBTADBRQACApACAYQhUAYhPACIgQAAQglAAgugGg");
	this.shape_112.setTransform(-93,43.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#1D2126").s().p("ABOFNQg2gTg4gOIgsgKQABg5ARhdQAOhTgCgiQgFhagShjIgQhQIAOhWICDCfQgEAjgdAiIgbAcQAVA/AeCTQAaB/AJBBQAAAEgDACIgDABIgCAAg");
	this.shape_113.setTransform(-69.7,123.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#22282D").s().p("AAMg9QADAXAPArIg7A6g");
	this.shape_114.setTransform(-115.6,104.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.rf(["#2A3036","#30363D"],[0,1],40,20.5,0,40,20.5,78.3).s().p("AGVGeQg2gTg6gOIgsgKQiGgbhpAJQhqAIgcArQAAABAAAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAOgwAnheQAshmAGgUQAJgcgkhbQgrhfgIgYIipCeQAbAZA0BGIBNBpQghALgTAbQgRAYAAAZQhchGhDhYQgzhEgRguQgFgOAGgLQAwhVBIhsQByisA+gqQAmgZBLgSIAEgCQAngIAzgCQBKgEAwANQAzAPAtAiQAWASAMAOIgBBLIAUA3QAVA7ABAZIAAAQQgEAjgdAiIgcAaQAWA/AeCVQAaB/AJBBQAAAEgDACIgDABIgCAAg");
	this.shape_115.setTransform(-102.4,115.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#332624").s().p("ADxHCIgCAAIgBAAIgSgDIgBgBIg8gJIgCAAIgagDQAJiKgRjVQgTjcAFhhQgEgIgwgPQg0gRg6gHQimgXg2A/IgBABIADgHQAWg7AnhHQAUgkAQgZIAAgBIBdgJQB9gFCqAWIAWBQQAYBsALCMQAKCJgSDeQgJBvgLBTg");
	this.shape_116.setTransform(-87.6,179.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#493C3C").s().p("ACNGyQitgXi4gJQgahogUiCQgnkCAgh+QAQhBAVgxQAWgzAZgiQANgRAIgHIBdgJQB9gFCqAWIAWBQQAYBsALCMQAKCJgSDeQgJBvgLBTg");
	this.shape_117.setTransform(-88.6,179.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#C46D5F").s().p("ABWBuQgTgng1gYQgwgXhBgEQgFg0gJhOIDjAAQAAAugHA4IgDAUIgQBUIgCAPg");
	this.shape_118.setTransform(-98.5,219.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#161A19").s().p("AAABEIgaiHIA2ACIAACFg");
	this.shape_119.setTransform(-107.4,335.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#161A19").s().p("AgPByIgxhyIgzAAQgPg1AOgkIAQgYQBFAKAtBOQAXAlAKAlIAGADQAHACAJABQAdAFAOAWQAJAOACASg");
	this.shape_120.setTransform(-98.2,331.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#F8A383").s().p("AglAuIg+AAQgIgnAGgYQACgKARgoIALgeQAHgbgCggIBKAIQgCAYABAJQAEAjAhBYIAqB0QABADAGAHQAHAHAFACQgHALgngGQgjgFgCAOg");
	this.shape_121.setTransform(-99.8,325.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#3E464C").s().p("AhyAGQAQgiA7gGQAogEAuAMQAbAGAYAXQAMANAHALQhAAHg8ABIgRABQhoAAAOgeg");
	this.shape_122.setTransform(-87.7,74.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#F8A383").s().p("AgTAVQgCgKADgLQAEgPAOgQIAEgEQAHgCAGAEQAHAFgFARQgGAPADASIADAPQgkgIgCgIg");
	this.shape_123.setTransform(-69.3,140.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#F8A383").s().p("AiOMIQAEgxgJgsQgXhtgMhKQgXiHAEhfQACg1AXhiQAVhcAAgvQAAgzgFg6QgEg0gKhPQgajMAAhcQgBipAyiBIFgAzQAHBrgxBBQgPAVgTANIgPAKIgWCWQgZCsgRBqIgIAyQgKA2gGAbQgOA+gGBIQgDA6gEBuQgCBNgdDaQgeDZAAASIAAALIhcAoQAMgYAEg3g");
	this.shape_124.setTransform(-92.4,234.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#D87E6A").s().p("AgTA2QALgVgBgbQgEhOAdADQAEAAAEAGQANATgIApIgCAeQgCAXgbAMIgdAIQAGgFAGgLg");
	this.shape_125.setTransform(-73.6,45.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#F3BE95").s().p("AgfAkQASgFARgfQAXgngBgtQANAmgQA1QgMArgPAVIgFANg");
	this.shape_126.setTransform(-69.9,35.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#FFC699","#E39F6F"],[0.004,1],11.3,-22,-24.2,34.6).s().p("Ai3BcQgYg4gDg4QgDg7AVgnQAlhHBHgXQA8gVBCATQBGAUAiAsIADAEQArANAOAnQANAmgQA3QgMApgRAVIgFANQgDAIgFAEIgCACQgZA0goAlQg1Avg7AAQhrAAg6iEg");
	this.shape_127.setTransform(-87.9,36.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#D87E6A").s().p("Ag0BAIgBgjQgGgDgKghQgKgjgKgyICWAaQAAAPAHAcQAKAfAMAJQgUAXgnASQgeAOgBAQIgBAFIAAAAQgDAAgwgdg");
	this.shape_128.setTransform(-81.3,57.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#F8A383").s().p("AhADlIgBgjQgGgDgKgjQgKgjgKgyQgXh4AAhaQAAhyApgEIAAAAQAzgFBJA1QBTA8ABBFQABBQgEAuQgIBWgaAlIgKANQgUAXgnASQgcAOgDAQIgBAFIAAAAQgDAAgwgdg");
	this.shape_129.setTransform(-80.1,41.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#F8A383").s().p("AgeB7QgugQgngtIAaAAQAcgDALgMQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIAPiwIAEABIACABICKAtIADACIgHAvIgIA9QgCATACAFQABADAGADQAUAHgSAhQgUAjguADIgOAAQgeAAgbgKg");
	this.shape_130.setTransform(-92,69.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#C46D5F").s().p("AAeBQQg7gdg8gDQgShKgZh5IAAgDIEKBGQgDBbgLCNQgagqhAgeg");
	this.shape_131.setTransform(-78.2,218.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#161A19").s().p("AABBEIgbiHIA1ACIAACFg");
	this.shape_132.setTransform(-72.1,335.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#161A19").s().p("AgcByIg+hyIgzAAQgPg1AOgjIAQgZQAvgDBGBTQAhAoAZAqIAGACQAMADAdACQAdACAOAXQAJAPACASg");
	this.shape_133.setTransform(-60.1,331);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#F8A383").s().p("Ag1A1Ig/AAQgHgoAOgmQAQgugCglQgBgMgFgVIBZgXIAFA4QAEAnArBVQAmBMAXAfIAIAOQAHALAEACQgHALg2gFQg0gGgCAPg");
	this.shape_134.setTransform(-62.7,325.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#EF8E73").s().p("AhTAlQAHglAYgkIAwAWQAdAMAWACQAYABAJATQAEAJAAAIg");
	this.shape_135.setTransform(-53.6,338.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#F8A383").s().p("ABhNHQABgPgBgLQgCgQg2itQg0iwgMhfQgPhzAOhoIARhRQgSgugahuQgRhMgZh5IgBgEQgfidgkjKIgeirIEigEQBRDrgHFeQgCBkgKCEQgJBwABAQIAPF1QANE7ADASIAIAag");
	this.shape_136.setTransform(-82.1,234);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AguAVIA6hRIAkAgQgjAigIAxIAAAGg");
	this.shape_137.setTransform(-117.7,145.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#F8A383").s().p("AgeBJQgigTgRgjIAtg7IAcATIATgaQAZgbATgGQAOgEAEAEQAEACAEAJIgBAvQgFAwgNAVQgJgFgSAIQgUAJgLAVQgDADgDAAQgJAAgTgKg");
	this.shape_138.setTransform(-112,144.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#F1F2F1").s().p("AgwAAIA7hBIAmA6IgPBJQgmgdgsglg");
	this.shape_139.setTransform(-119.3,143.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["#732C1C","#592820"],[0,1],-39.2,-43,23.8,39.8).s().p("Ah5GxQgQgBgXgNQgYgNgJgBQgNgCgiAEQgXADgWgLQgDgBAEgKQAghMAbhvQAui6gHidQgIirBahLQBShEB4AmQBtAiASB6QANBbgjBeIABBEQABBKgEAoQgEAkAqAhQAuAlADAIQgmAAgxAFQggAPgZBBQgVA4guAiQgxAkg0gHQgegEgYAHQgZAHgPAAIgDAAg");
	this.shape_140.setTransform(-273.6,54.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#4C251E").s().p("Ag5AfIBeilQApARgnBxQgVA4ghBJQgEALgHgDQgJgFgKAHg");
	this.shape_141.setTransform(-253.7,36.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#F9A387").s().p("AABA/QgWgGgFgoQgFgjAJgXQAIgUAOgBQALgCAKASQAKATgCAfIgFA4QgHAEgIAAIgIgBg");
	this.shape_142.setTransform(-251.7,43.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.rf(["#363C45","#22292D"],[0,1],-147.1,50.5,0,-147.1,50.5,183.8).s().p("AhLCuQgpgqAvgoQABAAAGgQQAKgNAQhJQARhOAGhBQACgTALgOQAOgOATgCQAOgBAOAEQAcAIADAoQAKCFgSBjQgUBrgpAJQgSAGgPAAQglAAgcgdg");
	this.shape_143.setTransform(-217.6,68.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgPAdIggADIABgbQAUggAdgJQAQgFAMACIARBQQgbgMgkAAg");
	this.shape_144.setTransform(-213.7,48.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#161B1E").s().p("AiSgXIgBgCQAIgFA0gbQAggRA0gGQAagDAvAAIAMABQAeADAjgBQhVAIg/BCIgwAyQgcAcgYAMIgthrg");
	this.shape_145.setTransform(-255.1,84.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.rf(["#363C45","#22292D"],[0,1],-124.1,31,0,-124.1,31,183.8).s().p("Aktg1IAJgGQAdgUAegNQAXgLARgDIAQAAQARAAAKgBQAjgFA2AAQANgCATAAIAfAAICVgCQBLgCAQgDQA7gGACACIgBABQgNA/gEASQgMAogOAEQhFAYmaBlg");
	this.shape_146.setTransform(-240.6,88.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#161B1E").s().p("AgVC+QgRi+gyjjQgEgTAGgKQAEgJAOgFIAGgCIA+hAIAAAQIAeAoQAfAtABAaIgBASQgGAlgcAlQgNATgNALIAEALQAOAqAeCGQAjCfAHBMIhpACQACgygJhhg");
	this.shape_147.setTransform(-249.4,126.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.rf(["#363C45","#22292D"],[0,1],-96.5,1.3,0,-96.5,1.3,183.8).s().p("AkVGkQARhAAYhEQAhhZAmhDQAJgQABgSQAAgTgHgQQgJgUgmhBQggg6gIgYIABgIQgGhXgCgrQgEhLANg3QA/grCEgFQBugEBGAUQA4AQARAUQAJALgDAHIABBZIgVAaQAPAUANAZQAaAuACAaQADAogdAqQgOAVgOANQAXBCAhCkQAcCOAFAyQhWACibAAIk6gCg");
	this.shape_148.setTransform(-268.2,118);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#161B1E").s().p("AgZhlQgBgDAEgBQADAAABADQALAsARAmQAJATAHAJIgkBig");
	this.shape_149.setTransform(-293.1,112.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#4C251E").s().p("AiwCJQg5hlAWh5QAMhFAogVQAQgJAjgBQBZhPBrAoQAnAOAjAcQAdAXAMAUQAXAmgLA+QgKA3gXATIgRAwQgPA5gzAuQg7A0hEAAQhbAAg5hlg");
	this.shape_150.setTransform(-268.7,37.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#F9A387").s().p("AANELIgZgaIALgwQhBAOg6gwQg4gugEg9IAOgsQg2iNA3hNQArg7BegKIAgAHQAnAKAiAPQBsAyAKBTQALBagIBKQgJBjgnAkQgVAUgwAcQgdASgEAWQgBAHgGAAQgIAAgQgNg");
	this.shape_151.setTransform(-266.1,41.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.rf(["#363C45","#22292D"],[0,1],-71,13.5,0,-71,13.5,183.8).s().p("AiTEZQAGAQgYgmQgDghAEgmQADgaAKg0QAShcAghUQAjhgAqg2QANgSA1gaQA1gaAcgDQAxgJgFAgQgDAWgkA8QgtBMgLAYQgZA3AQAYIADAFIgDAAIhiEFQgaAagZAEIgMABQgVAAgcgLg");
	this.shape_152.setTransform(-293.7,105.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#161B1E").s().p("ADHA+QgLiyggg9Qg0gRhpgHQhugHi1ADQAbhoAuhBQAPgUAPgOIAMgKQCAgYAfABIDbAcIAkBzQAmCOAKCPIADA+QACAnACAXIAAABQADBvgLB2QgGA7gGAlIhIAFQAJjYgKikg");
	this.shape_153.setTransform(-266,182.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#151A18").s().p("AAABFIgbiJIA3ADIAACGg");
	this.shape_154.setTransform(-288.3,334.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#151A18").s().p("AgbB0Igyh0IgzAAQgQg2AOgkIARgZQBGALAuBQQAZAmAKAlIAEACQAKACAeACQAdADAPAXQAJAOACATg");
	this.shape_155.setTransform(-277.7,329.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#F9A387").s().p("AgnAyIgNAAQgZAAgQgUQgRgTAFgWQACgMAGgPIAMgeQAKgXACgIQAHgcgCgiIBMAJQgDAZACAJQAFApAnBXQAjBTAUAbQABACgCAMQgCALAEABQgIAMgngFQgkgFgDAOg");
	this.shape_156.setTransform(-280.4,324.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#151A18").s().p("AAABFIgbiJIA3ADIAACGg");
	this.shape_157.setTransform(-252.8,334.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#151A18").s().p("AgdB0IhAh0IgzAAQgQg4AKgiQAIgZANAAQAdAAAwApQA0ArAmAuQAVAYAJAPIAgADQAeACAPAYQAJAPABASg");
	this.shape_158.setTransform(-240.6,329.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#F9A387").s().p("Ag3A0IgoAAQgLAAgIgIQgIgGgBgMQgBgdAOg8QANg5gEglIBegGIAAAxQADAuAsBUQAiBAAdApIAJAOQAIAMAEACQgHALg4gEQg2gGgCAPg");
	this.shape_159.setTransform(-243.2,324.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#EF8E73").s().p("AhWAmQAGglAZgmIAzAXQAeANAXABQAYACAJATQAFAJAAAIg");
	this.shape_160.setTransform(-233.9,337.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.rf(["#363C45","#22292D"],[0,1],-97.8,-63.6,0,-97.8,-63.6,183.8).s().p("Aj1HAQgaiWgPiDQgdj8Adh2IACgIQAbhpAlhBIAegrQCBgZApACQARAADVAcIAjByQAmCPALCPIADA+QACAmACAYIAAAAQADBwgLB2QgGA7gGAkIiwALQiEAHhtAAg");
	this.shape_161.setTransform(-266.9,183);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#C46D5F").s().p("AAPARQg8gcg+AAIgGg8IDBAAQAogigHBRQgDAdgQBNQgSgkg9gdg");
	this.shape_162.setTransform(-279.5,229.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#F9A387").s().p("AiEMQIADglQABgRgGgiIgKg4QgVhXgJgzQgPhaAEhiQACg2AShbQARhWAAgyQAAhNgQiAIgbjZQgbkMBDisIFeA4QAHBvglBDQgSAhgUALIgjD8QglEGgOA5QgQBHgHBGQgIBFgDBmQgCBFgdC8QgdCpAEAfIgCAfIhhAKQAIgQAEgeg");
	this.shape_163.setTransform(-274.7,235.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#C46D5F").s().p("AAYAQQg9gnhOACIgQhKIACgBIEFgJIAAADQgHBigTBuQgZg2g5gkg");
	this.shape_164.setTransform(-252,230.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#F9A387").s().p("AAZMrQAAgEgCgFQgCgFAAgEQgBhGgnh3QgtiBgIhRQgMh4AXhgIAahIQgUg/gXhuIgPhPQgMhEgLhIIg6oIIEqgEQBFFegYE0QgIBhgTBuQgOBWAAAQIgIFPQgHETACARQACAOAFANg");
	this.shape_165.setTransform(-255.6,235.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.rf(["#0D4142","#15494B","#3B6F72"],[0.333,0.4,0.745],13.5,7.7,0,13.5,7.7,56.3).s().p("AjtD3QgEgDgBgEIhIlyQgBgFADgDQACgEAEgBIIYhoQAEgBAEACQAEADAAAEIBJFyQABAFgDADQgCAEgFABIoXBoIgCAAQgDAAgDgBg");
	this.shape_166.setTransform(-280.3,161.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#46C1B8").s().p("AjtD3QgDgDgBgEIhJlyQAAgFACgDQACgEAFgBIIXhoQAEgBAEACQAEADABAEIBIFyQABAEgDAEQgCAEgFABIoXBoIgCABQgDAAgDgCg");
	this.shape_167.setTransform(-281.7,161.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgqiyIARgDIBEFoIgQADg");
	this.shape_168.setTransform(-309.6,167.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#3B6F72").s().p("AjxDxIgCgIIhGlmQgBgEADgEQACgEAFAAIIXhpQAEAAAEACQAEACABAFIBGFmQABAEgDAEQgCAEgFAAIocBqIgBAAQgDAAgCgCg");
	this.shape_169.setTransform(-284.1,161.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#46C1B8").s().p("AjtD3QgDgDgBgEIhJlyQgBgEADgEQACgEAFgBIIXhoQAFgBADACQAEADABAEIBIFzQABAEgDAEQgCADgEABIoYBpIgCAAQgDAAgDgCg");
	this.shape_170.setTransform(-284.8,162.4);

	this.instance_4 = new lib.Path_11();
	this.instance_4.setTransform(-298,153.4,1,1,0,0,0,9.6,14.7);
	this.instance_4.alpha = 0.539;

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.rf(["#363C45","#22292D"],[0,1],-65.3,-24.5,0,-65.3,-24.5,183.8).s().p("AAFDlQg0hdghh8QgYhUgEg1QgCgVAGgMQABgDAIgJQAshlAmAlQAeAfADBQIASBJIABABQAKApAUBBQAXBOARAuQgKAPgXARQgXAQgWAKIgRAGg");
	this.shape_171.setTransform(-299.4,143.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#F8A383").s().p("AggCIQgygTgrgxIAcAAQAfgCAMgOQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAAAQAEgfALiMIACgXIAEABIADABICaA0QgRBrAAAaQgBAPAKADQAIADABAOQAAANgIAPQgVAngzACIgOAAQgiAAgegKg");
	this.shape_172.setTransform(-273.2,71.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#F8A383").s().p("AgPA6QACgdASgeQAFgbgHgMQgIgRgDgQQgEgVAMgEQgKAGAIAYQACAMAGAMQAIALACAQQACANgDADQgNASgKAbQgHAUAGAZIAEAKQgMgPACgag");
	this.shape_173.setTransform(-217.3,35);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#F9A387").s().p("AgMBoQgWgGgEgfQgEgjAagnQAFgbgHgMQgLgSgCgQQgDgWAQgDIAMAZIAIAOIAQAbQAIARAHAfQAIAjgCATQgCATgSANQgNALgKAAIgIgCg");
	this.shape_174.setTransform(-215,35.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.rf(["#4AB6E0","#7199E8","#868AEC"],[0,0.675,1],-5,-12.4,0,-5,-12.4,31.4).s().p("Ag0B/QgCgCAAgDIgCjyQAAgIAIAAIBfgBQAIAAAAAIIACDyQAAAIgIAAIhfABQgDAAgDgDg");
	this.shape_175.setTransform(-225.7,27.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#222222").s().p("Ag/COQgGgFAAgHIgBkBQgBgHAFgGQAFgFAHAAIBogBQAIAAAGAFQAGAFAAAIIACEAQAAAHgFAGQgGAFgHAAIhoABIgCAAQgGAAgFgFg");
	this.shape_176.setTransform(-225.7,27.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#4B5051").s().p("Ag/COQgGgFAAgIIgCkAQAAgHAFgGQAFgFAHAAIBogBQAIAAAGAFQAGAFAAAIIABEAQABAHgGAGQgFAFgIAAIhnABIgBAAQgHAAgFgFg");
	this.shape_177.setTransform(-224.4,27.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#D87E6A").s().p("AgYACIAFAAQAGgBAGgCIAbgRQAJgFgHAOIgXAdQgKgRgNgBg");
	this.shape_178.setTransform(-216.5,48.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#BC6F62").s().p("Ag+AjQgEgLARggIASgfIADgVIAUgIQASgIAEACQAFACAfAhIgCAFQAAAGAKAHQAIAGgEAGIgFAFIglA0QgPgDgSALQgSAKgDAJQgVgSgHgWg");
	this.shape_179.setTransform(-220.5,37.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#F9A387").s().p("AABBlQgVgCgdghIgZgiIgNhUIAPhKIAXAJQAeAOAcAcQAhAfAWAnQASAggDAOQgCAMALAWIg6AzQgPgYgOgBg");
	this.shape_180.setTransform(-219.2,38.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#F9A387").s().p("AgmARQAGgCgCgPIADAAIA1gTQAGgBAEACQAFACABAEQACAEgDAFQgCADgFABIg2ATIgFABQgFAAgEgEg");
	this.shape_181.setTransform(-230.3,39.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#F9A387").s().p("AggAUQgFgCgCgFQgBgEACgFQADgEAFAAIA2gTQAFgBAFACQAEACACAEQABAEgCAFQgDADgFABIg2ATIgFABIgEgBg");
	this.shape_182.setTransform(-230.4,39.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#F9A387").s().p("AggAOQgGAAgEgEQgFgFABgFIAAgBQAAAJAJgBQAHgBABgGIACgNIA8AAQAGAAAFAEQADAEAAAFQABAGgFAEQgEAEgGAAg");
	this.shape_183.setTransform(-230.4,35);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#F9A387").s().p("AggAOQgGAAgEgEQgFgFABgFQgBgFAFgEQAEgEAGAAIBBAAQAGAAAFAEQADAEAAAFQABAGgFAEQgEAEgGAAg");
	this.shape_184.setTransform(-230.4,35);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#BC6F62").s().p("AAfARIhAgHQgGgBgEgFQgEgEABgEQAAAIAPgBQAGgBACgFIACgNIA3AGQAGAAAEAFQAEAFgBAEQgBAGgEADQgFAEgFAAIgBAAg");
	this.shape_185.setTransform(-230.7,31.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#F9A387").s().p("AAfASIhAgHQgGgBgEgFQgEgEABgEQAAgGAFgEQAFgEAGABIBAAHQAGAAAEAFQAEAEgBAEQgBAHgEADQgFAEgFAAIgBAAg");
	this.shape_186.setTransform(-230.7,31.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#BC6F62").s().p("AAUAgIg5glQgFgDgCgHQgBgGAEgGQADgFAHgBQAGgCAFAEIA6AlQAFADABAHQACAGgEAFQgDAGgHABIgDABQgFAAgEgDg");
	this.shape_187.setTransform(-228.9,26);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#F8A383").s().p("AgIA6IgGgDIgDgDIgEgzQgFg2AXgGQAbgHgBBGQgBAYgFAMQgHATgRACg");
	this.shape_188.setTransform(298.9,37.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#D1E0E0").s().p("ABwCYQhthOhLhlQg0hFgVg3IgBgDQAagDAbAVQAlAdA1BMQBdCIA5AWQgHAPgLAIQgHAFgEAAQgEAAgCgDg");
	this.shape_189.setTransform(276.8,130.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.rf(["#923B1E","#723331"],[0.114,0.882],-5.8,-54.4,0,-5.8,-54.4,126).s().p("AAqEZQAAg+gKguIgBgIQgEgRgHgNIgOgdIgBgDIgFgVQgPAOgUAFIgSADQAdgfANh6QANiaADgLIAAhFQAKAUAFAcQADAUAEBQQAFBVAKBHQAEAjAEBSQAEBXAAA7g");
	this.shape_190.setTransform(300,61.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.rf(["#923B1E","#723331"],[0.114,0.882],-45.8,-53,0,-45.8,-53,126).s().p("AALDRQg1gYgRhMQgLgxAhiOIAjiGQgMCZAOB5QARCNAuASIgMAAQgTAAgVgIg");
	this.shape_191.setTransform(340.1,59.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#B6CECD").s().p("AAPgLIAJAOIgvAJg");
	this.shape_192.setTransform(276.2,114.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("ABvD6QhthPhLhnQg0hEgVg2IgBgCQgHgYAMgSQANgVAigsQAug9AdgcIBpBwQgYARgcAYIgXAWIgCACQgDACADADIAGAHIADAEQAVAlAqBRIA9B3QAQAVgLAaQgHAPgLAIQgHAFgEAAQgEAAgCgDg");
	this.shape_193.setTransform(276.9,120.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.rf(["#923B1E","#723331"],[0.114,0.882],-6,-50,0,-6,-50,126).s().p("AgQAuQAFhVAGgxQAFgyAagIQAWgHAJAUIAABGQgEBOgUA1QgUA2giARQggAIgDABQAfghAJhFg");
	this.shape_194.setTransform(300.3,56.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.rf(["#923B1E","#723331"],[0.114,0.882],-27.8,-42.8,0,-27.8,-42.8,126).s().p("AANGeQgOgagDg8IABBWQhUAChNgQIgMgCQAAg/gKgtIgBgIQgEgRgHgOIgOgcIgBgDIgGgVQgCgHAAgIQgFhaAAgvQAChUARhCIBKiDIAvilICdgPIAUANQAYATASAgQA6BpgUDKQgRCtAjCJQARBEAVAhQgPANgiAMQg7AWhOAAIgcgBg");
	this.shape_195.setTransform(322,49.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#D4DDDD").s().p("AAHAkIh8gJIATgYQAYgXAbgHQAugLApAEQA7AFARAjQAOAehtAAIgOAAg");
	this.shape_196.setTransform(314.7,67.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.rf(["#923B1E","#723331"],[0.114,0.882],-22.6,-18.6,0,-22.6,-18.6,126).s().p("AizCEIgQgoQgIgDgBgqQgbgpADgoQADgpAegNQATgrAogeQAmgcAzgLQBogWBKA0QB0BSgVD2QgDAihLAKQgoAGhnAAQiUAAgkhMg");
	this.shape_197.setTransform(316.9,25.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#D87E6A").s().p("AATB/QgSgogegNIgFglIgBgDQgEgLgLgHIgYgPIAAAAIgMgHQgPgMgFgfQgCgOgCgqQgBgIgEgHIgGgIQABgaBgAHQBdAIAsAZIgBAqIgMANIAGgCIAPCxQgTARgVAKQgQAHgNAAQgWAAgLgXg");
	this.shape_198.setTransform(310.3,56);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#F8A383").s().p("AiNDUQgbgxgHhfQgEgwABhUQAChGBTg7QBLg2AxAFIABAAQBIAIAsBCQA4BSguB3IgaAbQgEBTgIAZQgRA4gxACQgpAMgrAEQgRACgPAAQg+AAgRggg");
	this.shape_199.setTransform(312.3,32.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#F8A383").s().p("AgoCGQgugDgUgjQgTgiAUgHQAHgDABgDQABgEgBgUIgQhtIADgCICLgtIACgBIAEgBIAPCxQAAABAAAAQAAABABAAQAAAAAAAAQAAABABAAQALANAcACQAOACALgCQgnAugtAQQgcAKgeAAIgOAAg");
	this.shape_200.setTransform(317.3,63);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#A5B7B6").s().p("AijBrQAAgwgQgvQgUg6glgNQAngYAvgJQAPgFBigMQBmgOAOAFQAnAIAqBdQAKARADAkIAlgTQAOAfAOAlQhbAkiEAAQhQAAhigOg");
	this.shape_201.setTransform(321,80.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#D77E6A").s().p("AgiAhIgagXIANgWIAcgiQAFAEAOAYQAJASAQAHQAZAIALgTQgPAigcAOQgIADgJAAQgPAAgUgOg");
	this.shape_202.setTransform(292.9,143.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#F8A383").s().p("AgBAtIgSgCQADgHACgKQAEgVgFgPQgHgWAIgJQAGgGAHAGQAFAHAHATIAIAWQACANgFAUQAAAFgOAAIgDAAg");
	this.shape_203.setTransform(298.4,135.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#F8A383").s().p("AgoA9IgagXIAMgYQAdg0AHgTQADgHAKgHQAIgIgCAIQgBAOAOAPQAPAQAKgcQAFgRALAUQAEAGAIAUIgCALQgCANgFAKQgQAwgeAPQgIAEgHAAQgRAAgUgPg");
	this.shape_204.setTransform(293.6,140.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AiVCxIg6ghQAzhMBkhnQBuh0BCgjQAhgRAegHQAPgDAKAAIgCDCQhxBbghAZIgDADQh6BfgfATQgNgOgogXg");
	this.shape_205.setTransform(286.5,92.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#F8A383").s().p("AgpAyIgbgcQA2g0AMgcQACgEgBgEIAQAWQAPALAJgbQAGgQANARQAMAQgCANQgCAWgJAUQgQAogdAOQgGADgGAAQgSAAgXgTg");
	this.shape_206.setTransform(293.5,141.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#F8A383").s().p("AAJAUIgegUQgFgBgCgEQgBgGACgFQADgEAFgBQAGgBAFADIAeATQAFABACAGQABAFgCAEQgDAFgFABIgDAAQgEAAgEgCg");
	this.shape_207.setTransform(291.6,145);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#F8A383").s().p("AAMAZIgngZQgHgBgCgHQgBgGADgGQADgFAHgCQAHgBAGAEIAnAYQAGACACAHQADAGgEAFQgDAGgHABIgEABQgFAAgEgDg");
	this.shape_208.setTransform(292.3,142.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#A5B7B6").s().p("AgfgeIBMgUIAAABQABAigUAZQgVAcgfAIIgSAFIANhRg");
	this.shape_209.setTransform(295.8,143.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#A5B7B6").s().p("AgQAiQAHgCACgMQACgLgCgKQgDgUAPgNIAOAnIgDAZIgTAEIgOABQAAAAgBAAQAAAAAAAAQAAAAABAAQAAAAABgBg");
	this.shape_210.setTransform(296.8,135.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#B6CECD").s().p("AgoC4QAmjTAXhSQAFgOgMgKQgjgegTgeQgOgYACgTQABgYAqgEQAUgCAVADQgRAvAbA1QAPAggDAiQgMCRgEByQgBAkgWAcQgVAcgjAJIgMADIANhSg");
	this.shape_211.setTransform(296.7,121.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("Aj2E/QAqjoAbhOIgagSQgcgZgPgYQgOgYACgTQABgZAagtQANgXAPgWIgCgCIgUgXIAFhLIAJgGIAbgQIATgKQAbgNAagJIAfgKQAygOBAgEQA6gEAaAGQAmAIArBdQAJATADAkIAkAAQgGApgNA1IgFASQgWBQgkBWQgSAsgOAcIA7BbQA7BrAKBPQgxgLhOgHQiZgMiSAYQgvAIguAMIANhSg");
	this.shape_212.setTransform(317.3,108.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.rf(["#30363D","#161B1E"],[0.106,0.89],-36.1,-70.2,0,-36.1,-70.2,172.2).s().p("AjsH8QgmjBgRjRQgelsA6jKQA8gTAmgKIADgMQCLgiCCABQBBAAAuALIALADQBTCGgLFzQgHDxgqEdQg2AWidACIgRAAQibAAhpgbg");
	this.shape_213.setTransform(317.9,194.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#161A19").s().p("AgMBEIgOiFIA1gCIgOCHg");
	this.shape_214.setTransform(336.1,334.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#161A19").s().p("AhMB0IASiGQAGgvAQgXQATgbAjAAQAeAAASAgQAUAkgQAuIgnABIgCA3QgBAZgTATQgQARgZAAg");
	this.shape_215.setTransform(331.5,330.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#CC7264").s().p("AhUBvQgWhugOhZIAOhiQB+gOBjAFQAFD0gKByIAHAiQhdg8hwgag");
	this.shape_216.setTransform(304,234.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#161A19").s().p("AgHBEIgTiFIA2gCIgKCHg");
	this.shape_217.setTransform(312.6,334.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#161A19").s().p("AiGBzQAAgTAHgPQAKgZAUgBIADAAQAYAAAVgNQAUgMAMgVQAqhOAEgGQAjgtArAHIATAZQAQAjgLA1IgyAAIgpBzg");
	this.shape_218.setTransform(301.9,330.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#F9A387").s().p("Ag0CWQg6AGgIgMQAFgCASgZQAWgiAjhNQAohbACgnIgDgiIBWABQgEAcABAOQABAgAUAxQASAogFAqIg/AAIg0BvQgDgOg0AFg");
	this.shape_219.setTransform(303.3,325);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#EF8E73").s().p("AhKAlQgBgIAEgJQAIgSAXgCQAVAAAUgNIAmgYQAcAnAJAjg");
	this.shape_220.setTransform(296,337.9);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#F9A387").s().p("AAAMAQAAgPAAgHQAAgfgcj5Qgdj7gCgsQAAgRgRhaQgVhsgOhbQg7mFA4kFIDdAJIAPFcIAFC6QAGD0gKByIAHAiQATBygJCRQgGBagaB2QgYBxgBASIgBARQgBALABAFIhXAGIAFgTg");
	this.shape_221.setTransform(303.1,238.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#CC7264").s().p("AARA5QgxgSgugHQgCgggGgaIgMhCIDCAEQgDAngBAfQAAAqAHBFQglgTgtgRg");
	this.shape_222.setTransform(330.3,245.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#F9A387").s().p("Ag8BfQAQhEADglQADgkgEgyIBbg6QgJBkAQBJQAOBCgEAVIg/AAQgWAdgTAOQgKAGgHAAQgSAAANg8g");
	this.shape_223.setTransform(331.9,319.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#F9A387").s().p("AAgLpIABgLQAAgRgcicQgaidgBhNQgBgrADhdQAChIgDgmQgDghgGgbIgMhAQgRhjghjSIgdi9QgZgKgYghQgvhCAIhsIF6g4QA7CfgYDqQgGA8gVCGQgTB8gFBAQgEAnAAAdQgBAsAIBFIAJBPQAFAvAAAqQAABggLBJQgDATgWBqIgLA4QgGAgABASIABAvQACAnAGASg");
	this.shape_224.setTransform(324.7,240.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#F8A383").s().p("AgXgLQABgmAWgOQAKgHAKAAIAEAoIgrBlg");
	this.shape_225.setTransform(292.3,138.4);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#B6CECD").s().p("ABdBgQACgDAAgEQgBgDgEgCQgxgcgtgkQhPg6gqg9IgJgeQAGgBAPgMQAPgIAJAUQAgBAA7A9QBCBCBDAcIAAAAIAAAAQg1AfgYAZQATgdAQgUg");
	this.shape_226.setTransform(348.9,106.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AAHFeQgBgMgGgLQgIgMgLgFQgMgGgJAEQA2hiAng8QAYgmAPgRIACgBIAAgBIjhi7IgJgeQhHjmgQgSQCAA6ChC8QB4CHAmBHIAHAMQACAJgDALQgBAGgFAJIAAABQgTAqgxA5Qg9BJhaBJQAHgKgBgNg");
	this.shape_227.setTransform(349.5,105.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#F8A383").s().p("Ag1BsQgLgSgchJIgahDQAEgFAFgJQAGgGAMAHQAPAHAQAOQAaAXAPAaQABACASgfIBDhXIA0BKIhKBJQgaAcggAYQgcAUgJAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_228.setTransform(345.3,138.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.rf(["#7E3632","#572928","#442323"],[0.114,0.627,0.855],-25.8,-26.8,0,-25.8,-26.8,58.3).s().p("AgOBxQgtgGgfgiQgeghgBgrQAThAA8gdQA7gdA8AXQAYAUAMAdQAMAdgEAeQgHAzgnAfQgiAZgpAAIgOAAg");
	this.shape_229.setTransform(158.6,57.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.rf(["#7E3632","#572928","#442323"],[0.114,0.627,0.855],-36.6,-65.1,0,-36.6,-65.1,85.5).s().p("AgRCXQg/gIgngxQgngyAIg9QACgMAEgNQAThAA8gdQA8gdA7AXQAPAGAKAHQAmAXATAoQAUApgFArQgIA+gyAnQgpAggyAAIgTgBg");
	this.shape_230.setTransform(160.9,61.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#22292D").s().p("AgfBOQgxgBgfgWQgfgXgHgqQA3gcBOgRQA7gMA6gDQAQgCAPABIASgGQgzBIgcAdQgwA2g1AAIgBAAg");
	this.shape_231.setTransform(166.4,76.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#2A3238").s().p("AgFFAQgLiWgaihQgShpgUhYQgOg8AUggQAPgZA0gbIABgBQAFAKAWAoQAYApAEAZIABAIQADAjgYAlIgJAMIgUAYIgMALIAkCBQAQA8AMAyIATBXQANA9ADAdg");
	this.shape_232.setTransform(192.9,120.9);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#22292D").s().p("AgJAMIgkADIAMgkQAnAAAYAVQANALADALQgSgMglACg");
	this.shape_233.setTransform(218.6,56.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#343B42").s().p("AkPAFIAbgTQAtgYBbgJQAxgGCUhBQBOgiBpgwQgJA8gUBBQgVBBgOAKQgNAJlxDAg");
	this.shape_234.setTransform(203.8,70.8);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#343B42").s().p("AghCaQgmgfgagLIAPgtIAohsQAchSAHgqQADgPAJgLQALgMAPgCIASgCQAUABAOAOQAOAOABAVQACBhgdB+QgZBngVAnQgagdgggZg");
	this.shape_235.setTransform(223.5,47.9);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#343B42").s().p("ADOGfQingShmgBQh6gChHATQAOg1AWhBIAviLIABgBQgGhDhCiiQg9iWAGgcQAQhUCDgvQBdgiBtgGQAggCARAFQA5AQApAeQAVAPAJAMIgXB1QAFAKAZAmQAYAoAFAYIABAIQACAjgYAlIgbAiIgPALIAmCDQAQA8ALAyIAUBXQANA9ACAdg");
	this.shape_236.setTransform(171.5,111.4);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#332A2A").s().p("ACkARQhXgZhlgJQhogIhJAPQhPAOgLAnQAKg7ALgdIALgUIAKgVICyAdIAAgCIFNgJQAJAdALA9QAJAzAAAOQgigphdgdg");
	this.shape_237.setTransform(173.8,154.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#342B2B").s().p("Ag2AuQhCgTgCgoQAAgNAGgOIAGgLIAOAIQASAIAZAGQBLASBlgSQgSAbggAVQgsAhgsAAQgTAAgUgGg");
	this.shape_238.setTransform(175,175.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#3A3030").s().p("AhDHpQA0loADgnIASjQQANiDADhaQALkEgxisQgGgWABgjIADg0IBEgCQBBDygbFwQgNC+geC/QgCAigyFFQgyE2gBBhIgRAEIgRAEQgMiNAlj9g");
	this.shape_239.setTransform(195,236);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.rf(["#493C3C","#3A3030"],[0.051,1],-70.7,-66.5,0,-70.7,-66.5,221.4).s().p("AhrNxQgLg7ADiuQAEjRgDgzQgHh5ATh5IAVhgQgEh3gWjIIgViwIgThsIgZjjIgRhhIFNgJQBBDygbFwQgNC+geC/QgCAig0FEQgyE3gBBhQgcAMgkADIgXABQgcAAgagGg");
	this.shape_240.setTransform(185.6,236.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.rf(["#312828","#3E3232"],[0,0.949],6.2,-92,0,6.2,-92,110.3).s().p("Ah2MNIgygGQAIiWAEhAQARjcAciWIAbh2QAVhcABhBQABg/g6kXQg6kZAAhMQAJAvBQAFQBOAFAaghQACAJAzAkIAzAiIABADIAOAtQAOAvAJA2QAeCpgNDXQgFBNhSFfQhUFugtCAQgNAHgUABIgKABQgOAAgUgDg");
	this.shape_241.setTransform(162.2,246.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.rf(["#493C3C","#3A3030"],[0.051,1],-49.8,6.5,0,-49.8,6.5,221.2).s().p("AiECrQgZAAgSgRQgTgQgDgaQgLhaAJhBQADgZAUg3QALgiAHgRIFqA7QACArgGAmQgMBFgqAhQgMAKgPAGIgLADIgPBYg");
	this.shape_242.setTransform(164.7,163.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#22292D").s().p("AgTGuQgfhogXhzQgWhpgFhBQAYgHAWgPQAcgTANgcQAcg/AGiBQALi8ADgVQAGAlAfBDQAPAiAOAaIgTBIQgOA1gLAgQgYBDAHBGQAFA0AKCWQAICHAFAmQgOAMgaAIQgVAGgRAAIgJAAg");
	this.shape_243.setTransform(143.2,133.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#343B42").s().p("AgOHvQgniCgcieQgWiAACgfQgCgdAciVQAfigAdhoQAMgtAbgeQAIgKAWgPQAPBeAhDBQgFAfgKArQgMA0gOAmQgXBBAHBIQAFA0AJCWQAJCHAFAmQgPAMgZAIQgVAGgRAAIgJAAg");
	this.shape_244.setTransform(142.7,126.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AgdAfIgHgTQgDgMACgFQARABAVgJQAVgIALgJQAHAXgCASQgLAIgWAHQgRAFgOAAIgDAAg");
	this.shape_245.setTransform(145.7,176);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#D87E6A").s().p("AgVAZIgMgCIADgCQANgOgGgQIAAAAIA4gZIABAVIAAABQgZAJgJAHQgOAKAFAVIAAAAIgMgKg");
	this.shape_246.setTransform(145.4,179.4);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#F8A383").s().p("AgbgPIAjgWIABARQADASAIAGQALAKgEAMQgCAGgEAEIgfACg");
	this.shape_247.setTransform(147.8,179.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#F8A383").s().p("AAKBqQgTgGAJgdIALgsIgRgkQgNgHgMgPQgXgfAGgpIAVgCQAYACARAUQATAVALAwQAFAWABAUIgNApQgPAlgKAAIgCAAg");
	this.shape_248.setTransform(149.1,189.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#D87E6A").s().p("AglA6QgKgWgEgZQgHgyAhgUQALgHAIAAIAGABIA1BkIgWAgg");
	this.shape_249.setTransform(146,186.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#D87E6A").s().p("AgNAPQgGgDgCgGQgBgGAEgDQAEgGAGgBIAJgFQAHgBAGADQAGADACAFQABAFgEAFQgEAFgHACIgIAEIgGAAQgEAAgDgBg");
	this.shape_250.setTransform(143.1,199.4);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#D87E6A").s().p("AgDAOIgJgGQgGgEgBgFQgBgGADgFQAEgFAGAAQAHAAAEAEIAJAGQAGAEABAFQACAGgEAFQgDAFgHAAIgCAAQgGAAgDgEg");
	this.shape_251.setTransform(141.2,195.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#D87E6A").s().p("AgCANIgJgFQgGgEgBgFQgBgGADgFQAEgEAGAAQAGAAAEAEIAJAFQAFAEABAFQABAGgDAEQgDAFgHAAQgGAAgDgEg");
	this.shape_252.setTransform(140.7,193.6);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#D87E6A").s().p("AgXAQQgFgDgCgGQgBgFAEgDQAEgFAGgCIAcgIQAHgCAGADQAGADABAFQABAGgEADQgDAFgHABIgcAJIgFABQgEAAgEgCg");
	this.shape_253.setTransform(143.6,193.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#D87E6A").s().p("AgDAyQgLgDgBgNQgLgCgBgMIgFABQgGAAgEgFQgEgEAAgHIACgmQAAgHAEgEQAFgFAGgBQAIAAAEAJIAEgCQAIAAAFAHQAEgFAIABIABAAIAFgBQAIgBAHAFQAGAFAAAIIAIA2QABAHgGAGQgFAGgIABQgKAAgHgHQgFAIgHAAIgDgBg");
	this.shape_254.setTransform(146.5,191.7);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#D87E6A").s().p("AgVAYQgFgEABgHQAAgGAFgGIAUgWQAEgFAHgBQAHgBAEAEQAFAFgBAHQAAAHgFAFIgVAWQgDAFgHABIgBAAQgGAAgEgEg");
	this.shape_255.setTransform(143.4,194.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#D87E6A").s().p("AgVAfQgFgEgBgIQgBgGAFgGIAXghQACgFAHgCQAIgBAFAEQAFAEABAIQABAGgFAGIgXAgQgCAGgHACIgDAAQgGAAgEgDg");
	this.shape_256.setTransform(145.2,196.9);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#D87E6A").s().p("AgQAZQgFgDgBgHQgBgHAFgHIAOgSQAEgHAGgCQAHgCAFADQAFAEAAAHQABAHgEAHIgPASQgEAHgFACIgFABQgEAAgDgDg");
	this.shape_257.setTransform(147,201.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#D87E6A").s().p("AgLAwQgGgCgDgGQgDgHACgHIAQg7QACgHADgEQAGgFAGACQAGABADAHQADAGgCAIIgQA6QgCAIgEAEQgDADgEAAIgEAAg");
	this.shape_258.setTransform(148.8,197.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#F8A383").s().p("AgXAHQgCgOgDgHIA4gOIABAMIgvAtQgDgIgCgOg");
	this.shape_259.setTransform(145.9,179.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AAAAVQgWgHgTAHIALgpQACgPAfgCQAhgBAEAUQAAASACAmIgqgRg");
	this.shape_260.setTransform(228.2,27.4);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#F7A282").s().p("AgWByQgKgGgHhcIgEhaIBFgoIAIADQAIAGABAMQABAEgFAXIgJArQgDAQgOANQgNAQgDAIQgDAIgGAsQgEAhgFAAIgBgBg");
	this.shape_261.setTransform(232.1,19.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#F7A282").s().p("AgYBjQAGgbgFgUQgHgTgDgLQgIgkAKgYQAKgXABggIASgLQARgGAAAVQAAAIANApQAMAlgEAWQgDAWggAnQgTAagFAAQgDAAACgHg");
	this.shape_262.setTransform(227.7,18.3);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#F7A282").s().p("AgKA+IgNgDQgFgCABgHIAHguQABgMAKgOIAKgTIAGgQQAEgFAGABQANABgCAUIgIAYQgGAQAEAXQADARgLAHQgBAIgHAEQgDADgFAAIgEAAg");
	this.shape_263.setTransform(227.6,8.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#D87E6A").s().p("AgRAVQgHgBgCgFQgDgFACgGQABgEAGgDIAagQQAGgDAGACQAGABADAFQADAGgCAFQgCAEgGADIgaAQQgEACgEAAIgDgBg");
	this.shape_264.setTransform(226.9,19.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#D87E6A").s().p("AAFAVIgZgTQgFgCgBgFQgCgGAEgFQADgFAGgBQAGgBAFADIAZATQAFACABAFQACAGgEAFQgDAFgGABIgDAAQgEAAgEgCg");
	this.shape_265.setTransform(230.8,18.3);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#D87E6A").s().p("AgUAZQgHgCgEgGQgDgGACgHQACgFAHgDIAfgSQAHgEAHACQAGACAEAGQADAGgCAHQgCAFgHADIgfASQgEADgEAAIgFgBg");
	this.shape_266.setTransform(225.7,17.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#D87E6A").s().p("AAMAZIgmgVQgHgEgCgEQgDgHAEgHQADgGAHgCQAHgBAGADIAnAVQAGADACAGQADAGgEAHQgDAGgHACIgFAAQgEAAgEgCg");
	this.shape_267.setTransform(230.4,16.4);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#D87E6A").s().p("AgcAWQgGgDgDgHQgCgHADgFQAEgFAHgCIAogPQAHgCAHADQAHADACAHQACAGgEAFQgDAGgHACIgpAOIgGABQgEAAgDgBg");
	this.shape_268.setTransform(225,14.7);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#D87E6A").s().p("AAJAaIgkgZQgGgDgBgGQgCgHAEgHQAEgFAHgBQAHgBAGAEIAkAZQAGACABAIQACAGgEAGQgEAGgHABIgDAAQgFAAgFgDg");
	this.shape_269.setTransform(229.9,14.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#D87E6A").s().p("AgYAVQgHgDgCgHQgDgGAEgFQADgGAHgCIAigNQAHgCAGADQAHADACAHQACAGgDAFQgDAGgHACIgiAMIgGACQgEAAgDgCg");
	this.shape_270.setTransform(227.5,9.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#D87E6A").s().p("AAQAWIgvgPQgHgDgCgFQgCgHADgGQAHgNAQAGIAwAPQAGADADAFQACAHgDAGQgEAGgGACIgFABQgFAAgEgCg");
	this.shape_271.setTransform(231.9,9.1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#545454").s().p("AiPASIAAgbQAAgIAJAAIELAAQAEAAAEACQADAEAAAEIAAAZg");
	this.shape_272.setTransform(154.8,339.9);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#545454").s().p("AjfASIAAgjIG/AAIAAAjg");
	this.shape_273.setTransform(192.6,339.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#29302D").s().p("AhZBFQgCgZAFgcQAFglAQgOQARgoAmAJQAUAFAvAaQARAUAIAbQAEAPAFAqg");
	this.shape_274.setTransform(149.6,334.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#151A18").s().p("AiMBCQgCgZAFgcQAFglAQgOIACAAQAXgvBIAhIA1AZQAdAKAPgLQASAQAdASQAUAUgEAog");
	this.shape_275.setTransform(154.7,335.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#29302D").s().p("AjdA3QgDgwAeg8IABgBQAwAfBBACQBAAAAxgcIACABQAYAOAmAOQAuARAiADQAbABAMAYQAHALgBAJQgCAKgLAAg");
	this.shape_276.setTransform(192.6,334.1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#D67E6A").s().p("AiDBsQAHgIgDgTQgFgWAGgLQADgFAIgaQAHgXAIgNQAMgUAFgRQAFgSADghIBuACQABAMgBAbQABAXAFAKQAKARA0AzQAhAhgFAog");
	this.shape_277.setTransform(154.1,330.9);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#F6A181").s().p("AjaB0QgCgpAdhCQAehAgBguIBpgPIAAAIQAGAuAeAgQATAUAnAVQAeASAhAPQAyAWAhADQATABAKAKQALAJgFAOQgGANgOAAg");
	this.shape_278.setTransform(192.3,327.9);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#D87E6A").s().p("AgjAOQAGgHAqgaQARgLAIgIQAKgJAHgMQgDANgEAHQgRAlgrAYQgoAZgCANQAFggAOgOg");
	this.shape_279.setTransform(184.1,56.4);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#22292D").s().p("AgeBOQgwgBgfgWQgggYgGgqQA3gbBOgRQA8gNA5gDQAWgBAJABIAOgGQgyBIgbAdQguA2g0AAIgDAAg");
	this.shape_280.setTransform(166.6,76.4);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AiJAUQAEgtA6gQQAygOA8ANQAhAHAmAbQATALANAMQhHAShDAKQgsAGgeAAQhBAAACgdg");
	this.shape_281.setTransform(173.1,70.5);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#F8A383").s().p("AgLAzQgIgKgEgVQgPg9AcgSQAZgTAJBOIAFA1QgDAFgEADIgCADIgBAAQgTAAgLgNg");
	this.shape_282.setTransform(185.7,38.6);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#442323").s().p("AiiAnQBrALBcgwQBbgsADg7QAAAEASAGQAQAHgCADIgCACQgRA9ghArQgtA+g+AMQgRADgRAAQhKAAg6g/g");
	this.shape_283.setTransform(169.8,47.1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.rf(["#8C3C38","#652F2E","#4C2727"],[0.114,0.584,0.855],-43.1,-36.7,0,-43.1,-36.7,85.5).s().p("AiJCxQgxg1gShQQgRhLATg5QAqh+B2gWQAvgJAwAOQAvAOAeAfQAcAJAQARQATASAKAjIACAIQAKAjgDAjQgDAfgNAYQgDAWgGAHIgBACQgSA9ggAuQgtA9g/AMQgSADgPAAQhLAAg5g/g");
	this.shape_284.setTransform(167.4,33.3);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#D87E6A").s().p("AhmByIgBAAQgTgIACgPQACghAegSIABAAIAKiQIAIACIBFAHQAYgQAMgEQAUgIACANQAEAcAVAFQARAFAVgNQAEgCgWAYQgbAeABAFQgFAGAAAGQgHAlAAAaIAAABQAAgDADgGQADgGACAAIgGAUIgCAKIgBACIgOArQhDALgpAAQgdAAgPgFg");
	this.shape_285.setTransform(171.4,64.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#D87E6A").s().p("AAMA3QgTgDgHgUQgdg4AXgYQAUgYAcBJIADA0QgHACgHAAIgFAAg");
	this.shape_286.setTransform(184,39.7);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#F8A383").s().p("AAjDvIgHgkQgngLgigWIgNgKIgCgBIgSgQQgZgZgLgiIgBgCIgBgEIgCgJIgggXQhJh8AmhXQAfhGBVgYIAAAAQA0gOBUAqQBgAuAOBHQAPBSAFAxQAHBagVArQgRAlgtAbQgoAZgCANIgCALg");
	this.shape_287.setTransform(170.6,37.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#F8A383").s().p("AhQB7QgBgDgEgDQgJgHAAgVIABghQAIgFAEgHIANi2ICZAmIAEACIgHAqQgIAwgCAcQAAAVACAEQABAEAIACQAVAGgRAkQgSAngwAGQgOABgLAAQgpAAgjgQg");
	this.shape_288.setTransform(170.5,66.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#EAF8FE").s().p("AiMAaIAAgzIBzAAQAJAAAtASQAUAFAHAAIBUAAIABAcg");
	this.shape_289.setTransform(-340.6,339.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#4C201B").s().p("AgaEsQgCgkgQgsQgWg+gJgwQgYhxAahOQAahPAng7QAIgPAmguIAVgaQAPgPAOgFQgJAFgJAPIgSAhQg0BfgOCOQgFAyARCNQANBzgUAxIgSAIQACgJgBgSg");
	this.shape_290.setTransform(-345.5,75);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.lf(["#732C1C","#592820"],[0,1],-47.1,85.1,17.6,-28.7).s().p("AhDEpQACgmgSgmQgLgbgFgUIgKgnQgFgZAEgSQgJgLgEgaQgJg1AXhNQAYhRAjg8QASgfAaggQAUgbAKgIQAVgSAXAHQATAGAFASQAEALgCAWQgCATABAjQADAvAJAsIASBgQAKBQgPA3QgUBHggA2QggA2gdAMQAFgMAFgQQAIgggFgWIgPAsQgYAvgzAUQAEgMABgTg");
	this.shape_291.setTransform(-341,74.9);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#DB9D4B").s().p("AhAC4QgHglgTglIgQgrQABgIgMhAQgNhCAEgxIAAAAQADgVAEgRQBIgzB3gDQAlgBATACQgeAlAGBIQAKBxgpBfQghBOgnAQQADgNACgRQADgigGgWIgLAnQgTAqgiATQAAgMgDgSg");
	this.shape_292.setTransform(-337.5,87.6);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#EAF8FE").s().p("AiYAaIAAgzIBdAAQAFAAAaAJIAYAJQATAFAGAAICDAAIABAcg");
	this.shape_293.setTransform(-308.9,339.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#8AAEBC").s().p("AiWANIAAgZIEtAAIAAAZg");
	this.shape_294.setTransform(-309.1,340.8);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#F9B66B").s().p("AhOBBQgDg3AOgiQAPgoAgAAQAUAAARAJQAVALAMATQAWAmAHA0g");
	this.shape_295.setTransform(-316.2,332.9);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#F9CC7B").s().p("AiVA9QgCgLAEgaQAGggAOgUIAAAAQATgkAjAEQAeAEAaAdQAKALASgBQATgBACgLQAHAHBAAaQAwAVAAAkg");
	this.shape_296.setTransform(-309.1,333.3);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#F9B66B").s().p("AhOBBQgDg3AOgiQAQgoAfAAQAUAAARAJQAVALAMATQAWAmAIA0g");
	this.shape_297.setTransform(-346.6,332.9);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#F9CC7B").s().p("AiIA6QgCgMAEgZQAGggAOgUIABAAQAPgfAfAGQAIABA1AXQANAPATABQARABAMgJQADADA1AfQAcARgBAfg");
	this.shape_298.setTransform(-340.8,333.6);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#F8A383").s().p("Ah2BUQAFgOAIgOQADgFgJgVQgJgUAIgKQASgXAHgXQAJgXACgjIBOAQQAFBWA7AsQAOAMAZARQASAPAAAQIj1ADQgBgHAFgOg");
	this.shape_299.setTransform(-340.2,329);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#F9CC7B").s().p("AglgjIAUgHQAUgDAQAYQAMAUAYAMIhsAhg");
	this.shape_300.setTransform(-337.4,332.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#DB9D4B").s().p("AgGBBQgNgUgRgQIgTgPIgGiAIAsAtQAwBBAfBjQgHAFgQAHIgUAIQgPgfgKgTg");
	this.shape_301.setTransform(-312.2,94.8);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#D87E6A").s().p("AAGAoQgGgygehEIAQgHQATAxADAKIAXBkQgEALgFABIgBAAQgKAAgFgug");
	this.shape_302.setTransform(-307.1,114.4);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#DB9D4B").s().p("AhWG9Qh9gTACgrQAHguA8iFIA7h7QgVg1gUg/QgPgxgLg1QgKgtgEgbQgMhYAUg7QAXhIBFgZQgBABAJArQAIArgBABQAJgDAhAHQAmAIAlAOQBrAqANBFQAkC0gYC3IgUCSQgKBWAFBNQhJAKhFAAQg9AAg6gJg");
	this.shape_303.setTransform(-332.8,113);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#F9CC7B").s().p("Ag5BqQghhHgNg4QgRhHAJg/QADgTgIgTIAWAGQAaAGAYAMQBLAlAdBFIAXAzQASAqAPAnQgoBRheArg");
	this.shape_304.setTransform(-307,86.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#D87E6A").s().p("Ag7AdQAqgTAWgYQAVgWAWguIAMAeIg5BEQghAtgFAWg");
	this.shape_305.setTransform(-302.9,102.9);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#F8A383").s().p("AAGCEQgQgLgTggQgGgLgXgzIgYg0QAqgTAYgaQATgXAWgtIAQAqQAQAtASA3QAMAtgGAkQgGAhgSALQgOAKgOAAQgMAAgLgHg");
	this.shape_306.setTransform(-300.6,108.5);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#F9CC7B").s().p("Ag0HKQiDgIg6gdQgSgKgJgKIgFgJQAHguA6iFIA4h8IAAgBQgshpgZh2IgMhCQgai/B4gyIATgHQAdgJA8gBQBGgBA1AOQAvALAcAjQAaAgAIAyQAFAkgDAbQAUAcAQAfQAVApAAAXQAAAggdAiQgOARgPALQABADgJAyQgEBEAXBTIA9DZQAHAbhlAbQhWAXheAAQgaAAgagCg");
	this.shape_307.setTransform(-325.9,112.2);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#3F243E").s().p("AkPBdQAahmArhEQARgbARgRIAOgNQAPgCA+AEIAHAAQCCAGCyAYIANAnQARA0ANA7QkugjkDB7IAJgrg");
	this.shape_308.setTransform(-327.2,146);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#3F243E").s().p("AkaB/IABgKIAJgqQAahmArhFQARgaARgSIAOgMQAOgCA/ADIAHAAQCCAHCxAXIAOAoQAQA0ANA6IAEASQgEAXg2AeQg7Ahg7AHQhvANhQABIgEAAQh0AAhOgbg");
	this.shape_309.setTransform(-327.1,147.8);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#593357").s().p("AhOB1QggjVgDhTQgDg7AGgqQAMABAshDQAthEANgBIANAoQARA0ANA8IAEASQAWBoAIByIAMCOIAAACIACAXIAAACIAEAxIABACIAPCrQABAOgIAKQgJALgNADQg6AKhLAEQgBhggejLg");
	this.shape_310.setTransform(-303.9,177.2);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#3F243E").s().p("AheGpQibgNhNgeQgLgFgGgLQgHgLACgMIAlkQQAViiAKg7IABgKIAJgrQAahoArhEQARgaARgSIAOgNQAOgBA/ADIAHAAQCCAHCxAXIAOAoQAQAzANA9IAEARQAWBpAJBxIALCOIABACIABAXIABACIAEAyIAAACIAPCqQABAOgIALQgIALgOACQg5ALhNADQg0ADgzAAQhXAAhagIg");
	this.shape_311.setTransform(-327.3,175.7);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#D87E6A").s().p("AAJBrQhXgHgohaQgOgdgDgfQBggHBKgyIBOBtQARASAFASQAHAYgTAPQglAfg5AAIgUgBg");
	this.shape_312.setTransform(-307.5,114);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#DB9D4B").s().p("Ag2gnIAng3IBlCEQhMAzheAGQgIhDAmhDg");
	this.shape_313.setTransform(-312.6,99.2);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#D87E6A").s().p("AAWCTQgtgFgOhWIgTjLIAcAwQAfA6AVAuQBACPg7AAIgHgBg");
	this.shape_314.setTransform(-345.6,105.3);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#F8A383").s().p("AiEBOQADgPAHgNQADgFgHgUQgIgUAHgJQAOgXAFgQQAHgXgCgfIBdAMQAFBYBFAsQASALAfAPQAWAMAAAMIkMACQgBgJACgMg");
	this.shape_315.setTransform(-308.4,329.7);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#F8A383").s().p("AhQG5QAJgSABg/QAAg3gGgsQgTh1gLhPQgUiRAGhkIAAgBQACgpAHgmQAQhYAGgsQAVgTBAgWQBEgYA6gEIgDAWQgEAdgDAJQgXBhhFK9IgCAgQAAARAGAQg");
	this.shape_316.setTransform(-340.9,281.4);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#D87E6A").s().p("AiRN3QAKgSAAhAQAAg3gFgrQgUh2gLhPQgTiTAFhjIABgBQACgqAGgmQAQhXAGgsQAFgkABgiQABhUgTiBQgYiUgKhLQgkkVBHiwIF6A7QAFByg1BFQgaAigbAMIgSDsQgVEBgPBuIgDAUQgFAegCAIQgYBihDK/IgCAgQABAQAGARg");
	this.shape_317.setTransform(-334.4,236.8);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#D87E6A").s().p("AiUiRIEpgUQgFBggQB+QguAJhNAgQhcAmgOAeQghjtgOhKg");
	this.shape_318.setTransform(-313.6,218.5);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#F8A383").s().p("AgwNxQAGgUgCgfQgCg3ghiqQgiitgFhcQgHh6AShlIAShMQgIhjgejFIgeiwIgBnNIEigFQAuFNgfFJQgJBegTB4QgRBngBAYQgCAsgaFSQgZFEAAAQQABAWADAVQADAUADAHg");
	this.shape_319.setTransform(-314.2,237);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#F8A383").s().p("AgrAOQAJgIArgXIAcgPQAOgIAHgHIgDAFQgYAkgsAUQgoATgFAPQACgXANgLg");
	this.shape_320.setTransform(-312.4,54.2);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#F8A383").s().p("AgWgBQgJg/AjABQAGAAAGAHQAMAOgDArIgFA2QgDAFgFACIgBACQgYgEgJg9g");
	this.shape_321.setTransform(-307.8,36.4);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#4C201B").s().p("Ah0AsQgxhrAMhfQASCVBuBKQAmAdA8AKQBBALATgZQgWAhgtATQgpARgxAAQhAAAg0hzg");
	this.shape_322.setTransform(-331.4,37.7);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("Ah/APQAUgpA2gMQA1gMA4AXQAcAKAaAXQAMANAIAKQhHAKhCADIgqABQhbAAANgcg");
	this.shape_323.setTransform(-325.3,66.4);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.lf(["#732C1C","#592820"],[0,1],16.1,-23.4,-15.3,13.4).s().p("Ai0CFQgyhtAMhdIADgQQAah5B0ggQAugNAsAIQAsAHAYAXQBAAGAkAqQAdAhAGAvQAEAlgPA2IgBAhQgEARgOACQgBAGgFABIgJAGIgCABQgBACADgUQAEgZgCgFQgEgIgMAHQgMAHgCAOQgFAqgYAxQgPAegLAOQgWAhgtATQgmAQgxAAQhDAAgzhyg");
	this.shape_324.setTransform(-324.9,28.8);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#D87E6A").s().p("AANB+QgmgCgegOQgRgIgFgRQgGgRAHgQIAGgLIAHgIIAAAAIABgBIAAAAIABgBIAAgDIABgHIAMiPIABAAICAgCIguAeQgaASgCAeIAAAFQABBfAJBIg");
	this.shape_325.setTransform(-327.4,62.9);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#D87E6A").s().p("AgYADQgPg2AlgIQAFgCAGAFQAOANADArIADA2IgGAHQgggBgPg5g");
	this.shape_326.setTransform(-309.2,36.4);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#F8A383").s().p("AhtFTQgRgIgGgRQgGgRAHgQIAGgLIAHgIIABgBIABAAIAAgBIAAgDIABgHIAPizIAEABIADABIANAFIgOgOIgOgTQgVgegFghIgCgQIgbgcQg0iLA1hPQArhBBZgIIgEAPQA2gFBPAwQBZA4ACBJQABBSgEAxQgIBXgZApIgEAEQgXAjgtAUQgoASgEANIgDAKIgDAUIgBAnQAAATADACQAVAHgNAiQgOAmgvACIgVABQgngCgegOg");
	this.shape_327.setTransform(-322,40);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#F9CC7B").s().p("AgqglIASgHQAUgDAPAYQAOATARAJQAIAGAGABIhvAhg");
	this.shape_328.setTransform(-306.8,332.1);

	this.addChild(this.shape_328,this.shape_327,this.shape_326,this.shape_325,this.shape_324,this.shape_323,this.shape_322,this.shape_321,this.shape_320,this.shape_319,this.shape_318,this.shape_317,this.shape_316,this.shape_315,this.shape_314,this.shape_313,this.shape_312,this.shape_311,this.shape_310,this.shape_309,this.shape_308,this.shape_307,this.shape_306,this.shape_305,this.shape_304,this.shape_303,this.shape_302,this.shape_301,this.shape_300,this.shape_299,this.shape_298,this.shape_297,this.shape_296,this.shape_295,this.shape_294,this.shape_293,this.shape_292,this.shape_291,this.shape_290,this.shape_289,this.shape_288,this.shape_287,this.shape_286,this.shape_285,this.shape_284,this.shape_283,this.shape_282,this.shape_281,this.shape_280,this.shape_279,this.shape_278,this.shape_277,this.shape_276,this.shape_275,this.shape_274,this.shape_273,this.shape_272,this.shape_271,this.shape_270,this.shape_269,this.shape_268,this.shape_267,this.shape_266,this.shape_265,this.shape_264,this.shape_263,this.shape_262,this.shape_261,this.shape_260,this.shape_259,this.shape_258,this.shape_257,this.shape_256,this.shape_255,this.shape_254,this.shape_253,this.shape_252,this.shape_251,this.shape_250,this.shape_249,this.shape_248,this.shape_247,this.shape_246,this.shape_245,this.shape_244,this.shape_243,this.shape_242,this.shape_241,this.shape_240,this.shape_239,this.shape_238,this.shape_237,this.shape_236,this.shape_235,this.shape_234,this.shape_233,this.shape_232,this.shape_231,this.shape_230,this.shape_229,this.shape_228,this.shape_227,this.shape_226,this.shape_225,this.shape_224,this.shape_223,this.shape_222,this.shape_221,this.shape_220,this.shape_219,this.shape_218,this.shape_217,this.shape_216,this.shape_215,this.shape_214,this.shape_213,this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201,this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.instance_4,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.instance_3,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.instance_2,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.instance_1,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.instance,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-362.3,-4.3,734.6,346.9);


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
		createjs.Tween.get(var_it01).wait(5860).to({alpha:1}, 600, createjs.Ease.quadOut);
		createjs.Tween.get(var_it02).wait(8000).to({alpha:1}, 600, createjs.Ease.quadOut);
		createjs.Tween.get(var_it03).wait(9426).to({alpha:1}, 600, createjs.Ease.quadOut);
		createjs.Tween.get(var_it04).wait(13189).to({alpha:1}, 600, createjs.Ease.quadOut);
		createjs.Tween.get(var_it05).wait(18292).to({alpha:1}, 600, createjs.Ease.quadOut);
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
	this.it02.setTransform(519.9,195.1,1,1,0,0,0,23.1,148.1);

	this.it05 = new lib.Símbolo11();
	this.it05.setTransform(244.7,332.7,1,1,0,0,0,244.7,52.9);

	this.it04 = new lib.Símbolo9();
	this.it04.setTransform(244.7,233.5,1,1,0,0,0,244.7,35);

	this.it03 = new lib.Símbolo8();
	this.it03.setTransform(244.7,145.3,1,1,0,0,0,244.7,42);

	this.it01 = new lib.Símbolo7();
	this.it01.setTransform(244.7,57.1,1,1,0,0,0,244.7,35.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.it01},{t:this.it03},{t:this.it04},{t:this.it05},{t:this.it02}]}).wait(72));

	// Capa 5
	this.instance = new lib.Símbolo3();
	this.instance.setTransform(712.2,-13.8,1,1,0,0,0,137.8,36.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).to({y:42,alpha:1},26,cjs.Ease.get(1)).wait(12));

	// Capa 1
	this.instance_1 = new lib.Símbolo4();
	this.instance_1.setTransform(972.5,-13.8,1,1,0,0,0,111.6,36.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45).to({_off:false},0).to({y:42,alpha:1},26,cjs.Ease.get(1)).wait(1));

	// Capa 4
	this.instance_2 = new lib.Símbolo5();
	this.instance_2.setTransform(1635.5,264.7,1,1,0,0,0,116.2,178.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:872.2},26,cjs.Ease.get(1)).wait(46));

	// Capa 3
	this.instance_3 = new lib.Símbolo13();
	this.instance_3.setTransform(1115.3,356.1,1,1,0,0,0,68.3,98.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({x:540.7},26,cjs.Ease.get(1)).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.7,-124.3,1962.3,553.4);


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
		
		var audio1 = createjs.Sound.play("sounds/10.mp3");
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
p.nominalBounds = new cjs.Rectangle(640,357.7,2030.6,727.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;