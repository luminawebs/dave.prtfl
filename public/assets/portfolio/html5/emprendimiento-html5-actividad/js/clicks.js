var introitem = 1;


$("#adelante").click(function(){

	if(introitem === 1){
		introitem = 2;
		TweenMax.from(".item01", 0.3, { opacity: 1, display:'block' });
		TweenMax.to(".item01", 0.5, { opacity: 0, display:'none', y: -300  });
	 	
		TweenMax.from(".item02", 0.5, { opacity: 0, display:'none', y: +30, scaleX:1.5, scaleY:1.5 });
	 	TweenMax.to(".item02", 0.3, { opacity: 1, display:'block', y: -300 });

		TweenMax.to("#atras", 0.5, { display:'block'});
	}


	else if(introitem === 2){
		introitem = 3;
		TweenMax.from(".item02", 0.3, { opacity: 1, display:'block' });
		TweenMax.to(".item02", 0.5, { opacity: 0, display:'none', y: -300  });
	 	
		TweenMax.from(".item03", 0.5, { opacity: 0, display:'none', y: +30, scaleX:1.5, scaleY:1.5 });
	 	TweenMax.to(".item03", 0.3, { opacity: 1, display:'block', y: -600 });


		TweenMax.to("#adelante", 0.5, { display:'none'});
	}
		
});


$("#atras").click(function(){

	if(introitem === 2){
		introitem = 1;
		TweenMax.from(".item02", 0.3, { opacity: 1, display:'block' });
		TweenMax.to(".item02", 0.5, { opacity: 0, display:'none', y: -300  });
	 	
		TweenMax.from(".item01", 0.5, { opacity: 0, display:'none', y: +30, scaleX:1.5, scaleY:1.5 });
	 	TweenMax.to(".item01", 0.3, { opacity: 1, display:'block', y: 0 });

		TweenMax.to("#atras", 0.5, { display:'none'});
	}


	else if(introitem === 3){
		introitem = 2;
		TweenMax.from(".item03", 0.3, { opacity: 1, display:'block' });
		TweenMax.to(".item03", 0.5, { opacity: 0, display:'none', y: -300  });
	 	
		TweenMax.from(".item02", 0.5, { opacity: 0, display:'none', y: +30, scaleX:1.5, scaleY:1.5 });
	 	TweenMax.to(".item02", 0.3, { opacity: 1, display:'block', y: -300 });

		TweenMax.to("#adelante", 0.5, { display:'block'});
	}
		
});


/*Créditps e instrucciones*/

$("#creditos").click(function(){
		pop01("<h1>Créditos</h1> <h2>Autor:</h2><p>Paula Echeverry Pérez</p></h2><h2>Pedagogía:</h2><p>Gilberto Gil Cante</p> <h2>Diseño multimedial:</h2><p>Mauricio Robayo Castañeda</p>", "ean", "0", "creditos");
});

$("#instrucciones").click(function(){
		abrirPopIntro();
});

/**/


$("#b1").click(function(){
	if(b[1] === true){
		pop01("¡felicitaciones! Estás en el proceso de inciar tu startup", "1", "0", "unicaopcion");
		bs[1] = true;
	}
});

$("#b5").click(function(){
	if(b[5] === true){
		pop01("Decides formalizarte", "5", "-10");
		bs[5] = true;
	}

});

$("#b6").click(function(){
	if(b[6] === true){
		pop01("Decides no formalizarte", "6", "-10");
		bs[6] = true;
	}
});


$("#b4").click(function(){
	if(b[4] === true){
		pop01("Aplicas a un fondo de capital semilla", "4", "-10");
		bs[4] = true;
	}
	
});


$("#b10").click(function(){
	if(b[10] === true){
		pop01("Has lanzado el dado", "10", "+40", "solodado");
		bs[10] = true;
	}
});

$("#b9").click(function(){
	if(b[9] === true){
		pop01("Ganaste", "9", "+15", "unicaopcion");
		bs[9] = true;
	}
});

$("#b3").click(function(){
	if(b[3] === true){
		pop01("No ganaste", "3", "+40", "unicaopcion");
		bs[3] = true;
	}
});

