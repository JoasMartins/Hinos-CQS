const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve arquivos estáticos da pasta 'audios' diretamente na raiz
app.use(express.static(path.join(__dirname, 'audios')));

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
