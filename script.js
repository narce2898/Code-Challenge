
// Esperamos a que se cargue el documento HTML antes de ejecutar el código JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Obtenemos el formulario por su ID
    const formulario = document.getElementById('registroForm');
  
    // Agregamos un evento al formulario cuando se envía
    formulario.addEventListener('submit', function (e) {
      //Aquí prevenimos que se recargue la página
      e.preventDefault();
  
      // URL a la que enviamos la solicitud POST
      const url = 'https://jsonplaceholder.typicode.com/users';
  
      // Obtenemos los valores ingresados por el usuario, en los campos del formulario
      const data = {
        Nombre: document.getElementById('nombre').value,
        Apellido: document.getElementById('apellido').value,
        FechaNacimiento: document.getElementById('fechaNacimiento').value
      };
  
      // Configuramos la solicitud HTTP POST
      const requestOptions = {
        method: 'POST', // Método POST
        headers: {
          'Content-Type': 'application/json' // Aquí le decimmos que estamos enviando datos en formato JSON
        },
        body: JSON.stringify(data) // Convertimos los datos a JSON
      };
  
      // Se solicita el POST al servidor utilizando fetch()
      fetch(url, requestOptions)
        .then(response => response.json()) // Convertimos a JSON
        .then(data => {
          // Manejamos la respuesta del servidor, en este caso, la mostramos en la consola
          console.log('Respuesta del servidor:', data);
          // Aquí podemos realizar acciones adicionales con la respuesta, como mostrarla en la página
        })
        .catch(error => {
          // vemos cualquier error que ocurra durante la solicitud
          console.error('Error:', error);
        });
    });
  });
  