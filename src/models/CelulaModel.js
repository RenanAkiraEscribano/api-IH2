const db = require('../db');

module.exports = {
    getAll: () => {
        const query = `SELECT * FROM CelulaCombustivel order by id_celula_combustivel desc LIMIT 10;`;
        return new Promise((resolve, reject) => {
            db.query(query, (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);
            });
        });
    }
}