// INICIO JS 2
// ABRIMOS LOS POPUP`S
// DEFINIMOS TIEMPO RETRASO ABRIR VENTANAS EN MS
const tiempo_retraso_ventana = 1000;
const tiempo_retraso_monstruo = 0; //3000
const tiempo_retraso_obras = 5000; //1500


function abrir_ventanas_retraso(){
    setTimeout(function abrir_ventanas(url){
        let myWindow1 = window.open( "popup1.html", "popup1", "width=1280,height=1080, top=250,left=200, menubar=no, scrollbars=no, resizable=no");
        let myWindow2 = window.open( "popup2.html", "popup2", "width=1410,height=680, top=300,left=850, menubar=no, scrollbars=no, resizable=no");
        let myWindow3 = window.open( "popup3.html", "popup3", "width=380,height=500, top=450,left=1500, menubar=no, scrollbars=no, resizable=no");
        let myWindow4 = window.open( "popup4.html", "popup4", "width=565,height=488, top=800,left=500, menubar=no, scrollbars=no, resizable=no");
    },tiempo_retraso_ventana);
}
// abrir_ventanas_retraso();

// FUNCION MOSTRAR MONSTRUO CON RETRASO
function mostrarMonstruoRetraso(){
    setTimeout(function mostrarMonstruo(){
        document.getElementById("monstruo").style.visibility="visible";
    },tiempo_retraso_monstruo);
}
//MUESTRA EL MONSTRUO CON RETRASO
mostrarMonstruoRetraso();
//MUESTRA OBRAS CUANDO MOUSE SOBRE MONSTRUO
function mostrarObrasRetraso(){
    setTimeout(function mostrarObras(){
        document.getElementById("divObras").style.visibility="visible";
    },tiempo_retraso_obras);    
}
//MUESTRA EL OBRAS CON RETRASO
// mostrarObrasRetraso();

