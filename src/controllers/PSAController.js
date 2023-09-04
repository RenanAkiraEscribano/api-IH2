const PSAModel = require('../models/PSAModel');

module.exports = {
    all: async (req, res) => {
        let psa = await PSAModel.getAll();
        res.json(psa);
    }
}