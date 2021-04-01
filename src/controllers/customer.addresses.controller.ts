//
import { Request, Response, NextFunction } from "express";
//
import { CustomerAddressService } from "../services/customer.addresses.service";

export class CustomerAddressController {

    private customerAddressService: CustomerAddressService

    constructor() {
        this.customerAddressService = new CustomerAddressService()
    }

    public index(req: Request, res: Response, next: NextFunction) {

        this.customerAddressService.index().then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public getById(req: Request, res: Response, next: NextFunction) {

        this.customerAddressService.getById(req.params.id).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public store(req: Request, res: Response, next: NextFunction) {

        this.customerAddressService.save(req.body).then(data => {
            res.status(201).json(data)
        }).catch(erro => next(erro))

    }

    public update(req: Request, res: Response, next: NextFunction) {

        this.customerAddressService.update(req.params.id, req.body).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public delete(req: Request, res: Response, next: NextFunction) {

        this.customerAddressService.delete(req.params.id).then(data => {
            res.status(204).json(data)
        }).catch(erro => next(erro))

    }

}
