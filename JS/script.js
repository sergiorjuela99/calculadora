
document.addEventListener("DOMContentLoaded", function () {
  
  const pantalla = document.getElementById("operaciones");

  
  let operacionActual = "";
  let operadorSeleccionado = false;

  
  function manejarClick(valor) {

    if (!isNaN(valor) || valor === ".") {
      
      if (pantalla.innerText === "0" && valor !== ".") {
        pantalla.innerText = ""; 
      }

      
      if (operadorSeleccionado) {
        pantalla.innerText = "";
        operadorSeleccionado = false;
     }

      
      pantalla.innerText += valor;
      operacionActual += valor;
    }
    
    else {
      operacionActual += valor;
      operadorSeleccionado = true;
    }
  }

  function evaluarOperacion() {
    try {
      pantalla.innerText = eval(operacionActual);  
      operacionActual = pantalla.innerText;        
    } catch (error) {
      pantalla.innerText = "Error";                
      operacionActual = "";
    }
  }

  
  function borrarPantalla() {
    pantalla.innerText = "0";  
    operacionActual = "";     
  }

  
  const botones = document.querySelectorAll("#calculadora ul li");

  
  botones.forEach((boton) => {
    boton.addEventListener("click", function () {
      const valor = this.innerText;

      
      if (valor === "=") {
        evaluarOperacion();
      } else {
        manejarClick(valor);  
      }
    });
  });

  // Evento para el botón "Borrar"
  const botonBorrar = document.getElementById("borrar");
  botonBorrar.addEventListener("click", borrarPantalla);
});