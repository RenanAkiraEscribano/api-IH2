const express = require('express');
const router = express.Router();

const ReformaController = require('./controllers/ReformaController');
const PurificacaoController = require('./controllers/PurificacaoController');
const GPController = require('./controllers/GPController');
const GRController = require('./controllers/GRController');
const PSAController = require('./controllers/PSAController');
const CelulaController = require('./controllers/CelulaController');

router.get('/reforma', ReformaController.all);

router.get('/purificacao', PurificacaoController.all);

router.get('/gasesPurificacao', GPController.all);
router.post('/gasesPurificacao', GPController.new);

router.get('/gasesReforma', GRController.all);
router.post('/gasesReforma', GRController.new);

router.get('/psa', PSAController.all);

router.get('/celula', CelulaController.all);

module.exports = router;