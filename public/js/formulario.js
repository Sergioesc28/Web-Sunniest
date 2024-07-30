
const Titulo = document.getElementById('Titulo');
const Titulo_p = document.getElementById('Titulo_p');
const SubTitulo = document.getElementById('SubTitulo');
const Subtitulo_p = document.getElementById('Subtitulo');
function cambiarTitle(newTitle) {
    Titulo.innerHTML = newTitle;
}

function cambiarTitle_p(newTitle_p) {
    Titulo_p.innerHTML = newTitle_p;
}

function cambiarSubTitle(newSubTitle) {
    SubTitulo.innerHTML = newSubTitle;
}

function cambiarSubtitulo_p(newSubtitulo_p) {
    Subtitulo_p.innerHTML = newSubtitulo_p;
}

// Función para mostrar la sección de Direcciones y ocultar la de Datos Básicos
function mostrarDirections() {
    document.getElementById('form-section-basics').classList.add('hide');
    document.getElementById('form-section-directions').classList.remove('hide');
}

// Función para ocultar la sección de Direcciones y mostrar la de Datos Básicos
function ocultarDirections() {
    document.getElementById('form-section-directions').classList.add('hide');
    document.getElementById('form-section-basics').classList.remove('hide');
}

// Función para mostrar la sección de Documentos y ocultar la de Direcciones
function mostrarDocuments() {
    document.getElementById('form-section-directions').classList.add('hide');
    document.getElementById('form-section-documents').classList.remove('hide');
}
function ocultarDocuments() {
    mostrarDirections();
    document.getElementById('form-section-directions').classList.remove('hide');
    document.getElementById('form-section-documents').classList.add('hide');
}

// Validación personalizada para el número de teléfono
document.getElementById('numero_user').addEventListener('input', function () {
    // Elimina espacios en blanco del valor del input
    let numero = this.value.trim();

    // Si el número tiene exactamente 10 dígitos numéricos, es válido
    if (/^\d{10}$/.test(numero)) {
        this.setCustomValidity('');
    } else {
        this.setCustomValidity('El número de teléfono debe tener exactamente 10 dígitos.');
    }
});

// Validación personalizada para la CURP
document.getElementById('curp_user').addEventListener('input', function () {
    // Elimina espacios en blanco del valor del input
    let curp = this.value.trim().toUpperCase();

    // Expresión regular para validar CURP
    let curpRegex = (/^[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[0-9]{2}$/);

    if (curpRegex.test(curp)) {
        this.setCustomValidity('');
    } else {
        this.setCustomValidity('Ingresa una CURP válida (18 caracteres alfanuméricos).');
    }
});

// Evento para restablecer el estado de validación cuando se cambia el valor del campo
document.querySelectorAll('input, select, textarea').forEach(item => {
    item.addEventListener('change', function () {
        if (this.checkValidity()) {
            this.classList.remove('is-invalid');
        } else {
            this.classList.add('is-invalid');
        }
    });
});
// Despues de crear la cuenta
function perfil_user() {
    document.getElementById('section-exito').classList.add('hide');
    document.getElementById('box-form').classList.remove('hide');
}
function tutor_user() {
    document.getElementById('section-exito').classList.add('hide');
    document.getElementById('box-form').classList.remove('hide');
}
function profesional_user() {
    document.getElementById('section-exito').classList.add('hide');
    document.getElementById('box-form').classList.remove('hide');
}
function crearCuenta() {
    cambiarSubTitle('Ya tienes cuenta¡?');
    cambiarSubtitulo_p('En caso ya tengas una cuenta creada, puedes venir aqui e iniciar sesión')
    document.getElementById('form-section-basics').classList.add('hide');
    document.getElementById('form-section-directions').classList.remove('hide');
}
function inicarSesion() {
    cambiarTitle('Casi bienvenido')
    cambiarSubTitle('Crear cuenta nueva');
    cambiarSubtitulo_p('En caso no tengas una cuenta para inciar sesión, puedes crear una aquí')
    document.getElementById('form-section-basics').classList.add('hide');
    document.getElementById('form-section-directions').classList.remove('hide');
}