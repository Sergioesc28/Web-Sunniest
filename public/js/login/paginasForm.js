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
function mostrarSeccion(seccionMostrar, seccionOcultar) {
    document.getElementById(seccionOcultar).classList.add('hide');
    document.getElementById(seccionMostrar).classList.remove('hide');
}

// Interaciones de inicio o registro
function mostrarRegistro() {
    cambiarTitle('Crear cuenta');
    cambiarTitle_p('<b>Datos básicos</b><br>Dado que esta es tu primera vez, debes rellenar todos los datos correspondientes');
    cambiarSubTitle('Iniciar Sesion');
    cambiarSubtitulo_p('<b>Puedes iniciar sesión de inmediato</b><br>Clickea aquí abajo para poder iniciar sesión de inmediato');
    mostrarSeccion('btn-registrar', 'btn-ingresa');
    mostrarSeccion('form-login','form-usuario');}
function mostrarLogin() {
    cambiarTitle('Iniciar sesión');
    cambiarTitle_p('<b>Casi cerca</b><br>Ingresa los datos correspondientes para poder ingresar');
    cambiarSubTitle('Registrar cuenta');
    cambiarSubtitulo_p('<b>Puedes crear una cuenta de inmediato</b><br>Clickea aquí abajo para poder registrarse de inmediato');
    mostrarSeccion('btn-ingresa', 'btn-registrar');
    mostrarSeccion('form-usuario','form-login');}
// Interacciones de usuario form
function regresarBasicos(){
    cambiarTitle_p('<b>Datos básicos</b><br>Ingresa los datos correspondientes para poder ingresar');
    document.getElementById(seccionOcultar).classList.add("hide");
    document.getElementById(seccionOcultar).classList.remove("hide");
    mostrarSeccion('form-section-directions','form-section-basics');}
function mostrarDireccion(){
    cambiarTitle_p('<b>Direcciones</b><br>Ingresa los datos correspondientes para poder ingresar');
    document.getElementById('form-section-basics').classList.add("hide");
    document.getElementById('form-section-directions').classList.remove("hide");}
function regresarDireccion(){
    cambiarTitle_p('<b>Direcciones</b><br>Ingresa los datos correspondientes para poder ingresar');
    document.getElementById(seccionOcultar).classList.add("hide");
    document.getElementById(seccionOcultar).classList.remove("hide");
    mostrarSeccion();}
function mostrarDocumento(){
    cambiarTitle_p('<b>Documentos</b><br>Ingresa los datos correspondientes para poder ingresar');
    document.getElementById(seccionOcultar).classList.add("hide");
    document.getElementById(seccionOcultar).classList.remove("hide");
    mostrarSeccion();}
// Interacciones de perfil 
function avanzarPerfil(){
    document.getElementById('form-footer').classList.add("hide");
    mostrarSeccion();}
// Interacciones de exito (tutor y profesional)
// Interacciones de tutor - menor
// Interacciones de profesional - sesion