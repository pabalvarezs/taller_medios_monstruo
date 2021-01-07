// FUNCION ANIMACION CUANDO BOTAS LA BASURA
var habilitarAnimacion = false;
function botonMonstruoLimpio(){
    if(habilitarAnimacion == true){
        // ESCONDEMOS LOS OBJETOS DE LA PAG PARA MOSTRA VIDEO
        let x = document.getElementById("contenedor_paginaweb");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
        // MOSTRAMOS ANIMACION
        document.getElementById("video_botar_basura").className = "mostrar";
        document.getElementById("")
        // REPRODUCIMOS AUDIO
        let audio3 = document.getElementById("audioParte2");
        audio3.play();
        document.getElementById("audioParte2").loop = true; 
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
    console.log(contador);
    contador += 1;
    if (contador==26){
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
 

