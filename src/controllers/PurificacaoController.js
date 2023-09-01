const PurificacaoModel = require('../models/PurificacaoModel');

module.exports = {
    all: async (req, res) => {
        let reforma = await PurificacaoModel.getAll();
        res.json(reforma);
    }
}