/* profe: simplifique el login para poder realizarlo con el DOM:

1- Ya no se puede utilizar el prompt ni el alert, así que utiliza el DOM para capturar los datos del usuario.
*/

//primero creo un evento que no permita que se recargue la pagina al presionar el boton de enviar.
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    //creo constantes para captar los datos ingresados por el usuario y que voy a utilizar en mi funcion.
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    let mensajeBox = document.getElementById("error-message");
    mensajeBox.innerHTML = "";

    let mensaje = document.createElement("h1");
    mensajeBox.appendChild(mensaje);

    // creo condicional que va a validar los datos y si son correctos imprime un mensaje de bienvenida y si no uno de error
    if (username === "Gusta37" && password === "1234") {
      mensaje.innerText = "Bienvenido Gustavo 🙋‍♂️!";
    } else {
      mensaje.innerText = " 🤨 Datos incorrectos 😒 ";
    }
  });
});
