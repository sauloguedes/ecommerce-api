//
import { Request, Response, NextFunction } from "express";
//
import { OrderService } from "../services/orders.service";

export class OrderController {

    private orderService: OrderService

    constructor() {
        this.orderService = new OrderService()
    }

    public index(req: Request, res: Response, next: NextFunction) {

        this.orderService.index().then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public getById(req: Request, res: Response, next: NextFunction) {

        this.orderService.getById(req.params.id).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public store(req: Request, res: Response, next: NextFunction) {

        this.orderService.save(req.body).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public update(req: Request, res: Response, next: NextFunction) {

        this.orderService.update(req.params.id, req.body).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public delete(req: Request, res: Response, next: NextFunction) {

        this.orderService.delete(req.params.id).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

}
