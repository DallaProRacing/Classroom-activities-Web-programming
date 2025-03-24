const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rota para testar o servidor
app.post('/enviar', (req, res) => {
    const { nome, email, mensagem } = req.body;

    console.log('Dados recebidos:', { nome, email, mensagem });

    res.json({ message: 'Formulário enviado com sucesso!' });
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