$("#b2").click(function(){
	if(b[2] === true){
		pop01("Invertiste en espacios", "2", "-30", "unicaopcion");
		bs[2] = true;
	}
});

$("#b8").click(function(){
	if(b[8] === true){
		pop01("Vendiste", "8", "+5", "unicaopcion");
		bs[8] = true;
	}
});

$("#b15").click(function(){
	if(b[15] === true){
		pop01("Contratas personal", "15", "-10", "unicaopcion");
		bs[15] = true;
	}
});

$("#b22").click(function(){
	if(b[22] === true){
		pop01("Vendiste", "22", "+20", "unicaopcion");
		bs[22] = true;
	}
});

$("#b29").click(function(){
	if(b[29] === true){
		pop01("Desarrollo de nuevas líneas", "29", "-15", "unicaopcion");
		bs[29] = true;
	}
});

$("#b36").click(function(){
	if(b[36] === true){
		pop01("Por buenas prácticas ganaste premio", "36", "+30", "unicaopcion");
		bs[36] = true;
	}
});


$("#b16").click(function(){
	if(b[16] === true){
		pop01("Contratas personal", "16", "-10", "unicaopcion");
		bs[16] = true;
	}
});

$("#b23").click(function(){
	if(b[23] === true){
		pop01("Contrataste un outsourcing contable", "23", "-5", "unicaopcion");
		bs[23] = true;
	}
});

$("#b30").click(function(){
	if(b[30] === true){
		pop01("Invertiste en equipos", "30", "-20", "unicaopcion");
		bs[30] = true;
	}
});

$("#b37").click(function(){
	if(b[37] === true){
		pop01("Vendiste", "37", "+20", "unicaopcion");
		bs[37] = true;
	}
});

$("#b44").click(function(){
	if(b[44] === true){
		pop01("Es momento de pagar impuestos", "44", "-10", "unicaopcion");
		bs[44] = true;
	}
});

$("#b43").click(function(){
	if(b[43] === true){
		pop01("Estrategia de marketing mix", "43", "-10", "dado");
		bs[43] = true;
	}
});

$("#b54").click(function(){
	if(b[54] === true){
		pop01("Ganaste contrato", "54", "+80", "unicaopcion");
		bs[54] = true;
	}
});

$("#b55").click(function(){
	if(b[55] === true){
		pop01("Estrategia de marketing mix", "55", "-20", "dado");
		bs[55] = true;
	}
});

$("#b56").click(function(){
	if(b[56] === true){
		pop01("Estrategia de marketing mix", "56", "-30", "dado");
		bs[56] = true;
	}
});

$("#b49").click(function(){
	if(b[49] === true){
		pop01("Ganaste contrato", "49", "+60", "unicaopcion");
		bs[49] = true;
	}
});

$("#b60").click(function(){
	if(b[60] === true){
		pop01("Pago nómina", "60", "-20", "unicaopcion");
		bs[60] = true;
	}
});

$("#b67").click(function(){
	if(b[67] === true){
		pop01("Outsourcing contable", "67", "-30");
		bs[67] = true;
	}
});

$("#b68").click(function(){
	if(b[68] === true){
		pop01("Compra de maquinaria", "68", "-50");
		bs[68] = true;
	}
});

$("#b74").click(function(){
	if(b[74] === true){
		pop01("Rebajas en impuestos", "74", "+35", "unicaopcion");
		bs[74] = true;
	}
});

$("#b75").click(function(){
	if(b[75] === true){
		pop01("Tienes productos de mejor calidad", "74", "+40", "unicaopcion");
		bs[75] = true;
	}
});

$("#b81").click(function(){
	if(b[81] === true){
		pop01("Has lanzado el dado", "81", "+40", "solodado");
		bs[81] = true;
	}
});

$("#b86").click(function(){
	if(b[86] === true){
		pop01("Firmaste un contrato", "86", "+200", "unicaopcion");
		bs[86] = true;
	}
});

$("#b93").click(function(){
	if(b[93] === true){
		pop01("Invertiste en finca raíz", "93", "-40", "unicaopcion");
		bs[93] = true;
	}
});


