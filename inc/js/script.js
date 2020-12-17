// inicio script

function drag(event) {
    event.dataTransfer.setData('Text/html', event.target.id); 
}

function allowDrop(event) {
    event.preventDefault();
}
function drop(event, target) {
    event.preventDefault()
    var data = event.dataTransfer.getData("text/html"); 
    // console.log(target.id, event.target.id) 
    document.getElementById(data).style.visibility="hidden"
}