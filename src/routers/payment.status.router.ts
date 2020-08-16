//
import express from 'express'
//
import { PaymentStatusController } from '../controllers/payment.status.controller'
//
const paymentStatusRouter = express.Router()

const controller = new PaymentStatusController()

paymentStatusRouter.get('/', controller.index.bind(controller))
paymentStatusRouter.get('/:id', controller.getById.bind(controller))
paymentStatusRouter.post('/', controller.store.bind(controller))
paymentStatusRouter.put('/:id', controller.update.bind(controller))
paymentStatusRouter.delete('/:id', controller.delete.bind(controller))

export default paymentStatusRouter
