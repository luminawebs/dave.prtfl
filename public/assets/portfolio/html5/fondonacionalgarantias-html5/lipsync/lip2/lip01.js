(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 35,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/02.mp3", id:"02"},
		{src:"images/Path.png", id:"Path"},
		{src:"images/Path_0.png", id:"Path_0"},
		{src:"images/Path_1.png", id:"Path_1"},
		{src:"images/Path_2.png", id:"Path_2"},
		{src:"images/flash0aiActivos.png", id:"flash0aiActivos"}
	]
};



// symbols:



(lib.Path = function() {
	this.initialize(img.Path);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1711,1502);


(lib.Path_0 = function() {
	this.initialize(img.Path_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1711,1502);


(lib.Path_1 = function() {
	this.initialize(img.Path_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1711,1502);


(lib.Path_2 = function() {
	this.initialize(img.Path_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1711,1502);


(lib.flash0aiActivos = function() {
	this.initialize(img.flash0aiActivos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,15);


(lib.Símbolo2 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AA5AAQAAAXgRARQgRARgXAAQgWAAgRgRQgRgRAAgXQAAgWARgRQARgRAWAAQAXAAARARQARARAAAWg");
	this.shape.setTransform(5.8,5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").p("AA5AAQAAAXgRARQgRARgXAAQgWAAgRgRQgRgRAAgXQAAgWARgRQARgRAWAAQAXAAARARQARARAAAWg");
	this.shape_1.setTransform(632.6,5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").p("AHlnkIAALtQAABZg/A/Qg/BAhZAAIr4AA");
	this.shape_2.setTransform(584,60.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").p("AH5HhIsVAAQhZAAg/hAQg/g/AAhZIAArt");
	this.shape_3.setTransform(55.6,60.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.1,-2.1,641.4,111.5);


(lib.Símbolo1 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AA5AAQAAAXgRARQgRARgXAAQgWAAgRgRQgRgRAAgXQAAgWARgRQARgRAWAAQAXAAARARQARARAAAWg");
	this.shape.setTransform(632.6,105.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").p("AA5AAQAAAXgRARQgRARgXAAQgWAAgRgRQgRgRAAgXQAAgWARgRQARgRAWAAQAXAAARARQARARAAAWg");
	this.shape_1.setTransform(5.8,106.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").p("Anqn1IL4AAQBZAAA/BAQA/A/AABZIAAMX");
	this.shape_2.setTransform(584,50.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").p("AnzH6IAAsXQAAhZA/g/QA/hABZAAIMVAA");
	this.shape_3.setTransform(55.6,50.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.1,-1,641.4,113.8);


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


(lib.ClipGroup_3 = function() {
	this.initialize();

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgpHAFrIAArVMBSPAAAIAALVg");
	mask.setTransform(859.1,784.6);

	// Capa 3
	this.instance = new lib.Path();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(595.8,748.3,526.6,72.7);


(lib.ClipGroup_2 = function() {
	this.initialize();

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgpHAFrIAArVMBSPAAAIAALVg");
	mask.setTransform(859.1,784.4);

	// Capa 3
	this.instance = new lib.Path_0();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(595.8,748.1,526.6,72.8);


(lib.ClipGroup_1 = function() {
	this.initialize();

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgpHAFrIAArVMBSPAAAIAALVg");
	mask.setTransform(859.1,784.4);

	// Capa 3
	this.instance = new lib.Path_1();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(595.8,748.1,526.6,72.7);


(lib.ClipGroup = function() {
	this.initialize();

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgpHAFrIAArVMBSPAAAIAALVg");
	mask.setTransform(859.1,784.2);

	// Capa 3
	this.instance = new lib.Path_2();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(595.8,747.9,526.6,72.8);


(lib.Layer001STROKES = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5584A").s().p("AmFCiQjRAAixgRQiugQjyg5QkQhFiGgcIAJgqQGRBYGkAnQC1ARDFAAIAAArIABgrQERAGEZgRIADAqIAAgqQJwAFGDhXQDVgxCIhNIAQAcIgPgcIAKgGIAVAmQhmA/g8AhQhrA5hdAWQmOBcp3gGQjOANjXAAQhFAAhFgCgAYZhuIgPgoQAVgIATgFIAMAoQgGABgFAZQgFAYgEACgAYZhug");
	this.shape.setTransform(159.9,16.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,319.8,32.9);


(lib.Path_3 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D5AEB1","#D89B9E"],[0.035,1],-11.3,2.3,11.3,-2.2).s().p("Ag0CVQgsgxgPhOQgQhMAWg+QAWg+AvgJQAtgKAsAyQAsAwAPBOQAQBMgWA+QgWA9gvAKQgIACgHAAQglAAglgpg");
	this.shape.setTransform(11.9,19);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23.9,38);


(lib.Path_4 = function() {
	this.initialize();

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D5AEB1","#D89B9E"],[0.035,1],-11.3,2.3,11.3,-2.2).s().p("Ag0CVQgsgxgPhOQgQhMAWg+QAWg+AvgJQAtgKAsAyQAsAwAQBOQAPBMgWA+QgXA9gvAKQgHACgIAAQgkAAglgpg");
	this.shape_1.setTransform(11.9,19);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23.9,38);


(lib.Path_5 = function() {
	this.initialize();

	// Capa 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#D5AEB1","#D89B9E"],[0.035,1],-9.6,1.9,9.7,-1.9).s().p("AgsCUQglgwgNhOQgNhMASg+QAUg+AngJQAmgJAlAxQAmAwAMBOQANBMgTA+QgSA+goAJQgGABgHAAQgfAAgfgpg");
	this.shape_2.setTransform(10.1,19);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.2,38);


(lib.Path_6 = function() {
	this.initialize();

	// Capa 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#D5AEB1","#D89B9E"],[0.035,1],-9.6,1.9,9.7,-1.9).s().p("AgsCUQglgwgNhOQgNhMASg+QAUg+AngJQAmgJAlAxQAmAwAMBOQANBMgTA+QgSA+goAJQgGABgHAAQgfAAgfgpg");
	this.shape_3.setTransform(10.1,19);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.2,38);


(lib.Path_7 = function() {
	this.initialize();

	// Capa 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#D5AEB1","#D89B9E"],[0.035,1],-11.3,2.3,11.3,-2.2).s().p("Ag0CUQgsgwgPhOQgQhMAWg+QAXg+AugJQAtgJAsAxQAsAwAQBOQAPBMgWA+QgXA+gvAJQgHABgIAAQgkAAglgpg");
	this.shape_4.setTransform(11.9,19);

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23.9,38);


(lib.Path_8 = function() {
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


(lib.it04 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah2D9IgGAAIgDgBIgBgCIgBgBIAiiqQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAIAIgBIAFAAIADABIABABIAAACIgEAXQABgFAFgFIALgJQAGgFAIgCQAHgDAIAAQALAAAHADQAHAEAEAGQAEAGAAAIQACAIAAAJIgBARQgBAKgCAKQgDAKgFAKQgGAJgHAHQgHAIgJAEQgKAEgMAAIgLgBIgJgDIgHgFIgHgHIgLA7IgBABIgCACIgEABIgFAAgAg1BgQgIAEgGAHQgHAIgFAKQgFAJgCAMIgEAXQAGAJAHAFQAHAEAKAAQAHAAAGgDQAGgDAEgGQAFgGADgHIAFgPIAEgPIABgOIgBgKQgBgFgDgEQgCgDgDgCQgEgCgFAAQgIAAgHAEgA0GD9IgFAAIgDgBIgCgCIAAgBIAiiqQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAIgBIAEAAIADABIACABIAAACIgFAXQACgFAFgFIAKgJQAHgFAHgCQAIgDAIAAQAKAAAHADQAHAEAEAGQAFAGACAIQACAIAAAJIgCARQgBAKgEAKQgDAKgFAKQgFAJgHAHQgHAIgKAEQgJAEgMAAIgLgBIgJgDIgIgFIgGgHIgMA7IgBABIgCACIgDABIgGAAgAzFBgQgHAEgHAHQgGAIgFAKQgFAJgDAMIgEAXQAGAJAIAFQAHAEAJAAQAHAAAGgDQAGgDAFgGQAEgGADgHIAGgPIADgPIABgOIgBgKQgBgFgCgEQgCgDgEgCQgDgCgGAAQgHAAgIAEgA2fDzIgCgBIAAgCIABgCIAagmIADgQIABgFQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBIAEgBIAHAAIAFAAIAEABIACACIAAAEQAAAHgDAIQgEAIgGAHIgYAcIgFADIgIABIgEAAgEAjvADNIgKgCIgIgDIgFgEIgBgCIgBgDIABgCIAAgDIABgEIABgCIACgCIABgBIAEACIAGAEIAJAEQAGABAIAAQAIAAAFgBQAFgCAEgDQADgDACgEQACgEAAgFQAAgFgEgEQgDgEgGgCIgLgGIgMgHQgFgEgEgFQgDgGAAgJQAAgJADgHQAEgIAGgFQAGgGAKgDQAIgDALAAIAKABIAJACIAHACIAFADQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAIAAAEIgBAEIgCAEIgCACIgEgCIgGgDIgHgDIgLgBQgGAAgFACQgEABgDADQgEADgBAEQgCAEAAAEQAAAFAEAEQADADAGADIALAGQAHACAFAFQAFADAEAGQAEAGAAAIQAAAKgEAIQgEAIgHAGQgHAGgKADQgKADgMAAIgMgBgEAh3ADMQgJgDgGgGQgGgFgDgJQgDgIAAgLIABgTIAGgUQADgKAGgJQAGgJAIgHQAIgHALgEQAKgEANAAQAMAAAIADQAHACAGAFQAFAEACAGQACAFAAAGQAAAJgEAHQgFAIgJAFQgJAFgOADQgOADgUAAIgPAAIgBAJIAAAIQAAANAGAHQAHAHAPAAIAPgBIAMgDIAJgCIAEgCIACABIABADIgBADIAAAEIgCADIgCADQgBACgFACIgJACIgNADIgNAAQgMAAgJgCgEAiTABdQgHADgFAGQgFAFgEAHQgEAGgCAIIAOAAQAOAAAKgCQAJgCAGgDQAGgDACgEQACgEAAgEQAAgHgFgEQgFgFgKAAQgJAAgHADgAflDMQgGgCgEgDQgEgEgCgEQgDgFgBgFIgCgKIgBgJIACgSQABgKADgJQAEgKAFgJQAFgKAHgHQAHgHAKgFQAJgEAMAAQAGAAAFABQAFABAEADIAIAFIAGAGIAOhEIABgCIACgCIADAAIAGgBIAFABIADAAIACACIAAACIgkCzQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAIgIABIgFgBIgCAAIgCgCIAAgCIAEgWQgBAEgFAFQgEAFgHAFIgOAHQgHACgIAAQgIAAgGgCgEAgCABfQgGAEgFAFQgEAGgEAHIgFAPIgDAPIgBANQAAANAEAHQAEAHAKAAQAIAAAHgEQAIgEAGgHQAHgHAFgKQAFgKACgMIAFgWQgHgJgHgFQgHgFgKAAQgHAAgFADgAdTDLQgHgEgFgGQgEgHgBgHQgCgIAAgJIACgRIAEgTQADgKAFgKQAFgJAIgIQAHgHAJgFQAKgEAMAAQAMAAAIAFQAJAFAHAIIACgMQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAIAIgBIAFAAIADABIABABIAAACIgYB5QgBABAAAAQAAABAAAAQgBABAAAAQgBABAAAAIgIABIgFgBIgCAAIgCgCIAAgCIAEgXQgBAFgFAFQgEAFgHAEQgGAFgIACQgHADgIAAQgLAAgHgDgAdzBfQgGAEgEAGQgFAFgDAHIgFAPIgDAPIgBAOIAAAJIADAJQACAEAEACQAEACAFAAQAIAAAHgEQAIgEAGgHQAHgIAFgJQAFgKACgMIAFgWQgHgKgHgEQgHgFgKAAQgHAAgGADgAbJDMQgGgCgEgDQgEgEgCgEQgDgFgBgFIgCgKIgBgJIACgSQABgKADgJQAEgKAFgJQAFgKAHgHQAHgHAKgFQAJgEAMAAQAGAAAFABQAFABAEADIAIAFIAGAGIAOhEIABgCIACgCIADAAIAGgBIAFABIADAAIACACIAAACIgkCzQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAIgIABIgFgBIgCAAIgCgCIAAgCIAEgWQgBAEgFAFQgEAFgHAFIgOAHQgHACgIAAQgIAAgGgCgAbmBfQgGAEgFAFQgEAGgEAHIgFAPIgDAPIgBANQAAANAEAHQAEAHAKAAQAIAAAHgEQAIgEAGgHQAHgHAFgKQAFgKACgMIAFgWQgHgJgHgFQgHgFgKAAQgHAAgFADgAV1DMQgGgBgEgEQgEgDgBgFQgCgFAAgIIAAgDIABgEIAAgFIABgEIANhEIgQAAIgDgBIAAgDIAAgFIABgFIACgDIADgCIARAAIAGgdIABgBIACgCIAEgBIAFAAIAFAAIAEABIABACIAAABIgFAdIAfAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIABADIAAADIgBADIgBADIgBACIgCACIgCABIgfAAIgOBEIgBAGIAAAGQAAAHADADQADADAGAAIAHgBIAEgBIAEgBIACgBIACABIABADIgBAEIgBAEIgBADIgCADIgDACIgFACIgGABIgGAAQgIAAgFgCgATyDDQgKgLAAgWIABgSQABgKAEgJQADgKAFgKQAGgJAHgHQAIgHAKgFQAKgEANAAIALABIAJACIAIAEIAGAEIACADIABADIgBAFIgBAEIgDAEQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgGgFIgIgEQgFgCgIAAQgJAAgGADQgHAEgFAGQgFAFgDAIIgFAOIgDAPIgBAMQAAAOAGAHQAGAHAMAAQAJAAAGgCQAGgCAFgDIAHgFIAFgCIACABIAAADIAAAEIgBAEIgBAFIgDADIgGAEIgJAFIgLADIgNABQgWAAgLgLgARtDLQgHgEgFgGQgEgHgBgHQgCgIAAgJIACgRIAEgTQADgKAFgKQAFgJAIgIQAHgHAJgFQAKgEAMAAQAMAAAIAFQAJAFAHAIIACgMQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAIAIgBIAFAAIADABIABABIAAACIgYB5QgBABAAAAQAAABAAAAQgBABAAAAQgBABAAAAIgIABIgFgBIgCAAIgCgCIAAgCIAEgXQgBAFgFAFQgEAFgHAEQgGAFgIACQgHADgIAAQgLAAgHgDgASNBfQgGAEgEAGQgFAFgDAHIgFAPIgDAPIgBAOIAAAJIADAJQACAEAEACQAEACAFAAQAIAAAHgEQAIgEAGgHQAHgIAFgJQAFgKACgMIAFgWQgHgKgHgEQgHgFgKAAQgHAAgGADgAO/DNIgKgCIgIgDIgFgEIgBgCIgBgDIABgCIAAgDIABgEIABgCIACgCIABgBIAEACIAGAEIAJAEQAGABAIAAQAIAAAFgBQAFgCAEgDQADgDACgEQACgEAAgFQAAgFgEgEQgDgEgGgCIgLgGIgMgHQgFgEgEgFQgDgGAAgJQAAgJADgHQAEgIAGgFQAGgGAKgDQAIgDALAAIAKABIAJACIAHACIAFADQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAIAAAEIgBAEIgCAEIgCACIgEgCIgGgDIgHgDIgLgBQgGAAgFACQgEABgDADQgEADgBAEQgCAEAAAEQAAAFAEAEQADADAGADIALAGQAHACAFAFQAFADAEAGQAEAGAAAIQAAAKgEAIQgEAIgHAGQgHAGgKADQgKADgMAAIgMgBgAM1DLQgHgEgFgGQgEgHgBgHQgCgIAAgJIACgRIAEgTQADgKAFgKQAFgJAIgIQAHgHAJgFQAKgEAMAAQAMAAAIAFQAJAFAHAIIACgMQAAgBAAAAQABgBAAAAQAAAAABgBQABAAAAAAIAIgBIAFAAIADABIABABIAAACIgYB5QgBABAAAAQAAABAAAAQgBABAAAAQgBABAAAAIgIABIgFgBIgCAAIgCgCIAAgCIAEgXQgBAFgFAFQgEAFgHAEQgGAFgIACQgHADgIAAQgLAAgHgDgANVBfQgGAEgEAGQgFAFgDAHIgFAPIgDAPIgBAOIAAAJIADAJQACAEAEACQAEACAFAAQAIAAAHgEQAIgEAGgHQAHgIAFgJQAFgKACgMIAFgWQgHgKgHgEQgHgFgKAAQgHAAgGADgAHcDMQgJgDgGgGQgGgFgDgJQgDgIAAgLIABgTIAGgUQADgKAGgJQAGgJAIgHQAIgHALgEQAKgEANAAQAMAAAIADQAHACAGAFQAFAEACAGQACAFAAAGQAAAJgEAHQgFAIgJAFQgJAFgOADQgOADgUAAIgPAAIgBAJIAAAIQAAANAGAHQAHAHAPAAIAPgBIAMgDIAJgCIAEgCIACABIABADIgBADIAAAEIgCADIgCADQgBACgFACIgJACIgNADIgNAAQgMAAgJgCgAH4BdQgHADgFAGQgFAFgEAHQgEAGgCAIIAOAAQAOAAAKgCQAJgCAGgDQAGgDACgEQACgEAAgEQAAgHgFgEQgFgFgKAAQgJAAgHADgAFKDMQgGgCgEgDQgEgEgCgEQgDgFgBgFIgCgKIgBgJIACgSQABgKADgJQAEgKAFgJQAFgKAHgHQAHgHAKgFQAJgEAMAAQAGAAAFABQAFABAEADIAIAFIAGAGIAOhEIABgCIACgCIADAAIAGgBIAFABIADAAIACACIAAACIgkCzQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAIgIABIgFgBIgCAAIgCgCIAAgCIAEgWQgBAEgFAFQgEAFgHAFIgOAHQgHACgIAAQgIAAgGgCgAFnBfQgGAEgFAFQgEAGgEAHIgFAPIgDAPIgBANQAAANAEAHQAEAHAKAAQAIAAAHgEQAIgEAGgHQAHgHAFgKQAFgKACgMIAFgWQgHgJgHgFQgHgFgKAAQgHAAgFADgAAyDLQgKgDgGgGQgGgGgCgIQgDgJAAgLQAAgKACgKQABgLAEgJQAEgKAGgIQAGgJAIgGQAIgHAKgDQAKgEANAAQANAAAJADQAJADAHAGQAFAGADAJQADAIAAALQAAAKgCAKQgCALgDAKQgEAJgGAJQgGAIgIAHQgIAGgKAEQgLADgMAAQgNAAgJgDgABOBeQgGADgFAFQgGAFgEAHIgGAOIgEAPIgBAQQAAAGACAGQABAFADAEQAEAEAFACQAFACAIAAQAIAAAHgDQAGgDAFgFQAGgFADgHQAEgGADgIQACgHABgIQACgIAAgIQAAgGgCgGQgBgFgDgEQgEgEgFgCQgFgCgIAAQgIAAgHADgAjRDNIgKgCIgIgDIgFgEIgBgCIgBgDIAAgCIABgDIABgEIABgCIABgCIACgBIAEACIAGAEIAJAEQAFABAJAAQAHAAAFgBQAGgCADgDQAEgDABgEQACgEAAgFQAAgFgDgEQgEgEgFgCIgMgGIgLgHQgGgEgDgFQgEgGAAgJQAAgJAEgHQADgIAHgFQAGgGAJgDQAJgDALAAIAKABIAJACIAHACIAEADQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAIgBAEIgBAEIgCAEIgCACIgEgCIgFgDIgIgDIgLgBQgGAAgEACQgFABgDADQgDADgCAEQgBAEAAAEQAAAFADAEQAEADAFADIAMAGQAGACAGAFQAFADAEAGQADAGAAAIQAAAKgEAIQgDAIgHAGQgHAGgKADQgKADgMAAIgMgBgAlKDMQgJgDgGgGQgGgFgDgJQgDgIAAgLIACgTIAFgUQAEgKAGgJQAFgJAJgHQAHgHALgEQALgEANAAQALAAAIADQAIACAFAFQAFAEACAGQADAFAAAGQAAAJgFAHQgEAIgJAFQgJAFgPADQgOADgUAAIgOAAIgBAJIgBAIQAAANAHAHQAGAHAPAAIAQgBIAMgDIAIgCIAFgCIACABIAAADIAAADIgBAEIgBADIgCADQgCACgEACIgKACIgMADIgOAAQgMAAgJgCgAkuBdQgGADgFAGQgGAFgDAHQgEAGgCAIIANAAQAPAAAJgCQAKgCAFgDQAGgDADgEQACgEAAgEQAAgHgGgEQgFgFgKAAQgJAAgHADgApeDNIgKgCIgIgDIgFgEIgBgCIgBgDIAAgCIABgDIABgEIABgCIABgCIACgBIAEACIAGAEIAJAEQAFABAJAAQAHAAAFgBQAGgCADgDQAEgDABgEQACgEAAgFQAAgFgDgEQgEgEgFgCIgMgGIgLgHQgGgEgDgFQgEgGAAgJQAAgJAEgHQADgIAHgFQAGgGAJgDQAJgDALAAIAKABIAJACIAHACIAEADQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAIgBAEIgBAEIgCAEIgCACIgEgCIgFgDIgIgDIgLgBQgGAAgEACQgFABgDADQgDADgCAEQgBAEAAAEQAAAFADAEQAEADAFADIAMAGQAGACAGAFQAFADAEAGQADAGAAAIQAAAKgEAIQgDAIgHAGQgHAGgKADQgKADgMAAIgMgBgArpDLQgHgEgEgGQgEgHgCgHQgBgIAAgJIABgRIAFgTQADgKAFgKQAFgJAHgIQAHgHAKgFQAJgEAMAAQAMAAAJAFQAIAFAHAIIADgMQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAIgBIAEAAIADABIACABIAAACIgZB5QAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAIgIABIgEgBIgDAAIgBgCIAAgCIAEgXQgCAFgEAFQgFAFgGAEQgHAFgHACQgIADgIAAQgLAAgHgDgArIBfQgGAEgFAGQgEAFgDAHIgGAPIgDAPIgBAOIABAJIADAJQACAEADACQAEACAGAAQAHAAAIgEQAHgEAHgHQAGgIAFgJQAFgKADgMIAEgWQgGgKgHgEQgIgFgJAAQgHAAgGADgAvSDMQgGgCgDgDQgFgEgCgEQgDgFgBgFIgCgKIAAgJIABgSQACgKADgJQADgKAFgJQAFgKAHgHQAIgHAJgFQAJgEAMAAQAGAAAFABQAFABAEADIAIAFIAHAGIANhEIABgCIACgCIAEAAIAFgBIAGABIADAAIABACIAAACIgjCzQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAIgIABIgFgBIgDAAIgBgCIAAgCIAEgWQgCAEgEAFQgFAFgGAFIgOAHQgIACgIAAQgIAAgGgCgAu1BfQgGAEgEAFQgFAGgDAHIgGAPIgDAPIgBANQAAANAEAHQAFAHAKAAQAHAAAIgEQAHgEAHgHQAGgHAFgKQAFgKADgMIAEgWQgGgJgHgFQgIgFgJAAQgHAAgGADgAxcDLQgJgDgGgGQgGgGgDgIQgDgJAAgLQAAgKACgKQACgLAEgJQAEgKAGgIQAGgJAIgGQAIgHAKgDQAKgEANAAQAMAAAKADQAJADAGAGQAGAGADAJQADAIAAALQAAAKgCAKQgCALgEAKQgEAJgGAJQgGAIgIAHQgIAGgKAEQgKADgNAAQgNAAgJgDgAw/BeQgHADgFAFQgFAFgEAHIgGAOIgEAPIgBAQQAAAGABAGQACAFADAEQADAEAFACQAGACAHAAQAJAAAGgDQAHgDAFgFQAFgFAEgHQAEgGACgIQADgHABgIQABgIAAgIQAAgGgBgGQgCgFgDgEQgDgEgGgCQgFgCgIAAQgIAAgGADgA37DLQgKgDgGgGQgGgGgCgIQgDgJAAgLQAAgKACgKQABgLAEgJQAEgKAGgIQAGgJAIgGQAIgHAKgDQAKgEANAAQANAAAJADQAJADAHAGQAFAGADAJQADAIAAALQAAAKgCAKQgCALgDAKQgEAJgGAJQgGAIgIAHQgIAGgKAEQgLADgMAAQgNAAgJgDgA3fBeQgGADgFAFQgGAFgEAHIgGAOIgEAPIgBAQQAAAGACAGQABAFADAEQAEAEAFACQAFACAIAAQAIAAAHgDQAGgDAFgFQAGgFADgHQAEgGADgIQACgHABgIQACgIAAgIQAAgGgCgGQgBgFgDgEQgEgEgFgCQgFgCgIAAQgIAAgHADgA8cDMQgHgDgDgEQgEgEgCgGQgCgGAAgIIABgJIACgJIAPhMIAAgCIADgBIADgBIAGAAIAFAAIADABIACABIAAACIgPBLIgBAHIgBAIIABAHQABAEACACQACADADABQACABAFAAQAHAAAHgEQAIgEAGgHQAHgIAFgKQAFgKACgMIALg1IABgCIACgBIAEgBIAFAAIAFAAIAEABIABABIAAACIgYB5IgBACIgCACIgDAAIgFABIgEgBIgDAAIgBgCIgBgCIAFgWQgCAEgFAFIgLAKIgOAHQgHACgIAAQgJAAgGgCgA/sDLQgHgEgEgGQgEgHgCgHQgBgIAAgJIABgRIAFgTQADgKAFgKQAFgJAHgIQAHgHAKgFQAJgEAMAAQAMAAAJAFQAIAFAHAIIADgMQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAABAAIAIgBIAEAAIADABIACABIAAACIgZB5QAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAIgIABIgEgBIgDAAIgBgCIAAgCIAEgXQgCAFgEAFQgFAFgGAEQgHAFgHACQgIADgIAAQgLAAgHgDgA/LBfQgGAEgFAGQgEAFgDAHIgGAPIgDAPIgBAOIABAJIADAJQACAEADACQAEACAGAAQAHAAAIgEQAHgEAHgHQAGgIAFgJQAFgKADgMIAEgWQgGgKgHgEQgIgFgJAAQgHAAgGADgEgh2ADMQgGgCgDgDQgFgEgCgEQgDgFgBgFIgCgKIAAgJIABgSQACgKADgJQADgKAFgJQAFgKAHgHQAIgHAJgFQAJgEAMAAQAGAAAFABQAFABAEADIAIAFIAHAGIANhEIABgCIACgCIAEAAIAFgBIAGABIADAAIABACIAAACIgjCzQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAIgIABIgFgBIgDAAIgBgCIAAgCIAEgWQgCAEgEAFQgFAFgGAFIgOAHQgIACgIAAQgIAAgGgCgEghZABfQgGAEgEAFQgFAGgDAHIgGAPIgDAPIgBANQAAANAEAHQAFAHAKAAQAHAAAIgEQAHgEAHgHQAGgHAFgKQAFgKADgMIAEgWQgGgJgHgFQgIgFgJAAQgHAAgGADgEgkIADLQgHgEgEgGQgEgHgCgHQgBgIAAgJIABgRIAFgTQADgKAFgKQAFgJAHgIQAHgHAKgFQAJgEAMAAQAMAAAJAFQAIAFAHAIIADgMQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAIgBIAEAAIADABIACABIAAACIgZB5QAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAIgIABIgEgBIgDAAIgBgCIAAgCIAEgXQgCAFgEAFQgFAFgGAEQgHAFgHACQgIADgIAAQgLAAgHgDgEgjnABfQgGAEgFAGQgEAFgDAHIgGAPIgDAPIgBAOIABAJIADAJQACAEADACQAEACAGAAQAHAAAIgEQAHgEAHgHQAGgIAFgJQAFgKADgMIAEgWQgGgKgHgEQgIgFgJAAQgHAAgGADgEgmDADDQgLgLAAgWIABgSQACgKADgJQAEgKAFgKQAFgJAIgHQAIgHAKgFQAKgEANAAIAKABIAKACIAIAEIAFAEIADADIAAADIAAAFIgCAEIgCAEQgBABAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgFgFIgJgEQgFgCgHAAQgJAAgHADQgGAEgFAGQgFAFgEAIIgFAOIgDAPIgBAMQAAAOAGAHQAHAHAMAAQAIAAAHgCQAGgCAEgDIAHgFIAFgCIACABIABADIgBAEIAAAEIgCAFIgCADIgGAEIgJAFIgMADIgNABQgWAAgKgLgEAlRADMIgEgBIgCgDIAAgFIAAgEIABgGIACgEIADgEIAEgDIAIAAIAGAAIAEACIACADIAAAEIAAAFIgBAFIgCAFIgDAEIgEACIgIABIgGgBgAZ1DMIgDgBIgBgBIAAgCIAYh5IABgCIACgBIADgBIAGAAIAFAAIADABIACABIAAACIgYB5IgBACIgCABIgEABIgFABIgGgBgAYWDMIgEgBIgCgBIgBgCIgShzIAAgDIAAgCIABgDIABgBIAEgBIAFAAIAGAAIADABIACABIAAACIAPBkIAAACIABgBIAOgXIAMgYIALgZIAKgdIACgCIACgBIAEgBIAFAAIAGAAIADAAIACABIAAACIAAADIgBACIgMAeQgGAPgIAPQgHAPgJAPQgJAOgLANIgCADIgDABIgEAAIgFABIgHgBgAW6DMIgDgBIgBgBIAAgCIAYh5IABgCIACgBIADgBIAGAAIAFAAIADABIACABIAAACIgYB5IgBACIgCABIgEABIgFABIgGgBgALlDMIgDgBIgBgBIAAgCIAji0IABgCIACgBIAEgBIAGAAIAFAAIADABIACABIAAACIgkC0IgBACIgCABIgEABIgFABIgGgBgAJIDMIgDgBIgCgBIAAgCIAYh5IABgCIACgBIADgBIAFAAIAFAAIADABIABABIAAACIgFAWIAIgLIAJgJQAFgEAGgCQAFgCAFAAIAFAAIAEABIAEABIACABIABADIAAACIgBAEIAAAEIgCAEIgBADIgCABIgDAAIgDgCIgDgBIgFAAQgFAAgFAEQgHAEgFAHQgGAHgFAJQgFAKgCALIgLA2IgBACIgCABIgDABIgGABIgFgBgAD3DMIgDgBIgCgBIAAgCIAPhLIABgIIABgHQAAgIgEgFQgDgFgJAAQgHAAgHAEQgIAEgGAHQgGAIgFAKQgGAJgCAMIgLA2IgBACIgCABIgDABIgGABIgFgBIgDgBIgCgBIAAgCIAYh5IABgCIACgBIADgBIAFAAIAFAAIADABIABABIAAACIgFAXQACgFAFgFIALgJQAGgFAIgCQAHgDAJAAQAJAAAGADQAGACAEAFQADAEACAGQACAGAAAHIgBAJIgBAJIgQBMIAAACIgCABIgEABIgGABIgFgBgAnBDMIgDgBIgBgBIAAgCIAYh5IABgCIACgBIADgBIAEAAIAFAAIADABIABABIAAACIgEAWIAHgLIAKgJQAFgEAFgCQAFgCAGAAIAEAAIAFABIADABIADABIABADIgBACIAAAEIgBAEIgBAEIgCADIgCABIgCAAIgDgCIgEgBIgEAAQgFAAgGAEQgGAEgGAHQgGAHgEAJQgFAKgDALIgKA2IgBACIgCABIgEABIgFABIgGgBgAtYDMIgDgBIgBgBIAAgCIAYh5IABgCIACgBIADgBIAEAAIAFAAIADABIABABIAAACIgEAWIAHgLIAKgJQAFgEAFgCQAFgCAGAAIAEAAIAFABIADABIADABIABADIgBACIAAAEIgBAEIgBAEIgCADIgCABIgCAAIgDgCIgEgBIgEAAQgFAAgGAEQgGAEgGAHQgGAHgEAJQgFAKgDALIgKA2IgBACIgCABIgEABIgFABIgGgBgA5SDMIgDgBIgCgBIAAgCIAPhLIABgIIABgHQAAgIgEgFQgDgFgJAAQgHAAgHAEQgIAEgGAHQgGAIgFAKQgGAJgCAMIgLA2IgBACIgCABIgDABIgGABIgFgBIgDgBIgCgBIAAgCIAYh5IABgCIACgBIADgBIAFAAIAFAAIADABIABABIAAACIgFAXQACgFAFgFIALgJQAGgFAIgCQAHgDAJAAQAJAAAGADQAGACAEAFQADAEACAGQACAGAAAHIgBAJIgBAJIgQBMIAAACIgCABIgEABIgGABIgFgBgAqyA4IgFAAIgDgBIAAgCIABgCIAVggIACgCIADgBIAEgBIAFgBIAGABIAEABIAAACIgBADIgaAfIgCACIgCACIgDAAIgEAAgAaTAzIgEgDQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAAAAAgBIAAgGIACgGIADgEQACgCADgBIAHAAIAGAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABIABAEIAAAGIgCAGIgDAEIgFADIgHAAIgGAAgAXYAzIgEgDQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAAAAAgBIAAgGIACgGIADgEQACgCADgBIAHAAIAGAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABIABAEIAAAGIgCAGIgDAEIgFADIgHAAIgGAAgAdfgOIgFgCIgBgBIAAgCIAAgCIABgDIAAgDIABgDIABgCIACgBIACABIACAAIACAAIAEABQAFAAAFgCQAEgCADgEIAFgJIADgOIAWhuIgRAAIgCgBIgBgDIAAgDIABgDIABgDIABgDIACgCIACgBIARAAIADgRQACgLAEgIQAEgIAGgGQAGgFAHgDQAIgCAJAAIAGAAIAGABIAFABIADACIABACIABADIgBABIAAADIgBADIAAADIgCACIgBABIgCgBIgEgBIgEgBIgGgBQgGAAgEACQgEACgDAEQgDADgCAGQgCAGgBAHIgDAMIAbAAIADABIABAEIgBADIAAADIgBADIgCACIgBACIgCABIgcAAIgXBzQgCALgEAJQgEAIgFAFQgGAGgIACQgHADgJAAIgKgBgAV2gNIgGAAIgEgCIgBgCIACgDIAhgqIgUh3IgBgDIAAgCIABgDIABgBIAEgBIAFAAIAGAAIAEABIABABIABACIAPBjIABAAQAIgLAHgNQAHgMAFgMIALgZIAJgaIABgCIACgBIAEgBIAGAAIAIAAQAAAAABABQAAAAAAAAQAAABABAAQAAAAAAABIAAADIgBADIgKAaIgMAbIgRAfQgJAPgNASIgjAvIgCACIgDACIgEABIgGAAgAXYgXIgCgBIAAgCIABgCIAZgmIADgQIACgFQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAIAEgBIAGAAIAGAAIADABIACACIABAEQAAAHgEAIQgDAIgHAHIgYAcIgEADIgIABIgEAAgEAotgA/QgHgEgFgGQgEgHgBgHQgCgIAAgJIACgRIAEgTQADgKAFgKQAFgJAIgIQAHgHAJgFQAKgEAMAAQAMAAAIAFQAJAFAHAIIACgMQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAIAIgBIAFAAIADABIABABIAAACIgYB5QAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAIgIABIgFgBIgCAAIgCgCIAAgCIAEgXQgBAFgFAFQgEAFgHAEQgGAFgIACQgHADgIAAQgLAAgHgDgEApNgCrQgGAEgEAGQgFAFgDAHIgFAPIgDAPIgBAOIAAAJIADAJQACAEAEACQAEACAFAAQAIAAAHgEQAIgEAGgHQAHgIAFgJQAFgKACgMIAFgWQgHgKgHgEQgHgFgKAAQgHAAgGADgEAizgA/QgHgEgFgGQgEgHgBgHQgCgIAAgJIACgRIAEgTQADgKAFgKQAFgJAIgIQAHgHAJgFQAKgEAMAAQAMAAAIAFQAJAFAHAIIACgMQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAIAIgBIAFAAIADABIABABIAAACIgYB5QAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAIgIABIgFgBIgCAAIgCgCIAAgCIAEgXQgBAFgFAFQgEAFgHAEQgGAFgIACQgHADgIAAQgLAAgHgDgEAjTgCrQgGAEgEAGQgFAFgDAHIgFAPIgDAPIgBAOIAAAJIADAJQACAEAEACQAEACAFAAQAIAAAHgEQAIgEAGgHQAHgIAFgJQAFgKACgMIAFgWQgHgKgHgEQgHgFgKAAQgHAAgGADgAaFg/QgHgEgFgGQgEgHgBgHQgCgIAAgJIACgRIAEgTQADgKAFgKQAFgJAIgIQAHgHAJgFQAKgEAMAAQAMAAAIAFQAJAFAHAIIACgMQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAIAIgBIAFAAIADABIABABIAAACIgYB5QAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAIgIABIgFgBIgCAAIgCgCIAAgCIAEgXQgBAFgFAFQgEAFgHAEQgGAFgIACQgHADgIAAQgLAAgHgDgAalirQgGAEgEAGQgFAFgDAHIgFAPIgDAPIgBAOIAAAJIADAJQACAEAEACQAEACAFAAQAIAAAHgEQAIgEAGgHQAHgIAFgJQAFgKACgMIAFgWQgHgKgHgEQgHgFgKAAQgHAAgGADgATYg9IgKgCIgIgDIgFgEIgBgCIgBgDIABgCIAAgDIABgEIABgCIACgCIABgBIAEACIAGAEIAJAEQAGABAIAAQAIAAAFgBQAFgCAEgDQADgDACgEQACgEAAgFQAAgFgEgEQgDgEgGgCIgLgGIgMgHQgFgEgEgFQgDgGAAgJQAAgJADgHQAEgIAGgFQAGgGAKgDQAIgDALAAIAKABIAJACIAHACIAFADQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAIAAAEIgBAEIgCAEIgCACIgEgCIgGgDIgHgDIgLgBQgGAAgFACQgEABgDADQgEADgBAEQgCAEAAAEQAAAFAEAEQADADAGADIALAGQAHACAFAFQAFADAEAGQAEAGAAAIQAAAKgEAIQgEAIgHAGQgHAGgKADQgKADgMAAIgMgBgARWg/QgKgDgGgGQgGgGgCgIQgDgJAAgLQAAgKACgKQABgLAEgJQAEgKAGgIQAGgJAIgGQAIgHAKgDQAKgEANAAQANAAAJADQAJADAHAGQAFAGADAJQADAIAAALQAAAKgCAKQgCALgDAKQgEAJgGAJQgGAIgIAHQgIAGgKAEQgLADgMAAQgNAAgJgDgARyisQgGADgFAFQgGAFgEAHIgGAOIgEAPIgBAQQAAAGACAGQABAFADAEQAEAEAFACQAFACAIAAQAIAAAHgDQAGgDAFgFQAGgFADgHQAEgGADgIQACgHABgIQACgIAAgIQAAgGgCgGQgBgFgDgEQgEgEgFgCQgFgCgIAAQgIAAgHADgAODg+QgGgDgEgEQgEgEgBgGQgCgGAAgIIABgJIABgJIAPhMIABgCIACgBIAEgBIAFAAIAGAAIADABIABABIAAACIgOBLIgCAHIAAAIIABAHQAAAEACACQACADADABQADABAEAAQAHAAAIgEQAHgEAHgHQAGgIAFgKQAFgKADgMIAKg1IABgCIADgBIADgBIAGAAIAFAAIADABIACABIAAACIgZB5IAAACIgCACIgDAAIgFABIgFgBIgDAAIgBgCIAAgCIAEgWQgCAEgEAFIgLAKIgOAHQgIACgHAAQgKAAgGgCgAL2g+QgGgCgDgDQgFgEgCgEQgDgFgBgFIgCgKIAAgJIABgSQACgKADgJQADgKAFgJQAFgKAHgHQAIgHAJgFQAJgEAMAAQAGAAAFABQAFABAEADIAIAFIAHAGIANhEIABgCIACgCIAEAAIAFgBIAGABIADAAIABACIAAACIgjCzQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAIgIABIgFgBIgDAAIgBgCIAAgCIAEgWQgCAEgEAFQgFAFgGAFIgOAHQgIACgIAAQgIAAgGgCgAMTirQgGAEgEAFQgFAGgDAHIgGAPIgDAPIgBANQAAANAEAHQAFAHAKAAQAHAAAIgEQAHgEAHgHQAGgHAFgKQAFgKADgMIAEgWQgGgJgHgFQgIgFgJAAQgHAAgGADgAJsg/QgJgDgGgGQgGgGgDgIQgDgJAAgLQAAgKACgKQACgLAEgJQAEgKAGgIQAGgJAIgGQAIgHAKgDQAKgEANAAQAMAAAKADQAJADAGAGQAGAGADAJQADAIAAALQAAAKgCAKQgCALgEAKQgEAJgGAJQgGAIgIAHQgIAGgKAEQgKADgNAAQgNAAgJgDgAKJisQgHADgFAFQgFAFgEAHIgGAOIgEAPIgBAQQAAAGABAGQACAFADAEQADAEAFACQAGACAHAAQAJAAAGgDQAHgDAFgFQAFgFAEgHQAEgGACgIQADgHABgIQABgIAAgIQAAgGgBgGQgCgFgDgEQgDgEgGgCQgFgCgIAAQgIAAgGADgADcg9IgKgCIgIgDIgFgEIgBgCIgBgDIABgCIAAgDIABgEIABgCIACgCIABgBIAEACIAGAEIAJAEQAGABAIAAQAIAAAFgBQAFgCAEgDQADgDACgEQACgEAAgFQAAgFgEgEQgDgEgGgCIgLgGIgMgHQgFgEgEgFQgDgGAAgJQAAgJADgHQAEgIAGgFQAGgGAKgDQAIgDALAAIAKABIAJACIAHACIAFADQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAIAAAEIgBAEIgCAEIgCACIgEgCIgGgDIgHgDIgLgBQgGAAgFACQgEABgDADQgEADgBAEQgCAEAAAEQAAAFAEAEQADADAGADIALAGQAHACAFAFQAFADAEAGQAEAGAAAIQAAAKgEAIQgEAIgHAGQgHAGgKADQgKADgMAAIgMgBgABag/QgKgDgGgGQgGgGgCgIQgDgJAAgLQAAgKACgKQABgLAEgJQAEgKAGgIQAGgJAIgGQAIgHAKgDQAKgEANAAQANAAAJADQAJADAHAGQAFAGADAJQADAIAAALQAAAKgCAKQgCALgDAKQgEAJgGAJQgGAIgIAHQgIAGgKAEQgLADgMAAQgNAAgJgDgAB2isQgGADgFAFQgGAFgEAHIgGAOIgEAPIgBAQQAAAGACAGQABAFADAEQAEAEAFACQAFACAIAAQAIAAAHgDQAGgDAFgFQAGgFADgHQAEgGADgIQACgHABgIQACgIAAgIQAAgGgCgGQgBgFgDgEQgEgEgFgCQgFgCgIAAQgIAAgHADgAg2g+QgGgCgEgDQgEgEgCgEQgDgFgBgFIgCgKIgBgJIACgSQABgKADgJQAEgKAFgJQAFgKAHgHQAHgHAKgFQAJgEAMAAQAGAAAFABQADABAEADIAIAFIAGAGIAOhEIABgCIACgCIADAAIAGgBIAFABIADAAIACACIAAACIgkCzQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAIgIABIgFgBIgCAAIgCgCIAAgCIAEgWQgBAEgDAFQgEAFgHAFIgOAHQgHACgIAAQgIAAgGgCgAgZirQgGAEgFAFQgEAGgEAHIgFAPIgDAPIgBANQAAANAEAHQAEAHAKAAQAIAAAHgEQAIgEAGgHQAGgHAEgKQAFgKACgMIAFgWQgHgJgHgFQgFgFgKAAQgHAAgFADgAmDg+QgJgDgGgGQgGgFgDgJQgDgIAAgLIACgTIAFgUQAEgKAGgJQAFgJAJgHQAHgHALgEQALgEANAAQALAAAIADQAIACAFAFQAFAEACAGQADAFAAAGQAAAJgFAHQgEAIgJAFQgJAFgPADQgOADgUAAIgOAAIgBAJIgBAIQAAANAHAHQAGAHAPAAIAQgBIAMgDIAIgCIAFgCIACABIAAADIAAADIgBAEIgBADIgCADQgCACgEACIgKACIgMADIgOAAQgMAAgJgCgAlnitQgGADgFAGQgGAFgDAHQgEAGgCAIIANAAQAPAAAJgCQAKgCAFgDQAGgDADgEQACgEAAgEQAAgHgGgEQgFgFgKAAQgJAAgHADgApPg/QgKgDgGgGQgGgGgCgIQgDgJAAgLQAAgKACgKQABgLAEgJQAEgKAGgIQAGgJAIgGQAIgHAKgDQAKgEANAAQANAAAJADQAJADAHAGQAFAGADAJQADAIAAALQAAAKgCAKQgCALgDAKQgEAJgGAJQgGAIgIAHQgIAGgKAEQgLADgMAAQgNAAgJgDgAozisQgGADgFAFQgGAFgEAHIgGAOIgEAPIgBAQQAAAGACAGQABAFADAEQAEAEAFACQAFACAIAAQAIAAAHgDQAGgDAFgFQAGgFADgHQAEgGADgIQACgHABgIQACgIAAgIQAAgGgCgGQgBgFgDgEQgEgEgFgCQgFgCgIAAQgIAAgHADgArhg+QgGgCgEgDQgEgEgCgEQgDgFgBgFIgCgKIgBgJIACgSQABgKADgJQAEgKAFgJQAFgKAHgHQAHgHAKgFQAJgEAMAAQAGAAAFABQAFABAEADIAIAFIAGAGIAOhEIABgCIACgCIADAAIAGgBIAFABIADAAIACACIAAACIgkCzQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAIgIABIgFgBIgCAAIgCgCIAAgCIAEgWQgBAEgFAFQgEAFgHAFIgOAHQgHACgIAAQgIAAgGgCgArEirQgGAEgFAFQgEAGgEAHIgFAPIgDAPIgBANQAAANAEAHQAEAHAKAAQAIAAAHgEQAIgEAGgHQAHgHAFgKQAFgKACgMIAFgWQgHgJgHgFQgHgFgKAAQgHAAgFADgAuvg+QgGgCgDgDQgFgEgCgEQgDgFgBgFIgCgKIAAgJIABgSQACgKADgJQADgKAFgJQAFgKAHgHQAIgHAJgFQAJgEAMAAQAGAAAFABQAFABAEADIAIAFIAHAGIANhEIABgCIACgCIAEAAIAFgBIAGABIADAAIABACIAAACIgjCzQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAIgIABIgFgBIgDAAIgBgCIAAgCIAEgWQgCAEgEAFQgFAFgGAFIgOAHQgIACgIAAQgIAAgGgCgAuSirQgGAEgEAFQgFAGgDAHIgGAPIgDAPIgBANQAAANAEAHQAFAHAKAAQAHAAAIgEQAHgEAHgHQAGgHAFgKQAFgKADgMIAEgWQgGgJgHgFQgIgFgJAAQgHAAgGADgA03g+QgGgCgEgDQgEgEgCgEQgDgFgBgFIgCgKIgBgJIACgSQABgKADgJQAEgKAFgJQAFgKAHgHQAHgHAKgFQAJgEAMAAQAGAAAFABQAFABAEADIAIAFIAGAGIAOhEIABgCIACgCIADAAIAGgBIAFABIADAAIACACIAAACIgkCzQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAIgIABIgFgBIgCAAIgCgCIAAgCIAEgWQgBAEgFAFQgEAFgHAFIgOAHQgHACgIAAQgIAAgGgCgA0airQgGAEgFAFQgEAGgEAHIgFAPIgDAPIgBANQAAANAEAHQAEAHAKAAQAIAAAHgEQAIgEAGgHQAHgHAFgKQAFgKACgMIAFgWQgHgJgHgFQgHgFgKAAQgHAAgFADgA4Ig/QgHgEgEgGQgEgHgCgHQgBgIAAgJIABgRIAFgTQADgKAFgKQAFgJAHgIQAHgHAKgFQAJgEAMAAQAMAAAJAFQAIAFAHAIIADgMQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAABAAIAIgBIAEAAIADABIACABIAAACIgZB5QAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAIgIABIgEgBIgDAAIgBgCIAAgCIAEgXQgCAFgEAFQgFAFgGAEQgHAFgHACQgIADgIAAQgLAAgHgDgA3nirQgGAEgFAGQgEAFgDAHIgGAPIgDAPIgBAOIABAJIADAJQACAEADACQAEACAGAAQAHAAAIgEQAHgEAHgHQAGgIAFgJQAFgKADgMIAEgWQgGgKgHgEQgIgFgJAAQgHAAgGADgA5dg+QgGgBgEgEQgEgDgBgFQgCgFAAgIIAAgDIABgEIAAgFIABgEIANhEIgQAAIgDgBIAAgDIAAgFIABgFIACgDIADgCIARAAIAGgdIABgBIACgCIAEgBIAFAAIAFAAIAEABIABACIAAABIgFAdIAfAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIABADIAAADIgBADIgBADIgBACIgCACIgCABIgfAAIgOBEIgBAGIAAAGQAAAHADADQADADAGAAIAHgBIAEgBIAEgBIACgBIACABIABADIgBAEIgBAEIgBADIgCADIgDACIgFACIgGABIgGAAQgIAAgFgCgA7Tg9IgKgCIgIgDIgFgEIgBgCIgBgDIAAgCIABgDIABgEIABgCIABgCIACgBIAEACIAGAEIAJAEQAFABAJAAQAHAAAFgBQAGgCADgDQAEgDABgEQACgEAAgFQAAgFgDgEQgEgEgFgCIgMgGIgLgHQgGgEgDgFQgEgGAAgJQAAgJAEgHQADgIAHgFQAGgGAJgDQAJgDALAAIAKABIAJACIAHACIAEADQABABAAAAQAAABAAAAQAAABABAAQAAABAAAAIgBAEIgBAEIgCAEIgCACIgEgCIgFgDIgIgDIgLgBQgGAAgEACQgFABgDADQgDADgCAEQgBAEAAAEQAAAFADAEQAEADAFADIAMAGQAGACAGAFQAFADAEAGQADAGAAAIQAAAKgEAIQgDAIgHAGQgHAGgKADQgKADgMAAIgMgBgA9Mg+QgJgDgGgGQgGgFgDgJQgDgIAAgLIACgTIAFgUQAEgKAGgJQAFgJAJgHQAHgHALgEQALgEANAAQALAAAIADQAIACAFAFQAFAEACAGQADAFAAAGQAAAJgFAHQgEAIgJAFQgJAFgPADQgOADgUAAIgOAAIgBAJIgBAIQAAANAHAHQAGAHAPAAIAQgBIAMgDIAIgCIAFgCIACABIAAADIAAADIgBAEIgBADIgCADQgCACgEACIgKACIgMADIgOAAQgMAAgJgCgA8witQgGADgFAGQgGAFgDAHQgEAGgCAIIANAAQAPAAAJgCQAKgCAFgDQAGgDADgEQACgEAAgEQAAgHgGgEQgFgFgKAAQgJAAgHADgEggYgA/QgKgDgGgGQgGgGgCgIQgDgJAAgLQAAgKACgKQABgLAEgJQAEgKAGgIQAGgJAIgGQAIgHAKgDQAKgEANAAQANAAAJADQAJADAHAGQAFAGADAJQADAIAAALQAAAKgCAKQgCALgDAKQgEAJgGAJQgGAIgIAHQgIAGgKAEQgLADgMAAQgNAAgJgDgA/8isQgGADgFAFQgGAFgEAHIgGAOIgEAPIgBAQQAAAGACAGQABAFADAEQAEAEAFACQAFACAIAAQAIAAAHgDQAGgDAFgFQAGgFADgHQAEgGADgIQACgHABgIQACgIAAgIQAAgGgCgGQgBgFgDgEQgEgEgFgCQgFgCgIAAQgIAAgHADgEgiPgA9IgKgCIgIgDIgFgEIgBgCIgBgDIAAgCIABgDIABgEIABgCIABgCIACgBIAEACIAGAEIAJAEQAFABAJAAQAHAAAFgBQAGgCADgDQAEgDABgEQACgEAAgFQAAgFgDgEQgEgEgFgCIgMgGIgLgHQgGgEgDgFQgEgGAAgJQAAgJAEgHQADgIAHgFQAGgGAJgDQAJgDALAAIAKABIAJACIAHACIAEADQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAIgBAEIgBAEIgCAEIgCACIgEgCIgFgDIgIgDIgLgBQgGAAgEACQgFABgDADQgDADgCAEQgBAEAAAEQAAAFADAEQAEADAFADIAMAGQAGACAGAFQAFADAEAGQADAGAAAIQAAAKgEAIQgDAIgHAGQgHAGgKADQgKADgMAAIgMgBgEgl2gA+QgGgDgEgEQgEgEgBgGQgCgGAAgIIABgJIABgJIAPhMIABgCIACgBIAEgBIAFAAIAGAAIADABIABABIAAACIgOBLIgCAHIAAAIIABAHQAAAEACACQACADADABQADABAEAAQAHAAAIgEQAHgEAHgHQAGgIAFgKQAFgKADgMIAKg1IABgCIADgBIADgBIAGAAIAFAAIADABIACABIAAACIgZB5IAAACIgCACIgDAAIgFABIgFgBIgDAAIgBgCIAAgCIAEgWQgCAEgEAFIgLAKIgOAHQgIACgHAAQgKAAgGgCgEgn0gBHQgLgLAAgWIABgSQACgKADgJQAEgKAFgKQAFgJAIgHQAIgHAKgFQAKgEANAAIAKABIAKACIAIAEIAFAEIADADIAAADIAAAFIgCAEIgCAEQgBABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgFgFIgJgEQgFgCgHAAQgJAAgHADQgGAEgFAGQgFAFgEAIIgFAOIgDAPIgBAMQAAAOAGAHQAHAHAMAAQAIAAAHgCQAGgCAEgDIAHgFQADgCACAAIACABIABADIgBAEIAAAEIgCAFIgCADIgGAEIgJAFIgMADIgNABQgWAAgKgLgEAqrgA+IgDgBIgCgBIAAgCIAYh5IABgCIACgBIADgBIAFAAIAFAAIADABIABABIAAACIgFAWIAIgLIAJgJQAFgEAGgCQAFgCAFAAIAFAAIAEABIAEABIACABIABADIAAACIgBAEIAAAEIgCAEIgBADIgCABIgDAAIgDgCIgDgBIgFAAQgFAAgFAEQgHAEgFAHQgGAHgFAJQgFAKgCALIgLA2IgBACIgCABIgDABIgGABIgFgBgEAlwgA+IgDgBIgBgBIAAgCIAYh5IABgCIACgBIADgBIAGAAIAFAAIADABIACABIAAACIgYB5IgBACIgCABIgEABIgFABIgGgBgEAkxgA+IgDgBIgCgBIAAgCIAki0IABgCIACgBIAEgBIAFAAIAFAAIAEABIABABIAAACIgkC0IgBACIgCABIgDABIgGABIgFgBgEAhkgA+IgDgBIgCgBIAAgCIAPhLIABgIIABgHQAAgIgEgFQgDgFgJAAQgHAAgHAEQgIAEgGAHQgGAIgFAKQgGAJgCAMIgLA2IgBACIgCABIgDABIgGABIgFgBIgDgBIgCgBIAAgCIAYh5IABgCIACgBIADgBIAFAAIAFAAIADABIABABIAAACIgFAXQACgFAFgFIALgJQAGgFAIgCQAHgDAJAAQAJAAAGADQAGACAEAFQADAEACAGQACAGAAAHIgBAJIgBAJIgQBMIAAACIgCABIgEABIgGABIgFgBgAfVg+IgDgBIgBgBIAAgCIAYh5IABgCIACgBIADgBIAGAAIAFAAIADABIACABIAAACIgYB5IgBACIgCABIgEABIgFABIgGgBgAcDg+IgDgBIgCgBIAAgCIAki0IABgCIACgBIAEgBIAFAAIAFAAIAEABIABABIAAACIgkC0IgBACIgCABIgDABIgGABIgFgBgAP+g+IgDgBIgBgBIAAgCIAji0IABgCIACgBIAEgBIAGAAIAFAAIADABIACABIAAACIgkC0IgBACIgCABIgEABIgFABIgGgBgAIWg+IgEgBIgBgBIAAgCIAPhLIABgHIAAgHQAAgJgDgFQgDgFgJAAQgGAAgHAEQgIAEgGAHQgHAIgFAKQgFAJgCAMIgLA2IgBACIgCABIgDABIgGABIgFgBIgDgBIgCgBIAAgCIAPhLIABgIIAAgHQAAgIgDgFQgDgFgIAAQgHAAgHAEQgIAEgGAHQgHAIgFAKQgFAJgCAMIgLA2IgBACIgCABIgDABIgGABIgFgBIgDgBIgCgBIAAgCIAYh5IABgCIACgBIADgBIAFAAIAFAAIADABIABABIAAACIgFAXQACgFAFgFIALgJQAGgFAIgCQAHgDAHAAQAJAAAFACQAGACAEAEQAEAEABAFQACAGABAGIAHgKQAFgFAGgEQAGgFAHgCQAIgDAHAAQAJAAAGACQAGADAEAEQAEAFACAGQABAGAAAHIAAAJIgCAJIgPBMIgBACIgCABIgEABIgFABIgFgBgAjHg+IgEgBIgBgBIAAgCIAPhLIABgIIAAgHQAAgIgDgFQgEgFgIAAQgHAAgIAEQgHAEgGAHQgHAIgFAKQgFAJgCAMIgLA2IgBACIgCABIgEABIgFABIgGgBIgDgBIgBgBIAAgCIAYh5IABgCIACgBIADgBIAEAAIAFAAIADABIABABIAAACIgEAXQACgFAEgFIALgJQAHgFAHgCQAIgDAIAAQAJAAAGADQAGACAEAFQAEAEACAGQABAGAAAHIAAAJIgCAJIgPBMIgBACIgCABIgEABIgFABIgFgBgAs1g+IgDgBIgBgBIAAgCIAYh5IABgCIACgBIADgBIAGAAIAFAAIADABIACABIAAACIgYB5IgBACIgCABIgEABIgFABIgGgBgAwCg+IgDgBIgCgBIAAgCIAYh5IABgCIACgBIAEgBIAFAAIAGAAIADABIABABIAAACIgYB5IgBACIgCABIgDABIgGABIgFgBgAxig+IgDgBIgCgBIgBgCIgShzIAAgDIgBgCIABgDIACgBIADgBIAGAAIAFAAIAEABIABABIABACIAOBkIAAACIABgBIAPgXIAMgYIALgZIAKgdIABgCIACgBIAEgBIAGAAIAFAAIADAAIACABIAAACIAAADIgBACIgLAeQgGAPgIAPQgIAPgJAPQgJAOgLANIgCADIgDABIgEAAIgFABIgHgBgAy9g+IgDgBIgCgBIAAgCIAYh5IABgCIACgBIAEgBIAFAAIAGAAIADABIABABIAAACIgYB5IgBACIgCABIgDABIgGABIgFgBgEgj7gA+IgDgBIgBgBIAAgCIAYh5IABgCIACgBIADgBIAEAAIAFAAIADABIABABIAAACIgEAWIAHgLIAKgJQAFgEAFgCQAFgCAGAAIAEAAIAFABIADABIADABIABADIgBACIAAAEIgBAEIgBAEIgCADIgCABIgCAAIgDgCIgEgBIgEAAQgFAAgGAEQgGAEgGAHQgGAHgEAJQgFAKgDALIgKA2IgBACIgCABIgEABIgFABIgGgBgEgp6gA+IgDgBIgBgBIAAgCIAji0IABgCIACgBIAEgBIAGAAIAFAAIADABIACABIAAACIgkC0IgBACIgCABIgEABIgFABIgGgBgEAmogA+QgBAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAAAAAgBIAAgCIABgDIAAgDIABgCIABgCIABgCIACgDIADgDIBFhUIgzAAIgCgBIgBgEIAAgCIAAgDIABgDIACgDIACgCIACgBIBGAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABIABADIgBACIAAADIgBADIAAACQgBADgCACIgEAHIhFBTIA4AAQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIABAEIAAACIgBADIgBADIgBADIgCACIgCABgEgr7gA+IgDgBIgCgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgFIAficQABgFAEgCQADgCADAAIBTAAQADAAAAAFIAAACIgBADIAAADIgCADIgCADIgCAAIhEAAIgLA3IA6AAIADABIABADIgBADIAAADIgBADIgBADIgCACIgCABIg7AAIgNA+IBGAAQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABADIAAACIgBADIAAAEIgCADIgCACIgCABgAKdjSIgFAAIgCgBIgBgCIACgCIAUggIACgCIADgBIAEgBIAGgBIAGABIADABIAAACIgBADIgaAfIgBACIgDACIgDAAIgEAAgA3RjSIgFAAIgDgBIAAgCIABgCIAVggIACgCIADgBIAEgBIAFgBIAGABIAEABIAAACIgBADIgaAfIgCACIgCACIgDAAIgEAAgEAmOgDXIgEgDQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAAAAAgBIAAgGIACgGIADgEQACgCADgBIAHAAIAGAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABIABAEIAAAGIgCAGIgDAEIgFADIgHAAIgGAAgAfzjXIgEgDQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAAAAAgBIAAgGIACgGIADgEQACgCADgBIAHAAIAGAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABIABAEIAAAGIgCAGIgDAEIgFADIgHAAIgGAAgAsXjXIgEgDQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAAAAAgBIAAgGIACgGIADgEQACgCADgBIAHAAIAGAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABIABAEIAAAGIgCAGIgDAEIgFADIgHAAIgGAAgAvljXIgDgDQgBAAAAgBQAAAAgBAAQAAgBAAgBQAAAAAAgBIABgGIACgGIADgEQACgCACgBIAHAAIAHAAQAAAAABABQAAAAABAAQAAAAABABQAAAAABABIABAEIgBAGIgBAGIgEAEIgEADIgHAAIgHAAgAygjXIgDgDQgBAAAAgBQAAAAgBAAQAAgBAAgBQAAAAAAgBIABgGIACgGIADgEQACgCACgBIAHAAIAHAAQAAAAABABQAAAAABAAQAAAAABABQAAAAABABIABAEIgBAGIgBAGIgEAEIgEADIgHAAIgHAAg");
	this.shape.setTransform(302.1,44);

	// Capa 2
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(303.1,4,1,1,0,0,0,855.5,751);
	this.instance.alpha = 0.441;
	this.instance.compositeOperation = "lighter";

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF8959").p("EAtMAGsMhaXAAAQgyAAgjgjQgjgjAAgyIAApnQAAgxAjgjQAjgkAyAAMBaXAAAQAxAAAkAkQAjAjAAAxIAAJnQAAAygjAjQgkAjgxAAg");
	this.shape_1.setTransform(301.3,42.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EA4E2A").s().p("EgtLAGsQgyAAgjgjQgjgjAAgyIAApnQAAgyAjgiQAjgkAyAAMBaXAAAQAxAAAkAkQAjAiAAAyIAAJnQAAAygjAjQgkAjgxAAg");
	this.shape_2.setTransform(301.3,42.9);

	this.addChild(this.shape_2,this.shape_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-552.4,-747,1711,1502);


(lib.it03 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAmtAF+IgKgDIgIgDIgFgDIgBgCIgBgDIABgDIAAgDIABgDIABgDIACgCIABAAIAEABIAGAEIAJAEQAGACAIAAQAIAAAFgCQAFgCAEgDQADgDACgEQACgEAAgEQAAgGgEgDQgDgEgGgDIgLgGIgMgGQgFgEgEgGQgDgFAAgJQAAgJADgIQAEgHAGgGQAGgFAKgEQAIgDALAAIAKABIAJACIAHADIAFADQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABIAAAEIgBAEIgCAEIgCABIgEgBIgGgDIgHgDIgLgBQgGAAgFABQgEACgDADQgEADgBAEQgCADAAAEQAAAGAEADQADAEAGADIALAFQAHADAFAEQAFAEAEAGQAEAFAAAJQAAAJgEAIQgEAIgHAGQgHAGgKAEQgKADgMAAIgMgBgEAkrAF8QgKgDgGgGQgGgGgCgJQgDgJAAgKQAAgKACgLQABgKAEgKQAEgJAGgJQAGgJAIgGQAIgGAKgEQAKgEANAAQANAAAJAEQAJADAHAGQAFAGADAIQADAJAAALQAAAKgCAKQgCAKgDAKQgEAKgGAIQgGAJgIAGQgIAGgKAEQgLAEgMAAQgNAAgJgDgEAlHAEPQgGADgFAFQgGAFgEAGIgGAOIgEAQIgBAPQAAAHACAFQABAGADADQAEAEAFACQAFACAIAAQAIAAAHgDQAGgCAFgFQAGgFADgHQAEgHADgHQACgIABgIQACgHAAgIQAAgHgCgFQgBgGgDgDQgEgEgFgCQgFgCgIAAQgIAAgHADgAe6F8QgJgDgGgFQgGgGgDgIQgDgJAAgLIABgTIAGgUQADgJAGgKQAGgJAIgGQAIgHALgFQAKgEANAAQAMAAAIADQAHADAGAEQAFAFACAFQACAGAAAFQAAAKgEAHQgFAHgJAGQgJAFgOADQgOADgUAAIgPAAIgBAIIAAAIQAAAOAGAHQAHAHAPAAIAPgBIAMgDIAJgDIAEgBIACABIABACIgBADIAAAEIgCAEIgCADQgBACgFABIgJADIgNACIgNABQgMAAgJgDgAfWEOQgHADgFAFQgFAFgEAHQgEAHgCAHIAOAAQAOAAAKgBQAJgCAGgDQAGgDACgEQACgEAAgFQAAgHgFgEQgFgEgKAAQgJAAgHADgAdcF9QgFgCgEgDQgEgEgCgFQgCgFAAgHIAAgEIABgEIABgEIAAgEIAOhFIgRAAIgCAAIgBgEIAAgEIACgFIACgEIADgBIARAAIAGgdIABgCIACgBIADgBIAGAAIAFAAIADABIACABIAAACIgGAdIAfAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIAAAEIAAACIAAADIgBADIgCADIgBACIgDAAIgfAAIgNBEIgBAGIgBAGQAAAHADADQADAEAHAAIAGgBIAFgBIADgCIADAAIABABIABACIAAAEIgBAEIgCAEIgBACIgEACIgFACIgFABIgHABQgHAAgGgCgAZhF8QgJgDgGgFQgGgGgDgIQgDgJAAgLIACgTIAFgUQAEgJAGgKQAFgJAJgGQAHgHALgFQALgEANAAQALAAAIADQAIADAFAEQAFAFACAFQADAGAAAFQAAAKgFAHQgEAHgJAGQgJAFgPADQgOADgUAAIgOAAIgBAIIgBAIQAAAOAHAHQAGAHAPAAIAQgBIAMgDIAIgDIAFgBIACABIAAACIAAADIgBAEIgBAEIgCADQgCACgEABIgKADIgMACIgOABQgMAAgJgDgAZ9EOQgGADgFAFQgGAFgDAHQgEAHgCAHIANAAQAPAAAJgBQAKgCAFgDQAGgDADgEQACgEAAgFQAAgHgGgEQgFgEgKAAQgJAAgHADgAWsF+IgKgDIgIgDIgFgDIgBgCIgBgDIAAgDIABgDIABgDIABgDIABgCIACAAIAEABIAGAEIAJAEQAFACAJAAQAHAAAFgCQAGgCADgDQAEgDABgEQACgEAAgEQAAgGgDgDQgEgEgFgDIgMgGIgLgGQgGgEgDgGQgEgFAAgJQAAgJAEgIQADgHAHgGQAGgFAJgEQAJgDALAAIAKABIAJACIAHADIAEADQABAAAAABQAAAAAAAAQABABAAABQAAAAAAABIgBAEIgBAEIgCAEIgCABIgEgBIgFgDIgIgDIgLgBQgGAAgEABQgFACgDADQgDADgCAEQgBADAAAEQAAAGADADQAEAEAFADIAMAFQAGADAGAEQAFAEAEAGQADAFAAAJQAAAJgEAIQgDAIgHAGQgHAGgKAEQgKADgMAAIgMgBgAUzF8QgJgDgGgFQgGgGgDgIQgDgJAAgLIACgTIAFgUQAEgJAGgKQAFgJAJgGQAHgHALgFQALgEANAAQALAAAIADQAIADAFAEQAFAFACAFQADAGAAAFQAAAKgFAHQgEAHgJAGQgJAFgPADQgOADgUAAIgOAAIgBAIIgBAIQAAAOAHAHQAGAHAPAAIAQgBIAMgDIAIgDIAFgBIACABIAAACIAAADIgBAEIgBAEIgCADQgCACgEABIgKADIgMACIgOABQgMAAgJgDgAVPEOQgGADgFAFQgGAFgDAHQgEAHgCAHIANAAQAPAAAJgBQAKgCAFgDQAGgDADgEQACgEAAgFQAAgHgGgEQgFgEgKAAQgJAAgHADgATWF9QgGgCgEgDQgEgEgBgFQgCgFAAgHIAAgEIABgEIAAgEIABgEIANhFIgQAAIgDAAIAAgEIAAgEIABgFIACgEIADgBIARAAIAGgdIABgCIACgBIAEgBIAFAAIAFAAIAEABIABABIAAACIgFAdIAfAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIABAEIAAACIgBADIgBADIgBADIgCACIgCAAIgfAAIgOBEIgBAGIAAAGQAAAHADADQADAEAGAAIAHgBIAEgBIAEgCIACAAIACABIABACIgBAEIgBAEIgBAEIgCACIgDACIgFACIgGABIgGABQgIAAgFgCgAPFF8QgJgDgGgFQgGgGgDgIQgDgJAAgLIABgTIAGgUQADgJAGgKQAGgJAIgGQAIgHALgFQAKgEANAAQAMAAAIADQAHADAGAEQAFAFACAFQACAGAAAFQAAAKgEAHQgFAHgJAGQgJAFgOADQgOADgUAAIgPAAIgBAIIAAAIQAAAOAGAHQAHAHAPAAIAPgBIAMgDIAJgDIAEgBIACABIABACIgBADIAAAEIgCAEIgCADQgBACgFABIgJADIgNACIgNABQgMAAgJgDgAPhEOQgHADgFAFQgFAFgEAHQgEAHgCAHIAOAAQAOAAAKgBQAJgCAGgDQAGgDACgEQACgEAAgFQAAgHgFgEQgFgEgKAAQgJAAgHADgALCF0QgKgLAAgWIABgSQABgKAEgKQADgKAFgJQAGgJAHgIQAIgHAKgEQAKgFANAAIALABIAJADIAIADIAGAEIACADIABADIgBAFIgBAFIgDAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgGgEIgIgFQgFgCgIAAQgJAAgGAEQgHADgFAGQgFAGgDAHIgFAPIgDAOIgBAMQAAAOAGAHQAGAIAMAAQAJAAAGgDQAGgCAFgDIAHgFIAFgCIACABIAAADIAAAEIgBAFIgBAEIgDAEIgGAEIgJAEIgLAEIgNABQgWAAgLgLgAIdF+IgKgDIgIgDIgFgDIgBgCIgBgDIABgDIAAgDIABgDIABgDIACgCIABAAIAEABIAGAEIAJAEQAGACAIAAQAIAAAFgCQAFgCAEgDQADgDACgEQACgEAAgEQAAgGgEgDQgDgEgGgDIgLgGIgMgGQgFgEgEgGQgDgFAAgJQAAgJADgIQAEgHAGgGQAGgFAKgEQAIgDALAAIAKABIAJACIAHADIAFADQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABIAAAEIgBAEIgCAEIgCABIgEgBIgGgDIgHgDIgLgBQgGAAgFABQgEACgDADQgEADgBAEQgCADAAAEQAAAGAEADQADAEAGADIALAFQAHADAFAEQAFAEAEAGQAEAFAAAJQAAAJgEAIQgEAIgHAGQgHAGgKAEQgKADgMAAIgMgBgAGbF8QgKgDgGgGQgGgGgCgJQgDgJAAgKQAAgKACgLQABgKAEgKQAEgJAGgJQAGgJAIgGQAIgGAKgEQAKgEANAAQANAAAJAEQAJADAHAGQAFAGADAIQADAJAAALQAAAKgCAKQgCAKgDAKQgEAKgGAIQgGAJgIAGQgIAGgKAEQgLAEgMAAQgNAAgJgDgAG3EPQgGADgFAFQgGAFgEAGIgGAOIgEAQIgBAPQAAAHACAFQABAGADADQAEAEAFACQAFACAIAAQAIAAAHgDQAGgCAFgFQAGgFADgHQAEgHADgHQACgIABgIQACgHAAgIQAAgHgCgFQgBgGgDgDQgEgEgFgCQgFgCgIAAQgIAAgHADgACZF8QgJgDgGgFQgGgGgDgIQgDgJAAgLIABgTIAGgUQADgJAGgKQAGgJAIgGQAIgHALgFQAKgEANAAQAMAAAIADQAHADAGAEQAFAFACAFQACAGAAAFQAAAKgEAHQgFAHgJAGQgJAFgOADQgOADgUAAIgPAAIgBAIIAAAIQAAAOAGAHQAHAHAPAAIAPgBIAMgDIAJgDIAEgBIACABIABACIgBADIAAAEIgCAEIgCADQgBACgFABIgJADIgNACIgNABQgMAAgJgDgAC1EOQgHADgFAFQgFAFgEAHQgEAHgCAHIAOAAQAOAAAKgBQAJgCAGgDQAGgDACgEQACgEAAgFQAAgHgFgEQgFgEgKAAQgJAAgHADgAAHF9QgGgCgCgEQgEgDgCgFQgDgFgBgFIgCgKIgBgJIACgRQABgKADgKQAEgKAEgJQAEgJAHgIQAHgHAKgEQAJgFAMAAQAGAAAFACQAFABAEACIAIAFIAGAHIAOhFIABgCIACgBIADgBIAGAAIAFAAIADABIACABIAAACIgkC0QAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAIgIABIgFAAIgCgBIgCgBIAAgCIAEgXQgBAFgFAFQgEAFgHAEIgOAHQgHADgIAAQgIAAgGgCgAAkEQQgGADgFAGQgEAFgEAHIgFAPIgDAPIgBAOQAAANAEAHQAEAHAKAAQAIAAAHgEQAIgEAGgHQAHgIAFgJQAFgKACgMIAFgXQgHgJgHgFQgHgFgKAAQgHAAgFAEgAjAF8QgJgDgGgGQgGgGgDgJQgDgJAAgKQAAgKACgLQACgKAEgKQAEgJAGgJQAGgJAIgGQAIgGAKgEQAKgEANAAQAMAAAKAEQAJADAGAGQAGAGADAIQADAJAAALQAAAKgCAKQgCAKgEAKQgEAKgGAIQgGAJgIAGQgIAGgKAEQgKAEgNAAQgNAAgJgDgAijEPQgHADgFAFQgFAFgEAGIgGAOIgEAQIgBAPQAAAHABAFQACAGADADQADAEAFACQAGACAHAAQAJAAAGgDQAHgCAFgFQAFgFAEgHQAEgHACgHQADgIABgIQABgHAAgIQAAgHgBgFQgCgGgDgDQgDgEgGgCQgFgCgIAAQgIAAgGADgAooF8QgKgDgGgGQgGgGgCgJQgDgJAAgKQAAgKACgLQABgKAEgKQAEgJAGgJQAGgJAIgGQAIgGAKgEQAKgEANAAQANAAAJAEQAJADAHAGQAFAGADAIQADAJAAALQAAAKgCAKQgCAKgDAKQgEAKgGAIQgGAJgIAGQgIAGgKAEQgLAEgMAAQgNAAgJgDgAoMEPQgGADgFAFQgGAFgEAGIgGAOIgEAQIgBAPQAAAHACAFQABAGADADQAEAEAFACQAFACAIAAQAIAAAHgDQAGgCAFgFQAGgFADgHQAEgHADgHQACgIABgIQACgHAAgIQAAgHgCgFQgBgGgDgDQgEgEgFgCQgFgCgIAAQgIAAgHADgAqsF0QgKgLAAgWIABgSQABgKAEgKQADgKAFgJQAGgJAHgIQAIgHAKgEQAKgFANAAIALABIAJADIAIADIAGAEIACADIABADIgBAFIgBAFIgDAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgGgEIgIgFQgFgCgIAAQgJAAgGAEQgHADgFAGQgFAGgDAHIgFAPIgDAOIgBAMQAAAOAGAHQAGAIAMAAQAJAAAGgDQAGgCAFgDIAHgFIAFgCIACABIAAADIAAAEIgBAFIgBAEIgDAEIgGAEIgJAEIgLAEIgNABQgWAAgLgLgAtRF+IgKgDIgIgDIgFgDIgBgCIgBgDIABgDIAAgDIABgDIABgDIACgCIABAAIAEABIAGAEIAJAEQAGACAIAAQAIAAAFgCQAFgCAEgDQADgDACgEQACgEAAgEQAAgGgEgDQgDgEgGgDIgLgGIgMgGQgFgEgEgGQgDgFAAgJQAAgJADgIQAEgHAGgGQAGgFAKgEQAIgDALAAIAKABIAJACIAHADIAFADQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABIAAAEIgBAEIgCAEIgCABIgEgBIgGgDIgHgDIgLgBQgGAAgFABQgEACgDADQgEADgBAEQgCADAAAEQAAAGAEADQADAEAGADIALAFQAHADAFAEQAFAEAEAGQAEAFAAAJQAAAJgEAIQgEAIgHAGQgHAGgKAEQgKADgMAAIgMgBgAvTF8QgKgDgGgGQgGgGgCgJQgDgJAAgKQAAgKACgLQABgKAEgKQAEgJAGgJQAGgJAIgGQAIgGAKgEQAKgEANAAQANAAAJAEQAJADAHAGQAFAGADAIQADAJAAALQAAAKgCAKQgCAKgDAKQgEAKgGAIQgGAJgIAGQgIAGgKAEQgLAEgMAAQgNAAgJgDgAu3EPQgGADgFAFQgGAFgEAGIgGAOIgEAQIgBAPQAAAHACAFQABAGADADQAEAEAFACQAFACAIAAQAIAAAHgDQAGgCAFgFQAGgFADgHQAEgHADgHQACgIABgIQACgHAAgIQAAgHgCgFQgBgGgDgDQgEgEgFgCQgFgCgIAAQgIAAgHADgA1EF8QgJgDgGgFQgGgGgDgIQgDgJAAgLIABgTIAGgUQADgJAGgKQAGgJAIgGQAIgHALgFQAKgEANAAQAMAAAIADQAHADAGAEQAFAFACAFQACAGAAAFQAAAKgEAHQgFAHgJAGQgJAFgOADQgOADgUAAIgPAAIgBAIIAAAIQAAAOAGAHQAHAHAPAAIAPgBIAMgDIAJgDIAEgBIACABIABACIgBADIAAAEIgCAEIgCADQgBACgFABIgJADIgNACIgNABQgMAAgJgDgA0oEOQgHADgFAFQgFAFgEAHQgEAHgCAHIAOAAQAOAAAKgBQAJgCAGgDQAGgDACgEQACgEAAgFQAAgHgFgEQgFgEgKAAQgJAAgHADgA2iF9QgFgCgEgDQgEgEgCgFQgCgFAAgHIAAgEIABgEIABgEIAAgEIAOhFIgRAAIgCAAIgBgEIAAgEIACgFIACgEIADgBIARAAIAGgdIABgCIACgBIADgBIAGAAIAFAAIADABIACABIAAACIgGAdIAfAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIAAAEIAAACIAAADIgBADIgCADIgBACIgDAAIgfAAIgNBEIgBAGIgBAGQAAAHADADQADAEAHAAIAGgBIAFgBIADgCIADAAIABABIABACIAAAEIgBAEIgCAEIgBACIgEACIgFACIgFABIgHABQgHAAgGgCgA8kF+IgKgDIgIgDIgFgDIgBgCIgBgDIABgDIAAgDIABgDIABgDIACgCIABAAIAEABIAGAEIAJAEQAGACAIAAQAIAAAFgCQAFgCAEgDQADgDACgEQACgEAAgEQAAgGgEgDQgDgEgGgDIgLgGIgMgGQgFgEgEgGQgDgFAAgJQAAgJADgIQAEgHAGgGQAGgFAKgEQAIgDALAAIAKABIAJACIAHADIAFADQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABIAAAEIgBAEIgCAEIgCABIgEgBIgGgDIgHgDIgLgBQgGAAgFABQgEACgDADQgEADgBAEQgCADAAAEQAAAGAEADQADAEAGADIALAFQAHADAFAEQAFAEAEAGQAEAFAAAJQAAAJgEAIQgEAIgHAGQgHAGgKAEQgKADgMAAIgMgBgA+cF8QgJgDgGgFQgGgGgDgIQgDgJAAgLIABgTIAGgUQADgJAGgKQAGgJAIgGQAIgHALgFQAKgEANAAQAMAAAIADQAHADAGAEQAFAFACAFQACAGAAAFQAAAKgEAHQgFAHgJAGQgJAFgOADQgOADgUAAIgPAAIgBAIIAAAIQAAAOAGAHQAHAHAPAAIAPgBIAMgDIAJgDIAEgBIACABIABACIgBADIAAAEIgCAEIgCADQgBACgFABIgJADIgNACIgNABQgMAAgJgDgA+AEOQgHADgFAFQgFAFgEAHQgEAHgCAHIAOAAQAOAAAKgBQAJgCAGgDQAGgDACgEQACgEAAgFQAAgHgFgEQgFgEgKAAQgJAAgHADgA/6F9QgFgCgEgDQgEgEgCgFQgCgFAAgHIAAgEIABgEIABgEIAAgEIAOhFIgRAAIgCAAIgBgEIAAgEIACgFIACgEIADgBIARAAIAGgdIABgCIACgBIADgBIAGAAIAFAAIADABIACABIAAACIgGAdIAfAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIAAAEIAAACIAAADIgBADIgCADIgBACIgDAAIgfAAIgNBEIgBAGIgBAGQAAAHADADQADAEAHAAIAGgBIAFgBIADgCIADAAIABABIABACIAAAEIgBAEIgCAEIgBACIgEACIgFACIgFABIgHABQgHAAgGgCgEgkLAF8QgJgDgGgFQgGgGgDgIQgDgJAAgLIACgTIAFgUQAEgJAGgKQAFgJAJgGQAHgHALgFQALgEANAAQALAAAIADQAIADAFAEQAFAFACAFQADAGAAAFQAAAKgFAHQgEAHgJAGQgJAFgPADQgOADgUAAIgOAAIgBAIIgBAIQAAAOAHAHQAGAHAPAAIAQgBIAMgDIAIgDIAFgBIACABIAAACIAAADIgBAEIgBAEIgCADQgCACgEABIgKADIgMACIgOABQgMAAgJgDgEgjvAEOQgGADgFAFQgGAFgDAHQgEAHgCAHIANAAQAPAAAJgBQAKgCAFgDQAGgDADgEQACgEAAgFQAAgHgGgEQgFgEgKAAQgJAAgHADgEgoNAF0QgLgLAAgWIABgSQACgKADgKQAEgKAFgJQAFgJAIgIQAIgHAKgEQAKgFANAAIAKABIAKADIAIADIAFAEIADADIAAADIAAAFIgCAFIgCAEQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgFgEIgJgFQgFgCgHAAQgJAAgHAEQgGADgFAGQgFAGgEAHIgFAPIgDAOIgBAMQAAAOAGAHQAHAIAMAAQAIAAAHgDQAGgCAEgDIAHgFIAFgCIACABIABADIgBAEIAAAFIgCAEIgCAEIgGAEIgJAEIgMAEIgNABQgWAAgKgLgEAoPAF9IgEgCIgCgDIAAgEIAAgFIABgFIACgFIADgEIAEgCIAIgBIAGABIAEACIACADIAAAEIAAAEIgBAFIgCAFIgDAEIgEADIgIAAIgGAAgEAjUAF9IgDgBIgCgBIAAgCIAPhLIABgIIABgHQAAgIgEgFQgDgGgJAAQgHAAgHAFQgIAEgGAHQgGAHgFAKQgGAKgCAMIgLA2IgBACIgCABIgDABIgGAAIgFAAIgDgBIgCgBIAAgCIAYh6IABgCIACgBIADgBIAFAAIAFAAIADABIABABIAAACIgFAXQACgEAFgFIALgKQAGgEAIgDQAHgDAJAAQAJAAAGADQAGADAEAEQADAFACAGQACAGAAAGIgBAKIgBAJIgQBMIAAACIgCABIgEABIgGAAIgFAAgEAgmAF9IgDgBIgCgBIAAgCIAYh6IABgCIACgBIADgBIAFAAIAFAAIADABIABABIAAACIgFAWIAIgKIAJgJQAFgEAGgCQAFgDAFAAIAFABIAEABIAEABIACABIABADIAAACIgBADIAAAEIgCAEIgBADIgCACIgDgBIgDgBIgDgBIgFgBQgFAAgFAEQgHAEgFAHQgGAHgFAKQgFAKgCALIgLA2IgBACIgCABIgDABIgGAAIgFAAgAcTF9IgDgBIgCgBIAAgCIgVgwIgmAwIgBACIgDABIgEABIgHAAIgGAAIgEgBIAAgCIABgEIAzg7IgZg5IgBgDIABgCIAEgCIAHAAIAGAAIADABIACABIABACIATAtIAkgtIACgCIACgBIAEgBIAGAAIAHAAIADABIABACQAAABAAAAQAAAAAAABQAAAAgBABQAAAAgBABIgvA5IAaA7IABAEIgCACIgEABIgHAAIgGAAgASAF9IgDgBIgCgBIAAgCIAPhLIABgIIABgHQAAgIgEgFQgDgGgJAAQgHAAgHAFQgIAEgGAHQgGAHgFAKQgGAKgCAMIgLA2IgBACIgCABIgDABIgGAAIgFAAIgDgBIgCgBIAAgCIAYh6IABgCIACgBIADgBIAFAAIAFAAIADABIABABIAAACIgFAXQACgEAFgFIALgKQAGgEAIgDQAHgDAJAAQAJAAAGADQAGADAEAEQADAFACAGQACAGAAAGIgBAKIgBAJIgQBMIAAACIgCABIgEABIgGAAIgFAAgANtF9IgDgBIgBgBIAAgCIAYh6IABgBIACgCIADgBIAGAAIAFAAIADABIACACIAAABIgYB6IgBACIgCABIgEABIgFAAIgGAAgAMuF9IgDgBIgCgBIAAgCIAki0IABgCIACgCIAEgBIAFAAIAFAAIAEABIABACIAAACIgkC0IgBACIgCABIgDABIgGAAIgFAAgAFDF9IgDgBIgBgBIAAgCIAji0IABgCIACgCIAEgBIAGAAIAFAAIADABIACACIAAACIgkC0IgBACIgCABIgEABIgFAAIgGAAgAkWF9IgEgBIgBgBIAAgCIAPhLIABgIIAAgHQAAgIgDgFQgDgGgJAAQgGAAgHAFQgIAEgGAHQgHAHgFAKQgFAKgCAMIgLA2IgBACIgCABIgDABIgGAAIgFAAIgDgBIgCgBIAAgCIAPhLIABgIIAAgHQAAgJgDgFQgDgFgIAAQgHAAgHAFQgIAEgGAHQgHAHgFAKQgFAKgCAMIgLA2IgBACIgCABIgDABIgGAAIgFAAIgDgBIgCgBIAAgCIAYh6IABgCIACgBIADgBIAFAAIAFAAIADABIABABIAAACIgFAXQACgEAFgFIALgKQAGgEAIgDQAHgDAHAAQAJAAAFADQAGACAEAEQAEADABAGQACAFABAGIAHgJQAFgGAGgEQAGgEAHgDQAIgDAHAAQAJAAAGADQAGACAEAFQAEAEACAGQABAGAAAHIAAAKIgCAJIgPBMIgBACIgCABIgEABIgFAAIgFAAgAwqF9IgDgBIgCgBIAAgCIAPhLIABgIIABgHQAAgIgEgFQgDgGgJAAQgHAAgHAFQgIAEgGAHQgGAHgFAKQgGAKgCAMIgLA2IgBACIgCABIgDABIgGAAIgFAAIgDgBIgCgBIAAgCIAYh6IABgCIACgBIADgBIAFAAIAFAAIADABIABABIAAACIgFAXQACgEAFgFIALgKQAGgEAIgDQAHgDAJAAQAJAAAGADQAGADAEAEQADAFACAGQACAGAAAGIgBAKIgBAJIgQBMIAAACIgCABIgEABIgGAAIgFAAgAzYF9IgDgBIgCgBIAAgCIAYh6IABgCIACgBIADgBIAFAAIAFAAIADABIABABIAAACIgFAWIAIgKIAJgJQAFgEAGgCQAFgDAFAAIAFABIAEABIAEABIACABIABADIAAACIgBADIAAAEIgCAEIgBADIgCACIgDgBIgDgBIgDgBIgFgBQgFAAgFAEQgHAEgFAHQgGAHgFAKQgFAKgCALIgLA2IgBACIgCABIgDABIgGAAIgFAAgA33F9IgEgBIgBgBIAAgCIAPhLIABgIIAAgHQAAgIgDgFQgEgGgIAAQgHAAgIAFQgHAEgGAHQgHAHgFAKQgFAKgCAMIgLA2IgBACIgCABIgEABIgFAAIgGAAIgDgBIgBgBIAAgCIAYh6IABgCIACgBIADgBIAEAAIAFAAIADABIABABIAAACIgEAXQACgEAEgFIALgKQAHgEAHgDQAIgDAIAAQAJAAAGADQAGADAEAEQAEAFACAGQABAGAAAGIAAAKIgCAJIgPBMIgBACIgCABIgEABIgFAAIgFAAgA6GF9IgDgBIgCgBIAAgCIAYh6IABgBIACgCIAEgBIAFAAIAGAAIADABIABACIAAABIgYB6IgBACIgCABIgDABIgGAAIgFAAgEghPAF9IgEgBIgBgBIAAgCIAPhLIABgIIAAgHQAAgIgDgFQgEgGgIAAQgHAAgIAFQgHAEgGAHQgHAHgFAKQgFAKgCAMIgLA2IgBACIgCABIgEABIgFAAIgGAAIgDgBIgBgBIAAgCIAYh6IABgCIACgBIADgBIAEAAIAFAAIADABIABABIAAACIgEAXQACgEAEgFIALgKQAHgEAHgDQAIgDAIAAQAJAAAGADQAGADAEAEQAEAFACAGQABAGAAAGIAAAKIgCAJIgPBMIgBACIgCABIgEABIgFAAIgFAAgEgliAF9IgDgBIgCgBIAAgCIAYh6IABgBIACgCIAEgBIAFAAIAGAAIADABIABACIAAABIgYB6IgBACIgCABIgDABIgGAAIgFAAgEgmiAF9IgDgBIgBgBIAAgCIAji0IABgCIACgCIAEgBIAGAAIAFAAIADABIACACIAAACIgkC0IgBACIgCABIgEABIgFAAIgGAAgAOLDjIgEgCQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAgHIACgGIADgEQACgCADAAIAHgBIAGABQABAAAAAAQABAAABABQAAAAAAAAQABABAAAAIABAEIAAAGIgCAHIgDAEIgFACIgHABIgGgBgA5pDjIgDgCQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIABgHIACgGIADgEQACgCACAAIAHgBIAHABQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAIABAEIgBAGIgBAHIgEAEIgEACIgHABIgHgBgEglFADjIgDgCQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIABgHIACgGIADgEQACgCACAAIAHgBIAHABQAAAAABAAQABAAAAABQABAAAAAAQAAABABAAIABAEIgBAGIgBAHIgEAEIgEACIgHABIgHgBgA12CNIgFgCIgBgCIAAgCIAAgCIABgCIAAgDIABgDIABgCIACgBIACAAIACAAIACABIAEAAQAFAAAFgCQAEgBADgEIAFgKIADgNIAWhtIgRAAIgCAAIgBgEIAAgCIABgEIABgDIABgCIACgCIACgBIARAAIADgRQACgLAEgIQAEgJAGgFQAGgFAHgDQAIgDAJAAIAGABIAGABIAFABIADACIABABIABADIgBACIAAACIgBADIAAADIgCACIgBABIgCAAIgEgCIgEgBIgGAAQgGAAgEABQgEACgDAEQgDAEgCAFQgCAGgBAIIgDAMIAbAAIADABIABADIgBADIAAAEIgBACIgCADIgBACIgCAAIgcAAIgXBxQgCAMgEAIQgEAIgFAGQgGAFgIADQgHADgJAAIgKgBgEgqHACNIgFgCIgBgCIAAgCIAAgCIABgCIAAgDIABgDIABgCIACgBIACAAIACAAIACABIAEAAQAFAAAFgCQAEgBADgEIAFgKIADgNIAWhtIgRAAIgCAAIgBgEIAAgCIABgEIABgDIABgCIACgCIACgBIARAAIADgRQACgLAEgIQAEgJAGgFQAGgFAHgDQAIgDAJAAIAGABIAGABIAFABIADACIABABIABADIgBACIAAACIgBADIAAADIgCACIgBABIgCAAIgEgCIgEgBIgGAAQgGAAgEABQgEACgDAEQgDAEgCAFQgCAGgBAIIgDAMIAbAAIADABIABADIgBADIAAAEIgBACIgCADIgBACIgCAAIgcAAIgXBxQgCAMgEAIQgEAIgFAGQgGAFgIADQgHADgJAAIgKgBgAEyCNIgGAAIgDgBIgBgBIgBgCIAiioQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAIAIgBIAFAAIADABIABABIAAACIgEAXQABgEAFgFIALgKQAGgEAIgDQAHgDAIAAQALAAAHAEQAHADAEAGQAEAGACAIQACAIAAAHIgBASQgCAKgDAKQgDAKgFAJQgGAJgHAIQgHAHgJAEQgKAFgMAAIgLgBIgJgEIgHgFIgHgGIgLA6IgBACIgCABIgEABIgFAAgAFzgNQgIAEgGAHQgHAFgFAKQgFAKgCAMIgEAWQAGAJAHAFQAHAFAKAAQAHAAAGgEQAGgDAEgGQAFgFADgHIAFgPIAEgQIABgNIgBgJQgBgFgDgDQgCgEgDgCQgEgCgFAAQgIAAgHAFgA4OCNIgGAAIgEgBIgBgCIACgDIAhgrIgUh0IgBgDIAAgDIABgCIABgCIAEgBIAFAAIAGAAIAEABIABABIABADIAPBhIABAAQAIgMAHgMQAHgMAFgNIALgXIAJgaIABgCIACgBIAEgBIAGAAIAIABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAAAIAAAEIgBACIgKAaIgMAaIgRAeQgJAQgNARIgjAwIgCACIgDABIgEABIgGAAgEApDABeIgKgDIgIgDIgFgDIgBgCIgBgDIABgDIAAgDIABgDIABgDIACgCIABAAIAEABIAGAEIAJAEQAGACAIAAQAIAAAFgCQAFgCAEgDQADgDACgEQACgEAAgEQAAgGgEgDQgDgEgGgDIgLgGIgMgGQgFgEgEgGQgDgFAAgJQAAgHADgIQAEgHAGgGQAGgFAKgEQAIgDALAAIAKABIAJACIAHADIAFADQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABIAAAEIgBAEIgCAEIgCABIgEgBIgGgDIgHgDIgLgBQgGAAgFABQgEACgDADQgEADgBAEQgCADAAADQAAAFAEADQADAEAGADIALAFQAHADAFAEQAFAEAEAGQAEAFAAAJQAAAJgEAIQgEAIgHAGQgHAGgKAEQgKADgMAAIgMgBgEAnBABcQgKgDgGgGQgGgGgCgJQgDgJAAgKQAAgKACgLQABgKAEgKQAEgIAGgIQAGgJAIgGQAIgGAKgEQAKgEANAAQANAAAJAEQAJADAHAGQAFAGADAIQADAJAAAJQAAAKgCAKQgCAKgDAKQgEAKgGAIQgGAJgIAGQgIAGgKAEQgLAEgMAAQgNAAgJgDgEAndgAPQgGADgFAFQgGAFgEAEIgGAOIgEAQIgBAPQAAAHACAFQABAGADADQAEAEAFACQAFACAIAAQAIAAAHgDQAGgCAFgFQAGgFADgHQAEgHADgHQACgIABgIQACgHAAgIQAAgHgCgDQgBgGgDgDQgEgEgFgCQgFgCgIAAQgIAAgHADgEAi/ABcQgJgDgGgFQgGgGgDgIQgDgJAAgLIABgTIAGgUQADgJAGgIQAGgJAIgGQAIgHALgFQAKgEANAAQAMAAAIADQAHADAGAEQAFAFACAFQACAGAAAFQAAAIgEAHQgFAHgJAGQgJAFgOADQgOADgUAAIgPAAIgBAIIAAAIQAAAOAGAHQAHAHAPAAIAPgBIAMgDIAJgDIAEgBIACABIABACIgBADIAAAEIgCAEIgCADQgBACgFABIgJADIgNACIgNABQgMAAgJgDgEAjbgAQQgHADgFAFQgFAFgEAFQgEAHgCAHIAOAAQAOAAAKgBQAJgCAGgDQAGgDACgEQACgDAAgEQAAgHgFgEQgFgEgKAAQgJAAgHADgEAgtABdQgGgCgEgEQgEgDgCgFQgDgFgBgFIgCgKIgBgJIACgRQABgKADgKQAEgKAFgHQAFgJAHgIQAHgHAKgEQAJgFAMAAQAGAAAFACQAFABAEACIAIAFIAGAHIAOhFIABgCIACgBIADgBIAGAAIAFAAIADABIACABIAAACIgkCyQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAIgIABIgFAAIgCgBIgCgBIAAgCIAEgXQgBAFgFAFQgEAFgHAEIgOAHQgHADgIAAQgIAAgGgCgEAhKgAOQgGADgFAGQgEAFgEAFIgFAPIgDAPIgBAOQAAANAEAHQAEAHAKAAQAIAAAHgEQAIgEAGgHQAHgIAFgJQAFgKACgMIAFgWQgHgIgHgFQgHgFgKAAQgHAAgFAEgAdkBcQgJgDgGgGQgGgGgDgJQgDgJAAgKQAAgKACgLQACgKAEgKQAEgIAGgIQAGgJAIgGQAIgGAKgEQAKgEANAAQAMAAAKAEQAJADAGAGQAGAGADAIQADAJAAAJQAAAKgCAKQgCAKgEAKQgEAKgGAIQgGAJgIAGQgIAGgKAEQgKAEgNAAQgNAAgJgDgAeBgPQgHADgFAFQgFAFgEAEIgGAOIgEAQIgBAPQAAAHABAFQACAGADADQADAEAFACQAGACAHAAQAJAAAGgDQAHgCAFgFQAFgFAEgHQAEgHACgHQADgIABgIQABgHAAgIQAAgHgBgDQgCgGgDgDQgDgEgGgCQgFgCgIAAQgIAAgGADgAcHBdQgGgCgEgDQgEgEgBgFQgCgFAAgHIAAgEIABgEIAAgEIABgEIANhDIgQAAIgDAAIAAgEIAAgEIABgFIACgEIADgBIARAAIAGgdIABgCIACgBIAEgBIAFAAIAFAAIAEABIABABIAAACIgFAdIAfAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIABAEIAAACIgBADIgBADIgBADIgCACIgCAAIgfAAIgOBCIgBAGIAAAGQAAAHADADQADAEAGAAIAHgBIAEgBIAEgCIACAAIACABIABACIgBAEIgBAEIgBAEIgCACIgDACIgFACIgGABIgGABQgIAAgFgCgAXkBbQgHgEgFgGQgEgGgBgIQgCgIAAgIIACgRIAEgUQADgKAFgHQAFgKAIgHQAHgIAJgEQAKgFAMAAQAMAAAIAFQAJAFAHAJIACgNQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAIAIgBIAFAAIADABIABABIAAACIgYB4QAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAIgIABIgFAAIgCgBIgCgBIAAgCIAEgXQgBAEgFAFQgEAGgHAEQgGAEgIADQgHADgIAAQgLAAgHgEgAYEgOQgGADgEAGQgFAFgDAGIgFAPIgDAPIgBANIAAAKIADAIQACAEAEACQAEADAFAAQAIAAAHgEQAIgEAGgIQAHgHAFgKQAFgKACgMIAFgVQgHgIgHgFQgHgFgKAAQgHAAgGAEgAWOBdQgFgCgEgDQgEgEgCgFQgCgFAAgHIAAgEIABgEIABgEIAAgEIAOhDIgRAAIgCAAIgBgEIAAgEIACgFIACgEIADgBIARAAIAGgdIABgCIACgBIADgBIAGAAIAFAAIADABIACABIAAACIgGAdIAfAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIAAAEIAAACIAAADIgBADIgCADIgBACIgDAAIgfAAIgNBCIgBAGIgBAGQAAAHADADQADAEAHAAIAGgBIAFgBIADgCIADAAIABABIABACIAAAEIgBAEIgCAEIgBACIgEACIgFACIgFABIgHABQgHAAgGgCgAS7BbQgHgEgFgGQgEgGgBgIQgCgIAAgIIACgRIAEgUQADgKAFgHQAFgKAIgHQAHgIAJgEQAKgFAMAAQAMAAAIAFQAJAFAHAJIACgNQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAIAIgBIAFAAIADABIABABIAAACIgYB4QAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAIgIABIgFAAIgCgBIgCgBIAAgCIAEgXQgBAEgFAFQgEAGgHAEQgGAEgIADQgHADgIAAQgLAAgHgEgATbgOQgGADgEAGQgFAFgDAGIgFAPIgDAPIgBANIAAAKIADAIQACAEAEACQAEADAFAAQAIAAAHgEQAIgEAGgIQAHgHAFgKQAFgKACgMIAFgVQgHgIgHgFQgHgFgKAAQgHAAgGAEgAQABUQgLgLAAgWIABgSQACgKADgKQAEgKAFgHQAFgJAIgIQAIgHAKgEQAKgFANAAIAKABIAKADIAIADIAFAEIADADIAAADIAAAFIgCAFIgCAEQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgFgEIgJgFQgFgCgHAAQgJAAgHAEQgGADgFAGQgFAFgEAGIgFAPIgDAOIgBAMQAAAOAGAHQAHAIAMAAQAIAAAHgDQAGgCAEgDIAHgFIAFgCIACABIABADIgBAEIAAAFIgCAEIgCAEIgGAEIgJAEIgMAEIgNABQgWAAgKgLgAL+BcQgJgDgGgFQgGgGgDgIQgDgJAAgLIACgTIAFgUQAEgJAGgIQAFgJAJgGQAHgHALgFQALgEANAAQALAAAIADQAIADAFAEQAFAFACAFQADAGAAAFQAAAIgFAHQgEAHgJAGQgJAFgPADQgOADgUAAIgOAAIgBAIIgBAIQAAAOAHAHQAGAHAPAAIAQgBIAMgDIAIgDIAFgBIACABIAAACIAAADIgBAEIgBAEIgCADQgCACgEABIgKADIgMACIgOABQgMAAgJgDgAMagQQgGADgFAFQgGAFgDAFQgEAHgCAHIANAAQAPAAAJgBQAKgCAFgDQAGgDADgEQACgDAAgEQAAgHgGgEQgFgEgKAAQgJAAgHADgAHcBcQgJgDgGgFQgGgGgDgIQgDgJAAgLIABgTIAGgUQADgJAGgIQAGgJAIgGQAIgHALgFQAKgEANAAQAMAAAIADQAHADAGAEQAFAFACAFQACAGAAAFQAAAIgEAHQgFAHgJAGQgJAFgOADQgOADgUAAIgPAAIgBAIIAAAIQAAAOAGAHQAHAHAPAAIAPgBIAMgDIAJgDIAEgBIACABIABACIgBADIAAAEIgCAEIgCADQgBACgFABIgJADIgNACIgNABQgMAAgJgDgAH4gQQgHADgFAFQgFAFgEAFQgEAHgCAHIAOAAQAOAAAKgBQAJgCAGgDQAGgDACgEQACgDAAgEQAAgHgFgEQgFgEgKAAQgJAAgHADgABSBcQgJgDgGgFQgGgGgDgIQgDgJAAgLIABgTIAGgUQADgJAGgIQAGgJAIgGQAIgHALgFQAKgEANAAQAMAAAIADQAHADAGAEQAFAFACAFQACAGAAAFQAAAIgEAHQgFAHgJAGQgJAFgOADQgOADgUAAIgPAAIgBAIIAAAIQAAAOAGAHQAHAHAPAAIAPgBIAMgDIAJgDIAEgBIACABIABACIgBADIAAAEIgCAEIgCADQgBACgFABIgJADIgNACIgNABQgMAAgJgDgABugQQgHADgFAFQgFAFgEAFQgEAHgCAHIAOAAQAOAAAKgBQAJgCAGgDQAGgDACgEQACgDAAgEQAAgHgFgEQgFgEgKAAQgJAAgHADgAiBBbQgHgEgEgGQgEgGgCgIQgBgIAAgIIABgRIAFgUQADgKAFgHQAFgKAHgHQAHgIAKgEQAJgFAMAAQAMAAAJAFQAIAFAHAJIADgNQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAIAIgBIAEAAIADABIACABIAAACIgZB4QAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAIgIABIgEAAIgDgBIgBgBIAAgCIAEgXQgCAEgEAFQgFAGgGAEQgHAEgHADQgIADgIAAQgLAAgHgEgAhggOQgGADgFAGQgEAFgDAGIgGAPIgDAPIgBANIABAKIADAIQACAEADACQAEADAGAAQAHAAAIgEQAHgEAHgIQAGgHAFgKQAFgKADgMIAEgVQgGgIgHgFQgIgFgJAAQgHAAgGAEgAnaBcQgJgDgGgFQgGgGgDgIQgDgJAAgLIACgTIAFgUQAEgJAGgIQAFgJAJgGQAHgHALgFQALgEANAAQALAAAIADQAIADAFAEQAFAFACAFQADAGAAAFQAAAIgFAHQgEAHgJAGQgJAFgPADQgOADgUAAIgOAAIgBAIIgBAIQAAAOAHAHQAGAHAPAAIAQgBIAMgDIAIgDIAFgBIACABIAAACIAAADIgBAEIgBAEIgCADQgCACgEABIgKADIgMACIgOABQgMAAgJgDgAm+gQQgGADgFAFQgGAFgDAFQgEAHgCAHIANAAQAPAAAJgBQAKgCAFgDQAGgDADgEQACgDAAgEQAAgHgGgEQgFgEgKAAQgJAAgHADgApdBUQgLgLAAgWIABgSQACgKADgKQAEgKAFgHQAFgJAIgIQAIgHAKgEQAKgFANAAIAKABIAKADIAIADIAFAEIADADIAAADIAAAFIgCAFIgCAEQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgFgEIgJgFQgFgCgHAAQgJAAgHAEQgGADgFAGQgFAFgEAGIgFAPIgDAOIgBAMQAAAOAGAHQAHAIAMAAQAIAAAHgDQAGgCAEgDIAHgFIAFgCIACABIABADIgBAEIAAAFIgCAEIgCAEIgGAEIgJAEIgMAEIgNABQgWAAgKgLgArRBcQgJgDgGgFQgGgGgDgIQgDgJAAgLIACgTIAFgUQAEgJAGgIQAFgJAJgGQAHgHALgFQALgEANAAQALAAAIADQAIADAFAEQAFAFACAFQADAGAAAFQAAAIgFAHQgEAHgJAGQgJAFgPADQgOADgUAAIgOAAIgBAIIgBAIQAAAOAHAHQAGAHAPAAIAQgBIAMgDIAIgDIAFgBIACABIAAACIAAADIgBAEIgBAEIgCADQgCACgEABIgKADIgMACIgOABQgMAAgJgDgAq1gQQgGADgFAFQgGAFgDAFQgEAHgCAHIANAAQAPAAAJgBQAKgCAFgDQAGgDADgEQACgDAAgEQAAgHgGgEQgFgEgKAAQgJAAgHADgAumBbQgHgEgFgGQgEgGgBgIQgCgIAAgIIACgRIAEgUQADgKAFgHQAFgKAIgHQAHgIAJgEQAKgFAMAAQAMAAAIAFQAJAFAHAJIACgNQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAIAIgBIAFAAIADABIABABIAAACIgYB4QAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAIgIABIgFAAIgCgBIgCgBIAAgCIAEgXQgBAEgFAFQgEAGgHAEQgGAEgIADQgHADgIAAQgLAAgHgEgAuGgOQgGADgEAGQgFAFgDAGIgFAPIgDAPIgBANIAAAKIADAIQACAEAEACQAEADAFAAQAIAAAHgEQAIgEAGgIQAHgHAFgKQAFgKACgMIAFgVQgHgIgHgFQgHgFgKAAQgHAAgGAEgAv8BdQgFgCgEgDQgEgEgCgFQgCgFAAgHIAAgEIABgEIABgEIAAgEIAOhDIgRAAIgCAAIgBgEIAAgEIACgFIACgEIADgBIARAAIAGgdIABgCIACgBIADgBIAGAAIAFAAIADABIACABIAAACIgGAdIAfAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIAAAEIAAACIAAADIgBADIgCADIgBACIgDAAIgfAAIgNBCIgBAGIgBAGQAAAHADADQADAEAHAAIAGgBIAFgBIADgCIADAAIABABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAIAAAEIgBAEIgCAEIgBACIgEACIgFACIgFABIgHABQgHAAgGgCgAzoBcQgJgDgGgGQgGgGgDgJQgDgJAAgKQAAgKACgLQACgKAEgKQAEgIAGgIQAGgJAIgGQAIgGAKgEQAKgEANAAQAMAAAKAEQAJADAGAGQAGAGADAIQADAJAAAJQAAAKgCAKQgCAKgEAKQgEAKgGAIQgGAJgIAGQgIAGgKAEQgKAEgNAAQgNAAgJgDgAzLgPQgHADgFAFQgFAFgEAEIgGAOIgEAQIgBAPQAAAHABAFQACAGADADQADAEAFACQAGACAHAAQAJAAAGgDQAHgCAFgFQAFgFAEgHQAEgHACgHQADgIABgIQABgHAAgIQAAgHgBgDQgCgGgDgDQgDgEgGgCQgFgCgIAAQgIAAgGADgA8qBbQgHgEgEgGQgEgGgCgIQgBgIAAgIIABgRIAFgUQADgKAFgHQAFgKAHgHQAHgIAKgEQAJgFAMAAQAMAAAJAFQAIAFAHAJIADgNQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAIAIgBIAEAAIADABIACABIAAACIgZB4QAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAIgIABIgEAAIgDgBIgBgBIAAgCIAEgXQgCAEgEAFQgFAGgGAEQgHAEgHADQgIADgIAAQgLAAgHgEgA8JgOQgGADgFAGQgEAFgDAGIgGAPIgDAPIgBANIABAKIADAIQACAEADACQAEADAGAAQAHAAAIgEQAHgEAHgIQAGgHAFgKQAFgKADgMIAEgVQgGgIgHgFQgIgFgJAAQgHAAgGAEgA9/BdQgGgCgEgDQgEgEgBgFQgCgFAAgHIAAgEIABgEIAAgEIABgEIANhDIgQAAIgDAAIAAgEIAAgEIABgFIACgEIADgBIARAAIAGgdIABgCIACgBIAEgBIAFAAIAFAAIAEABIABABIAAACIgFAdIAfAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIABAEIAAACIgBADIgBADIgBADIgCACIgCAAIgfAAIgOBCIgBAGIAAAGQAAAHADADQADAEAGAAIAHgBIAEgBIAEgCIACAAIACABIABACIgBAEIgBAEIgBAEIgCACIgDACIgFACIgGABIgGABQgIAAgFgCgEgiQABcQgJgDgGgFQgGgGgDgIQgDgJAAgLIABgTIAGgUQADgJAGgIQAGgJAIgGQAIgHALgFQAKgEANAAQAMAAAIADQAHADAGAEQAFAFACAFQACAGAAAFQAAAIgEAHQgFAHgJAGQgJAFgOADQgOADgUAAIgPAAIgBAIIAAAIQAAAOAGAHQAHAHAPAAIAPgBIAMgDIAJgDIAEgBIACABIABACIgBADIAAAEIgCAEIgCADQgBACgFABIgJADIgNACIgNABQgMAAgJgDgEgh0gAQQgHADgFAFQgFAFgEAFQgEAHgCAHIAOAAQAOAAAKgBQAJgCAGgDQAGgDACgEQACgDAAgEQAAgHgFgEQgFgEgKAAQgJAAgHADgEgn5ABcQgJgDgGgGQgGgGgDgJQgDgJAAgKQAAgKACgLQACgKAEgKQAEgIAGgIQAGgJAIgGQAIgGAKgEQAKgEANAAQAMAAAKAEQAJADAGAGQAGAGADAIQADAJAAAJQAAAKgCAKQgCAKgEAKQgEAKgGAIQgGAJgIAGQgIAGgKAEQgKAEgNAAQgNAAgJgDgEgncgAPQgHADgFAFQgFAFgEAEIgGAOIgEAQIgBAPQAAAHABAFQACAGADADQADAEAFACQAGACAHAAQAJAAAGgDQAHgCAFgFQAFgFAEgHQAEgHACgHQADgIABgIQABgHAAgIQAAgHgBgDQgCgGgDgDQgDgEgGgCQgFgCgIAAQgIAAgGADgEAlpABdIgDgBIgBgBIAAgCIAjiyIABgCIACgCIAEgBIAGAAIAFAAIADABIACACIAAACIgkCyIgBACIgCABIgEABIgFAAIgGAAgAaxBdIgDgBIgCgBIAAgCIAPhLIABgIIABgGQAAgHgEgFQgDgGgJAAQgHAAgHAFQgIAEgGAHQgGAFgFAKQgGAKgCAMIgLA2IgBACIgCABIgDABIgGAAIgFAAIgDgBIgCgBIAAgCIAYh4IABgCIACgBIADgBIAFAAIAFAAIADABIABABIAAACIgFAXQACgEAFgFIALgKQAGgEAIgDQAHgDAJAAQAJAAAGADQAGADAEAEQADAFACAGQACAGAAAGIgBAIIgBAJIgQBMIAAACIgCABIgEABIgGAAIgFAAgARrBdIgDgBIgBgBIAAgCIAYh4IABgBIACgCIADgBIAGAAIAFAAIADABIACACIAAABIgYB4IgBACIgCABIgEABIgFAAIgGAAgAO6BdIgEgBIgBgBIAAgCIAPhLIABgIIAAgGQAAgHgDgFQgEgGgIAAQgHAAgIAFQgHAEgGAHQgHAFgFAKQgFAKgCAMIgLA2IgBACIgCABIgEABIgFAAIgGAAIgDgBIgBgBIAAgCIAYh4IABgCIACgBIADgBIAEAAIAFAAIADABIABABIAAACIgEAXQACgEAEgFIALgKQAHgEAHgDQAIgDAIAAQAJAAAGADQAGADAEAEQAEAFACAGQABAGAAAGIAAAIIgCAJIgPBMIgBACIgCABIgEABIgFAAIgFAAgAKnBdIgDgBIgCgBIAAgCIAYh4IABgBIACgCIAEgBIAFAAIAGAAIADABIABACIAAABIgYB4IgBACIgCABIgDABIgGAAIgFAAgAJIBdIgDgBIgCgBIAAgCIAYh4IABgCIACgBIADgBIAFAAIAFAAIADABIABABIAAACIgFAWIAIgKIAJgJQAFgEAGgCQAFgDAFAAIAFABIAEABIAEABIACABIABADIAAACIgBADIAAAEIgCAEIgBADIgCACIgDgBIgDgBIgDgBIgFgBQgFAAgFAEQgHAEgFAHQgGAFgFAKQgFAKgCALIgLA2IgBACIgCABIgDABIgGAAIgFAAgAEEBdIgDgBIgCgBIgBgCIgUgwIgmAwIgCACIgCABIgFABIgGAAIgHAAIgDgBIgBgCIACgEIAyg7IgZg3IgBgDIACgCIAEgCIAGAAIAGAAIAEABIABABIABACIATArIAlgrIACgCIACgBIAEgBIAFAAIAHAAIAEABIABACIgCAEIgwA3IAbA7IABAEIgCACIgEABIgHAAIgGAAgAjQBdIgDgBIgCgBIAAgCIAkiyIABgCIACgCIAEgBIAFAAIAFAAIAEABIABACIAAACIgkCyIgBACIgCABIgDABIgGAAIgFAAgAluBdIgDgBIgBgBIAAgCIAYh4IABgCIACgBIADgBIAEAAIAFAAIADABIABABIAAACIgEAWIAHgKIAKgJQAFgEAFgCQAFgDAGAAIAEABIAFABIADABIADABIABADIgBACIAAADIgBAEIgBAEIgCADIgCACIgCgBIgDgBIgEgBIgEgBQgFAAgGAEQgGAEgGAHQgGAFgEAKQgFAKgDALIgKA2IgBACIgCABIgEABIgFAAIgGAAgAsoBdIgDgBIgCgBIAAgCIAkiyIABgCIACgCIAEgBIAFAAIAFAAIAEABIABACIAAACIgkCyIgBACIgCABIgDABIgGAAIgFAAgAxyBdIgDgBIgBgBIAAgCIAYh4IABgCIACgBIADgBIAEAAIAFAAIADABIABABIAAACIgEAWIAHgKIAKgJQAFgEAFgCQAFgDAGAAIAEABIAFABIADABIADABIABADIgBACIAAADIgBAEIgBAEIgCADIgCACIgCgBIgDgBIgEgBIgEgBQgFAAgGAEQgGAEgGAHQgGAFgEAKQgFAKgDALIgKA2IgBACIgCABIgEABIgFAAIgGAAgA6sBdIgDgBIgBgBIAAgCIAYh4IABgCIACgBIADgBIAEAAIAFAAIADABIABABIAAACIgEAWIAHgKIAKgJQAFgEAFgCQAFgDAGAAIAEABIAFABIADABIADABIABADIgBACIAAADIgBAEIgBAEIgCADIgCACIgCgBIgDgBIgEgBIgEgBQgFAAgGAEQgGAEgGAHQgGAFgEAKQgFAKgDALIgKA2IgBACIgCABIgEABIgFAAIgGAAgA/VBdIgDgBIgCgBIAAgCIAPhLIABgIIABgGQAAgHgEgFQgDgGgJAAQgHAAgHAFQgIAEgGAHQgGAFgFAKQgGAKgCAMIgLA2IgBACIgCABIgDABIgGAAIgFAAIgDgBIgCgBIAAgCIAYh4IABgCIACgBIADgBIAFAAIAFAAIADABIABABIAAACIgFAXQACgEAFgFIALgKQAGgEAIgDQAHgDAJAAQAJAAAGADQAGADAEAEQADAFACAGQACAGAAAGIgBAIIgBAJIgQBMIAAACIgCABIgEABIgGAAIgFAAgEgjnABdIgDgBIgCgBIAAgCIAPhLIABgIIABgGQAAgHgDgFQgEgGgIAAQgHAAgHAFQgHAEgHAHQgGAFgFAKQgFAKgCAMIgLA2IgBACIgCABIgEABIgFAAIgGAAIgDgBIgBgBIgBgCIAPhLIACgIIAAgGQAAgIgDgFQgEgFgIAAQgHAAgHAFQgHAEgHAHQgGAFgFAKQgFAKgCAMIgLA2IgBACIgCABIgEABIgFAAIgGAAIgDgBIgBgBIAAgCIAYh4IABgCIACgBIADgBIAEAAIAFAAIADABIABABIAAACIgEAXQACgEAFgFIAKgKQAHgEAHgDQAHgDAIAAQAIAAAGADQAGACADAEQAEADACAGQACAFAAAGIAHgJQAFgGAGgEQAHgEAHgDQAHgDAIAAQAJAAAGADQAGACAEAFQAEAEABAGQACAGAAAHIgBAIIgBAJIgQBMIAAACIgCABIgEABIgGAAIgFAAgASJg7IgEgCQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAgHIACgGIADgEQACgCADAAIAHgBIAGABQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIABAEIAAAGIgCAHIgDAEIgFACIgHABIgGgBgALEg7IgDgCQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIABgHIACgGIADgEQACgCACAAIAHgBIAHABQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAIABAEIgBAGIgBAHIgEAEIgEACIgHABIgHgBgAb6iRIgFAAIgDgBIgCgBIAAgCIAiiqQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAIAIgBIAEAAIADABIACABIAAACIgFAXQACgEAFgFIAKgKQAHgEAHgDQAIgDAIAAQAKAAAHAEQAHADAEAGQAFAGACAIQACAIAAAJIgCASQgBAKgEAKQgDAKgFAJQgFAJgHAIQgHAHgKAEQgJAFgMAAIgLgBIgJgEIgIgFIgGgGIgMA6IgBACIgCABIgDABIgGAAgAc7ktQgHAEgHAHQgGAHgFAKQgFAKgDAMIgEAWQAGAJAIAFQAHAFAJAAQAHAAAGgEQAGgDAFgGQAEgFADgHIAGgPIADgQIABgNIgBgLQgBgFgCgDQgCgEgEgCQgDgCgGAAQgHAAgIAFgALoiRIgGAAIgDgBIgBgBIgBgCIAiiqQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAIAIgBIAFAAIADABIABABIAAACIgEAXQABgEAFgFIALgKQAGgEAIgDQAHgDAIAAQALAAAHAEQAHADAEAGQAEAGACAIQACAIAAAJIgBASQgCAKgDAKQgDAKgFAJQgGAJgHAIQgHAHgJAEQgKAFgMAAIgLgBIgJgEIgHgFIgHgGIgLA6IgBACIgCABIgEABIgFAAgAMpktQgIAEgGAHQgHAHgFAKQgFAKgCAMIgEAWQAGAJAHAFQAHAFAKAAQAHAAAGgEQAGgDAEgGQAFgFADgHIAFgPIAEgQIABgNIgBgLQgBgFgDgDQgCgEgDgCQgEgCgFAAQgIAAgHAFgEAiJgDDQgHgEgEgGQgEgGgCgIQgBgIAAgIIABgRIAFgUQADgKAFgJQAFgKAHgHQAHgIAKgEQAJgFAMAAQAMAAAJAFQAIAFAHAJIADgNQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAIAIgBIAEAAIADABIACABIAAACIgZB6QAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAIgIABIgEAAIgDgBIgBgBIAAgCIAEgXQgCAEgEAFQgFAGgGAEQgHAEgHADQgIADgIAAQgLAAgHgEgEAiqgEuQgGADgFAGQgEAGgDAHIgGAPIgDAPIgBANIABAKIADAIQACAEADACQAEADAGAAQAHAAAIgEQAHgEAHgIQAGgHAFgKQAFgKADgMIAEgWQgGgJgHgFQgIgFgJAAQgHAAgGAEgAecjDQgHgEgEgGQgEgGgCgIQgBgIAAgIIABgRIAFgUQADgKAFgJQAFgKAHgHQAHgIAKgEQAJgFAMAAQAMAAAJAFQAIAFAHAJIADgNQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAIAIgBIAEAAIADABIACABIAAACIgZB6QAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAIgIABIgEAAIgDgBIgBgBIAAgCIAEgXQgCAEgEAFQgFAGgGAEQgHAEgHADQgIADgIAAQgLAAgHgEgAe9kuQgGADgFAGQgEAGgDAHIgGAPIgDAPIgBANIABAKIADAIQACAEADACQAEADAGAAQAHAAAIgEQAHgEAHgIQAGgHAFgKQAFgKADgMIAEgWQgGgJgHgFQgIgFgJAAQgHAAgGAEgAZUjCQgJgDgGgFQgGgGgDgIQgDgJAAgLIABgTIAGgUQADgJAGgKQAGgJAIgGQAIgHALgFQAKgEANAAQAMAAAIADQAHADAGAEQAFAFACAFQACAGAAAFQAAAKgEAHQgFAHgJAGQgJAFgOADQgOADgUAAIgPAAIgBAIIAAAIQAAAOAGAHQAHAHAPAAIAPgBIAMgDIAJgDIAEgBIACABIABACIgBADIAAAEIgCAEIgCADQgBACgFABIgJADIgNACIgNABQgMAAgJgDgAZwkwQgHADgFAFQgFAFgEAHQgEAHgCAHIAOAAQAOAAAKgBQAJgCAGgDQAGgDACgEQACgEAAgFQAAgHgFgEQgFgEgKAAQgJAAgHADgAX2jBQgFgCgEgDQgEgEgCgFQgCgFAAgHIAAgEIABgEIABgEIAAgEIAOhFIgRAAIgCAAIgBgEIAAgEIACgFIACgEIADgBIARAAIAGgdIABgCIACgBIADgBIAGAAIAFAAIADABIACABIAAACIgGAdIAfAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIAAAEIAAACIAAADIgBADIgCADIgBACIgDAAIgfAAIgNBEIgBAGIgBAGQAAAHADADQADAEAHAAIAGgBIAFgBIADgCIADAAIABABIABACIAAAEIgBAEIgCAEIgBACIgEACIgFACIgFABIgHABQgHAAgGgCgATTjDQgHgEgEgGQgEgGgCgIQgBgIAAgIIABgRIAFgUQADgKAFgJQAFgKAHgHQAHgIAKgEQAJgFAMAAQAMAAAJAFQAIAFAHAJIADgNQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAIAIgBIAEAAIADABIACABIAAACIgZB6QAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAIgIABIgEAAIgDgBIgBgBIAAgCIAEgXQgCAEgEAFQgFAGgGAEQgHAEgHADQgIADgIAAQgLAAgHgEgAT0kuQgGADgFAGQgEAGgDAHIgGAPIgDAPIgBANIABAKIADAIQACAEADACQAEADAGAAQAHAAAIgEQAHgEAHgIQAGgHAFgKQAFgKADgMIAEgWQgGgJgHgFQgIgFgJAAQgHAAgGAEgAR+jBQgGgCgEgDQgEgEgBgFQgCgFAAgHIAAgEIABgEIAAgEIABgEIANhFIgQAAIgDAAIAAgEIAAgEIABgFIACgEIADgBIARAAIAGgdIABgCIACgBIAEgBIAFAAIAFAAIAEABIABABIAAACIgFAdIAfAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIABAEIAAACIgBADIgBADIgBADIgCACIgCAAIgfAAIgOBEIgBAGIAAAGQAAAHADADQADAEAGAAIAHgBIAEgBIAEgCIACAAIACABIABACIgBAEIgBAEIgBAEIgCACIgDACIgFACIgGABIgGABQgIAAgFgCgAOSjCQgKgDgGgGQgGgGgCgJQgDgJAAgKQAAgKACgLQABgKAEgKQAEgJAGgJQAGgJAIgGQAIgGAKgEQAKgEANAAQANAAAJAEQAJADAHAGQAFAGADAIQADAJAAALQAAAKgCAKQgCAKgDAKQgEAKgGAIQgGAJgIAGQgIAGgKAEQgLAEgMAAQgNAAgJgDgAOukvQgGADgFAFQgGAFgEAGIgGAOIgEAQIgBAPQAAAHACAFQABAGADADQAEAEAFACQAFACAIAAQAIAAAHgDQAGgCAFgFQAGgFADgHQAEgHADgHQACgIABgIQACgHAAgIQAAgHgCgFQgBgGgDgDQgEgEgFgCQgFgCgIAAQgIAAgHADgAE0jAIgKgDIgIgDIgFgDIgBgCIgBgDIABgDIAAgDIABgDIABgDIACgCIABAAIAEABIAGAEIAJAEQAGACAIAAQAIAAAFgCQAFgCAEgDQADgDACgEQACgEAAgEQAAgGgEgDQgDgEgGgDIgLgGIgMgGQgFgEgEgGQgDgFAAgJQAAgJADgIQAEgHAGgGQAGgFAKgEQAIgDALAAIAKABIAJACIAHADIAFADQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABIAAAEIgBAEIgCAEIgCABIgEgBIgGgDIgHgDIgLgBQgGAAgFABQgEACgDADQgEADgBAEQgCADAAAEQAAAGAEADQADAEAGADIALAFQAHADAFAEQAFAEAEAGQAEAFAAAJQAAAJgEAIQgEAIgHAGQgHAGgKAEQgKADgMAAIgMgBgAC8jCQgJgDgGgFQgGgGgDgIQgDgJAAgLIABgTIAGgUQADgJAGgKQAGgJAIgGQAIgHALgFQAKgEANAAQAMAAAIADQAHADAGAEQAFAFACAFQACAGAAAFQAAAKgEAHQgFAHgJAGQgJAFgOADQgOADgUAAIgPAAIgBAIIAAAIQAAAOAGAHQAHAHAPAAIAPgBIAMgDIAJgDIAEgBIACABIABACIgBADIAAAEIgCAEIgCADQgBACgFABIgJADIgNACIgNABQgMAAgJgDgADYkwQgHADgFAFQgFAFgEAHQgEAHgCAHIAOAAQAOAAAKgBQAJgCAGgDQAGgDACgEQACgEAAgFQAAgHgFgEQgFgEgKAAQgJAAgHADgAgPjCQgJgDgGgGQgGgGgDgJQgDgJAAgKQAAgKACgLQACgKAEgKQAEgJAGgJQAGgJAIgGQAIgGAIgEQAKgEANAAQAMAAAKAEQAJADAGAGQAGAGADAIQADAJAAALQAAAKgCAKQgCAKgEAKQgEAKgGAIQgGAJgIAGQgIAGgKAEQgKAEgNAAQgLAAgJgDgAAMkvQgHADgFAFQgDAFgEAGIgGAOIgEAQIgBAPQAAAHABAFQACAGADADQADAEAFACQAEACAHAAQAJAAAGgDQAHgCAFgFQAFgFAEgHQAEgHACgHQADgIABgIQABgHAAgIQAAgHgBgFQgCgGgDgDQgDgEgGgCQgFgCgIAAQgIAAgGADgAjSjKQgKgLAAgWIABgSQABgKAEgKQADgKAFgJQAGgJAHgIQAIgHAKgEQAKgFANAAIALABIAJADIAIADIAGAEIACADIABADIgBAFIgBAFIgDAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgGgEIgIgFQgFgCgIAAQgJAAgGAEQgHADgFAGQgFAGgDAHIgFAPIgDAOIgBAMQAAAOAGAHQAGAIAMAAQAJAAAGgDQAGgCAFgDIAHgFIAFgCIACABIAAADIAAAEIgBAFIgBAEIgDAEIgGAEIgJAEIgLAEIgNABQgWAAgLgLgApfjCQgJgDgGgFQgGgGgDgIQgDgJAAgLIABgTIAGgUQADgJAGgKQAGgJAIgGQAIgHALgFQAKgEANAAQAMAAAIADQAHADAGAEQAFAFACAFQACAGAAAFQAAAKgEAHQgFAHgJAGQgJAFgOADQgOADgUAAIgPAAIgBAIIAAAIQAAAOAGAHQAHAHAPAAIAPgBIAMgDIAJgDIAEgBIACABIABACIgBADIAAAEIgCAEIgCADQgBACgFABIgJADIgNACIgNABQgMAAgJgDgApDkwQgHADgFAFQgFAFgEAHQgEAHgCAHIAOAAQAOAAAKgBQAJgCAGgDQAGgDACgEQACgEAAgFQAAgHgFgEQgFgEgKAAQgJAAgHADgArWjAIgKgDIgIgDIgFgDIgBgCIgBgDIAAgDIABgDIABgDIABgDIABgCIACAAIAEABIAGAEIAJAEQAFACAJAAQAHAAAFgCQAGgCADgDQAEgDABgEQACgEAAgEQAAgGgDgDQgEgEgFgDIgMgGIgLgGQgGgEgDgGQgEgFAAgJQAAgJAEgIQADgHAHgGQAGgFAJgEQAJgDALAAIAKABIAJACIAHADIAEADQABAAAAABQAAAAAAAAQABABAAABQAAAAAAABIgBAEIgBAEIgCAEIgCABIgEgBIgFgDIgIgDIgLgBQgGAAgEABQgFACgDADQgDADgCAEQgBADAAAEQAAAGADADQAEAEAFADIAMAFQAGADAGAEQAFAEAEAGQADAFAAAJQAAAJgEAIQgDAIgHAGQgHAGgKAEQgKADgMAAIgMgBgAuNjCQgJgDgGgFQgGgGgDgIQgDgJAAgLIABgTIAGgUQADgJAGgKQAGgJAIgGQAIgHALgFQAKgEANAAQAMAAAIADQAHADAGAEQAFAFACAFQACAGAAAFQAAAKgEAHQgFAHgJAGQgJAFgOADQgOADgUAAIgPAAIgBAIIAAAIQAAAOAGAHQAHAHAPAAIAPgBIAMgDIAJgDIAEgBIACABIABACIgBADIAAAEIgCAEIgCADQgBACgFABIgJADIgNACIgNABQgMAAgJgDgAtxkwQgHADgFAFQgFAFgEAHQgEAHgCAHIAOAAQAOAAAKgBQAJgCAGgDQAGgDACgEQACgEAAgFQAAgHgFgEQgFgEgKAAQgJAAgHADgAwfjBQgGgCgEgEQgEgDgCgFQgDgFgBgFIgCgKIgBgJIACgRQABgKADgKQAEgKAFgJQAFgJAHgIQAHgHAKgEQAJgFAMAAQAGAAAFACQAFABAEACIAIAFIAGAHIAOhFIABgCIACgBIADgBIAGAAIAFAAIADABIACABIAAACIgkC0QAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAIgIABIgFAAIgCgBIgCgBIAAgCIAEgXQgBAFgFAFQgEAFgHAEIgOAHQgHADgIAAQgIAAgGgCgAwCkuQgGADgFAGQgEAFgEAHIgFAPIgDAPIgBAOQAAANAEAHQAEAHAKAAQAIAAAHgEQAIgEAGgHQAHgIAFgJQAFgKACgMIAFgXQgHgJgHgFQgHgFgKAAQgHAAgFAEgAzwjDQgHgEgEgGQgEgGgCgIQgBgIAAgIIABgRIAFgUQADgKAFgJQAFgKAHgHQAHgIAKgEQAJgFAMAAQAMAAAJAFQAIAFAHAJIADgNQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAIAIgBIAEAAIADABIACABIAAACIgZB6QAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAIgIABIgEAAIgDgBIgBgBIAAgCIAEgXQgCAEgEAFQgFAGgGAEQgHAEgHADQgIADgIAAQgLAAgHgEgAzPkuQgGADgFAGQgEAGgDAHIgGAPIgDAPIgBANIABAKIADAIQACAEADACQAEADAGAAQAHAAAIgEQAHgEAHgIQAGgHAFgKQAFgKADgMIAEgWQgGgJgHgFQgIgFgJAAQgHAAgGAEgA3ajCQgGgCgEgFQgEgEgBgGQgCgGAAgHIABgJIABgKIAPhMIABgCIACgBIAEgBIAFAAIAGAAIADABIABABIAAACIgOBMIgCAHIAAAIIABAHQAAADACADQACACADABQADACAEAAQAHAAAIgEQAHgEAHgIQAGgHAFgKQAFgKADgMIAKg2IABgCIADgBIADgBIAGAAIAFAAIADABIACABIAAACIgZB6IAAACIgCABIgDABIgFAAIgFAAIgDgBIgBgBIAAgCIAEgXQgCAFgEAFIgLAJIgOAHQgIADgHAAQgKAAgGgDgA4yjBQgGgCgEgDQgEgEgBgFQgCgFAAgHIAAgEIABgEIAAgEIABgEIANhFIgQAAIgDAAIAAgEIAAgEIABgFIACgEIADgBIARAAIAGgdIABgCIACgBIAEgBIAFAAIAFAAIAEABIABABIAAACIgFAdIAfAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIABAEIAAACIgBADIgBADIgBADIgCACIgCAAIgfAAIgOBEIgBAGIAAAGQAAAHADADQADAEAGAAIAHgBIAEgBIAEgCIACAAIACABIABACIgBAEIgBAEIgBAEIgCACIgDACIgFACIgGABIgGABQgIAAgFgCgA8EjCQgGgCgEgFQgEgEgBgGQgCgGAAgHIABgJIABgKIAPhMIABgCIACgBIAEgBIAFAAIAGAAIADABIABABIAAACIgOBMIgCAHIAAAIIABAHQAAADACADQACACADABQADACAEAAQAHAAAIgEQAHgEAHgIQAGgHAFgKQAFgKADgMIAKg2IABgCIADgBIADgBIAGAAIAFAAIADABIACABIAAACIgZB6IAAACIgCABIgDABIgFAAIgFAAIgDgBIgBgBIAAgCIAEgXQgCAFgEAFIgLAJIgOAHQgIADgHAAQgKAAgGgDgA+CjKQgLgLAAgWIABgSQACgKADgKQAEgKAFgJQAFgJAIgIQAIgHAKgEQAKgFANAAIAKABIAKADIAIADIAFAEIADADIAAADIAAAFIgCAFIgCAEQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgFgEIgJgFQgFgCgHAAQgJAAgHAEQgGADgFAGQgFAGgEAHIgFAPIgDAOIgBAMQAAAOAGAHQAHAIAMAAQAIAAAHgDQAGgCAEgDIAHgFIAFgCIACABIABADIgBAEIAAAFIgCAEIgCAEIgGAEIgJAEIgMAEIgNABQgWAAgKgLgEghGgDDQgHgEgFgGQgEgGgBgIQgCgIAAgIIACgRIAEgUQADgKAFgJQAFgKAIgHQAHgIAJgEQAKgFAMAAQAMAAAIAFQAJAFAHAJIACgNQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAIAIgBIAFAAIADABIABABIAAACIgYB6QAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAIgIABIgFAAIgCgBIgCgBIAAgCIAEgXQgBAEgFAFQgEAGgHAEQgGAEgIADQgHADgIAAQgLAAgHgEgEggmgEuQgGADgEAGQgFAGgDAHIgFAPIgDAPIgBANIAAAKIADAIQACAEAEACQAEADAFAAQAIAAAHgEQAIgEAGgIQAHgHAFgKQAFgKACgMIAFgWQgHgJgHgFQgHgFgKAAQgHAAgGAEgEAgagDBIgDgBIgBgBIAAgCIAYh6IABgCIACgBIADgBIAEAAIAFAAIADABIABABIAAACIgEAWIAHgKIAKgJQAFgEAFgCQAFgDAGAAIAEABIAFABIADABIADABIABADIgBACIAAADIgBAEIgBAEIgCADIgCACIgCgBIgDgBIgEgBIgEgBQgFAAgGAEQgGAEgGAHQgGAHgEAKQgFAKgDALIgKA2IgBACIgCABIgEABIgFAAIgGAAgAWhjBIgEgBIgBgBIAAgCIAPhLIABgIIAAgHQAAgIgDgFQgEgGgIAAQgHAAgIAFQgHAEgGAHQgHAHgFAKQgFAKgCAMIgLA2IgBACIgCABIgEABIgFAAIgGAAIgDgBIgBgBIAAgCIAYh6IABgCIACgBIADgBIAEAAIAFAAIADABIABABIAAACIgEAXQACgEAEgFIALgKQAHgEAHgDQAIgDAIAAQAJAAAGADQAGADAEAEQAEAFACAGQABAGAAAGIAAAKIgCAJIgPBMIgBACIgCABIgEABIgFAAIgFAAgAQIjBIgDgBIgCgBIAAgCIAYh6IABgCIACgBIADgBIAFAAIAFAAIADABIABABIAAACIgFAWIAIgKIAJgJQAFgEAGgCQAFgDAFAAIAFABIAEABIAEABIACABIABADIAAACIgBADIAAAEIgCAEIgBADIgCACIgDgBIgDgBIgDgBIgFgBQgFAAgFAEQgHAEgFAHQgGAHgFAKQgFAKgCALIgLA2IgBACIgCABIgDABIgGAAIgFAAgAKtjBIgDgBIgCgBIAAgCIAPhLIABgIIABgHQAAgIgDgFQgEgGgIAAQgHAAgHAFQgHAEgHAHQgGAHgFAKQgFAKgCAMIgLA2IgBACIgCABIgEABIgFAAIgGAAIgDgBIgBgBIgBgCIAPhLIACgIIAAgHQAAgJgDgFQgEgFgIAAQgHAAgHAFQgHAEgHAHQgGAHgFAKQgFAKgCAMIgLA2IgBACIgCABIgEABIgFAAIgGAAIgDgBIgBgBIAAgCIAYh6IABgCIACgBIADgBIAEAAIAFAAIADABIABABIAAACIgEAXQACgEAFgFIAKgKQAHgEAHgDQAHgDAIAAQAIAAAGADQAGACADAEQAEADACAGQACAFAAAGIAHgJQAFgGAGgEQAHgEAHgDQAHgDAIAAQAJAAAGADQAGACAEAFQAEAEABAGQACAGAAAHIgBAKIgBAJIgQBMIAAACIgCABIgEABIgGAAIgFAAgAHSjBIgDgBIgCgBIAAgCIAYh6IABgBIACgCIAEgBIAFAAIAGAAIADABIABACIAAABIgYB6IgBACIgCABIgDABIgGAAIgFAAgAhmjBIgDgBIgCgBIAAgCIAYh6IABgBIACgCIAEgBIAFAAIAGAAIADABIABACIAAABIgYB6IgBACIgCABIgDABIgGAAIgFAAgAkZjBIgDgBIgBgBIAAgCIAYh6IABgBIACgCIADgBIAGAAIAFAAIADABIACACIAAABIgYB6IgBACIgCABIgEABIgFAAIgGAAgAl4jBIgEgBIgCgCIgBgCIgShzIAAgDIAAgCIABgCIABgCIAEgBIAFAAIAGAAIADABIACABIAAADIAPBkIAAABIABgBIAOgXIAMgXIALgZIAKgdIACgDIACgBIAEgBIAFAAIAGAAIADABIACABIAAABIAAADIgBADIgMAeQgGAPgIAPQgHAPgJAOQgJAOgLAOIgCACIgDABIgEABIgFAAIgHAAgAnzjBIgDgBIgCgBIAAgCIAYh6IABgCIACgBIADgBIAFAAIAFAAIADABIABABIAAACIgFAWIAIgKIAJgJQAFgEAGgCQAFgDAFAAIAFABIAEABIAEABIACABIABADIAAACIgBADIAAAEIgCAEIgBADIgCACIgDgBIgDgBIgDgBIgFgBQgFAAgFAEQgHAEgFAHQgGAHgFAKQgFAKgCALIgLA2IgBACIgCABIgDABIgGAAIgFAAgA1fjBIgDgBIgBgBIAAgCIAYh6IABgCIACgBIADgBIAEAAIAFAAIADABIABABIAAACIgEAWIAHgKIAKgJQAFgEAFgCQAFgDAGAAIAEABIAFABIADABIADABIABADIgBACIAAADIgBAEIgBAEIgCADIgCACIgCgBIgDgBIgEgBIgEgBQgFAAgGAEQgGAEgGAHQgGAHgEAKQgFAKgDALIgKA2IgBACIgCABIgEABIgFAAIgGAAgA6JjBIgDgBIgBgBIAAgCIAji0IABgCIACgCIAEgBIAGAAIAFAAIADABIACACIAAACIgkC0IgBACIgCABIgEABIgFAAIgGAAgEgjEgDCIgDAAIgDgCQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAgEIAgiiIABgCIACgBIAEgBIAGAAIAFAAIAEABIABABIAAACIgeCXIA/AAIACABIABAEIAAACIgBADIAAAEIgCADIgCACIgCABgAHvlbIgDgCQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIABgHIACgGIADgEQACgCACAAIAHgBIAHABQAAAAABAAQABAAAAABQABAAAAAAQAAABABAAIABAEIgBAGIgBAHIgEAEIgEACIgHABIgHgBgAhJlbIgDgCQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIABgHIACgGIADgEQACgCACAAIAHgBIAHABQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAIABAEIgBAGIgBAHIgEAEIgEACIgHABIgHgBgAj7lbIgEgCQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAgHIACgGIADgEQACgCADAAIAHgBIAGABQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIABAEIAAAGIgCAHIgDAEIgFACIgHABIgGgBg");
	this.shape.setTransform(299.5,58.5);

	// Capa 2
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(303.1,4.2,1,1,0,0,0,855.5,751);
	this.instance.alpha = 0.441;
	this.instance.compositeOperation = "lighter";

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF8959").p("EAtMAJsMhaXAAAQgyAAgjgjQgjgjAAgyIAAvnQAAgyAjgjQAjgjAyAAMBaXAAAQAxAAAkAjQAjAjAAAyIAAPnQAAAygjAjQgkAjgxAAg");
	this.shape_1.setTransform(301.3,62.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F76841").s().p("EgtLAJsQgyAAgjgjQgjgjAAgyIAAvnQAAgyAjgjQAjgjAyAAMBaXAAAQAxAAAkAjQAjAjAAAyIAAPnQAAAygjAjQgkAjgxAAg");
	this.shape_2.setTransform(301.3,62.1);

	this.addChild(this.shape_2,this.shape_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-552.4,-746.8,1711,1502);


(lib.it02 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AUID3IgLgDIgJgDIgFgFIgCgCIAAgDIAAgDIAAgDIABgEIACgDIABgCIACAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAABIAHAEIAKAEQAGACAJAAQAJAAAGgCQAGgCADgEQAEgDACgEQACgEAAgGQAAgGgEgEQgEgEgGgDIgMgGQgHgDgGgFQgGgEgEgGQgEgHAAgJQAAgKAEgIQAEgJAHgGQAHgHAKgDQAKgDAMAAIALAAIAKACIAIAEIAFADQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAAAFIgBAEIgCAFIgDABIgEgBIgGgDIgJgEQgFgBgHAAQgGAAgFABQgGACgDAEIgFAHQgCAEAAAFQAAAGAEAEIAKAHIANAGQAHADAGAFQAGAEAEAGQAEAHAAAJQAAAKgEAJQgFAKgHAGQgIAHgLAEQgLADgNAAIgOgBgARuD0QgIgEgFgHQgEgIgCgIQgCgIAAgKQAAgIACgLQACgKADgMQAEgKAFgLQAGgKAIgJQAIgIAKgGQALgEANAAQANAAAKAFQAJAFAIAKIADgOQAAgBAAAAQAAAAABgBQAAAAABgBQAAAAABgBIAJgBIAFABIADAAIACACIAAACIgbCIQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAIgJABIgFgBIgDAAIgCgBIAAgCIAFgaQgCAFgFAFQgFAGgHAFQgHAFgJADQgIADgJAAQgMAAgIgEgASSB9QgGADgFAHQgFAGgEAIIgGAQIgDARIgCAQIABAKQABAFACAFQADADAEADQAEACAGAAQAIAAAJgEQAIgEAHgJQAHgHAGgMQAGgLACgNIAFgYQgHgLgIgFQgIgFgKAAQgIAAgHAEgAKFD0QgIgEgFgHQgFgIgBgIQgCgIAAgKQAAgIACgLQABgKAEgMQADgKAGgLQAFgKAIgJQAIgIALgGQAKgEAOAAQANAAAJAFQAKAFAHAKIADgOQAAgBABAAQAAAAAAgBQABAAAAgBQABAAABgBIAJgBIAFABIADAAIABACIAAACIgbCIQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAIgJABIgFgBIgDAAIgCgBIAAgCIAFgaQgCAFgFAFQgFAGgHAFQgHAFgIADQgJADgJAAQgMAAgHgEgAKpB9QgHADgFAHQgFAGgEAIIgGAQIgDARIgBAQIABAKQAAAFADAFQACADAEADQAEACAHAAQAIAAAIgEQAJgEAHgJQAHgHAFgMQAGgLADgNIAFgYQgHgLgIgFQgJgFgKAAQgIAAgGAEgAF+D0QgIgEgFgHQgFgIgBgIQgCgIAAgKQAAgIACgLQABgKAEgMQADgKAGgLQAFgKAIgJQAIgIALgGQAKgEAOAAQANAAAJAFQAKAFAHAKIADgOQAAgBABAAQAAAAAAgBQABAAAAgBQABAAABgBIAJgBIAFABIADAAIABACIAAACIgbCIQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAIgJABIgFgBIgDAAIgCgBIAAgCIAFgaQgCAFgFAFQgFAGgHAFQgHAFgIADQgJADgJAAQgMAAgHgEgAGiB9QgHADgFAHQgFAGgEAIIgGAQIgDARIgBAQIABAKQAAAFADAFQACADAEADQAEACAHAAQAIAAAIgEQAJgEAHgJQAHgHAFgMQAGgLADgNIAFgYQgHgLgIgFQgJgFgKAAQgIAAgGAEgAgRD1QgKgDgGgHQgHgGgDgJQgEgJAAgNQAAgKACgKQACgMAEgLQAEgKAHgLQAGgKAJgHQAJgIAKgFQALgEAPAAQANAAAIACQAJAEAGAFQAFAFADAGQACAGAAAGQAAAKgEAJQgFAIgKAFQgLAHgPACQgQAEgVAAIgPAAIgCAKIAAAIQAAAPAHAIQAIAIAOAAQAKAAAHgCIAOgCIAJgEIAFgBIACABIABADIgBADIgBAEIgBAFIgCADQgCACgFACIgLADIgNACIgPABQgMAAgKgDgAANB6QgIAEgFAFQgEAGgEAIQgFAIgCAIIAPAAQAOAAALgCQAKgCAHgDQAGgEADgFQACgEAAgFQAAgIgGgEQgGgFgLAAQgKAAgHADgAizD1QgHgCgEgEQgEgDgDgGIgEgLIgDgLIAAgJQAAgKACgKQABgLAEgLQADgKAGgLQAGgLAIgHQAIgIAKgGQAKgEAOAAQAGgBAGACIAKAEIAJAGIAHAHIAPhNIABgCIACgBIAEgBIAGAAIAGAAIAEABIABABIAAACIgnDJQAAAAgBABQAAAAAAABQgBAAAAAAQgBABgBAAIgJABIgFgBIgDAAIgBgBIAAgCIAEgaQgCAFgFAFQgFAGgHAFQgHAEgIAEQgJADgJAAQgIAAgHgDgAiTB9QgGADgGAHQgFAGgDAHIgGARIgEAQIgBAQQAAAOAFAIQAFAHALAAQAIAAAIgEQAJgFAHgHQAHgIAFgLQAGgLADgNIAFgZQgHgLgIgEQgJgGgKAAQgIAAgGAEgAnhD0QgIgEgFgHQgFgIgBgIQgCgIAAgKQAAgIACgLQABgKAEgMQADgKAGgLQAFgKAIgJQAIgIALgGQAKgEAOAAQANAAAJAFQAKAFAHAKIADgOQAAgBABAAQAAAAAAgBQABAAAAgBQABAAABgBIAJgBIAFABIADAAIABACIAAACIgbCIQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAIgJABIgFgBIgDAAIgCgBIAAgCIAFgaQgCAFgFAFQgFAGgHAFQgHAFgIADQgJADgJAAQgMAAgHgEgAm9B9QgHADgFAHQgFAGgEAIIgGAQIgDARIgBAQIABAKQAAAFADAFQACADAEADQAEACAHAAQAIAAAIgEQAJgEAHgJQAHgHAFgMQAGgLADgNIAFgYQgHgLgIgFQgJgFgKAAQgIAAgGAEgAsUD1QgLgEgGgGQgHgHgDgKQgDgJAAgMQAAgLACgMQACgMAEgKQAFgLAGgKQAHgJAJgHQAJgHALgEQALgEAOAAQAPAAAKADQAKADAHAHQAGAHAEAJQADAKAAAMQAAALgCALQgCAMgFALQgEALgHAJQgGAJgJAIQgJAGgLAFQgMAEgOAAQgOAAgKgDgAr0B8QgIACgFAHQgGAFgFAHIgHAQIgEARIgBARQAAAIACAFQABAGAEAEQAEAFAFACQAGADAJgBQAJAAAHgDQAHgDAGgFQAGgGAEgIIAHgPIAEgRIACgRQAAgIgCgGQgCgGgDgEQgEgEgGgDQgGgCgIAAQgJAAgHAEgAvsDrQgMgMAAgYIABgUQACgLAEgLQADgLAGgKQAGgLAJgHQAIgIALgGQAMgEAOAAQAGgBAGACQAFABAFABIAJAFIAGAEIADADIAAADIAAAGIgCAFIgCAEQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgGgFQgDgDgGgCQgGgCgIgBQgKAAgHAFQgIAEgFAGQgGAHgDAHIgGAQIgDAQIgBAOQAAAQAGAHQAHAJANgBQAKAAAHgCIAMgGIAIgFQADgCADgBIABACIABADIAAAEIgBAGIgCAEIgDAFIgGAEIgKAFIgNADIgOACQgZAAgLgNgAyBD0QgIgEgFgHQgEgIgCgIQgCgIAAgKQAAgIACgLQACgKADgMQAEgKAFgLQAGgKAIgJQAIgIAKgGQALgEANAAQANAAAKAFQAJAFAIAKIADgOQAAgBAAAAQAAAAABgBQAAAAABgBQABAAAAgBIAJgBIAFABIADAAIACACIAAACIgbCIQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAIgJABIgFgBIgDAAIgCgBIAAgCIAFgaQgCAFgFAFQgFAGgHAFQgHAFgJADQgIADgJAAQgMAAgIgEgAxdB9QgGADgFAHQgFAGgEAIIgGAQIgDARIgCAQIABAKQABAFACAFQADADAEADQAEACAGAAQAIAAAJgEQAIgEAHgJQAHgHAGgMQAGgLACgNIAFgYQgHgLgIgFQgIgFgKAAQgIAAgHAEgAPID1QgGgBgEgEQgEgDgCgHQgDgFAAgIIABgEIAAgFIABgFIABgEIAPhMIgTAAIgCgBIgBgEIAAgFIABgFIADgEQAAAAABgBQAAAAAAAAQABAAAAAAQABgBAAAAIATAAIAHgfIABgDIACgBIAEgBIAGgBIAGABIADABIACABIAAADIgGAfIAiAAQABAAAAABQABAAAAAAQABAAAAAAQAAABAAAAIABAEIAAADIgBADIgBAEIgBACIgCACIgDABIgiAAIgPBLIgBAIIgBAFQAAAJADADQAEADAHAAIAHAAIAFgBIAEgCIADgBIACABIAAADIAAAEIgBAFIgCAEIgCADIgDACIgGACIgGABIgHAAQgJAAgGgCgADaDzQgPgGgKgJQgKgKgGgNQgFgOAAgRQAAgQAEgPQAEgQAGgOQAHgOALgMQAKgMANgIQANgJAQgEQAPgGATAAQAKAAAJACQAJACAIADIAMAGIAGAEIADADIAAAEIAAADIAAADIgBAEIgCADIgBADIgCAAQgDAAgDgDIgKgFQgHgEgJgDQgJgCgNAAQgNAAgMADQgMAEgJAHQgKAHgIAKQgHAKgGAKQgFAMgDAMQgCAMAAANQAAANADAKQAEAKAHAHQAIAHAKADQAKAEANAAQAJAAAKgCQAKgCAJgFIALg4IgtAAIgDgBIgBgEIABgCIAAgEIABgEIACgDIACgCIACgBIA+AAQAEAAACADQACADgBAEIgPBLIgCAEIgCAEIgHADIgNAGIgTAEQgLACgLAAQgTABgPgFgAQWD1IgEAAIgBgBIgBgCIAbiHIABgDIADgBIAEgBIAGgBIAGABIADABIACABIAAADIgbCHIgBACIgCABIgEAAIgGABIgGgBgANpD1IgEAAIgBgBIgBgCIARhUIABgJIABgHQAAgKgEgFQgEgGgJAAQgIAAgIAFQgJAEgHAIQgHAIgGALQgFALgDANIgMA9IgBACIgCABIgEAAIgGABIgGgBIgEAAIgBgBIgBgCIAciIIABgCIACgCIADAAIAFgBIAGABIADAAIABACIAAACIgFAaQACgFAFgGIANgLQAHgEAIgEQAJgCAJAAQAKAAAHACQAGADAEAGQAFAFABAGQACAHAAAHIAAAKIgCALIgRBVIgBACIgCABIgEAAIgGABIgGgBgAIKD1IgEAAIgBgBIgBgCIAbiIIABgCIACgCIAEAAIAFgBIAGABIADAAIABACIAAACIgFAZQAEgHAFgFQAEgGAGgEQAFgEAGgDQAGgDAGABIAFAAIAFABIAEABIADABIABAEIAAACIgBAEIgBAFIgBAEIgCADIgCACIgDgBIgDgBIgEgBIgFgBQgGAAgGAFQgHAEgGAHQgHAJgFAKQgFALgDAMIgMA9IgBACIgCABIgEAAIgGABIgGgBgAlVD1IgEAAIgBgBIgBgCIAojJIABgCIADgBIAEgBIAGgBIAGABIADABIACABIAAACIgoDJIgBACIgCABIgEAAIgGABIgGgBgAo5D1IgEAAIgBgBIgBgCIARhUIABgJIABgHQAAgKgEgFQgEgGgJAAQgIAAgIAFQgJAEgHAIQgHAIgGALQgFALgDANIgMA9IgBACIgCABIgEAAIgGABIgGgBIgEAAIgBgBIgBgCIAciIIABgCIACgCIADAAIAFgBIAGABIADAAIABACIAAACIgFAaQACgFAFgGIANgLQAHgEAIgEQAJgCAJAAQAKAAAHACQAGADAEAGQAFAFABAGQACAHAAAHIAAAKIgCALIgRBVIgBACIgCABIgEAAIgGABIgGgBgAt1D1IgEAAIgBgBIgBgCIAbiHIABgDIACgBIAFgBIAGgBIAGABIADABIACABIAAADIgbCHIgBACIgCABIgEAAIgGABIgGgBgA1WD1IgEAAIgBgCIAAgCIAkizQABgGAEgCQADgDAEAAIAMAAIAGABQADABACACIADAEIAEAIIAlBpIAGATIAHAUIAFgZIAFgZIAVhqIABgBIACgCIAEgBIAGgBIAGABIADABIACACIAAABIgkC0IgBAEIgDAEIgEACIgEAAIgKAAIgGAAIgFgDIgEgGIgDgJIglhnIgHgXIgHgVIgFAYIgEAYIgXBxIgBACIgCACIgEAAIgGABIgGgBgAQ5BSIgGgBIgCgBIgBgCIABgDIAYgjIACgCIADgCIAEgBIAGAAIAHABIAEABIAAACQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAIgdAjIgCADIgCACIgEABIgEAAgAtUBLQgDAAgCgCIgBgFIAAgHIADgHIADgFQACgBADgBIAIgBIAHABQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABIgBAHIgCAHIgDAFQgCACgEAAIgHABIgHgBgAWVgnQgKgDgHgHQgGgGgDgKQgEgKAAgMQAAgLADgLQABgLAFgMQAEgKAHgJQAGgKAJgHQAJgHALgEQAMgEAOgBQAOABAKADQALADAGAHQAHAHADAKQADAJAAAMQAAALgCALQgCAMgEALQgFAKgGAKQgHAJgJAIQgJAGgLAFQgLAEgOAAQgPAAgKgEgAW1ifQgHACgGAHQgGAEgEAIIgHAQIgEARIgCARQAAAIACAFQACAHADADQAEAFAGACQAGACAIAAQAJAAAIgDQAHgDAGgGQAFgFAFgHIAHgQIAEgSIABgRQAAgHgBgGQgCgGgEgEQgDgEgGgCQgGgCgJAAQgJAAgHADgATzgmQgHgCgEgDQgEgFgDgEIgEgLIgDgMIAAgKQAAgIACgLQABgLAEgKQADgLAGgLQAGgKAIgJQAIgHAKgFQAKgGAOAAIAMACIAKAEIAJAGIAHAHIAPhMIABgCIACgCIAEgBIAGAAIAGAAIAEABIABACIAAACIgnDHQAAABgBABQAAAAAAABQgBAAAAAAQgBABgBAAIgJABIgFgBIgDAAIgBgCIAAgCIAEgZQgCAFgFAFQgFAHgHAEQgHAEgIAEQgJADgJAAQgIAAgHgDgAUTifQgGAEgGAGQgFAHgDAIIgGAQIgEAQIgBAPQAAAPAFAIQAFAIALgBQAIABAIgFQAJgEAHgIQAHgIAFgLQAGgLADgNIAFgZQgHgKgIgGQgJgFgKAAQgIAAgGADgAO8gnQgLgDgGgHQgHgGgDgKQgDgKAAgMQAAgLACgLQACgLAEgMQAFgKAGgJQAHgKAJgHQAJgHALgEQALgEAOgBQAPABAKADQAKADAHAHQAGAHAEAKQADAJAAAMQAAALgCALQgCAMgFALQgEAKgHAKQgGAJgJAIQgJAGgLAFQgMAEgOAAQgOAAgKgEgAPcifQgIACgFAHQgGAEgFAIIgHAQIgEARIgBARQAAAIACAFQABAHAEADQAEAFAFACQAGACAJAAQAJAAAHgDQAHgDAGgGQAGgFAEgHIAHgQIAEgSIACgRQAAgHgCgGQgCgGgDgEQgEgEgGgCQgGgCgIAAQgJAAgHADgAIQgmQgKgDgGgHQgHgFgDgKQgEgJAAgNQAAgJACgLQACgMAEgLQAEgLAHgKQAGgKAJgIQAJgHAMgFQALgEAPgBQANAAAIAEQAJADAGAFQAFAFADAGQACAGAAAGQAAALgEAHQgFAJgKAGQgLAFgPAEQgQACgXABIgPAAIgCAJIAAAJQAAAPAHAIQAIAIAQAAQAKAAAHgCIAOgDIAJgCIAFgCIACABIABADIgBADIgBAFIgBADIgCAEQgCACgFABIgLADIgNADIgPABQgOAAgKgDgAIwigQgIADgFAGQgGAFgEAIQgFAHgCAJIAPAAQAQAAALgCQAKgCAHgEQAGgDADgFQACgEAAgFQAAgHgGgFQgGgFgLAAQgKAAgHAEgAFugmQgHgCgEgDQgEgFgDgEIgEgLIgDgMIAAgKQAAgIACgLQABgLAEgKQADgLAGgLQAGgKAIgJQAIgHAKgFQAKgGAOAAIAMACIAKAEIAJAGIAHAHIAPhMIABgCIACgCIAEgBIAGAAIAGAAIAEABIABACIAAACIgnDHQAAABgBABQAAAAAAABQgBAAAAAAQgBABgBAAIgJABIgFgBIgDAAIgBgCIAAgCIAEgZQgCAFgFAFQgFAHgHAEQgHAEgIAEQgJADgJAAQgIAAgHgDgAGOifQgGAEgGAGQgFAHgDAIIgGAQIgEAQIgBAPQAAAPAFAIQAFAIALgBQAIABAIgFQAJgEAHgIQAHgIAFgLQAGgLADgNIAFgZQgHgKgIgGQgJgFgKAAQgIAAgGADgACpgkIgLgDIgJgDIgGgFIgBgCIgBgDIAAgDIABgDIABgDIABgEIACgCIABgBQABAAAAABQABAAAAAAQABAAABABQAAAAABAAIAGAFIALAEQAGACAJAAQAIAAAGgCQAGgCAEgDQAEgEACgEQACgFAAgEQAAgHgEgEQgEgEgGgDIgNgHQgHgDgGgEQgGgEgEgHQgEgFAAgKQAAgKAEgJQAEgIAHgGQAHgHAKgDQAKgDANgBIALABIAJADIAIADIAFADQABAAAAABQAAAAAAABQABAAAAABQAAABAAABIgBADIgBAGIgCADIgCACIgFgBIgGgDIgIgDQgFgCgHAAQgHAAgFACQgFABgEAEIgFAHQgCAEAAAFQAAAFAEAFIAKAHIANAGQAHADAGAEQAGAFAEAGQAEAGAAAKQAAALgEAIQgEAJgIAHQgIAGgLAEQgKAEgOAAIgNgBgAAjgmQgKgDgHgHQgHgFgDgKQgDgJAAgNQAAgJACgLQACgMAEgLQAEgLAGgKQAHgKAJgIQAIgHAMgFQAMgEAOgBQANAAAJAEQAJADAFAFQAGAFACAGQADAGAAAGQAAALgFAHQgFAJgKAGQgKAFgQAEQgQACgWABIgQAAIgBAJIgBAJQAAAPAIAIQAHAIARAAQAJAAAIgCIANgDIAJgCIAFgCIADABIAAADIAAADIgBAFIgCADIgCAEQgCACgEABIgLADIgOADIgPABQgNAAgKgDgABCigQgHADgGAGQgGAFgEAIQgEAHgDAJIAQAAQAPAAALgCQALgCAGgEQAGgDADgFQADgEAAgFQAAgHgGgFQgGgFgMAAQgJAAgIAEgAjignQgKgDgHgHQgGgGgDgKQgEgKAAgMQAAgLADgLQABgLAFgMQAEgKAHgJQAGgKAJgHQAJgHALgEQAMgEAOgBQAOABAKADQALADAGAHQAHAHADAKQADAJAAAMQAAALgCALQgCAMgEALQgFAKgGAKQgHAJgJAIQgJAGgLAFQgLAEgOAAQgPAAgKgEgAjCifQgHACgGAHQgGAEgEAIIgHAQIgEARIgCARQAAAIACAFQACAHADADQAEAFAGACQAGACAIAAQAJAAAIgDQAHgDAGgGQAFgFAFgHIAHgQIAEgSIABgRQAAgHgBgGQgCgGgEgEQgDgEgGgCQgGgCgJAAQgJAAgHADgAmEgmQgHgCgEgDQgEgFgDgEIgEgLIgDgMIAAgKQAAgIACgLQABgLAEgKQADgLAGgLQAGgKAIgJQAIgHAKgFQAKgGAOAAIAMACIAKAEIAJAGIAHAHIAPhMIABgCIACgCIAEgBIAGAAIAGAAIAEABIABACIAAACIgnDHQAAABgBABQAAAAAAABQgBAAAAAAQgBABgBAAIgJABIgFgBIgDAAIgBgCIAAgCIAEgZQgCAFgFAFQgFAHgHAEQgHAEgIAEQgJADgJAAQgIAAgHgDgAlkifQgGAEgGAGQgFAHgDAIIgGAQIgEAQIgBAPQAAAPAFAIQAFAIALgBQAIABAIgFQAJgEAHgIQAHgIAFgLQAGgLADgNIAFgZQgHgKgIgGQgJgFgKAAQgIAAgGADgAomgoQgIgDgFgHQgFgIgBgIQgCgJAAgJQAAgJACgKQABgKAEgLQADgLAGgLQAFgLAIgIQAIgJALgEQAKgGAOAAQANABAJAFQAKAGAHAJIADgOQAAgBABAAQAAAAAAgBQABAAAAgBQABAAABAAIAJgCIAFABIADABIABABIAAACIgbCHQAAABAAABQAAAAgBABQAAAAgBAAQAAABgBAAIgJABIgFgBIgDAAIgCgCIAAgCIAFgZQgCAFgFAFQgFAGgHAFQgHAEgIADQgJAEgJAAQgMAAgHgFgAoCieQgHADgFAHQgFAGgEAIIgGARIgDAQIgBAPIABALQAAAFADAEQACAEAEADQAEACAHAAQAIABAIgFQAJgEAHgJQAHgHAFgMQAGgKADgNIAFgZQgHgLgIgFQgJgFgKAAQgIAAgGAEgAskgnQgLgDgGgHQgHgGgDgKQgDgKAAgMQAAgLACgLQACgLAEgMQAFgKAGgJQAHgKAJgHQAJgHALgEQALgEAOgBQAPABAKADQAKADAHAHQAGAHAEAKQADAJAAAMQAAALgCALQgCAMgFALQgEAKgHAKQgGAJgJAIQgJAGgLAFQgMAEgOAAQgOAAgKgEgAsEifQgIACgFAHQgGAEgFAIIgHAQIgEARQgBAJAAAIQAAAIACAFQABAHAEADQAEAFAFACQAGACAJAAQAJAAAHgDQAHgDAGgGQAGgFAEgHIAHgQIAEgSQACgIAAgJQAAgHgCgGQgCgGgDgEQgEgEgGgCQgGgCgIAAQgJAAgHADgAu4goQgKgGgHgJIgDANQAAABAAABQAAAAgBABQAAAAgBAAQgBABAAAAIgJABQgGAAgDgCQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAojIIABgCIACgCIAEgBIAGAAIAGAAIAEABIABACIABACIgMA8IgCAIIgCAIIgDAIIgCAHQADgFAFgGQAFgFAHgGIAPgHQAJgEAIAAQAJABAGACQAHACAEAEQAFAFADAEIAEALIACALIABAKQAAAIgCAMQgCAKgDALIgKAWQgFAKgIAIQgIAIgLAFQgKAFgNAAQgOAAgJgFgAuZieQgIAFgHAJQgIAHgFAMQgGAKgCANIgFAZQAHALAIAFQAIAFAKgBQAIABAGgEQAGgEAGgFQAFgHADgHQAEgIADgIIADgRIACgQIgBgJQgBgGgCgEQgCgFgEgDQgEgDgHAAQgIAAgJAEgAxpgoQgIgDgFgHQgEgIgCgIQgCgJAAgJQAAgJACgKQACgKADgLQAEgLAFgLQAGgLAIgIQAIgJAKgEQALgGANAAQANABAKAFQAJAGAIAJIADgOQAAgBAAAAQAAAAABgBQAAAAABgBQABAAAAAAIAJgCIAFABIADABIACABIAAACIgbCHQAAABgBABQAAAAAAABQgBAAAAAAQgBABAAAAIgJABIgFgBIgDAAIgCgCIAAgCIAFgZQgCAFgFAFQgFAGgHAFQgHAEgJADQgIAEgJAAQgMAAgIgFgAxFieQgGADgFAHQgFAGgEAIIgGARIgDAQIgCAPIABALQABAFACAEQADAEAEADQAEACAGAAQAIABAJgFQAIgEAHgJQAHgHAGgMQAGgKACgNIAFgZQgHgLgIgFQgIgFgKAAQgIAAgHAEgA1EgnQgLgDgGgHQgHgGgDgKQgDgKAAgMQAAgLACgLQACgLAEgMQAFgKAGgJQAHgKAJgHQAJgHALgEQALgEAOgBQAPABAKADQAKADAHAHQAGAHAEAKQADAJAAAMQAAALgCALQgCAMgFALQgEAKgHAKQgGAJgJAIQgJAGgLAFQgMAEgOAAQgOAAgKgEgA0kifQgIACgFAHQgGAEgFAIIgHAQIgEARIgBARQAAAIACAFQABAHAEADQAEAFAFACQAGACAJAAQAJAAAHgDQAHgDAGgGQAGgFAEgHIAHgQIAEgSIACgRQAAgHgCgGQgCgGgDgEQgEgEgGgCQgGgCgIAAQgJAAgHADgA3WgoQgMgFgJgIQgJgJgEgOQgFgNAAgRQAAgOADgPQADgQAGgOQAGgOAJgNQAIgMAMgKQALgJAPgGQAPgGARABQALAAAJACQAKADAHAEQAGADADADQADADAAAEIgBAIIgCAHQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAABQgCgBgDgCQgDgDgFgDQgEgEgIgCQgIgDgLAAQgNAAgKAFQgKAEgJAJQgIAIgGAKQgHAKgEAMQgEAMgCALQgCAMAAALQAAALADAKQADAJAGAHQAFAGAJAEQAIACAKAAQAMABAJgDQAIgDAGgDIAKgFQAEgEADAAQAAAAAAABQABAAAAAAQAAAAABAAQAAABAAAAIABAEIAAACIgBACIAAAFIgBADIgCADIgCADIgGAEIgNAGIgQAEQgJADgKAAQgQAAgMgFgASXgmIgEgBIgBgBIgBgCIARhTIABgJIABgHQAAgKgEgGQgEgFgJAAQgIAAgIAEQgJAFgHAIQgHAIgGALQgFALgDANIgMA8IgBACIgCABIgEABIgGABIgGgBIgEgBIgBgBIgBgCIAciHIABgCIACgBIADgBIAFgBIAGABIADABIABABIAAACIgFAaQACgFAFgGIANgLQAHgEAIgDQAJgEAJAAQAKAAAHAEQAGADAEAFQAFAFABAHQACAGAAAHIAAAKIgCALIgRBUIgBACIgCABIgEABIgGABIgGgBgAMYgmIgEgBIgCgBIAAgCIAki0QABgFADgDQAEgCAEAAIBXAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIABADIAAADIAAADIgBADIgCAFIgCACIgDABIhHAAIgNBCIBDAAIADABIABADIAAADIgBAEIgBADIgBAEIgCADIgDAAIhDAAIgQBRIgBACIgDABIgEABIgGABIgGgBgAKIgmIgDgBIgCgBIAAgCIAojIIABgCIACgCIAEgBIAGAAIAGAAIAEABIABACIABACIgoDIIgBACIgDABIgDABIgHABIgGgBgAhfgmIgDgBIgCgBIAAgCIAbiHIABgCIACgBIAEgBIAFgBIAFABIADABIACABIAAACIgFAZQADgHAFgFQAFgGAFgEQAGgFAGgCQAGgCAGgBIAFABIAFABIAEABIAAACIABACIAAADIAAAEIgBAEIAAAFIgCADIgCABIgCAAIgEgBIgEgBIgFgBQgFAAgHAEQgGAFgHAIQgGAHgFALQgGALgCAMIgMA8IgBACIgDABIgDABIgHABIgGgBgAqhgmIgEgBIgBgBIgBgCIAbiHIABgCIACgBIAEgBIAFgBIAGABIADABIABABIAAACIgFAZQAEgHAFgFQAEgGAGgEQAFgFAGgCQAGgCAGgBIAFABIAFABIAEABIADACIABACIAAADIgBAEIgBAEIgBAFIgCADIgCABIgDAAIgDgBIgEgBIgFgBQgGAAgGAEQgHAFgGAIQgHAHgFALQgFALgDAMIgMA8IgBACIgCABIgEABIgGABIgGgBgAzBgmIgEgBIgBgBIgBgCIAojIIABgCIADgCIAEgBIAGAAIAGAAIADABIACACIAAACIgoDIIgBACIgCABIgEABIgGABIgGgBg");
	this.shape.setTransform(301.4,39);

	// Capa 2
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(303.1,3.8,1,1,0,0,0,855.5,751);
	this.instance.alpha = 0.441;
	this.instance.compositeOperation = "lighter";

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF8959").p("EAtMAGXMhaXAAAQgyAAgjgjQgjgjAAgyIAAo9QAAgyAjgjQAjgjAyAAMBaXAAAQAxAAAkAjQAjAjAAAyIAAI9QAAAygjAjQgkAjgxAAg");
	this.shape_1.setTransform(301.3,40.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6F4D").s().p("EgtLAGXQgyAAgjgjQgjgjAAgyIAAo9QAAgyAjgjQAjgjAyAAMBaXAAAQAxAAAkAjQAjAjAAAyIAAI9QAAAygjAjQgkAjgxAAg");
	this.shape_2.setTransform(301.3,40.8);

	this.addChild(this.shape_2,this.shape_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-552.4,-747.2,1711,1502);


(lib.it01 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ATGEBQgNgDgJgIQgIgHgFgMQgEgLAAgQQAAgMACgOQACgOAFgNQAGgNAHgNQAIgMAMgJQALgKAPgFQAPgGATAAQAQAAAMAEQAMAEAHAGQAIAHAEAIQADAIAAAJQAAANgFAKQgGALgNAHQgMAIgTAEQgTAEgbAAIgQAAIgBAIIgBAHQAAAPAIAHQAHAIARAAQAMAAAKgCIAQgEIAMgDIAHgCQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIABAEIgBAHIgBAIIgDAHQgBAEgCABQgCADgGACIgOAEIgSADIgVABQgRAAgNgEgATwBzQgHADgFAGQgGAFgDAIQgEAHgDAJIAPAAQAPAAAKgCQAJgCAGgEQAGgDADgEQADgFAAgFQAAgHgGgFQgGgFgLAAQgJAAgHAEgALMEBQgNgDgIgIQgJgHgEgMQgFgLAAgQQAAgMADgOQACgOAFgNQAFgNAIgNQAIgMALgJQAMgKAOgFQAPgGATAAQARAAALAEQAMAEAIAGQAHAHAEAIQAEAIAAAJQAAANgGAKQgGALgMAHQgNAIgTAEQgTAEgaAAIgRAAIgBAIIAAAHQAAAPAHAHQAIAIARAAQAMAAAJgCIARgEIAMgDIAGgCQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIAAAEIAAAHIgCAIIgCAHQgCAEgCABQgCADgGACIgOAEIgSADIgUABQgSAAgNgEgAL3BzQgHADgGAGQgFAFgEAIQgEAHgCAJIAPAAQAOAAAKgCQAKgCAGgEQAGgDACgEQADgFAAgFQAAgHgFgFQgGgFgLAAQgJAAgHAEgAFoD/QgQgFgLgLQgLgKgGgQQgGgQAAgWQAAgRAEgSQADgSAHgRQAHgSALgPQAKgQAPgLQAOgMATgHQASgHAXAAQANAAALADQALACAJAFQAIAEADAEQAEADAAAGIgCANQgCAJgCAFQgDAFgDAAQgDAAgDgDIgIgHIgOgGQgIgDgMAAQgNAAgLAGQgLAFgJAJQgJAIgGAMQgHALgEAMQgEANgCAMQgCAMAAAKQAAANADAKQADAJAGAHQAGAGAJADQAIADALAAQANAAAJgCIAQgGIAKgGQAEgDAEAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABIABAEIgBAEIAAAGIgCAHIgBAHIgCAGIgEAEIgHAFIgOAGIgTAFQgLACgMAAQgTAAgQgGgAgmEAQgKgFgFgJQgGgIgDgLQgCgLAAgNQAAgLACgNQACgOAFgNQAEgOAHgMQAHgMAKgKQAKgJANgGQALgGAQAAQAPAAALAGQAMAHAIAMIADgPQABgEAFgBQAFgCALAAIAJABIAGABIADACIAAADIggCiQgBAEgFABQgFACgLAAIgJgBIgGgBIgDgCIAAgDIAFgaQgDAGgGAGQgGAHgIAFQgIAFgKADQgIAEgKAAQgOAAgKgFgAALB5QgGAEgFAGQgDAGgDAIQgEAIgCAJQgDAIgBAJIgBAQIABAKQAAAFADAEQACAEADACQAEACAEAAQAHAAAJgEQAIgFAHgIQAIgJAFgKQAGgLACgNIAFgYQgGgKgIgFQgIgFgKAAQgHAAgHADgAkvEBQgOgFgIgIQgJgIgFgMQgEgMAAgQQAAgNADgNQACgOAFgNQAFgNAJgMQAIgLALgJQAMgJAPgFQAOgFATAAQASAAAOAEQANAFAJAIQAJAIAEAMQAEAMAAAQQAAANgCANQgDAOgFANQgFANgIAMQgJALgLAJQgLAJgPAFQgPAFgTAAQgSAAgNgEgAkFB3QgHADgGAGQgGAGgEAIIgHAQIgEASIgBARQAAAIACAGQABAFAEAFQADAEAGACQAFACAIAAQAJAAAHgDQAIgEAFgGQAGgGAEgIIAHgRIAEgRIABgRQAAgIgBgGQgCgGgDgEQgEgEgFgCQgGgCgIAAQgJAAgHAEgAo7D1QgQgQAAgeQAAgLADgNQACgNAEgOQAFgNAIgMQAHgNALgKQALgJAOgGQAOgGATAAIAOABIANADIAKAFQAEACACADIADADIABAEIgBAKIgDAJQgBAFgDADQgCADgDAAQgDAAgCgCIgHgFQgDgCgGgCQgGgDgIAAQgKAAgHAEQgIAFgFAGQgGAHgDAIIgGARIgEARIgBANQAAAPAHAHQAGAIAOAAQAKAAAHgDIANgFIAJgGQADgDADAAQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIABAFIgBAHIgCAKIgDAJIgDAGIgIAFIgMAFIgPAEQgIACgJAAQgfAAgPgQgAxlEBQgNgDgIgIQgJgHgEgMQgFgLAAgQQAAgMADgOQACgOAFgNQAFgNAIgNQAIgMALgJQAMgKAOgFQAPgGATAAQARAAALAEQAMAEAIAGQAHAHAEAIQAEAIAAAJQAAANgGAKQgGALgMAHQgNAIgTAEQgTAEgaAAIgRAAIgBAIIAAAHQAAAPAHAHQAIAIARAAQAMAAAJgCIARgEIAMgDIAGgCQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIAAAEIAAAHIgCAIIgCAHQgCAEgCABQgCADgGACIgOAEIgSADIgUABQgSAAgNgEgAw6BzQgHADgGAGQgFAFgEAIQgEAHgCAJIAPAAQAOAAAKgCQAKgCAGgEQAGgDACgEQADgFAAgFQAAgHgFgFQgGgFgLAAQgJAAgHAEgA0aEDQgKgCgHgDIgNgFIgIgGQgCgDAAgFIAAgEIABgHIABgGIADgHIADgFQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQADAAAEACIALAHIAPAGQAIADAMAAQALAAAIgDQAIgDAGgFQAFgEADgGQADgHAAgHQAAgHgEgFQgDgFgFgEIgMgIIgOgIIgOgKQgHgFgFgGQgFgHgEgJQgDgJAAgMQAAgQAHgOQAGgNAMgKQALgKAQgGQAQgFAUAAQAJAAAIABIAPAEIALAEIAHAFIACADIABAFIAAAEIgBAGIgBAHIgCAGIgDAEQAAABgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgDAAgDgCIgKgFQgFgDgIgCQgHgCgJAAQgKAAgHADQgHACgEAFQgEAEgCAGQgDAFAAAGQAAAGAEAFQADAFAFAFIANAIIAOAIIAOAKQAHAFAFAGQAGAHADAJQADAJAAALQAAARgHAPQgHAOgMALQgNALgRAGQgSAGgWAAQgMAAgKgCgARDECQgIgCgFgFQgGgFgDgHQgDgIAAgLIABgEIAAgGIABgGIABgFIAQhPIgUAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgGIAAgIIACgKQACgFACgDQADgEADAAIATAAIAHgkIACgDIAEgCIAIgCIALAAIAKAAIAHACIADACIABADIgHAkIAiAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAIABAGIgBAFIgBAGIgBAGIgDAGIgDAFIgEABIgjAAIgPBMIgBAGIgBAGQAAAIAEADQADADAIAAIAHAAIAGgCIADgBIADgBQABAAAAAAQAAAAABABQAAAAAAAAQABAAAAABIABAEIgBAIIgCAIIgCAIIgDAEIgFADIgIADIgJACIgLAAQgKAAgJgCgAPLEBIgGgBIgEgCIAAgDIAThhIACgJIAAgIQAAgIgDgFQgEgFgIAAQgHAAgIAEQgIAFgHAIQgHAIgGALQgGALgCAMIgPBJIgBADIgEACIgIABIgLABIgLgBIgGgBIgEgCIAAgDIAgiiIACgDIAEgCIAGgBIAJgBIAJABIAGABQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIABADIgGAbIAKgNQAHgHAIgFQAIgFAKgDQAKgEAKAAQANAAAIAEQAJAEAFAGQAGAGACAJQACAIAAAJIAAANIgDANIgUBkIgBADIgEACIgIABIgLABIgLgBgAJREBIgGgBIgEgCIAAgDIAgihIACgDIAEgDIAHgBIALgBIALABIAHABQAAABABAAQAAAAABAAQAAABAAAAQABAAAAABIAAADIggChIgBADIgEACIgIABIgLABIgLgBgAH2EBIgGgBQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAAAIgBgDIAvjuIACgDIAEgDIAIgBIALgBIALABIAGABQABAAAAABQABAAAAAAQABABAAAAQAAAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAIgwDuIgBADIgEACIgIABIgLABIgLgBgACIEBIgHgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgBgDIAwjuIACgDIAEgDIAHgBIALgBIALABIAHABQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgvDuIgCADIgEACIgHABIgLABIgLgBgAmrEBIgHgBIgDgCIgBgDIAgihIACgDIAEgDIAIgBIALgBIALABIAGABQABABAAAAQABAAAAAAQABABAAAAQAAAAAAABIABADIggChIgCADIgEACIgHABIgLABIgLgBgAqfEBIgGgBIgEgCIAAgDIAgihIACgDIAEgDIAHgBIALgBIALABIAHABQAAABABAAQAAAAABAAQAAABAAAAQABAAAAABIAAADIggChIgBADIgEACIgIABIgLABIgLgBgAsYECIgQgBIgJgBQgDgBgBgCIgBgFIgTiRIgBgFIAAgFIABgFQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQADgCAEAAIANgBIALABIAGABQABAAAAAAQABABAAAAQABAAAAABQAAAAAAAAIABAEIAOB2IAAAFIABgCQAJgOAIgOIAOgdIAMgeIALgiIACgEIAEgCIAIgBIALgBIALABIAHABIADABIAAADIAAAFIgCAGQgGAUgJATIgRAnIgVAmQgMASgNARIgEAEIgHADIgIABIgLAAgAvPEBIgGgBIgEgCIAAgDIAgiiQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBIAEgCIAGgBIAJgBIAJABIAGABQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIABADIgFAaQAEgIAGgGQAFgHAHgFIANgHQAHgDAHAAIAFABIAFAAIAFACIADABIABAEIgBAEIgBAIIgCAJIgCAJIgDAGQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgDgBIgEgBIgEgBIgFgBQgHAAgGAEQgHAFgHAIQgGAIgFAKQgFAKgCALIgPBJIgBADIgEACIgIABIgLABIgLgBgAJ4A6QgFgBgDgDQgCgDgBgEIACgMQABgGACgFQACgEAEgDQADgDAGgBQAFgCAIAAQAHAAAFACQAFABACADQADADAAAEIgBALIgDAMQgDAEgDADQgEADgFABIgNABIgMgBgAmFA6QgFgBgCgDQgDgDAAgEIABgMIADgLQADgEADgDQAEgDAFgBQAFgCAIAAQAIAAAFACQAEABADADQACADABAEIgCALIgDAMQgCAEgEADQgDADgGABIgNABIgMgBgAp4A6QgFgBgDgDQgCgDgBgEIACgMIADgLQACgEAEgDQADgDAGgBQAFgCAIAAQAHAAAFACQAFABACADQADADAAAEIgBALIgDAMQgDAEgDADQgEADgFABIgNABIgMgBgAKMglQgJgEgEgIQgFgHgCgJQgCgKAAgKQAAgJACgLQABgLAEgMQAEgMAGgMQAGgLAIgJQAJgJALgFQALgGAPAAQAOAAAKAGQALAGAIAKIADgOQAAgDADgBIAKgBIAFAAIAEABIABABIABADIgdCRQgBACgDACIgKABIgFgBIgDAAIgCgCIAAgCIAFgcQgCAFgFAHQgGAGgHAFQgIAFgJADQgJAEgKAAQgNAAgIgFgAKzikQgHAEgGAGQgFAHgEAJQgEAIgCAKIgEASIgBAQIABALQAAAFADAFQACAEAFADQAEADAHAAQAJAAAJgFQAJgFAIgIQAHgJAGgMQAGgMADgOIAGgaQgIgMgJgFQgJgGgKAAQgJAAgHAFgAHmgjQgHgDgFgFQgFgGgCgHQgCgHAAgJIABgKIACgMIAShaIABgDIACgBIAFgBIAGAAIAHAAIAEABIABABIABADIgSBZIgCAJIAAAJIABAJQABAEACADQACADAEABQADACAFAAQAIAAAJgFQAJgFAIgIQAIgJAGgMQAGgMADgOIANhAIABgDIACgBIAFgBIAGAAIAGAAIAEABIACABIAAADIgdCRIgBACIgCACIgEAAIgGABIgFgBIgDAAIgCgCIAAgCIAFgcQgCAGgGAGQgFAGgIAFQgHAFgJAEQgJADgKAAQgLAAgHgDgAjsgkQgLgEgHgHQgHgHgEgKQgDgKAAgNQAAgMACgNQACgMAFgMQAFgLAHgKQAHgLAJgHQAKgIAMgEQAMgFAPAAQAPAAAMAEQALAEAHAHQAHAHADALQAEAKAAANQAAAMgDAMQgCAMgEAMQgFAMgHAKQgHAKgKAHQgJAIgMAEQgNAFgPAAQgPAAgLgEgAjKimQgIAEgGAGQgGAFgFAIQgEAIgDAJQgDAJgCAKIgBASQAAAIABAGQACAHAEAEQAEAFAGACQAHADAJAAQAKAAAHgEQAIgDAGgGQAHgGAEgIQAFgIADgJQADgJABgJIACgTQAAgIgCgGQgCgHgEgEQgEgEgGgDQgGgCgJAAQgKAAgIADgAl6ghIgMgDQgGgCgDgCIgGgEIgCgDIgBgDIAAgDIABgEIABgEIABgDIACgCIACgBQACAAADACIAHAFIALAEQAGADAKAAQAJAAAHgDQAGgCAEgDQAEgEACgFQACgFAAgFQAAgHgEgEIgKgIIgOgHQgIgDgGgFQgGgEgFgHQgEgHAAgKQAAgLAEgJQAEgJAIgGQAIgHALgEQAKgEANAAIAMABIALADIAIADQAEACABACQACABAAAEIAAAEIgCAFIgCAEIgCACIgFgBIgHgEIgJgDQgFgCgIAAQgHAAgFACQgGACgDAEQgEADgCAFQgCAEAAAFQAAAGAEAFIALAHIAOAHIAOAIQAGAFAEAGQAFAHAAAKQAAALgFAKQgEAKgIAHQgJAHgMAEQgLAEgPAAIgOgBgAqNgjQgHgDgFgFQgFgGgCgHQgCgHAAgJIABgKIACgMIAShaIABgDIACgBIAFgBIAGAAIAHAAIAEABIABABIABADIgSBZIgCAJIAAAJIABAJQABAEACADQACADAEABQADACAFAAQAIAAAJgFQAJgFAIgIQAIgJAGgMQAGgMADgOIANhAIABgDIACgBIAFgBIAGAAIAGAAIAEABIACABIAAADIgdCRIgBACIgCACIgEAAIgGABIgFgBIgDAAIgCgCIAAgCIAFgcQgCAGgGAGQgFAGgIAFQgHAFgJAEQgJADgKAAQgLAAgHgDgAGMghQgJAAgHgBQgHgCgEgEQgFgFgCgGQgCgGAAgJIAAgEIABgFIABgFIABgFIAQhRIgUAAIgDgBIgBgFIAAgFIACgFIACgFQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAIAUAAIAHgjIABgCIADgCIAEgBIAHAAIAGAAIAEABIACACIAAACIgHAjIAlAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAIABAEIAAAEIgBADIgBADIgCAEIgCACIgCABIglAAIgRBQIgBAIIAAAHQAAAIADAEQAEAEAHAAIAIgBIAGgBIAEgCIADgBIACABIAAADIAAAFIgBAFIgCAEIgCADIgEADIgGACIgHABIgHAAgAskgmQgNgFgJgJQgKgKgFgOQgFgOAAgTQAAgPAEgQQADgQAGgQQAGgPAKgOQAJgNANgKQAMgLAQgFQAPgGATAAQAMAAAKACQAKADAIAEIAKAHQADADAAAFIgBAIIgDAIQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgCAAgDgDIgIgHQgGgDgIgDQgIgDgMAAQgOAAgLAFQgLAFgJAJQgJAIgGAMQgHALgFAMQgEAMgCANQgDANAAALQAAANAEAKQADAKAGAHQAGAHAJADQAJAEALAAQANAAAJgDIAPgGIALgGQAFgDACAAIADABIABAEIAAACIgBADIgBAEIgBAEIgBAEIgDADIgHAFIgNAGIgRAEQgKACgLAAQgRAAgNgFgAMjgjIgEgBIgCgBIAAgCIArjYIABgCIACgBIAEgBIAHgBIAHABIADABIACABIAAACIgrDYIgBACIgCABIgEABIgHABIgGgBgADwgjIgEgBIgCgBIAAgCIAdiRIABgDIACgBIAEgBIAGAAIAGAAIADABIABABIABADIgGAaQAEgHAFgGQAFgGAGgEQAGgFAHgDQAGgDAGAAIAGABIAFABIAFABIACACIABADIAAACIgBAFIgBAFIgBAEIgCAEIgCABIgDAAIgEgBIgEgCIgGAAQgFAAgHAEQgHAFgHAIQgHAJgGALQgGAMgCANIgNBBIgBACIgDABIgEABIgHABIgGgBgAClgjIgEgBIgCgBIAAgCIAdiRIABgCIACgCIAEgBIAHAAIAGAAIAEABIACACIAAACIgdCRIgBACIgCABIgEABIgHABIgGgBgAAogiIgIAAIgGgBIgDgCIgBgDIgbjDIAAgFIABgDIAEgBIAGgBIAIABIAEAAIACACIABADIAYCvIABAAIBcivIACgDIADgCIAFAAIAIgBIAIABIAEABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIgCAFIhrDCIgCADIgEACIgFABIgIAAgAn6gjIgEgBIgCgBIAAgCIAdiRIABgDIACgBIAEgBIAGAAIAGAAIADABIABABIABADIgGAaQAEgHAFgGQAFgGAGgEQAGgFAHgDQAGgDAGAAIAGABIAFABIAFABIACACIABADIAAACIgBAFIgBAFIgBAEIgCAEIgCABIgDAAIgEgBIgEgCIgGAAQgFAAgHAEQgHAFgHAIQgHAJgGALQgGAMgCANIgNBBIgBACIgDABIgEABIgHABIgGgBgADIjaQgDgBgCgCQgBgBAAgEIAAgHIADgIIADgFQACgCAEAAIAIgBIAIABQADAAABACQACACAAADIgBAIIgCAHQgCAEgCABIgFADIgJABIgHgBg");
	this.shape.setTransform(301,49.6);

	// Capa 2
	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(303.1,5.4,1,1,0,0,0,855.5,751);
	this.instance.alpha = 0.57;
	this.instance.compositeOperation = "lighter";

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0068AF").s().p("A2WIUQgvAAgighQgjgggDgvI0+AAQgyAAgjgjQgjgkAAgxIAApXQAAgxAjgjQAjgkAyAAIU+AAQADgvAjggQAighAvAAMAssAAAQAwAAAjAhQAiAgADAvIU+AAQAxAAAkAkQAjAjAAAxIAAJXQAAAxgjAkQgkAjgxAAI0+AAQgDAvgiAgQgjAhgwAAg");
	this.shape_1.setTransform(301.3,53.3);

	this.addChild(this.shape_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-552.4,-745.6,1711,1502);


(lib.it00 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Símbolo1();
	this.instance.setTransform(318.3,55.9,1,1,0,0,0,318.3,55.9);

	this.instance_1 = new lib.Símbolo2();
	this.instance_1.setTransform(318.3,380.4,1,1,0,0,0,318.3,53.4);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.1,-0.5,640.9,436.3);


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
	this.instance = new lib.Path_5();
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
	this.instance = new lib.Path_6();
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
	this.instance = new lib.Path_7();
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
	this.instance = new lib.Path_8();
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
	this.instance = new lib.Path_3();
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
	this.instance = new lib.Path_4();
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


(lib.items = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var var_it00 = this.it00;
		var var_it01 = this.it01;
		var var_it02 = this.it02;
		var var_it03 = this.it03;
		var var_it04 = this.it04;
		
		var_it00.alpha = 0;
		var_it01.alpha = 0;
		var_it02.alpha = 0;
		var_it03.alpha = 0;
		var_it04.alpha = 0;
		
		
		createjs.Tween.get(var_it00).wait(0).to({alpha:1}, 600, createjs.Ease.quadOut);
		createjs.Tween.get(var_it01).wait(1000).to({alpha:1}, 600, createjs.Ease.quadOut);
		createjs.Tween.get(var_it02).wait(3000).to({alpha:1}, 600, createjs.Ease.quadOut);
		createjs.Tween.get(var_it03).wait(7000).to({alpha:1}, 600, createjs.Ease.quadOut);
		createjs.Tween.get(var_it04).wait(16000).to({alpha:1}, 600, createjs.Ease.quadOut);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa 2
	this.it00 = new lib.it00();
	this.it00.setTransform(318.3,217.7,1,1,0,0,0,318.3,217.7);

	this.timeline.addTween(cjs.Tween.get(this.it00).wait(1));

	// Capa 6
	this.it01 = new lib.it01();
	this.it01.setTransform(320.6,7,1,1,0,0,0,303.1,5.4);

	this.timeline.addTween(cjs.Tween.get(this.it01).wait(1));

	// Capa 4
	this.it02 = new lib.it02();
	this.it02.setTransform(320.6,120,1,1,0,0,0,303.1,3.8);

	this.timeline.addTween(cjs.Tween.get(this.it02).wait(1));

	// Capa 5
	this.it03 = new lib.it03();
	this.it03.setTransform(320.6,210,1,1,0,0,0,303.1,4.2);

	this.timeline.addTween(cjs.Tween.get(this.it03).wait(1));

	// Capa 1
	this.it04 = new lib.it04();
	this.it04.setTransform(320.6,342,1,1,0,0,0,303.1,4);

	this.timeline.addTween(cjs.Tween.get(this.it04).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-534.9,-744,1711,1837);


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
		
		var audio1 = createjs.Sound.play("sounds/02.mp3");
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
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// items
	this.instance = new lib.items();
	this.instance.setTransform(459.6,296.3,1,1,0,0,0,320.6,174.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).wait(2));

	// 2
	this.boca2 = new lib.boca2();
	this.boca2.setTransform(1094.8,261.4,0.135,0.134,4.7,0,0,143.7,56.2);
	this.boca2.alpha = 0;
	this.boca2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.boca2).wait(28).to({_off:false},0).wait(2));

	// 3
	this.boca3 = new lib.boca3();
	this.boca3.setTransform(1094.5,261.3,0.117,0.116,0,4.7,4.6,162.2,46.8);
	this.boca3.alpha = 0;
	this.boca3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.boca3).wait(28).to({_off:false},0).wait(2));

	// 4
	this.boca4 = new lib.boca4();
	this.boca4.setTransform(1093.3,261.8,0.157,0.157,8.6,0,0,107.4,66.3);
	this.boca4.alpha = 0;
	this.boca4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.boca4).wait(28).to({_off:false},0).wait(2));

	// 5
	this.boca5 = new lib.boca5();
	this.boca5.setTransform(1093.7,262,0.132,0.124,4.7,0,0,143.2,93);
	this.boca5.alpha = 0;
	this.boca5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.boca5).wait(28).to({_off:false},0).wait(2));

	// 6
	this.boca6 = new lib.boca6();
	this.boca6.setTransform(1093.4,262.6,0.152,0.151,4.7,0,0,83.7,90.6);
	this.boca6.alpha = 0;
	this.boca6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.boca6).wait(28).to({_off:false},0).wait(2));

	// 7
	this.boca7 = new lib.boca7();
	this.boca7.setTransform(1094.9,263.2,0.144,0.121,4.7,0,0,146.9,84.4);
	this.boca7.alpha = 0;
	this.boca7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.boca7).wait(28).to({_off:false},0).wait(2));

	// 8
	this.boca8 = new lib.boca44();
	this.boca8.setTransform(1095.1,257.8,1.247,1.247,10.2,0,0,20.4,12.3);
	this.boca8.alpha = 0;
	this.boca8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.boca8).wait(28).to({_off:false},0).wait(2));

	// OjosCerrados
	this.ojos_cerrados = new lib.ojos_cerrados();
	this.ojos_cerrados.setTransform(1104.9,216,1.247,1.247,-4.8,0,0,36.5,9);
	this.ojos_cerrados.alpha = 0;
	this.ojos_cerrados._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ojos_cerrados).wait(28).to({_off:false},0).wait(2));

	// CejaDerecha
	this.ceja_derecha = new lib.ceja_derecha();
	this.ceja_derecha.setTransform(1575.8,199.7,1.247,1.247,-4.8,0,0,15,5.5);

	this.timeline.addTween(cjs.Tween.get(this.ceja_derecha).to({x:1075.7},28,cjs.Ease.get(1)).wait(2));

	// CejaIzquierda
	this.ceja_izquierda = new lib.ceja_izquierda();
	this.ceja_izquierda.setTransform(1634.8,198.8,1.247,1.247,-4.8,0,0,15.4,3.7);

	this.timeline.addTween(cjs.Tween.get(this.ceja_izquierda).to({x:1134.8},28,cjs.Ease.get(1)).wait(2));

	// Bocas
	this.boca1 = new lib.boca1();
	this.boca1.setTransform(1603.5,267.6,1.247,1.247,-4.8,0,0,17.4,7);

	this.timeline.addTween(cjs.Tween.get(this.boca1).to({x:1103.5},28,cjs.Ease.get(1)).wait(2));

	// OjosAbiertos
	this.ojos_abiertos = new lib.ojos_abiertos();
	this.ojos_abiertos.setTransform(1604.9,214.8,1.247,1.247,-4.8,0,0,36.4,9);

	this.timeline.addTween(cjs.Tween.get(this.ojos_abiertos).to({x:1104.8},28,cjs.Ease.get(1)).wait(2));

	// Personaje
	this.personaje = new lib.Símbolo10();
	this.personaje.setTransform(1437.3,105,1,1,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.personaje).to({x:937.2},28,cjs.Ease.get(1)).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1718.2,1132.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;