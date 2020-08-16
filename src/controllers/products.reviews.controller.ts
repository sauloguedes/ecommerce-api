//
import { Request, Response, NextFunction } from "express";
//
import { ProductReviewService } from "../services/product.reviews.service";

export class ProductReviewController {

    private productReviewService: ProductReviewService

    constructor() {
        this.productReviewService = new ProductReviewService()
    }

    public index(req: Request, res: Response, next: NextFunction) {

        this.productReviewService.index().then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public getById(req: Request, res: Response, next: NextFunction) {

        this.productReviewService.getById(req.params.id).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public store(req: Request, res: Response, next: NextFunction) {

        this.productReviewService.save(req.body).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public update(req: Request, res: Response, next: NextFunction) {

        this.productReviewService.update(req.params.id, req.body).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public delete(req: Request, res: Response, next: NextFunction) {

        this.productReviewService.delete(req.params.id).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

}
