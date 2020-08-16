//
import express from 'express'
//
import { ProductSubcategoryController } from '../controllers/products.subcategories.controller'
//
const productSubcategoriesRouter = express.Router()

const controller = new ProductSubcategoryController()

productSubcategoriesRouter.get('/', controller.index.bind(controller))
productSubcategoriesRouter.get('/:id', controller.getById.bind(controller))
productSubcategoriesRouter.post('/', controller.store.bind(controller))
productSubcategoriesRouter.put('/:id', controller.update.bind(controller))
productSubcategoriesRouter.delete('/:id', controller.delete.bind(controller))

export default productSubcategoriesRouter
