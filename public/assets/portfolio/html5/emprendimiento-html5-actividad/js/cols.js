
	for (var i = 1; i < 18; i++) {
		$("section").append("<div class='col' id='col"+ i +"'></div>");
	}


function columnas(a, b, c) {

	for (var i = a; i < b; i++) {
		console.log(i);
		$("#col"+ c).append("<div class='boton' id='b"+ i +"' style='background-image:url(imgs/btns/b"+ i +".png)'></div>");
	}

}

columnas(1, 2, 1);
columnas(2, 8, 2);
columnas(8, 15, 3);
columnas(15, 22, 4);
columnas(22, 29, 5);
columnas(29, 36, 6);
columnas(36, 43, 7);
columnas(43, 49, 8);
columnas(49, 54, 9);
columnas(54, 60, 10);
columnas(60, 67, 11);
columnas(67, 74, 12);
columnas(74, 81, 13);
columnas(81, 86, 14);
columnas(86, 93, 15);
columnas(93, 100, 16);
columnas(100, 103, 17);