const CelulaModel = require('../models/CelulaModel');

module.exports = {
    all: async (req, res) => {
        let celula = await CelulaModel.getAll();
        res.json(celula);
    }
}