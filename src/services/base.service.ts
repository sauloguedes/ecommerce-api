//
import service from '../database/database';
// const database = require('../database/database');

export abstract class BaseService {

    public table: string

    constructor(table: string) {
        this.table = table
    }

    index(): Promise<any> {
        return service('orders')
    }

    getById(id: string): Promise<any> {
        return service(this.table).where({ id })
    }

    save(resource: any): Promise<any> {
        return service(this.table).insert(resource, ['id'][0])
    }

    update(id: string, resource: any) {
        return service(this.table).update(resource).where({ id })
    }

    delete(id: string) {
        return service(this.table).delete().where({ id })
    }

}
