//
import { Request, Response, NextFunction } from "express";
//
import { OrderPaymentStatusService } from "../services/order.payment.status.service";

export class OrderPaymentStatusController {

    private orderPaymentStatusService: OrderPaymentStatusService

    constructor() {
        this.orderPaymentStatusService = new OrderPaymentStatusService()
    }

    public index(req: Request, res: Response, next: NextFunction) {

        this.orderPaymentStatusService.index().then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public getById(req: Request, res: Response, next: NextFunction) {

        this.orderPaymentStatusService.getById(req.params.id).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public store(req: Request, res: Response, next: NextFunction) {

        this.orderPaymentStatusService.save(req.body).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public update(req: Request, res: Response, next: NextFunction) {

        this.orderPaymentStatusService.update(req.params.id, req.body).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public delete(req: Request, res: Response, next: NextFunction) {

        this.orderPaymentStatusService.delete(req.params.id).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

}
