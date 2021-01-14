// INICIALIZO VARIABLE PARA INICAR ANIMACION
var habilitarAnimacion = false;
// INICIALIZO VARIABLE CLICK DE MONSTRUO ANIMADO
var cantidadClickMonstruoPiñera = 0;
// DEFINO CONSTANTE DE TIEMPO EN MS PARA ANIMACION DE MONEDAS SOBRE MONSTRUO ANIMADO
const tiempoMostrarDinero = 1580 //definir tiempo con gift
//DIFINIMOS NUMERO DE BASURA BOTADA ANTES DE ANIMACION
const numBasuraBotada = 3; //26

// FUNCION ANIMACION CUANDO BOTAS LA BASURA
function botonMonstruoLimpio(){
    if(habilitarAnimacion == true){
        // ESCONDEMOS LOS OBJETOS DE LA PAG PARA MOSTRA VIDEO
        let x = document.getElementById("contenedor_paginaweb");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
        // MOSTRAMOS ANIMACION MONSTRUO
        document.getElementById("video_botar_basura").className = "mostrar";
        // REPRODUCIMOS AUDIO
        let audio3 = document.getElementById("audioParte2");
        audio3.play();
        document.getElementById("audioParte2").loop = true;
        //EJECUTO FUNCION DINERO CAE Y LINK PARTE 3
        clickMonstruoPiñera();         
    }
    else{
        console.log("ESTA FUNCION SOLO ESTÁ HABILITADA SI LIMPIASTE TODA LA BASURA")
    }
}
// FUNCION ARRASTRAR BASURA
function drag(event) {
    event.dataTransfer.setData('Text/html', event.target.id); 
}
function allowDrop(event) {
    event.preventDefault();
}
// FUNCION LOGICA CANTIDAD DE BASURA BOTADA
var contador = 1;
function drop(event, target) {    
    event.preventDefault()
    var data = event.dataTransfer.getData("text/html"); 
    // console.log(target.id, event.target.id) 
    document.getElementById(data).style.visibility="hidden";
    // console.log(contador);
    contador += 1;
    if (contador>=numBasuraBotada){
        habilitarAnimacion = true;
        // CAMBIOS DE AUDIO 
        // REPRODUCIOMOS EFECTO TODA LA BASURA ELIMINADA
        let audio1 = document.getElementById("basuraEliminada");
        audio1.play();
        // CAMBIAMOS AUDIO (PARTE 1) PRINCIPAL EN LOOP DE LA WEB
        let audio2 = document.getElementById("audio");
        audio2.pause();
        audio2.currentTime = 0;

        // MOSTRAMOS CURSOR EN MONSTRUO
        document.getElementById("divMonstruo").classList.add("cursor");
    }        
    else{
        habilitarAnimacion = false;
    }
    // AUDIO BOTAR BASURA
    let audio = document.getElementById("botarAudio");
    audio.currentTime = 2;
    audio.play();
}
// FUNCION LOGICA SOBRE CLICK ANIMADO
function clickMonstruoPiñera(){
    if(cantidadClickMonstruoPiñera<=2){
        // MOSTRAMOS ANIMACION DINERO CAE
        document.getElementById("dineroCae").className = "mostrar";
        setTimeout(function dieneroDesaparece(){
            document.getElementById("dineroCae").className = "oculto";
        },tiempoMostrarDinero);
        // console.log(cantidadClickMonstruoPiñera);
        cantidadClickMonstruoPiñera += 1;
    }
    else{
        window.location.href="tallerMedios2.html";
        // href="tallerMedios2.html
    }





}
 

