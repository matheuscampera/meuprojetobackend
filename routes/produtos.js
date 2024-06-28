const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, produtosController.getAllProdutos);
router.post('/', authMiddleware, produtosController.createProduto);

module.exports = router;
