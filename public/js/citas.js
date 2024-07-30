function citasCompletadas() {
    document.getElementById('citasPendientes').classList.add('hide');
    document.getElementById('citasCompletadas').classList.remove('hide');
    document.getElementById('citasCanceladas').classList.add('hide');
    document.getElementById('citasCalendarios').classList.add('hide');
}
function citasPendientes() {
    document.getElementById('citasPendientes').classList.remove('hide');
    document.getElementById('citasCompletadas').classList.add('hide');
    document.getElementById('citasCanceladas').classList.add('hide');
    document.getElementById('citasCalendarios').classList.add('hide');
}
function citasCanceladas() {
    document.getElementById('citasPendientes').classList.add('hide');
    document.getElementById('citasCompletadas').classList.add('hide');
    document.getElementById('citasCanceladas').classList.remove('hide');
    document.getElementById('citasCalendarios').classList.add('hide');
}
function citasCalendarios() {
    document.getElementById('citasPendientes').classList.add('hide');
    document.getElementById('citasCompletadas').classList.add('hide');
    document.getElementById('citasCanceladas').classList.add('hide');
    document.getElementById('citasCalendarios').classList.remove('hide');
}