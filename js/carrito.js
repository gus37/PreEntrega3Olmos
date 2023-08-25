/* carrito de compras */

let carrito = []; //es un array vacio donde se van a cargar los objetos(productos) que introduzcan los usuarios.

function agregarAlCarrito() {
  const producto = document.getElementById("producto").value; 
  
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const mensajeAlert = document.getElementById("carrito");
  mensajeAlert.innerHTML = "";

  let mensaje = document.createElement("h1");
  mensajeAlert.appendChild(mensaje);



  if (!isNaN(cantidad) && cantidad > 0) {
    const item = { producto, cantidad };

    

    carrito.push(item);
    
    actualizarCarrito(); 
    
  } else {
    mensaje.innerText = "✏ Por favor ingresa productos 🙋‍♂️";//cambio un alert por un mensaje en el html. todos mis mensajes de alerta se van a ejecutar dentro del div del carrito.
  }
}

//Corrección:
// 2- Cuando guardes los productos en el carrito, fijate de tener una validación para no guardar un carrito vacío, porque si no agrego nada y le doy a guardar, me guarda un array vacío en el localStorage.

//creo condicional que evalua si hay algo en el carrito y si no hay nada agregado envia un mensaje que hay que agregar. si hay elementos envia un mje que guarda el carrito.

function guardarCarrito() {

  let mensajeAlert = document.getElementById("carrito");
  mensajeAlert.innerHTML = "";

  let mensaje = document.createElement("h1");
  mensajeAlert.appendChild(mensaje);

  if (carrito.length > 0) {
    const carritoJSON = JSON.stringify(carrito); //creo una constante que me va a crear un string del carrito paa poder guardarlo en el localStorage.
    localStorage.setItem("carritoData", carritoJSON); //indicamos que almacene en el localStorage con esa clave y valor que
    mensaje.innerText = "🛒 Carrito guardado 🛒"; //nos avisa que ya se guardo.
  } else {
    mensaje.innerText = "❌ Para guardar tu carrito debes agregar productos";
  }
}

function actualizarCarrito() {
  //va cargando los productos en la lista del html
  const carritoElement = document.getElementById("carrito"); //constante que toma el carrito desde el ul del html
  carritoElement.innerHTML = ""; //agrega al html lo siguiente:

  carrito.forEach((item) => {
    //por cada elemento que encuentre en el array carrito, que inicialmente estaba vacio, que cree una li en el ul del html asi lo muestra en el dom.
    

    const listItem = document.createElement("li"); //es una constante que crea las li.
    listItem.textContent = `${item.producto} - cantidad:  ${item.cantidad}`; //muestra un texto con el valor de producto y el valor de la cantidad.(- cantidad es un string)
    carritoElement.appendChild(listItem); //Es hijo del innerHTML y esta indicando que alli se va a ejecutar el ListItem.
  });
}

// 3- Agrega una opción para obtener los datos que guardaste en el localStorage, para poder verlos en pantalla.

//creo funcion que me muestra lo que agregue al carrito en una lista y si no agrego nada muestra un mje de que no hay nada.
function verCarrito(){
    const carritoJSON = localStorage.getItem("carritoData");
    const contenidoDiv = document.getElementById("carrito");

    contenidoDiv.innerHTML = ""; 

    if (carritoJSON) {
        const carrito = JSON.parse(carritoJSON);
        const itemTexto = document.createElement("h2");
        itemTexto.textContent = `Tu carrito tiene guardado:`
        contenidoDiv.appendChild(itemTexto);
        carrito.forEach((item) => {
          const itemTexto = document.createElement("p");
          itemTexto.textContent = `${item.producto} - Cantidad: ${item.cantidad}`;
          contenidoDiv.appendChild(itemTexto);
        });
      } else {
        const itemTexto = document.createElement("h2");
        itemTexto.textContent = `❌ No tenés carrito guardado.`
        contenidoDiv.appendChild(itemTexto);        
      }
}


    