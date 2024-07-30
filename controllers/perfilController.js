// const pool = require('../controllers/dbConfig'); // Asegúrate de tener configurada tu conexión a la base de datos

// // Extracción de datos del perfil del usuario
// const getPerfil = (req, res) => {
//     const idUsuario = req.session.id_usuario;

//     const sql = `
//         SELECT u.nombre_user, u.apellido_user, p.descripcion, u.correo_user, u.telefono_user, 
//             u.curp_user, u.numero_user, u.estado_user, u.ciudad_user, u.direccion_user,
//             IF(m.id_usuario IS NOT NULL, 'menor', IF(pr.id_usuario IS NOT NULL, 'profesional', 'general')) AS tipo_usuario
//         FROM usuarios u
//         LEFT JOIN perfiles p ON u.id_usuario = p.id_usuario
//         LEFT JOIN menores m ON u.id_usuario = m.id_usuario
//         LEFT JOIN profesionales pr ON u.id_usuario = pr.id_usuario
//         WHERE u.id_usuario = ?
//     `;

//     pool.query(sql, [idUsuario], (error, results) => {
//         if (error) {
//             console.error("Error al obtener perfil:", error);
//             return res.status(500).json({ error: "Error al obtener perfil del usuario" });
//         }

//         if (results.length > 0) {
//             const perfil = results[0];
//             res.status(200).json(perfil);
//         } else {
//             res.status(404).json({ error: "Perfil no encontrado para este usuario" });
//         }
//     });
// };

// module.exports = {
//     getPerfil
// };

