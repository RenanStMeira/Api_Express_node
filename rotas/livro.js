// rota de livro
 // Importar
const { Router } = require ('express');
const { getLivros, getLivro, postLivro, patchLivro, deleteLivro } = require('../controladores/livro')

const router = Router();

// Ação das rotas HTTP
// Metodo GET
router.get('/', getLivros)

router.get('/:id', getLivro)


// POST
router.post('/', postLivro);


// PATCH
router.patch('/:id', patchLivro);


// DELETE
router.delete('/:id', deleteLivro)

module.exports = router