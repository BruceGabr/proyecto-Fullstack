const db = require('../db/connection');

// Obtener todos los usuarios
const obtenerUsuarios = (callback) => {
    db.query('SELECT * FROM usuarios', callback);
};

// Obtener usuario por ID
const obtenerUsuarioPorId = (id, callback) => {
    db.query('SELECT * FROM usuarios WHERE id = ?', [id], callback);
};

// Crear un nuevo usuario
const crearUsuario = (datos, callback) => {
    const { nombre, email, password } = datos;
    db.query(
        'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)',
        [ nombre, email, password],
        callback
    );
};

// Actualizar usuario
const actualizarUsuario = (id, datos, callback) => {
    const { nombre, email, password } = datos;
    db.query(
        'UPDATE usuarios SET nombre = ?, email = ?, password = ? WHERE id = ?',
        [nombre, email, password, id],
        callback
    );
};

// Eliminar un usuario
const eliminarUsuario = (id, callback) => {
    db.query('DELETE FROM usuarios WHERE id = ?', [id], callback);
};

module.exports = {
    obtenerUsuarios,
    obtenerUsuarioPorId,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
};

