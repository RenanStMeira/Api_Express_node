const { json } = require('express');
const fs = require('fs');

// Função GET buscar
function getTodosLivros () {
    return JSON.parse( fs.readFileSync( 'livros.json'))
};

function getLivrosPorId(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))

    const livroFilrado = livros.filter( livro => livro.id === id )[0]
    return livroFilrado 
}


// Função POS inserir
function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))

    const novaListaDeLivros = [...livros, livroNovo]

    fs.writeFileSync('livros.json', JSON.stringfy(novaListaDeLivros))
};


// Função PATCH modificar * usar let pois precisa modificar a variavel e nao usar const
function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync('livros.json'))
    const indiceModificado = livrosAtuais.findIndex( livro => livro.id ===id)

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }
    //livrosAtuais[indiceModificado] -> {id: "5", nome: "livro adicionado"}
    //modificacoes -> {mome: "nome muito legal"}

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync('livros.json', JSON.stringify(livrosAtuais))
};

// função de deletar 
function deletaLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livrosFiltrados = livros.filter( livro => livro.id !== id )
    fs.writeFileSync("livros.json", JSON.stringfy(livrosFiltrados))
};


module.exports = {
    getTodosLivros,
    getLivrosPorId,
    insereLivro,
    modificaLivro,
    deletaLivroPorId
};