// controllers/extraccionController.js

const multer = require("multer");
const pool = require("./dbConfig");


const getUsers = (req, res) => {
    pool.query("SELECT * FROM usuarios", (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }

        // Convertir los buffers de imágenes a formato base64
        results.forEach(user => {
            if (user.foto_user) {
                user.foto_user = Buffer.from(user.foto_user).toString('base64');
            }
            if (user.ine_user) {
                user.ine_user = Buffer.from(user.ine_user).toString('base64');
            }

            // Formatear la fecha
            if (user.fecha_user) {
                const fecha = new Date(user.fecha_user);
                const options = { day: 'numeric', month: 'long', year: 'numeric' };
                const formattedDate = fecha.toLocaleDateString('es-ES', options);
                user.fecha_user = formattedDate;
            }
        });

        res.json(results);
    });
};

const getPerfiles = (req, res) => {
    pool.query("SELECT * FROM perfiles", (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }
        results.forEach(perfil => {
            if (perfil.foto_perfil) {
                perfil.foto_perfil = Buffer.from(perfil.foto_perfil).toString('base64');
            }
            if (perfil.banner_perfil) {
                perfil.banner_perfil = Buffer.from(perfil.banner_perfil).toString('base64');
            }
        }),
        res.json(results);
    });
};
const getProfesionales = (req, res) => {
    const query = `
        SELECT 
            u.id_usuario,
            u.nombre_user AS profesional_nombre,
            u.apellido_user AS profesional_apellido,
            u.fecha_user AS profesional_fecha_nacimiento,
            u.sufijo_numero_user AS profesional_sufijo,
            u.numero_user AS profesional_numero,
            u.correo_user AS profesional_correo,
            u.estado_user AS profesional_estado,
            u.ciudad_user AS profesional_ciudad,
            u.colonia_user AS profesional_colonia,
            u.direccion_user AS profesional_direccion,
            u.curp_user AS profesional_curp,
            u.ine_user AS profesional_ine,
            p.nickname AS profesional_nickname_perfil,
            p.descripcion AS profesional_descripcion_perfil,
            p.frase AS profesional_frase_perfil,
            p.foto_perfil AS profesional_foto_perfil,
            p.banner_perfil AS profesional_banner_perfil,
            pr.area_profesional AS profesional_area,
            pr.subarea_profesional AS profesional_subarea,
            pr.especialidad_profesional AS profesional_especialidad,
            pr.certificado_profesional AS profesional_certificado,
            pr.titulo_profesional AS profesional_titulo
        FROM usuarios u
        JOIN perfiles p ON u.id_usuario = p.id_usuario
        JOIN profesionales pr ON p.id_usuario = pr.id_usuario
        LEFT JOIN sesiones s ON pr.id_profesional = s.id_profesional
        WHERE u.tipo_user = 'profesional';
    `;

    pool.query(query, (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }

        // Convertir los buffers de imágenes a formato base64
        results.forEach(user => {
            if (user.profesional_foto_perfil) {
                user.profesional_foto_perfil = Buffer.from(user.profesional_foto_perfil).toString('base64');
            }
            if (user.profesional_banner_perfil) {
                user.profesional_banner_perfil = Buffer.from(user.profesional_banner_perfil).toString('base64');
            }
            if (user.profesional_ine) {
                user.profesional_ine = Buffer.from(user.profesional_ine).toString('base64');
            }

            // Formatear la fecha de nacimiento
            if (user.profesional_fecha_nacimiento) {
                const fecha = new Date(user.profesional_fecha_nacimiento);
                const options = { day: 'numeric', month: 'long', year: 'numeric' };
                const formattedDate = fecha.toLocaleDateString('es-ES', options);
                user.profesional_fecha_nacimiento = formattedDate;
            }
        });

        res.json(results);
    });
};


const getSesiones = (req, res) => {
    pool.query("SELECT * FROM sesiones", (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }
        res.json(results);
    });
};
const getTutores = (req, res) => {
    pool.query("SELECT * FROM tutores", (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }
        res.json(results);
    });
};
const getMenores = (req, res) => {
    pool.query("SELECT * FROM menores", (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }
        res.json(results);
    });
};
const getAreas = (req, res) => {
    pool.query("SELECT * FROM areas", (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }
        res.json(results);
    });
};
const getSubareas = (req, res) => {
    const { id_area } = req.query;
    pool.query("SELECT id_subarea, nombre_subarea FROM subareas WHERE id_area_subarea = ?", [id_area], (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }
        res.json(results);
    });
};

const getEspecialidades = (req, res) => {
    const { id_subarea } = req.query;
    pool.query("SELECT id_especialidad, nombre_especialidad FROM especialidades WHERE id_subarea_especialidad = ?", [id_subarea], (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }
        res.json(results);
    });
};
const getPaises = (req, res) => {
    pool.query("SELECT * FROM paises", (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }
        res.json(results);
    });
};
const getCiudades = (req, res) => {
    pool.query("SELECT * FROM ciudades", (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }
        res.json(results);
    });
};
const getEstados = (req, res) => {
    pool.query("SELECT * FROM estados", (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }
        res.json(results);
    });
};

const getProfesionalesLista = (req, res) => {
    const query = `
        SELECT 
            u.id_usuario,
            u.nombre_user AS nombre,
            u.apellido_user AS apellido
        FROM usuarios u
        JOIN perfiles p ON u.id_usuario = p.id_usuario
        JOIN profesionales pr ON p.id_usuario = pr.id_usuario
        WHERE u.tipo_user = 'profesional';
    `;

    pool.query(query, (error, results) => {
        if (error) {
            return res.status(500).send("Error al consultar la base de datos");
        }
        res.json(results);
    });
};

module.exports = {
    getUsers,
    getPerfiles,
    getProfesionales,
    getSesiones,
    getTutores,
    getMenores,
    getAreas,
    getSubareas,
    getEspecialidades,
    getPaises,
    getCiudades,
    getEstados,
    getProfesionalesLista
};


