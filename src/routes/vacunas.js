const { Router } = require('express');
const { check } = require('express-validator');



// const {validarCampos} = require('../middlewares/validar-campos');

const { vacunasGet, vacunasPut, vacunasPut1 } = require('../controllers/vacunas');

const router = Router();


router.get('/', vacunasGet);
//router.put('/:id', vacunasPut);
router.put('/:id', vacunasPut1);

module.exports = router;