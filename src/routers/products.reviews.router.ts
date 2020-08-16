//
import express from 'express'
//
import { ProductReviewController } from '../controllers/products.reviews.controller'
//
const productReviewsRouter = express.Router()

const controller = new ProductReviewController()

productReviewsRouter.get('/', controller.index.bind(controller))
productReviewsRouter.get('/:id', controller.getById.bind(controller))
productReviewsRouter.post('/', controller.store.bind(controller))
productReviewsRouter.put('/:id', controller.update.bind(controller))
productReviewsRouter.delete('/:id', controller.delete.bind(controller))

export default productReviewsRouter
