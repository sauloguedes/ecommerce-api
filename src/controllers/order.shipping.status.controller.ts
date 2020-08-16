//
import { Request, Response, NextFunction } from "express";
//
import { OrderShippingStatusService } from "../services/order.shipping.status.service";

export class OrderShippingStatusController {

    private orderShippingStatusService: OrderShippingStatusService

    constructor() {
        this.orderShippingStatusService = new OrderShippingStatusService()
    }

    public index(req: Request, res: Response, next: NextFunction) {

        this.orderShippingStatusService.index().then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public getById(req: Request, res: Response, next: NextFunction) {

        this.orderShippingStatusService.getById(req.params.id).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public store(req: Request, res: Response, next: NextFunction) {

        this.orderShippingStatusService.save(req.body).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public update(req: Request, res: Response, next: NextFunction) {

        this.orderShippingStatusService.update(req.params.id, req.body).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public delete(req: Request, res: Response, next: NextFunction) {

        this.orderShippingStatusService.delete(req.params.id).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

}
