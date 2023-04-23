const express = require('express');
const rotaLivro = require('./rotas/livro')

const app = express();
app.use(express.json())

app.use('/livros', rotaLivro)

// Porta
const port = 8000;


// Ouvindo a porta
app.listen(port, () => {
    console.log(`escultando a porta ${port}`)
});