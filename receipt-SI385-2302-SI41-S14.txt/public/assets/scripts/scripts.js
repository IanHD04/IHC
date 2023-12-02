/*SCRIPT PARA EL FORMULARIO*/
function showMensaje() {
  
    var formulario = document.getElementById("contact-formulario");
    var mensajeExito = document.getElementById("mensaje-exito");
  
    formulario.style.display = "none";
    mensajeExito.style.display = "block";
  
    return false;
  }

/*SCRIPT PARA EL MENU DESPLEGABLE*/ 
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu');
    const navbar = document.querySelector('.navbar');
  
    menuButton.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});

