document.addEventListener("DOMContentLoaded", function () {
  fetch("/usuarios")
    .then((response) => response.json())
    .then((data) => {
      const cartasUsuarios = document.getElementById("cartasUsuarios");

      data.forEach((usuario) => {
        const {
          nombre_user,
          apellido_user,
          sufijo_numero_user,
          numero_user,
          correo_user,
        } = usuario;

        // Crear la estructura de la tarjeta
        const nuevaCarta = document.createElement("div");
        nuevaCarta.classList.add("card", "mb-3");

        const cuerpoCarta = document.createElement("div");
        cuerpoCarta.classList.add("card-body");

        const titulo = document.createElement("h5");
        titulo.classList.add("card-title");
        titulo.textContent = `${nombre_user} ${apellido_user}`;

        const subtitulo = document.createElement("h6");
        subtitulo.classList.add("card-subtitle", "mb-2", "text-muted");
        subtitulo.textContent = `Correo: ${correo_user}`;

        const detalles = document.createElement("p");
        detalles.classList.add("card-text");
        detalles.innerHTML = `
                        Teléfono: ${sufijo_numero_user} ${numero_user}<br>
                    `;

        const botonDetalles = document.createElement("button");
        botonDetalles.setAttribute("type", "button");
        botonDetalles.classList.add("btn", "btn-primary");
        botonDetalles.setAttribute("data-bs-toggle", "modal");
        botonDetalles.setAttribute("data-bs-target", "#modalUsuario");
        botonDetalles.textContent = "Ver Detalles";
        botonDetalles.addEventListener("click", function () {
          mostrarDetalles(usuario);
        });

        cuerpoCarta.appendChild(titulo);
        cuerpoCarta.appendChild(subtitulo);
        cuerpoCarta.appendChild(detalles);
        cuerpoCarta.appendChild(botonDetalles);

        nuevaCarta.appendChild(cuerpoCarta);
        cartasUsuarios.appendChild(nuevaCarta);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  function mostrarDetalles(usuario) {
    const detalleUsuario = document.getElementById("detalleUsuario");
    detalleUsuario.innerHTML = `
                <table class="table">
                    <tbody>
                        <tr><th scope="row">Nombre</th><td>${usuario.nombre_user}</td></tr>
                        <tr><th scope="row">Apellido</th><td>${usuario.apellido_user}</td></tr>
                        <tr><th scope="row">Fecha de Nacimiento</th><td>${usuario.fecha_user}</td></tr>
                        <tr><th scope="row">Teléfono</th><td>${usuario.sufijo_numero_user} ${usuario.numero_user}</td></tr>
                        <tr><th scope="row">Correo</th><td>${usuario.correo_user}</td></tr>
                        <tr><th scope="row">Estado</th><td>${usuario.estado_user}</td></tr>
                        <tr><th scope="row">Ciudad</th><td>${usuario.ciudad_user}</td></tr>
                        <tr><th scope="row">Colonia</th><td>${usuario.colonia_user}</td></tr>
                        <tr><th scope="row">Dirección</th><td>${usuario.direccion_user}</td></tr>
                        <tr><th scope="row">CURP</th><td>${usuario.curp_user}</td></tr>
                        <tr><th scope="row">INE</th><td>${usuario.ine_user? `<img src="data:image/jpeg;base64,${usuario.ine_user}" style="max-width: 100px;">`: ""}</td></tr>
                        <tr><th scope="row">Foto</th><td>${usuario.foto_user? `<img src="data:image/jpeg;base64,${usuario.foto_user}" style="max-width: 100px;">`: ""}</td></tr>

                    </tbody>
                </table>
            `;
  }
});
document.addEventListener("DOMContentLoaded", function () {
  fetch("/usuarios")
    .then((response) => response.json())
    .then((data) => {
      const tabla = document
        .getElementById("tablaUsuarios")
        .getElementsByTagName("tbody")[0];

      data.forEach((usuario) => {
        const nuevaFila = tabla.insertRow();
        const {
          nombre_user,
          apellido_user,
          fecha_user,
          sufijo_numero_user,
          numero_user,
          correo_user,
          contrasena_user,
          estado_user,
          ciudad_user,
          colonia_user,
          direccion_user,
          curp_user,
          ine_user,
          foto_user,
        } = usuario;

        // Insertar cada dato en celdas separadas de la nueva fila
        nuevaFila.insertCell().textContent = nombre_user || "";
        nuevaFila.insertCell().textContent = apellido_user || "";
        nuevaFila.insertCell().textContent = fecha_user || "";
        nuevaFila.insertCell().textContent = sufijo_numero_user || "";
        nuevaFila.insertCell().textContent = numero_user || "";
        nuevaFila.insertCell().textContent = correo_user || "";
        nuevaFila.insertCell().textContent = contrasena_user || "";
        nuevaFila.insertCell().textContent = estado_user || "";
        nuevaFila.insertCell().textContent = ciudad_user || "";
        nuevaFila.insertCell().textContent = colonia_user || "";
        nuevaFila.insertCell().textContent = direccion_user || "";
        nuevaFila.insertCell().textContent = curp_user || "";

        // Manejar imagen de INE si existe
        if (ine_user) {
          const ineCell = nuevaFila.insertCell();
          const ineImg = document.createElement("img");
          ineImg.src = `data:image/jpeg;base64,${ine_user}`;
          ineImg.style.maxWidth = "100px"; // Establecer tamaño máximo opcional
          ineCell.appendChild(ineImg);
        } else {
          nuevaFila.insertCell().textContent = ""; // Celda vacía si no hay imagen
        }

        // Manejar imagen de foto si existe
        if (foto_user) {
          const fotoCell = nuevaFila.insertCell();
          const fotoImg = document.createElement("img");
          fotoImg.src = `data:image/jpeg;base64,${foto_user}`;
          fotoImg.style.maxWidth = "100px"; // Establecer tamaño máximo opcional
          fotoCell.appendChild(fotoImg);
        } else {
          nuevaFila.insertCell().textContent = ""; // Celda vacía si no hay imagen
        }
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