$("#b87").click(function(){
	if(b[87] === true){
		pop01("Capital de riesgo", "87", "+100", "unicaopcion");
		bs[87] = true;
	}
});


$("#b94").click(function(){
	if(b[94] === true){
		pop01("Pago a accionistas", "94", "-30", "unicaopcion");
		bs[94] = true;
	}
});

$("#b61").click(function(){
	if(b[61] === true){
		pop01("Ganaste un contrato", "61", "+30", "unicaopcion");
		bs[61] = true;
	}
});

$("#b62").click(function(){
	if(b[62] === true){
		pop01("Ganaste un contrato", "62", "+50", "unicaopcion");
		bs[62] = true;
	}
});

$("#b69").click(function(){
	if(b[69] === true){
		pop01("Pago nómina", "69", "-30");
		bs[69] = true;
	}
});

$("#b76").click(function(){
	if(b[76] === true){
		pop01("Compra materias primas", "76", "-40", "unicaopcion");
		bs[76] = true;
	}
});

$("#b82").click(function(){
	if(b[82] === true){
		pop01("Subcontratas distribución", "82", "-20", "unicaopcion");
		bs[82] = true;
	}
});

$("#b96").click(function(){
	if(b[96] === true){
		pop01("Inversor se interesó por tu proyecto", "96", "+200", "unicaopcion");
		bs[96] = true;
	}
});

$("#b88").click(function(){
	if(b[88] === true){
		pop01("Ventas", "88", "+300", "unicaopcion");
		bs[88] = true;
	}
});

$("#b95").click(function(){
	if(b[95] === true){
		pop01("Materias primas", "95", "-50", "unicaopcion");
		bs[95] = true;
	}
});




$("#b7").click(function(){
	if(b[7] === true){
		pop01("Inviertes en equipos", "7", "-30", "unicaopcion");
		bs[7] = true;
	}
});




$("#b13").click(function(){
	if(b[13] === true){
		pop01("Has lanzado el dado", "13", "+40", "solodado");
		bs[13] = true;
	}
});


$("#b14").click(function(){
	if(b[14] === true){
		pop01("Ganaste un contrato", "14", "+25", "unicaopcion");
		bs[14] = true;
	}
});

$("#b21").click(function(){
	if(b[21] === true){
		pop01("Contratas personal", "21", "-10", "unicaopcion");
		bs[21] = true;
	}
});


$("#b28").click(function(){
	if(b[28] === true){
		pop01("Perdiste un contrato por no tener facturación", "28", "-10", "unicaopcion");
		bs[28] = true;
	}
});


$("#b35").click(function(){
	if(b[35] === true){
		pop01("Ofreciste servicio máquina", "35", "+15");
		bs[35] = true;
	}
});

$("#b42").click(function(){
	if(b[42] === true){
		pop01("Compraste insumos", "42", "-20", "unicaopcion");
		bs[42] = true;
	}
});

$("#b47").click(function(){
	if(b[47] === true){
		pop01("Decides formalizarte", "47", "-20", "dado");
		bs[47] = true;
	}
});

$("#b48").click(function(){
	if(b[48] === true){
		pop01("Vendiste", "48", "+10", "unicaopcion");
		bs[48] = true;
	}
});

$("#b59").click(function(){
	if(b[59] === true){
		pop01("Compraste insumos", "59", "-20", "unicaopcion");
		bs[59] = true;
	}
});

$("#b85").click(function(){
	if(b[85] === true){
		pop01("(vuelve al inicio) vendiste", "85", "+10", "unicaopcion");
		bs[85] = true;
	}
});



$("#b51").click(function(){
	if(b[51] === true){
		pop01("Invertiste en espacios", "51", "-30", "unicaopcion");
		bs[51] = true;
	}
});

$("#b52").click(function(){
	if(b[52] === true){
		pop01("Outsourcing contable", "52", "-20", "unicaopcion");
		bs[52] = true;
	}
});

$("#b53").click(function(){
	if(b[53] === true){
		pop01("Invertiste en equipos", "53", "-30", "unicaopcion");
		bs[53] = true;
	}
});

