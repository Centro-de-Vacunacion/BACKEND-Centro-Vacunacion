const {Router} = require('express');
const { check } = require('express-validator');



// const {validarCampos} = require('../middlewares/validar-campos');

const  { vacunasGet,vacunasPut}= require('../controllers/vacunas');

const router = Router();


router.get('/',vacunasGet);
router.put('/:id',vacunasPut);

module.exports = router;