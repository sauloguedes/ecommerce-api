import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {

    await knex.raw('create extension if not exists "uuid-ossp"')

    await knex.schema.createTable('orders', table => {

        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
        table.uuid('customer_id').references('id').inTable('customers')
        table.decimal('ammount').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())

    })

    await knex.schema.raw('ALTER TABLE orders ADD COLUMN number SERIAL')
}

export async function down(knex: Knex): Promise<void> {

    await knex.schema.dropTable('orders')

}
