let numMod = `1`
const tituloGeneral = `Definición, Tipos de Violencia y Delitos Sexuales, y Consecuencias de la Violencia Sexual en  las Víctimas`

const headerS = `
                    <div class="container text-center">
                            <div class="row titulo">
                                <div class="col-md-12 col-sm-12 text-right"  data-aos="fade-up">
                                    <h3>Certificación en Atención a Víctimas de Violencia Sexual</h3>
                                    <div class="row nombre-curso">
                                        <div class="col-md-4 col-sm-12 text-center centrar-vertical">
                                            <h4 class="mod-numero">MOD: <span class="numMod_S">${numMod}</span></h4>
                                        </div>
                                        <div class="col-md-8 col-sm-12 text-left centrar-vertical">
                                            <h4 class="titGen_S"> ${tituloGeneral} </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rectangle-1"></div>
                        <div class="rectangle-2"></div>
                        <div class="rectangle-transparent-1"></div>
                        <div class="rectangle-transparent-2"></div>
                        <div class="circle-1"></div>
                        <div class="circle-2"></div>
                        <div class="circle-3"></div>
                        <div class="triangle triangle-1">
                            <img src="img/obj_triangle.png" alt="">
                        </div>
                        <div class="triangle triangle-2">
                            <img src="img/obj_triangle.png" alt="">
                        </div>
                        <div class="triangle triangle-3">
                            <img src="img/obj_triangle.png" alt="">
                        </div>
                        <div class="triangle triangle-4">
                            <img src="img/obj_triangle.png" alt="">
                    </div>`


const navegador = `
    <a class="nav-link" href="index.html">Home</a>
    <a class="nav-link" href="bienvenida.html">Bienvenida</a>
    <a class="nav-link" href="competencias.html">Competencias</a>
    <a class="nav-link" href="definicion.html">Definición de violencia sexual</a>
    <a class="nav-link" href="tipos-de-violencia.html">Tipos de violencia y delitos sexuales</a>
    <a class="nav-link" href="definiciones-de-violencia-sexual.html">Las definiciones de violencia sexual</a>
    <a class="nav-link" href="consecuencias.html">Consecuencias</a>
    <a class="nav-link" href="glosario.html">Glosario</a>
    <a class="nav-link" href="bibliografia.html">Bibliografía</a>
    `

$(".titGen_S").empty();
$(".titGen_S").append(tituloGeneral);

$("title").empty();
$("title").append(tituloGeneral);

$(".numMod_S").empty();
$(".numMod_S").append(numMod);

$(".jumbotron-interna").empty();
$(".jumbotron-interna").append(headerS);

$(".sidenav-content").empty();
$(".sidenav-content").append(navegador);