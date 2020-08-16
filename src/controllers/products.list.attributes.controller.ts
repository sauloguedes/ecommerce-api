//
import { Request, Response, NextFunction } from "express";
//
import { ProductListAttributeService } from "../services/product.list.attributes.service";

export class ProductListAttributeController {

    private productListAttributeService: ProductListAttributeService

    constructor() {
        this.productListAttributeService = new ProductListAttributeService()
    }

    public index(req: Request, res: Response, next: NextFunction) {

        this.productListAttributeService.index().then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public getById(req: Request, res: Response, next: NextFunction) {

        this.productListAttributeService.getById(req.params.id).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public store(req: Request, res: Response, next: NextFunction) {

        this.productListAttributeService.save(req.body).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public update(req: Request, res: Response, next: NextFunction) {

        this.productListAttributeService.update(req.params.id, req.body).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public delete(req: Request, res: Response, next: NextFunction) {

        this.productListAttributeService.delete(req.params.id).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

}
