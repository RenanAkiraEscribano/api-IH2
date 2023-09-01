const db = require('../db');

module.exports = {
    getAll: () => {
        const query = `SELECT * FROM GasesPurificacao order by id_gases_purificacao;`;
        return new Promise((resolve, reject) => {
            db.query(query, (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);
            });
        });
    },
    add: (ch4_GP, co2_GP, ajuste_co2_GP, data_hora_GP, descricao) => {
        const query = `INSERT INTO GasesPurificacao VALUES (?, ?, ?, ?, ?, ?);`;
        return new Promise((resolve, reject) => {
            db.query(query, [0, ch4_GP, co2_GP, ajuste_co2_GP, data_hora_GP, descricao], (error, results) => {
                if (error) { reject(error); return; }
                resolve(results.insertId);
            })
        });
    }
}