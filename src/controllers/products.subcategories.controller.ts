//
import { Request, Response, NextFunction } from "express";
//
import { ProductSubcategoryService } from "../services/product.subcategories.service";

export class ProductSubcategoryController {

    private productSubcategoryService: ProductSubcategoryService

    constructor() {
        this.productSubcategoryService = new ProductSubcategoryService()
    }

    public index(req: Request, res: Response, next: NextFunction) {

        this.productSubcategoryService.index().then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public getById(req: Request, res: Response, next: NextFunction) {

        this.productSubcategoryService.getById(req.params.id).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public store(req: Request, res: Response, next: NextFunction) {

        this.productSubcategoryService.save(req.body).then(data => {
            res.status(201).json(data)
        }).catch(erro => next(erro))

    }

    public update(req: Request, res: Response, next: NextFunction) {

        this.productSubcategoryService.update(req.params.id, req.body).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public delete(req: Request, res: Response, next: NextFunction) {

        this.productSubcategoryService.delete(req.params.id).then(data => {
            res.status(204).json(data)
        }).catch(erro => next(erro))

    }

}
