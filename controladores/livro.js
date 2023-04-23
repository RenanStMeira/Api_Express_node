const { getTodosLivros, getLivrosPorId, insereLivro, modificaLivro, deletaLivroPorId } = require('../servicos/livro');

function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

// Pga livros por Id
function getLivro(req, res) {
    try {
        const id =  req.params.id
        const livro = getLivrosPorId(id)
        res.send(livro)

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

//Funções pst
function postLivro(req, res) {
    try {
        const livroNovo = req.body
        insereLivro(livroNovo)
        res.status(201)
        res.send('Livro inserido com suceso')

    } catch(error) {
        res.status(500)
        res.message(error.message)
    }
};


// Função PATCh
function patchLivro(req, res) {
    try {
        const id = req.params.id
        const body = req.body

        modificaLivro(body, id)
        res.send('Item alterado com sucesso')

    } catch(error) {
        res.status(500)
        res.message(error.message)
    }
};

// Função de deletar 
function deleteLivro(req, res) {
    try {
        const id = req.params.id
        deletaLivroPorId(id)
        res.send("livro deletado com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
    
}

