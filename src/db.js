const mysql = require('mysql');

const connection = mysql.createConnection({
    user: 'IH2',
    password: 'Pr0j&t0_1h2',
    database: 'IH2',
    host: '192.168.100.10',
    port: '3306'
})

connection.connect((error) => {
    if(error) throw error;
    console.log(`Conectado ao Banco de Dados IH2.`)
});

module.exports = connection;
