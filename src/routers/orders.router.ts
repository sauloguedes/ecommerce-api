//
import express from 'express'
//
import { OrderController } from '../controllers/orders.controller'
//
const ordersRouter = express.Router()

const controller = new OrderController()

ordersRouter.get('/', controller.index.bind(controller))
ordersRouter.get('/:id', controller.getById.bind(controller))
ordersRouter.post('/', controller.store.bind(controller))
ordersRouter.put('/:id', controller.update.bind(controller))
ordersRouter.delete('/:id', controller.delete.bind(controller))

export default ordersRouter
