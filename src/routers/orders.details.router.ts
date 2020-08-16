//
import express from 'express'
//
import { OrderDetailController } from '../controllers/orders.details.controller'
//
const orderDetailsRouter = express.Router()

const controller = new OrderDetailController()

orderDetailsRouter.get('/', controller.index.bind(controller))
orderDetailsRouter.get('/:id', controller.getById.bind(controller))
orderDetailsRouter.post('/', controller.store.bind(controller))
orderDetailsRouter.put('/:id', controller.update.bind(controller))
orderDetailsRouter.delete('/:id', controller.delete.bind(controller))

export default orderDetailsRouter
