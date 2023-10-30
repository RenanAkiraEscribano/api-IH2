const GPModel = require('../models/GPModel')

module.exports = {
    all: async (req, res) => {
        let GP = await GPModel.getAll();
        res.json(GP);
    },
    new: async (req, res) => {
        let GPId = await GPModel.add(req.body.ch4_GP, req.body.co2_GP, req.body.ajuste_co2_GP, req.body.data_hora_GP, req.body.descricao)
        res.json(GPId);
    },
    att: async (req, res) => {
        let json = {error:'', result:{}};
        let ch4_GP = req.body.ch4_GP;
        let co2_GP = req.body.co2_GP;
        let ajuste_co2_GP = req.body.ajuste_co2_GP;
        let data_hora_GP = req.body.data_hora_GP;
        let descricao = req.body.descricao;
        let id_gases_purificacao = req.body.id_gases_purificacao;

        if (ch4_GP && co2_GP && ajuste_co2_GP && data_hora_GP && id_gases_purificacao){
            await GPModel.att(ch4_GP, co2_GP, ajuste_co2_GP, data_hora_GP, descricao, id_gases_purificacao)
            json.result = {
                ch4_GP, 
                co2_GP, 
                ajuste_co2_GP, 
                data_hora_GP, 
                descricao, 
                id_gases_purificacao
            };
        }else{
            json.result = {
                ch4_GP, 
                co2_GP, 
                ajuste_co2_GP, 
                data_hora_GP, 
                descricao, 
                id_gases_purificacao
            };
            json.error = "Campos não enviados"
        }
        
        res.json(json);
    }
}