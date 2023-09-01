const db = require('../db');

module.exports = {
    getAll: () => {
        const query = `SELECT * FROM Purificacao order by id_purificacao desc LIMIT 10;`;
        return new Promise((resolve, reject) => {
            db.query(query, (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);
            });
        });
    }
}