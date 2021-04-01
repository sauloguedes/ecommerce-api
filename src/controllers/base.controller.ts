import { Request, Response, NextFunction } from "express";

export abstract class BaseController {

    constructor() { }

    envelope(document: any): any {
        return document
    }

    envelopeAll(data: any[], status: string = 'success'): any {
        const resource: any = {
            status,
            data,
        }
        return resource
    }

    render(req: Request, res: Response, next: NextFunction) {
        return (document: any) => {
            if (document) {
                res.json(document)
            } else {
                return next()
            }

        }
    }

    renderAll(req: Request, res: Response, next: NextFunction) {
        return (documents: any[]) => {
            if (documents) {
                res.json(this.envelopeAll(documents))
            } else {
                res.json(this.envelopeAll([]))
            }
            return next()
        }
    }
}
