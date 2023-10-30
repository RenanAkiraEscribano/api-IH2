const SEModel = require('../models/SEModel');

module.exports = {
    all: async (req, res) => {
        let SE = await SEModel.getAll();
        res.json(SE);
    },
    new: async (req, res) => {
        let SEId = await SEModel.add(req.body.historico, req.body.status_SE, req.body.acao_SE)
        res.json(SEId);
    }
}