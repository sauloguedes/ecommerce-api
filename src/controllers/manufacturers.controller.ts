//
import { Request, Response, NextFunction } from "express";
//
import { ManufacturerService } from "../services/manufacturers.service";

export class ManufacturerController {

    private manufacturerService: ManufacturerService

    constructor() {
        this.manufacturerService = new ManufacturerService()
    }

    public index(req: Request, res: Response, next: NextFunction) {

        this.manufacturerService.index().then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public getById(req: Request, res: Response, next: NextFunction) {

        this.manufacturerService.getById(req.params.id).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public store(req: Request, res: Response, next: NextFunction) {

        this.manufacturerService.save(req.body).then(data => {
            res.status(201).json(data)
        }).catch(erro => next(erro))

    }

    public update(req: Request, res: Response, next: NextFunction) {

        this.manufacturerService.update(req.params.id, req.body).then(data => {
            res.json(data)
        }).catch(erro => next(erro))

    }

    public delete(req: Request, res: Response, next: NextFunction) {

        this.manufacturerService.delete(req.params.id).then(data => {
            res.status(204).json(data)
        }).catch(erro => next(erro))

    }

}
