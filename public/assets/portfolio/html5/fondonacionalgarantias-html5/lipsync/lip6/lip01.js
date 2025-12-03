(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 35,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/06.mp3", id:"06"},
		{src:"sounds/audios-6.mp3", id:"06a"},
		{src:"images/Path.png", id:"Path"},
		{src:"images/Path_1.png", id:"Path_1"},
		{src:"images/Path_1_1.png", id:"Path_1_1"},
		{src:"images/flash0aiActivos.png", id:"flash0aiActivos"},
		{src:"images/flash0aiActivos_1.png", id:"flash0aiActivos_1"},
		{src:"images/flash0aiActivos_2.png", id:"flash0aiActivos_2"},
		{src:"images/flash0aiActivos_3.png", id:"flash0aiActivos_3"}
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


(lib.flash0aiActivos = function() {
	this.initialize(img.flash0aiActivos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,15);


(lib.flash0aiActivos_1 = function() {
	this.initialize(img.flash0aiActivos_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,576);


(lib.flash0aiActivos_2 = function() {
	this.initialize(img.flash0aiActivos_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,287,559);


(lib.flash0aiActivos_3 = function() {
	this.initialize(img.flash0aiActivos_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,581);


(lib.Símbolo9 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("Excelencia", "italic 27px 'Calibri Light'", "#FFFFFF");
	this.text.lineHeight = 24;
	this.text.setTransform(37.9,63.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1B24B").s().p("AhojoIDRGWIi6A7g");
	this.shape.setTransform(50.5,23.3,1.085,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1B24B").s().p("As5HHQgxAAgjgjQgkgjAAgyIAAqdQAAgyAkgjQAjgjAxAAIZzAAQAxAAAkAjQAjAjAAAyIAAKdQAAAygjAjQgkAjgxAAg");
	this.shape_1.setTransform(94.6,84.5);

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,189.3,130.1);


(lib.Símbolo7 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("Servicio", "italic 27px 'Calibri Light'", "#FFFFFF");
	this.text.lineHeight = 24;
	this.text.setTransform(51.3,56.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F76841").s().p("Ah4CuIDwmWIgaHRg");
	this.shape.setTransform(63.2,23.4,0.983,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F76841").s().p("As5HHQgxAAgjgjQgkgjABgyIAAqdQgBgyAkgjQAjgjAxAAIZzAAQAxAAAkAjQAjAjAAAyIAAKdQAAAygjAjQgkAjgxAAg");
	this.shape_1.setTransform(94.6,77.1);

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,189.2,122.7);


(lib.Símbolo6 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.flash0aiActivos_3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,198,581);


(lib.Símbolo5 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.flash0aiActivos_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,176,576);


(lib.Símbolo4 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.flash0aiActivos_2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,287,559);


(lib.Símbolo2 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("Respeto", "italic 27px 'Calibri Light'", "#FFFFFF");
	this.text.lineHeight = 24;
	this.text.setTransform(49.9,59.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004F91").s().p("Ah4CuIDxmWIgbHRg");
	this.shape.setTransform(82.8,23.3,1.058,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004F91").s().p("AsvHHQgyAAgjgjQgkgjABgyIAAqdQgBgyAkgjQAjgjAyAAIZgAAQAxAAAjAjQAkAjAAAyIAAKdQAAAygkAjQgjAjgxAAg");
	this.shape_1.setTransform(93.7,78.2);

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,187.4,123.8);


(lib.Símbolo1 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("Transparencia", "italic 27px 'Calibri Light'", "#FFFFFF");
	this.text.lineHeight = 24;
	this.text.setTransform(14.2,59.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9FDB65").s().p("Ah4CuIDxmWIgbHRg");
	this.shape.setTransform(95.5,23.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9FDB65").s().p("AsvHHQgyAAgjgjQgjgkAAgxIAAqdQAAgxAjgjQAjgkAyAAIZfAAQAyAAAjAkQAjAjAAAxIAAKdQAAAxgjAkQgjAjgyAAg");
	this.shape_1.setTransform(93.7,81.6);

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,187.4,127.1);


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


(lib.Path_8 = function() {
	this.initialize();

	// Capa 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("ArABaQklglAAg1QAAgzElgmQEkgmGcAAQGdAAEkAmQEkAmABAzQgBA1kkAlQkkAmmdAAQmcAAkkgmg");
	this.shape_6.setTransform(99.8,12.8);

	this.addChild(this.shape_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,199.6,25.7);


(lib.Group_6 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAuglIggAFIgzgUIBMgNIiEgeIgGgNICPAGIhehFIgPglIClBxIiRECIg2Aug");
	this.shape.setTransform(10,21);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.1,42);


(lib.Path_9 = function() {
	this.initialize();

	// Capa 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("Aq2BZQkhglAAg0QAAgyEhgmQEgglGWAAQGXAAEgAlQEhAmAAAyQAAA0khAlQkfAlmYAAQmWAAkgglg");
	this.shape_7.setTransform(98.5,12.7);

	this.addChild(this.shape_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,196.9,25.3);


(lib.Group_17 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAuChIiPj+ICjhwIgPAlIhdBDICMgFIgFANIiCAdIBLANIgzAUIgfgGICODzg");
	this.shape.setTransform(9.9,20.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19.8,41.4);


(lib.Group_1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Path();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,355,381);


(lib.Path_45 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A2260F","#D6590A"],[0.208,0.976],-55.6,18.9,29.2,-15.8).s().p("Ah7gkQAFhyALg6QBDgCA6gSQALAAAdA5QAeA7AnBjQgfgzgpgMQgngMghAcQgiAdgiBpQgSA6gYBhQABi7ADhOg");
	this.shape.setTransform(12.8,22.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25.6,45.9);


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


(lib.cejaiza = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7A5233","#835938","#9C6E47","#C48F5F","#F7B87D"],[0.216,0.329,0.514,0.749,1],-19.3,-1.2,44.7,5.2).s().p("AiGAtQgEgPANgeQAMgbAGgEQAPgNBIgDQBGgCBMAJQAGALADAYQACAXgDAXQh4gNgiAAQhJgCggAXg");
	this.shape.setTransform(13.6,4.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27.3,9.8);


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


(lib.Símbolo12 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AD7647").s().p("AgaA8QgWgIALgEIALgEQAHgDADgDQAGgEABgCIgCgLQgGgdARggQATgkgCAQQgFAuAWAmIAHANQACAGgFAGQgEAFgNAEIgTAHIgEABQgJAAgPgGg");
	this.shape.setTransform(151.6,61.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AD7647").s().p("AgNAYQgfgLgYgTQgVgRgDgNQAeAWA5ARQA6ATAoAAIAAABQABAKghADIgNABQgfAAgegNg");
	this.shape_1.setTransform(142.6,74);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#682B1C").s().p("AA0AgQgNgJgVgJQgngOgtABIgEAAQgDgBAHgQQAHgRAEAAQAxgFAnAZQAVANANANQAEADAAAFQABAFgDAEQgEAEgFABIgBAAQgEAAgDgDg");
	this.shape_2.setTransform(164.3,45.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#682B1C").s().p("AB4A5IgDgGQgwhQhhAIQggADgcAMQgaAJAHADQgVAQgOgDQgGgBABgHQACgHAJgGQgIgEAegTQAhgUAogIQB3gYBFBoQAEAHgOAOQgKAKgEAAIgDgBg");
	this.shape_3.setTransform(137,37.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgMAuQgNgFgGgRQgFgRAGgRQAGgTANgKQALgLAOAFQANAFAFARQAFARgGARQgFATgOAKQgJAHgHAAIgIgBg");
	this.shape_4.setTransform(134.7,49.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgNAtQgNgEgFgRQgFgRAGgRQAFgTAOgKQALgLANAFQANAFAGARQAFARgGARQgFATgOAKQgJAHgHAAQgEAAgFgCg");
	this.shape_5.setTransform(158.3,55.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#332E2E").s().p("AAMgzIAgBIQADAFgDADIgDABIhVAWg");
	this.shape_6.setTransform(126.1,25.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1A1A1A").s().p("AgggEIgCgCQAAgEAFgDIBAguIgHB2g");
	this.shape_7.setTransform(173.5,40.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#332E2E").s().p("ADUA/QgagZhMgbQgzgQg8gPQg4gOgnALQggAJg6AjQgggGgkgGQgIgBgWgHQgagGgCgEQgBgFAcg0QAeg5AUgKQAUgKA0gBQAdgBAwACQA+ABBHAZQAuAPBUAnQASAIBpBVQAgAbgxBYQgkgxgjghg");
	this.shape_8.setTransform(154,14.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1A1A1A").s().p("Aj+gFQgIgBgWgHQgagIgCgEQgBgFAcg0QAeg5AUgKQAUgKA0gBQAdgBAwACQA+ABBHAZQAuAPBUAnQASAIBpBVQAaAWgdBBQgOAhgUAcQj1h/kQgog");
	this.shape_9.setTransform(154,16.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DF8351").s().p("ADrgEQhCgoiOgtQiXgwgXAWIgaAjQgYAigOAMQgMALgZAZIgUAXIABgGQAYhJA4g2QBnhlCbAuQCdAtAhCKQASBLgTBOIgCAFIAAABQgRizgGgEg");
	this.shape_10.setTransform(148.4,32.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FBBE7D").s().p("Ag0GBIhRgYQgWgGgMgTIhGhiQgzhIgFgbQgHgiAaiIQAShfAOg4IABgGQAYhLA4g2QBnhlCbAuQCdAtAhCMQASBLgTBOIgCAFQhdEDglAnQgXAYg2AkQg2AkghARQgMAFgNAAQgIAAgJgCg");
	this.shape_11.setTransform(145.8,53);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#332E2E").s().p("AiTBzQgCiPBLiTIAsgkQA0gfAxATQA+AZAMAiQANAngkBXQgfBKhxBpIhsBaQgQgrgBhJg");
	this.shape_12.setTransform(130.7,38);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1A1A1A").s().p("AhtBzQgQiOAPhRQARhcAcgbQAZgXA5AMQAuAJAhAhQAQAQAHAPQgRCkhjCJQgdAsgjAkIgeAbQgKg4gIhIg");
	this.shape_13.setTransform(168.4,49.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DF8351").s().p("AgkBFQgTgagDgnQgDgmAQgdQAPgdAZgBQAWgCAUAaQATAbADAnQADAlgPAdQgQAdgZACIgDAAQgVAAgSgZg");
	this.shape_14.setTransform(117.5,46.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#332E2E").s().p("AhNhUQAMh+AjgTQAYgOAtASQAYAKASALIiDG4QgoiwANiQg");
	this.shape_15.setTransform(121.9,34.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FBBE7D").s().p("AAACfQgigegjgjQhIhHAAgbQAAgjAUgyQAUgyAUgQQAQgNBoA0QA1AZAyAdQgLCMhDA3QggAageAAIgCAAg");
	this.shape_16.setTransform(201,195.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#292728").s().p("AgVCVQgngOgsgWIgkgTID2kEIAaB2QAVCAgaA4QgOAfguAAQgkAAg0gSg");
	this.shape_17.setTransform(204.3,208.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F1F2F2").s().p("AmyFkICZrHILMAJIi/K+g");
	this.shape_18.setTransform(173.6,178.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C5C2E1").s().p("AgmgsIA5g4IgEAfQgDAkACAaQAEAoAVBEg");
	this.shape_19.setTransform(109.8,107.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9491A8").s().p("AAAg8IA7g4IAIBVQgJAfgVAhQgnBEhAAPg");
	this.shape_20.setTransform(105.9,108.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#434244").s().p("AhcAKIBBhPIhPAGIBqmYIBqgzIg/MVIASEAg");
	this.shape_21.setTransform(100.7,152.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#434244").s().p("AipgQQAThLCFjjQBBhxA/hjIBmBCIh6GFIiCgIIBEBuIjxH4QAWnUAVhPg");
	this.shape_22.setTransform(146.1,154.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C5C2E1").s().p("AiDBKIgYg6IERipIAmBqIjHDJQg2gTgig9g");
	this.shape_23.setTransform(140,106.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#313032").s().p("AjJPIQBEnHAChHQADhIg3uEIgyjnIHTjkIg/MXIgRJQIgZJUg");
	this.shape_24.setTransform(87.9,199.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#313032").s().p("AmAGbQAWi/AajPQAymbAThLQAThLCFjjQBDhyA9hiIFzDsIi9M8IAvGQQApGXgeAiQgdAjknAVIkjAOg");
	this.shape_25.setTransform(155.9,200);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9A9B9D").s().p("AgBALIhNgLIACgUQBnAGA0AIIgGAcQgfgDgrgIg");
	this.shape_26.setTransform(171.9,285.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D5D6E7").s().p("AhRAgIALhmICYAZIgDAGQgGAYgSBWg");
	this.shape_27.setTransform(173.6,280.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C5C2E1").s().p("AhRAjIALhwICYAcIgDAHQgGAagSBeg");
	this.shape_28.setTransform(173.6,279.5);

	this.instance = new lib.Group_6();
	this.instance.setTransform(106.3,324.1,1,1,0,0,0,10,20.9);
	this.instance.alpha = 0.102;

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E4E5E5").s().p("Ag8ApQgPgOgBgUIAAgHQgBgTAOgPQANgPAUgBIA3gDQAVAAAPANQAPAOABAUIAAAGQABAUgOAPQgOAQgUAAIg5ADQgTAAgOgNgAgdgcQgLABgHAIQgIAIABALIAAAGQABALAIAIQAIAIALgBIA3gDQALAAAIgJQAIgIgBgLIgBgGQAAgLgIgHQgIgIgKAAg");
	this.shape_29.setTransform(109.1,256.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C8BCAA").s().p("AgSgrIAhgJIADBoIgjABg");
	this.shape_30.setTransform(154,252.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#C8BCAA").s().p("AgUg5IAgACIAJBuIgfADg");
	this.shape_31.setTransform(91.6,256.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C8BCAA").s().p("AgQg7IAfgBIACB4IgfABg");
	this.shape_32.setTransform(134.9,255.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#774E2B").s().p("AlWA+Qg7gCgQgCIAGhMIBIAFQBYAEBVAAQBtAAHbg5IgGBJQhtAPh/APQj8AehaAAQhYAAhYgFg");
	this.shape_33.setTransform(121.1,253);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F1F1F1").s().p("AgLAMQgGgFAAgHQAAgGAGgFQAFgGAGABQAHgBAGAGQAFAFAAAGQAAAHgFAFQgGAFgHABQgGgBgFgFg");
	this.shape_34.setTransform(110.2,239.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F1F1F1").s().p("AgLAMQgFgFgBgHQABgGAFgFQAFgGAGABQAHgBAGAGQAEAFAAAGQAAAHgEAFQgGAFgHABQgGgBgFgFg");
	this.shape_35.setTransform(115.8,203.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F1F1F1").s().p("AgLAMQgGgFAAgHQAAgGAGgFQAFgGAGABQAHgBAGAGQAEAFAAAGQAAAHgEAFQgGAFgHABQgGgBgFgFg");
	this.shape_36.setTransform(116,166.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F1F1F1").s().p("AgLAMQgGgFABgHQgBgGAGgFQAFgGAGABQAHgBAFAGQAFAFABAGQgBAHgFAFQgFAFgHABQgGgBgFgFg");
	this.shape_37.setTransform(116.2,130.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#9491A8").s().p("AiWATIEQipIAmBqQgvAtg/AwQh+BghTAGg");
	this.shape_38.setTransform(139.6,105.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DDDBED").s().p("AnoLsIgdjuIgusnQgSg+gPhAQgfh/AMgLQALgLDGheIDDhcIBDDyIFtkIQF3DiAWAXQARARjGIKQgRArgcBDQgRAngYBLQgbBRACDCQABBhAGBRIp/Bgg");
	this.shape_39.setTransform(130.8,177.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#AE623E").s().p("Ai8F0QAohAAXlqQAMi2ADipIErGUIAAAtQgvBdgkA2QgzBNg3AzQhXBPg5AIIgGAAQgZAAgNgig");
	this.shape_40.setTransform(127.7,76.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#DA8050").s().p("Ai9EdQhChOAsg/QAsg/AZjdIAQjTIErBvIAHCPQANCbAgBDQAgBEi3BWQg6AbhGAaIg9AUQgpgbghgog");
	this.shape_41.setTransform(129.3,100.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#9491A8").s().p("AjbBSIBUjzICrgcICQDQIAoBtIixgeIiLAXIhwBFg");
	this.shape_42.setTransform(133.8,88.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C5C2E1").s().p("AgTFJQgOg4gPhLQgdiWAAhgQAAhjAEhrIAEhXICJFTIAKBGIglBCIAPBLIgaAdIAABog");
	this.shape_43.setTransform(81.6,176.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3C2418").s().p("Ak/AwQAEgIAqgOIBjgdQCWgzAug6IBJAWQArAMAgAEQA+AIBYABIgIB0QiFAjiTASQhPAJg/AAQilAAgshBg");
	this.shape_44.setTransform(69.9,553.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3C2418").s().p("AhOByQhNgOhQgTIg/gQIgbigQCSgMB7ggQAQAjBNAuQAoAYBwA2QBcAtAaAVQAoAegrANQg2ALhHAAQhtAAiUgag");
	this.shape_45.setTransform(194.5,552.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#292728").s().p("AIbYmQhNgOhPgTIhAgQQhco2hspNQjWyZhLh3Qgagpg8TaQgfJugZJ2QiGAjiSASQkkAig9haQADgIAugPIBnghQCdg2Aqg/QAjg2gUubQgNpmgjt5IBmmmINIgwQgiHMB9TOQAtG4AyGIQAuFkANAkQANAjBOAvQAqAaBvA3QBfAvAbAUQApAfgrANQg2ALhHAAQhuAAiWgag");
	this.shape_46.setTransform(132.5,406.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#292728").s().p("AjXAkIDenyIDRLFIj5DYg");
	this.shape_47.setTransform(193.6,171.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FAB57A").s().p("AgoDEIgZhvIAAkKIB5gPIAKCeQAAAQg7AkIgEAoQgDAwADAoQAEAogWALQgJAEgIAAIgIgBg");
	this.shape_48.setTransform(57,302.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FAB57A").s().p("AgIA3QgJgCgFgHQgGgIACgIIAMhCQACgJAHgFQAGgFAIABQAJACAFAHQAFAIgBAIIgMBCQgCAJgHAFQgGAEgEAAIgEAAg");
	this.shape_49.setTransform(74.1,314.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FAB57A").s().p("AgIA3QgJgCgGgHQgFgIACgIIAMhCQACgJAHgFQAFgFAJABQAJACAGAHQAFAIgCAIIgMBCQgCAJgHAFQgGAEgEAAIgEAAg");
	this.shape_50.setTransform(69.8,314.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FAB57A").s().p("AgJA3QgIgCgFgHQgFgIABgIIANhCQABgJAIgFQAFgFAJABQAIACAFAHQAGAIgCAIIgMBCQgCAJgHAFQgGAEgEAAIgFAAg");
	this.shape_51.setTransform(65.3,314.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FAB57A").s().p("AgIA3QgJgCgFgHQgFgIABgIIAMhCQACgJAHgFQAGgFAJABQAIACAGAHQAFAIgCAIIgMBCQgCAJgHAFQgGAEgEAAIgEAAg");
	this.shape_52.setTransform(61,314.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#C1B49A").s().p("AkpAOIAAgbIJTAAIAAAbg");
	this.shape_53.setTransform(65.4,331);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#8A5D3B").s().p("AodAjIAAgCQAAgcgUgTQgTgTgbgBIR7AAQAaAAAVATQAVATAAAdIAAACg");
	this.shape_54.setTransform(68.8,334.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#3B2314").s().p("Ao+GcIAAs3IR9AAIAAMhQAAAJgGAHQgGAGgKAAg");
	this.shape_55.setTransform(72.2,379.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#3B2314").s().p("ADICDIAAiEQAAgbgUgUQgTgTgbAAIkKAAQgbAAgUATQgTAUgBAbIAACEIg/AAIAAiEQAAg1AngmQAlgmA2AAIEKAAQA1AAAmAmQAlAmABA1IAACEg");
	this.shape_56.setTransform(65.4,321.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#603813").s().p("AgSGPQgYAAgPgQQgPgQAAgZIAArkICQAAIAAMdg");
	this.shape_57.setTransform(7.3,380.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3B2314").s().p("AgSHAQgYAAgPgRQgPgQAAgZIAAsAQABgcATgVQAVgTAcgBIAHAAQAdABATATQAUAVAAAcIAAM6g");
	this.shape_58.setTransform(7.3,375.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EB9756").s().p("AhpBiIAAkKIB3gLQA7BIAPBqQAHAzgEAmIAPBGIh2AWg");
	this.shape_59.setTransform(61,301.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#292728").s().p("AiEhuQAjloAjlEIAyAvQA5A6AtA3QCSCvgrBSQgrBSh5IjQg6ESgzECIh6ALQAAi5BGrQg");
	this.shape_60.setTransform(70.7,204.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EB9756").s().p("AgMAjIgvhAIAkgqIAOAiQASAlAaAMQAaAOgBAYQgBANgGAJg");
	this.shape_61.setTransform(65.1,312.7);

	this.instance_1 = new lib.Path_8();
	this.instance_1.setTransform(136.4,562.4,1,1,0,0,0,99.8,12.8);
	this.instance_1.alpha = 0.5;

	this.addChild(this.instance_1,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.instance,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,236.2,575.2);


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


(lib.persjurur = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#313032").s().p("AhFAKIAAgTICLAAIAAATg");
	this.shape.setTransform(123.4,222.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpApQgRgRAAgYQAAgXARgRQASgSAXAAQAYAAASASQARARAAAXQAAAYgRARQgSASgYAAQgXAAgSgSg");
	this.shape_1.setTransform(80,185.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAB57A").s().p("AgFB/QgjgMAIgYIAAgBQAEg4AKhGQAKhGAEgHQAIgPAOgBQASgBgCAvIgFC9QAAAYgTAAQgHAAgIgDg");
	this.shape_2.setTransform(58.3,220.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAB57A").s().p("AgcAnIAKgmQAFgTAEgKQAJgYARAIQARAIgIAZIgKAnQgEAQgPACIgGABQgLAAgIgIg");
	this.shape_3.setTransform(85.1,224);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FAB57A").s().p("AgPCBQgdgEAAgWQARg1AYiIQAHguAYADQAYADgJArIgaC4QgEAdgWAAIgGgBg");
	this.shape_4.setTransform(68.8,221.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAB57A").s().p("AgzBNQARgrAfhgQALgmAbAEQAbAFgQAhQgIARgfBrQgHAdgYACIgDAAQgVAAgDgUg");
	this.shape_5.setTransform(77.8,223.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AonAgIAAg/IRPAAIAAA/g");
	this.shape_6.setTransform(79.8,222);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E6E6E6").s().p("AonF1IAArqIRPAAIAALqg");
	this.shape_7.setTransform(79.8,187.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E78052").s().p("ABZBBQgsgGgXgCQgRgBggACQgbACgIgCQgYAKgRgCQgKAAgXgJIgVgKQgdgCgcgHQg4gMAKgUQAKgSAlgIQAggHAMAGQASAHAUAEQAMgaA3gRQA4gRBHAAQBTAAA6AVQA7AWAAAcQAAATgLAFQgOAHgkgLQgQgEgIAaQgJAdgbAAQgNAAgogHg");
	this.shape_8.setTransform(60.4,226);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EB9756").s().p("Ag6BoIgWgoIgOgsIBFgvIiRA+IgVARQgaAVghAVQgfAVgJgVIgCgZIBThMIDoiXIECAAQAaAoggA5QgYAsg5AxIANAPIhCBwg");
	this.shape_9.setTransform(115.9,201.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#434244").s().p("AhTBsQhIgZhNgjIg+gdICSivIFGBMIAfAXQAkAdAVAcQBFBahfAwQgkATg4AAQhaAAiNgxg");
	this.shape_10.setTransform(159,201.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E78052").s().p("AAMBHQgMgCgDgIIgJgPQgHgKgBgGQgCgIACgGIAHgKQASgcAGgwQAOA1gOApIgDALIADAJQACAHAIAMQAEAIgJAAIgEAAg");
	this.shape_11.setTransform(97.7,70.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#603813").s().p("ADaB0QgogOhLACQgMABh1AVQhSAPgwgUQhUgkgVhuQArhBBAgUIAngKQAWgGAMgMQgEAJAGAKQAGAKAKADQAJACAMgBIAVgEQA/gMBBAkQA9AiAlA8QAjA7AWBHQgdgSgPgFg");
	this.shape_12.setTransform(100.5,14);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#42210B").s().p("ADqCnQhPgrhKAJQgdADgqAHIhFALQhWAPg3gTQgkgMgZgaQgcgbgGgjQgEgeAKgkQAPg7AkgsQAngvA1gQIAngKQAWgHAMgMQgEAJAGALQAGAJAKADQAJADAMgCIAVgEQA/gMBAAkQA9AiAmA+QAjA7AXBIQAWBKAEBFQgYgXgngWg");
	this.shape_13.setTransform(99.7,21.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#80471E").s().p("AhTAXQgGgCgDgEQgDgFACgEQACgFAGgCIAzgRQA6gOA8APQAFABAEAQQADASgEABIgEgBQg4gNg4AGIgwAKIgFABIgGgBg");
	this.shape_14.setTransform(86.7,50.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#80471E").s().p("AhnAcQgJgQAFgGQBOhHBQAlQAaANATASQASATgIgBQAEAGgBAGQgBAFgGAAQgNACgKgMQgPgUghgIQhBgUg0A5IgEAEIgCABQgEAAgHgOg");
	this.shape_15.setTransform(112.1,48.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag8ALQgYgIAAgKQAAgLBUAAQBWAAAAALQAAAKgaAIQgZAIgjAAQgiAAgagIg");
	this.shape_16.setTransform(99.7,84.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3E2511").s().p("AgUAjQgKgNgBgTQgBgRAIgPQAJgPAOgBQALgCALANQAKAMABAUQABARgIAPQgJAPgOABIgCAAQgKAAgKgLg");
	this.shape_17.setTransform(111.4,61.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3E2511").s().p("AgUAjQgKgNgBgTQgBgRAJgPQAIgPAOgBQALgCALANQAKAMABAUQABARgJAPQgIAPgOABIgCAAQgLAAgJgLg");
	this.shape_18.setTransform(87.8,61.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E78052").s().p("AjTgdQBJhxCNAAQB8AABIBXQAyA6ATBhQgig9g4gRQgogNg9AJQgUACgeAKIgwAQQhDASg3gMQgUgHgLgCQgSgFgMALQgcAZgbA2IgIAPQALhmAthGg");
	this.shape_19.setTransform(99.3,32.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FAB57A").s().p("AgoF/QgXAAgRgPQgsgmgmgkQg3g1gOgaQgQgegNiLQgIhNgEhLIAAgFQAChPAnhDQBGh9ChAAQCiAABHB9QAmBDACBPIAAAFQgQERgZAwQgXAsiABtQgRAPgWAAg");
	this.shape_20.setTransform(99.6,57.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#42210B").s().p("AgcB1QhRh2gIhJQgKhUAXgeQAUgbBDgGQAygEArAoQAVAVALAVQAfCQgqB9QgVA/gbAhQgngtgmg8g");
	this.shape_21.setTransform(117.6,47.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#42210B").s().p("AhXB/Qgkh8AdiRIAdgqQAmgpAtAEQA7AFASAaQAUAegKBUQgIBJhJB3QgjA9gjAtQgXghgSg+g");
	this.shape_22.setTransform(80.3,47.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E78052").s().p("AgUBbQgYgFgLgfQgLgfAJgkQAJgmAYgXQAXgXAWAGQAYAFALAfQAKAfgJAkQgJAmgXAXQgTATgRAAIgJgCg");
	this.shape_23.setTransform(127.5,58.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E78052").s().p("AgVBLQgYgVgLgmQgLgkAKgfQAJgfAYgHQAXgHAXAWQAYAWALAlQAKAkgJAfQgJAggYAGQgFACgGAAQgQAAgTgRg");
	this.shape_24.setTransform(71.7,58.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C5C2E1").s().p("AgNgHQACgZgDgkIgEgeIA5A3IhNCOQAVhDAEgng");
	this.shape_25.setTransform(121.8,108.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9491A8").s().p("AgkAgIgdg+IAIhUIA6A3IBBCuQg+gQgohDg");
	this.shape_26.setTransform(125.6,110.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#434244").s().p("AgqEHIg+sJIBoAyIBpGRIhOgFIBABPIiWH5g");
	this.shape_27.setTransform(130.8,153.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#434244").s().p("AgcAbIBEhtIiBAIIh5mAIBmhAIB9DRQCEDgASBJQAVBOAXHNg");
	this.shape_28.setTransform(85.9,155.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C5C2E1").s().p("AiYgvIAlhnIENCmQgHAagRAeQghA9g1ASg");
	this.shape_29.setTransform(92,107.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#313032").s().p("AiXGEIgRpHIg+sMIHNDhIgyDjQg2N4ADBHQADBGBCHBIlFAVg");
	this.shape_30.setTransform(143.4,199.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#313032").s().p("ABHPAQkjgVgdgiQgdgiAomRIAumLIi6swIFujpIB+DRQCDDhATBJQATBKAyGVQAZDNAVC9IgVI5QiNgEiSgLg");
	this.shape_31.setTransform(76.3,200.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9A9B9D").s().p("AhNgGQA5gIBggGIACAUIhMALQgqAIggACg");
	this.shape_32.setTransform(60.5,285);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D5D6E7").s().p("AhNgmIgDgGICWgZIALBlIiGAmQgShUgGgYg");
	this.shape_33.setTransform(58.8,279.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C5C2E1").s().p("AhNgqIgDgHICWgbIALBvIiGApQgShdgGgZg");
	this.shape_34.setTransform(58.8,278.7);

	this.instance = new lib.Group_17();
	this.instance.setTransform(125.1,322.8,1,1,0,0,0,9.8,20.7);
	this.instance.alpha = 0.102;

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E4E5E5").s().p("AgdAzQgVgCgNgOQgNgPABgUIAAgGQABgUAPgNQAPgNAUAAIA2ADQAUABAOAOQANAQgBASIAAAHQgBAVgPANQgOAMgSAAgAgtgXQgHAHAAALIgBAGQgBALAIAIQAHAIALABIA2ACQALABAIgIQAJgHAAgLIAAgGQABgLgIgIQgHgHgLgBIg2gDIgCAAQgKAAgIAHg");
	this.shape_35.setTransform(122.5,255.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C8BCAA").s().p("AgRAzIAEhmIAfAIIgBBfg");
	this.shape_36.setTransform(78.1,251.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C8BCAA").s().p("AgUA3IAKhuIAfgBIgKBxg");
	this.shape_37.setTransform(139.7,256.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C8BCAA").s().p("AgQA7IACh2IAfABIgCB2g");
	this.shape_38.setTransform(97,255.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#774E2B").s().p("AitAlIjogeIgHhIID5AcQEEAcBDAAQCHAABrgJIAHBLQhvAJiKAAQhYAAj5gdg");
	this.shape_39.setTransform(110.6,252.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F1F1F1").s().p("AgLAMQgGgFAAgHQAAgGAGgFQAFgFAGAAQAHAAAGAFQAEAFAAAGQAAAHgEAFQgGAFgHAAQgGAAgFgFg");
	this.shape_40.setTransform(121.4,239.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F1F1F1").s().p("AgLANQgFgGAAgHQAAgGAFgFQAFgGAGAAQAHAAAFAGQAFAFAAAGQAAAHgFAGQgFAEgHAAQgGAAgFgEg");
	this.shape_41.setTransform(115.8,203.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F1F1F1").s().p("AgLAMQgFgFgBgHQABgGAFgFQAFgFAGgBQAHABAFAFQAGAFgBAGQABAHgGAFQgFAGgHgBQgGABgFgGg");
	this.shape_42.setTransform(115.7,167.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F1F1F1").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_43.setTransform(115.5,131.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#9491A8").s().p("AgwAwIhthcIAlhnIENClIAJCDQhTgHh7heg");
	this.shape_44.setTransform(92.4,107.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#DDDBED").s().p("AlHKjQAGhPABhgQABi/gahRQgYhJgRgnQgbhBgRgrQhOjLgviKQg/i1AJgKQAOgOC/h1IC7hyIFpEEIBBjuQF9CxASARQAMAKgeB+QgPA/gSA9IgtMcIgeDqIizAhg");
	this.shape_45.setTransform(101,178.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#AE623E").s().p("ACPDJQgigFgqgcQgcgTgmgiQg2gygzhKQgjg2gvhbIABgvIEmBVIAPBpQAYBzAnBAQgOAigYAAIgGgBg");
	this.shape_46.setTransform(104.1,98.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#DA8050").s().p("AhIDdQi1hWAghCQAghCANiZIAGiNIEnBUIAQBvQAZB6ArA9QAsA+hBBOQghAngpAbQhhgdhZgrg");
	this.shape_47.setTransform(102.5,107.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#9491A8").s().p("ABgAXIiJgWIiuAdIAmhpICOgPICpAcIBSAxIgKBog");
	this.shape_48.setTransform(98.1,100.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C5C2E1").s().p("AgdDrIgZgeIAOhJIgkhCIAKhDICHlPIAEBWQAEBpAABhQAABfgcCUQgPBKgOA3IgxANg");
	this.shape_49.setTransform(149.6,177.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#3C2418").s().p("AgfBmQhagLhngWIhUgTIgHhyQBXgBA9gIQAggEAqgMIBIgWQAtA6CVAyIBhAdQArAOADAIQgsBAiiAAQg/AAhOgKg");
	this.shape_50.setTransform(161.1,549.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3C2418").s().p("AkrB/QgqgMAngeQAagUBbgtQBug1AogXQBLgvAQgiQB7AgCPALIgbCeQhfAbh6AVQiSAahsAAQhGAAg1gLg");
	this.shape_51.setTransform(38.2,547.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#292728").s().p("AuOYfQgrgNAogeQAbgUBegvQBtg2AqgZQBNgvAMgiQANgkAtlfQAymCAsmyQB7y9ghnGIM8AvIBlGhQgiNygNJYQgUOOAjA1QApA/CaA1IBmAgQAuAPADAIQg8BZkhgiQhagLhmgWIhUgUQgZptgeplQg8zJgZApQhKB1jSSIQhrJGhbIuQhfAbh6AVQiVAahsAAQhFAAg1gLg");
	this.shape_52.setTransform(99.4,403.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#313032").s().p("AjXIgQgfg0BcofIBioXICtLIIhTBzQhQB1AGAOQAKAWAaAWIDkA0QiWBXh5AYQgoAIgfAAQhIAAgZgrg");
	this.shape_53.setTransform(44,184.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#292728").s().p("Ah1G1QAEgig8mJICEnOIBzGiQByGjgQAUQgTAZiJAQQg1AHggAAQgxAAABgQg");
	this.shape_54.setTransform(170.8,169.9);

	this.instance_1 = new lib.Path_9();
	this.instance_1.setTransform(98.5,557.8,1,1,0,0,0,98.5,12.7);
	this.instance_1.alpha = 0.5;

	this.addChild(this.instance_1,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.instance,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,196.9,570.4);


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


(lib.cuerpoh = function() {
	this.initialize();

	// Capa 5
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F0A871","#F7B87D"],[0.51,0.682],-2.9,-33.2,2.9,31.8).s().p("AhMCeQhjgcgphLQgHg0AFgiQAHgyAeglQAlgvCKgDQAsgCAuAEQAoADACADQAcAdAhA/QAiBCAAAaQAAAfgqAsQgkAmghARQgyAQgxAAQgrAAgsgMg");
	this.shape.setTransform(165,77.5,0.784,0.784,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F0A871","#F7B87D"],[0.514,0.682],4.7,-32.8,-5.1,31.4).s().p("AhhCdQgjgTgmgjQgugsAAgeQgBgdAehEQAdhFAagbQACgCApgCQAwgDAtADQCPAIAlAuQAeAlADApQACAXgIA3QgqBNhYAhQgwASguAAQgqAAgqgNg");
	this.shape_1.setTransform(122.8,77.1,0.784,0.784,0,0,180);

	// Capa 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#404041").s().p("AAgKGQiilEhzjuQjanDgtjUQB9g5CCgLQB9gLChAeQCkEqCrFtQCTE9gGAHQhdCDikBdQh4BEhCAAQgTAAgPgFg");
	this.shape_2.setTransform(215.6,353.3,0.784,0.784,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDEDED").s().p("AjZCMQgxhfgPghQA5gRCeh/QCdiAADgeQAXAYBJB1IBcCVQguBJhhBNQiFBriTAiQgWgug2hpg");
	this.shape_3.setTransform(193.9,390.6,0.784,0.784,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#404041").s().p("AhgM1QhcgHidgoQAXh+Bep9QBOoaBGknQAjAVA6A3QBQBJBBBWQDAD7gEEEQhJDCgoEKIgcDVQgQB/gOBJQhyAahkAAQgdAAgcgCg");
	this.shape_4.setTransform(228.4,247.1,0.784,0.784,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#1A1A1A","#272727","#343433"],[0,0.576,1],-32.2,2.1,49.6,-3.4).s().p("AkvDpQgFgiADgVQBfgvCoh/QDRifBgiBQAVAXAXAgQiYCfh8BrQiiCPinBpQAAgMgFgog");
	this.shape_5.setTransform(171.7,406.5,0.784,0.784,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#EA9966","#F7B87D"],[0.224,0.667],-30.9,-29.5,29,42.9).s().p("AiDEqQgphVgoiDQgihyAEgKQAKgFDoj9QAtA0BYBzQA+BRAwA/QheBQh3BbQhyBagtAcg");
	this.shape_6.setTransform(183.7,396.8,0.784,0.784,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DE8F5E").s().p("Ah+EqQgjhUg/iEQgqhYABgHICaiSQBthoAggnQA2A9BRBwIBlCKQidCTjoCTg");
	this.shape_7.setTransform(185.2,397.3,0.784,0.784,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#542E0F","#552F10","#704829","#7A5233"],[0.075,0.082,0.443,0.655],-129.3,0,79.9,0).s().p("AkiCsQg/grgQgpQgQgnARg9QAfgdBPgcIAoAUQAtAUAUAAQgtgqgmgsQAzgsA0gQQA9gTA0AYQAgAPA9AzQBCA2AGAYQAKACAKgFQALgFAFgJQAHgMgbg8Qgdg+gYgFIBOAMQAsAHAgAKQBCA2AgBbQAeBSgUArQgeAbjqAaQiBAPhmAAQhgAAhFgNg");
	this.shape_8.setTransform(149,21.2,0.784,0.784,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#542E0F").s().p("AmcCzQhHgwgWgNQgCgaAHgjQAEgWAMgtQBphgCTg0QDGhGB0BhQgNgUglgaQgjgZgpgQQBvglDPA0QBRAUBDAdQBBAbATAVQgQDegVBHQgXAVkfAOQjKAJkfAEIhSg4g");
	this.shape_9.setTransform(149.1,20.4,0.784,0.784,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#542E0F").s().p("Ag1HRQgZgwgVg2Qgem0gBgqQgGijAbguQAbguBLg/QBNhEA+gYQgEAxACBEIACB2QgxAFgmAvQgdAjgKAnQgeCAAGECQAECIAICpQgRgIgeg2g");
	this.shape_10.setTransform(187.3,60.4,0.784,0.784,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#542E0F").s().p("AA0DtQgDj+gjiLQgJglgRgiQgbgvgcgEQAChfhQinQBPAXBaBjQBMBTAdBCQAPAjACCFQACC7gdEsQgFAegaA1QgYAzgRAVQAGipgBiHg");
	this.shape_11.setTransform(103.4,58.9,0.784,0.784,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B3774C").s().p("AgFgGQALgFANACIAJADQgQAEgPAEIgYAJQAFgLARgGg");
	this.shape_12.setTransform(137.1,110.1,0.784,0.784,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DE8F5E").s().p("AgWAuQAAgBAKgFQAMgHACgMQAFgQgQgyIATAfQAOAWgCAOQgBAGgUAKQgOAIgHAAIgCAAg");
	this.shape_13.setTransform(134.8,107.5,0.784,0.784,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B3774C").s().p("AAAAAIgdgGIALgDQAMgCALAFQASAGAHALQgNgHgRgEg");
	this.shape_14.setTransform(148.9,110.6,0.784,0.784,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DE8F5E").s().p("AAAAnQgUgKgBgFQgEgPAQgYQAJgSALgMQgJAfgCANQgCASACAIQAEAJAKAHIAJAFIgCAAQgGAAgPgHg");
	this.shape_15.setTransform(152.1,107.3,0.784,0.784,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#F7B87D","#FFF0CF"],[0.267,1],-1.4,-48.1,1.5,68.2).s().p("AglCQQgRgXACgQQANhZAEgyQAHhggSgmIBTAAQgUAoAJBWQAFAvAWBmQADAPgQAWQgSAZgWAAQgUgBgRgYg");
	this.shape_16.setTransform(143.4,95.1,0.784,0.784,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#F7B87D","#F1AE75","#E19361","#DE8F5E"],[0.012,0.173,0.447,0.486],-39,32,71.5,-58.8).s().p("Ag8E0QAniMAQgbQBAiZAmkAQAYjhABgCQAGC9gODnQgSEigqBHQgVAjicCuQAYgsAniPg");
	this.shape_17.setTransform(107.7,100.6,0.784,0.784,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#F7B87D","#DE8F5E"],[0.012,0.545],13.9,44.6,-44.8,-88.6).s().p("AhGC6QgdiBgUiyQgSiTgIiZQAUCICPGFQAcBqAoBTQA0BrAIAWQjLizgNg5g");
	this.shape_18.setTransform(179,108.1,0.784,0.784,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#F7B87D","#F0A871"],[0.318,0.855],-15.1,19.1,14.9,-20.6).s().p("AAKBFIiOAFQgQgNgdg6Qgeg6ACgSQA5AFCUADQCdADAygEQgGA2gwBWQg6gGhVABg");
	this.shape_19.setTransform(142.9,130.7,0.784,0.784,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DE8F5E").s().p("AggAAIgNgLQAgAQAUgDQAIgBAfgPQgXAdgWAAQgQAAgRgPg");
	this.shape_20.setTransform(143,111.9,0.784,0.784,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#F7AB77","#F7B87D"],[0,0.89],5,-1.7,0,5,-1.7,28.5).s().p("AiRD9QhAgmgihGQgjhGAIhOQAIhVA5hIQA3hGBUghQBRghBUAOQAzAJAqAiQAoAhAZAyQAIAQAIAUIgaCRQgWB+gDAMQgoAzg4AgQg6AhhAAHIgZABQhDAAg5gig");
	this.shape_21.setTransform(121.4,103,0.784,0.784,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#F7AB77","#F7B87D"],[0,0.89],-3.9,-0.5,0,-3.9,-0.5,28.4).s().p("AgGEYQhCgFg7ghQg5gfgogzQgxjsgBgVQAIgZAOgbQAbgxAqghQArgjA0gJQBVgPBSAfQBUAfA3BDQA4BGAIBTQAGBMgkBGQgkBFhDAmQg8AkhHAAIgUgBg");
	this.shape_22.setTransform(166.1,101,0.784,0.784,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#F7B87D","#F7B87D","#EA9966"],[0.286,0.725,1],0,105.2,0,-86.1).s().p("AiINCQhLguiGh5QiZiJgMg1QgrjDgYkiQgUjxAGhWQAMivAMg7QAVhrA5g5QBBhBCFgbQCMgbDyAKQCxAHBkAhQBgAgAvA/QAoA2AQBgQAHArAOCmQALCIgOEWQgRFRguBOQgZArhtB7Qh+CNhEAuQhVAKhnACIgbAAQhfAAgUgMg");
	this.shape_23.setTransform(144.5,85.3,0.784,0.784,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C4784F").s().p("AiUNYQg2gYiWiVQiViTgJgmQgtiygbkrQgXj5AFhWQALigAShHQAZhnBAg8QBHhCCLglQCOglD0gQQD9gPB0CYQBfB7AWENQAHBegZD2QgaD6gnDQQgGAih4CUQiDChhOAxQhJAKhuABIgaAAQhhAAgYgKg");
	this.shape_24.setTransform(143.5,85.6,0.784,0.784,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#E09663","#E69E69","#F5B47A","#F7B87D"],[0.475,0.663,0.961,1],3.1,29.1,-10,-15.1).s().p("Ag1BJQgFg+AKgrQADgPAYgqQAYgvANgDQARgCAKAKQAQAOgEAjQgUgkgiAzQghAzgKBVQgEAkABAjQgGgdgCgmg");
	this.shape_25.setTransform(93.3,94.5,0.784,0.784,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#F7B87D","#DE8F5E"],[0,1],-7.4,3,3,-2.3).s().p("AgeBFQgKgGAQg/QAQhAAIgDQALgDALAGQAMAHAAAMQACAggXAmQgFAIgRATQgSARgCAAIgBAAg");
	this.shape_26.setTransform(94.4,94.6,0.784,0.784,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#EA9966","#F7B87D"],[0,0.667],-18.7,6.7,9.9,-4.6).s().p("AhHCxQgSglgGhCQgOicA4hWQAeguA4AKQA7AJAFA4QAHBJgYBNQgSA/gjA6QgQAbgPAVQgOASgJAGQgGADgGAAQgSAAgOgeg");
	this.shape_27.setTransform(95.6,94,0.784,0.784,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#E09663","#E69E69","#F5B47A","#F7B87D"],[0.475,0.663,0.961,1],-3.1,-15.2,10.1,29.3).s().p("AAvBFQgLhVgkg0QglgzgWAlQgEgjARgOQAMgKARADQAOACAbAvQAaAqADAPQALApgFA/QgDAngGAdQABglgEgig");
	this.shape_28.setTransform(195.1,96.7,0.784,0.784,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#F7B87D","#DE8F5E"],[0,1],8.3,-1.6,-3.4,2.2).s().p("AALA0QgTgSgFgJQgZglACghQAAgMANgHQAMgGALADQAKADARBAQARA/gKAGIgBAAQgDAAgTgRg");
	this.shape_29.setTransform(193.9,96.7,0.784,0.784,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#EA9966","#F7B87D"],[0,0.667],19.4,-5.3,-10.2,7.4).s().p("AAeDMQgJgGgQgSQgQgVgRgbQgmg6gVg/QgZhNAHhJQAGg3BAgKQA9gJAgAtQA+BWgQCcQgGBCgUAlQgQAegTAAQgHAAgGgDg");
	this.shape_30.setTransform(192.6,96.2,0.784,0.784,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#1A1A1A","#4D4D4D"],[0,0.725],-144.2,1.3,15.5,-0.2).s().p("AiUClQALmXAblTQCVh0A7grQAFDWAdH6QAbHjAAA0QhSBUhKA5QhiBMg/AJQAEleAGjig");
	this.shape_31.setTransform(168.1,535.4,0.784,0.784,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231F20").s().p("AgjAeQgdgnAigbQAggaAjATQgXgEgMALQgKAJgBARQgBAdAQAPQAWAQAVghQgLAegcAEIgIABQgVAAgQgWg");
	this.shape_32.setTransform(104.5,375,0.784,0.784,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#231F20").s().p("AgjAeQgdgnAjgbQAfgaAjATQgXgEgNALQgIAJgCASQgCAcARAPQAVAQAWghQgLAegcAEIgIABQgVAAgQgWg");
	this.shape_33.setTransform(105,328.6,0.784,0.784,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#323233").s().p("AhZlPQgIjjgfjbQgNhbgojTICAAgQBZAWArAMICWHPQgjAphGBHQg+A+gUASQAKAOBGBHQA+BAAVAdQgFANicIDQisInhkC9QChsPgWp8g");
	this.shape_34.setTransform(96,242.9,0.784,0.784,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#282829").s().p("AhFk9QgFjFgci5QgMhUgmi+QAXAIA6APQA3AOAtAQQAKADBEC9IBYD6QABAKhGBTQhDBPgZAUQAaAeApA4QAlAyAYAmQgnCjhsFKQhtFShkD/QCNr4gQoTg");
	this.shape_35.setTransform(93,236.5,0.784,0.784,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#282829","#2E2E2F","#3D3D3E","#404041"],[0.067,0.447,0.933,1],269.1,-87.6,-192.6,66.7).s().p("AhvgUIDXgbQABAgAIAgIjVAfg");
	this.shape_36.setTransform(70.3,368.4,0.784,0.784,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#404041").s().p("AkvV0Qg9j8gBg+QgGjsAIkVQAKjngBgUQCbrWAUpYQAOmvg4lIQBaAaHEBnQANAFAPAXQAVAhgCAtQgECjgsGUQgXDUghEQQg3ILAhHKQANFbAgE9QgmCQidD8QgKAhiXBbQhMAuhMAmQgNhZhFkbg");
	this.shape_37.setTransform(82.7,299.2,0.784,0.784,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#282829").s().p("Ah9FwQhCkrAAgEIgNklQgNkeADgKIAwiYQAnh3AHgeQAiAFBAA1QA/A2AhAGQAEFCAsF4QANBwBRJEQgfAWhcAwIiJBJQgKiLhHk/g");
	this.shape_38.setTransform(97.1,369.2,0.784,0.784,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#282829","#2E2E2F","#3D3D3E","#404041"],[0.067,0.447,0.933,1],-256.7,-55.5,216.5,45.8).s().p("AgCAcQiqgQh9gJQgCgEABgWQABgWACgKIJSAqIgIBFIklgcg");
	this.shape_39.setTransform(179.7,367.7,0.784,0.784,0,0,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#282829","#333334","#404041"],[0.067,0.404,0.69],-148,-30.9,187,40.8).s().p("ABCRqQhfgVhRgdQAQifAikQQAhj8AKhxQAOiaiSolQiqpYgsifQgHgYBmCIQB0CaBpC/QFIJZAoJyQAEA4AaDxQAWDygOCJQiwgZh1gbg");
	this.shape_40.setTransform(197.1,307.4,0.784,0.784,0,0,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#323233").s().p("AkOAWIAqhXQAZg0AIgWQgEAChhgmQhfgkhXglQgEgQgyk3Ig1lOQCEg7BogqQARDCGIMyQCZE/CbEoQCWEeBEBsg");
	this.shape_41.setTransform(152.7,238.7,0.784,0.784,0,0,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#282829").s().p("ACvIcQminOgpgyIBIi8QgGAChtgpQh1gtg4gZIgslZQgkkTgFgTQAwgXA9ghQAsgWAdgDQARC+GhMhQCfEwCnEpQCcEUBJBvImbnCg");
	this.shape_42.setTransform(152.2,240.3,0.784,0.784,0,0,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#404041").s().p("AIGbZQiwgTgggpQgdgmgghJQgkhXgTgrQhHighcgmQAKhng6iCQgphXhmiTQh2isghg5QhIh+gGhdQgGj6hKkgQg3jXhYjgQgtjOhPkCQhLj1gMg+QgBgiADgoQgBgJAKgTQANgYAVgKQB/g0DLhHQDFhFA9gaQARC8GuMhQCgEoCvEtQCcEMBMB0QgEgGgRDFQgWD1gJEcQgOBYgYE+QgcFtgHBBIgXABQg2AAhogLg");
	this.shape_43.setTransform(171.3,301.7,0.784,0.784,0,0,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#DBDBDB").s().p("AjEA9QgJgOhXipQAQgsAfg7QAdg7AFgBQAiBSCFBgQCOBmDDBFQguAFgRADQgkAHgZAOQgwAchMBWQgmAqgbAlQhnhlhJh8g");
	this.shape_44.setTransform(156.4,171.5,0.784,0.784,0,0,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#AFAFAF").s().p("Aj6ATQgzhVgKg2QgCgMAphSQAqhVAVgMQAzBfB2BZQCOBtDSBGQgigCgwARQghALgbAPQg0AihMBgQglAwgaApQiYijhNiCg");
	this.shape_45.setTransform(156.5,172.5,0.784,0.784,0,0,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EDEDED").s().p("ABfCtQhDgshAgRQgVgFg2gBQgxABgCgBQBUgtBEhjQA9hdANhTQAEgCAhAsQAkAyARAqQAJBOAABLQABBcgOAyQABgGg4gkg");
	this.shape_46.setTransform(122,168.2,0.784,0.784,0,0,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#AFAFAF").s().p("ACuD5IAAAAIAAAAgABxDFQhMg4hKgbQgfgKgpgDQgYgBgyABQB6g3BDh8QAuhUALhWQAIAEA0BIQA1BJAAAKQgBAMAICMQAFCRgOApQACgGg/gug");
	this.shape_47.setTransform(122.3,168.7,0.784,0.784,0,0,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#0068AF","#004F91"],[0,1],10.1,-33.5,-9.6,31.8).s().p("AgTCJQgtgygkgvQg4hHALgOQAYgiAggXIAbgQQAMgHAvgGQAvgIATAFQAkAKAiAFQAQADgBAOQAAAPgLBeIgNBsQg3AWhLAAIgNAAg");
	this.shape_48.setTransform(133.8,186.9,0.784,0.784,0,0,180);

	this.instance = new lib.Path_45();
	this.instance.setTransform(126.1,215.7,0.784,0.784,0,0,180,12.8,22.4);
	this.instance.alpha = 0.34;

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#0068AF","#004F91"],[0,1],-84,34.2,45.8,-18.9).s().p("AgmJvQiDjIgvgkQAGiJgCpbQgCmnAhgpQAmgEANgCQAkgIAdgQQBBBMBIDfQBgEcAxFwQgDAMgnFpQgjE8gnA3IiLjhg");
	this.shape_49.setTransform(119.6,264.4,0.784,0.784,0,0,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#00317D","#004F91"],[0,1],-30.5,0,30.5,0).s().p("AAXMHQibi9g0gnQAJiTgDpHQgCm/Aig6QiCiKgbg3QgCgDAXggQAXggAAgCQA8gOBHgLQBAgKALgEQArANARANQAMAIANARQAFAqgKBNQgIBFgLAnQACgDAZAuQAhA+AjBiQBwE3BZIZQAEBegiDrQgnEGgqA6QgcgriOirg");
	this.shape_50.setTransform(124,252.5,0.784,0.784,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EDEDED").s().p("AkDTrQjigriqhrQAEhXgmkeQgRiChFnYQiCtygCkNQBUgzB+hCQCchRBFgWQAfBDDPBFQC2A8B9AJQB5AJBOhSQA5g6Ash5QAaAKDaA7QDYBDAyA8QAzEgg2M7QgMC/ghGYQgYE0gCBRQhUBpivBHQiqBFjUATQhIAGhHAAQiPAAiNgag");
	this.shape_51.setTransform(141.6,258.1,0.784,0.784,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#282829","#404041"],[0.102,1],3.4,-286.1,-13.5,388.6).s().p("EgHMAqbQh6gIhhgWQhpgXgnghQAEg0AFg5QAHg+AEgKQAnhTADgNQADgKgVgQQgXgSgBgLQgDgWANirIARjcQAmoyAFvbQAFubgatRIgWoqQgHiwAShmQAijGB9jGQCdgJI3gWQJogYBTADQAqDDjiF+QhQCIhbB4QhQBqgaAOQgqAdhVAeQhQAagKAGQgWC3hCRuQhMUwgWNgQgFDOgJDlQgME1gLBbQhJAvi9AAQg0AAg+gDg");
	this.shape_52.setTransform(140.1,578.2,0.784,0.784,0,0,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#282829","#404041"],[0,0.945],-57.4,-39.8,54.1,21.8).s().p("AhOKKQiXg0iChMQgIgEA/lxQBHmfBMlHQCQhHBygWQB3gWCGAVQADAEACAQQACAQAAANQgBB+hjIgIh7KaQhMAAiMgwg");
	this.shape_53.setTransform(57.1,353.8,0.784,0.784,0,0,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EDEDED").s().p("AhyCnQh4hKg0hDIBKidQA8h9ATgaQAHAdCxBkQCwBjA8ANQgIAYghB9QgfB2gUA5QiYgRidhjg");
	this.shape_54.setTransform(66.4,393.4,0.784,0.784,0,0,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#282829","#333334","#404041"],[0.314,0.569,0.788],-97.3,21.3,62.6,-11.7).s().p("AiQNCQgQhIgUiCIgjjjQgxkghOi5QgOj/CmkNQA6heBGhQQA4g/AcgUQBmEwBaIZQAYCNAqEOQAlDkAaB7QADAMgPAQQgOAOgRAFQiBAkhPAIQgnAFgoAAQhLAAhSgQg");
	this.shape_55.setTransform(56.1,241.6,0.784,0.784,0,0,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#1A1A1A","#212121","#2F2F2E","#343433"],[0,0.173,0.616,1],18.6,-0.8,-62.8,2.8).s().p("Ai5hHQARgeAKglQBkA/BpA4QBcAtAuARQACAMgHAlQgGAhgGAOQivhXiyh7g");
	this.shape_56.setTransform(69.1,417.3,0.784,0.784,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#EA9966","#F7B87D"],[0.224,0.667],-36.3,36.7,40.6,-22.4).s().p("AglCsQilheg4gxQDTkcAkgjQEDDgAKAEQAFAKgVB0QgZCIggBZIgBACQhZgriEhMg");
	this.shape_57.setTransform(69.8,399.6,0.784,0.784,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#1A1A1A","#282829","#404041"],[0.035,0.192,1],-139.3,-68.8,271.4,122.9).s().p("EgBtAp2QhugOgYg0QgBgTgKhBQgJg7ABgOQABgIAPgxQANgtABgRQADgBgUgTQgYgXgFgNIhE1kQhJ4BgtqcQgKh2gMn9QgMnTAAi5QEzghHphAQAAAvAiFMQAkFeAEBmQABAtgBELQAGETAcafQAUUFAQDCQARCwAWEFQAQC+ACAIQgbAihvAkQhrAkiBASQhYAMhEAAQgqAAgkgEg");
	this.shape_58.setTransform(85.4,569.9,0.784,0.784,0,0,180);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#E09663","#F7B378"],[0.141,0.675],-1.5,-34.2,1.8,48).s().p("AAAFPQhkgWhrhaQhhhShSh7QAZhLAAhgQABhhgahbQEDAVBsADQDVAHCYgZQgJCAACApQAFBoArBlQh7EvjLAAQgeAAgfgHg");
	this.shape_59.setTransform(144.5,160.4,0.784,0.784,0,0,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#1A1A1A","#1E1E1E","#2B2B2B","#414141","#4D4D4D"],[0,0.204,0.424,0.651,0.753],2.9,-102.5,-4.8,141.7).s().p("AgDDtQg9AAhSgLQgNgCACjbQACjNAGgkQAQAECHAHQCKAHAOgDQALAggVDPQgUDQgMAFQg+AGgvAAIgGAAg");
	this.shape_60.setTransform(176.1,789.6,0.784,0.784,0,0,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#1A1A1A").s().p("Ah+FMQgzgFhKhCQhMhDAAgsQAAgwAzihQAwibA0h+QEVAEClgBQAHA3AbC8QAWCTAGBDQADArg9BJQguA3g2ArQg/AHhHAAQhLAAhXgJg");
	this.shape_61.setTransform(177,786.6,0.784,0.784,0,0,180);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AAAF9QhugEgjgKQglgKhGhQQhLhVAAgvQAAg1AwirQAwioA0iHQFSAEBwgBIAgEBQATCUAGBOQADA0g/BrQg9BoglANQgiADgxAAQgnAAgwgCg");
	this.shape_62.setTransform(177,788.8,0.784,0.784,0,0,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("ACfDHIgNgCQgygLizhRQjAhXgsgSIAHAmQgmgOhrgpQhngqg2gXQgTgIgLgxIgJg9QA3AaDHBPQBWAiDbBmQDFBZBfALQAcADBegFQBsgGA6gMQAWgFA5gnQBBgugMgXIACgBQAPADALAaQAMAZgGAJQgQAYgtAgQgyAigwAQQg2AKhrAJQhPAGgyAAQgaAAgSgCg");
	this.shape_63.setTransform(51.5,797.1,0.784,0.784,0,0,180);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#1A1A1A","#1E1E1E","#2B2B2B","#414141","#4D4D4D"],[0,0.271,0.565,0.867,1],-49.1,0,58.2,0).s().p("AhXAyQlQivhDhQQDBABC6gbQA6BNDMB2QBLAoEJCKQgMARg4AbQg9AdhBARQhMgTk0ijg");
	this.shape_64.setTransform(55,780.2,0.784,0.784,0,0,180);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#1A1A1A").s().p("AC7E2QhGgNlniVQk/iEg8gcQgWhJgEhFQgFhUAZgzQD+ATESgoQBMBjFZC2IDjB0QBjA0ABAMQABAfggAfQgfAdhDAlQhAAMhgALQhbAJgzAAIgfgBg");
	this.shape_65.setTransform(52.8,786.5,0.784,0.784,0,0,180);

	this.addChild(this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.instance,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,2,255.5,817);


(lib.contenedor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var var_it01 = this.it01;
		var var_it02 = this.it02;
		var var_it03 = this.it03;
		var var_it04 = this.it04;
		var var_it05 = this.it05;
		var var_it06 = this.it06;
		var var_it07 = this.it07;
		var var_it08 = this.it08;
		
		var_it01.alpha = 0;
		var_it02.alpha = 0;
		var_it03.alpha = 0;
		var_it04.alpha = 0;
		var_it05.alpha = 0;
		var_it06.alpha = 0;
		var_it07.alpha = 0;
		var_it08.alpha = 0;
		
		
		
		createjs.Tween.get(var_it01).wait(4200).to({alpha:1}, 600, createjs.Ease.quadOut);
		createjs.Tween.get(var_it02).wait(4600).to({alpha:1}, 600, createjs.Ease.quadOut);
		createjs.Tween.get(var_it03).wait(5400).to({alpha:1}, 600, createjs.Ease.quadOut);
		createjs.Tween.get(var_it04).wait(5900).to({alpha:1}, 600, createjs.Ease.quadOut);
		createjs.Tween.get(var_it05).wait(6400).to({alpha:1}, 600, createjs.Ease.quadOut);
		createjs.Tween.get(var_it06).wait(6800).to({alpha:1}, 600, createjs.Ease.quadOut);
		createjs.Tween.get(var_it07).wait(7600).to({alpha:1}, 600, createjs.Ease.quadOut);
		createjs.Tween.get(var_it08).wait(8800).to({alpha:1}, 600, createjs.Ease.quadOut);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa 2
	this.it08 = new lib.Símbolo7();
	this.it08.setTransform(719.8,256.2,1,1,0,0,0,94.6,61.4);

	this.it06 = new lib.Símbolo9();
	this.it06.setTransform(514.9,299.3,1,1,0,0,0,94.6,65);

	this.it04 = new lib.Símbolo2();
	this.it04.setTransform(314.1,304.6,1,1,0,0,0,93.7,61.9);

	this.it02 = new lib.Símbolo1();
	this.it02.setTransform(111.7,250.5,1,1,0,0,0,93.7,63.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.it02},{t:this.it04},{t:this.it06},{t:this.it08}]}).wait(1));

	// Capa 1
	this.it07 = new lib.Símbolo6();
	this.it07.setTransform(636.1,290.5,1,1,0,0,0,99,290.5);

	this.it05 = new lib.Símbolo5();
	this.it05.setTransform(512.1,290.5,1,1,0,0,0,88,288);

	this.it03 = new lib.Símbolo4();
	this.it03.setTransform(213.1,285.5,1,1,0,0,0,143.5,279.5);

	this.it01 = new lib.Símbolo12();
	this.it01.setTransform(118.1,289.5,1,1,0,0,0,118.1,287.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.it01},{t:this.it03},{t:this.it05},{t:this.it07}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,814.4,581);


(lib.cejaiz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.cejaiza();
	this.instance.setTransform(13.6,4.9,1,1,0,0,0,13.6,4.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-7,y:-1.1},8,cjs.Ease.get(1)).wait(140).to({y:3.4},6,cjs.Ease.get(1)).wait(140).to({y:5.9},0).to({rotation:2.7,y:-2.6},7,cjs.Ease.get(1)).wait(106).to({rotation:2.7},0).to({rotation:0,y:4.9},8).wait(295));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.3,9.8);


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
		
		var audio2 = createjs.Sound.play("sounds/audios-6.mp3");
		this.addChild(audio2);
			
		
		function inicioAudio2(){
		
		}
		
		inicioAudio2();
		
		
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
				if ((0 <= posicion2  && posicion2 < 139) || (658 <= posicion2  && posicion2 < 1075) ||(4200 <= posicion2  && posicion2 < 4715) ||(5500 <= posicion2  && posicion2 < 5890) || (6445 <= posicion2  && posicion2 < 6800) || (7800 <= posicion2  && posicion2 < 8000) ||(8600 <= posicion2  && posicion2 < 8911)  || (9278 <= posicion2  && posicion2 < duracion2) ) {
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
	this.instance.setTransform(143.4,64.6,1,1,0,0,0,35.3,5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// ojos
	this.instance_1 = new lib.ojoshombre();
	this.instance_1.setTransform(144.2,81.6,1,1,0,0,0,32.8,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 1
	this.bocah1 = new lib.bocahombre56();
	this.bocah1.setTransform(143.5,123.4,0.851,0.764,0,0,0,22.4,10.2);
	this.bocah1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bocah1).wait(1));

	// 2
	this.bocah2 = new lib.bocah02();
	this.bocah2.setTransform(143.3,123.1,0.851,0.764,0,0,0,22.7,8.7);
	this.bocah2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bocah2).wait(1));

	// 3
	this.bocah3 = new lib.bocah03();
	this.bocah3.setTransform(143.3,124.4,0.851,0.764,0,0,0,10.5,9.7);
	this.bocah3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bocah3).wait(1));

	// 4
	this.bocah4 = new lib.bocah04();
	this.bocah4.setTransform(143.9,123.1,1,1,0,0,0,17.6,6.8);
	this.bocah4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bocah4).wait(1));

	// 5
	this.bocah5 = new lib.bocah05();
	this.bocah5.setTransform(143.5,122.4,0.851,0.764,0,0,0,22.4,4.9);
	this.bocah5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bocah5).wait(1));

	// 6
	this.bocah6 = new lib.bocah06();
	this.bocah6.setTransform(143.2,124.3,0.814,0.899,0,0,0,18.6,6.8);
	this.bocah6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bocah6).wait(1));

	// 7
	this.bocah7 = new lib.bocah07();
	this.bocah7.setTransform(143.8,123.1,1,1,0,0,0,13.4,2.7);
	this.bocah7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bocah7).wait(1));

	// 8
	this.bocah8 = new lib.bocah08();
	this.bocah8.setTransform(143.8,123.1,1,1,0,0,0,17.4,7.2);
	this.bocah8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bocah8).wait(1));

	// 9
	this.bocah9 = new lib.bocah09();
	this.bocah9.setTransform(143.9,123.1,1,1,0,0,0,17.9,5);
	this.bocah9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bocah9).wait(1));

	// 10
	this.bocah10 = new lib.bocah10();
	this.bocah10.setTransform(143.4,122.6,1,1,0,0,0,14.8,4.3);
	this.bocah10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bocah10).wait(1));

	// 11
	this.bocah11 = new lib.bocah11();
	this.bocah11.setTransform(143.8,123,1,1,0,0,0,17.9,3.8);
	this.bocah11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.bocah11).wait(1));

	// boca
	this.bocah12 = new lib.boca01();
	this.bocah12.setTransform(144.1,121,1,1,0,0,0,23.1,8.8);

	this.timeline.addTween(cjs.Tween.get(this.bocah12).wait(1));

	// cuerpo
	this.instance_2 = new lib.cuerpoh();
	this.instance_2.setTransform(155.2,408.8,1,1,0,0,0,155.2,408.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,2,255.5,817);


// stage content:
(lib.lip01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_40 = function() {
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
		
		var audio1 = createjs.Sound.play("sounds/06.mp3");
		
		audio1.on(  "complete", 
					function(){
						this.gotoAndPlay(42);
						}, 
					this);
		
		
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
				if ((0 <= posicion1  && posicion1 < 411) || (1626 <= posicion1  && posicion1 < 1800) ||(4643 <= posicion1  && posicion1 < 4825) ||(6343 <= posicion1  && posicion1 < 6500) || (9500 <= posicion1  && posicion1 < 9807) || (12147 <= posicion1  && posicion1 < duracion1) ) {
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
	this.frame_77 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(37).call(this.frame_77).wait(1));

	// personaje
	this.personajeH = new lib.Personajehombre();
	this.personajeH.setTransform(1480.9,570.8,1.103,1.103,0,0,0,155.2,408.8);
	this.personajeH._off = true;

	this.timeline.addTween(cjs.Tween.get(this.personajeH).wait(41).to({_off:false},0).to({x:1170.8},25,cjs.Ease.get(1)).wait(12));

	// Capa 4
	this.instance = new lib.Group_1();
	this.instance.setTransform(1466.8,435.5,1,1,0,0,0,177.5,190.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({_off:false},0).to({x:1186.2,alpha:0.48},14,cjs.Ease.get(1)).wait(23));

	// Capa 10
	this.instance_1 = new lib.contenedor();
	this.instance_1.setTransform(655.2,434,1,1,0,0,0,402.8,290.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41).to({_off:false},0).wait(37));

	// Capa 5
	this.instance_2 = new lib.persjurur();
	this.instance_2.setTransform(629.2,437.2,1,1,0,0,0,98.5,285.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({alpha:1},26,cjs.Ease.get(1)).wait(40));

	// 2
	this.boca2 = new lib.boca2();
	this.boca2.setTransform(80.7,253.9,0.124,0.124,0,5.5,-174.5,144.5,55.9);
	this.boca2.alpha = 0;
	this.boca2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.boca2).wait(28).to({_off:false},0).wait(50));

	// 3
	this.boca3 = new lib.boca3();
	this.boca3.setTransform(80.9,253.8,0.108,0.107,0,5.5,-174.5,163.1,46.6);
	this.boca3.alpha = 0;
	this.boca3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.boca3).wait(28).to({_off:false},0).wait(50));

	// 4
	this.boca4 = new lib.boca4();
	this.boca4.setTransform(82,254.7,0.144,0.145,0,1.5,-178.5,107.4,66.8);
	this.boca4.alpha = 0;
	this.boca4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.boca4).wait(28).to({_off:false},0).wait(50));

	// 5
	this.boca5 = new lib.boca5();
	this.boca5.setTransform(81.7,254.7,0.122,0.114,0,5.5,-174.5,143.2,93);
	this.boca5.alpha = 0;
	this.boca5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.boca5).wait(28).to({_off:false},0).wait(50));

	// 6
	this.boca6 = new lib.boca6();
	this.boca6.setTransform(81.7,255.3,0.14,0.139,0,5.5,-174.5,84.5,90.8);
	this.boca6.alpha = 0;
	this.boca6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.boca6).wait(28).to({_off:false},0).wait(50));

	// 7
	this.boca7 = new lib.boca7();
	this.boca7.setTransform(80.3,255.6,0.132,0.111,0,5.5,-174.5,147.3,84.5);
	this.boca7.alpha = 0;
	this.boca7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.boca7).wait(28).to({_off:false},0).wait(50));

	// 8
	this.boca8 = new lib.boca44();
	this.boca8.setTransform(80.9,250.6,1.147,1.147,0,0,180,20.6,12.2);
	this.boca8.alpha = 0;
	this.boca8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.boca8).wait(28).to({_off:false},0).wait(50));

	// OjosCerrados
	this.ojos_cerrados = new lib.ojos_cerrados();
	this.ojos_cerrados.setTransform(78.9,211.2,1.147,1.147,0,15,-165,36.5,9);
	this.ojos_cerrados.alpha = 0;
	this.ojos_cerrados._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ojos_cerrados).wait(28).to({_off:false},0).wait(50));

	// CejaDerecha
	this.ceja_derecha = new lib.ceja_derecha();
	this.ceja_derecha.setTransform(-100.8,201.2,1.147,1.147,0,15,-165,15.1,5.5);

	this.timeline.addTween(cjs.Tween.get(this.ceja_derecha).to({x:107.9},28,cjs.Ease.get(1)).wait(50));

	// CejaIzquierda
	this.ceja_izquierda = new lib.ceja_izquierda();
	this.ceja_izquierda.setTransform(-153.9,190.8,1.147,1.147,0,15,-165,15.3,3.7);

	this.timeline.addTween(cjs.Tween.get(this.ceja_izquierda).to({x:54.8},28,cjs.Ease.get(1)).wait(50));

	// Bocas
	this.boca1 = new lib.boca1();
	this.boca1.setTransform(-136.8,258.2,1.147,1.147,0,15,-165,17.4,7);

	this.timeline.addTween(cjs.Tween.get(this.boca1).to({x:71.9},28,cjs.Ease.get(1)).wait(50));

	// OjosAbiertos
	this.ojos_abiertos = new lib.ojos_abiertos();
	this.ojos_abiertos.setTransform(-129.5,210.1,1.147,1.147,0,15,-165,36.5,9);

	this.timeline.addTween(cjs.Tween.get(this.ojos_abiertos).to({x:79.2},28,cjs.Ease.get(1)).wait(50));

	// Personaje
	this.personaje = new lib.Símbolo10();
	this.personaje.setTransform(-295.7,105,1,1,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.personaje).to({x:-87},28,cjs.Ease.get(1)).wait(50));

	// personaje
	this.instance_3 = new lib.verde();
	this.instance_3.setTransform(69,405.1,1,1,0,0,0,176.5,195.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).to({alpha:0.59},12).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(426.9,360,1493.1,1055.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;