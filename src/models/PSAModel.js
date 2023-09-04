const db = require('../db');

module.exports = {
    getAll: () => {
        const query = `SELECT * FROM PSA order by id_PSA desc LIMIT 10;`;
        return new Promise((resolve, reject) => {
            db.query(query, (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);
            });
        });
    }
}