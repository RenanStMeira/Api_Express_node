const { getTodosLivros, getLivrosPorId } = require('../servicos/livro');

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


module.exports = {
    getLivros,
    getLivro
}
