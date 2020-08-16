//
import { Request, Response, NextFunction } from "express";
//
import { PaymentStatusService } from "../services/payment.status.service";

export class PaymentStatusController {

    private paymentStatusService: PaymentStatusService

    constructor() {
        this.paymentStatusService = new PaymentStatusService()
    }

    public index(req: Request, res: Response, next: NextFunction) {

        this.paymentStatusService.index().then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public getById(req: Request, res: Response, next: NextFunction) {

        this.paymentStatusService.getById(req.params.id).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public store(req: Request, res: Response, next: NextFunction) {

        this.paymentStatusService.save(req.body).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public update(req: Request, res: Response, next: NextFunction) {

        this.paymentStatusService.update(req.params.id, req.body).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public delete(req: Request, res: Response, next: NextFunction) {

        this.paymentStatusService.delete(req.params.id).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

}
