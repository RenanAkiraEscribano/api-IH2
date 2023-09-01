const GPModel = require('../models/GPModel')

module.exports = {
    all: async (req, res) => {
        let GP = await GPModel.getAll();
        res.json(GP);
    },
    new: async (req, res) => {
        let GPId = await GPModel.add(req.body.ch4_GP, req.body.co2_GP, req.body.ajuste_co2_GP, req.body.data_hora_GP, req.body.descricao)
        res.json(GPId);
    }
}