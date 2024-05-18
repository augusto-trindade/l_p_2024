import { Router } from 'express'
import ProdutoController from "../controllers/produto.controller.js"
import { produtoValidator } from '../validators/produto.validator.js'


const router = Router()

router.get('/', ProdutoController.index)
router.post('/', produtoValidator, ProdutoController.create)
router.get('/:id', ProdutoController.show)

export default router


