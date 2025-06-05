const DetalleModel = require('../models/detalle_ventas.model');

const getDetalles = (req, res) => {
    DetalleModel.obtenerDetalles((err, rows) => {
        if (err) return res.status(500).json({ error: err });
        res.json(rows);
    });
};

const getDetalleById = (req, res) => {
    DetalleModel.obtenerDetallePorId(req.params.id, (err, rows) => {
        if (err) return res.status(500).json({ error: err });
        if (rows.length === 0) return res.status(404).json({ mensaje: 'Detalle no encontrado' });
        res.json(rows[0]);
    });
};

const createDetalle = (req, res) => {
    const { venta_id, producto_id } = req.body;

    DetalleModel.verificarVenta(venta_id, (err, ventaRows) => {
        if (err || ventaRows.length === 0) {
            return res.status(400).json({ error: 'Venta no válida' });
        }

        DetalleModel.verificarProducto(producto_id, (err, productoRows) => {
            if (err || productoRows.length === 0) {
                return res.status(400).json({ error: 'Producto no válido' });
            }

            DetalleModel.crearDetalle(req.body, (err, result) => {
                if (err) return res.status(500).json({ error: err });
                res.status(201).json({ mensaje: 'Detalle creado', id: result.insertId });
            });
        });
    });
};

const deleteDetalle = (req, res) => {
    DetalleModel.eliminarDetalle(req.params.id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ mensaje: 'Detalle eliminado' });
    });
};

module.exports = {
    getDetalles,
    getDetalleById,
    createDetalle,
    deleteDetalle,
};
