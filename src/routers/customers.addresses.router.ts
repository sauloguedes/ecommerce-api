//
import express from 'express'
//
import { CustomerAddressController } from '../controllers/customer.addresses.controller'
//
const customerAddressRouter = express.Router()

const controller = new CustomerAddressController()

customerAddressRouter.get('/', controller.index.bind(controller))
customerAddressRouter.get('/:id', controller.getById.bind(controller))
customerAddressRouter.post('/', controller.store.bind(controller))
customerAddressRouter.put('/:id', controller.update.bind(controller))
customerAddressRouter.delete('/:id', controller.delete.bind(controller))

export default customerAddressRouter
