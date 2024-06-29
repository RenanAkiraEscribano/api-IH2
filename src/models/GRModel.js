const db = require('../db');

module.exports = {
    getAll: () => {
        const query = `SELECT * FROM GasesReforma WHERE id_reacao = 2 order by id_gases_reforma;`;
        return new Promise((resolve, reject) => {
            db.query(query, (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);
            });
        });
    },
    add: (ch4_GR, co2_GR, h2_GR, co_GR, data_hora_GR) => {
        const query = `INSERT INTO GasesReforma VALUES (?, ?, ?, ?, ?, ?, ?);`;
        return new Promise((resolve, reject) => {
            db.query(query, [0, ch4_GR, co2_GR, h2_GR, co_GR, data_hora_GR, 2], (error, results) => {
                if (error) { reject(error); return; }
                resolve(results.insertId);
            })
        });
    },
    att: (ch4_GP, co2_GP, h2_GR, co_GR, data_hora_GR, id_gases_reforma) => {
        const query = `UPDATE GasesReforma SET ch4_GR = ?,co2_GR = ?,h2_GR = ?,co_GR = ?,data_hora_GR = ? WHERE id_gases_reforma = ?;`;
        return new Promise((resolve, reject) => {
            db.query(query, [ch4_GP, co2_GP, h2_GR, co_GR, data_hora_GR,id_gases_reforma], (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);
            })
        });
    }
}
