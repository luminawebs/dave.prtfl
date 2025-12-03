(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 35,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/09.mp3", id:"09"},
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
p.nominalBounds = new cjs.Rectangle(0,0,223,73);


(lib.Mapadebits2 = function() {
	this.initialize(img.Mapadebits2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,73);


(lib.Mapadebits3 = function() {
	this.initialize(img.Mapadebits3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,509,90);


(lib.Mapadebits4 = function() {
	this.initialize(img.Mapadebits4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,489,84);


(lib.Mapadebits5 = function() {
	this.initialize(img.Mapadebits5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,489,70);


(lib.Mapadebits6 = function() {
	this.initialize(img.Mapadebits6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,489,106);


(lib.Sintítulo1fw = function() {
	this.initialize(img.Sintítulo1fw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,81);


(lib.Símbolo14 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Sintítulo1fw();
	this.instance.setTransform(-320,12);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgnRAICQh3AAhuhTQg0gnhlhwIkPlDIM8AAQgngegpgsIhChHIkOlFMBchAAAIkOFFQgoArl0GpQhlBwg0AnQhuBTh3AAg");
	this.shape.setTransform(-77.2,57.1,1,1,0,0,180);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-394,5.7,633.5,102.9);


(lib.Símbolo13 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DEB657").s().p("AizArQgPAAgLgNQgKgNgBgRQABgQAKgNQALgNAPAAIFbAAQARAAAPANQAQAOAAAPQAAAQgQAOQgPANgRAAg");
	this.shape.setTransform(97.4,94.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B0ACA7").s().p("AC4DtQgWgmgfhMQg0h7gOgUQgkgxhTgTQhIgRgvgQQg+gVgngbQgGgigLgsQAqAqBDAYQAmAOBkAXQBiAXAyArQA4AwAaBgQAUBNAtA8QAXAeASAPQgkgHhIgEg");
	this.shape_1.setTransform(40.9,87.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C3BFBA").s().p("AjKCnQg0hKgKiTQgEhIgEggQgFgkgOg2QAqAqBEAYQAiANBoAYQBhAXAyArQA4AwAaBgQAVBNAtA8QAWAeASAPQhMgPhpAGQhlAKgWABIgNAAQh2AAg7hSg");
	this.shape_2.setTransform(40.9,87.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C3BFBA").s().p("AjKCnQg0hKgKiTQgEhIgEggQgFgkgOg2QAqAqBEAYQAiANBoAYQBhAXAyArQA4AwAaBgQAVBNAtA8QAWAeASAPQhMgPhpAGQhlAKgWABIgNAAQh2AAg7hSg");
	this.shape_3.setTransform(40.9,87.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D4A73D").s().p("AiWBiQgWgGgUgOQgqgfgahFQgThGgFgNIHWAAQAYAAAWAIQAVAHANANQAHAGAEAHQAIAMAAAOIAAAUQAAASgEAXQgFAhgKAHQgMARgZAHQgsANiQAEIhOACQhSAAgfgIg");
	this.shape_4.setTransform(93.3,97.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C3BFBA").s().p("AinAoQgugLgfgiID2ghQD2gbgEAiQgFAog4AVQg7AVh5AAQh8AAgugLg");
	this.shape_5.setTransform(96.7,104.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#C3BFBA","#9EA1A0"],[0,1],18.7,-32.9,-26.2,63.9).s().p("AEWGCQkAgNAAgCQgbhQgxgsQg0guhdgVQhdgSgrgMQhJgTgsglQhPiNgBh6QgBhIAVg1QAWg5AsgYQBMgqBlAiQBwAmBCBwQCIDpBXBNQBGA/CGAiQBIASArApQA7A4AXBuIj/gNg");
	this.shape_6.setTransform(62.5,49.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DDDAD8").s().p("AChITQgWgGgUgOQgOgKgNgQQgagggSg0IgThFIgCgGQgbhRgxgrQg0guhdgWQhdgSgrgLQhIgUgtglQhThDgmiuQgShUANhOQAShqBMgtQAygeBHgDQBagEBaBJQBWBGBMCEQB6DXBUA7QAlAbAzAPQAfAKBLASQBmAbAkA3QAiAyAXCSIAACOQgDAJgJAFQgFADgNAEIgHADQgWAJhDAGQg9AFhKAAIgUAAQhlAAgkgJg");
	this.shape_7.setTransform(62,54.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6F2EC").s().p("ACiI+QgkgFgSgFQgcgHgVgNIpHnxQg/g9geh/Qgch5AShiQAYh6Beg6IACgBIAzgYQAkgLAogCQBwgFBWA3QBYA4BLB/IARAdQBzDBBRA0QAjAXAxAMQAeAHBKAOQCIAcA1BOQA3BTAJDGQAABTgTAmQgZAwhDATQguANh5AFQgrACglAAQhFAAgugGg");
	this.shape_8.setTransform(64.2,58);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C9A57A").s().p("ADCF8ImMr3IASAAIGDL3g");
	this.shape_9.setTransform(112.4,154.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D8D0CA").s().p("ADJGHImxsNIBEAAIGOMNg");
	this.shape_10.setTransform(110.9,154.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2C2925").s().p("AgIANIgOgZIAfAAIAOAZg");
	this.shape_11.setTransform(134.2,196.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2C2925").s().p("AASAxIg0hhIASAAIAzBhg");
	this.shape_12.setTransform(130.9,190.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2C2925").s().p("AAKA4Ig6hvIAnAAIA6Bvg");
	this.shape_13.setTransform(90.1,113.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C9A57A").s().p("AjKF8IGDr3IASAAImML3g");
	this.shape_14.setTransform(24.3,154.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D8D0CA").s().p("AjpGHIGOsNIBEAAImwMNg");
	this.shape_15.setTransform(25.7,154.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2C2925").s().p("AgWANIAOgZIAfAAIgOAZg");
	this.shape_16.setTransform(2.3,196.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2C2925").s().p("AgiAxIA0hhIARAAIg0Bhg");
	this.shape_17.setTransform(5.7,190.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2C2925").s().p("AgwA4IA6hvIAnAAIg6Bvg");
	this.shape_18.setTransform(46.4,113.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C9A57A").s().p("AgEF8IgHr3IAXAAIgHL3g");
	this.shape_19.setTransform(68.3,154.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D8D0CA").s().p("AgOGHIgSsNIBBAAIgRMNg");
	this.shape_20.setTransform(68.3,154.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2C2925").s().p("AgPANIAAgZIAfAAIAAAZg");
	this.shape_21.setTransform(68.3,196.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2C2925").s().p("AgHAxIAAhhIAPAAIAABhg");
	this.shape_22.setTransform(68.3,190.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2C2925").s().p("AgSA4IAAhvIAlAAIAABvg");
	this.shape_23.setTransform(68.3,113.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2C2925").s().p("Ah8C0QgEgDgBgFQgBgGADgEIDplSQADgEAFgBQAGgBAEADQAFADABAFQABAGgDAEIjpFSQgEAGgHAAQgEAAgEgDg");
	this.shape_24.setTransform(81.3,137.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2C2925").s().p("AC5CwImClKQgEgEgBgGQAAgFADgEQAEgEAGgBQAFAAAEADIGCFLQAEADABAGQAAAFgDAEQgEAFgGAAQgFAAgEgDg");
	this.shape_25.setTransform(91.6,137.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2C2925").s().p("ABqCxIjplSQgDgEABgGQABgFAEgDQAFgDAFABQAGABADAEIDpFSQADAEgBAGQgBAFgFADQgDADgEAAQgHAAgEgGg");
	this.shape_26.setTransform(55.8,137.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2C2925").s().p("AjLCuQgDgEAAgFQAAgGAEgDIGDlLQAEgDAFAAQAGABAEAEQADAEAAAFQgBAGgEAEImCFKQgEADgFAAQgGAAgEgFg");
	this.shape_27.setTransform(45.5,137.8);

	this.addChild(this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,136.6,197.7);


(lib.Símbolo12 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004F91").s().p("AgXAYQgKgKAAgOQAAgMAKgLQALgKAMAAQAOAAAKAKQAKALAAAMQAAAOgKAKQgKAKgOAAQgMAAgLgKg");
	this.shape.setTransform(3.5,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#004F91").ss(3).p("AAfgxIgyAyIAuAx");
	this.shape_1.setTransform(5.5,289.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#004F91").ss(3).p("AAfgxIgyAyIAuAx");
	this.shape_2.setTransform(5.5,173.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#004F91").ss(3).p("AAfgxIgyAyIAuAx");
	this.shape_3.setTransform(5.5,107.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#004F91").ss(3).p("AC3AAIltAA");
	this.shape_4.setTransform(21.8,173.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#004F91").ss(3).p("AC3AAIltAA");
	this.shape_5.setTransform(21.8,107.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#004F91").ss(3).p("Ai92aIDYAAQA9AAAsA3QArA2AABNMAAAAnBQAABNgrA2QgsA3g9AAIjYAA");
	this.shape_6.setTransform(22.5,146.1);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,46.3,296.1);


(lib.Símbolo11 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Mapadebits6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,489,106);


(lib.Símbolo9 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Mapadebits5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,489,70);


(lib.Símbolo8 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Mapadebits4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,489,84);


(lib.Símbolo7 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Mapadebits3();
	this.instance.setTransform(-8,-8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8,-8,509,90);


(lib.Símbolo4 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Mapadebits1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,223,73);


(lib.Símbolo3 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Mapadebits2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,276,73);


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


(lib.Path_6 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhkDFQABg4ADgbQAHgwAagaQAIgKgOg4QgNg8AJgLQAOgRA/gwQAvgkALgmQAJgdAUgvIAfhLIhME/IhXC/IAzDuQgNABgoAJIhOAQQAMhDAJh7g");
	this.shape.setTransform(12.3,38.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.5,77.6);


(lib.Path_1_1 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ACSDaQAbiHAFhoQAFh6gFiMQhEAIheABIhXAAQgzAAgmgEQgagDgmgLIg/gTIgJiQIIGAAIABAAIACADIAFAHIAAABQAXAoARBTIAAABQAPBJAJBqQAKAsgeDTQgXCjghCzIh9AAQAsi/AJgvg");
	this.shape.setTransform(29.7,45.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,59.4,91.4);


(lib.Group_16 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAdBnIhbijIBohIIgKAYIg7ArIBagDIgDAIIhTATIAvAIIggANIgUgDIBbCcg");
	this.shape.setTransform(6.4,13.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12.8,26.6);


(lib.Group_5 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAdgXIgUADIgggNIAvgIIhSgTIgEgIIBaADIg7grIgKgYIBoBIIhbCjIgiAeg");
	this.shape.setTransform(6.4,13.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12.7,26.6);


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


(lib.Símbolo5 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#292728").s().p("AgiH3QACg0AAhNQgBibgOh9QgJhMggh8QgchuAAgYQADhQBEhrQAjg2AfgmIBgI1IhCHag");
	this.shape.setTransform(220.7,130);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAB57A").s().p("AgQCeQgNgKgHhPIgFhLQgQASgQARQghAiAAgSQgBgKArhKIAqhKIAsgtQBXAOgCADQgBACgBAcIAAAbIAAAQQgCCSgMADQgJACgFgkIgDglIgFAyQgHA0gJACQgKACgCgyIAAgxIgDA/QgFA9gLgEQgLgFgFg5IgDg4IgCBLQgCBBgLAAIgEgBg");
	this.shape_1.setTransform(214.9,196.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E88252").s().p("AgSAoIACgBIACgCIAAgDIgBgHIABgEQAAgCADgCIABgBIAEgDQADgFgBgFQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIgKgJQgDgFAAgFQABgLAIgGQAEgDAGgBIAIABIAHAFQAEADABAEIgBABIgBAAQgFgDgHAAQgGAAgBADQgDAEAAAEIAAAEIAFALQACADAAAEQABADgBAGQgBAEgDADIgBABIgBABIgBABIgDABIAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAIgBADIAAADIgBAEIgCAEIgBABIgCABg");
	this.shape_2.setTransform(210.7,36.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBBE7D").s().p("AgdAoQgKgbAHgXQAHgaAPgQQAMgPAOAEQAOAEAEAVQAFAVgHAZQgGAUgNAOIgLAQQgDAHgGAAIgBAAQgMAAgJgZg");
	this.shape_3.setTransform(210.3,36.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggABIgPgNIBfgDQgFAIgJAHQgRAPgRAAIAAABQgPAAgRgPg");
	this.shape_4.setTransform(189.6,47.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BC842C").s().p("AgwAOQgEgBAFgEIAYgOQAegOAoALQAEABAAAFQAAADgDgBIgCAAQghgJgcAJIgXALQgFADgDAAIgCAAg");
	this.shape_5.setTransform(182,27);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BC842C").s().p("AApAOQgHgIgOgGQgcgNgmAHIgDABQgBAAgBAAQAAgBAAAAQgBgBABgBQAAgBAAgBQACgFADgBQAtgHAdATQAQAHAGAKQAFAFgFABQgFAAgEgFg");
	this.shape_6.setTransform(199.7,26.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FDD9A1").s().p("Ah9gEQAohcBvgdQBVAFAiAmQhVAThMA4QhLA1g0BPQgIhIAag5g");
	this.shape_7.setTransform(189.7,16.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FDD089").s().p("AimAYQAch8CKgiQBhgZAwA4QAZAcAFAhQggAciRBMQiKBIgbAIQgOg4APg+g");
	this.shape_8.setTransform(192.6,17.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FDD089").s().p("AhJhPIASgIQAWgHAVgCQA+gGATA3QATA2gqAzQgNAQgRAOIgPAKg");
	this.shape_9.setTransform(208.2,23.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E58052").s().p("AAGAZQgGAAgCgDIgFgGIgEgGQgBgEAGgFQAKgIAGgSQAHAUgKANIgCAEIABADQABADAFAEQACAEgGAAIgCgBg");
	this.shape_10.setTransform(184.9,40.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgKAYQgFgIgBgNQgBgLAFgKQAEgKAIgCQAFgBAGAIQAGAJAAANQABALgEAKQgFAKgHABIgCAAQgFAAgFgHg");
	this.shape_11.setTransform(181,33);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgKAYQgFgJgBgNQgBgKAEgLQAFgKAHgBQAGgBAGAIQAGAIAAANQABALgFAKQgEAKgIACIgBAAQgEAAgGgHg");
	this.shape_12.setTransform(195.7,33.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E68052").s().p("ABnAVIgGgRQgFgJgGgCQgJgEgSAMQgaATgnATIhGAgQgoAUguARIgChJQAAgLADgQQAGgfAOgaQAshWBmAEQBnAEAnBYQATArgBArIgJBWQgnhLgOglg");
	this.shape_13.setTransform(192.5,22.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FBBE7D").s().p("AgXDzQgigBgpgrQghgigPghQgJgVgGhfIgDhaQAAgLADgQQAGghAOgaQAshWBmAEQBnAEAnBYQATAtgBArQgPCtgRAfQgPAbg0AkQg2AmggAAIgDAAg");
	this.shape_14.setTransform(192.5,33.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FCC062").s().p("AAPBjQgmgFggggQghghgGgnQgGgpAXgaQAXgaAnAFQAmAEAgAhQAhAgAGAnQAHAqgXAaQgUAWggAAIgLgBg");
	this.shape_15.setTransform(212,11.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#292728").s().p("AgOAPQgGgHAAgIQAAgHAGgGQAHgHAHAAQAIAAAHAHQAGAGAAAHQAAAIgGAHQgHAFgIABQgHgBgHgFg");
	this.shape_16.setTransform(177,142);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#292728").s().p("AgOAPQgGgHAAgIQAAgHAGgHQAHgGAHAAQAIAAAHAGQAGAHAAAHQAAAIgGAHQgHAGgIAAQgHAAgHgGg");
	this.shape_17.setTransform(177,122.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#292728").s().p("AgOAPQgGgHAAgIQAAgHAGgHQAHgGAHAAQAIAAAHAGQAGAHAAAHQAAAIgGAHQgHAGgIAAQgHAAgHgGg");
	this.shape_18.setTransform(177.9,103.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C5C2E1").s().p("AANAwIgqglIgUAiIgMATQgJAKAQgjQAdhAAvgpQAZgWASgHIgGAdIAECiQgFgKgtgmg");
	this.shape_19.setTransform(177.3,72.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#292728").s().p("AgoAVIA2gYIg7gHIARh+IBIgaQAEAngEEDIgCAbg");
	this.shape_20.setTransform(174.3,83.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C5C2E1").s().p("AgaAVQBUhkAIgkIATAUQAUAWADAIQAFARgEBsIg6gtIihBlg");
	this.shape_21.setTransform(194.9,74.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#292728").s().p("AhyBZQCqjoA0gQIAtAYIgeCjIhegNIA6BCIjvBQg");
	this.shape_22.setTransform(193.9,83.9);

	this.instance = new lib.Path_6();
	this.instance.setTransform(210.4,119.4,1,1,0,0,0,12.3,38.8);
	this.instance.alpha = 0.5;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#313032").s().p("AhUHPQhegIhUggIhCgeQASgmAVg7QAph3AOhtIg4ivQAliNgDg0QgCgzACgkIABgaICNgyQAFAugFEDIBqiPQBwiQApgNIC4BlIhSFZIhZC+IA1DvIiMAcQhfATguAAIgOgBg");
	this.shape_23.setTransform(190.3,113.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DDDBED").s().p("Ah6CuQhtgXAQiXQAFguAQg2IAQgtIBRgfIAGDOIDLi6IBrA9QgqBNhABGQhuB9hfAAQgPAAgPgDg");
	this.shape_24.setTransform(193,83.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E68052").s().p("AhKBQQgUgEgCgWIAmh/ICcgGIgFAPIgJAkQgrAqgeAWQg0AsgcAAIgFAAg");
	this.shape_25.setTransform(193.7,57.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FAB57A").s().p("AiACFIhGhmIBRgfIAtiZICcgGIgSBRQgLBTAlAPQAUAIBXA1IiJBPg");
	this.shape_26.setTransform(195,65.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("AhRAqQgCggAKghQAoAQApgFQAtgEAdgZQACA2gLAdg");
	this.shape_27.setTransform(206.7,348.8);

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.setTransform(187.7,198.5,1,1,0,0,0,29.7,45.6);
	this.instance_1.alpha = 0.5;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#292728").s().p("AAaHIQiQgBgegDIhPgIIgThAIgytDIIGAAIAIAMQALASAJAcQAfBcANCkQAKAsgeDTQgXCjghCzIhiAAIheAAg");
	this.shape_28.setTransform(187.7,198.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E78052").s().p("AhtHbIgnhoIgVtNIEJAAIAIAMQALASAJAcQAfBcANCkQAKAtgrD1QgbCZgoC9QgwADhXAAIgqAAg");
	this.shape_29.setTransform(200.3,200.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E78052").s().p("AhNHRIgehoIgytDID6AAIBBEPIhJKmQhTgChPgIg");
	this.shape_30.setTransform(173.9,200.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FAB57A").s().p("AgRPoQgCghAMgoIAXhEQAihbgQhMIhenfQgIiLgLgnQgHgXgfhUIgfhRIgVtOIEJAAIAIALQALATAJAcQAfBcANCkQAMA0g7E9QgeCfggCUIAHA3QAKBDAPAxQAOAwACDxQABB5gCBvIAcB+QAXCJgUA2g");
	this.shape_31.setTransform(200.3,253);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231F20").s().p("ABMBmIALh9IhlB9IihAAQAAgSAigSQAtgYADgEIAHgGQAlAHAfgOQAcgNAcgfQAcghA3geQA3gfAAATQAAAbgtBXQgWAsgWAmg");
	this.shape_32.setTransform(170,342.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FAB57A").s().p("ABBPoIALh/IhlB/IihAAQAAgSAigSQAtgXADgFQAvguAXghQA2hPgChIQgDhYgPjqQgRkKgRiCIgBAAIgsiWIgytFID7AAIBBEOIhOLNQAFAqATBjQAPBjgLBhQgHA9gQFAIAaAfQAZAmAAAbQAAAbgtBZQgVAsgXAmg");
	this.shape_33.setTransform(171.1,253);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FAB57A").s().p("AhVHKQhegJhTggIhCgeQASglAVg8QAph3AOhtIg4ivQAliMgDg1QgCgyABgkIACgbIBsgnQAKAUAuAaQAzAeAwAEQA1AFBFgKQA6gJA4gRIBUAvIhRFYIhaC/IA2DuIh3AXQhxAZgxAAIgPgBg");
	this.shape_34.setTransform(190.3,114.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgoAIQgSgGAAgGQABgIA5AAQA6AAAAAIQAAAGgQAGQgSAFgYAAQgXAAgRgFg");
	this.shape_35.setTransform(57.1,47.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373839").s().p("AiNBVQgagEgcAMIABgQQACgVADgQIAEgWQACgMgEgHQgDgFA8gnQBBgpAlgIQAzgMA6AaIAuAOQAiALAHAIQASAUAHAfQAFAVgDATQgDANgTASQgIgKgkgDQghgCgQAFIgcAKQgRAFgLABIgugDQgrgDgIACQgXAEgIASQgMgKgZgEg");
	this.shape_36.setTransform(49.8,9.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6E7072").s().p("AATCfQgXgDg7glQg5glgKgRQgIgNgGgfIgQhHQgGgqABgvQATgNAPgGIAFBQQAHAvAVAWQAXAXA9AAQAfgBA8gFQAUAAAZAEQAaAEASAAQgRAggNAtIgNAwQgDAIgrAGQgcAEgSAAIgMAAg");
	this.shape_37.setTransform(50.4,42.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgDAAQAAgEADAAQAEAAAAAEQAAAFgEAAQgDAAAAgFg");
	this.shape_38.setTransform(63.8,32.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#231F20").s().p("AAAAWQgFgBgDgGQgDgIABgHQAAgIAEgGQAEgHADABQAFABADAGQADAHgBAGQAAAKgEAFQgDAHgEAAIAAAAg");
	this.shape_39.setTransform(64.2,33.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgCAAQAAgEACAAQAEAAAAAEQAAAFgEAAQgCAAAAgFg");
	this.shape_40.setTransform(50.2,33.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#231F20").s().p("AAAAXQgGAAgEgIQgEgHAAgIQABgKAFgGQAFgHAEABQAHAAAEAIQAEAHgBAIQgBAKgEAHQgFAFgFAAIAAAAg");
	this.shape_41.setTransform(50.8,33.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E88252").s().p("AATAnIgCgBIgCgBIgCgEIgBgDIAAgEIgBgCIgBgBIgBAAIgCgBIgCgBIgBgBIgCgBQgCgEAAgDQgCgDAAgFQABgEABgCIABgFIABgBIADgFQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgEgDgDQgBgDgGAAQgGAAgGAEIAAAAIgBgBQAAgDADgEIAIgFQAFgCADAAQAGABAEADQAIAFABALQABAEgDAFIgGAIIgDACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQgBAFADAEIADADIABAAIACABIADAEIAAAEIAAAHIAAACIADADIgBABg");
	this.shape_42.setTransform(32.9,35.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FBB57A").s().p("AAKA+QgGgBgEgHIgLgNQgOgQgGgRQgIgWAEgVQAEgUAOgFQANgEAOAOQAPAOAIAZQAIAWgJAaQgIAZgNAAIgBAAg");
	this.shape_43.setTransform(33.3,36.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373839").s().p("AgpAMQgCgDADgJQADgIADgCQAEgEAPgCQAWgCAeAKQAGACgBAHQgBAGgEAAIgCAAQgbgHgVAFIgTAKIgEACQgDAAgCgFg");
	this.shape_44.setTransform(65,28.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373839").s().p("AgyAQQgCgCABgEQAAgDADgCIAagPQAegOAmAIQADABADAMQACAKgCAAIgDAAQgigHgeAIIgZAKQgCACgDAAQgDAAgCgEg");
	this.shape_45.setTransform(50.2,28.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E88252").s().p("AgLAwQACgDAGAAIAEgCQAGgDADgIIADgDIACgGIgBgCIgJgMIgPgaQgHgQgDgPIAAAAQAFANAIARIAQAXIAFAGIADADIADAEQACACAAADIgCAFIgEAIIgFAHQgEAEgEAAIgGABQgGAAgCAAg");
	this.shape_46.setTransform(61.4,37.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#6E7072").s().p("Ai9BfQgKguAFg9QACgVADgQIAFgWQABgMgEgJQgCgFA8gnQBAgpAmgIQAygMA6AaQAfAOARATQAEAFAgAUQAaARADALQAFAVgEATQgDANgTASQgIgKgkgDQgggCgRAFIgcAKQgQAFgMABIgtgDQgsgDgHACQgYAEgIAQQgFAKAEAZIAFAXIgPAHQgPAHgDAIQgCAEgJAxIgIAxQgeg8gHgjg");
	this.shape_47.setTransform(49.7,19);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E68052").s().p("AiqgGQAJgTAlgUQA3geBLACQBMADAwAsQANALAaAkQACADADAQQgagJgYAAQgUAAgjAIQgiAJgVAAQgLAAgpgFQgkgFgSACQgoAFgpAdQgChJAFgHg");
	this.shape_48.setTransform(49.6,14.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FBB57A").s().p("AASEDQgXgDg7glQg6glgKgRQgIgNgGgfIgEgdQgbhogCgVQgCgegBg0QgBhEAEgIQAJgTAlgUQA3geBNACQBKADAwAsQANALAaAmQAGAJAPB1QAAADgFAPQgFAOABAHIAGAdQAGAVgBAOQgDAggvBEIgzBKQgDAIgXAGQgQAEgOAAIgIAAg");
	this.shape_49.setTransform(50.5,32.7);

	this.instance_2 = new lib.Group_5();
	this.instance_2.setTransform(190.5,205.6,1,1,0,0,0,6.4,13.3);
	this.instance_2.alpha = 0.102;

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#292728").s().p("AlQEyIGSiUIDSooIA9EVIiXGrInXBWg");
	this.shape_50.setTransform(137.8,112.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#292728").s().p("AAbF6QhhgFiGisQh7ifgwiXQglh0AoheQAMgdATgYIAQgRIFPJRIF5BUIAHBmQjkgFiLgHg");
	this.shape_51.setTransform(39.5,118.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EB9756").s().p("AgWASQgmgVgBgFQgBgFAOgLQAOgMAIgCQAJgBAkAUQAmATAEAGQADAGgQANQgQANgJABIgBAAQgJAAgjgVg");
	this.shape_52.setTransform(90.3,158.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EB9756").s().p("AgsAfQgJgCgDgOIgBgNIBbggIAYAqQhNATgVAAIgEAAg");
	this.shape_53.setTransform(93.5,143.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FBBE7D").s().p("AgWBEIh3gIIgdhkIBaAfIAwg9IBFgyQAIgEAHAWQADALACAMIgzAUIBSAkQBSAlABAMQAAANgoAoQgnAogOADIgCAAQgUAAhOg2g");
	this.shape_54.setTransform(89,149.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EB9756").s().p("AlLBaIBuiNIAoAnIHKiDIA3BjInaBpIg9BTg");
	this.shape_55.setTransform(119.2,145.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CD5257").s().p("Ag/EsIAMqPIAuAAIBFKPIg6A3g");
	this.shape_56.setTransform(59.7,115.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CD5257").s().p("AgKAyIgsgzIAbgwIBCAAIAQAnIgVA8g");
	this.shape_57.setTransform(55.6,74.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#9A3E41").s().p("AgHgRQAHAAACgCQACgCADATQACAQgCAGIAAABQgEAAgKgmg");
	this.shape_58.setTransform(60.4,71.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#9A3E41").s().p("AgcAOQAFgGAIgPIAIgPIAlgBIgjAvQgegBAHgJg");
	this.shape_59.setTransform(51.7,72);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C5C2E1").s().p("AgIgEQACgQgCgXIgDgTIAkAjIgxBaQAOgqACgZg");
	this.shape_60.setTransform(60.5,67.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#9491A8").s().p("AgXAUIgSgnIAFg1IAkAjIAqBuQgogJgZgsg");
	this.shape_61.setTransform(63,68.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#434244").s().p("AgaCpIgon0IBCAhIBDEDIgygEIApAyIhgFEg");
	this.shape_62.setTransform(66.3,96.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#434244").s().p("AgRARIArhFIhSAFIhOj3IBBgpIBQCGQBUCQAMAwQAMAtAQEtg");
	this.shape_63.setTransform(37.5,97.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#C5C2E1").s().p("AhhgeIAYhCICsBqIgQAkQgVAngiAMg");
	this.shape_64.setTransform(41.4,67.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#313032").s().p("Ahdi+QAYAHBEAWQA3ATAjAIQAIBRgFDnIipANg");
	this.shape_65.setTransform(74,170.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#313032").s().p("Ahsh9Ignn2IEoCRIghCSQgjI7ACAtQACAtArEhIjQAOg");
	this.shape_66.setTransform(74.4,126.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#313032").s().p("AAuJqQi7gOgSgWQgTgWAakCIAej+Ih4oMIDsiWIBQCGQBUCQAMAwQATBNA3HkIgOFuQhagChegHg");
	this.shape_67.setTransform(31.3,126.8);

	this.instance_3 = new lib.Group_16();
	this.instance_3.setTransform(62.7,205.6,1,1,0,0,0,6.4,13.3);
	this.instance_3.alpha = 0.102;

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E4E5E5").s().p("AgSAgQgMAAgKgKQgIgIAAgOIABgDQAAgNAKgJQAJgIANAAIAiACQAOABAIAJQAJAKgBALIAAAFQgBAMgKAJQgJAIgLAAgAgcgOQgFAFAAAGIAAAEQgBAGAFAGQAEAFAIAAIAiACQAHAAAFgEQAFgFAAgHIABgEQAAgHgFgEQgEgGgHAAIgjgCIAAAAQgHAAgFAFg");
	this.shape_68.setTransform(60.9,162.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#C8BCAA").s().p("AgKAhIAChBIATAFIAAA8g");
	this.shape_69.setTransform(32.5,159.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#C8BCAA").s().p("AgMAjIAGhFIATgBIgGBHg");
	this.shape_70.setTransform(72,162.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#C8BCAA").s().p("AgJAmIABhLIASAAIgBBLg");
	this.shape_71.setTransform(44.6,162.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#774E2B").s().p("AhvAXIiWgTIgDgtICfASQCnASArAAQBXAABFgGIAEAwQhHAFhZAAQg5AAifgTg");
	this.shape_72.setTransform(53.4,160.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F1F1F1").s().p("AgGAIQgEgEAAgEQAAgEAEgCQACgEAEAAQAEAAAEAEQADACAAAEQAAAEgDAEQgEADgEAAQgDAAgDgDg");
	this.shape_73.setTransform(60.3,151.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F1F1F1").s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgEADAAQAEAAADAEQAEADAAADQAAAEgEADQgDAEgEAAQgDAAgDgEg");
	this.shape_74.setTransform(56.7,128.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F1F1F1").s().p("AgGAIQgEgDAAgFQAAgDAEgEQADgDADAAQAEAAAEADQADAEAAADQAAAFgDADQgEADgEAAQgDAAgDgDg");
	this.shape_75.setTransform(56.6,105.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F1F1F1").s().p("AgGAIQgEgEAAgEQAAgDAEgDQACgEAEAAQAEAAAEAEQADADAAADQAAAEgDAEQgEADgEAAQgEAAgCgDg");
	this.shape_76.setTransform(56.5,82.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#9491A8").s().p("AgeAeIhGg6IAYhDICsBqIAFBVQg1gFhOg9g");
	this.shape_77.setTransform(41.6,67);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#DDDBED").s().p("AjSGyQAEgzABg+QAAh7gRgzQgPgvgLgZIgchGQh+lLALgLQAJgJB7hLIB4hJIDmCnIAriZQD1ByAMALQAHAGgTBRIgVBQIgeH/IgTCXIhyAVg");
	this.shape_78.setTransform(47.2,112.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#E68052").s().p("ABcCBQgkgFg4gyQgigggggvQgXgjgeg6IABgfIC8A3IAKBDQAOBKAaApQgJAWgQAAIgDgBg");
	this.shape_79.setTransform(49.1,61.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FAB379").s().p("AgtCOQh1g3AVgqQAUgrAJhiIAEhbIC8A3IALBHQAPBOAcAnQAcAogpAyQgVAZgbARQg+gSg4gcg");
	this.shape_80.setTransform(48.1,67.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#9491A8").s().p("AA9APIhXgPIhwATIAZhDIBbgJIBrARIA2AgIgHBCg");
	this.shape_81.setTransform(45.3,62.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#3C2418").s().p("AgTBBQg6gHhCgOIg2gMIgFhJQA0AAArgFQAVgDAbgIIAugOQAcAmBgAfQBaAdACADQgcAqhoAAQgpAAgxgHg");
	this.shape_82.setTransform(32.2,349);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#3C2418").s().p("AgTBBQg6gHhDgOIg1gMIgFhJQAzAAAsgFQAUgDAbgIIAvgOQAcAmBfAfQBbAdACADQgcAqhoAAQgpAAgxgHg");
	this.shape_83.setTransform(70.4,348.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#292728").s().p("AlUKLQAElMBGkRQAPjJATjdQAmm8AUhgIIAgLIADBWQACBvgEB4QgMF+hAFIQgIAqgNFPQgOFsAOBQIi/AAQgViBgLioQgVlRArjKIAclyIAgjzIg+EuQhCE4gcA+QgcA9giFtQgSC3gLCrIi4AAQgMhvACimg");
	this.shape_84.setTransform(44.9,252);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#292728").s().p("AhYIWQANinAJiyQAQlkgZg9Qgag+BTiCQAohBAug1IAQHNQAMHngRCCg");
	this.shape_85.setTransform(81.5,131.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#DDDBED").s().p("Ag7AhIABhOIB2gCQgCA6gFAkg");
	this.shape_86.setTransform(82.6,185.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E48051").s().p("AgoIgQADixgBi9QgEl5gYg8QgYg7BQiAQAmg/Atg0IgFHoQgHH+gQB9g");
	this.shape_87.setTransform(80.7,134.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FAB57A").s().p("AgOCNQgRgJAGgbQAHgbABggIABgcQgogdACgLIAVhqIBYgRIgaDaIgbBJIgBAAQgHAAgIgFg");
	this.shape_88.setTransform(80,200.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#EB9756").s().p("AhDCNQgGgNAQgHQAagKAsg4Ig2AsIgpARQgBgJADgLQAFgWASgJQAcgNAMgXQgJgfgCgoQgGhQAggeIBVASIgXC0IhMBcIgqAPQgGgGgDgGg");
	this.shape_89.setTransform(76.9,203.5);

	this.addChild(this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.instance_3,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.instance_2,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.instance_1,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.instance,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,232.5,356.2);


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
		createjs.Tween.get(var_it01).wait(8000).to({alpha:1}, 600, createjs.Ease.quadOut);
		createjs.Tween.get(var_it02).wait(8700).to({alpha:1}, 600, createjs.Ease.quadOut);
		createjs.Tween.get(var_it03).wait(11800).to({alpha:1}, 600, createjs.Ease.quadOut);
		createjs.Tween.get(var_it04).wait(16150).to({alpha:1}, 600, createjs.Ease.quadOut);
		createjs.Tween.get(var_it05).wait(19424).to({alpha:1}, 600, createjs.Ease.quadOut);
	}
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(71).call(this.frame_71).wait(1));

	// Capa 6
	this.it00 = new lib.Símbolo14();
	this.it00.setTransform(817.8,-74.7,1,1,0,0,0,316.8,54.3);

	this.timeline.addTween(cjs.Tween.get(this.it00).wait(72));

	// Items
	this.it02 = new lib.Símbolo12();
	this.it02.setTransform(1076.1,200.1,1,1,0,0,0,23.1,148.1);

	this.it05 = new lib.Símbolo11();
	this.it05.setTransform(800.9,337.7,1,1,0,0,0,244.7,52.9);

	this.it04 = new lib.Símbolo9();
	this.it04.setTransform(800.9,238.5,1,1,0,0,0,244.7,35);

	this.it03 = new lib.Símbolo8();
	this.it03.setTransform(800.9,150.3,1,1,0,0,0,244.7,42);

	this.it01 = new lib.Símbolo7();
	this.it01.setTransform(800.9,58.1,1,1,0,0,0,244.7,35.1);

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
	this.instance_3.setTransform(-220.7,356.1,1,1,0,0,0,68.3,98.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:8.5},26,cjs.Ease.get(1)).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-402.2,-123.3,1501.5,578.3);


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
		
		var audio1 = createjs.Sound.play("sounds/09.mp3");
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
p.nominalBounds = new cjs.Rectangle(376.8,358.7,2021.5,1133.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;