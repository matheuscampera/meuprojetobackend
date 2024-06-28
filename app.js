const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Configuração do dotenv para gerenciar variáveis de ambiente
dotenv.config();

// Criação da instância do aplicativo Express
const app = express();

// Define Pug como o motor de visualização
app.set('view engine', 'pug');

// Define o diretório onde os templates Pug estão localizados
app.set('views', './views');

// Middleware para log de requisições HTTP
app.use(morgan('dev'));

// Middleware para análise de corpo de requisições JSON
app.use(bodyParser.json());

// Middleware para servir arquivos estáticos
app.use(express.static('public'));

// Um exemplo de rota que renderiza um template Pug
app.get('/', (req, res) => {
    res.render('index', { title: 'Página Inicial', message: 'Bem-vindo ao uso do Pug com Express!' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'Sobre Nós' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contato' });
});

app.get('/services', (req, res) => {
    res.render('services', { title: 'Serviços' });
});

// Middleware para lidar com rotas não encontradas (404)
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', { error: err });
});

// Configuração do servidor para ouvir na porta definida no .env ou na porta específica 3306
const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
