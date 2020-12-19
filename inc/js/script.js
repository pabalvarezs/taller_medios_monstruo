// inicio script
//funcion inicia audio
var myadido = document.getElementById("audio");

setTimeout(function() {
myadido.play();

},500);

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
    document.getElementById(data).style.visibility="hidden"
    console.log(contador)
    contador += 1;
    if (contador>6)
        document.getElementById("monstruo").style.opacity = 1
    else
        document.getElementById("monstruo").style.opacity = 1-(1/contador)
}

