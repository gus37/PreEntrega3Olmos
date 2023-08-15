/* carrito de compras */

let carrito = [];//es un array vacio donde se van a cargar los objetos(productos) que introduzcan los usuarios.

function agregarAlCarrito(){//es una funcion que va a agregar los productos que soliciten los usuarios.
    const producto = document.getElementById("producto").value//es una constante que me toma el valor de el input "producto" en el formulario.
    const cantidad = parseInt(document.getElementById("cantidad").value)//es una constante que me toma el valor de el input "cantidad" en el formulario. el ParseInt vuelve la cantidad, que es un string, a numero entero.
    if(!isNaN(cantidad) && cantidad > 0){//(IsNaN: significa no es un numero, !isNaN: significa es un numero) si cantidad es un numero y ademas es mayor a 0.
        const item = {producto, cantidad};//creo una constante que cree un objeto de dos valores: producto y cantidad. estos valores salen de las constantes anteriores.

        carrito.push(item)//va a agregar al array del carrito los datos que ingrese el usuario.

        actualizarCarrito()//si todo es correcto, que actualice el carrito, que es la funcion que esta mas abajo.
    }else{
        alert("Por favor ingresa una cantidad valida")
    }
}

function guardarCarrito(){//esta funcion guarda el carrito, una vez completado, al localStorage. para poder guardarlo tiene que pasar los numeros a strings con stringify!
    const carritoJSON = JSON.stringify(carrito);//creo una constante que me va a crear un string del carrito paa poder guardarlo en el localStorage.
    localStorage.setItem("carritoData", carritoJSON)//indicamos que almacene en el localStorage con esa clave y valor que 
    alert("Carrito guardado")//nos avisa que ya se guardo.
}

function actualizarCarrito(){//va cargando los productos en la lista del html
    const carritoElement = document.getElementById("carrito")//constante que toma el carrito desde el ul del html
    carritoElement.innerHTML="";//agrega al html lo siguiente:

    carrito.forEach((item)=>{//por cada elemento que encuentre en el array carrito, que inicialmente estaba vacio, que cree una li en el ul del html asi lo muestra en el dom.
        const listItem = document.createElement("li")//es una constante que crea las li.
        listItem.textContent = `${item.producto} - cantidad:  ${item.cantidad}`//muestra un texto con el valor de producto y el valor de la cantidad.(- cantidad es un string)
        carritoElement.appendChild(listItem)//Es hijo del innerHTML y esta indicando que alli se va a ejecutar el ListItem.
    })
}