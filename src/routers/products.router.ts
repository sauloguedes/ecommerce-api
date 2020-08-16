//
import express from 'express'
//
import { ProductController } from '../controllers/products.controller'
//
const productsRouter = express.Router()

const controller = new ProductController()

productsRouter.get('/', controller.index.bind(controller))
productsRouter.get('/:id', controller.getById.bind(controller))
productsRouter.post('/', controller.store.bind(controller))
productsRouter.put('/:id', controller.update.bind(controller))
productsRouter.delete('/:id', controller.delete.bind(controller))

export default productsRouter
