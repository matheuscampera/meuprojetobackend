const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, clientesController.getAllClientes);
router.post('/', authMiddleware, clientesController.createCliente);

module.exports = router;
