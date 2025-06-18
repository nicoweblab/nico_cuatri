confirm("¿Desea hacer una donacion de 100000 dolares? es poquito")
alert("Tu donación fue realizada correctamente")


// Obtener el botón por su ID
const boton = document.getElementById('miBoton');

// Agregar un evento para que cuando se haga clic, redirija
boton.addEventListener('click', () => {
  // Cambia esta URL por la que desees redirigir
  window.location.href = 'https://www.google.com';
});