$("#b58").click(function(){
	if(b[58] === true){
		pop01("Es momento de pagar impuestos", "58", "-10", "unicaopcion");
		bs[58] = true;
	}
});

$("#b64").click(function(){
	if(b[64] === true){
		pop01("Desarrollo de producto", "64", "-30");
		bs[64] = true;
	}
});

$("#b65").click(function(){
	if(b[65] === true){
		pop01("Contrataste personal", "65", "-35");
		bs[65] = true;
	}
});

$("#b66").click(function(){
	if(b[66] === true){
		pop01("Compra de maquinaria", "66", "-40");
		bs[66] = true;
	}
});



$("#b71").click(function(){
	if(b[71] === true){
		pop01("Tienes más líneas de negocio", "71", "+40", "unicaopcion");
		bs[71] = true;
	}
});


$("#b78").click(function(){
	if(b[78] === true){
		pop01("Nómina", "78", "-20", "unicaopcion");
		bs[78] = true;
	}
});


$("#b72").click(function(){
	if(b[72] === true){
		pop01("Ganaste reconocimiento por RSE", "72", "+30", "unicaopcion");
		bs[72] = true;
	}
});


$("#b79").click(function(){
	if(b[79] === true){
		pop01("Firmaste un contrato", "79", "+20", "unicaopcion");
		bs[79] = true;
	}
});


$("#b73").click(function(){
	if(b[73] === true){
		pop01("Generas mayor valor a tus clientes", "73", "+40", "unicaopcion");
		bs[73] = true;
	}
});


$("#b80").click(function(){
	if(b[80] === true){
		pop01("Nómina", "80", "-20", "unicaopcion");
		bs[80] = true;
	}
});


$("#b84").click(function(){
	if(b[84] === true){
		pop01("Has lanzado el dado", "84", "+40", "solodado");
		bs[84] = true;
	}
});


$("#b90").click(function(){
	if(b[90] === true){
		pop01("Firmaste un contrato", "90", "+80", "unicaopcion");
		bs[90] = true;
	}
});




$("#b97").click(function(){
	if(b[97] === true){
		pop01("Ventas", "97", "+70", "unicaopcion");
		bs[97] = true;
	}
});


$("#b98").click(function(){
	if(b[98] === true){
		pop01("Subcontratas distribución", "98", "-20", "unicaopcion");
		bs[98] = true;
	}
});


$("#b91").click(function(){
	if(b[91] === true){
		pop01("Capital de riesgo", "91", "+60", "unicaopcion");
		bs[91] = true;
	}
});


$("#b92").click(function(){
	if(b[92] === true){
		pop01("Pago rendimiento accionistas", "92", "-20", "unicaopcion");
		bs[92] = true;
	}
});


$("#b99").click(function(){
	if(b[99] === true){
		pop01("Abriste nuevos mercados", "99", "+30", "unicaopcion");
		bs[99] = true;
	}
});


$("#b11").click(function(){
	if(b[11] === true){
		pop01("Contratas personal", "11", "-10");
		bs[11] = true;
	}
});


$("#b12").click(function(){
	if(b[12] === true){
		pop01("Subcontratas producción", "12", "-20");
		bs[12] = true;
	}
});


$("#b20").click(function(){
	if(b[20] === true){
		pop01("Daño de una máquina", "20", "-20", "unicaopcion");
		bs[20] = true;
	}
});


$("#b27").click(function(){
	if(b[27] === true){
		pop01("Vendiste parte de lo producido", "27", "+10", "unicaopcion");
		bs[27] = true;
	}
});


$("#b19").click(function(){
	if(b[19] === true){
		pop01("Has lanzado el dado", "19", "+40", "solodado");
		bs[19] = true;
	}
});




$("#b25").click(function(){
	if(b[25] === true){
		pop01("No vendiste", "25", "-10", "unicaopcion");
		bs[25] = true;
	}
});

$("#b32").click(function(){
	if(b[32] === true){
		pop01("Campaña de marketing", "32", "-10", "unicaopcion");
		bs[32] = true;
	}
});

$("#b39").click(function(){
	if(b[39] === true){
		pop01("Vendiste", "39", "+15", "unicaopcion");
		bs[39] = true;
	}
});


