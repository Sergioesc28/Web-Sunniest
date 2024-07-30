const session = require('express-session');
const pool = require('../controllers/dbConfig'); // Asegúrate de tener configurada tu conexión a la base de datos

const handleUserForm = (req, res) => {
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
        curp_user
    } = req.body;

    // Obtener los archivos
    let ine = req.files['ine_user'][0].buffer;
    let foto = req.files['foto_user'][0].buffer;

    // Consulta SQL para insertar un nuevo usuario
    const sql = `INSERT INTO usuarios
                (nombre_user, apellido_user, fehca_user, sufijo_numero_user,
                numero_user, correo_user, contrasena_user, estado_user, ciudad_user,
                colonia_user, direccion_user, curp_user, ine_user, foto_user, tipo_user)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'usuario')`;

    // Ejecutar la consulta SQL
    pool.query(
        sql,
        [
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
            ine,
            foto
        ],
        (error, results) => {
            if (error) {
                console.error("Error al insertar usuario:", error);
                // Puedes manejar el error aquí, por ejemplo, enviar una respuesta de error al cliente
                return res.status(500).json({ error: "Error al insertar usuario" });
            }
            // Consulta para obtener el id_usuario del usuario recién insertado
            const obtenerId = 'SELECT id_usuario FROM usuarios WHERE correo_user = ? AND contrasena_user = ?';
            pool.query(obtenerId, [correo_user, contrasena_user], (error, results) => {
                if (error) {
                    console.error("Error al obtener id_usuario:", error);
                    return res.status(500).json({ error: "Error al obtener id_usuario" });
                }

                const id_usuario = results[0].id_usuario;
                req.session.id_usuario = id_usuario;
                console.log("Usuario insertado con éxito, id_usuario es " + id_usuario);
                return res.redirect('/public/html/principal.html');
            });
        }
    );
};






const handlePerfilForm = (req, res) => {
    const { nickname, descripcion, frase } = req.body;
    const foto_perfil = req.files['foto_perfil'][0].buffer;
    const banner_perfil = req.files['banner_perfil'][0].buffer;
    const id_usuario = req.session.id_usuario;

    if (!id_usuario) {
        return res.status(400).json({ error: 'ID de usuario no encontrado en la sesión.' });
    }

    // SQL query to insert into 'perfiles' table
    const sql = `INSERT INTO perfiles (nickname, descripcion, frase, foto_perfil, banner_perfil, id_usuario)
                    VALUES (?, ?, ?, ?, ?, ?)`;

    // Execute SQL query with id_usuario
    pool.query(sql, [nickname, descripcion, frase, foto_perfil, banner_perfil, id_usuario], (err, result) => {
        if (err) {
            console.error('Error al insertar perfil:', err);
            return res.status(500).json({ error: 'Error interno al insertar perfil.' });
        }
        console.log('Perfil insertado correctamente:', result);
        res.status(200).json({ message: 'Perfil insertado correctamente.' });
    });
};



const handleTutorForm = (req, res) => {
    const { nombre_menor, apellido_paterno_menor, apellido_materno_menor, fecha_nacimiento_menor, curp_menor, situacion_menor } = req.body;
    let foto_menor = null;

    if (req.files && req.files['foto_menor']) {
        foto_menor = req.files['foto_menor'][0].buffer;
    }

    const sql = `INSERT INTO menores 
                (nombre_menor, apellido_paterno_menor, apellido_materno_menor, 
                fecha_menor, curp_menor, situacion_menor, foto_menor, id_usuario)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    pool.query(sql, [nombre_menor, apellido_paterno_menor, apellido_materno_menor, fecha_nacimiento_menor, curp_menor, situacion_menor, foto_menor, req.session.id_usuario], (error, results) => {
        if (error) {
            console.error("Error al insertar menor:", error);
            return res.status(500).json({ error: "Error al insertar menor en la base de datos" });
        }
        console.log("Menor insertado con éxito");
    });
};




const handleProfesionalForm = (req, res) => {
    const { area_profesional, subarea_profesional, especialidad_profesional, certificado_profesional, titulo_profesional } = req.body;

    const sql = `INSERT INTO profesionales 
                (area_profesional, subarea_profesional, especialidad_profesional, 
                certificado_profesional, titulo_profesional, id_usuario)
                VALUES (?, ?, ?, ?, ?, ?)`;

    pool.query(sql, [area_profesional, subarea_profesional, especialidad_profesional, certificado_profesional, titulo_profesional, req.session.id_usuario], (error, results) => {
        if (error) {
            console.error("Error al insertar profesional:", error);
            return res.status(500).json({ error: "Error al insertar profesional en la base de datos" });
        }
        console.log("Profesional insertado con éxito");
    });
};



const handleSesionForm = (req, res) => {
    const {
        id_profesional,
        dia_sesion,
        hora_inicio_sesion,
        hora_fin_sesion
    } = req.body;

    const sql = 'INSERT INTO sesiones (id_profesional, dia_sesion, hora_inicio_sesion, hora_fin_sesion) VALUES (?, ?, ?, ?)';

    pool.query(
        sql,
        [
            id_profesional,
            dia_sesion,
            hora_inicio_sesion,
            hora_fin_sesion
        ],
        (error, results) => {
            if (error) {
                console.error("Error al insertar sesión:", error);
                return res.status(500).json({ error: "Error al insertar sesión en la base de datos" });
            }
            console.log("Sesión insertada con éxito");
        }
    );
};


const confirmarLogin = (req, res) => {
    const { correo_user, contrasena_user } = req.body;

    if (!correo_user || !contrasena_user) {
        return res.status(400).send("Correo y contraseña son requeridos");
    }

    const sql = 'SELECT id_usuario FROM usuarios WHERE correo_user = ? AND contrasena_user = ?';

    pool.query(sql, [correo_user, contrasena_user], (error, results) => {
        if (error) {
            console.error("Error al verificar usuario:", error);
            return res.status(500).send("Error interno al verificar usuario");
        }

        if (results.length > 0) {
            req.session.id_usuario = results[0].id_usuario;
            console.log("Usuario autenticado correctamente");
            return res.redirect('/public/html/principal.html');
        } else {
            console.log("Credenciales incorrectas");
            return res.status(401).send("Credenciales incorrectas");
        }
    });
};




module.exports = {
    handleUserForm,
    handlePerfilForm,
    handleTutorForm,
    handleProfesionalForm,
    handleSesionForm,
    confirmarLogin
};
