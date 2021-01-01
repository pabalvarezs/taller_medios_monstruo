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
    if (contador>20){
        // document.getElementById("divMonstruo").style.opacity = 1;
        // console.log(document.getElementById("divMonstruo"));
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

