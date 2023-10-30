const GRModel = require('../models/GRModel');

module.exports = {
    all: async (req, res) => {
        let GR = await GRModel.getAll();
        res.json(GR);
    },
    new: async (req, res) => {
        let GRId = await GRModel.add(req.body.ch4_GR, req.body.co2_GR, req.body.h2_GR, req.body.co_GR, req.body.data_hora_GR)
        res.json(GRId);
    },
    att: async (req, res) => {
        let GR = await GRModel.att(req.body.ch4_GR, req.body.co2_GR, req.body.h2_GR, req.body.co_GR, req.body.data_hora_GR, req.body.id_gases_reforma)
        res.json(GR);
    }
}