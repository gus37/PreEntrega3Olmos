<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lista de Usuarios en el Almacenamiento Local</title>
</head>
<body>

<!-- Botón para agregar un usuario -->
<button id="addUserButton">Agregar Usuario</button>

<!-- Mostrar la lista de usuarios -->
<ul id="userList"></ul>

<script>
  // Función para mostrar la lista de usuarios
  function showUserList() {
    var userList = JSON.parse(localStorage.getItem("userList")) || [];

    var userListElement = document.getElementById("userList");
    userListElement.innerHTML = "";

    userList.forEach(function(user) {
      var listItem = document.createElement("li");
      listItem.textContent = "Usuario: " + user.username + ", Contraseña: " + user.password;
      userListElement.appendChild(listItem);
    });
  }

  // Función para agregar un usuario al almacenamiento local
  function addUser(username, password) {
    var userList = JSON.parse(localStorage.getItem("userList")) || [];
    userList.push({ username: username, password: password });
    localStorage.setItem("userList", JSON.stringify(userList));
    showUserList();
  }

  // Mostrar la lista de usuarios al cargar la página
  showUserList();

  // Escuchar el clic del botón "Agregar Usuario"
  var addUserButton = document.getElementById("addUserButton");
  addUserButton.addEventListener("click", function() {
    var username = prompt("Ingrese el nombre de usuario:");
    var password = prompt("Ingrese la contraseña:");
    addUser(username, password);
  });
</script>
</body>
</html>

