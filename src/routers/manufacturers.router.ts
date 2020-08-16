//
import express from 'express'
//
import { ManufacturerController } from '../controllers/manufacturers.controller'
//
const manufacturersRouter = express.Router()

const controller = new ManufacturerController()

manufacturersRouter.get('/', controller.index.bind(controller))
manufacturersRouter.get('/:id', controller.getById.bind(controller))
manufacturersRouter.post('/', controller.store.bind(controller))
manufacturersRouter.put('/:id', controller.update.bind(controller))
manufacturersRouter.delete('/:id', controller.delete.bind(controller))

export default manufacturersRouter
