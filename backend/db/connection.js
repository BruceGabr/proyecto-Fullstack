const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3309,
    user: 'root',
    password: 'root',
    database: 'ventasdb'
});
connection.connect((err) => {
    if (err) {
        console.error('Error de conexión:', err.message);
        return;
    }
    console.log('Conectado a MySQL');
});
module.exports = connection;