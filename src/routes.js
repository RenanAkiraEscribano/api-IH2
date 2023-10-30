const express = require('express');
const router = express.Router();
const { spawn } = require('child_process');

const ReformaController = require('./controllers/ReformaController');
const PurificacaoController = require('./controllers/PurificacaoController');
const GPController = require('./controllers/GPController');
const GRController = require('./controllers/GRController');
const PSAController = require('./controllers/PSAController');
const CelulaController = require('./controllers/CelulaController');
const SEController = require('./controllers/SEController');

router.get('/reforma', ReformaController.all);

router.get('/purificacao', PurificacaoController.all);

router.get('/gasesPurificacao', GPController.all);
router.post('/gasesPurificacao', GPController.new);
router.put('/gasesPurificacao', GPController.att);

router.get('/gasesReforma', GRController.all);
router.post('/gasesReforma', GRController.new);
router.put('/gasesReforma', GRController.att);

router.get('/psa', PSAController.all);

router.get('/celula', CelulaController.all);

router.get('/sistemaEspecialista', SEController.all);
router.post('/sistemaEspecialista', SEController.new);

router.get('/python', (request, response) => {
    const pythonProcess = spawn('python',['./sistemaEspecialista (1).py']);

    pythonProcess.stdout.on('data', (data) => {
        //console.log(`${data}`)
        response.json(data)
    });
})

module.exports = router;