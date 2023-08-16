

const formulario = {
    nombreApellido : "",
    telefono : "", 
    email :"",
    comentario : ""
}

const buttonEnviar = document.getElementById(".btn-contacto"); //boton enviar
const contenedor = document.querySelector(".container-form"); // contenedor del form
const inputs = document.querySelectorAll("input"); //inputs del formulario
const textArea = document.querySelector("#floatingTextarea2"); // textarea comentario



inputs.forEach( (elemento) => {
    elemento.addEventListener("input", (evento)=>{
        console.log(evento)
    })
})
