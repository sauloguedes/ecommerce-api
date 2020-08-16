//
import express from 'express'
//
import { OrderPaymentStatusController } from '../controllers/order.payment.status.controller'
//
const orderPaymentStatusRouter = express.Router()

const controller = new OrderPaymentStatusController()

orderPaymentStatusRouter.get('/', controller.index.bind(controller))
orderPaymentStatusRouter.get('/:id', controller.getById.bind(controller))
orderPaymentStatusRouter.post('/', controller.store.bind(controller))
orderPaymentStatusRouter.put('/:id', controller.update.bind(controller))
orderPaymentStatusRouter.delete('/:id', controller.delete.bind(controller))

export default orderPaymentStatusRouter
