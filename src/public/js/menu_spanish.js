const error = [{
   vacio: "No debe dejar el campo nombre vacío",
   error: "error"
}, {
   vacio: "No debe dejar el campo email vacío",
   error: "error",
},{
   vacio: "No debe dejar el campo asunto vacío",
   error: "error"
},{
   vacio: "No debe dejar el campo descripción vacío",
   error: "error"
}]; 

const nombre = document.getElementById("inputNameEs");
const email = document.getElementById("inputEmailEs");
const asunto = document.getElementById("inputSubjectEs");
const comentario = document.getElementById("areaMessageEs");
const alertsControl = document.querySelectorAll('.alert');

document.querySelector('.send').addEventListener('onkeyup', (e)=> {
   console.log('falla');
   if(nombre.value === "" || nombre.value ==="") {
      alert('ok')
   }
});

const validarEnvio = ()=> {

}

