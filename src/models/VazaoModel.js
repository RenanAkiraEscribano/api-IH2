const db = require('../db');

module.exports = {
    getAll: () => {
        const query = `SELECT * FROM SetupVazoes`;
        return new Promise((resolve, reject) => {
            db.query(query, (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);
            });
        });
    },
    att: (setpoint_cdv002, setpoint_cdv001) => {
        const query = `UPDATE SetupVazoes SET setpoint_cdv002 = ?,setpoint_cdv001 = ? WHERE id_setup_vazoes = 1;`;
        return new Promise((resolve, reject) => {
            db.query(query, [setpoint_cdv002, setpoint_cdv001], (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);
            })
        });
    }
}
