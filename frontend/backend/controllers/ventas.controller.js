const VentaModel = require('../models/ventas.model');

const getVentas = (req, res) => {
    VentaModel.obtenerVentas((err, rows) => {
        if (err) return res.status(500).json({ error: err });
        res.json(rows);
    });
};

const getVentaById = (req, res) => {
    VentaModel.obtenerVentaPorId(req.params.id, (err, rows) => {
        if (err) return res.status(500).json({ error: err });
        if (rows.length === 0) return res.status(404).json({ mensaje: 'Venta no encontrada' });
        res.json(rows[0]);
    });
};

const createVenta = (req, res) => {
    const { cliente_id, usuario_id, fecha, total } = req.body;

    VentaModel.verificarCliente(cliente_id, (err, clienteRows) => {
        if (err || clienteRows.length === 0) {
            return res.status(400).json({ error: 'Cliente no válido' });
        }

        VentaModel.verificarUsuario(usuario_id, (err, usuarioRows) => {
            if (err || usuarioRows.length === 0) {
                return res.status(400).json({ error: 'Usuario no válido' });
            }

            VentaModel.crearVenta(req.body, (err, result) => {
                if (err) return res.status(500).json({ error: err });
                res.status(201).json({ mensaje: 'Venta registrada', id: result.insertId });
            });
        });
    });
};

const updateVenta = (req, res) => {
    VentaModel.actualizarVenta(req.params.id, req.body, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ mensaje: 'Venta actualizada' });
    });
};

const deleteVenta = (req, res) => {
    VentaModel.eliminarVenta(req.params.id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ mensaje: 'Venta eliminada' });
    });
};

module.exports = {
    getVentas,
    getVentaById,
    createVenta,
    updateVenta,
    deleteVenta
};
