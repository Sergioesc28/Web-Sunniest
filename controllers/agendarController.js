
const multer = require("multer");
const pool = require("./dbConfig");

// Configuración de Multer para manejar el upload de archivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
// Procedimientos almacenados
    // Procedimientos de insersión
    const nuevaCita = '';
    const obtenerHorarios = '';
    const verificarHorarios = '';
    const obtenerProfesionales = '';