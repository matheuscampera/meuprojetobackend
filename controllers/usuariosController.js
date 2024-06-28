const db = require('../services/dbService');
const jwt = require('jsonwebtoken');

exports.loginUsuario = async (req, res) => {
    const { usuario, senha } = req.body;
    try {
        const [rows] = await db.query('SELECT * FROM usuarios WHERE usuario = ? AND senha = ?', [usuario, senha]);
        if (rows.length > 0) {
            const token = jwt.sign({
                id: rows[0].id,
                usuario: rows[0].usuario
            }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ message: 'Auth successful', token: token });
        } else {
            res.status(401).json({ message: 'Auth failed' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.registerUsuario = async (req, res) => {
    const { usuario, senha } = req.body;
    try {
        const [result] = await db.query('INSERT INTO usuarios (usuario, senha) VALUES (?, ?)', [usuario, senha]);
        res.status(201).json({ id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
