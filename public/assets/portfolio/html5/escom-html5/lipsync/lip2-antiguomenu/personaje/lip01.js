(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1280,
	height: 800,
	fps: 35,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Lineas.png", id:"Lineas"}
	]
};



// symbols:



(lib.Lineas = function() {
	this.initialize(img.Lineas);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,800);


(lib.torsopers = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#565541").s().p("AAzBYQgKgGgKgJQgSgdgOgQQgfgdgiAPQgTAKgXgIQgUgIgPgQQgOgSACgRQABgTAVgHQAegLAlAMQAiALAggPQAugUAuAGQApAFASAYQANARgSAQQgLAJgbAQQgQANAMAaQALAYAeAYg");
	this.shape.setTransform(20.9,38.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7A7941").s().p("AgtCKQgvgEg9gsQgigZA4hPQA3hPBGggQAQgBAXADQATgJAVgFQAqAEAcAXQASAPAGAQQABAFgcAEQgbAEANAVQAPAZghAdQgcAagwATQgJBUg7AAIgJAAg");
	this.shape_1.setTransform(16.7,24.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#565541").s().p("AAsAzQgbgZgMgFQgVgLgRATQgWAYgWAAQgZAAgUgfQgPgWgRgPQAhgKAagUQAYABAJACQATADATAIQAXAJAqAWQAiANAHgIQAEgDgKgUQgJgVAUgOQAbgTAVAQQAXASgEAuQgDAtgtAJQgMADgKAAQgYAAgQgOg");
	this.shape_2.setTransform(73.4,27.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#878654").s().p("ABMBoQgdgDgygRQg1gSg5gbQAhgTAYgfQAYggAKgnIAAgVIAUAAQAAANACAHQAAANAJANIAmA2QASAXAOAQQAeAlADALQAIAUgfAAIgNAAg");
	this.shape_3.setTransform(73.5,20.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#878654").s().p("AiIBLQgeg4ACgzQAChBBBAkQAeAmALAIQATANAhgGQAUgFAXgVQARgPASAJQAPAIAEARQAFAQAYAPQARALAMAQQAMARACAPg");
	this.shape_4.setTransform(90.3,40.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#878654").s().p("AhmA2QgXgjgEgTQgHgZAXgMQAggRARABQAWACAzAdQAiASA7AXQAnATgMAQg");
	this.shape_5.setTransform(52.1,42.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7A7941").s().p("AAjByIgDgEQgPgUgIgCIhkgVQhagSgPgJQgLgFgEgcQAPg7AQgaQAQgZAegKQAkARApAAIAYgBQADAGAJAdQAIAXAJAMQAPAXAqALIBqAdQAwAPAFAWQADANgRAcg");
	this.shape_6.setTransform(59,36.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#878654").s().p("AgqCAIg0gbQgogWgQgWQgxhBCRhYQARgpAZgCQATgBASAZQAHAPAJAQQAIASAJAGQAsA0A9AMQABATgTAGQgpAQgHA9QgCASg1ALQgVAFgRAAQgbAAgTgMg");
	this.shape_7.setTransform(32.8,25.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#636235").s().p("Ah7ALQAfANAiAAQA/AAA0gqQAwgpAShAIAAgFIABAAQABACgBAFIgBAHIAABoQgNAwgjAmQgjAnguAOg");
	this.shape_8.setTransform(59,13);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7A7941").s().p("Ah0BZQgzgrgRg+IAAhnIABgFQATA+AyApQA1ApA+AAQBBAAA0gqQAwgpAShAIAAgFIABAAQABACgBAFIgBAHIAABoQgSA+gwApQg0AshBAAQg/AAg2gsg");
	this.shape_9.setTransform(52.9,13.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D4A15E").s().p("AiyhiICKgdIDbAAQABACgCAFIAAAHIAABnQgOAvgiAmQgjAngvAOg");
	this.shape_10.setTransform(53.4,13);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2D291").s().p("AhyBYQgzgqgRg9IAAhnIAEgNIFpAAQABACgBAFIgBAIIAABmQgRA9gwAqQgzArhAAAQg/AAg1gsg");
	this.shape_11.setTransform(52.9,13.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999A72").s().p("ApeC+IAYicQALhKA7g/QBLhRBsAQQAqgVAxAAIHlAAQAuAAApAVQBqgOBKBQQA6A/ALBJIAYCcg");
	this.shape_12.setTransform(53.2,28.7,0.675,1);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,106.9,47.8);


(lib.ojospers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#471E04").s().p("AgXAYQgKgKAAgOQAAgMAKgLQALgKAMAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgMAAgLgKg");
	this.shape.setTransform(42.6,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#471E04").s().p("AgXAYQgKgKAAgOQAAgMAKgLQALgKAMAAQAOAAAKAKQAKALAAAMQAAAOgKAKQgKAKgOAAQgMAAgLgKg");
	this.shape_1.setTransform(3.5,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleY:1,skewX:0,y:3.5}},{t:this.shape,p:{scaleY:1,skewX:0,y:3.5}}]}).to({state:[{t:this.shape_1,p:{scaleY:0.29,skewX:0,y:3.5}},{t:this.shape,p:{scaleY:0.29,skewX:0,y:3.5}}]},34).to({state:[{t:this.shape_1,p:{scaleY:1,skewX:0,y:3.5}},{t:this.shape,p:{scaleY:1,skewX:0,y:3.5}}]},2).to({state:[{t:this.shape_1,p:{scaleY:0.29,skewX:180,y:3.4}},{t:this.shape,p:{scaleY:0.29,skewX:180,y:3.4}}]},69).to({state:[{t:this.shape_1,p:{scaleY:1,skewX:0,y:3.5}},{t:this.shape,p:{scaleY:1,skewX:0,y:3.5}}]},3).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46,6.9);


(lib.it06 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Lineas();
	this.instance.setTransform(1374.1,1098.9,1.272,1.272,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-254,81.4,1628.1,1017.6);


(lib.Path_113 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ApvC1QkDhMAAhpQAAhpEDhLQEDhLFsAAQFtAAEDBLQEDBLAABpQAABpkDBMQkDBLltAAQlsAAkDhLg");
	this.shape.setTransform(88.3,25.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,176.7,51.3);


(lib.chalecopers = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#595837").s().p("AnKAWIAAgrIOVAAIAAArg");
	this.shape.setTransform(48.8,130.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A1A1A").s().p("AnjAxIAAhhIPHAAIAABhg");
	this.shape_1.setTransform(48.5,101.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999A72").s().p("Ag8AQQgYgVAAghICqAAQgBAggZAWQgZAXgjAAQgiAAgagXg");
	this.shape_2.setTransform(75.3,66.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#676654").s().p("AhUBxIAAjhICpAAIAADhg");
	this.shape_3.setTransform(75.3,73.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A1A1A").s().p("AhgB7IAAgkICdAAIAAjRIAkAAIAAD1g");
	this.shape_4.setTransform(76.5,74.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999A72").s().p("Ag7AQQgagWAAggICrAAQAAAhgaAVQgZAXgjAAQgiAAgZgXg");
	this.shape_5.setTransform(47.3,66.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#676654").s().p("AhUBxIAAjhICpAAIAADhg");
	this.shape_6.setTransform(47.3,73.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1A1A1A").s().p("AhgB7IAAgkICdAAIAAjRIAkAAIAAD1g");
	this.shape_7.setTransform(48.5,74.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999A72").s().p("Ag7AQQgagWAAggICrAAQAAAhgaAVQgZAXgjAAQgiAAgZgXg");
	this.shape_8.setTransform(19.8,66.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#676654").s().p("AhUBxIAAjhICpAAIAADhg");
	this.shape_9.setTransform(19.8,73.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1A1A1A").s().p("AhgB7IAAgkICdAAIAAjRIAkAAIAAD1g");
	this.shape_10.setTransform(21.1,74.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#565541").s().p("Ag9DXQgZgZAAglIAAlwQgBgLAIgGQAHgIAKAAIB8AAQALAAAHAIQAHAGAAALIAAFwQAAAlgaAZQgaAagjAAQgjAAgagag");
	this.shape_11.setTransform(78.6,24.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#565541").s().p("Ag9DXQgagZAAglIAAlwQAAgLAIgGQAHgIAKAAIB8AAQALAAAHAIQAIAGAAALIAAFwQAAAlgaAZQgaAagkAAQgjAAgagag");
	this.shape_12.setTransform(19.8,24.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1A1A1A").s().p("Ag9DXQgZgZAAglIAAlwQgBgKAIgIQAHgHAKAAIB8AAQALAAAHAHQAHAIAAAKIAAFwQAAAlgaAZQgaAagjAAQgjAAgagag");
	this.shape_13.setTransform(78.6,28.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1A1A1A").s().p("Ag9DXQgagZAAglIAAlwQAAgKAIgIQAHgHAKAAIB8AAQALAAAHAHQAIAIAAAKIAAFwQAAAlgaAZQgaAagkAAQgjAAgagag");
	this.shape_14.setTransform(19.8,28.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#565541").s().p("AnjG4IAAtvIPHAAIAANvg");
	this.shape_15.setTransform(48.5,74.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#565541").s().p("AgWAzQgTgKgWAKIg0AAQgegPgJgdQgJgcAegKQAegLAkAMQAjALAggPQAugUAtAGQAqAFASAYQANARgTAOQgKAJgbASQgGAFgCAHg");
	this.shape_16.setTransform(16.6,123.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7A7941").s().p("Ah7BOIAAiSQARgVAOgOIDYAAQgPAGAKARQAPAZghAfQgcAYgwATQgHBLgwAJIgOABQghAAgugag");
	this.shape_17.setTransform(13.1,115.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#565541").s().p("AAsAyQgbgYgLgFQgWgLgRATQgVAXgWAAQgZAAgVgfQgPgVgRgQQAggIAcgVQAVAAALACQATADAUAIQAXAKApAVQAiANAIgHQADgEgJgUQgJgUATgOQAbgTAVAQQAXARgDAuQgEAtgsAKQgMACgLAAQgYAAgQgOg");
	this.shape_18.setTransform(69,115.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#878654").s().p("ABMBCQgegDgxgRQg1gSg5gbQAqgXAagsIBMAAQAgAwAQASQAeAiAEAMQAHAVgfAAIgNgBg");
	this.shape_19.setTransform(69.2,112.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#878654").s().p("AiBAlQgIgrANgTQAQgWArAXQAeAlAMAHQATAOAfgHQAVgFAYgVQAQgMASAJQAPAFADAMQAEAQAFAGg");
	this.shape_20.setTransform(82.8,124.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#878654").s().p("AhHAQQADgKANgGQAggQARABQAVACA1AbIAEACg");
	this.shape_21.setTransform(42,126.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7A7941").s().p("AixBMQgHgFgBgHIgDgTQAPg8AQgZQAQgZAdgKQAmARAoAAQANAAAKgBQAEAHAHAcQAHAXAJAKQASAXApANIBqAdIAIACg");
	this.shape_22.setTransform(52.4,120.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#878654").s().p("AgrBkIgygaQgmgVgQgUQgzg9B7hTIB1AAQAHARAJAFQArA0A+APQAAATgSAEQgqAQgGA9QgCASg1ALQgVAFgRAAQgbAAgUgMg");
	this.shape_23.setTransform(28.5,116.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#878654").s().p("AhFBKQgigTATgLQAqgZAGgIQAMgOAMgkQAMgoADgGIA7AAQANACARgBIAABsQgSAEgQAMQgxAlgJAEQgMAFgNAAQgVAAgXgMg");
	this.shape_24.setTransform(87.8,114);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7A7941").s().p("AAAAQQgggNgjgXIgFgFICRAAIAAAvQgMAEgNAAQgWAAgagKg");
	this.shape_25.setTransform(89.7,108);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999A72").s().p("AnhByIAAjjIPCAAIAADjg");
	this.shape_26.setTransform(48.8,116.8);

	this.addChild(this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,97,132.8);


(lib.cej = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#471E04").s().p("AgvAWQgKAAgGgHQgHgGAAgJQAAgIAHgGQAGgHAKAAIBfAAQAKAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgKAAg");
	this.shape.setTransform(7.1,2.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.3,4.5);


(lib.briz02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#878654").s().p("AADA/QgTgKgLgVQgQgfAMgvIAEgUQAZAXARAZQAUAZACAQIgQArg");
	this.shape.setTransform(3.8,61.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#565541").s().p("Ag8BIQgagfAkgrQAwguALgOQASgUANALQAHAFASAhQANAZgMAYQgMAYgZAHIg0AVQgSAIgJAAQgHAAgDgEg");
	this.shape_1.setTransform(22.8,8.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#878654").s().p("AgkA1QgFglAGgPQAJgTArgoIAWgWIgcCgIgLABQggAAgEgcg");
	this.shape_2.setTransform(31,29.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7A7941").s().p("AACB4QgvgggTgbQgOgTgIgjQgDgHgPgoQgKgbAEgKQAVg1A4ATQAJADAfAQQAWAKAHgDQAVgGAXgcQAKgMAWBAIgYBtQgoBDgMAKQgEADgKAAQgIAAgMgCg");
	this.shape_3.setTransform(24.7,25.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#565541").s().p("AgSClIgzgLQgPgHgHgKQgKgNgCgWQgCghAXgdQAYgegDgiQgFgyAVgpQATgmAagJQAVgHAJAXQAFANAIAfQAGAOARADQAPACAXgJIgPBUIgEACQgZANgOAbQgSAhALAkIAMAkIAAACQgYAYgoAAIgFAAg");
	this.shape_4.setTransform(20.5,54.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7A7941").s().p("AgwCCQgWgJgLgVQgPgfALgxQAOg8AahpQADABAJgBQAcgGAQApQAQAjACAzQBKAhgPA3QgLAng2Asg");
	this.shape_5.setTransform(9.1,54.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#878654").s().p("Ah3CHIAkiMQANgBAIgHQAVgHAIhaQAIheAPgNQAhgfARBPQAJApACA/QABATAUAXQASAUASAHQAQAIgHA2QgHA4gcAXQgJAHgdAdQgeAcgWALQgPAGgOAAQgzAAgfhbg");
	this.shape_6.setTransform(15,32.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999A72").s().p("AAAFhIiOghQgVgJgLgVQgQgfAMgxQAoizAOgxIA8jjQAQg6AtgdQAlgYAxAFQAuAFAdAdQAfAfgIAqIADAAIhYH0IgZBJQgYAYgqAAIgFAAg");
	this.shape_7.setTransform(18.5,35.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(250));

	// Capa 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#241105").s().p("AgcDDQgLgKgBgQIAAgUIgHABQgPABgLgLQgMgKAAgPIgBgVQgRgLgBgUIgJjkQgBgkAhgCQAhgDAIAeIBuAlIgHAwQAFAGADAGIApBuQAFAPgGAOQgHANgOAGQgOAFgOgGQgOgHgGgOIgPgqIAFCXQABAPgKAMQgLALgNABIgDAAQgOAAgKgKg");
	this.shape_8.setTransform(10.8,80.1,1,1,15);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(7).to({scaleX:1.17,rotation:0,skewX:15,skewY:-165,x:6.5,y:81.4},0).wait(134).to({scaleX:1,rotation:15,skewX:0,skewY:0,x:10.8,y:80.1},0).wait(109));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,0,38.1,100);


(lib.briz01 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999A72").s().p("AhsBsIApjzICwAcIgpDzg");
	this.shape.setTransform(11.9,49.8,1,0.907,-4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#241105").s().p("AAJCvIg/gLQgSgDgLgPQgKgPADgSIAJg4IAAgDIAkjRQAEgXAVAEQAUAEgCAWIgGAmIAAAAIA/ALQASADALAPQAKAPgDARIggC7QgDASgOALQgMAIgNAAIgIAAg");
	this.shape_1.setTransform(12.3,39.6,1,0.907,-4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7A7941").s().p("AgqBbQgJgIgIgEIAMhgQAfgvAEgFQAVgbAVAHQAzASgkBFQgZAvglAiQgOAMgIAAIgDAAg");
	this.shape_2.setTransform(16.5,37.5,1,0.907,-4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#878654").s().p("Ag2BFQg1g0ADgaQACgUAYgGQAugLAWgMQAZgOAGggQADgVAlAEQAZADAMAlQALAigFAvQgFAugSAhQgVAmggAFQgdAAg1g1g");
	this.shape_3.setTransform(23.9,25.4,1,0.907,-4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7A7941").s().p("AhyBLIgBAAQAchGA1goQBAg2BWALQgPAPgRALQgRALgLABQgTABgGAEQgHAHgvAxQg0A0gMAGQgDACgEAAQgIAAgMgGg");
	this.shape_4.setTransform(25.7,9.2,1,0.907,-4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#565541").s().p("AhfCVQgagfAkgtQAwguAMgOIAvgwQAbgegEgKQgCgEgYACQgVACgGgXQgJggAUgPQAYgQAsATQAqASgGAuQgFAogbAPQgfARgJAIQgSASAMAWQAOAZgMAaQgMAYgYAHIg1AVQgSAIgKAAQgHAAgCgEg");
	this.shape_5.setTransform(20.5,49.7,1,0.907,-4.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#878654").s().p("AhegEIALgtIA9gSQAbgIATgHQArgQANgBQAaAAgTApQgMAcghApQgjAsgpAtQgNg8gvgsg");
	this.shape_6.setTransform(18.4,49.5,1,0.907,-4.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#878654").s().p("AgbASQgKgSAhgfQAZgIAKgFIgQBZQgigJgIgSg");
	this.shape_7.setTransform(30.5,47.7,1,0.907,-4.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999A72").s().p("AhwGUQgpgEgdgiQgggnAMgzQAeiEAOhKIAahzIAViMQAMhMA6g+QBKhRBrAQQAagMAcgGQACAcAJBEQARCKh4BXIhBGIIgZBJQgPARgcAGQgRAEgXAAQgTAAgWgDg");
	this.shape_8.setTransform(25.5,37.5,1,0.907,-4.2);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.7,-0.7,42.8,75.7);


(lib.brder02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#565541").s().p("AAkESIAAgHQAEgPABgLIABgCQATggADgMQAGgYgWgOQgbgQgEgWQgFgYAagaQASgSAOgVQAKAUAQASIAFAFIAJAIIABABIAAABQADAVABALQABATgFAVQgFAYgMAvQgIAkAJAGQAEADAUgOQALgIALAEQAHABAGAHQALALADAJQgFAFgMAGIhmAXQgLgRgCgYgAhJinQgVgXgMgJIgGgDQgUgJgbAdIgIgwQA6hgBxAOQgYB7gTAVQgHAJgJAAQgJAAgJgIg");
	this.shape.setTransform(16.9,31.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7A7941").s().p("AgzDQIAAgBIAEAIIgEgHgAhPA5QAFgMAIgmQAKgpAHgYQATg5gDgWQgCgRgYgdQgIgLgMgBQADgGAIgFQAHgEALgEQA9ADAcALQAdALAPAbIgBAGIgBAHIgBABIgBAGIgBASQgCAVAFAUQACAMAEALIghATQgVAMgJAKQgVAVgDArQgBAZgEBKQgZAIgcASgAhVAVIAAAAIgBgFIAAgBIAFAbg");
	this.shape_1.setTransform(14.3,38.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999A72").s().p("AgOEWQADgMALgOQAEgJAUgXIAAAAIAAAHQACAYALARIgoAKIgLAAgACcDqQgDgJgLgLQgGgGgHgCQAJgMAMgMIAcgeIgRhPQgjgNgbgYIAAAAIgBgBIgJgJIgFgFIAAAAQgQgRgKgTQgOATgSASQgaAaAFAZQAEAWAbAPQAWAOgGAYQgDANgTAfIgBACQADgkgkACQgSAAgVAHQAEhJADgaQAEgrAUgWQAKgIATgMIAggTQgEgLgCgNQgEgTABgVIABgTIABgFIABgBIABgHIABgHQAKgpAegjIACgGQA5DcAfCIQAMAwgQAgQgEAIgGAHQgJAKgNAFQAMgGAFgFgAizkUIAAAAIAIAvQAbgdAUAJQABAZANAeIAFALQgJAGgCAGQgSgCgYATIAjDBIgBABg");
	this.shape_2.setTransform(18.1,36.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#878654").s().p("AgaE/IgEgBIgHgBIgTgFIgKgEIgHgEIgDgCIgCgCIgJgJQgFgFgDgGIgDgIQgFgLgBgNIgCgMIABgBQAcgSAZgIQAUgIASAAQAkgBgCAkQgBALgFAOIAAABQgSAWgGAJQgLAOgCAMIgDAAgABJEHQgIgGAIgkQALgvAGgZQAEgVgBgTQgBgLgDgVQAbAYAjANIARBPIgcAeQgMANgJALQgLgDgLAIQgRALgFAAIgCAAgAiBBrIgEgbIgijBQAYgTARACQAMABAIALQAXAdADARQADAWgTA3QgHAYgKArQgIAmgFAMgABKA/IAAgBIAFAFIgFgEgAgGiHQgcgLg/gDQgLAEgHAEIgFgLQgMgfgBgZIAFAEQAMAJAVAXQATAPAQgQQASgVAah8QA1ACAaBRIALAsIADAMIgCAFQgeAkgJApQgQgbgagLg");
	this.shape_3.setTransform(19.1,32.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(400));

	// Capa 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#241105").s().p("AADC+QgOAAgKgMQgLgLABgPIAFiYIgPAqQgGAPgNAGQgOAGgPgFQgOgFgGgOQgHgOAFgOIAqhuQACgHAFgFIgFglIAAgBIADABIADAAIALAAICNghQANgFAJgKIABALIgJDkQAAAUgSAKIgBAVQAAAPgLALQgMAKgPAAIgGgBIgBAUQgBAPgLALQgKAKgOAAIgCgBg");
	this.shape_4.setTransform(22.8,78.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#241105").s().p("AgRC+QgPAAgLgMQgKgLAAgPIAGiYIgsgvIAAguQADgHAFgFIgGglIAAgBIAEABIACAAIALAAICNghQAOgFAIgKIABALIgIDkQgBAUgRAKIgCAVQAAAPgLALQgMAKgPAAIgGgBIgBAUQAAAPgMALQgIAKgNAAIgDgBg");
	this.shape_5.setTransform(25.4,75.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_4}]},200).to({state:[{t:this.shape_5}]},9).to({state:[{t:this.shape_5}]},76).to({state:[{t:this.shape_4}]},7).wait(108));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.2,97.5);


(lib.brder01 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#565541").s().p("AgCDfQgWgWgMgJIgFgDQgUgJgZAaIgCACIgUhtIAAgDQAEgegOgYIgBgBIgXh7QgFgTAAgNQALAAAOgCIAJgBQgDgFgBgFQgDgfAoAIQAyAKAJgKQAFgFASgbQAOgSATgMIAbgRIAMBKIgDAKIgCAFQgDAGgEAGQgMAOgSAAIgdAEQAAAMAJAuQAJAMAdAMQAbAMAfAGIgEgRIAsChQgWASgkgaQgfgVgcgpIgXABIAHALQAdAoACAsQADApgTAVQgIAIgJAAQgIAAgHgHg");
	this.shape.setTransform(25.7,47.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7A7941").s().p("AhOCzQgTgCgJgLQgLgMAXgVIAIgHQAogdAKgMQAJgKgBgTQAAgUAQgUQAOgTAMAHQAVAOASgBIBCgCIAEgBIAIAyIgbARQgTAMgOASQgUAbgFAFQgJAKgwgKQgogIADAfQABAFADAFIgJABIgUACIgFAAgAh2h3QgWgPATgrIAKgBIAgAAQBGAEAzAxQgdAFgggGQgegHgHAAQgIAAgNAmQgUgKgVgOg");
	this.shape_1.setTransform(18.8,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999A72").s().p("AgJF1IgfgkIgFgcQAZgaAUAIQAAAbAEAaQAFAegNAAIgFgBgADQFDIADgFIAEANIAAABIgHgJgAhNCRQAOAYgEAdgAB0giIgGgEIACgEIAAAAIADABIAEAPgAjVj3IAEgRQAPg+AggvIAGAEIARgCIgKABQgTArAWAPQAVAPAUAKQgQAwgNARQgGAIgqAXQgTALAhASQAmATAggMQAKgEAygkQAfgWAjAGQAeAEAWATIAKAIIABAEIhCACQgSABgTgOQgMgIgQAVQgQAUAAATQABATgJALQgKAMgoAcIgIAHQhmg1ALiIg");
	this.shape_2.setTransform(21.6,37.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#878654").s().p("AgTFDQATAFgEgiQgFgZgCgbIAGADQAKAJAVAWQATAOAPgPQAUgVgDgpQgDgsgdgoIgHgLIAYgBQAbApAfAVQAkAaAWgSIATBHIADALIgCAFQgnBmhEAAQgxAAg9g1gABQAXQgcgMgKgLQgIgtgBgMIAdgEQATAAALgOQAFgGADgGIAGADIACAJIAJAjIABACIABADIAAABIAAABIABABIAAABIAPA3IAEARQgfgGgcgMgAiyjUQgigRATgLQArgYAGgIQAMgRAQgwQANgmAJAAQAHAAAeAHQAhAGAcgFQAhAeAXAqQATAlAGAhIgBgBIgFgEIgKgHQgWgTgdgEQgjgGgfAWQgzAjgKAEQgMAFgNAAQgVAAgXgMg");
	this.shape_3.setTransform(22.6,42.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,43.1,80.1);


(lib.boca = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2874D").s().p("AAAAYQgUABgjgNIgegMQgFgBgCgFQgBgFACgFQACgFAFgBQAFgCAFACIAbAMQAfAKAQAAIAAAAQAcAAAvgWQAFgCAFACQAFABACAFQADAFgCAFQgCAFgFABQgNAGgSAGQggAMgVAAIgCAAg");
	this.shape.setTransform(9.4,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0033").s().p("Ag6ALQAGgKAGgEQAUgUAbAAQAcAAAUAUQAGAEAEAGQgbARggAAQgaAAgggNg");
	this.shape_1.setTransform(9.3,3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2874D").s().p("AhVAMQgFgFgCgHQgBgHACgJQACgIAFgDQAFgDAFAEIBKgHIBLAHQAFgEAFADQAFADACAIQADAJgCAHQgCAHgFAFQgMAJgPAJQgEgGgGgGQgUgSgdAAQgaAAgVASQgGAGgGAKg");
	this.shape_2.setTransform(9.4,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},30).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_2},{t:this.shape_1}]},37).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape}]},2).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},30).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(2).to({_off:false},0).to({_off:true},37).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(2).to({_off:false},0).wait(82));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.8,4.9);


(lib.piernaspers = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ak3AZIAAgxIJvAAIAAAxg");
	this.shape.setTransform(122.5,148.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ak3AZIAAgxIJvAAIAAAxg");
	this.shape_1.setTransform(51.3,148.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999A72").s().p("AhkC4IAAlvIDJAAIAAFvg");
	this.shape_2.setTransform(126.6,52.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999A72").s().p("AhkC4IAAlvIDJAAIAAFvg");
	this.shape_3.setTransform(47.3,52.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#595837").s().p("AhkC4IAAlvIDJAAIAAFvg");
	this.shape_4.setTransform(122.7,55.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#595837").s().p("AhkC4IAAlvIDJAAIAAFvg");
	this.shape_5.setTransform(51.2,55.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C6A177").s().p("Ag0B0QgHAAgFgFQgEgFAAgGQAAgGAEgFQAFgFAHAAIBpAAQAHAAAFAFQAEAFAAAGQAAAGgEAFQgFAFgHAAgAg0AwQgHABgFgFQgEgFAAgGQAAgHAEgFQAFgEAHAAIBpAAQAHAAAFAEQAEAFAAAHQAAAGgEAFQgFAEgHAAgAg0gQQgHgBgFgEQgEgFAAgGQAAgGAEgFQAFgFAHAAIBpAAQAHAAAFAFQAEAFAAAGQAAAGgEAFQgFAEgHABgAg0hTQgHAAgFgEQgEgFAAgHQAAgGAEgFQAFgEAHAAIBpAAQAHAAAFAEQAEAFAAAGQAAAHgEAFQgFAEgHAAg");
	this.shape_6.setTransform(121.8,115.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#241105").s().p("AkvEAQAAhxABgSQAEhLATg2IAAj7IFKAAIAAD7QAAAZAqALIBaATQCCAmgKCng");
	this.shape_7.setTransform(122.4,125.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C6A177").s().p("Ag0B0QgHAAgFgFQgEgFAAgGQAAgGAEgFQAFgFAHAAIBqAAQAGAAAFAFQAEAFAAAGQAAAGgEAFQgFAFgGAAgAg0AwQgHABgFgFQgEgFAAgGQAAgHAEgFQAFgEAHAAIBqAAQAGAAAFAEQAEAFAAAHQAAAGgEAFQgFAEgGAAgAg0gQQgHgBgFgEQgEgFAAgGQAAgGAEgFQAFgFAHAAIBqAAQAGAAAFAFQAEAFAAAGQAAAGgEAFQgFAEgGABgAg0hTQgHAAgFgEQgEgFAAgHQAAgGAEgFQAFgEAHAAIBqAAQAGAAAFAEQAEAFAAAGQAAAHgEAFQgFAEgGAAg");
	this.shape_8.setTransform(52.1,115.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#241105").s().p("AkvEAQgKinCCgmQAhgKA6gJQAqgLAAgZIAAj7IFKAAIAAD7QATA2AEBLQABASAABxg");
	this.shape_9.setTransform(51.5,125.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#878654").s().p("ACxIJQg/AAgsgsQgtgtAAg+IAApUIgyAAIAAJUQAAA+gsAtQgsAsg/AAIiDAAQg+AAgsgsQgtgtAAg+IAAt6IOVAAIAAN6QAAA+gtAtQgsAsg/AAg");
	this.shape_10.setTransform(86.9,52.2);

	this.instance = new lib.Path_113();
	this.instance.setTransform(88.3,156,1,1,0,0,0,88.3,25.6);
	this.instance.alpha = 0.57;

	this.addChild(this.instance,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,176.7,181.7);


(lib.cejas02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.cej();
	this.instance.setTransform(7.1,2.3,1,1,0,0,0,7.1,2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(66).to({y:-2.9},7,cjs.Ease.get(1)).wait(139).to({rotation:-15,y:2.8},7,cjs.Ease.get(1)).wait(136).to({rotation:15,x:8.3,y:3.8},6,cjs.Ease.get(1)).wait(95).to({rotation:0,x:7.1,y:2.3},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.3,4.5);


(lib.cejas01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.cej();
	this.instance.setTransform(7.1,2.3,1,1,0,0,0,7.1,2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71).to({y:-2.9},8,cjs.Ease.get(1)).wait(138).to({rotation:-15,y:2.8},7,cjs.Ease.get(1)).wait(120).to({rotation:15,x:8.3,y:3.8},9,cjs.Ease.get(1)).wait(56).to({rotation:0,x:7.1,y:2.3},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.3,4.5);


(lib.cejas = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.cejas02();
	this.instance.setTransform(46.1,2.3,0.972,1,0,0,180,7.1,2.3);

	this.instance_1 = new lib.cejas01();
	this.instance_1.setTransform(7.1,2.3,1,1,0,0,0,7.1,2.3);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53,4.5);


(lib.cabezaint = function() {
	this.initialize();

	// Capa 2
	this.instance = new lib.cejas();
	this.instance.setTransform(57.3,61.1,1,1,0,0,0,26.7,2.3);

	this.instance_1 = new lib.ojospers();
	this.instance_1.setTransform(57.3,71.6,1,1,0,0,0,23,3.5);

	this.instance_2 = new lib.boca();
	this.instance_2.setTransform(57.3,92.2,1,1,0,0,0,9.4,2.5);

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#454535").s().p("AgagpIADgqQAfAxATBjIgGATQgShUgdgpg");
	this.shape.setTransform(97.4,70);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#454535").s().p("AgaBBQAThjAfgxIADAqQgcApgUBUg");
	this.shape_1.setTransform(17.2,70);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D4A15E").s().p("ACSAKQgogihVgTQhkgYh+ADIgBAAIAAguIABAAQCCgCBgAWQBVATAoAlQAlAhAYBOIgEAjQgWhHgjgfg");
	this.shape_2.setTransform(78,62.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E0B775").s().p("AjOBNQAXhNAmgiQApglBUgTQBggWCCACIAAAAIAAAuIAAAAQh+gDhkAYQhVATgoAiQgjAfgWBHg");
	this.shape_3.setTransform(36.6,62.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(2.1,1,1).p("AhBggIAFANQAIAPANAKQAnAlBCgN");
	this.shape_4.setTransform(31.7,32.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#336666").s().p("AgzCVQhigBgdhQQgKgbABghQAAglAOgUQAegqBkgdQBmgcCCAAIAACeIgUAAQgoADgbAYQgTARgRAjQgLAXgHAJQgXAchHAAIgFAAg");
	this.shape_5.setTransform(38.3,26.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C1C1AF").s().p("AgXDNQiKgBgqh2QgQgtAEgwQAEgvAUgcQAqg7B3ghQBsgfCLAAIAAEPIgOAAQgcABgQAWQgKAOgRAjQgnBEhvAAIgFgBg");
	this.shape_6.setTransform(35.5,26.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#295353").s().p("ACMB5QgHgJgLgXQgRgjgSgRQgbgYgogDIgnAAQgoADgbAYQgSARgRAjQgLAXgHAJQgYAdhNgBQhjgBgdhQQgJgbAAghQABglAOgUQAegqBkgdQBngcCBAAQCCAABnAcQBkAdAeAqQAPAUAAAlQAAAhgJAbQgdBQhjABIgFAAQhJAAgXgcg");
	this.shape_7.setTransform(57.3,26.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BCBCA2").s().p("ABUCKQgRgjgJgOQgQgWgcgBIgbAAQgcABgQAWQgJAOgRAjQgoBFh2gCQiKgBgph2QgRgtAFgwQAEgvAUgcQAqg7B3ghQBtgfCKAAQCLAABtAfQB3AhAqA7QAUAcAEAvQAFAwgQAtQgqB2iKABIgFABQhyAAgnhEg");
	this.shape_8.setTransform(57.3,26.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#565541").s().p("AhuA9IAAiJQBuAqBvgqIAACJQg4AQg3AAQg2AAg4gQg");
	this.shape_9.setTransform(57.3,111.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A6A77F").s().p("AHaEQQgVgPgEgZIgHgxQgNhjgOgxQgXhTgngjQgogkhVgTQhigXiCACIAAAAQiBgChiAXQhVATgoAkQgnAjgXBTQgNAxgOBjIgHAxQgEAZgVAPQgVAPgZgEQgZgEgPgVQgPgVAEgZIAGguQARh3ASg8QAhhrA9g3QA/g5B2gbQBugZCQACQCRgCBuAZQB2AbA/A5QA9A3AhBrQASA8ARB3IAGAuQAEAZgPAVQgPAVgZAEIgLAAQgTAAgQgLg");
	this.shape_10.setTransform(57.3,67.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#565541").s().p("AjfDWIAIgBQCcgeBdhzQAyg8AehNQAahDAHhGQAEgcADg2IBGAxQgCBVgeBYQgkBnhBBPQhnB9iiAmQgSAFgfAFg");
	this.shape_11.setTransform(79.7,87.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#565541").s().p("ACvEXQiigmhnh9QhBhPgkhnQgdhYgDhVIBHgxQACA2AEAcQAHBGAaBDQAeBNAyA8QBeBzCbAeIAIABIAABLQgfgFgSgFg");
	this.shape_12.setTransform(34.8,87.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#787645").s().p("AAADKInYBFQAJiQAchoQAriaBUgxQBag0BJgUQA6gPBXgDQBYADA6APQBJAUBaA0QBUAxArCaQAcBoAJCQg");
	this.shape_13.setTransform(57.3,27.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D4A15E").s().p("AgWBJQgMgCgEgdQAMgEAHgMQAHgNgDgOQgEgYgUgJIABgJQANgZAWgEQAPgEAMALQAQAPAAAjQgBAkgVAdQgSAYgQAAIgGgBg");
	this.shape_14.setTransform(99.7,75.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EDBA68").s().p("AgqB5QgbgGgChfIADhcQALgTAMgLQAOgNAVgFQAcgGAXATQAgAYAAA5QgBA8gpAwQgfAogfAAIgLgBg");
	this.shape_15.setTransform(100,75.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EDBA68").s().p("AgRAyQgWgdAAgkQAAgjAQgPQAMgLAPAEQAWAEANAZIABAJQgUAJgEAYQgDAOAHANQAHAMAMAEQgEAdgMACIgGABQgRAAgRgYg");
	this.shape_16.setTransform(14.9,75.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F2D291").s().p("AgeBSQgpgwAAg8QAAg5AfgYQAYgTAcAGQAVAFAMAMQAKALAHAUQAJArAAA5QABBWgdAHIgKABQgfAAgggog");
	this.shape_17.setTransform(14.5,75.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Am2C+QgKhTAVhTQA4jdDshOQCYgaA9AEQBlAGBnBDQCbBlAFDaQACBugcBaQAAgvgThBQgkiBhZhVQgSAMhJBDQg7A3gsAMQg6AQhdgEQiIgGgNABQhNADgoAiQgyAqgMBiQgbgjgKhKg");
	this.shape_18.setTransform(57.3,36.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EDBA68").s().p("AjRokQCbADBaAxQCrBaADDqQAEDvgsCXQgeBng0A5QgtAygkAZQgxAlhFARQgTAUgXAJQgWAJgiAEg");
	this.shape_19.setTransform(78.3,67.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F2D291").s().p("ABIIYQgXgKgTgTQhDgRgzglQgkgZgtgyQg0g5gehnQgsiXAEjvQADjqCrhaQBcgxCZgDQFJI5lJIQQgjgEgVgJg");
	this.shape_20.setTransform(44.4,67.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#454535").s().p("AgLDYQg4gXgLgZQgOgfAIhrQAKhyAdg4QAbgzA3gdIAzgSIgPHdQgogEgsgTg");
	this.shape_21.setTransform(13.9,71);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#454535").s().p("AhWjuIAzASQA2AdAaAzQAdA4AKByQAIBrgOAfQgLAZg3AXQgsATgoAEg");
	this.shape_22.setTransform(100.5,71);

	this.addChild(this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,114.6,122.3);


(lib.brazoiz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.instance = new lib.briz02();
	this.instance.setTransform(27.3,62.6,1,1,0,0,0,27.3,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:53.4,x:-4.8,y:43.7},5,cjs.Ease.get(0.32)).to({scaleX:1,scaleY:1,rotation:106.9,x:-11.9,y:30.7},5,cjs.Ease.get(1)).wait(123).to({regY:9.5,scaleX:1,scaleY:1,rotation:-6.6,x:13.2,y:57.2},5).to({regY:9.6,scaleX:1,scaleY:1,rotation:0,x:27.3,y:62.6},5,cjs.Ease.get(1)).wait(107));

	// Capa 1
	this.instance_1 = new lib.briz01();
	this.instance_1.setTransform(40.4,12.2,1,1,0,0,0,33.6,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:12.3,rotation:64.2,x:43.1,y:18.1},10,cjs.Ease.get(1)).wait(123).to({regY:12.2,rotation:0,x:40.4,y:12.2},10,cjs.Ease.get(1)).wait(107));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-0.7,52.4,153.8);


(lib.brder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.instance = new lib.brder02();
	this.instance.setTransform(28,66.6,1,1,0,0,0,11.1,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(193).to({rotation:45,x:60.4,y:51.6},7,cjs.Ease.get(1)).wait(80).to({rotation:0,x:28,y:66.6},10,cjs.Ease.get(1)).wait(110));

	// Capa 1
	this.instance_1 = new lib.brder01();
	this.instance_1.setTransform(13.6,12.8,1,1,0,0,0,13.6,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(193).to({regX:13.7,regY:12.9,rotation:-30.9,x:13.7},7,cjs.Ease.get(1)).wait(80).to({regX:13.6,regY:12.8,rotation:0,x:13.6},10,cjs.Ease.get(1)).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,155.8);


(lib.cabezapers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 3
	this.instance = new lib.cabezaint();
	this.instance.setTransform(57.3,61.1,1,1,0,0,0,57.3,61.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84).to({rotation:-4.5,x:54.3},6,cjs.Ease.get(1)).wait(53).to({rotation:0,x:57.3},5,cjs.Ease.get(0.91)).wait(257));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114.6,122.3);


(lib.militar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cabeza
	this.instance = new lib.cabezapers();
	this.instance.setTransform(87,61.1,1,1,0,0,0,57.3,61.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// brazos
	this.instance_1 = new lib.brazoiz();
	this.instance_1.setTransform(33.9,200.8,1,1,0,0,0,26.5,78.5);

	this.instance_2 = new lib.brder();
	this.instance_2.setTransform(140.5,201.5,1,1,0,0,0,26,77.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(2));

	// torso
	this.instance_3 = new lib.chalecopers();
	this.instance_3.setTransform(86.6,187.2,1,1,0,0,0,48.5,66.4);

	this.instance_4 = new lib.torsopers();
	this.instance_4.setTransform(87.6,136.1,1,1,0,0,0,53.5,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(2));

	// piernas
	this.instance_5 = new lib.piernaspers();
	this.instance_5.setTransform(88.3,317,1,1,0,0,0,88.3,90.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176.7,407.8);


// stage content:
(lib.lip01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var items = [this.it01, this.it02, this.it03, this.it06]
		var items = [this.it06]
		
		var tl = new TimelineMax();
		
		tl.staggerFrom(items, 1.8, {alpha:0, y:"+=300px", ease:Back.easeOut}, 0.1);
		//tl.staggerFrom(items2, 1.8, {alpha:0, x:"+=800px", ease:Back.easeOut}, 0.1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// soldado
	this.instance = new lib.militar();
	this.instance.setTransform(1105.3,431.2,1,1,0,0,0,88.3,203.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa 34
	this.it06 = new lib.it06();
	this.it06.setTransform(640,400,1,1,0,0,0,640,400);

	this.timeline.addTween(cjs.Tween.get(this.it06).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(386,481.4,1628.1,1017.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;