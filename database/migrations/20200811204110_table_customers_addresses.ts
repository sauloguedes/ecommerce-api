import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {

    await knex.raw('create extension if not exists "uuid-ossp"')

    await knex.schema.createTable('customer_addresses', table => {

        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
        table.uuid('customer_id').references('id').inTable('customers')
        table.string('address').notNullable()
        table.string('state').notNullable()
        table.string('city').notNullable()
        table.date('country').notNullable()
        table.string('zip_code').notNullable()

    })

}


export async function down(knex: Knex): Promise<void> {

    await knex.schema.dropTable('customer_addresses')

}
