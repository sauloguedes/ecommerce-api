//
import { Request, Response, NextFunction } from "express";
//
import { ShippingStatusService } from "../services/shipping.status.service";

export class ShippingStatusController {

    private shippingStatusService: ShippingStatusService

    constructor() {
        this.shippingStatusService = new ShippingStatusService()
    }

    public index(req: Request, res: Response, next: NextFunction) {

        this.shippingStatusService.index().then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public getById(req: Request, res: Response, next: NextFunction) {

        this.shippingStatusService.getById(req.params.id).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public store(req: Request, res: Response, next: NextFunction) {

        this.shippingStatusService.save(req.body).then(data => {
            res.status(201).json(data)
        }).catch(erro => next(erro))

    }

    public update(req: Request, res: Response, next: NextFunction) {

        this.shippingStatusService.update(req.params.id, req.body).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public delete(req: Request, res: Response, next: NextFunction) {

        this.shippingStatusService.delete(req.params.id).then(data => {
            res.status(204).json(data)
        }).catch(erro => next(erro))

    }

}
