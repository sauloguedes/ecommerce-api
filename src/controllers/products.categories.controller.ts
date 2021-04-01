//
import { Request, Response, NextFunction } from "express";
//
import { ProductCategoryService } from "../services/product.categories.service";

export class ProductCategoryController {

    private productCategoryService: ProductCategoryService

    constructor() {
        this.productCategoryService = new ProductCategoryService()
    }

    public index(req: Request, res: Response, next: NextFunction) {

        this.productCategoryService.index().then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public getById(req: Request, res: Response, next: NextFunction) {

        this.productCategoryService.getById(req.params.id).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public store(req: Request, res: Response, next: NextFunction) {

        this.productCategoryService.save(req.body).then(data => {
            res.status(201).json(data)
        }).catch(erro => next(erro))

    }

    public update(req: Request, res: Response, next: NextFunction) {

        this.productCategoryService.update(req.params.id, req.body).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public delete(req: Request, res: Response, next: NextFunction) {

        this.productCategoryService.delete(req.params.id).then(data => {
            res.status(204).json(data)
        }).catch(erro => next(erro))

    }

}
