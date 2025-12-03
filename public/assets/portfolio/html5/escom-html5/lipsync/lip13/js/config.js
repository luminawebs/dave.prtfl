$(document).ready(function () {
    $("#prueba").ahorcado({
        palabras: ["validar solicitudes de amistad", "no compartir ubicacion", "evite abrir enlaces", "evite tomarse fotografias en uniforme", "utilice configuraciones de seguridad"], //banco de palabras o frases
        cantidad_palabras: 5, //cuantas palabras del banco se usarán en la actividad
        oportunidades_palabra: 6, //cantidad de veces que el usuario puede escoger la letra equivocada
        vidas: 2, //cantidad de vidas (una vida se pierde al gastar todas las oportunidades de una palabra) antes de perder el juego
        imagenes: { 
            //imagenes que aparecerán durante el transcurso del juego
            1: {
                url: "img/HangMan-07.svg", //ruta del archivo de imagen
                intentos_restantes: 0 //número de oportunidades restantes en las que se verá esta imagen
            },
            2: {
                url: "img/HangMan-06.svg",
                intentos_restantes: 1
            },
            3: {
                url: "img/HangMan-05.svg",
                intentos_restantes: 2
            },
            4: {
                url: "img/HangMan-04.svg",
                intentos_restantes: 3
            },
            5: {
                url: "img/HangMan-03.svg",
                intentos_restantes: 4
            },
            6: {
                url: "img/HangMan-02.svg",
                intentos_restantes: 5
            },
            7: {
                url: "img/HangMan-01.svg",
                intentos_restantes: 6
            }
        }
    });
});

$(document).on("Inicio_Ahorcado", function (evt) {
    //evento que se dispara al terminar de cargar la actividad.
    $(".blackout>div").hide();
    $(".blackout .instruccion").fadeIn(500);

    $(".blackout").css('display', 'flex').hide().fadeIn(500);

    $(".blackout .instruccion .iconContainer").click(function () {
        $(".blackout").fadeOut(500);
    });
});

$(document).on("Retroalimentacion_Ahorcado", function (evt) {
    
    //evento que se dispara cuando el usuario resuelve correctamente todas las palabras
    
    if (evt.correct) {
        //retroalimentación incorrecto 
        $(".blackout>div").hide();
        $(".blackout .retroalimentacion.correcto").fadeIn(500);
        $(".blackout").fadeIn(500);
		$(".blackout .retroalimentacion.correcto button").click(function () {
                evt.container.reiniciar_ahorcado();
                $(".blackout").fadeOut(500);
            });
    } else {
        //retroalimentación vuelve a intentarlo 
        if (evt.intentos_restantes > 0) {
            $(".blackout>div").hide();
            $(".blackout .retroalimentacion.otro_intento").show();
            $(".blackout").fadeIn(500);
            $(".blackout .retroalimentacion.otro_intento button").click(function () {
                $(".blackout").fadeOut(500);
            });
        }
        else {
            //retroalimentación incorrecto 
            $(".blackout>div").hide();
            $(".blackout .retroalimentacion.incorrecto").fadeIn(500);
            $(".blackout").fadeIn(500);
            $(".blackout .retroalimentacion.incorrecto button").click(function () {
                evt.container.reiniciar_ahorcado();
                $(".blackout").fadeOut(500);
            });
        }
    }
});