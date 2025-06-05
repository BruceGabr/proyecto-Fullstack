const express = require('express');
const router = express.Router();
const detalleController = require('../controllers/detalle_ventas.controller');

router.get('/', detalleController.getDetalles);
router.get('/:id', detalleController.getDetalleById);
router.post('/', detalleController.createDetalle);
router.delete('/:id', detalleController.deleteDetalle);

module.exports = router;
