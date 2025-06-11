const db = require('../db/connection');

// Verificar si venta existe
const verificarVenta = (venta_id, callback) => {
    db.query('SELECT id FROM ventas WHERE id = ?', [venta_id], callback);
};

// Verificar si producto existe
const verificarProducto = (producto_id, callback) => {
    db.query('SELECT id FROM productos WHERE id = ?', [producto_id], callback);
};

// Obtener todos los detalles
const obtenerDetalles = (callback) => {
    db.query('SELECT * FROM detalle_ventas', callback);
};

// Obtener detalle por ID
const obtenerDetallePorId = (id, callback) => {
    db.query('SELECT * FROM detalle_ventas WHERE id = ?', [id], callback);
};

// Crear nuevo detalle
const crearDetalle = (datos, callback) => {
    const { venta_id, producto_id, cantidad, precio_unitario, subtotal } = datos;
    db.query(
        'INSERT INTO detalle_ventas (venta_id, producto_id, cantidad, precio_unitario, subtotal) VALUES (?, ?, ?, ?, ?)',
        [venta_id, producto_id, cantidad, precio_unitario, subtotal],
        callback
    );
};

// Actualizar detalle
const actualizarDetalle = (id, datos, callback) => {
    const { venta_id, producto_id, cantidad, precio_unitario, subtotal } = datos;
    db.query(
        'UPDATE detalle_ventas SET venta_id = ?, producto_id = ?, cantidad = ?, precio_unitario = ?, subtotal = ? WHERE id = ?',
        [venta_id, producto_id, cantidad, precio_unitario, subtotal, id],
        callback
    );
};

// Eliminar detalle
const eliminarDetalle = (id, callback) => {
    db.query('DELETE FROM detalle_ventas WHERE id = ?', [id], callback);
};

module.exports = {
    verificarVenta,
    verificarProducto,
    obtenerDetalles,
    obtenerDetallePorId,
    crearDetalle,
    actualizarDetalle,
    eliminarDetalle
};
