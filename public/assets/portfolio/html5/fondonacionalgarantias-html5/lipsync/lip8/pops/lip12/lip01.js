(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 35,
	color: "#FFFFFF",
	manifest: [
		{src:"sounds/12.mp3", id:"12"},
		{src:"images/Path.png", id:"Path"},
		{src:"images/Path_0.png", id:"Path_0"},
		{src:"images/flash0aiActivos.png", id:"flash0aiActivos"},
		{src:"images/Mapadebits1.png", id:"Mapadebits1"},
		{src:"images/Mapadebits2.png", id:"Mapadebits2"},
		{src:"images/Mapadebits3.png", id:"Mapadebits3"},
		{src:"images/Mapadebits4.png", id:"Mapadebits4"},
		{src:"images/Mapadebits5.png", id:"Mapadebits5"},
		{src:"images/Sintítulo1fw.png", id:"Sintítulo1fw"}
	]
};



// symbols:



(lib.Path = function() {
	this.initialize(img.Path);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,35);


(lib.Path_0 = function() {
	this.initialize(img.Path_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,34);


(lib.flash0aiActivos = function() {
	this.initialize(img.flash0aiActivos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,15);


(lib.Mapadebits1 = function() {
	this.initialize(img.Mapadebits1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,323,73);


(lib.Mapadebits2 = function() {
	this.initialize(img.Mapadebits2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,522,72);


(lib.Mapadebits3 = function() {
	this.initialize(img.Mapadebits3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,522,86);


(lib.Mapadebits4 = function() {
	this.initialize(img.Mapadebits4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,522,86);


(lib.Mapadebits5 = function() {
	this.initialize(img.Mapadebits5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,522,86);


(lib.Sintítulo1fw = function() {
	this.initialize(img.Sintítulo1fw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,98);


(lib.Símbolo13 = function() {
	this.initialize();

	// Modo de aislamiento
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4A984").s().p("Ah9AuIgYgSQALgMATgPQAkgcAkgQQAjgQBPABQApABAiAEIAFAJQAFANgFANIgKAdQgEAOgEABQgIAGgOAFQgdAKgggEQgagDgUgGQgJgEgJADQgHACgUAKQgTAKgKACIgLACQgSAAgWgNg");
	this.shape.setTransform(303.4,-11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0F2F1").s().p("AghA6QgIgEgHgJQgOgTACgaQACgcARgTQAPgPATgCIAyAHIAMAUQAKAZgGAXQgHAYgTASQgJAIgIAEg");
	this.shape_1.setTransform(318.2,-11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#323F3A").s().p("AhMFXIkAgQQgHgWgBgdQAAg7AkggIF/AHQAViMAgiJQBCkVA9AJIARAQQAUAXAPAaQAuBWgZBlIhEEcQgqCmgUAEQgFABgRAAQg7AAjFgLg");
	this.shape_2.setTransform(350.5,-37.3);

	this.instance = new lib.Path_0();
	this.instance.setTransform(308.3,27);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4A984").s().p("AgFCcQg1AFgJgCIAfj7IBChMIAlBUIgCD9QgTgOgzABg");
	this.shape_3.setTransform(327.7,152.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#25302C").s().p("ABfCpIi3AAQgVgDAmimIAqinIA2gBIAxAHQATDTADBRQABAmgCAAIAAAAg");
	this.shape_4.setTransform(327.1,160.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4A984").s().p("AhlAAQhZpFCYAAIAeADQAgAIAZAeQAxA8AUCrQAjEfgkJZIhkADQhJkjgtkjg");
	this.shape_5.setTransform(322.3,85.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D88D6C").s().p("AAaBUQgpgJgxgaQhigxgchXQD6BECDgUQgXBwhKAPQgfgBglgDg");
	this.shape_6.setTransform(329.9,57.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F4A984").s().p("AAeDFQg2gLg4gjQhxhFgEh2QgIghAIgkQAPhJBNgRIAhgCQAqgDAoAAQA3AHAvAfQBZA7ABB4IgCAaQgEAggIAaQgbBXg/ANQgfgBglgDg");
	this.shape_7.setTransform(329.5,46.5);

	this.instance_1 = new lib.Path();
	this.instance_1.setTransform(279.9,30.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F4A984").s().p("AhyAWQikohClgkIAfgDQAlADAcAaQAmAjAlCxQAxDpBaKHIhzAEQhxkLhTkSg");
	this.shape_8.setTransform(299.5,86.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D88D6C").s().p("AgoCwQhTgXg8grQBmASAwiEQAXhBAKh7IAdABQA/AFAqA8QAmA2AJBLQAKBLgWA2QgZA7gzACIgPAAQg3AAg/gRg");
	this.shape_9.setTransform(309.8,46.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F4A984").s().p("AAHCxQhMgVg4gnQiShmBFimIBHgYQBdgXBtAHQA+AFArA8QAlA2AKBLQAJBLgWA2QgYA7gzACIgPABQg0AAg9gRg");
	this.shape_10.setTransform(305.7,46.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F4A984").s().p("AgrAQIArh3IA+g3IA8A3QgaBMhFBjQggAzgeAjIhWABQAbgTAzh8g");
	this.shape_11.setTransform(307.6,153.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#25302C").s().p("AB9CsIAFjMIhSDMIjvAAQgNgXAGgUIAKgQIBfgWIBdgLQAbghAggvQBBhgAahKQAdATAOAmQAHASABAPIgzD8g");
	this.shape_12.setTransform(304.8,160.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#56362E").s().p("AgQAfQgIgLAAgPQAAgPAJgKQgLgDgCgJIgBgJQAEALAbAAQALAAAJALQAIAKAAAOQAAAPgIALQgJALgLAAQgKAAgIgLg");
	this.shape_13.setTransform(353.2,-117.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#56362E").s().p("AgQAfQgIgLAAgPQAAgPAJgKQgLgDgCgJIgBgJQAEALAbAAQALAAAJALQAIAKAAAOQAAAPgIALQgJALgLAAQgKAAgIgLg");
	this.shape_14.setTransform(331.3,-117.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D88D6C").s().p("AgOA5QgTgHgDgTQgCgKAFgJQAFgJAKgEQARgIANgaQAHgNAEgLQABAMgIATQgLAZgUAOQgLAIABAJQACALAPAHQAQAJAdgFQgTAKgRAAQgHAAgIgDg");
	this.shape_15.setTransform(340.1,-110.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6A371A").s().p("AgUAAIggAGQgFgEAJgHQAEgEAFgEQAYgHAZAGQAVAGAMAIQAMALAAAHQglgUgmACg");
	this.shape_16.setTransform(352.6,-124.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6A371A").s().p("Ag0ARQACgGAHgIQALgKAUgHQAYgKAZAEQAXAMgIAHQgNgEgUABQgmACgiAYIABgFg");
	this.shape_17.setTransform(329.7,-124.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag+ADIgKgLIApAGQAzACA1gQQgDAJgMAHQgXAQgpAAIgCABQgkAAgSgOg");
	this.shape_18.setTransform(344.5,-100.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#56362E").s().p("AgGAlQgkgBgUgiIgNgfIApAFQA0ACA6gPQgFAUgNARQgYAmglAAIgDgBg");
	this.shape_19.setTransform(344.6,-99.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D88D6C").s().p("AiEB+QhAgMgqgrQBhA7BcgRQBNgPA8hYQAdgpAOgpIAJACQALACANgCQApgJAigzQgMAxgmAVIglALQgOA1gqAxQhDBOhmAAQgcAAgfgFg");
	this.shape_20.setTransform(353.8,-101.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D88D6C").s().p("AhQASQA7hTAbhJIAoBUQA5BeBTA5QhAgag8hEIgug+QhlCZhkAuQAugkA7hWg");
	this.shape_21.setTransform(343.7,-136.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F4A984").s().p("AhjExQhGgNgqgxQgpgugKhKQgNhiAAgpQAsgUBGhgQBEheAhhUIAoBVQA3BgBTA5QAoB1AXggQAMgPAEgoIAQgFQAPgDAMACQAmAHgCA3QgDBGgtAdQgNAJgRAEIgNACQgOA3gqAyQhDBOhmAAQgcAAgfgGg");
	this.shape_22.setTransform(350.5,-119.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1B2320").s().p("AjOBcIghh0IAkgnIgugOIA3jDQAZgKAkgKIgJEWQACCIAcBUIDAlYIBiiWQAlALAjAPIhIDRIhJABIAyAyQgkA+h4B7Qg9A9g2AxQgvhFgriEg");
	this.shape_23.setTransform(345.7,-49.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F0F2F1").s().p("AgdAOIhPBNQgIgXgHgdQgOg6ADglIA8gwIAFAoQALAsAgASIAxgVQA1ggAEgyIA4A5QgQAegZAgQgyBGgtAWg");
	this.shape_24.setTransform(347.6,-73.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#25302C").s().p("AkGGIIgKlXQgTgPgTgXQgmgtABgpQABgaAWgrQAbg0A3hHIAVh4IAigSQArgUAxgNIgJEVQACCKAcBTIDBlZIBiiWQBOAXA1AeIAAEgIhECqQhJDEgSB+QgvAYhQAMQgpAFgoAAQh4AAh7gvg");
	this.shape_25.setTransform(341.9,-34.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D88D6C").s().p("AhMBRIAAiiICZAAIgBB9QgqAbgvAIQgTADgSAAQgOAAgMgBg");
	this.shape_26.setTransform(347.8,-93);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F4A984").s().p("AhMBQIABh8QAdAFAigGQAvgIAqgbIAAChg");
	this.shape_27.setTransform(347.8,-80.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D4D6D5").s().p("AihAkIgGiNIAYibQCbgpCcAtIhQCbIjSF9QgchUgLigg");
	this.shape_28.setTransform(346.7,-52.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1B2320").s().p("AhcFMQi5gHggg1QgIgOg5hLQg1hGgYgtQhLiPCYgbIA4gJQAugJArgLIAsi/IG0gJIAhAZQApAiAiAsQBtCOAJC6IgFAkQgMAsgeAkQhgB0j4gFQg+AFg/AAIg1AAg");
	this.shape_29.setTransform(334.2,36.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F4A984").s().p("Ah8AzIgYgSQALgLASgPQAkgcAkgQQAjgRBPgGQAogEAhAAIAGASQAGAVgEANQgGAPgHAMQgHAMgFABQgHADgOADQgdAGgggFIgtgGQgKgBgLACQgIACgPAPQgPAOgKACIgMACQgSAAgVgOg");
	this.shape_30.setTransform(262.1,-12.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F0F2F1").s().p("AghA6QgHgEgIgKQgOgSACgaQACgcASgTQAPgPATgCIAxAHIAMAUQAKAZgGAXQgGAZgTARQgKAIgIAEg");
	this.shape_31.setTransform(276.9,-14.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1B2320").s().p("AhMFNIizgXQgIgXAAgdQgBg6AlghIDuAQQAPh8AdiAQA5kCBFgYIARAQQAUAVAPAaQAvBUgYBlIhEEcQgqClgVAFIgLABQgoAAiWgTg");
	this.shape_32.setTransform(301.5,-38.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#935C41").s().p("AkBA3QAIgXAKgWQAQghARgZQBQAmBVAEQB5AGB1hAQAiAuAaA1QiWAeinAAQhgAAhlgKg");
	this.shape_33.setTransform(345.9,-145.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6A371A").s().p("AjhHjIg5gLQgViHgGiqQgNlQBMiqQA7iDBYgEQArgCAgAZIATgMQAXgNAYgGQBPgRA1BBQBdByAgCUQAtDUhwDTQhqDIjWAfQgjAFglAAQggAAghgEg");
	this.shape_34.setTransform(346.6,-110.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#61E2CD").s().p("Ak9LGQh4gKhOgUQhvgchJg4QgXgRgKgTQgOgYAOgUIAFgGQARgSAkgIIA6gMQBggeBRhCQBVhFAxhbQA2hmAKiGQAPi4BDiTQBBiOBmhbQBohbCAgcQCDgcCLAqQCJAqA7DKQA3C9giDzQgjD5hyC2Qh/DLi5AqQjnA0jTAAQhHAAhGgFg");
	this.shape_35.setTransform(353.9,10.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#7C695B").s().p("ABFIPIitwTIBegKIBzQdg");
	this.shape_36.setTransform(369.1,125.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3F362D").s().p("Ailn5IBegSIDtQSIgkAFg");
	this.shape_37.setTransform(394.6,125.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3F362D").s().p("AAMIKIg5wTIBbAGIAAQNg");
	this.shape_38.setTransform(346,126);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7C695B").s().p("AilIHIDtwSIBeASIknQFg");
	this.shape_39.setTransform(299.5,125.7);

	this.addChild(this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.instance_1,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.instance,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(247.1,-159.1,180.9,337.4);


(lib.Símbolo12 = function() {
	this.initialize();

	// Items
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004F91").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape.setTransform(-530.4,5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#004F91").ss(3).p("AgegxIAyAzIguAw");
	this.shape_1.setTransform(-532.4,298.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#004F91").ss(3).p("AgegwIAyAyIguAw");
	this.shape_2.setTransform(-532.4,195.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#004F91").ss(3).p("AgegxIAyAzIguAw");
	this.shape_3.setTransform(-532.4,100.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#004F91").ss(3).p("Ai2AAIFtAA");
	this.shape_4.setTransform(-548.7,195.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#004F91").ss(3).p("Ai2AAIFtAA");
	this.shape_5.setTransform(-548.7,100.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#004F91").ss(3).p("AC+22IjYAAQg9AAgsA4QgrA3AABOMAAAAnyQAABPArA3QAsA4A9AAIDYAA");
	this.shape_6.setTransform(-549.5,152.1);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-573.1,2.3,46.2,302.6);


(lib.Símbolo11 = function() {
	this.initialize();

	// Items
	this.instance = new lib.Mapadebits5();
	this.instance.setTransform(-14.7,9.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.7,9.6,522,86);


(lib.Símbolo10 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.Símbolo9 = function() {
	this.initialize();

	// Items
	this.instance = new lib.Mapadebits4();
	this.instance.setTransform(-14.3,-3.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.3,-3.9,522,86);


(lib.Símbolo8 = function() {
	this.initialize();

	// Items
	this.instance = new lib.Mapadebits3();
	this.instance.setTransform(-14.9,-4.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.9,-4.2,522,86);


(lib.Símbolo7 = function() {
	this.initialize();

	// Items
	this.instance = new lib.Mapadebits2();
	this.instance.setTransform(-14.6,-4.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.6,-4.4,522,72);


(lib.Símbolo5 = function() {
	this.initialize();

	// Modo de aislamiento
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAEAE9").s().p("AifAcIAAg3IE/AAIAAA3g");
	this.shape.setTransform(193.9,134.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAEAE9").s().p("AiYA4IAAhvIEwAAIAABvg");
	this.shape_1.setTransform(144,134.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66645E").s().p("AiiAFIAAgJIFFAAIAAAJg");
	this.shape_2.setTransform(142.9,128.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66645E").s().p("AiiAFIAAgJIFFAAIAAAJg");
	this.shape_3.setTransform(142.9,140.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66645E").s().p("AkIBEIAAiHIIRAAIAACHg");
	this.shape_4.setTransform(185.8,134.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EAEAE9").s().p("AifAcIAAg3IE/AAIAAA3g");
	this.shape_5.setTransform(206.6,147.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EAEAE9").s().p("AiYA4IAAhvIEwAAIAABvg");
	this.shape_6.setTransform(156.7,148.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#514F48").s().p("AiiAFIAAgJIFFAAIAAAJg");
	this.shape_7.setTransform(155.6,142.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#514F48").s().p("AiiAFIAAgJIFFAAIAAAJg");
	this.shape_8.setTransform(155.6,154.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#514F48").s().p("AkIBEIAAiHIIRAAIAACHg");
	this.shape_9.setTransform(198.5,148.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EAEAE9").s().p("AifAcIAAg3IE/AAIAAA3g");
	this.shape_10.setTransform(200.5,161.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EAEAE9").s().p("AiYA4IAAhvIEwAAIAABvg");
	this.shape_11.setTransform(150.6,162);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3A3935").s().p("AiiAFIAAgJIFFAAIAAAJg");
	this.shape_12.setTransform(149.5,155.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3A3935").s().p("AiiAFIAAgJIFFAAIAAAJg");
	this.shape_13.setTransform(149.5,168.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3A3935").s().p("AkIBEIAAiHIIRAAIAACHg");
	this.shape_14.setTransform(192.5,162);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B42525").s().p("AhkCCIAAkDIDJAAIAAEDg");
	this.shape_15.setTransform(-111.6,155.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#841819").s().p("Ag+B1IAAghIAaAAQAcAAATgZQATgYABgjQgBghgTgZQgTgZgcAAIgaAAIAAghIAaAAQAoAAAdAjQAeAiAAAvQAAAwgeAiQgdAjgoAAg");
	this.shape_16.setTransform(-97.9,155.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#996839").s().p("AnoA2IAAhsIPSAAIAABsg");
	this.shape_17.setTransform(183,174.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C59061").s().p("A28A2IAAhsMAt5AAAIAABsg");
	this.shape_18.setTransform(-13,174.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9D8A79").s().p("ACcNOIlx6PIA6gMIFxabg");
	this.shape_19.setTransform(-100.9,263.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9D8A79").s().p("AjWNOIFy6bIA7AMIlyaPg");
	this.shape_20.setTransform(-138.4,263.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#594D41").s().p("An1AYIAAgvIPgAAIALAvg");
	this.shape_21.setTransform(-88.1,265.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#594D41").s().p("ACdNOIlz6PIA7gMIFyabg");
	this.shape_22.setTransform(-41.9,263.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#594D41").s().p("AjVNOIFy6bIA5AMIlxaPg");
	this.shape_23.setTransform(-79.4,263.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9D8A79").s().p("ACdNOIly6PIA6gMIFxabg");
	this.shape_24.setTransform(151.5,263.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9D8A79").s().p("AjWNOIFy6bIA6AMIlxaPg");
	this.shape_25.setTransform(114,263.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#594D41").s().p("An1AYIAAgvIPgAAIALAvg");
	this.shape_26.setTransform(164.2,265.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#594D41").s().p("ACcNOIly6PIA7gMIFyabg");
	this.shape_27.setTransform(210.5,263.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#594D41").s().p("AjWNOIFz6bIA5AMIlxaPg");
	this.shape_28.setTransform(173,263.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgdA3QgSgTgEgeQgEgcANgXQAMgXAWgCQAUgDASATQASATAEAeQAEAcgNAXQgNAXgVADIgFAAQgRAAgQgRg");
	this.shape_29.setTransform(-45.8,127.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A3ADAB").s().p("AjPklIApAAIAcImIFbgUIAAA4Il4AAg");
	this.shape_30.setTransform(17.2,139.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#C2D3D1").s().p("AlcElIhVpKIM6AAIApJKg");
	this.shape_31.setTransform(-43.1,139.5);

	this.addChild(this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-159.9,110.1,391.9,237.9);


(lib.Símbolo3 = function() {
	this.initialize();

	// Items
	this.instance = new lib.Mapadebits1();
	this.instance.setTransform(113.9,8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(113.9,8,323,73);


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


(lib.Path_1 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D5AEB1","#D89B9E"],[0.035,1],-11.3,2.3,11.3,-2.2).s().p("Ag0CVQgsgxgPhOQgQhMAWg+QAWg+AvgJQAtgKAsAyQAsAwAPBOQAQBMgWA+QgWA9gvAKQgIACgHAAQglAAglgpg");
	this.shape.setTransform(11.9,19);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23.9,38);


(lib.Path_2 = function() {
	this.initialize();

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D5AEB1","#D89B9E"],[0.035,1],-11.3,2.3,11.3,-2.2).s().p("Ag0CVQgsgxgPhOQgQhMAWg+QAWg+AvgJQAtgKAsAyQAsAwAQBOQAPBMgWA+QgXA9gvAKQgHACgIAAQgkAAglgpg");
	this.shape_1.setTransform(11.9,19);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23.9,38);


(lib.Path_3 = function() {
	this.initialize();

	// Capa 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#D5AEB1","#D89B9E"],[0.035,1],-9.6,1.9,9.7,-1.9).s().p("AgsCUQglgwgNhOQgNhMASg+QAUg+AngJQAmgJAlAxQAmAwAMBOQANBMgTA+QgSA+goAJQgGABgHAAQgfAAgfgpg");
	this.shape_2.setTransform(10.1,19);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.2,38);


(lib.Path_4 = function() {
	this.initialize();

	// Capa 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#D5AEB1","#D89B9E"],[0.035,1],-9.6,1.9,9.7,-1.9).s().p("AgsCUQglgwgNhOQgNhMASg+QAUg+AngJQAmgJAlAxQAmAwAMBOQANBMgTA+QgSA+goAJQgGABgHAAQgfAAgfgpg");
	this.shape_3.setTransform(10.1,19);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.2,38);


(lib.Path_5 = function() {
	this.initialize();

	// Capa 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#D5AEB1","#D89B9E"],[0.035,1],-11.3,2.3,11.3,-2.2).s().p("Ag0CUQgsgwgPhOQgQhMAWg+QAXg+AugJQAtgJAsAxQAsAwAQBOQAPBMgWA+QgXA+gvAJQgHABgIAAQgkAAglgpg");
	this.shape_4.setTransform(11.9,19);

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23.9,38);


(lib.Path_6 = function() {
	this.initialize();

	// Capa 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#D5AEB1","#D89B9E"],[0.035,1],-7.7,1.6,7.8,-1.5).s().p("AgiCVQgegxgKhOQgKhMAPg+QAPg+AfgJQAdgJAdAxQAeAwAKBOQAKBMgPA+QgPA+gfAJIgJABQgYAAgZgog");
	this.shape_5.setTransform(7.9,19);

	this.addChild(this.shape_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16,38);


(lib.ClipGroup = function() {
	this.initialize();

	// Capa 3
	this.instance = new lib.Sintítulo1fw();
	this.instance.setTransform(-7,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7,0,173,98);


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


(lib.Símbolo14 = function() {
	this.initialize();

	// botoneras
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(-247.8,62.9,1,1,0,0,0,85.2,55.9);

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgnRAICQh3AAhuhTQg0gnhlhwIkPlDIM8AAQgngegpgsIhChHIkOlFMBchAAAIkOFFQgoArl0GpQhlBwg0AnQhuBTh3AAg");
	this.shape.setTransform(-137.2,57.1,1,1,0,0,180);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-454,5.7,633.5,102.9);


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
		createjs.Tween.get(var_it01).wait(7314).to({alpha:1}, 600, createjs.Ease.quadOut);
		createjs.Tween.get(var_it02).wait(9500).to({alpha:1}, 600, createjs.Ease.quadOut);
		createjs.Tween.get(var_it03).wait(10500).to({alpha:1}, 600, createjs.Ease.quadOut);
		createjs.Tween.get(var_it04).wait(12618).to({alpha:1}, 600, createjs.Ease.quadOut);
		createjs.Tween.get(var_it05).wait(16000).to({alpha:1}, 600, createjs.Ease.quadOut);
	}
	this.frame_68 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(68).call(this.frame_68).wait(1));

	// Capa 6
	this.it00 = new lib.Símbolo14();
	this.it00.setTransform(818.8,-75.7,1,1,0,0,0,316.8,54.3);

	this.timeline.addTween(cjs.Tween.get(this.it00).wait(69));

	// Items
	this.it02 = new lib.Símbolo12();
	this.it02.setTransform(519.9,199.1,1,1,0,0,0,23.1,148.1);

	this.it05 = new lib.Símbolo11();
	this.it05.setTransform(244.7,336.7,1,1,0,0,0,244.7,52.9);

	this.it04 = new lib.Símbolo9();
	this.it04.setTransform(244.7,237.5,1,1,0,0,0,244.7,35);

	this.it03 = new lib.Símbolo8();
	this.it03.setTransform(244.7,149.3,1,1,0,0,0,244.7,42);

	this.it01 = new lib.Símbolo7();
	this.it01.setTransform(244.7,61.1,1,1,0,0,0,244.7,35.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.it01},{t:this.it03},{t:this.it04},{t:this.it05},{t:this.it02}]}).wait(69));

	// Capa 5
	this.instance = new lib.Símbolo3();
	this.instance.setTransform(712.2,-13.8,1,1,0,0,0,137.8,36.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).to({y:42,alpha:1},31,cjs.Ease.get(1)).wait(4));

	// Capa 4
	this.instance_1 = new lib.Símbolo5();
	this.instance_1.setTransform(1635.5,264.7,1,1,0,0,0,116.2,178.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:872.2},26,cjs.Ease.get(1)).wait(43));

	// Capa 3
	this.instance_2 = new lib.Símbolo13();
	this.instance_2.setTransform(1115.3,356.1,1,1,0,0,0,68.3,98.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({x:540.7},26,cjs.Ease.get(1)).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.3,-124.3,1827.6,558.9);


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
	this.instance = new lib.Path_3();
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
	this.instance = new lib.Path_4();
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
	this.instance = new lib.Path_5();
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
	this.instance = new lib.Path_6();
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
	this.instance = new lib.Path_1();
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
	this.instance = new lib.Path_2();
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
		
		var audio1 = createjs.Sound.play("sounds/12.mp3");
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
p.nominalBounds = new cjs.Rectangle(640,357.7,1890.2,727.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;