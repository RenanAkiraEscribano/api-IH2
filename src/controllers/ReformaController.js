const ReformaModel = require('../models/ReformaModel');

module.exports = {
    all: async (req, res) => {
        let reforma = await ReformaModel.getAll();
        res.json(reforma);
    }
}