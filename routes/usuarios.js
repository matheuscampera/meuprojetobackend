const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.post('/login', usuariosController.loginUsuario);
router.post('/register', usuariosController.registerUsuario);

module.exports = router;
