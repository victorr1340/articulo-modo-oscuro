const title = document.getElementById("titulo-principal");
const parrafo = document.getElementById("parrafo");
const boton = document.getElementById("boton");

let dark = false;

function cambiar() {
    if (dark === false) {
        
   
    document.body.style.background = "black";
    title.style.color = "white";
    parrafo.style.color = "white";

    
    dark = true;
 }


else {
    document.body.style.background = "white";
    title.style.color = "black";
    parrafo.style.color = "black";


    dark = false;
}

}



boton.addEventListener("click", cambiar);