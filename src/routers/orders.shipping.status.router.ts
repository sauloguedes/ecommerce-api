//
import express from 'express'
//
import { OrderShippingStatusController } from '../controllers/order.shipping.status.controller'
//
const orderShippingStatusRouter = express.Router()

const controller = new OrderShippingStatusController()

orderShippingStatusRouter.get('/', controller.index.bind(controller))
orderShippingStatusRouter.get('/:id', controller.getById.bind(controller))
orderShippingStatusRouter.post('/', controller.store.bind(controller))
orderShippingStatusRouter.put('/:id', controller.update.bind(controller))
orderShippingStatusRouter.delete('/:id', controller.delete.bind(controller))

export default orderShippingStatusRouter