$("#b26").click(function(){
	if(b[26] === true){
		pop01("Ganaste un contrato", "26", "+25", "unicaopcion");
		bs[26] = true;
	}
});

$("#b33").click(function(){
	if(b[33] === true){
		pop01("Contrataste personal", "33", "-20", "unicaopcion");
		bs[33] = true;
	}
});

$("#b40").click(function(){
	if(b[40] === true){
		pop01("Vendiste", "40", "+10", "unicaopcion");
		bs[40] = true;
	}
});


$("#b34").click(function(){
	if(b[34] === true){
		pop01("Vendiste parte de lo producido", "34", "+10", "unicaopcion");
		bs[34] = true;
	}
});


$("#b41").click(function(){
	if(b[41] === true){
		pop01("Compraste maquinaria", "41", "-30", "unicaopcion");
		bs[41] = true;
	}
});



$("#b18").click(function(){
	if(b[18] === true){
		pop01("Ganaste un contrato", "18", "+5", "unicaopcion");
		bs[18] = true;
	}
});



$("#b17").click(function(){
	if(b[17] === true){
		pop01("Invertiste en equipos", "17", "-20", "unicaopcion");
		bs[17] = true;
	}
});



$("#b24").click(function(){
	if(b[24] === true){
		pop01("Vendiste", "24", "+5", "unicaopcion");
		bs[24] = true;
	}
});



$("#b31").click(function(){
	if(b[31] === true){
		pop01("Ganaste concurso de innovación en innpulsa", "31", "+25", "unicaopcion");
		bs[31] = true;
	}
});



$("#b38").click(function(){
	if(b[38] === true){
		pop01("Has lanzado el dado", "38", "+40", "solodado");
		bs[38] = true;
	}
});



$("#b45").click(function(){
	if(b[45] === true){
		pop01("Materias primas", "45", "-20", "unicaopcion");
		bs[45] = true;
	}
});



$("#b46").click(function(){
	if(b[46] === true){
		pop01("Invertiste en espacios", "46", "-30", "unicaopcion");
		bs[46] = true;
	}
});



$("#b50").click(function(){
	if(b[50] === true){
		pop01("Ganaste contrato", "50", "+90", "unicaopcion");
		bs[50] = true;
	}
});


$("#b57").click(function(){
	if(b[57] === true){
		pop01("Ganaste contrato", "57", "+110", "unicaopcion");
		bs[57] = true;
	}
});

$("#b63").click(function(){
	if(b[63] === true){
		pop01("Pago nómina", "63", "-40", "unicaopcion");
		bs[63] = true;
	}
});

$("#b70").click(function(){
	if(b[70] === true){
		pop01("Invertiste en finca raíz", "70", "-50", "unicaopcion");
		bs[70] = true;
	}
});

$("#b77").click(function(){
	if(b[77] === true){
		pop01("Participaste en una feria", "77", "-60", "unicaopcion");
		bs[77] = true;
	}
});

$("#b83").click(function(){
	if(b[83] === true){
		pop01("Vendiste", "83", "+150", "unicaopcion");
		bs[83] = true;
	}
});

$("#b89").click(function(){
	if(b[89] === true){
		pop01("Compraste materias primas", "89", "-30", "unicaopcion");
		bs[89] = true;
	}
});

$("#b100").click(function(){
	if(b[100] === true){
		pop01("¡FELICITACIONES ya eres una empresa mediana grande! Pasaste si tu balance es positivo después de las decisiones que tomaste", "100", "0", "final");
		bs[100] = true;
	}
});

$("#b101").click(function(){
	if(b[101] === true){
		pop01("¡FELICITACIONES ya eres una empresa mediana grande! Pasaste si tu balance es positivo después de las decisiones que tomaste", "101", "0", "final");
		bs[101] = true;
	}
});

$("#b102").click(function(){
	if(b[102] === true){
		pop01("¡FELICITACIONES ya eres una empresa mediana grande! Pasaste si tu balance es positivo después de las decisiones que tomaste", "102", "0", "final");
		bs[102] = true;
	}
});
