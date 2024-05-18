import Produto from '../models/produto.model.js'

export default class ProdutoController{
    static async index(req,res) {
        const produtos = await Produto.findMany()
        res.json(produtos)
    }

    static async create (req, res) {
        const produto = await Produto.create({
            data: req.body
        })
        res.json(produto)
    }
}

