//
import express from 'express'
//
import { ProductListAttributeController } from '../controllers/products.list.attributes.controller'
//
const productListAttributesRouter = express.Router()

const controller = new ProductListAttributeController()

productListAttributesRouter.get('/', controller.index.bind(controller))
productListAttributesRouter.get('/:id', controller.getById.bind(controller))
productListAttributesRouter.post('/', controller.store.bind(controller))
productListAttributesRouter.put('/:id', controller.update.bind(controller))
productListAttributesRouter.delete('/:id', controller.delete.bind(controller))

export default productListAttributesRouter
