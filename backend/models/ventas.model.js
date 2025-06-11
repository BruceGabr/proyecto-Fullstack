const db = require('../db/connection');

// Verificar si cliente existe
const verificarCliente = (cliente_id, callback) => {
    db.query('SELECT id FROM clientes WHERE id = ?', [cliente_id], callback);
};

// Verificar si usuario existe
const verificarUsuario = (usuario_id, callback) => {
    db.query('SELECT id FROM usuarios WHERE id = ?', [usuario_id], callback);
};

// Obtener todas las ventas
const obtenerVentas = (callback) => {
    db.query('SELECT * FROM ventas', callback);
};

// Obtener venta por ID
const obtenerVentaPorId = (id, callback) => {
    db.query('SELECT * FROM ventas WHERE id = ?', [id], callback);
};

// Crear nueva venta
const crearVenta = (datos, callback) => {
    const { cliente_id, usuario_id, fecha, total } = datos;
    db.query(
        'INSERT INTO ventas (cliente_id, usuario_id, fecha, total) VALUES (?, ?, ?, ?)',
        [cliente_id, usuario_id, fecha, total],
        callback
    );
};

// Actualizar venta
const actualizarVenta = (id, datos, callback) => {
    const { cliente_id, usuario_id, fecha, total } = datos;
    db.query(
        'UPDATE ventas SET cliente_id = ?, usuario_id = ?, fecha = ?, total = ? WHERE id = ?',
        [cliente_id, usuario_id, fecha, total, id],
        callback
    );
};

// Eliminar venta
const eliminarVenta = (id, callback) => {
    db.query('DELETE FROM ventas WHERE id = ?', [id], callback);
};

module.exports = {
    verificarCliente,
    verificarUsuario,
    obtenerVentas,
    obtenerVentaPorId,
    crearVenta,
    actualizarVenta,
    eliminarVenta
};
