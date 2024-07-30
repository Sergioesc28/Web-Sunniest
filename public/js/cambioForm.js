// Para log in
function mostrarLogin() {
    document.getElementById('Titulo').innerHTML = "Iniciar sesión";
    document.getElementById('Titulop').innerHTML = "<b>Login</b><br>Solo registra tus datos para poder iniciar sesión de manera optima</p>";
    document.getElementById('subtitulo').innerHTML = "Crear cuenta";
    document.getElementById('subp').innerHTML = "<b>LogOut</b><br>Si aún no tienes cuenta puedes registrarte para tener la tuya</p>";
    document.getElementById('form-usuario').classList.add('hide');
    document.getElementById('btn-registrar').classList.remove('hide');
    document.getElementById('btn-ingresar').classList.add('hide');
    document.getElementById('form-login').classList.remove('hide');
};
// Para log out
function mostrarLogout() {
    document.getElementById('Titulo').innerHTML = "Registrar cuenta";
    document.getElementById('Titulop').innerHTML = "<b>Datos básicos</b><br>Dado que esta es tu primera vez, debes rellenar todos los datos correspondientes</p>";
    document.getElementById('subtitulo').innerHTML = "Iniciar sesión";
    document.getElementById('subp').innerHTML = "<b>Login</b><br>Solo registra tus datos para poder iniciar sesión de manera optima</p>";
    document.getElementById('btn-registrar').classList.add('hide');
    document.getElementById('btn-ingresar').classList.remove('hide');
    document.getElementById('form-usuario').classList.remove('hide');
    document.getElementById('form-login').classList.add('hide');
};
// Dentro de formulario user
function mostrarDirection() {
    document.getElementById('Titulop').innerHTML = "<b>Direcciones</b><br>Solo detalles, no te fijes mucho en esto</p>";
    document.getElementById('form-section-basics').classList.add('hide');
    document.getElementById('form-section-directions').classList.remove('hide');
};
function mostrarBasicos() {
    document.getElementById('form-section-basics').classList.add('hide');
    document.getElementById('form-section-directions').classList.remove('hide');
};
function mostrarDocumentos() {
    document.getElementById('Titulop').innerHTML = "<b>Documentos</b><br>Simplemente confirmar quien sos</p>";
    document.getElementById('form-section-directions').classList.add('hide');
    document.getElementById('form-section-documents').classList.remove('hide');
};
function regresarDirection() {
    document.getElementById('Titulop').innerHTML = "<b>Direcciones</b><br>Solo detalles, no te fijes mucho en esto</p>";
    document.getElementById('form-section-directions').classList.remove('hide');
    document.getElementById('form-section-documents').classList.add('hide');
    document.getElementById('form-section-basics').classList.add('hide');
};
function regresarBasicos() {
    document.getElementById('Titulop').innerHTML = "<b>Datos básicos</b><br>Dado que esta es tu primera vez, debes rellenar todos los datos correspondientes</p>";
    document.getElementById('form-section-basics').classList.remove('hide');
    document.getElementById('form-section-directions').classList.add('hide');
};
// Cambio a formulario perfil
function mostrarformPerfil() {
    document.getElementById('form-perfil').classList.remove('hide');
    document.getElementById('form-usuario').classList.add('hide');
    document.getElementById('form-footer').classList.add('hide');
};
// Cambio a sección de exito
function perfilCreado() {
    document.getElementById('formularios').classList.add('hide');
    document.getElementById('perfilCompletado').classList.remove('hide');
};
// Cambio a tutor

function mostrarFormTutor() {
    document.getElementById('Titulo').innerHTML = "Modo tutor";
    document.getElementById('Titulop').innerHTML = "<b>Datos de tutor</b><br>Estos son datos que utilizaremos para saber</p>";
    document.getElementById('formularios').classList.remove('hide');
    document.getElementById('form-usuario').classList.add('hide');
    document.getElementById('form-perfil').classList.add('hide');
    document.getElementById('form-profesional').classList.add('hide');
    document.getElementById('form-tutor').classList.remove('hide');
    document.getElementById('perfilCompletado').classList.add('hide');
};
function perfilCreadoTutor() {
    document.getElementById('formularios').classList.add('hide');
    document.getElementById('opcionesPerfil').classList.add('hide');
    document.getElementById('perfilCompletado').classList.remove('hide');
};
function perfilCreadoProfesional() {
    document.getElementById('formularios').classList.add('hide');
    document.getElementById('opcionesPerfil').classList.add('hide');
    document.getElementById('perfilCompletado').classList.remove('hide');
};
    // Cambio tutor-menor
// Cambio a profesional
function mostrarFormProfesiona() {
    document.getElementById('Titulo').innerHTML = "Modo profesional";
    document.getElementById('Titulop').innerHTML = "<b>Datos del profesional</b><br>Para saber quien sos</p>";
    document.getElementById('formularios').classList.remove('hide');
    document.getElementById('form-usuario').classList.add('hide');
    document.getElementById('form-perfil').classList.add('hide');
    document.getElementById('form-tutor').classList.add('hide');
    document.getElementById('form-profesional').classList.remove('hide');
    document.getElementById('perfilCompletado').classList.add('hide');
};
    // Cambio de profesional-menor