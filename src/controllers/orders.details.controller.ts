//
import { Request, Response, NextFunction } from "express";
//
import { OrderDetailService } from "../services/orders.details.service";

export class OrderDetailController {

    private orderDetailsService: OrderDetailService

    constructor() {
        this.orderDetailsService = new OrderDetailService()
    }

    public index(req: Request, res: Response, next: NextFunction) {

        this.orderDetailsService.index().then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public getById(req: Request, res: Response, next: NextFunction) {

        this.orderDetailsService.getById(req.params.id).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public store(req: Request, res: Response, next: NextFunction) {

        this.orderDetailsService.save(req.body).then(data => {
            res.status(201).json(data)
        }).catch(erro => next(erro))

    }

    public update(req: Request, res: Response, next: NextFunction) {

        this.orderDetailsService.update(req.params.id, req.body).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public delete(req: Request, res: Response, next: NextFunction) {

        this.orderDetailsService.delete(req.params.id).then(data => {
            res.status(204).json(data)
        }).catch(erro => next(erro))

    }

}
