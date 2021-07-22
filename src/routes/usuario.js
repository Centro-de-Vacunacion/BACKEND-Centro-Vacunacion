const { Router } = require('express');
const { usuarioGet, usuarioPost } = require('../controllers/usuario');
const router = Router();
router.get('/', usuarioGet)
router.post('/', usuarioPost)
module.exports = router;