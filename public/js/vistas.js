// Definición de la función fillCards para llenar las tarjetas de profesionales dinámicamente
const fillCards = () => {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = '';

    fetch('/getProfesionales')
        .then(response => response.json())
        .then(profesionales => {
            profesionales.forEach(profesional => {
                const card = document.createElement('div');
                card.classList.add('card', 'm-2');
                card.style.width = '18rem';
                card.dataset.area = profesional.profesional_area;
                card.dataset.category = profesional.profesional_subarea;
                card.dataset.specialty = profesional.profesional_especialidad;

                card.innerHTML = `
                    <img src="${profesional.profesional_foto_perfil}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${profesional.profesional_nickname_perfil}</h5>
                        <p class="card-text">${profesional.profesional_area}</p>
                        <p class="card-text">${profesional.profesional_subarea}</p>
                        <p class="card-text">${profesional.profesional_especialidad}</p>
                        <p class="card-text">${profesional.profesional_correo}</p>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cardModal" onclick="fillModal(${profesional.id_usuario})">Información</button>
                    </div>
                `;
                cardsContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error al obtener los datos:', error));
};

// Función para llenar el modal con la información detallada de un profesional
const fillModal = (idUsuario) => {
    fetch(`/getProfesional/${idUsuario}`)
        .then(response => response.json())
        .then(profesional => {
            const modalBody = document.getElementById('modal-body');

            const perfilContent = `
                <div class="mb-3">
                    <img id="modal-banner-perfil" src="${profesional.profesional_banner_perfil}" class="img-fluid rounded mx-auto d-block" alt="Banner de perfil">
                </div>
                <div class="mb-3">
                    <img id="modal-foto-perfil" src="${profesional.profesional_foto_perfil}" class="img-fluid rounded mx-auto d-block" alt="Foto de perfil">
                </div>
                <div class="mb-3">
                    <h4 id="modal-nickname">${profesional.profesional_nickname_perfil}</h4>
                    <p id="modal-descripcion">${profesional.profesional_descripcion_perfil}</p>
                    <p id="modal-frase">${profesional.profesional_frase_perfil}</p>
                </div>
            `;

            const datosPersonalesContent = `
                <h5>Datos Personales</h5>
                <p><strong>Nombre:</strong> ${profesional.profesional_nombre}</p>
                <p><strong>Apellido:</strong> ${profesional.profesional_apellido}</p>
                <p><strong>Fecha de Nacimiento:</strong> ${profesional.profesional_fecha}</p>
                <p><strong>Sufijo de número:</strong> ${profesional.profesional_sufijo}</p>
                <p><strong>Número:</strong> ${profesional.profesional_numero}</p>
                <p><strong>Correo:</strong> ${profesional.profesional_correo}</p>
                <p><strong>Estado:</strong> ${profesional.profesional_estado}</p>
                <p><strong>Ciudad:</strong> ${profesional.profesional_ciudad}</p>
                <p><strong>Colonia:</strong> ${profesional.profesional_colonia}</p>
                <p><strong>Dirección:</strong> ${profesional.profesional_direccion}</p>
                <p><strong>CURP:</strong> ${profesional.profesional_curp}</p>
                <p><strong>INE:</strong> ${profesional.profesional_ine}</p>
            `;

            const datosProfesionalesContent = `
                <h5>Datos Profesionales</h5>
                <p><strong>Área Profesional:</strong> ${profesional.profesional_area}</p>
                <p><strong>Subárea Profesional:</strong> ${profesional.profesional_subarea}</p>
                <p><strong>Especialidad Profesional:</strong> ${profesional.profesional_especialidad}</p>
                <p><strong>Certificado Profesional:</strong> ${profesional.profesional_certificado}</p>
                <p><strong>Título Profesional:</strong> ${profesional.titulo_profesional}</p>
            `;

            let sesionesContent = '';
            if (profesional.sesiones && profesional.sesiones.length > 0) {
                sesionesContent += '<h5>Sesiones Programadas</h5>';
                profesional.sesiones.forEach(sesion => {
                    sesionesContent += `
                        <p><strong>ID de Sesión:</strong> ${sesion.id_sesion}</p>
                        <p><strong>Fecha de Sesión:</strong> ${sesion.profesional_dia_sesion}</p>
                        <p><strong>Hora de Inicio:</strong> ${sesion.profesional_hora_inicio_sesion}</p>
                        <p><strong>Hora de Fin:</strong> ${sesion.profesional_hora_fin_sesion}</p>
                        <hr>
                    `;
                });
            }

            modalBody.innerHTML = `
                ${perfilContent}
                ${datosPersonalesContent}
                ${datosProfesionalesContent}
                ${sesionesContent}
            `;
        })
        .catch(error => console.error('Error al obtener los detalles del profesional:', error));
};
