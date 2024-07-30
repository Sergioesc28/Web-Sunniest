const express = require("express");
const path = require("path");
const multer = require("multer");
const session = require('express-session');

const app = express();
const port = 3000;

// Middleware para procesar JSON y formularios URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer para manejar el upload de archivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Configuración de sesiones
app.use(session({
    secret: 'numeroDeCuenta', // Cambia esto por una clave secreta segura
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Para pruebas, desactiva 'secure' si no estás usando HTTPS
}));

// Handlers de formularios y controladores de datos
const formsController = require("./controllers/formsController");
const extraccionController = require("./controllers/extraccionController");

// Endpoints para insertar datos
app.post("/insert/usuario", upload.fields([{ name: 'ine_user', maxCount: 1 }, { name: 'foto_user', maxCount: 1 }]), formsController.handleUserForm);
app.post("/insert/perfil", upload.fields([{ name: 'foto_perfil', maxCount: 1 }, { name: 'banner_perfil', maxCount: 1 }]), formsController.handlePerfilForm);
app.post("/insert/tutor", upload.single('foto_menor'), formsController.handleTutorForm);
app.post("/insert/profesional", formsController.handleProfesionalForm);
app.post("/insert/sesion", formsController.handleSesionForm);
app.post("/login", formsController.confirmarLogin);

// Endpoints para obtener datos
app.get("/api/usuarios", extraccionController.getUsers);
app.get("/api/areas", extraccionController.getAreas);
app.get("/api/especialidades", extraccionController.getEspecialidades);
app.get("/api/paises", extraccionController.getPaises);
app.get("/api/ciudades", extraccionController.getCiudades);
app.get("/api/estado", extraccionController.getEstados);
app.get("/api/subareas", extraccionController.getSubareas);
app.get("/api/tutores", extraccionController.getTutores);
app.get("/api/profesionales", extraccionController.getProfesionales);
app.get("/api/sesiones", extraccionController.getSesiones);

// Definir las rutas estáticas y de redirección
const staticRoutes = [
    { path: "/", file: "index.html" },
    { path: "/perfil", file: "html/perfil.html" },
    { path: "/agendar", file: "html/agendar.html" },
    { path: "/citas", file: "html/citas.html" },
    { path: "/ingreso", file: "html/ingreso.html" },
    { path: "/profesionales", file: "html/profesionales.html" },
    { path: "/ayuda", file: "html/ayuda.html" },
    { path: "/principal", file: "html/principal.html" }
];

// Rutas estáticas y de redirección
staticRoutes.forEach(route => {
    app.get(route.path, (req, res) => {
        res.sendFile(path.join(__dirname, "public", route.file));
    });
});

// Servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, "public")));

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

module.exports = app; // Exportar app si es necesario para pruebas u otros propósitos
