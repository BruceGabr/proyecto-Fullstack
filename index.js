const express = require('express');
const cors = require('cors');
const app = express();
const productosRoutes = require('./routes/productos.routes');
const usuariosRoutes = require('./routes/usuarios.routes');
const clientesRoutes = require('./routes/clientes.routes');
const ventasRoutes = require('./routes/ventas.routes');
const detalle_ventasRoutes = require('./routes/detalle_ventas.routes');

app.use(cors());
app.use(express.json());

app.use('/api/productos', productosRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/ventas', ventasRoutes);
app.use('/api/detalle_ventas', detalle_ventasRoutes);

app.listen(3001, () => {
    console.log('Servidor corriendo en http://localhost:3001');
});