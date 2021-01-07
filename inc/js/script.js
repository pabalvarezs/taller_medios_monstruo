// inicio script



function drag(event) {
    event.dataTransfer.setData('Text/html', event.target.id); 
}

function allowDrop(event) {
    event.preventDefault();
}
var contador = 1;

function drop(event, target) {
    
    event.preventDefault()
    var data = event.dataTransfer.getData("text/html"); 
    // console.log(target.id, event.target.id) 
    document.getElementById(data).style.visibility="hidden";
    console.log(contador);
    contador += 1;
    if (contador==3){
        // ESCONDEMOS LOS OBJETOS DE LA PAG PARA MOSTRA VIDEO
        var x = document.getElementById("contenedor_paginaweb");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
        // MOSTRAMOS VIDEO DEL MONSTRUO
        // let imgFondo = new Image;
        // imgFondo.src ='img/fondos/fondo_segundaparte.gif'
        // var div = document.getElementById("contenedor_paginaweb");
        // div.style.backgroundImage = url('imgFondo.src');
        // document.getElementById("video_botar_basura").style.visibility="visible";
        // document.getElementById("video_botar_basura").style.display="block";
        // document.getElementById("video_botar_basura").className = "mostrar";
        // document.getElementById("video_botar_basura").classList.add('mostrar');
        // document.getElementById("video_botar_basura").classList.remove('oculto');   
    }        
    else{
        // document.getElementById("divMonstruo")
        // console.log(document.getElementById("divMonstruo"));

    }
    // document.getElementById("divMonstruo").style.opacity = 1-(1/contador)
    var audio = document.getElementById("botarAudio");
    audio.currentTime = 2;
    audio.play();
    // audio.pause();




}

