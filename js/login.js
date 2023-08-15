
/* Mi proyecto es un market place para una empresa de venta de aparatologia medica.

Esta seccion es para que el usuario se loguee o se registre.
1ro: Creo una funcion que verifique si el nombre de usuario esta registrado. En el caso de que no este registrado doy la opcion de registrarse. */

function verificarUsuarioEnLista(nombre, listaNombres) {
    return listaNombres.some((nombreLista) => nombreLista === nombre);// uso el metodo some para encuntrar en nombre en la lista de usuarios. me recorre toda la lista. quiero que respete mayusculas, minusculas y numeros!
}

function buscarNombreEnLista() {
    const nombres = ['Ana22', 'Juan2000', 'MaríaFlia', 'Pedro09', 'Luis65'];

    // Le pido al usuario que ingrese su nombre de usuario
    const nombreUsuario = prompt('Ingresa tu nombre de usuario respetando mayusculas y numeros');

    // Verifico si el usuario esta en la lista
    const estaEnLaLista = verificarUsuarioEnLista(nombreUsuario, nombres);

    // Si el usuario esta en la lista doy saludo de bienvenida
    if (estaEnLaLista) {
        alert(` 🙋‍♂️ ¡Bienvenid@ ${nombreUsuario}!🙋‍♀️ `);
    } else { // Si el usuario no esta en la lista le doy aviso y le ofrezco registrarse
        alert(`💥 El nombre "${nombreUsuario}" no corresponde a un usuario registrado. Hace click en ACEPTAR y registrate. 💥`);

        const nombreAgregar = prompt("Crea tu nombre de usuario. Recorda que podes usar mayusculas y numeros tambien"); //le pido que ingrese el nombre de usuario

        nombres.push(nombreAgregar); //lo agrega a la lista

        alert(`El nombre "${nombreAgregar}" de usuario ya se  agrego a nuestra lista de usuarios`); //doy un alerta que ya se agrego el usuario a la lista

        console.log(nombres); //muestra la lista de usuarios en la consola
    }
}

// Llamo a la función para que comience la búsqueda
buscarNombreEnLista();



