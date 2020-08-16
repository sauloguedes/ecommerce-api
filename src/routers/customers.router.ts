//
import express from 'express'
//
import { CustomerController } from '../controllers/customer.controller'
//
const customerRouter = express.Router()

const controller = new CustomerController()

customerRouter.get('/', controller.index.bind(controller))
customerRouter.get('/:id', controller.getById.bind(controller))
customerRouter.post('/', controller.store.bind(controller))
customerRouter.put('/:id', controller.update.bind(controller))
customerRouter.delete('/:id', controller.delete.bind(controller))

export default customerRouter
