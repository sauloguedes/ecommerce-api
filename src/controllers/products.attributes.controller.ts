//
import { Request, Response, NextFunction } from "express";
//
import { ProductAttributeService } from "../services/product.attributes.service";

export class ProductAttributeController {

    private productAttributeService: ProductAttributeService

    constructor() {
        this.productAttributeService = new ProductAttributeService()
    }

    public index(req: Request, res: Response, next: NextFunction) {

        this.productAttributeService.index().then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public getById(req: Request, res: Response, next: NextFunction) {

        this.productAttributeService.getById(req.params.id).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public store(req: Request, res: Response, next: NextFunction) {

        this.productAttributeService.save(req.body).then(data => {
            res.status(201).json(data)
        }).catch(erro => next(erro))

    }

    public update(req: Request, res: Response, next: NextFunction) {

        this.productAttributeService.update(req.params.id, req.body).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public delete(req: Request, res: Response, next: NextFunction) {

        this.productAttributeService.delete(req.params.id).then(data => {
            res.status(204).json(data)
        }).catch(erro => next(erro))

    }

}
