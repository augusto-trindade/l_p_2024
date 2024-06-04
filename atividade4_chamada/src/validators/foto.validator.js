import { body, param } from "express-validator"

export const fotoValidator = [
    body('titulo').isString().withMessage('Título é obrigatório!'),
    body('url').isString().withMessage('URL é obrigatório!'),
    body('produtoId').isNumeric().withMessage('Produto ID é obrigatório!')
]

export const fotoUpdateValidator = [
    body('id').isInt().withMessage('ID é obrigatório!'),
    body('titulo').isString().withMessage('Título é obrigatório!'),
    body('url').isString().withMessage('URL é obrigatório!'),
    body('produtoId').isNumeric().withMessage('Produto ID é obrigatório!')
]

export const fotoIdValidator = [
    body('id').isInt().withMessage('ID é obrigatório!'),
]