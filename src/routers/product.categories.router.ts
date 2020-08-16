//
import express from 'express'
//
import { ProductCategoryController } from '../controllers/products.categories.controller'
//
const productCategoriesRouter = express.Router()

const controller = new ProductCategoryController()

productCategoriesRouter.get('/', controller.index.bind(controller))
productCategoriesRouter.get('/:id', controller.getById.bind(controller))
productCategoriesRouter.post('/', controller.store.bind(controller))
productCategoriesRouter.put('/:id', controller.update.bind(controller))
productCategoriesRouter.delete('/:id', controller.delete.bind(controller))

export default productCategoriesRouter
