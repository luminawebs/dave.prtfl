var posicion = 1;


TweenMax.staggerFrom($("div"), 0.6, { autoAlpha: 0, y:"-30", ease: Power2.easeOut}, 0.2);


t = TweenLite.to($("#bocadillo"), 1, { left:"-400px", rotation:90, ease:Back.easeIn }).reversed(true);



var tlElementos = new TimelineMax();


var subtitulos = ["00", "1/5","2/5","3/5","4/5","5/5"];
var titulos = ["00", "¿Qué es el Phishing?","¿De dónde procede?","¿Cómo reconocer el phishing?","¿Cómo <br>eliminarlo?","¿Cómo <br>evitarlo?"];

var contenidosPop = [
"00", 
"El phishing es un método que los ciberdelincuentes utilizan para engañarle y conseguir que revele cierta información personal. Es así como pueden tomar sus contraseñas, datos de tarjetas de crédito, números de cuentas bancarias, datos personales y en general todas sus credenciales de acceso en portales web. Este acto delictivo, lo realizan mediante el envío de correos electrónicos, los cuales siempre son fraudulentos. En algunos casos dirigen a la victima a un sitio web falso, que aparenta ser conocido y de confianza. Avast, (2016).",
"Estos mensajes provienen  en apariencia de organizaciones de confianza, así como desde la propia compañía para la cual usted labora. Usted puede recibirlos desde su Banco entidades del gobierno, empresas de e-commerce  etc. En dichos correos, le solicitan de manera atenta que actualice su información o que confirme la información de su cuenta, sugiriendo que hay un problema con su información. Después de ello, le llevan a dar clic sobre un vinculo que le dirige a una página web falsa, la cual contiene las mismas características que la original. En ese punto le llevan a registrar sus credenciales y datos personales, provocando el robo de su identidad.",
"Usted lo puede reconocer, cuando recibe mensajes pidiendo que revele información personal, normalmente mediante correo electrónico o en un sitio web. <br>Cuando este en el sitio web, por lo general la URL tiene caracteres o palabras extrañas que no corresponden a la original.",
"A pesar de que los señuelos de phishing no se pueden 'eliminar', sin duda se pueden detectar. Por lo tanto, es importante que constantemente monitorice su sitio web y esté al tanto de lo que debería y de lo que no debería estar allí. Si es posible, cambie los archivos principales de su sitio web de manera periódica.",
"<li>Mantenga buenos hábitos y no responda a enlaces en correos electrónicos no solicitados o en Facebook.</li><li>No abra archivos adjuntos de correos electrónicos no solicitados.</li><li>Proteja sus contraseñas y no las revele a ninguna persona. Por más fiable que aparente ser.</li><li>No proporcione información confidencial por teléfono, en persona o a través del correo electrónico.</li><li>Compruebe la URL del sitio (dirección web). En muchos casos de phishing, la dirección web puede parecer legítima, pero la URL puede estar mal escrita. También el dominio puede ser diferente (.com cuando debería ser .gov)</li><li>Mantenga actualizado su navegador y aplique los parches de seguridad correspondientes.</li>"
];



function toggleDirection() {
  t.reversed( !t.reversed() );
}


  function cerrarPop(){

      TweenMax.to($(".hover"), 0.6, { autoAlpha: 0, 
        
        ease: Power2.easeOut, 
        onComplete: function(){
          $("#bien").hide();
          $("#mal").hide();

        }}, 0.5);

  };
  

  function correcto(){

      TweenMax.from($(".hover"), 0.6, { display:"block", autoAlpha: 0, ease: Power2.easeOut}, 0.5);
      TweenMax.to($(".hover"), 0.6, { display:"block", autoAlpha: 1, y:"0", ease: Power2.easeOut}, 0.5);
      TweenMax.from($("#bien"), 0.6, { display:"flex", autoAlpha: 0, y:"-40", ease: Power2.easeOut}, 0.5);
      TweenMax.to($("#bien"), 0.6, { display:"flex",  autoAlpha: 1, ease: Power2.easeOut}, 0.5);

      $(".textoPop").empty();
      $(".textoPop").append("<h1>" + subtitulos[posicion] +" "+ titulos[posicion] + "</h1> " + contenidosPop[posicion]);
      //parent.postMessage("message", "*");



  };
  
function arleft(){
  posicion--
  contenidos(posicion);
};

  
function arright(){
  posicion++
  contenidos(posicion);
};
  
function irA(mensaje){
  posicion = mensaje;
  contenidos(posicion);
};





function animElemento01(posicionX, contenedor, arrray){

  tlElementos.from(contenedor, 0.1, { y: 0, opacity:1 });

  tlElementos.to(contenedor, 0.2, { 
    y: 0,
    opacity:0, 
    ease:Back.easeOut, 
    onComplete:function(){
      $(contenedor).empty();
      $(contenedor).append(arrray[posicionX]);
    }
  });

  tlElementos.to(contenedor, 0.2, { y: 0, opacity:1, ease:Back.easeOut });
}




function contenidos(posicionX){


  animElemento01(posicionX, ".numeroPos", subtitulos);
  animElemento01(posicionX, ".tituloPos", titulos);

  if (posicion <= 1){
    TweenMax.to($("#tiempoElementos"), 0.6, { autoAlpha: 1, x:"0", ease: Power2.easeOut}, 0.2);
    TweenMax.to($("#arrowright"), 0.6, { autoAlpha: 1, display:"block", ease: Power2.easeOut}, 0.2);
    TweenMax.to($("#arrowleft"), 0.6, { autoAlpha: 0, display:"block", ease: Power2.easeOut}, 0.2);

  }

  else if(posicion == 2){
    TweenMax.to($("#tiempoElementos"), 0.6, { autoAlpha: 1, x:"-420", ease: Power2.easeOut}, 0.2);
    TweenMax.to($("#arrowright"), 0.6, { autoAlpha: 1, display:"block", ease: Power2.easeOut}, 0.2);
    TweenMax.to($("#arrowleft"), 0.6, { autoAlpha: 1, display:"block", ease: Power2.easeOut}, 0.2);
  }
  else if(posicion == 3){
    TweenMax.to($("#tiempoElementos"), 0.6, { autoAlpha: 1, x:"-840", ease: Power2.easeOut}, 0.2);
    TweenMax.to($("#arrowright"), 0.6, { autoAlpha: 1, display:"block", ease: Power2.easeOut}, 0.2);
    TweenMax.to($("#arrowleft"), 0.6, { autoAlpha: 1, display:"block", ease: Power2.easeOut}, 0.2);
  }
  else if(posicion == 4){
    TweenMax.to($("#tiempoElementos"), 0.6, { autoAlpha: 1, x:"-1261", ease: Power2.easeOut}, 0.2);
    TweenMax.to($("#arrowright"), 0.6, { autoAlpha: 1, display:"block", ease: Power2.easeOut}, 0.2);
    TweenMax.to($("#arrowleft"), 0.6, { autoAlpha: 1, display:"block", ease: Power2.easeOut}, 0.2);
  }
  else if(posicion == 5){
    TweenMax.to($("#tiempoElementos"), 0.6, { autoAlpha: 1, x:"-1682", ease: Power2.easeOut}, 0.2);
    TweenMax.to($("#arrowright"), 0.6, { autoAlpha: 0, display:"block", ease: Power2.easeOut}, 0.2);
    TweenMax.to($("#arrowleft"), 0.6, { autoAlpha: 1, display:"block", ease: Power2.easeOut}, 0.2);
  }

}