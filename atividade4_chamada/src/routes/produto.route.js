import { Router } from 'express'

import ProdutoController from "../controllers/produto.controller.js"

const router = Router()

router.get('/', ProdutoController.index)
router.post('/', ProdutoController.create)

export default router


