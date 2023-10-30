const db = require('../db');

module.exports = {
    getAll: () => {
        const query = `SELECT * FROM SistemaEspecialista order by id_SistemaEspecialista desc LIMIT 1;`;
        return new Promise((resolve, reject) => {
            db.query(query, (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);
            });
        });
    },
    add: (historico, status_SE, acao_SE) => {
        const query = `INSERT INTO SistemaEspecialista VALUES (?, ?, ?, ?);`;
        return new Promise((resolve, reject) => {
            db.query(query, [0, historico, status_SE, acao_SE], (error, results) => {
                if (error) { reject(error); return; }
                resolve(results.insertId);
            })
        });
    }
}