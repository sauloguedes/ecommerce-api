//
import express from 'express'
//
import { ProductAttributeController } from '../controllers/products.attributes.controller'
//
const productAttributesRouter = express.Router()

const controller = new ProductAttributeController()

productAttributesRouter.get('/', controller.index.bind(controller))
productAttributesRouter.get('/:id', controller.getById.bind(controller))
productAttributesRouter.post('/', controller.store.bind(controller))
productAttributesRouter.put('/:id', controller.update.bind(controller))
productAttributesRouter.delete('/:id', controller.delete.bind(controller))

export default productAttributesRouter
