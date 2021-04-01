//
import { Request, Response, NextFunction } from "express";
//
import { CustomerService } from "../services/customer.service";
import { BaseController } from "./base.controller";

export class CustomerController extends BaseController {

    private customerService: CustomerService

    constructor() {
        super()
        this.customerService = new CustomerService()
    }

    public index(req: Request, res: Response, next: NextFunction) {

        this.customerService.index()
            .then(this.renderAll(req, res, next))
            .catch(erro => next(erro))

    }

    public getById(req: Request, res: Response, next: NextFunction) {

        this.customerService.getById(req.params.id).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public store(req: Request, res: Response, next: NextFunction) {

        this.customerService.save(req.body).then(data => {
            res.status(201).json(data)
        }).catch(erro => next(erro))

    }

    public update(req: Request, res: Response, next: NextFunction) {

        this.customerService.update(req.params.id, req.body).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public delete(req: Request, res: Response, next: NextFunction) {

        this.customerService.delete(req.params.id).then(data => {
            res.status(204).json(data)
        }).catch(erro => next(erro))

    }

}
