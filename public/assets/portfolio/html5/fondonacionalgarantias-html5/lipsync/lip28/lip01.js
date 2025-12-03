(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 35,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/32.mp3", id:"32"},
		{src:"sounds/audios-32.mp3", id:"32a"},
		{src:"images/Path.png", id:"Path"},
		{src:"images/Path_1.png", id:"Path_1"},
		{src:"images/Path_1_1.png", id:"Path_1_1"},
		{src:"images/Path_3.png", id:"Path_3"},
		{src:"images/Path_4.png", id:"Path_4"},
		{src:"images/flash0aiActivos.png", id:"flash0aiActivos"},
		{src:"images/Mapadebits1.png", id:"Mapadebits1"},
		{src:"images/Mapadebits2.png", id:"Mapadebits2"},
		{src:"images/Mapadebits3.png", id:"Mapadebits3"}
	]
};



// symbols:



(lib.Path = function() {
	this.initialize(img.Path);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,355,381);


(lib.Path_1 = function() {
	this.initialize(img.Path_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,372);


(lib.Path_1_1 = function() {
	this.initialize(img.Path_1_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,353,391);


(lib.Path_3 = function() {
	this.initialize(img.Path_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,71);


(lib.Path_4 = function() {
	this.initialize(img.Path_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,1);


(lib.flash0aiActivos = function() {
	this.initialize(img.flash0aiActivos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,15);


(lib.Mapadebits1 = function() {
	this.initialize(img.Mapadebits1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,366,306);


(lib.Mapadebits2 = function() {
	this.initialize(img.Mapadebits2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,288,294);


(lib.Mapadebits3 = function() {
	this.initialize(img.Mapadebits3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,521,71);


(lib.Símbolo28 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhAg5ICBAAIg/Bzg");
	this.shape.setTransform(260.1,66.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag5ACIBzhCIAACBg");
	this.shape_1.setTransform(5.9,199.3);

	this.instance = new lib.Path_3();
	this.instance.setTransform(210.9,0);

	this.instance_1 = new lib.Path_4();
	this.instance_1.setTransform(14.7,198.9);

	this.addChild(this.instance_1,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,266.6,205.9);


(lib.Símbolo27 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Mapadebits2();
	this.instance.setTransform(-0.2,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,0,288,294);


(lib.Símbolo26 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Mapadebits3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,521,71);


(lib.Símbolo25 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Mapadebits1();
	this.instance.setTransform(-0.3,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.3,0,366,306);


(lib.ojosmujer = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#42210B").s().p("AheAkQgUgMgIgLQAQAIAPgFQANgEAJgMQAbghAngIQAcgGAYAKQAQAHAVATQAWATAPAaQgdgcgOgJQgXgTgTgBQgvgCghAdQgOAPgKAVQgCAEgFAAQgIAAgNgIg");
	this.shape.setTransform(12.3,6,1,1,14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#AA7243","#B67B4A","#D5945E","#F7B073"],[0.341,0.49,0.753,1],-9.1,6,7.1,-3.6).s().p("AhkAmQgCgJABgCQARgoAjgUQAfgSAhAEQAuAGApA5QgCAAghgQQghgTgIAAQg3AAgmAhQgTASgKARQgCgBgCgKg");
	this.shape_1.setTransform(14,5.1,1,1,14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#EDA161","#A67C52"],[0,0.667],9.2,-1,-9,1.1).s().p("AhbgEQARAIAdACQApADAggRQARgKAPAAQAPABARAMQgcAAgQAEQgeANgXAEQgLADgKAAQgjAAgegXg");
	this.shape_2.setTransform(14.8,12.5,1,1,14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFAMQgHgCgBgHQAAgFAFgFQAJgKAHAIQAGAGAAAEQAAAGgFAEQgEADgFAAIgFgCg");
	this.shape_3.setTransform(17.7,9.9,1,1,14.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2F1D12").s().p("AgNAZQgLgGgCgMQgEgJAHgLQAGgKALgDQAKgEAJAGQALAGAEAMQACAJgFALQgHAKgLADIgHACQgGAAgHgEg");
	this.shape_4.setTransform(15,8.4,1,1,14.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#42210B","#67481B","#BDA140"],[0,0.329,1],0.8,7,0.6,-4.3).s().p("AgbArQgSgMgFgVQgDgSAKgSQALgRAUgGIADgBQAVgEARAMQASAMAEAVQAEATgMASQgMATgVAEIgKABQgOAAgNgJg");
	this.shape_5.setTransform(14.8,8.3,1,1,14.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhQAcQgLgMgCgGQgCgIAFgHQAagrAsgEQAngFAjAdQAJAGAOASQASATgBAIQAAAHgRADQgTADgEACQgdANgcACIgNABQgoAAgYgag");
	this.shape_6.setTransform(14.3,8.1,1,1,14.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#42210B").s().p("AhqAAQAYggAVgLQBDgiBCArQANAIAQgEQARgEAQgOQgMAVgTARQgPANgEgBQgXgPgdgLQg3gWgwAeQgUAMgVAdIgVAiQACgZAZgig");
	this.shape_7.setTransform(59.1,12.7,1,1,14.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#A67C52","#EDA161"],[0.333,1],11,-1.1,-10.2,1.4).s().p("Ag/AKQAXgHAQACQA1AGApgSQAUgKAKgLQgPAYgdAMQgpATg4gLQgIgCgUAEQgWAFgIAGQAKgMAagHg");
	this.shape_8.setTransform(54.5,16.4,1,1,14.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHANQgHgEAAgIQAAgGAHgFQAIgHAIAGQAHAGgBAJQgBAJgIACIgEAAQgDAAgGgCg");
	this.shape_9.setTransform(60.3,14.1,1,1,14.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2F1D12").s().p("AgCAfQgNgCgIgKQgIgLACgKQABgNAKgIQALgIAKABQANACAIAKQAIAKgBALQgCANgKAIQgJAHgKAAIgCAAg");
	this.shape_10.setTransform(57.2,13.1,1,1,14.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#42210B","#67481B","#BDA140"],[0,0.329,1],1.6,8.3,0.4,-4.2).s().p("AgJA1QgWgEgNgTQgMgTAEgUQAEgVARgNQASgMATACIAEABQAWAEANATQANATgFAUQgEAWgTANQgOAJgQAAIgJgBg");
	this.shape_11.setTransform(57.2,12.9,1,1,14.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#A87042","#F7B073"],[0.333,1],12.6,2.2,-11.5,-0.7).s().p("Ah3AyQAQglAKgNQAYgoAfgPQAYgLAtAIQA7AJAeAnIgQALQgLgFgVgJQgggNgUgDQgigDgpAfQghAXgcApQgEgEABgJg");
	this.shape_12.setTransform(57.4,10.7,1,1,14.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhjAkQAEgMAHgMQARgaAPgOQAcgbAjgEQAggDAiANQAnAPgLAZQgJARgXASQgXAQgVAFQgSAEgXgBIgsgEQgGAAgRAHIgQAHQgGgGAGgSg");
	this.shape_13.setTransform(55.8,13.2,1,1,14.9);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,73.4,18.9);


(lib.ojoshombreabiertos = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E89C69","#B3774C"],[0.067,1],7.7,-2.3,-7.1,2.7).s().p("AgDARQg5gCgSgOQAdADAngBQBAgCAZgRIgHAUQgRANgxAAIgJAAg");
	this.shape.setTransform(54.9,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#734A29","#774D2B","#825532","#95643E","#B0784E","#D09061"],[0.502,0.612,0.714,0.812,0.91,1],19.6,8.6,-7.9,-9.5).s().p("AhfgDQALgfAWgGQAfgIAlADQAvAEAXASQAHAFAJASQAIATAEARQgKgRgWgWQgQgQgrgGQgqgGgcAMQgMAGgOAQQgPAVgFAXQgCgaAKgYg");
	this.shape_1.setTransform(55.1,6.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E39163").s().p("AhRAFQARgeASgNQA4gKApAPQAgALAIATIAEAYQgrg1g/ALQgvAIgWAbQgNAdgBAAQgCgJAPgdg");
	this.shape_2.setTransform(54.3,4.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHAPQgGgEgCgHQgCgEADgHQAEgGAHgCQAFgCAGADQAGAEACAHQACAFgDAGQgEAGgHACIgEABQgDAAgEgCg");
	this.shape_3.setTransform(58.7,8.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A1A1A").s().p("AgNAZQgLgGgDgLQgDgKAFgLQAGgLAMgDQAKgDALAGQALAGADAMQADAJgGALQgGALgMADIgHABQgGAAgHgEg");
	this.shape_4.setTransform(54.6,8.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#999999","#838383","#666666","#545454","#4D4D4D"],[0,0.196,0.522,0.8,1],2.2,-5.5,-2.1,5.5).s().p("AgdAzQgWgNgGgVQgHgUAMgWQANgXAXgHQAVgIAXAMQAWANAIAWQAHAVgMAWQgNAWgYAHQgIADgIAAQgOAAgPgIg");
	this.shape_5.setTransform(54.6,8.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhOA0QgXgSALgjQAKghASgNQAdgUAnACQAsACAbAbQAaAagMAfQgMAdgbAHQgjAJggAAQgrAAgUgOg");
	this.shape_6.setTransform(54.6,8.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#E89C69","#B3774C"],[0.067,1],-7.7,-2.3,7.1,2.7).s().p("AhIAEIgGgUQAZARBAACQAmABAegDQgSAOg5ACIgJAAQgxAAgSgNg");
	this.shape_7.setTransform(10.6,13.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#734A29","#774D2B","#825532","#95643E","#B0784E","#D09061"],[0.502,0.612,0.714,0.812,0.91,1],-22.2,-1.1,10.6,0.2).s().p("ABTADQgNgQgNgGQgbgMgrAGQgqAGgQAQQgWAWgJAPQAEgTAIgPQAIgSAHgFQAXgSAugEQAmgDAeAIQAWAGAMAfQAJAYgCAaQgEgXgQgVg");
	this.shape_8.setTransform(10.4,6.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E39163").s().p("ABRAOQgWgbgvgIQhAgMgqA2IAEgYQAIgTAggLQApgPA4AKQASANARAeQAPAdgCAJQgDgOgLgPg");
	this.shape_9.setTransform(11.1,4.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgDAQQgHgCgEgGQgDgGACgFQACgHAGgEQAHgDAEACQAHACAEAGQADAHgCAEQgCAHgGAEQgEACgEAAIgDgBg");
	this.shape_10.setTransform(6.7,8.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1A1A1A").s().p("AgGAcQgMgDgGgLQgGgLADgJQAEgMAKgGQALgGAKADQAMADAGALQAFALgDAKQgDALgLAGQgHAEgHAAIgGgBg");
	this.shape_11.setTransform(10.8,8.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#999999","#838383","#666666","#545454","#4D4D4D"],[0,0.196,0.522,0.8,1],0.1,6,-0.1,-5.9).s().p("AgQA4QgYgHgMgWQgMgWAHgVQAHgWAXgNQAWgMAWAIQAXAHAMAXQANAWgHAUQgGAVgXANQgOAIgPAAQgHAAgJgDg");
	this.shape_12.setTransform(10.9,8.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgzA5QgbgHgMgdQgMgfAagaQAbgbAtgCQAngCAcAUQASANAKAhQAMAjgYASQgUAOgrAAQggAAgjgJg");
	this.shape_13.setTransform(10.8,8.4);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65.5,15.5);


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


(lib.hojoshombrecerrados = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#734A29","#774D2B","#825532","#95643E","#B0784E","#D09061"],[0.502,0.612,0.714,0.812,0.91,1],19.6,8.6,-7.9,-9.5).s().p("AhfgDQALgfAWgGQAfgIAlADQAvAEAXASQAHAFAJASQAIATAEARQgKgRgWgWQgQgQgrgGQgqgGgcAMQgMAGgOAQQgPAVgFAXQgCgaAKgYg");
	this.shape.setTransform(55.1,12.3,1,0.5,0,180,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#734A29","#774D2B","#825532","#95643E","#B0784E","#D09061"],[0.502,0.612,0.714,0.812,0.91,1],-22.2,-1,10.6,0.2).s().p("ABTADQgNgQgNgGQgbgMgrAGQgqAGgQAQQgWAWgJAPQAEgTAIgPQAIgSAHgFQAXgSAugEQAmgDAeAIQAWAGAMAfQAJAYgCAaQgEgXgQgVg");
	this.shape_1.setTransform(10.4,12.3,1,0.5,0,180,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E89C69","#B3774C"],[0.067,1],7.7,-2.3,-7.1,2.7).s().p("AgDARQg5gCgSgOQAdADAngBQBAgCAZgRIgHAUQgRANgxAAIgJAAg");
	this.shape_2.setTransform(54.9,13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E39163").s().p("AhbAuQgCgTgBAAQgCgJAPgbQARggASgNQA4gKApAPQAgALAIATIAEAYQgJgJgoAXQgyAhgbAFQgPACgLAAQgaAAgIgNg");
	this.shape_3.setTransform(54.3,6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E39163").s().p("AhOA0QgXgSALgjQAKghASgNQAdgUAnACQAsACAbAbQAaAagMAfQgMAdgbAHQgjAJggAAQgrAAgUgOg");
	this.shape_4.setTransform(54.6,8.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#E89C69","#B3774C"],[0.067,1],-7.7,-2.3,7.1,2.7).s().p("AhIAEIgGgUQAZARBAACQAmABAegDQgSAOg5ACIgJAAQgxAAgSgNg");
	this.shape_5.setTransform(10.6,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E39163").s().p("AATA3QgbgFgqgfQgggVgIAJIAEgZQAHgSAhgMQApgOA3AJQASAOAOAhQAMAbgDAKQABAJgJAIQgLAKgYAAQgNAAgQgDg");
	this.shape_6.setTransform(10.8,5.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E39163").s().p("AgzA5QgbgHgMgdQgMgfAagaQAbgbAtgCQAngCAcAUQASANAKAhQAMAjgYASQgUAOgrAAQggAAgjgJg");
	this.shape_7.setTransform(10.8,8.4);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65.5,15.5);


(lib.verde = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Path_1();
	this.instance.setTransform(8.6,9.7);

	this.instance_1 = new lib.Path_1_1();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,353,391);


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


(lib.Path_5 = function() {
	this.initialize();

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D5AEB1","#D89B9E"],[0.035,1],-11.3,2.3,11.3,-2.2).s().p("Ag0CVQgsgxgPhOQgQhMAWg+QAWg+AvgJQAtgKAsAyQAsAwAQBOQAPBMgWA+QgXA9gvAKQgHACgIAAQgkAAglgpg");
	this.shape_1.setTransform(11.9,19);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23.9,38);


(lib.Path_6 = function() {
	this.initialize();

	// Capa 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#D5AEB1","#D89B9E"],[0.035,1],-9.6,1.9,9.7,-1.9).s().p("AgsCUQglgwgNhOQgNhMASg+QAUg+AngJQAmgJAlAxQAmAwAMBOQANBMgTA+QgSA+goAJQgGABgHAAQgfAAgfgpg");
	this.shape_2.setTransform(10.1,19);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.2,38);


(lib.Path_7 = function() {
	this.initialize();

	// Capa 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#D5AEB1","#D89B9E"],[0.035,1],-9.6,1.9,9.7,-1.9).s().p("AgsCUQglgwgNhOQgNhMASg+QAUg+AngJQAmgJAlAxQAmAwAMBOQANBMgTA+QgSA+goAJQgGABgHAAQgfAAgfgpg");
	this.shape_3.setTransform(10.1,19);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.2,38);


(lib.Path_8 = function() {
	this.initialize();

	// Capa 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#D5AEB1","#D89B9E"],[0.035,1],-11.3,2.3,11.3,-2.2).s().p("Ag0CUQgsgwgPhOQgQhMAWg+QAXg+AugJQAtgJAsAxQAsAwAQBOQAPBMgWA+QgXA+gvAJQgHABgIAAQgkAAglgpg");
	this.shape_4.setTransform(11.9,19);

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23.9,38);


(lib.Path_9 = function() {
	this.initialize();

	// Capa 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#D5AEB1","#D89B9E"],[0.035,1],-7.7,1.6,7.8,-1.5).s().p("AgiCVQgegxgKhOQgKhMAPg+QAPg+AfgJQAdgJAdAxQAeAwAKBOQAKBMgPA+QgPA+gfAJIgJABQgYAAgZgog");
	this.shape_5.setTransform(7.9,19);

	this.addChild(this.shape_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16,38);


(lib.Path_45 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A2260F","#D6590A"],[0.208,0.976],-43.9,16,22.6,-13.2).s().p("AhjgVQgBhjAGgmQA1gDAugQQAJAAAiA8QAlBAAQA1QgbgogigMQgigMgZAWQgbAZgZBMQgIAcgVBbQACg+gBiJg");
	this.shape.setTransform(10.2,17.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.4,35.6);


(lib.Group_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Path();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,355,381);


(lib.Path_41 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494949").s().p("AikBZQAUhuABgTQBsggA5gXQBsgoAshBQAbBwg/BrQggA3glAgQgVAOhaAkQhhAlgqAIQgBgIAShog");
	this.shape.setTransform(18.2,20.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36.5,40.3);


(lib.Path_36 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494949").s().p("AkZNtQAMgdBqjaQBTisAUhXQAriAh/jYQjClJggg5Qh6jagRhTQgLg0BKiJQBHiCAggNQCKFBAhA9QBeCrBgAPQBUANEBgaQAWAkCCFxQhFAOiEBFQiSBOgHAtQgPBTgaFsQgZFcgGAYQjHgiinhSg");
	this.shape.setTransform(51.2,99.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,102.4,198.7);


(lib.Path_26 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494949").s().p("AiCBEQjwgSgngFIAMggICegzQCKgtA1gDQAngCC0AYQCpAWAegHQAIgBANgHIATgIQgZBEhWAsQhLAmhTACIgBAAQgdAAjxgTg");
	this.shape.setTransform(41.1,8.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82.1,17.5);


(lib.cejaizam = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#754524","#7A4927","#8A5631","#A46B40","#C88956","#F5AF72","#F7B073"],[0,0.125,0.282,0.459,0.647,0.843,0.847],-16.3,-2.4,20,6.9).s().p("ABRAMQhFgUgyABQgeAAgvAOQgxASgcAVQAYgrA0gcQAqgZAbgCQA9gFBZAeQBCAWAYAOIgMAtQgrgYg5gSg");
	this.shape.setTransform(8.4,5.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.9,0.1,38.7,10.8);


(lib.cejaiza = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7A5233","#835938","#9C6E47","#C48F5F","#F7B87D"],[0.216,0.329,0.514,0.749,1],-19.3,-1.2,44.7,5.2).s().p("AiGAtQgEgPANgeQAMgbAGgEQAPgNBIgDQBGgCBMAJQAGALADAYQACAXgDAXQh4gNgiAAQhJgCggAXg");
	this.shape.setTransform(13.6,4.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27.3,9.8);


(lib.bocah11 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6956D").s().p("AgLA7QgYgcAAgfQAAggAXgbQATgZAdgJQgWAdgIASQgLAYAAAWQAAAVAMAZQAGANAXAjQgdgLgSgYg");
	this.shape.setTransform(0.8,4.7,0.233,0.193);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6956D").s().p("AgFAuQALgaAAgUQAAgWgKgYQgKgVgVgaQAdAIATAaQAYAcgBAfQAAAhgYAaQgRAXgeAMQAagoAEgIg");
	this.shape_1.setTransform(35,4.8,0.233,0.193);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D84C07").s().p("AjoBRQhjgZgOgkQgOgPAKgSQAIgOAWgPQA+grBbgMQBbgNBPAWQAagSA3ABQBZABBOAZQBZAbAMAsQAFANgLALQgJAmhkAaQhkAaiKAAQiFAAhjgZg");
	this.shape_2.setTransform(18.2,4.4,0.233,0.193);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDF4F4").s().p("AgQAsQkrABkHgtIgJgBQBigTCigLQCmgMC+AAQCnAACSAJQCQAIBnAPQgUAHgYAEQkBAskjAAIgNAAg");
	this.shape_3.setTransform(18.6,6.8,0.233,0.193);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A03524").s().p("AqmArQgZg1A5gsQAmgcAvgbQDiAiE9AAQFXAADlgoQA2AfAoAeQAyAngOAvQgOAxhAAYQhngOiPgJQiTgIimAAQi+AAinAMQihALhjASQhUgRgYg3g");
	this.shape_4.setTransform(18.2,4.5,0.233,0.193);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EDF4F4").s().p("AotArQDfh7FOAEIAIAAQFJgEDdB2QjlAnlXAAQk9AAjigig");
	this.shape_5.setTransform(18.1,1.5,0.233,0.193);

	// Capa 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#E39461","#E99967","#F1A070","#E39461"],[0.012,0.169,0.478,0.992],20.9,15.6,-19.5,-15.1).s().p("AhqAfQg9gJgegUIgHgUIAdAMQAcAJAGABQBrADAaAAQBPgCBZgRIAtgXIgDARQgeASguANQg4ARg9AFIgmABQgnAAgmgFg");
	this.shape_6.setTransform(18.8,1.5,0.79,1,-175.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#E39461","#F6AB78","#F6AB78","#E39461"],[0.012,0.224,0.69,0.992],21.4,17,-20.5,-15.8).s().p("AiBAdQgFgCgcgTQgcgSgEgEQBDAaB/gFQCKgFA5gsQgLATgRAOIgTANQgjAbhkAJQgdADgZAAQg5AAgfgOg");
	this.shape_7.setTransform(18.7,6.9,0.829,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#DE8F5E","#E19462","#EAA36D","#F7B87D"],[0.459,0.62,0.816,1],-1.8,-16,1.7,8.8).s().p("AhGAdQgngNgQgbQADACB6gIQB+gJgBgEQACAMgNAOQgMAMgVAJQgeAKgtADIgeABQgXAAgXgCgAh9gLIAAAAIAAAAgAB9geIAAAAIAAAAg");
	this.shape_8.setTransform(18.5,10.3);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-2,35.9,15.5);


(lib.bocah10 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6956D").s().p("AikgWQAhgLAvgJQAmgGAsgCQApgBAnAFQAsAFAlAJQAnAJAoAQQAtARAbARQhJgZhSgLQgvgHgggCQglgDgoABQhOAChOASQhEAPhUAkQBAgwBRgZg");
	this.shape.setTransform(14.9,7.7,0.243,0.174);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDF4F4").s().p("ADxBLQhSgXgpgKQhFgQgxgBQgwABhFAQIh7AhQieArhhgVQhOgRgYg+QgZg8A0gzIAKgJIRsAKQAzAygZA8QgYA+hOARQggAGgnAAQhOAAhqgcg");
	this.shape_1.setTransform(14.8,5,0.243,0.174);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A03524").s().p("Ao1AdQAmgjAzggIOuAAQA4AkAsAoIAAABg");
	this.shape_2.setTransform(14.9,2.7,0.243,0.174);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDF4F4").s().p("AnXA6QC/h3EWAEIAFAAQEXgEC+B3g");
	this.shape_3.setTransform(14.8,1,0.243,0.174);

	// Capa 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#E39461","#E99967","#F1A070","#E39461"],[0.012,0.169,0.478,0.992],20.9,15.6,-19.5,-15.1).s().p("AhqAfQg9gJgegUIgHgUIAdAMQAcAJAGABQBrADAaAAQBPgCBZgRIAtgXIgDARQgeASguANQg4ARg9AFIgmABQgnAAgmgFg");
	this.shape_4.setTransform(15.2,1.2,0.686,1,-177.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#E39461","#F6AB78","#F6AB78","#E39461"],[0.012,0.224,0.69,0.992],17.8,15.8,-15.5,-17).s().p("AhfARIgZgTQgXgUgDgEQA6AFBogFQBqgGATAFQANgIgNAOIgQAPQgbAZhQAJQgWADgVAAQgtAAgZgOg");
	this.shape_5.setTransform(14.6,7.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#DE8F5E","#E19462","#EAA36D","#F7B87D"],[0.459,0.62,0.816,1],-1.8,-16,1.7,8.8).s().p("AhGAdQgngNgQgbQADACB6gIQB+gJgBgEQACAMgNAOQgMAMgVAJQgeAKgtADIgeABQgXAAgXgCgAh9gLIAAAAIAAAAgAB9geIAAAAIAAAAg");
	this.shape_6.setTransform(15.1,9.1);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,-2.4,29.8,14.6);


(lib.bocah09 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6956D").s().p("AgjAYQgGgXAKgTQAJgVAVgLQAUgLAUAHQgQAJgMAOQgLAMgEANQgFALgDARQgBARACATQgSgLgGgXg");
	this.shape.setTransform(0.9,2.5,0.229,0.171);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6956D").s().p("AANAWQgCgPgGgMQgFgOgKgMQgMgNgQgKQAUgHAUALQAUAKAKAWQAKATgGAXQgGAYgSAKQADgVgCgPg");
	this.shape_1.setTransform(34.9,2.7,0.229,0.171);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDF4F4").s().p("AgMAxQjxAGi3hjINpgFQixBjjsAAIgkgBg");
	this.shape_2.setTransform(18.3,9.2,0.229,0.171);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDF4F4").s().p("ArABhIgSgnQB1AAB+giQAUgGDkhOQCKgwBdAAQBcAACFAyQDLBLAmAKQCAAkCBgFQgIAYgLAbg");
	this.shape_3.setTransform(18,1.8,0.229,0.171);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D84C07").s().p("AmLBuIgEgLQgRgZAMggQAIgXAagXQBIhHBpgVQBpgWBdAlQAcgdBBABQBlACBcAoQBnAuAOBGQAFAagMASQgBAGgFALg");
	this.shape_4.setTransform(18.4,6.7,0.229,0.171);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A03524").s().p("AnzBeQhNg4g6hIQgpg1gdg3IWBALQg3CAh2BaQgmAcgqAYItqAFQgqgYgjgag");
	this.shape_5.setTransform(18,6,0.229,0.171);

	// Capa 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#E39461","#F6AB78","#F6AB78","#E39461"],[0.012,0.224,0.69,0.992],21.4,17,-20.5,-15.8).s().p("AiBAdQgFgCgcgTQgcgSgEgEQBDAaB/gFQCKgFA5gsQgLATgRAOIgTANQgjAbhkAJQgdADgZAAQg5AAgfgOg");
	this.shape_6.setTransform(18.4,8.5,0.727,1,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#DE8F5E","#E19462","#EAA36D","#F7B87D"],[0.459,0.62,0.816,1],-1.8,-16,1.7,8.8).s().p("AhGAdQgngNgQgbQADACB6gIQB+gJgBgEQACAMgNAOQgMAMgVAJQgeAKgtADIgeABQgXAAgXgCgAh9gLIAAAAIAAAAgAB9geIAAAAIAAAAg");
	this.shape_7.setTransform(18.2,11.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#E39461","#E99967","#F1A070","#E39461"],[0.012,0.169,0.478,0.992],-15.1,-20.9,13.3,21.9).s().p("AB8AXQgTgPgFgCQhOgGgTAAQg7AAhCAWIgGAFIAAgGIgRAAQAVgTAcgNQAqgWAugFQArgEApANQAsANAWAaIAEAeIgWgRg");
	this.shape_8.setTransform(17.3,1.8);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-2.2,35.8,17.3);


(lib.bocah08 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6956D").s().p("AhJBSIAbgPIAkgWIAdgbQAQgRAOgaQAMgaAHgeQALAcgIAjQgIAhgWAXIgMALIgGAFIgVANIgNAGIgPAFIgQADIgSABIgNAAg");
	this.shape.setTransform(33.2,11.6,0.212,0.278);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6956D").s().p("AAiBJIgPgCIgQgFIgNgGIgOgJQgJgGgEgEQgZgWgLgeQgMghAIgeQALAeAOAXQASAZARAOIAKAJIAGAEIAcARQAFAEAHACIAOAHIAcALQgRADgOAAQgIAAgIgCg");
	this.shape_1.setTransform(1.7,11.6,0.212,0.278);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D84C07").s().p("AmYAWQBdg0BtgJQBugKBhAmQAlgmBXABQCEACB8A0QAQAHAMAHQjIAejWgBIgOAAQjKAAi7gbg");
	this.shape_2.setTransform(17.3,13,0.212,0.278);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDF4F4").s().p("AoiAtQDdiHE8AFIADAAIAFAAQFGgFDdCQQjiAgklAAQlNAAjwgpg");
	this.shape_3.setTransform(17.3,2.4,0.212,0.278);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A03524").s().p("AqTB+Qg0gNgRgzQgRg0AjgnQBIhWBjg+QDwApFNAAQElAADiggQBcA7BCBQQAjAngRA0QgRAzg0ANQhxAeiEAUQgLgGgQgHQh9g3iEgBQhXgBglAmQhhgnhuAKQhtAKhdA1QiFgTh8ghg");
	this.shape_4.setTransform(17.2,8.7,0.212,0.278);

	// Capa 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#E39461","#E99967","#F1A070","#E39461"],[0.012,0.169,0.478,0.992],20.9,15.6,-19.5,-15.1).s().p("AhqAfQg9gJgegUIgHgUIAdAMQAcAJAGABQBrADAaAAQBPgCBZgRIAtgXIgDARQgeASguANQg4ARg9AFIgmABQgnAAgmgFg");
	this.shape_5.setTransform(16.8,3.5,0.695,1.428,0,-178.9,-178.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#E39461","#F6AB78","#F6AB78","#E39461"],[0.012,0.224,0.69,0.992],21.4,17,-20.5,-15.8).s().p("AiBAdQgFgCgcgTQgcgSgEgEQBDAaB/gFQCKgFA5gsQgLATgRAOIgTANQgjAbhkAJQgdADgZAAQg5AAgfgOg");
	this.shape_6.setTransform(17.9,12.9,0.783,1,0,0,1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#DE8F5E","#E19462","#EAA36D","#F7B87D"],[0.459,0.62,0.816,1],-1.8,-16,1.7,8.8).s().p("AhGAdQgngNgQgbQADACB6gIQB+gJgBgEQACAMgNAOQgMAMgVAJQgeAKgtADIgeABQgXAAgXgCgAh9gLIAAAAIAAAAgAB9geIAAAAIAAAAg");
	this.shape_7.setTransform(17.6,16.4,0.834,1);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1.7,34.8,21.2);


(lib.bocah07 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDF4F4").s().p("Aj+A4QiRgzg7hhQBbA5CEAVQBmAQCBgCQB2gDBygSQBDgLAxgNQA+gQA1gYQhBBTiTAzQh2ApiCADIgWAAQh+AAhpglg");
	this.shape.setTransform(13.4,2.7,0.292,0.292);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,26.8,5.5);


(lib.bocah06 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6956D").s().p("AhNAvQgsgFglgJQgngKgngPQgqgPgfgUQBIAZBTAMQA7AIAUABQAwADAegBQBKgCBRgTQBJgPBPgjQhDAxhOAYQghALgvAJQgmAGgsACIgOAAQgiAAgggEg");
	this.shape.setTransform(19.2,12.6,0.292,0.198);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D84C07").s().p("AAMCHIgHAAQicAEiCg7QhrgxhThXQBgg4B8gNQB+gOBwAhQAkgdBWABQCHABB6ApQBBAWAqAgQiyCtkHAAIgUAAg");
	this.shape_1.setTransform(18.3,8.9,0.292,0.198);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A03524").s().p("AFoApQh6gpiHAAQhXgBgjAbQhwgfh+AMQh8ANhhA4QhIhMgvhdISrAKQg2BkhOBNQgpgfhBgWg");
	this.shape_2.setTransform(18.5,6.3,0.292,0.198);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDF4F4").s().p("ApXBrQgRgigMggIgJgZQEkiFFZACQFagCEkCFQgMAqgfA7g");
	this.shape_3.setTransform(18.6,2.3,0.292,0.198);

	// Capa 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#E39461","#E99967","#F1A070","#E39461"],[0.012,0.169,0.478,0.992],20.9,15.6,-19.5,-15.1).s().p("AhqAfQg9gJgegUIgHgUIAdAMQAcAJAGABQBrADAaAAQBPgCBZgRIAtgXIgDARQgeASguANQg4ARg9AFIgmABQgnAAgmgFg");
	this.shape_4.setTransform(19.5,1,0.864,0.89,0,-179.3,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#E39461","#F6AB78","#F6AB78","#E39461"],[0.012,0.224,0.69,0.992],21.4,17,-20.5,-15.8).s().p("AiBAdQgFgCgcgTQgcgSgEgEQBDAaB/gFQCKgFA5gsQgLATgRAOIgTANQgjAbhkAJQgdADgZAAQg5AAgfgOg");
	this.shape_5.setTransform(18.5,9.5,0.764,1,3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#DE8F5E","#E19462","#EAA36D","#F7B87D"],[0.459,0.62,0.816,1],-1.8,-16,1.7,8.8).s().p("AhGAdQgngNgQgbQADACB6gIQB+gJgBgEQACAMgNAOQgMAMgVAJQgeAKgtADIgeABQgXAAgXgCgAh9gLIAAAAIAAAAgAB9geIAAAAIAAAAg");
	this.shape_6.setTransform(18.3,12.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DE8F5E").s().p("AgMgrQAEABALAMQAMALAAACQABAJgKAUQgKAXgKAJQAOgsgMgrg");
	this.shape_7.setTransform(40.1,2.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DE8F5E").s().p("AgSAEQAAgEASgTQAQgVADAAQgRASAAAYQAAATAJAUQgdgcAAgJg");
	this.shape_8.setTransform(-2.5,3.2);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.4,-2.2,46.2,17.5);


(lib.bocah05 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E39461","#E99967","#F1A070","#E39461"],[0.012,0.169,0.478,0.992],20.9,15.6,-19.5,-15.1).s().p("AhqAfQg9gJgegUIgHgUIAdAMQAcAJAGABQBrADAaAAQBPgCBZgRIAtgXIgDARQgeASguANQg4ARg9AFIgmABQgnAAgmgFg");
	this.shape.setTransform(22.3,0.8,0.785,0.603,-178.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E39461","#F6AB78","#F6AB78","#E39461"],[0.012,0.224,0.69,0.992],21.4,17,-20.5,-15.8).s().p("AiBAdQgFgCgcgTQgcgSgEgEQBDAaB/gFQCKgFA5gsQgLATgRAOIgTANQgjAbhkAJQgdADgZAAQg5AAgfgOg");
	this.shape_1.setTransform(21.9,8.2,0.832,1,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C6956D").s().p("Ag2BFQAdgQAMgKQARgOALgRQALgOAFgWQAEgYgHgWQAYAOACAgQADAcgRAZQgPAXgaAMQgTAHgRAAQgJAAgIgCg");
	this.shape_2.setTransform(43.5,2.8,0.268,0.292);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C6956D").s().p("AACA/QgZgKgQgYQgRgZADgcQABgOAGgNQAHgNALgGQgGAVAEAZQAEAUAMAQQAMASAQANQANAKAbAQQgIACgJAAQgRAAgSgIg");
	this.shape_3.setTransform(1.5,2.5,0.268,0.292);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDF4F4").s().p("Al2A4QiogXhegmQB6gIDbgkQDAgeBpAAQBmAAC/AhQDRAlCFAFQhfAlinAXQisAZjJAAQjKgBiugYg");
	this.shape_4.setTransform(22.3,2.4,0.268,0.292);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EDF4F4").s().p("AgPAVIgIAAQi7ACidghILfgKQijApjHAAIgVAAg");
	this.shape_5.setTransform(22.9,9.3,0.268,0.292);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D84C07").s().p("AkNBaQhzgcgQgoQgQgQALgUQAIgPAagRQBJgwBpgOQBpgOBdAYQAcgTBCABQBlABBdAbQBmAeAOAxQAGAPgMAMQgLAqh0AcQh0AdigAAQiaAAhzgbg");
	this.shape_6.setTransform(22.4,6.3,0.268,0.292);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A03524").s().p("AqagYQgngegcghIgTgaQA7AAA3gDQBeAoCoAYQCuAYDKAAQDJAACsgYQCmgXBfgnQA9ADA6gCQgWAlg3AuQhxBaivAvIrfAKQjCgth9hgg");
	this.shape_7.setTransform(22.4,5.6,0.268,0.292);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1.3,45,13.7);


(lib.bocah04 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6956D").s().p("AApBSQgOgDgagLIgQgKIgJgFIgJgHQgjgagWggQgZglgHgnQAZAjAZAbQAYAaAhAWQAfAYAhAOQAJAFAbAJQAGADAMADIAUAHIgpACQgfgEgKgDg");
	this.shape.setTransform(2.8,10.6,0.228,0.292);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6956D").s().p("ABvBIIgMgQIgZgdQgWgYgkgYQgdgVgjgQQgjgOgogMQAlgHAtALQApAKAhAZIAJAGIAYAUQAUAUAGALQAHAJANAbIAHAUIAFAUg");
	this.shape_1.setTransform(32.4,3.2,0.228,0.292);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDF4F4").s().p("AkYAyQiKgWhmgpIgJgDQBPgXCNgOQCRgOCpAAQCkAACOANQCJANBSAWIgLAEQhmAqiNAWQiIAWiOgEIgtABQh3AAhygSg");
	this.shape_2.setTransform(17.7,11.6,0.228,0.292);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDF4F4").s().p("Ak9A/QibgNhmgWQAVgLAXgKQBmgqCNgVQCIgWCQAEQCNgECJAWQCMAVBnAqQAjAPAbAQQjfAmlKAAQizAAihgNg");
	this.shape_3.setTransform(17.9,2.2,0.228,0.292);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D84C07").s().p("AgPBkQiQgChngaQhmgZgKgjQgNgMAOgTQAKgNAagOQBLgnBjgLQBjgKBTAXQAdgRA9ACQBeADBRAYQBbAbAGArQADANgNAJQgQAkhvAXQhlAUiDAAIgbAAg");
	this.shape_4.setTransform(17.6,10,0.228,0.292);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A03524").s().p("AlKCaQiJhAAAhaQAAhZCJhAQCJhADBAAQDBAACKBAQCJBAAABZQAABaiJBAQiJBAjCAAQjBAAiJhAg");
	this.shape_5.setTransform(17.7,6.7,0.228,0.292);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A03524").s().p("AqJBAQgpgigRgmQARgnApgkQANgLAQgLQAVgPAhgQQBnAVCbAOQCgANC0AAQFJgBDfgmIAZAPQAbARAOAMQApAkARAnQgRAmgpAiQgoAihBAfIgMAGQhRgWiKgNQiNgNilAAQipAAiQAOQiOAOhPAWQhMghgvgog");
	this.shape_6.setTransform(17.7,7.1,0.228,0.292);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,35.3,13.6);


(lib.bocah03 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E39461","#E99967","#F1A070","#E39461"],[0.012,0.169,0.478,0.992],20.9,15.6,-19.5,-15.1).s().p("AhqAfQg9gJgegUIgHgUIAdAMQAcAJAGABQBrADAaAAQBPgCBZgRIAtgXIgDARQgeASguANQg4ARg9AFIgmABQgnAAgmgFg");
	this.shape.setTransform(10.9,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E39461","#F6AB78","#F6AB78","#E39461"],[0.012,0.224,0.69,0.992],21.4,17,-20.5,-15.8).s().p("AiBAdQgFgCgcgTQgcgSgEgEQBDAaB/gFQCKgFA5gsQgLATgRAOIgTANQgjAbhkAJQgdADgZAAQg5AAgfgOg");
	this.shape_1.setTransform(11,8.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DE8F5E","#E19462","#EAA36D","#F7B87D"],[0.459,0.62,0.816,1],-1.8,-16,1.7,8.8).s().p("AhGAdQgngNgQgbQADACB6gIQB+gJgBgEQACAMgNAOQgMAMgVAJQgeAKgtADIgeABQgXAAgXgCgAh9gLIAAAAIAAAAgAB9geIAAAAIAAAAg");
	this.shape_2.setTransform(10.7,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DE8F5E").s().p("AgMgrQAEABALAMQAMALAAACQABAJgKAUQgKAXgKAJQAOgsgMgrg");
	this.shape_3.setTransform(32.5,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DE8F5E").s().p("AgSAEQAAgEASgTQAQgVADAAQgRASAAAYQAAATAJAUQgdgcAAgJg");
	this.shape_4.setTransform(-10.1,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#9C5233","#974A3B","#9C5233"],[0.325,0.557,0.835],21.2,-0.6,-20.6,1.6).s().p("AgBAoQiOgBgwgsIgHgPQBEAWBzgBQBKAAA9gMQA0gMAbgQIgCAFQggAdguATQg8Aag7AAIgBAAg");
	this.shape_5.setTransform(11,7.4);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.1,-2.4,46.2,17.7);


(lib.bocah02 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6956D").s().p("AgMAwQgLgXAAgZQABgaAMgXQANgZAVgKQgJAXgFAVQgEATgBAVQAAAUADAVQAEAUAIAYQgUgLgMgag");
	this.shape.setTransform(0.7,9,0.292,0.292);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6956D").s().p("AgHApQADgVAAgUQgBgVgEgTQgFgVgJgXQAVAKANAZQAMAXABAaQABAYgMAYQgNAagTALQAIgYAEgUg");
	this.shape_1.setTransform(44.6,9,0.292,0.292);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDF4F4").s().p("Al2AFIAkgLQAjgLAZgGQCFggCgAAQCaAACAAeQAmAIAoANIgGAPQi1AzitgHIgyABQixAAiigzg");
	this.shape_2.setTransform(22.5,15.6,0.292,0.292);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDF4F4").s().p("Al1BXQhtgYhQghIgGgDQB3hPCWgoQCUgnCXAIQB4gHB3AYQB2AXBpAyQAvAXAwAdIAMAJQhUAjhuAYQiwAmjHAAQjEAAixgmg");
	this.shape_3.setTransform(22.7,3.7,0.292,0.292);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D84C07").s().p("AkjBoQgMgaAJgjQAGgZATgYQA1hLBMgXQBMgXBDAoQAVgfAwABQBJABBEAsQBKAwALBLQADAcgIASIgFATQiAgeiaAAQigAAiFAhg");
	this.shape_4.setTransform(22.7,11.4,0.292,0.292);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A03524").s().p("An0CMQhNgrgtgyQgngrgRgxQARgyAngrQAXgaAhgZQBPAiBuAYQCwAmDGAAQDFAACwgmQBugYBVgjQAgAYAaAcQAnArARAyQgSAxgmArQgtAyhNArQgzAchDAXIgWgIQgngNgmgJIAEgTQAJgSgDgcQgLhNhLguQhDgshKgBQgvgBgUAfQhEgohMAXQhNAXg1BKQgSAZgGAZQgJAkAMAZIAEAPQgaAGgiALIgdALQhFgYgzgcg");
	this.shape_5.setTransform(22.8,10.1,0.292,0.292);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EDF4F4").s().p("AgHgHIAVAHIgbAIg");
	this.shape_6.setTransform(33.6,15.7,0.292,0.292);

	// Capa 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#E39461","#E99967","#F1A070","#E39461"],[0.012,0.169,0.478,0.992],20.9,15.6,-19.5,-15.1).s().p("AhqAfQg9gJgegUIgHgUIAdAMQAcAJAGABQBrADAaAAQBPgCBZgRIAtgXIgDARQgeASguANQg4ARg9AFIgmABQgnAAgmgFg");
	this.shape_7.setTransform(22.9,2.1,0.818,1.415,-174.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#E39461","#F6AB78","#F6AB78","#E39461"],[0.012,0.224,0.69,0.992],21.4,17,-20.5,-15.8).s().p("AiBAdQgFgCgcgTQgcgSgEgEQBDAaB/gFQCKgFA5gsQgLATgRAOIgTANQgjAbhkAJQgdADgZAAQg5AAgfgOg");
	this.shape_8.setTransform(23.6,14.9,0.989,1.427,3.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#DE8F5E","#E19462","#EAA36D","#F7B87D"],[0.459,0.62,0.816,1],-1.8,-16,1.7,8.8).s().p("AhGAdQgngNgQgbQADACB6gIQB+gJgBgEQACAMgNAOQgMAMgVAJQgeAKgtADIgeABQgXAAgXgCgAh9gLIAAAAIAAAAgAB9geIAAAAIAAAAg");
	this.shape_9.setTransform(23,20.1,0.989,1.427,3.2);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-2.9,45.3,27.4);


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


(lib.boca01 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E39461","#E99967","#F1A070","#E39461"],[0.012,0.169,0.478,0.992],20.9,15.6,-19.5,-15.1).s().p("AhqAfQg9gJgegUIgHgUIAdAMQAcAJAGABQBrADAaAAQBPgCBZgRIAtgXIgDARQgeASguANQg4ARg9AFIgmABQgnAAgmgFg");
	this.shape.setTransform(23,7.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E39461","#F6AB78","#F6AB78","#E39461"],[0.012,0.224,0.69,0.992],21.4,17,-20.5,-15.8).s().p("AiBAdQgFgCgcgTQgcgSgEgEQBDAaB/gFQCKgFA5gsQgLATgRAOIgTANQgjAbhkAJQgdADgZAAQg5AAgfgOg");
	this.shape_1.setTransform(23.1,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DE8F5E","#E19462","#EAA36D","#F7B87D"],[0.459,0.62,0.816,1],-1.8,-16,1.7,8.8).s().p("AhGAdQgngNgQgbQADACB6gIQB+gJgBgEQACAMgNAOQgMAMgVAJQgeAKgtADIgeABQgXAAgXgCgAh9gLIAAAAIAAAAgAB9geIAAAAIAAAAg");
	this.shape_2.setTransform(22.8,14.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DE8F5E").s().p("AgMgrQAEABALAMQAMALAAACQABAJgKAUQgKAXgKAJQAOgsgMgrg");
	this.shape_3.setTransform(44.6,4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DE8F5E").s().p("AgSAEQAAgEASgTQAQgVADAAQgRASAAAYQAAATAJAUQgdgcAAgJg");
	this.shape_4.setTransform(2,4.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#9C5233","#974A3B","#9C5233"],[0.325,0.557,0.835],21.2,-0.6,-20.6,1.6).s().p("AgBAoQiOgBgwgsIgHgPQBEAWBzgBQBKAAA9gMQA0gMAbgQIgCAFQggAdguATQg8Aag7AAIgBAAg");
	this.shape_5.setTransform(23.1,9.8);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,46.2,17.7);


(lib.boca1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.flash0aiActivos();
	this.instance.setTransform(-1.9,-9.2,0.762,0.767,15);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.9,-9.2,33.9,19.4);


(lib.bocahombre56 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6956D").s().p("AggAmQgFgZAHgYQAHgaARgTQASgVAYgDQgQAUgIASQgKATgDAUQgGASgCAVQgBAYACAWQgSgQgGgcg");
	this.shape.setTransform(1.1,2.4,0.292,0.292);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6956D").s().p("AAKAkQgCgVgFgSQgEgUgJgTQgKgTgPgTQAZADARAVQARATAHAaQAIAXgGAaQgGAcgSAQQADgbgCgTg");
	this.shape_1.setTransform(43.9,2.4,0.292,0.292);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDF4F4").s().p("AkxgDQA4gbBMgPQBQgQBZAAQBbAABTARQBQARA4AcQiQBHiegLQgTABgVAAQiLAAiChBg");
	this.shape_2.setTransform(22.4,18.5,0.292,0.292);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D84C07").s().p("AjsB3QhlgkgOg2QgPgVALgbQAGgTAXgXQBAg/BdgTQBcgSBRAgQAZgZA6ABQBYABBSAkQBaAoANA/QAEAWgKAPQgKA3hmAmQhmAmiMAAQiHAAhlgkg");
	this.shape_3.setTransform(22.9,15.2,0.292,0.292);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDF4F4").s().p("AgUBQQj6AAizguQizgugIhEIT5AAQgIBEi5AuQi5AukDAAg");
	this.shape_4.setTransform(22.6,5.1,0.292,0.292);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A03524").s().p("ACGDZIiKAJIAAgUIgFgBQhZAAhQAQQhMAQg4AbQhsg4hSheQhLhVguhoQgnhYgShpIAqAAQAFAoBIAkQBGAiB3AWIAJgXQArASBDAGQBjAIBtADQD1AECigkIAFAMQBmgXA7ggQA8ggAEglIBVAAQgRBognBZQguBmhMBXQhVBjhzA4QhDgjhkgRg");
	this.shape_5.setTransform(22.6,10.6,0.292,0.292);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ED6464").s().p("AkxgDQA4gbBMgPQBQgQBZAAQBbAABTARQBQARA4AcQiQBHiegLQgTABgVAAQiLAAiChBg");
	this.shape_6.setTransform(22.4,18.5,0.292,0.292);

	// Capa 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#E39461","#F6AB78","#F6AB78","#E39461"],[0.012,0.224,0.69,0.992],21.4,17,-20.5,-15.8).s().p("AiBAdQgFgCgcgTQgcgSgEgEQBDAaB/gFQCKgFA5gsQgLATgRAOIgTANQgjAbhkAJQgdADgZAAQg5AAgfgOg");
	this.shape_7.setTransform(24,17,0.81,1.473,1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#DE8F5E","#E19462","#EAA36D","#F7B87D"],[0.459,0.62,0.816,1],-1.8,-16,1.7,8.8).s().p("AhGAdQgngNgQgbQADACB6gIQB+gJgBgEQACAMgNAOQgMAMgVAJQgeAKgtADIgeABQgXAAgXgCgAh9gLIAAAAIAAAAgAB9geIAAAAIAAAAg");
	this.shape_8.setTransform(23.7,21.8,0.811,1.473,1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#E39461","#E99967","#F1A070","#E39461"],[0.012,0.169,0.478,0.992],-26.3,-19.8,22.3,22.7).s().p("AiwAeIAXgEIgTAGIgEgCgAilgBQBEgXBLgFQBHgFBDALQBKANgBAVIgFALQgTgIgGgBQiBgGgeAAQhVACheATQgZgRAngMg");
	this.shape_9.setTransform(22.1,2.1);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1.1,44.9,27.5);


(lib.Símbolo10 = function() {
	this.initialize();

	// personaje
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A2E12").s().p("Ap0irQATghAQgVQLOBxHlh6IAUBtIk1DTQizB1hXAfQmYixkTjkg");
	this.shape.setTransform(191.9,459.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A2E12").s().p("AiqRkQiAgeg+hDQAKgOANg4QAShNACiVQABhcgHijQgHikghkuQgikxgGiFQgLjpAgigQAmi/BqiBQBtB7DBB4QBvBFDoCEQgBABiaNcQigNyglBdQgjADghAAQhPAAhOgSg");
	this.shape_1.setTransform(157.6,549.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A2E12").s().p("Ai8SxQhwgQhNgxQAljxA6qlIA3qqQASjqAmijQAzjUBfiFIGTBbQgRAxiOQEQiUQtAFCXQhYAZhZAAQgsAAgrgGg");
	this.shape_2.setTransform(126.6,768.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#241A08").s().p("Ak1RGQgygBgHgCQAdhRBwtrQB3ungCklQDcAhDxgXIAOChQgsA5hBA9Qg7A2gRAGQALgDjUN+IjiOxQgLACgjAAIgSAAg");
	this.shape_3.setTransform(183.6,561.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3A2E12").s().p("AhlTKQg6gWg7gqQgzgkgcghQAJg4gatVQgatfgSgoQBthcBxhjQDfjDBhhiQBBgSA9gYQA4CcgJEtQgHDvgzGBIhjKtQg8GbgSDrQguBPhTAAQgqAAg0gUg");
	this.shape_4.setTransform(226.3,557.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3A2E12").s().p("AgKTJQiagFhsglQAGiCADlhQACnWAEitQAQtIBVkPQBiAuCKg/QB/g6BDhgQg9HRgVNHQgRKJALHYQgnAah2AAIgngBg");
	this.shape_5.setTransform(215.8,755.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#6D1F0D","#841B0D"],[0,1],-18.1,0.4,17.7,-0.4).s().p("AAdFMQg5gWg1gtQgvgpgXgoQgcgwAAg5QAFhSADhaQAGiygHhJIAHACQgHAzAXCzQAZC9AaAXQAhAeBpADQBkADAJgOQAFgIgIg5IgOhpQAFACARA/QAUBMAGBDQABAggOA4QgQBDgXASQgQAMgZAAQgZAAghgNg");
	this.shape_6.setTransform(115.4,915.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E89658").s().p("Ag1H2QgvgIgkjMQgeiuADhwQATgjAIgTQAOgiAEglQAMiGgWjeQBcgPB5gMQgHCFAOCVQAQCtAAAcQABBTAEAyQAGBOARBKIAVBSQANBFgLBMQguAJhKAEIguABQgfAAgPgDg");
	this.shape_7.setTransform(115.1,884.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#6D1F0D","#841B0D"],[0,1],-33.4,0,33.4,0).s().p("ACjFSQiDgJhUgyQgugagShOQgZhvgZgsQgeg1gsgvQghgkg4gsQgOg3Aeg6QAXguAegUQAWB/BXCrQBfC3BIAbQAtARBGgHQA+gHAKgNQAGgHgTgcQgZgigLgRQAEACAiAiQAnAoAhAmQBhB0gmATQggAShJAAQgZAAgegCg");
	this.shape_8.setTransform(230.2,901.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E89658").s().p("ABYHoQhngZiCjMQgvhJgkhLQgghDgCgUQgDgXAggwQAjg2AEgeQAQiDgSjUQBwgOB0gHQggFxAlCPQAaBkB2DjQAUARAWAdIAoA0QgcA2hNAAQgfAAgngIg");
	this.shape_9.setTransform(227.2,874.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6D1F0D").s().p("AALCcQgNgIgIgIQABhrgFgkQgJhCgmhfQACgBAUABQAUABABgCQAZAnAbApQAYAlAEAJQgPAUAICoQABAEgHAGQgHAHgHgBQgLgCgNgHg");
	this.shape_10.setTransform(203.4,901.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#602913","#6A311B","#854731","#A15E47","#A15E47","#602913"],[0.133,0.208,0.329,0.435,0.557,0.843],-11,57.9,3.1,-65).s().p("Ah6J1Qh7iEgxhyQg0h7B6l8QAxiaA4h7QA6h+AlgdQDljGBqgHQiqB7hmDNQhbC4gdDoQgbDRAdDUQAcDLBFCTQgugdhehkg");
	this.shape_11.setTransform(130.5,126.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#602913","#6A311B","#854731","#A15E47","#A15E47","#602913"],[0.169,0.235,0.341,0.435,0.557,0.843],-3.9,89.2,7.8,-78.3).s().p("AA4krQgBh+gwh/QAQAJAkBfQAqBrAcB8QBSFehUDFQgYA5hsBKQhTA5hRAjQDjkxgCojg");
	this.shape_12.setTransform(211.8,151.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#602913","#844634","#420F0B"],[0,0.408,0.941],22.8,46.9,-17.8,-44).s().p("AB9BtQg0g7hshXQhuhZgignQg+hEACg/QC+gfCPDTQA9BZAnBxQAlBtAJBqQgfhjhUhdg");
	this.shape_13.setTransform(206.5,83);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#4C1A0E","#552110","#5E2712","#602913","#420F0B"],[0,0.106,0.286,0.592,0.933],-13,56,32.3,-77.7).s().p("AiYMnQhIgwg4g4QgygzgJgbQhKjnA3mDQAzlYBki5QBainB6hiQCUh2C/gOQATBMAUBiQjmBoh4EBQhmDhgDEmQgCEPBODgQBQDjB7A8QgXADgXAAQiTAAimhxg");
	this.shape_14.setTransform(130.4,125.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#4C1A0E","#521E0F","#5D2612","#602913","#420F0B"],[0,0.082,0.322,0.592,0.933],12.4,100.1,-7.1,-73.5).s().p("ABIG0QBSj5gBjzQgBiPgohPQgdg5hMg7QhxhYgfgfQhdhbhJiNQgFgZgRg8QgRg5gHgkQETAOCkCpQBwBzBDDDQBgEagSFKQgPEKhHClQg6CJhtBMQh7BXjCALQDDizBkk1g");
	this.shape_15.setTransform(200.3,125.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EB965C").s().p("AgDAeQgKgJAAgQQAAgIAGgOQAFgOAGgIQgJAaACARQAAAJAHALIAGAHQAEAFAAADQgNgDgEgGg");
	this.shape_16.setTransform(164.3,129.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C97A42").s().p("AgOAAIgQgCQACgCARgCQAOgDACABQAMACAPALIgGAEQgSgHgWgCg");
	this.shape_17.setTransform(168.8,132.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EB965C").s().p("AgRCKQAYgWgCgUQgHgjgGglQgMhHAHg/IA7gvQg1A0AJBqQADAcAJAuQAHAjgBAHQgDAMgbAPQgUAKgPAEQAPgIANgMg");
	this.shape_18.setTransform(178,119.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#F7B073","#F8B47B","#FCCBA3","#FED9BC","#FFDEC5"],[0.012,0.082,0.486,0.804,1],-8.9,-5.4,32.5,16.2).s().p("AgPCGQghgDgIgGQgQgLAChIQADhHARglQANgcAtgYQAvgYAQALQgQAKgTAOQgkAdAAAbQAABAAAASQADAvAMA0QABAGgQAAIgPgCg");
	this.shape_19.setTransform(175.4,116.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EB965C").s().p("AgFAcIAFgHQADgNgBgHQgCgQgKgTQAHAFAFAMQAHALACAHQAEAXgWALQgBgDADgEg");
	this.shape_20.setTransform(179.9,129.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#F29166","#F6A870","#F7B073"],[0,0.78,1],11.1,-13.3,0,11.1,-13.3,32.2).s().p("AgXEXQhSgDgviBQgnhrAFhoQACgiAZgvQAdg1AqgjQBuhdCABiQA3ArgbCbQgXCDgtBJQgdAvgaAYQgkAigmAAIgEAAg");
	this.shape_21.setTransform(198.4,124.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#F29166","#F49B6A","#F7B073"],[0,0.427,1],-10.6,-9.7,0,-10.6,-9.7,35.3).s().p("AhAEeQgZgDgggTQgdgSgUgVQg6g8gGiWQgGiYA8hCQBxh/CWBGQA7AbArAxQAqAvAGAoQALBMgyBdQgiBAg0A5QgMAOgSARQhEA+g+AAIgMAAg");
	this.shape_22.setTransform(144.9,116.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F7B073").s().p("Ah/KwQgcgNg6gtQhUhAhAhOQjDjuA7kHQBSlwAbhDQAbhDCWhqQBMg1BJgpQAvAOBdBCQBgBCBgBVQDwDVACBnQACBRgWBmQgOA/gkCYQgeCRhvB7Qg8BChwBRQhhBHhCAAQgfAAg+gcg");
	this.shape_23.setTransform(171.4,105.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C97A42").s().p("AiELBQgagMhAg2QhXhIhAhUQjEj/BdjyQArhwCOkPQCtlJAyABQBEABBkBBQBdA7BgBfQBdBcA8BaQA/BfACA3QACBRgXBjIgyDVQgeCThuB+QhCBLhqBNQhjBJhAAHIgMABQgjAAgugVg");
	this.shape_24.setTransform(172,106.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F76841").s().p("An3D3QgHhuAvhxQAshoA6gnQANgLC3geIEsgwQAegGBQgVQBhgbAkgSIAPgIQAlAkAjB3QAaBWANBLQh0AyjZBCQjXBCjHAwIghAHQhSAXgoAAIgBABQg/AAgpgqg");
	this.shape_25.setTransform(177.9,329.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9E2F1D").s().p("An3D+QALguAGhDQAHhIAGgaQAVhoBrhcQE/ggChgdQAhgGBNgVQBhgbAjgTIAQgIQAaAmAmB4QAeBdARBJQh0AyjaBFQjWBDjHAxIghAIQhTAXgnABIgBAAQg/AAgpgqg");
	this.shape_26.setTransform(178,329.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#E89358","#F7B073"],[0,0.867],-2.7,8.8,0.9,-3.8).s().p("AAqAtQgHgHgIgDIhBgZQgvgRgRgQQgGgGgGgPQgGgQAHACIBNAVQBEAUARAGQAQAHA1AsQgkAEgcAPIgMgOg");
	this.shape_27.setTransform(154.4,310.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C97A42").s().p("AAOAlIgsgTQhTgfgFgzQAlALBWAVQBMAXAmAqQgMADgYALQgYALgLAHQgIgQgagMg");
	this.shape_28.setTransform(153.9,310.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#E89358","#F7B073"],[0.298,0.722],-3.2,17.2,2.3,-12.2).s().p("ACAAmQgTgJgZgIIgvgOQgRgFg4gKQg/gNgdgHQgUgFgTgPQgTgQACgLQAAgCAwAFIBKAKIA0AIQAWAEAbAIQAmALAtAnQAZAWAnAtIgIABQgcgcgWgKg");
	this.shape_29.setTransform(147.2,307.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C97A42").s().p("ACxBJQgbgXgjgOQgbgLgrgKQhfgPgygLQhZgYgBgqQBCACAuAIQA2AJAtASQBjAoBHBMIgKACg");
	this.shape_30.setTransform(147.2,306.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#F7B073","#ED9D61","#E89358"],[0.369,0.725,1],3.7,-4.7,-9.2,11.7).s().p("ACeA4QgYgigUgHQgVgJgWgGQgmgKhZgPIgrgGQgigFgIgDQgXgLgLgJQgPgNAAgRQAFABBPALQBSAMAYAGQAzAMAcAPQAXAOAfAkIA6BIQgKgCgXggg");
	this.shape_31.setTransform(142.2,301.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C97A42").s().p("ACYA8QgggfgUgHQgVgHg/gPQg+gRgKgCIgpgFQghgEgIgDQg5gbAEgiIBqAQQA5AJAkAJQAsALAgATQAXANAeAkIA4BIQgJgCgggfg");
	this.shape_32.setTransform(141.9,301.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#E89358","#F7B073"],[0.133,0.569],-23,24.7,12.1,-12.6).s().p("ABDA9Qg2gegNgJIhXg8QgcgWABgYQABgGACgDQACgDA3AhIBLAwQApAXATASQAfAfADAlQgHgLgpgWg");
	this.shape_33.setTransform(140,292.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C97A42").s().p("AA8A5IhBgjQgRgIgzgjQgVgPgLgVQgLgXAHgUQBRArAjAaQAxAgAxA0IAFAXQADATAAAGQABgOg2geg");
	this.shape_34.setTransform(139.6,292.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F76841").s().p("AgRIwQhLirhIjnQhKjxgkjGQgojeAYhkQANg2BXgzQBlg8B/ACQAAA0AQBwQAgDdAJBLQAuDGBSESQAqCLAjBpQgmA8hKBtQg6BggXBdQgvgdhNizg");
	this.shape_35.setTransform(118.7,280);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FCF7DB").s().p("AhNAaQgchVgOg9QAfgMAvgPIA0gRQAqAvAcBHQATAvATBTIg/AeQg3AbgnAXQgMg7gbhPg");
	this.shape_36.setTransform(227.3,315.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CFB885").s().p("AhIAIQgWhJgfg9QA9gXBVgaQBRBYAYCtQgtAXhwBDQgThhgWhHg");
	this.shape_37.setTransform(226.6,315.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#E89358","#F7B073"],[0,0.635],15.8,-11.2,-12.8,4.3).s().p("AhjAIQgig4AIgEQAKgFAkgMIArgOQAlgIAsAVQAuAWAlAvQiNAzgjAkQgVgcgegyg");
	this.shape_38.setTransform(237.4,306);

	this.instance = new lib.Path_26();
	this.instance.setTransform(240.4,336.3,1,1,0,0,0,41.1,8.7);
	this.instance.alpha = 0.43;

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F76841").s().p("AiWDAQkhgagFgPQgDgLC9iFQC/iEACgHICXg5QBYgbBIAJQBJAJA6AtQAvAkAMAhQAMAlgFAsQgFAlgbAoQgYAlgmAgQgVASghATQgkAUgUAEQgiAGg+AAQhqAAi7gSg");
	this.shape_39.setTransform(241.5,324.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#9E2F1D").s().p("AiHAFQAzgxBUgNQAjgFA4AXQA1AVAcAZQgrgNiEARQiGAUgiAcQAKgcAagag");
	this.shape_40.setTransform(254.1,307.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FCF7DB").s().p("AhQAMQgTi1hAiUQAdAGA6AkQAmAYAYATIBaCPQBKByAOAkQg4gcgYgKQg6gXgUAJQgtAbgQBuQgJA9gIBvQAGixgOiBg");
	this.shape_41.setTransform(202.9,226.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FCF7DB").s().p("AByCkQh+h5gzgDQgbACg3A3QgvAvgeArQgLgigliyQgmi4gKglQACgGAxgwQA2g1AagNQA5B8CNDGQCIC5CsDFQAAACgFAMIgFAPQh6iGhJhFg");
	this.shape_42.setTransform(165.8,226.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CFB885").s().p("AhMAiQgXjOhSikIAMgIQAnAUBIAxQA2AlARAQQAMAVBNB9QBDBrANAjQgogcgygKQgrgKgdAIQgoAbgNCBIgIBhQgFAygHAQQgKjEgNhzg");
	this.shape_43.setTransform(201.1,225.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CFB885").s().p("ACIDHQiIh8g0gFQggAJgpAfQgwAlglA0IhvmvQATgnA5gwQAvgpAbgKQBECZB+DEQCKDRChC3QhxhphJhDg");
	this.shape_44.setTransform(164.6,225.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BC452A").s().p("ABHFnQjmjvgjgTQg6iBg8lCQg6k0AUgIQCxEnAlBAQCUD+BOCUQBqDQAlBNQBLCcAwCDQg2hHjnjtg");
	this.shape_45.setTransform(182.9,266.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#8E180C").s().p("AA4FnQjsjmgmgaQg1iJgyk/QgwkxATgIQCyEnAlBAQCUD+BNCUQBqDQAlBNQBLCcAwCDQgzhDj5jxg");
	this.shape_46.setTransform(182.8,266.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#3A2E12").s().p("AgGAZQgdgKAMgYQALgYAUAJQAXAJgFAWQgEAUgRAAQgFAAgGgCg");
	this.shape_47.setTransform(208.2,334.9);

	this.instance_1 = new lib.Path_36();
	this.instance_1.setTransform(159.7,341,1,1,0,0,0,51.1,99.4);
	this.instance_1.alpha = 0.43;

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F76841").s().p("ABTSzQjhgji/huQAshtCQipQBIhUAYghQAtg8AKgtQAHgWgNhFQgShohBhkIjYlLQiukdgciBQgMg9AWkrQAWkxAYgPQAogDA4gPQA5gPA6gXIDUFjQCTD8BMCVQBrDRAmBOQBLCeAxCDQAGCsAQFtQAOFMABDeQhrAOhnAAQhtAAhpgQg");
	this.shape_48.setTransform(165,322.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#9E2F1D").s().p("AByS6QkOgnjAhuQAphlBfiqQBSiSAThFQARgoACg1QAGhrhBhjQiHjRhBhwQidkWgbicQgKg8CKlKQCMlPA3gWQCxEnAjBAQCWD+BOCWQAyBjBoC8QBYCnAtB5IASIOQAIE5gID9QhbAXhzAAQhiAAhzgRg");
	this.shape_49.setTransform(162.3,322.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#BC452A").s().p("AglHwIAgieQAgi9gOh/QgMhwhPjhQhWjsgQhmQATAACRDzQCZEFArCKQAEA5hfD0QhQDNhKCfQAIg+AUhgg");
	this.shape_50.setTransform(215.3,268.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#8E180C").s().p("AgtHqIAgieQAgi9gOh/QgKhvhXjcQhbjlgPhmQAngDCaD4QCZD5AzCYQgmBphBCiQhnEHhCB2QAIg+AUhgg");
	this.shape_51.setTransform(216.1,269.1);

	this.instance_2 = new lib.Path_41();
	this.instance_2.setTransform(232.1,297.9,1,1,0,0,0,18.3,20.2);
	this.instance_2.alpha = 0.43;

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F76841").s().p("AidJmQhNnkAEAKQAIhCAThgIAhilQAmjGgPiCQgMh0g+jgQhCjygPhiQB7gCBwASQAGANgGAgIgNBIQgPBxAvBnQAzAsBXCbQBUCUAOBFQAQBLgrBSQgVAqgcApQgMA6gjCdQgbB4gLBBQgbC6ArB6QANAkBsDGQBsDHAfBTQg3A2hpAsQhcAnhtAZQgUhZhPntg");
	this.shape_52.setTransform(231.5,322.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F2E6BF").s().p("AjckFQD9gUC8g5QACDsgKDKQgJDDgPAsIgCAAQg4AAlfpYg");
	this.shape_53.setTransform(201.1,325.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FCF7DB").s().p("Ag/STQBIjagfkRQgbjUhplAQhNjqjJptQh9mDgKgWQA5gOA/gaQBOghAVgHQCVDGA+BRQB4CbCFChQgCjAgHhdQgNingkh3IBiAMQBSAKAhgDQAwBEAmFuQAiE6AXHsQAZIOCBHdQimBjjBAHIgYABQheAAiagag");
	this.shape_54.setTransform(184.5,319);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#F7B073","#E89358"],[0.733,0.957],10.2,61,-8.5,-85).s().p("AndnCQAxACA7gjQAzgfAmgrQA2hegjicQgYhwg6hsQgSghBJgHQBAgHBpAOQBmAOBEAYQBOAagKAZQgvBtgPAuQgbBNAAAzQAAB4CeAuIA9AWQA8ARA0gFQBmCSANKeQAFD7gKDkQgKDYgPAvIgEABQhggBs33wg");
	this.shape_55.setTransform(175.4,252.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C97A42").s().p("AjUEWQguh3gZhMQAmgKAOgQQA3hdgZihQgUiBg0hgQgSghBIgLQA/gKBnAJQBjAJBGAVQBNAWgLAZQhOC4AOBiQARBxCQANQAIB4gHEqQi9AejlAGIhKjCg");
	this.shape_56.setTransform(168.1,196.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3A2E12").s().p("Ap2isQASgeARgYQLRByHmh6QANBHAGAmIk1DTQizB1hYAgQmXixkWjmg");
	this.shape_57.setTransform(193.2,451.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#4C1A0E","#420F0B"],[0,0.933],-15.4,185,3.4,-23.2).s().p("AAMP+Qkvhmigh0Qimh3g2ilQg0ifAqjxQAkjSB9lgQBYj2EKjIQBbhFBcgwQBNgoAXgCQCGAVCmCYQCkCXBCCgQAyB4ADEfQAEE2g8EUQhHFJiOCeQh1CDicAAQhFAAhNgag");
	this.shape_58.setTransform(153.3,138.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#9E2F1D").s().p("AiKAhQgXlqgbhaQAQgUA+AcQA7AaAtAqQAgA7BGB0QA8BrAcBoQAWBRhSBzIg/BSQggApgGATQhfAegsARQgKjSgMi5g");
	this.shape_59.setTransform(233.8,276);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F76841").s().p("ADvKtQgxgFgeglQg+hNhgjUQhWjMgGgMQgWgvhRiBQhZiSgqhPQiakiA2iEICnADQChAMA0AqQAgAaAhBXQBRDNByFPQBkEKB7CTQACBQggA9QgcA3gxAdQgmAXgoAAIgPgBg");
	this.shape_60.setTransform(240.6,270.8);

	this.addChild(this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.instance_2,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.instance_1,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.instance,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(83.2,33.1,202.9,917);


(lib.ojoshombre = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.ojoshombreabiertos();
	this.instance.setTransform(32.8,7.7,1,1,0,0,0,32.8,7.7);

	this.instance_1 = new lib.hojoshombrecerrados();
	this.instance_1.setTransform(32.8,7.7,1,1,0,0,0,32.8,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},92).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},153).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},171).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(89));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},92).wait(2).to({_off:false},0).to({_off:true},153).wait(2).to({_off:false},0).to({_off:true},171).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).wait(89));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65.5,15.5);


(lib.ojos_abiertos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.ojosmujer();
	this.instance.setTransform(30.6,8.9,1,1,0,0,0,36.7,9.5);

	this.ojos_cerrados = new lib.ojos_cerrados();
	this.ojos_cerrados.setTransform(36.9,9.9,0.985,0.985,0.2,0,0,36.5,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.ojos_cerrados}]},40).to({state:[{t:this.instance}]},2).wait(155));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-0.6,73.4,18.9);


(lib.cuerpoh = function() {
	this.initialize();

	// personaje
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#542E0F","#552F10","#704829","#7A5233"],[0.075,0.082,0.443,0.655],-103.1,0,63.7,0).s().p("AjnCJQgygjgNggQgNgfANgxQAZgWA/gXIAhAQQAjAPAQAAQgkghgegjQAogjAqgNQAxgPApATQAZANAxAoQA1ArAEATQAIABAIgDQAJgEAEgHQAGgKgWgwQgXgxgTgEIA+AKQAjAFAZAIQA1ArAaBJQAYBBgQAhQgYAWi7AVQhnAMhRAAQhMAAg3gKg");
	this.shape.setTransform(153.8,23.8,0.926,0.926,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#542E0F").s().p("AlICPQg5gogRgJQgCgVAFgcQAEgRAKgkQBThNB1gpQCeg4BdBNQgLgQgegUQgbgUghgNQBYgdClApQCVAmAlAnQgNCxgRA5QgTARjkAKQifAIjnADIhBgsg");
	this.shape_1.setTransform(153.9,23,0.926,0.926,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#542E0F").s().p("AgqFyQgUglgRgsQgYlbgBghQgEiDAVgkQAWglA8gzQA9g1AxgUQgDApABA1IACBdQgnAFgeAlQgYAcgIAfQgXBmAFDOQADBsAHCHQgOgGgYgsg");
	this.shape_2.setTransform(189.9,60.7,0.926,0.926,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#542E0F").s().p("AApC9QgCjKgchvQgHgdgNgbQgVgngXgDQABhMg/iEQA/ASBHBQQA9BCAWA0QANAaABBsQACCUgXDwQgFAXgUArQgTAogOASQAFiIgBhrg");
	this.shape_3.setTransform(110.9,59.2,0.926,0.926,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B3774C").s().p("AgDgFQAIgEAKACIAIACQgNADgMADIgTAHQAEgIAOgFg");
	this.shape_4.setTransform(142.6,107.4,0.926,0.926,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DE8F5E").s().p("AgRAlQAAgBAIgEQAJgGABgJQAFgNgNgoIAPAZQALARgBALQgBAFgQAIQgMAHgFAAIgBAAg");
	this.shape_5.setTransform(140.4,105,0.926,0.926,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B3774C").s().p("AAAAAIgXgFIAJgCQAKgCAIAEQAPAEAFAJQgKgFgOgDg");
	this.shape_6.setTransform(153.7,107.9,0.926,0.926,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DE8F5E").s().p("AAAAfQgQgIgBgEQgDgMANgTQAHgPAIgJQgMAuAEAJQADAIAIAFIAHAEIgBABQgGAAgLgGg");
	this.shape_7.setTransform(156.7,104.8,0.926,0.926,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#F7B87D","#FFF0CF"],[0.267,1],-1.1,-38.4,1.2,54.3).s().p("AgeByQgNgRACgNQAKhHADgoQAGhMgPgeIBCAAQgQAfAIBFQAEAlARBRQACAMgNASQgOATgRAAQgPAAgPgUg");
	this.shape_8.setTransform(148.6,93.3,0.926,0.926,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#F7B87D","#F1AE75","#E19361","#DE8F5E"],[0.012,0.173,0.447,0.486],-31.1,25.5,57,-46.9).s().p("AgvD2QAfhwAMgVQA0h6AdjMIAUi1QAFCYgLC3QgPDmghA5QgIAOgqAyQgpAxgyA2QATgkAghxg");
	this.shape_9.setTransform(115,98.5,0.926,0.926,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#F7B87D","#DE8F5E"],[0.012,0.545],11.1,35.6,-35.7,-70.6).s().p("Ag3CUQgri7gSkoQASBwBxEyQAWBUAgBCQApBWAHARQihiOgLgug");
	this.shape_10.setTransform(182.1,105.5,0.926,0.926,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#F0A871","#F7B87D"],[0.51,0.682],-2.3,-26.4,2.3,25.4).s().p("Ag8B9QhPgWghg8QgFgpAEgbQAFgoAYgdQAeglBugDQAigBAlADQAgACACACQAWAXAaAzQAcA0gBAVQAAAYghAkQgdAegaAOQgoAMgoAAQghAAgjgKg");
	this.shape_11.setTransform(168.9,76.7,0.926,0.926,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#F7B87D","#F0A871"],[0.318,0.855],-12,15.3,11.9,-16.4).s().p("AAIA3IhxAEQgMgLgYguQgYguACgOQAsAEB3ADQB9ACAogDQgEAqgnBFQgugFhEABg");
	this.shape_12.setTransform(148.1,126.9,0.926,0.926,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#F0A871","#F7B87D"],[0.514,0.682],-15.5,20.2,15.7,-21.2).s().p("AhNB9QgcgQgegcQglgjAAgYQgBgWAYg2QAYg3AUgWQACgCAhgBQAmgCAkACQBxAHAeAkQAXAdADAhQACASgGAsQgiA+hHAaQgmAPgkAAQghAAgigLg");
	this.shape_13.setTransform(129.1,76.4,0.926,0.926,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DE8F5E").s().p("AgZAAIgLgJQAaANAQgDQAHgBAYgLQgVAXgPAAQgNAAgNgMg");
	this.shape_14.setTransform(148.1,109.1,0.926,0.926,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#F7AB77","#F7B87D"],[0,0.89],4,-1.3,0,4,-1.3,22.7).s().p("AhzDKQgzgegcg4Qgbg4AGg9QAHhFAtg5QAsg4BCgaQBAgaBEALQAoAHAiAbQAgAaAUAoQAHANAFAQIgUBzQgRBjgDALQggApgsAaQgvAagzAFIgUABQg0AAgugbg");
	this.shape_15.setTransform(127.9,100.7,0.926,0.926,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#F7AB77","#F7B87D"],[0,0.89],-3.1,-0.4,0,-3.1,-0.4,22.7).s().p("AgFDfQg1gEgvgaQgtgZgggpQgni7AAgRQAGgUALgVQAWgoAhgaQAigbAqgIQBEgMBBAZQBDAYArA2QAuA4AFBCQAGA8geA4QgcA3g1AeQgwAdg4AAIgRgBg");
	this.shape_16.setTransform(169.9,98.8,0.926,0.926,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#F7B87D","#F7B87D","#EA9966"],[0.286,0.725,1],0,83.9,0,-68.7).s().p("AhsKZQg8glhrhgQh5htgKgrQgjibgTjnQgPi/AEhFQAJiMAKgvQARhVAtguQA0g0BqgVQBwgWDAAIQEHAKBIBiQAgArANBNQAGAiALCEQAJBsgLDeQgOEMglA/QgUAihXBhQhkBxg3AlQhCAIhTABIgZAAQhIAAgQgJg");
	this.shape_17.setTransform(149.5,84.1,0.926,0.926,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C4784F").s().p("Ah1KrQgsgTh3h3Qh3h2gHgeQgkiOgWjvQgSjGAEhEQAJiAAOg4QAVhSAygwQBshlFvgXQDKgNBcB5QBMBjARDWQAGBLgUDEQgUDHggCmQgFAbhgB2QhoCBg+AmQg6AIhYACIgSAAQhPAAgTgIg");
	this.shape_18.setTransform(148.7,84.4,0.926,0.926,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#E09663","#E69E69","#F5B47A","#F7B87D"],[0.475,0.663,0.961,1],2.5,23.2,-7.9,-12.1).s().p("AgmBgIgEgnQgEgxAIghQADgMASghQAUgmAKgCQANgCAIAIQAMALgCAcQgQgdgbAoQgaApgIBEQgEAeACAaIgDgPg");
	this.shape_19.setTransform(101.4,92.8,0.926,0.926,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#F7B87D","#DE8F5E"],[0,1],-6,2.4,2.4,-1.8).s().p("AgYA3QgHgFAMgyQANgyAGgDQAIgCAJAFQAKAFAAAJQABAZgSAfQgEAGgNAPQgOAOgCAAIgBAAg");
	this.shape_20.setTransform(102.4,92.8,0.926,0.926,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#EA9966","#F7B87D"],[0,0.667],-14.9,5.4,7.9,-3.6).s().p("Ag5CNQgOgegFg0QgLh8AthFQAYgkAsAHQAvAIAEAsQAGA6gTA+QgPAygcAuQgaAvgQAKQgFADgEAAQgPAAgMgYg");
	this.shape_21.setTransform(103.5,92.3,0.926,0.926,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#E09663","#E69E69","#F5B47A","#F7B87D"],[0.475,0.663,0.961,1],-2.5,-12.1,8,23.4).s().p("AAmA3QgJhDgdgpQgdgpgSAdQgDgcAOgLQAJgIAOACQALACAVAmQAVAhADAMQAIAhgEAyQgCAegFAXQABgagDgeg");
	this.shape_22.setTransform(197.2,94.8,0.926,0.926,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#F7B87D","#DE8F5E"],[0,1],6.6,-1.2,-2.7,1.8).s().p("AAJApQgPgOgFgHQgSgcAAgcQABgJAKgFQAKgFAIACQAIADANAyQAOAygIAFIgBAAQgCAAgPgOg");
	this.shape_23.setTransform(196.1,94.8,0.926,0.926,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#EA9966","#F7B87D"],[0,0.667],15.5,-4.2,-8.1,6).s().p("AAYCiQgHgEgNgOQgMgRgOgWQgfgugQgyQgUg9AGg6QAFgtAygHQAxgIAZAkQAxBFgMB8QgFA0gQAeQgMAYgQAAQgFAAgFgDg");
	this.shape_24.setTransform(194.9,94.3,0.926,0.926,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#404041").s().p("AAaIDQiCkChbi/QiulngkioQBkguBngJQBkgICAAYQCDDtCIEiQB1D9gEAHQhLBniCBLQhgA2g1AAQgPAAgLgEg");
	this.shape_25.setTransform(212.5,346.2,0.926,0.926,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EDEDED").s().p("AisBvQgohMgLgaQAtgMB+hmQB8hmADgYQASATA6BeIBJB2QgkA6hNA9QhqBWh1AbIg8h5g");
	this.shape_26.setTransform(192.1,381.3,0.926,0.926,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#404041").s().p("AhMKPQhKgGh9ggQAThoBKn5QA/mtA3jqQAdARAtArQBAA6A0BFQCZDIgDDPQg7CbgfDUQgSB1gcDUQhcAVhQAAQgWAAgWgBg");
	this.shape_27.setTransform(224.6,246.2,0.926,0.926,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AgaAaQgZgdAZgXQAZgXAbAOQgSgCgIAJQgIAIAAAOQAAAWAOALQASALAPgbQgHAYgWAFIgJABQgPAAgMgPg");
	this.shape_28.setTransform(94.5,355.9,0.926,0.926,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("AgaAaQgZgdAZgXQAZgXAbANQgSgBgIAJQgIAIAAAOQAAAWAOALQASALAPgbQgHAYgWAFIgJACQgPAAgMgQg");
	this.shape_29.setTransform(98.2,312.5,0.926,0.926,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#323233").s().p("AgzkQQgbj+halTQB3ATBYAWQAIAOA8CaQA8CbACALQgRAcg+BIQgxA7gWAXQAGAHBFA+QA5AzAPAVQglDsgzDwQhOF6hPCzQBQp4g0n6g");
	this.shape_30.setTransform(99.3,232.2,0.926,0.926,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#282829").s().p("Ag6kCQgQicghiRQgPhCgpiVQAUAEA8AJQA8AIAkAJQAJADA8CMIBRC9QACAIg+BLQg5BFgVAUIBBA/QAsAsAQAXQgiDQguDCQhGEuhTC1QBEpjgrmmg");
	this.shape_31.setTransform(97.6,225.3,0.926,0.926,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#282829","#2E2E2F","#3D3D3E","#404041"],[0.067,0.447,0.933,1],208.9,-85.3,-149.2,64.2).s().p("AhagJICqgiQADAWAHAcIimAlg");
	this.shape_32.setTransform(63.8,347.5,0.926,0.926,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#404041").s().p("AjkRaQghi5gFg1QgTi8gJjcQgGi5gCgQQBSpJgUneQgNlYhAkCQBMAQFyA5QAFABAHAGQAJAHABAIQAOBMgIFwQgBBOgNF5QgOGmA1FoQAgESAqD4QAQBZAuDsQgNAUjzBPIjwBLQgHgtgrjwg");
	this.shape_33.setTransform(75.6,283.9,0.926,0.926,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#282829").s().p("AhkEnQgjjmAAgMIgbjoQgbjjABgIIAeh7QAYhhAEgZQAbACA2AnQA1AnAaADQAeFTAgD1QApE8A4EIQgbAXhKAUQg+AShHAKIg3lsg");
	this.shape_34.setTransform(89.2,351,0.926,0.926,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#282829","#2E2E2F","#3D3D3E","#404041"],[0.067,0.447,0.933,1],-208.1,-29.3,176.4,24.1).s().p("AAAAXQiMgDhmAAQAIgdADgRIHagBIgCA3IjxgFg");
	this.shape_35.setTransform(166.2,354.3,0.926,0.926,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#282829","#333334","#404041"],[0,0.486,0.906],-85.1,-31.5,67.3,24.3).s().p("AgVAzQh0hOhLg/IARhuQAoAjBcBDQBbBFBMBBQAqArAtAsQAKAmAMApQhsg+h+hZg");
	this.shape_36.setTransform(171.6,373.4,0.926,0.926,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#282829","#333334","#404041"],[0.067,0.404,0.69],-75.6,2.4,97.4,-2.7).s().p("ACSMZQheglg2gyQAkj1ADitQACh7iRmrQirnUgsh8QgHgTBtByQB7CCBnCYQFMHegSG8QgCAkgGF4IinhAg");
	this.shape_37.setTransform(189.4,293.1,0.926,0.926,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#323233").s().p("AjQA1IAehLQASgtAGgTQgEAChRgZQhRgZhGgXIhFj9QhDj1gGgPQCohfAagQQA2C6FfJpQFHI9CLC7IrlrZg");
	this.shape_38.setTransform(148.2,229.7,0.926,0.926,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#282829").s().p("AClGjQlqlcglgmQAJgeAUgtQAVgyAGgRQgEABhTgbQhWgbgxgTQgOg/gyjSQg0jWgGgRIBWgyQAhgSAZgFQAZCWF6JlQFIISCqDgIlmlUg");
	this.shape_39.setTransform(147.2,231.8,0.926,0.926,0,0,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#404041").s().p("AGNVZQhxgwh2hdQhJg6hxhwQhxhsgtgjQhPg9g7gCQAhjoAIhBQAUicAChTQgEijhSjxQg9i0hXi0QgvihhPjJQhJi+gOgxQgDgdAAgeQAAgHAGgPQAJgVAQgIQBcguCfhHQCPg/A3gdQAZCUGHJkQFEH5C7DzQgDgDgDCcQgDDEAJDjQgGBJgCDwIgEFOQgSAChQACQhLAChXAAIgjAAg");
	this.shape_40.setTransform(165.7,289.6,0.926,0.926,0,0,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#DBDBDB").s().p("AibA3QgJgQhDh6QAGgeAXg5QAWg2AEgBQAdBBBsBJQByBPCeAyQgmAFgNADQgcAGgTAMQgmAYg7BFQgeAjgVAeQhThPg7hcg");
	this.shape_41.setTransform(157.5,166,0.926,0.926,0,0,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#AFAFAF").s().p("AjGAXQglg7gJgtQgCgLAahGQAbhKAQgJQArBKBfBFQBzBTCpAzQgbAAgmAOQgbAKgUANQgpAbg6BOQgdAngUAhQh8h9g7hig");
	this.shape_42.setTransform(157.4,166.9,0.926,0.926,0,0,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EDEDED").s().p("AgcBcQgRgDgrAAIgpABQBCgmA1hQQAuhMAIhBQAEgCAaAjQAeAmAPAiQAIA/ACA5QADBLgKAoQhFg8hRgTg");
	this.shape_43.setTransform(125.2,161.6,0.926,0.926,0,0,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#AFAFAF").s().p("AgeBgQgYgIghgBQgUgBgnACQBiguAxhmQAohQgHg7QAHAEAvA6QAwA7AAAIIAJB5QAHBzgKAiQhNhJhfgfg");
	this.shape_44.setTransform(125.5,161.9,0.926,0.926,0,0,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#0068AF","#004F91"],[0,1],7.4,-26.9,-6.9,25.6).s().p("AhNAiQgug3AIgMQATgbAZgTIAVgNQAJgGAlgGQAmgHAPAEQAdAHAbADQANACgBALIgHBXIgHBWQgxAVhAAAQgkgkgfgog");
	this.shape_45.setTransform(136.2,179.7,0.926,0.926,0,0,180);

	this.instance = new lib.Path_45();
	this.instance.setTransform(127.7,206.4,0.926,0.926,0,0,180,10.3,17.8);
	this.instance.alpha = 0.34;

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#0068AF","#004F91"],[0,1],-68.6,30.1,33,-14.6).s().p("AgJIAQhzhqgtggQADiKgYnSQgSlgAZggQAbgDAOgEQAcgGAXgOQA3A+BTDhQBoEUAvEiQgIAngSCxQgVCogeAuQgRgYhxhqg");
	this.shape_46.setTransform(118.8,249.2,0.926,0.926,0,0,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#00317D","#004F91"],[0,1],-26.4,0,26.5,0).s().p("AAqJ1Qh9hxgygjQAFh+gSnTQgOlvAaguQhrhrgXgrQgBgCARgaQASgaAAgCIBkgSQAtgJASgIQAjAKAQAKQAKAFAIAOQAEAfgGA/QgDA6gIAeQABgEAbAzQAjBCAkBYQBxEXA/GAQAEBHgXCbQgZCtggAxQgQgYiChyg");
	this.shape_47.setTransform(124.9,239.3,0.926,0.926,0,0,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EDEDED").s().p("AhtP+Qi3gViNhLQgDhiiFqkQiLq/gRjUQA3gtB6hSQBTg4A7glQAdA0CWAvQCJAqBdAAQBmAABEg1QA9gxAYhVQAlAICnAeQCcAjAsAuQA5DhAGKXQABCVgCFIQgCD3AEBAQg9BZiHBCQiEBBinAbQhmARhkAAQhFAAhFgIg");
	this.shape_48.setTransform(139.5,248.2,0.926,0.926,0,0,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#1A1A1A","#272727","#343433"],[0,0.576,1],-25.6,1.7,39.5,-2.7).s().p("AjyC5QgDgbACgQQBLglCHhmQCmh+BMhnQAWAZAOATQh6B/hiBUQiBBziGBTQAAgKgEggg");
	this.shape_49.setTransform(171.2,396.3,0.926,0.926,0,0,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#EA9966","#F7B87D"],[0.224,0.667],-24.6,-23.5,23.2,34.2).s().p("AhoDtQghhDgfhpQgchbADgHQAIgFC5jJQBBBLCBCsQhMBAheBJQhbBIgkAWg");
	this.shape_50.setTransform(182.5,387.2,0.926,0.926,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#DE8F5E").s().p("AhkDuQgchCgyhqQgihGABgGIB7h0QBXhUAYgeQArAwBBBaIBRBuQiAB2i2Bzg");
	this.shape_51.setTransform(183.8,387.6,0.926,0.926,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#404041").s().p("Aj/HOQhvhTgch0QgeiCBhhyQBph2B0ipQBPh0AqhLQACgEANgEQAPgGAJACQCGCIDWBlQiAD8irDWQi/Dwh4AAQgZAAgWgKg");
	this.shape_52.setTransform(-12.2,203,0.926,0.926,0,0,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#282829","#333334","#404041"],[0.067,0.4,0.69],-94,0,48.7,0).s().p("Ah/DmQkPiggKgFQgtiEAriVQAmiHBdhiQAIgJAGAGQCCBfEECVQDbB9AXAIQBPCvgSCXQgSCchwAwQikhGkFibg");
	this.shape_53.setTransform(37.7,204.2,0.926,0.926,0,0,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EDEDED").s().p("AhQBwQiPhlAPgxQAOguAjg6QAig5AXgRQAZA7CABOQBpA/A3APQgGAbggA8QgnBLgwA4Qhcg1hKg0g");
	this.shape_54.setTransform(-31.1,174,0.926,0.926,0,0,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F7B87D").s().p("AhfBdQAVhIAVgxQAGgNAigQQAmgSAGgFQAdgaATgDQAUARgEATQgCAPgTAXQgHAIgnAVQgkASgIAKQgwBNgFAGQgFAFgEAAQgJAAgIgRg");
	this.shape_55.setTransform(-35.9,118.6,0.926,0.926,0,0,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E09663").s().p("AhUAuQAJgeAMgVQALgWAegOQAogUAHgFIAZgQQAUgLAHgBQATAOADAMQACAKgGAdQgFAWgdAVQgkAdgxABQgOALgTAaQgIANgiABIAPgxg");
	this.shape_56.setTransform(-35.8,116.5,0.926,0.926,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#F7B87D","#F3B279","#E7A36D"],[0.51,0.729,1],-15.7,3.1,13.3,-3.3).s().p("AiBBiQgJgFgGgJQgGgMAIgKQAQgVAmgdQAcgUAVgNIA0gqQAfgYAVgLQAHgEAQAGQATAGAGANQASAqAQBGIgigaQgggWgHABQgXAGguAfIhAAvQgRANgNAHQgQAIgMAAQgHAAgFgCg");
	this.shape_57.setTransform(-45.9,118.7,0.926,0.926,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#F7B87D","#F3B279","#E7A36D"],[0.51,0.729,1],-15.9,3.9,14,-2.8).s().p("AiaA+QgBgDACgIQABgIACgBIAjgdQASgNATgNQAsggAZgPQAqgbAWgBQAiAAAqA+QAIANAHAWQAHAXACASIg3gpQgbgRgIADQgHACgyAgQgyAjgTAJQghAOgPACIgHAAQgcAAgKgbg");
	this.shape_58.setTransform(-47.9,127.5,0.926,0.926,0,0,180);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#FFFFFF","#FEF5ED","#FCE2CA","#FAD3AE","#F9C798","#F8BF89","#F7BA80","#F7B87D"],[0,0.055,0.173,0.298,0.435,0.584,0.753,1],-19.9,-14.5,27.1,22.4).s().p("Ah6CCQgmgjAKgpQAGgaAhgWIBNgyQAFgDASgUQANgPANgDQADgBATAmQAQATAYAJQgDgJgRgNQgRgOgFgKQgFgMAEgLQAFgMAMABQAIAAAMALQANAMAHABQAMABAPgDQgCgDgXgNQgRgLgCgJQgDgQAQgOQAQgOAOAKQAKAGAJAKQAKALADAKQALAcgTAkIglA2QgPAWgnAkIgsAuQgZAagZALQgNAFgMAAQgbAAgagXg");
	this.shape_59.setTransform(-49.1,150.5,0.926,0.926,0,0,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#F7B87D","#F3B279","#E7A36D"],[0.51,0.729,1],-10.1,9.8,12.1,-5.7).s().p("ABpBSQgfgIgegUQgHgGgQgRQgTgVADgCIAdgTQgaAEgbAMQgiARgUAFQgdAHgWgQQgUgOAGgHQAJgOAxgeQAOgJAkgLIAmgMQAXgJArAjQAqAhAZAoQABAMgJAXQgKAbgPAAIgDAAg");
	this.shape_60.setTransform(-53.8,137,0.926,0.926,0,0,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E09663").s().p("ABtCrQhHgYgBgCIgFgRQgBgBgKADQgLADgXALQgOAFgXABQgWABgagSQgagRAJgFQgnAKgVgeQgTgbAKgPQAHgKAJgIIAMgJQgTABgMgNQgLgLAEgQQAEgOAggeQAdgcAZgRQAPgKAtgiQAlgcAWgOQAFgDAYADQAdAEAIAOQAJAQAIAZIAKAlIAMAmQAGAXACAQQACATAQA0QABAFARAYQAUAbAFALQAKATgEAQQgDAOgRAbQgCgChAgWg");
	this.shape_61.setTransform(-49.7,126.8,0.926,0.926,0,0,180);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#D9915E","#D78D5B","#CF8252","#C9784A"],[0,0.247,0.475,0.608],-145.4,-44.4,125.4,-101.4).s().p("AAAAIQAkgxAIgYQAQAmgtAqIgbAdQgPAOgUAIQAQgPAfgrg");
	this.shape_62.setTransform(-35.9,145.3,0.926,0.926,0,0,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#E7A36D","#EEAC74","#F7B87D"],[0.4,0.584,0.741],23.2,-10.8,-22.2,14.9).s().p("AhmCmQhogBAqhkQAMgeAfgvQAggxADgIIAYg6QARgeAngGQBmgOAzBHQAZAkAFAnQgKAohyBPQhtBOguAAIAAAAg");
	this.shape_63.setTransform(-45.6,146.9,0.926,0.926,0,0,180);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F7B87D").s().p("Ah6E9QhMgjgoggQAAgYALhWIAOhsQgFggACgrQAFhYAqh3IAKglQAJgiAMgaQAIgTCIBcQCLBcAXAsQALAOAqAaQAgAagbAgQgrBAgxA3QhJBUg5AcQgYAMgHCUQgWAAhJgig");
	this.shape_64.setTransform(-43.5,148.2,0.926,0.926,0,0,180);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E09663").s().p("Ah5EpQh+g+gJgCQABgLARg9QATg+AFgxQgFgTgCgcQgEg2AVhQIAfh5QAMgoAGgUQAIgWAKgUQAMgWC7CVQBeBMBlBVQgBARgMAVQgLATglAsQgKAIgmAvQggAphaBAQgXARgCA3QgBA3AQAkQgPAAh6g9g");
	this.shape_65.setTransform(-42.6,148.7,0.926,0.926,0,0,180);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#F7B87D","#F3B279","#E7A36D"],[0.51,0.729,1],7.7,-7.6,-11.6,14.1).s().p("AhUBxIgnggQAEgHBKhKQAJgHAmg0QAmgyAFgEQAWgSAYgEQAagEAHASQACAHg5BaIhDBmQgCAIgaAYIgeAbIgcgYg");
	this.shape_66.setTransform(-62.5,102.2,0.926,0.926,0,0,180);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E09663").s().p("Ah3BzQgLgxgFgKQAVgQA/hFQA8hHAQgZQALgQAYgPQAfgTAaAEQAIABAHALQAGAMgFAHIgxBDQgNASgYAwIgcA0QgJAQgsAvQgqArgZAWQgGgMgMgug");
	this.shape_67.setTransform(-62.1,104.9,0.926,0.926,0,0,180);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#282829","#404041"],[0.102,1],3.4,-224.8,-9.9,305.5).s().p("EgFuAhVQjggOhCg1IAIhWQAFgxADgIQAfhBADgKQACgIgRgNQgSgOgBgIQgCgRAKiHIANisQAhnZADtLQABsWgZqjQgIjWALiJQAXkjBiiYQCAgHHBgRQHsgTBCACQAhCZi0EhQhABmhIBbQhABPgVAMQgiAXhDAiIhIAkQgSCSg0N6Qg8QVgSKlQgECdgHC5QgKDzgIBHQg6AmiXAAQgqAAgxgDg");
	this.shape_68.setTransform(137.6,549.1,0.926,0.926,0,0,180);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#1A1A1A","#282829","#404041"],[0.035,0.192,1],-110,-54.3,214.2,97).s().p("EgBXAg4QhYgKgSgpQgBgOgIg0QgIgvABgLQABgGAMgnQAKgjABgNQACgBgQgPQgTgSgEgLIg1w8Qg8y7gjoJQgIhdgKmQQgJluAAiSQENgdFugwQAAA2AJElIAPGTQARLUAaNjQAgQ7AQC4QANCGARDSQANCVACAGQgWAbhYAdQhWAchnAOQhGAKg3AAQggAAgdgEg");
	this.shape_69.setTransform(90.1,541.4,0.926,0.926,0,0,180);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#E09663","#F7B378"],[0.141,0.675],-2.1,-28.1,2.7,38.5).s().p("AAIEMQhRgNhYhEQhRg/hEhfQAKheADg0QAEhdgTg9QBdAFC9AMQCjAGBzgXQgDBGANA/QAPBJAoBVQhdD8irAAQgUAAgVgEg");
	this.shape_70.setTransform(145.8,159.3,0.926,0.926,0,0,180);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#1A1A1A","#1E1E1E","#2B2B2B","#414141","#4D4D4D"],[0,0.204,0.424,0.651,0.753],2.3,-81.8,-3.9,113).s().p("AgCC9QgxgBhBgIQgKgCABivQACijAEgcQANADBsAGQBtAFAMgCQAIAZgQClQgQClgKAFQgwAFgmAAIgFAAg");
	this.shape_71.setTransform(170.3,745,0.926,0.926,0,0,180);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#1A1A1A").s().p("AhkEJQgpgEg7g0Qg9g2AAgjQAAgmApiAQAmh8AphlQDYAECJgBIAbDBQARB2AFA1QACAigwA6QgmAtgqAhQgxAGg4AAQg8AAhGgHg");
	this.shape_72.setTransform(171.2,742.2,0.926,0.926,0,0,180);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AAAEwQhYgEgcgHQgdgJg4hAQg8hEAAglQAAgqAniHQAmiGAphtQDvAEB4gBIAZDNQAPB1AFA/QACApgyBVQgxBUgdAKQgaADglAAIhIgCg");
	this.shape_73.setTransform(171.2,744.3,0.926,0.926,0,0,180);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("AB+CfIgKgCQgogJiOhAIi8hUIAFAeQgcgKhXghIh9g0QgPgHgJgnIgIgwQAsAUCfA/QBFAbCuBRQCdBHBMAJQAWADBLgEQBWgFAugKQARgDAuggQA0glgJgSIABgBQAMACAJAVQAKAUgFAIQgNATgkAZQgnAbgnANQgqAIhWAHQhAAFgoAAQgUAAgPgBg");
	this.shape_74.setTransform(57,752.1,0.926,0.926,0,0,180);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#1A1A1A","#1E1E1E","#2B2B2B","#414141","#4D4D4D"],[0,0.271,0.565,0.867,1],-39.1,0,46.4,0).s().p("AhFAnQkMiLg1g/QCYABCWgWQAuA9CjBfQA6AfDVBuQgLANgrAVQgxAYg0ANQg9gOj1iDg");
	this.shape_75.setTransform(60.3,736.2,0.926,0.926,0,0,180);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#1A1A1A").s().p("ACUD3Qg3gLkeh3Qj/hpgvgWQgSg6gDg3QgEhDAUgpQDKAPDbgfQA8BOEUCSIC1BcQBPApAAAKQABAZgaAZQgYAXg1AdQgzAKhNAIQhHAIgpAAIgbgBg");
	this.shape_76.setTransform(58.2,742.1,0.926,0.926,0,0,180);

	this.addChild(this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.instance,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74.7,5.6,324.9,767.1);


(lib.contenedor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_110 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(110).call(this.frame_110).wait(1));

	// Capa 7
	this.instance = new lib.Símbolo26();
	this.instance.setTransform(305,-52.3,1,1,0,0,0,260.7,35.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:260.6,regY:35.5,scaleX:0.93,scaleY:0.93,x:311.6,y:21.9,alpha:1},45,cjs.Ease.get(1)).wait(66));

	// Capa 8
	this.instance_1 = new lib.Símbolo25();
	this.instance_1.setTransform(-81.6,255.2,1,1,0,0,0,182.8,152.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).to({regX:182.7,scaleX:0.93,scaleY:0.93,x:213,y:221.6,alpha:1},45,cjs.Ease.get(1)).wait(48));

	// Capa 9
	this.instance_2 = new lib.Símbolo27();
	this.instance_2.setTransform(781.1,261.2,1,1,0,0,0,143.6,146.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(38).to({_off:false},0).to({scaleX:0.93,scaleY:0.93,x:613.7,y:227.1,alpha:1},45,cjs.Ease.get(1)).wait(28));

	// Items
	this.instance_3 = new lib.Símbolo28();
	this.instance_3.setTransform(502.1,140.9,1,1,0,0,0,133.3,102.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(63).to({_off:false},0).to({scaleX:0.93,scaleY:0.93,x:494.3,y:115.7,alpha:1},45,cjs.Ease.get(1)).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44.3,-87.9,521,71);


(lib.cejaizm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.cejaizam();
	this.instance.setTransform(13.6,4.9,1,1,0,0,0,13.6,4.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-7,y:-1.1},8,cjs.Ease.get(1)).wait(140).to({y:3.4},6,cjs.Ease.get(1)).wait(140).to({y:5.9},0).to({rotation:2.7,y:-2.6},7,cjs.Ease.get(1)).wait(106).to({rotation:2.7},0).to({rotation:0,y:4.9},8).wait(295));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,0.1,38.7,10.8);


(lib.cejaiz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.cejaiza();
	this.instance.setTransform(13.6,4.9,1,1,0,0,0,13.6,4.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-7,y:-1.1},8,cjs.Ease.get(1)).wait(140).to({y:3.4},6,cjs.Ease.get(1)).wait(140).to({y:5.9},0).to({rotation:2.7,y:-2.6},7,cjs.Ease.get(1)).wait(106).to({rotation:2.7},0).to({rotation:0,y:4.9},8).wait(295));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.3,9.8);


(lib.cejaderm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.instance = new lib.cejaizam();
	this.instance.setTransform(13.6,4.9,1,1,0,0,180,13.6,4.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:7,skewY:187,y:-1.1},8,cjs.Ease.get(1)).wait(140).to({y:3.4},6,cjs.Ease.get(1)).wait(140).to({y:5.9},0).to({skewX:-2.7,skewY:177.3,y:-2.6},7,cjs.Ease.get(1)).wait(106).to({skewX:-2.7},0).to({skewX:0,skewY:180,y:4.9},8).wait(294));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,0.1,38.7,10.8);


(lib.cejader = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.instance = new lib.cejaiza();
	this.instance.setTransform(13.6,4.9,1,1,0,0,180,13.6,4.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:7,skewY:187,y:-1.1},8,cjs.Ease.get(1)).wait(140).to({y:3.4},6,cjs.Ease.get(1)).wait(140).to({y:5.9},0).to({skewX:-2.7,skewY:177.3,y:-2.6},7,cjs.Ease.get(1)).wait(106).to({skewX:-2.7},0).to({skewX:0,skewY:180,y:4.9},8).wait(294));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.3,9.8);


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
	this.instance = new lib.Path_6();
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
	this.instance = new lib.Path_7();
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
	this.instance = new lib.Path_8();
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
	this.instance = new lib.Path_9();
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
	this.instance = new lib.Path_5();
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


(lib.cejasmujer = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.cejaderm();
	this.instance.setTransform(56.9,4.8,1,1,0,0,0,13.7,4.8);

	this.instance_1 = new lib.cejaizm();
	this.instance_1.setTransform(16.6,5.5,0.898,1,-8.7,0,0,13.7,4.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6,-1.2,87.4,15.9);


(lib.cejashombre = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.cejader();
	this.instance.setTransform(56.9,4.8,1,1,0,0,0,13.7,4.8);

	this.instance_1 = new lib.cejaiz();
	this.instance_1.setTransform(13.6,6.8,1,1,0,0,0,13.6,4.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70.4,11.7);


(lib.Personajetest2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//Creación de pointer
		var frequency = 100;
		stage.enableMouseOver(frequency);
		
		
		/////////////////////VAR LIPSYNC////////////////////////////////
		
		
		var var_bocax1 = this.bocax1;
		var var_bocax2 = this.bocax2;
		var var_bocax3 = this.bocax3;
		var var_bocax4 = this.bocax4;
		var var_bocax5 = this.bocax5;
		var var_bocax6 = this.bocax6;
		var var_bocax7 = this.bocax7;
		var var_bocax8 = this.bocax8;
		
		
		var bocasX = [
			var_bocax1,
			var_bocax2,
			var_bocax3,
			var_bocax4,
			var_bocax5,
			var_bocax6,
			var_bocax7,
			var_bocax8
		]
		
		/////////////////////LYPSINC ////////////////////////////////////////
		
		
		
		var iniciar3 = true;
		
		var audio3 = createjs.Sound.play("sounds/32.mp3");
		this.addChild(audio3);
			
		
		
		
		
		
		this.addEventListener("tick", LipsyncX.bind(this));
		
		
		function LipsyncX() {
		
			posicion3 = audio3.getPosition();
			var duracion3 = audio3.getDuration();
			if (posicion3 != 0 && posicion3 > duracion3-100) {
				
			}
				
			if (iniciar3) {
				iniciar3 = false;
				for (i = 0; i < bocasX.length; i++) { 
				bocasX[i].alpha = 0;
				}
				if ((0 <= posicion3  && posicion3 < 197) || (407 <= posicion3  && posicion3 < 1125) || (2000 <= posicion3  && posicion3 < 2257) ||(5224 <= posicion3  && posicion3 < 5643) || (8000 <= posicion3  && posicion3 < 8500) || (9500 <= posicion3  && posicion3 < 10000) || (11112 <= posicion3  && posicion3 < 11345) || (13816 <= posicion3  && posicion3 < 14500) || (17175 <= posicion3  && posicion3 < duracion3) ) {
					var_bocax3.alpha = 1; 
				} else {
					var azar = Math.floor((Math.random() * 60) + 1);
					if(azar<10){
						var_bocax1.alpha = 1;
					} else if (azar<20){
						var_bocax2.alpha = 1;
					} else if (azar<30) {
						var_bocax4.alpha = 1;
					} else if (azar<40) {
						var_bocax5.alpha = 1;
					} else if (azar<50) {
						var_bocax6.alpha = 1;
					} else if (azar<=60) {
						var_bocax7.alpha = 1;
					} else if (azar<=70) {
						var_bocax8.alpha = 1;
					}
				}
				setTimeout(function(){
					iniciar3 = true;
				}, 45);
			}
		}
		
		
		////////////////////////////
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// cejas
	this.instance = new lib.cejasmujer();
	this.instance.setTransform(-136,57.9,0.916,0.916,-7.7,0,0,35.4,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 1
	this.bocax1 = new lib.boca1();
	this.bocax1.setTransform(-120.1,112.5,1.044,1.044,-15,0,0,17.4,7);

	this.timeline.addTween(cjs.Tween.get(this.bocax1).wait(1));

	// 2
	this.bocax2 = new lib.boca2();
	this.bocax2.setTransform(-128.2,108.6,0.113,0.112,-5.5,0,0,144.5,56);
	this.bocax2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bocax2).wait(1));

	// 3
	this.bocax3 = new lib.boca3();
	this.bocax3.setTransform(-128.4,108.5,0.098,0.097,0,-5.5,-5.5,163.1,46.5);
	this.bocax3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bocax3).wait(1));

	// 4
	this.bocax4 = new lib.boca4();
	this.bocax4.setTransform(-129.3,109.3,0.131,0.132,-1.5,0,0,107.4,66.6);
	this.bocax4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bocax4).wait(1));

	// 5
	this.bocax5 = new lib.boca5();
	this.bocax5.setTransform(-129.1,109.3,0.111,0.104,-5.5,0,0,143,93);
	this.bocax5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bocax5).wait(1));

	// 6
	this.bocax6 = new lib.boca6();
	this.bocax6.setTransform(-129.1,109.8,0.127,0.126,-5.5,0,0,84.2,90.5);
	this.bocax6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bocax6).wait(1));

	// 7
	this.bocax7 = new lib.boca7();
	this.bocax7.setTransform(-127.8,110.1,0.12,0.101,-5.5,0,0,147.3,84.7);
	this.bocax7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bocax7).wait(1));

	// 8
	this.bocax8 = new lib.boca44();
	this.bocax8.setTransform(-128.4,105.6,1.044,1.044,0,0,0,20.6,12.2);
	this.bocax8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bocax8).wait(1));

	// OjosAbiertos
	this.ojos_abiertos = new lib.ojos_abiertos();
	this.ojos_abiertos.setTransform(-126.8,68.7,1.044,1.044,-15,0,0,36.5,9);

	this.timeline.addTween(cjs.Tween.get(this.ojos_abiertos).wait(1));

	// Personaje
	this.personaje = new lib.Símbolo10();
	this.personaje.setTransform(24.5,-27,0.911,0.911,0,0,180,0.6,0);

	this.timeline.addTween(cjs.Tween.get(this.personaje).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-235.4,3.1,184.8,835.2);


(lib.Personajehombre = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//Creación de pointer
		var frequency = 100;
		stage.enableMouseOver(frequency);
		
		
		/////////////////////VAR LIPSYNC////////////////////////////////
		
		
		var var_bocah1 = this.bocah1;
		var var_bocah2 = this.bocah2;
		var var_bocah3 = this.bocah3;
		var var_bocah4 = this.bocah4;
		var var_bocah5 = this.bocah5;
		var var_bocah6 = this.bocah6;
		var var_bocah7 = this.bocah7;
		var var_bocah8 = this.bocah8;
		var var_bocah9 = this.bocah9;
		var var_bocah10 = this.bocah10;
		var var_bocah11 = this.bocah11;
		var var_bocah12 = this.bocah12;
		
		
		var bocasH = [
			var_bocah1,
			var_bocah2,
			var_bocah3,
			var_bocah4,
			var_bocah5,
			var_bocah6,
			var_bocah7,
			var_bocah8,
			var_bocah9,
			var_bocah10,
			var_bocah11,
			var_bocah12
		]
		
		/////////////////////LYPSINC ////////////////////////////////////////
		
		
		
		var iniciar2 = true;
		
		var audio2 = createjs.Sound.play("sounds/audios-32.mp3");
		this.addChild(audio2);
			
		
		audio2.on(  "complete", 
					function(){
						this.parent.gotoAndPlay(41);
						}, 
					this);
		
		
		
		this.addEventListener("tick", LipsyncH.bind(this));
		
		
		function LipsyncH() {
		
			posicion2 = audio2.getPosition();
			var duracion2 = audio2.getDuration();
			if (posicion2 != 0 && posicion2 > duracion2-100) {
				
			}
				
			if (iniciar2) {
				iniciar2 = false;
				for (i = 0; i < bocasH.length; i++) { 
				bocasH[i].alpha = 0;
				}
				if ((0 <= posicion2  && posicion2 < 197) || (407 <= posicion2  && posicion2 < 1125) || (2000 <= posicion2  && posicion2 < 2257) ||(5224 <= posicion2  && posicion2 < 5643) || (8000 <= posicion2  && posicion2 < 8500) || (9500 <= posicion2  && posicion2 < 10000) || (11112 <= posicion2  && posicion2 < 11345) || (13816 <= posicion2  && posicion2 < 14500) || (17175 <= posicion2  && posicion2 < duracion2) ) {
					var_bocah3.alpha = 1; 
				} else {
					var azar = Math.floor((Math.random() * 60) + 1);
					if(azar<10){
						var_bocah1.alpha = 1;
					} else if (azar<20){
						var_bocah2.alpha = 1;
					} else if (azar<30) {
						var_bocah4.alpha = 1;
					} else if (azar<40) {
						var_bocah5.alpha = 1;
					} else if (azar<50) {
						var_bocah6.alpha = 1;
					} else if (azar<=60) {
						var_bocah7.alpha = 1;
					} else if (azar<=70) {
						var_bocah8.alpha = 1;
					}  else if (azar<=80) {
						var_bocah9.alpha = 1;
					}  else if (azar<=90) {
						var_bocah10.alpha = 1;
					}  else if (azar<=100) {
						var_bocah11.alpha = 1;
					} 
				}
				setTimeout(function(){
					iniciar2 = true;
				}, 45);
			}
		}
		
		
		////////////////////////////
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// cejas
	this.instance = new lib.cejashombre();
	this.instance.setTransform(147.2,66.7,0.916,0.916,0,0,0,35.3,5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// ojos
	this.instance_1 = new lib.ojoshombre();
	this.instance_1.setTransform(148,82.2,0.916,0.916,0,0,0,32.8,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 1
	this.bocah1 = new lib.bocahombre56();
	this.bocah1.setTransform(147.3,120.4,0.779,0.7,0,0,0,22.4,10.2);
	this.bocah1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bocah1).wait(1));

	// 2
	this.bocah2 = new lib.bocah02();
	this.bocah2.setTransform(147.1,120.2,0.779,0.7,0,0,0,22.6,8.7);
	this.bocah2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bocah2).wait(1));

	// 3
	this.bocah3 = new lib.bocah03();
	this.bocah3.setTransform(147.1,121.4,0.779,0.7,0,0,0,10.5,9.7);
	this.bocah3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bocah3).wait(1));

	// 4
	this.bocah4 = new lib.bocah04();
	this.bocah4.setTransform(147.6,120.2,0.916,0.916,0,0,0,17.6,6.8);
	this.bocah4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bocah4).wait(1));

	// 5
	this.bocah5 = new lib.bocah05();
	this.bocah5.setTransform(147.3,119.6,0.779,0.7,0,0,0,22.4,5);
	this.bocah5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bocah5).wait(1));

	// 6
	this.bocah6 = new lib.bocah06();
	this.bocah6.setTransform(147.1,121.3,0.746,0.823,0,0,0,18.7,6.8);
	this.bocah6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bocah6).wait(1));

	// 7
	this.bocah7 = new lib.bocah07();
	this.bocah7.setTransform(147.7,120.2,0.916,0.916,0,0,0,13.5,2.8);
	this.bocah7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bocah7).wait(1));

	// 8
	this.bocah8 = new lib.bocah08();
	this.bocah8.setTransform(147.6,120.2,0.916,0.916,0,0,0,17.4,7.2);
	this.bocah8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bocah8).wait(1));

	// 9
	this.bocah9 = new lib.bocah09();
	this.bocah9.setTransform(147.6,120.2,0.916,0.916,0,0,0,17.9,5.1);
	this.bocah9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bocah9).wait(1));

	// 10
	this.bocah10 = new lib.bocah10();
	this.bocah10.setTransform(147.2,119.8,0.916,0.916,0,0,0,14.8,4.3);
	this.bocah10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bocah10).wait(1));

	// 11
	this.bocah11 = new lib.bocah11();
	this.bocah11.setTransform(147.6,120.1,0.916,0.916,0,0,0,17.9,3.8);
	this.bocah11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bocah11).wait(1));

	// boca
	this.bocah12 = new lib.boca01();
	this.bocah12.setTransform(147.8,118.3,0.916,0.916,0,0,0,23.1,8.8);

	this.timeline.addTween(cjs.Tween.get(this.bocah12).wait(1));

	// cuerpo
	this.instance_2 = new lib.cuerpoh();
	this.instance_2.setTransform(154.1,403.3,0.985,0.985,0,0,0,155.2,408.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.5,6,320.2,756);


// stage content:
(lib.lip01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//Creación de pointer
		var frequency = 100;
		stage.enableMouseOver(frequency);
		
		/////////////////////VAR LIPSYNC////////////////////////////////
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_60 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(21).call(this.frame_60).wait(1));

	// personaje-mujer
	this.instance = new lib.Personajetest2();
	this.instance.setTransform(1616,485.4,0.852,0.852,0,0,0,155.2,408.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({regY:408.9,scaleX:0.8,scaleY:0.8,x:1389.6,y:466.5},11,cjs.Ease.get(1)).wait(10));

	// personaje-hombre
	this.instance_1 = new lib.Personajehombre();
	this.instance_1.setTransform(-186.3,485.4,0.875,0.875,0,0,180,155.1,408.8);
	this.instance_1._off = true;

	this.instance_2 = new lib.cejashombre();
	this.instance_2.setTransform(92.1,185.9,0.802,0.802,0,0,180,35.4,5.9);

	this.instance_3 = new lib.ojoshombre();
	this.instance_3.setTransform(91.4,199.5,0.802,0.802,0,0,180,32.8,7.7);

	this.bocah1 = new lib.bocahombre56();
	this.bocah1.setTransform(92,232.9,0.682,0.613,0,0,180,22.4,10.2);
	this.bocah1.alpha = 0;

	this.bocah2 = new lib.bocah02();
	this.bocah2.setTransform(92.2,232.8,0.682,0.613,0,0,180,22.6,8.7);
	this.bocah2.alpha = 0;

	this.bocah3 = new lib.bocah03();
	this.bocah3.setTransform(92.2,233.8,0.682,0.613,0,0,180,10.6,9.7);
	this.bocah3.alpha = 0;

	this.bocah4 = new lib.bocah04();
	this.bocah4.setTransform(91.7,232.7,0.802,0.802,0,0,180,17.6,6.8);
	this.bocah4.alpha = 0;

	this.bocah5 = new lib.bocah05();
	this.bocah5.setTransform(92,232.2,0.682,0.613,0,0,180,22.4,5);
	this.bocah5.alpha = 0;

	this.bocah6 = new lib.bocah06();
	this.bocah6.setTransform(92.2,233.7,0.653,0.721,0,0,180,18.6,6.8);
	this.bocah6.alpha = 0;

	this.bocah7 = new lib.bocah07();
	this.bocah7.setTransform(91.7,232.8,0.802,0.802,0,0,180,13.5,2.8);
	this.bocah7.alpha = 0;

	this.bocah8 = new lib.bocah08();
	this.bocah8.setTransform(91.8,232.7,0.802,0.802,0,0,180,17.4,7.1);
	this.bocah8.alpha = 0;

	this.bocah9 = new lib.bocah09();
	this.bocah9.setTransform(91.7,232.7,0.802,0.802,0,0,180,17.9,5);
	this.bocah9.alpha = 0;

	this.bocah10 = new lib.bocah10();
	this.bocah10.setTransform(92.1,232.4,0.802,0.802,0,0,180,14.8,4.3);
	this.bocah10.alpha = 0;

	this.bocah11 = new lib.bocah11();
	this.bocah11.setTransform(91.8,232.6,0.802,0.802,0,0,180,17.9,3.8);
	this.bocah11.alpha = 0;

	this.bocah12 = new lib.boca01();
	this.bocah12.setTransform(91.6,231.1,0.802,0.802,0,0,180,23,8.8);

	this.instance_4 = new lib.cuerpoh();
	this.instance_4.setTransform(86,480.6,0.863,0.863,0,0,180,155.3,408.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_4},{t:this.bocah12},{t:this.bocah11},{t:this.bocah10},{t:this.bocah9},{t:this.bocah8},{t:this.bocah7},{t:this.bocah6},{t:this.bocah5},{t:this.bocah4},{t:this.bocah3},{t:this.bocah2},{t:this.bocah1},{t:this.instance_3},{t:this.instance_2}]},25).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({regX:155.2,x:85.1},14,cjs.Ease.get(1)).to({_off:true},25).wait(21));

	// items
	this.instance_5 = new lib.contenedor();
	this.instance_5.setTransform(642.1,406.5,1,1,0,0,0,385.1,260.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).wait(47));

	// bgper01
	this.instance_6 = new lib.verde();
	this.instance_6.setTransform(110.9,380.1,0.788,0.788,0,0,0,176.6,195.5);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:0.59},14).wait(47));

	// bgper02
	this.instance_7 = new lib.Group_1();
	this.instance_7.setTransform(1138.1,375.6,0.784,0.784,0,0,0,177.5,190.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(40).to({_off:false},0).to({regX:177.6,x:1137.9,alpha:0.48},10,cjs.Ease.get(1)).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(611.8,360,1308.7,725);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;