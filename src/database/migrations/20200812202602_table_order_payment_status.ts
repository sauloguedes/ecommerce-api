import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {

    await knex.raw('create extension if not exists "uuid-ossp"')

    await knex.schema.createTable('order_payment_status', table => {

        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
        table.uuid('order_id').references('id').inTable('orders')
        table.uuid('payment_status_id').references('id').inTable('payment_status')
        table.timestamp('created_at').defaultTo(knex.fn.now())

    })

}

export async function down(knex: Knex): Promise<void> {

    await knex.schema.dropTable('order_payment_status')

}
