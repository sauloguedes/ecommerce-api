//
import express from 'express'
//
import { ShippingStatusController } from '../controllers/shipping.status.controller'
//
const shippingStatusRouter = express.Router()

const controller = new ShippingStatusController()

shippingStatusRouter.get('/', controller.index.bind(controller))
shippingStatusRouter.get('/:id', controller.getById.bind(controller))
shippingStatusRouter.post('/', controller.store.bind(controller))
shippingStatusRouter.put('/:id', controller.update.bind(controller))
shippingStatusRouter.delete('/:id', controller.delete.bind(controller))

export default shippingStatusRouter
