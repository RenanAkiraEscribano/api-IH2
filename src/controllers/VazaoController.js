const VazaoModel = require('../models/VazaoModel');

module.exports = {
    all: async (req, res) => {
        let GR = await VazaoModel.getAll();
        res.json(GR);
    },
    att: async (req, res) => {
        let GR = await VazaoModel.att(req.body.setpoint_cdv002, req.body.setpoint_cdv001)
        res.json(GR);
    }
}