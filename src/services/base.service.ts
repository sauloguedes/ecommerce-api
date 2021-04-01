//
import Knex from 'knex';
import connection from '../database/database';

export abstract class BaseService {

    //
    public table: string
    //
    public service: Knex

    constructor(table: string) {
        this.table = table
        this.service = connection
    }

    // Return all records
    index(): Promise<any> {
        return this.service(this.table).select()
    }

    // Return record by id
    getById(id: string): Promise<any> {
        return this.service(this.table).where({ id }).first()
    }

    // Create a new record
    save(resource: any): Promise<any> {
        return this.service(this.table).insert(resource, ['id'][0])
    }

    // Update existing record
    update(id: string, resource: any) {
        return this.service(this.table).update(resource, ['*'][0]).where({ id })
    }

    // Delete existing record
    delete(id: string) {
        return this.service(this.table).delete().where({ id })
    }

}
