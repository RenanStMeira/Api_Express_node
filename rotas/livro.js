// rota de livro
 // Importar
const { Router } = require ('express');
const { getLivros, getLivro } = require('../controladores/livro')

const router = Router();

// Ação das rotas HTTP
// Metodo GET
router.get('/', getLivros)

router.get('/:id', getLivro)


// POST
router.post('/', (req, res) => {
    res.send('Voccê fez uma requisição do tipo POST')
});


// PATCH
router.patch('/', (req, res) => {
    res.send('Voccê fez uma requisição do tipo PATCH')
});


// DELETE
router.delete('/', (req, res) => {
    res.send('Voccê fez uma requisição do tipo DELETE')
})

module.exports = router