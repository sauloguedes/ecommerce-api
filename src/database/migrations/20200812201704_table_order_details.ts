import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {

    await knex.raw('create extension if not exists "uuid-ossp"')

    await knex.schema.createTable('orders_details', table => {

        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
        table.uuid('order_id').references('id').inTable('orders')
        table.uuid('product_id').references('id').inTable('products')
        table.decimal('ammount').notNullable()
        table.integer('quantity').notNullable()

    })

}

export async function down(knex: Knex): Promise<void> {

    await knex.schema.dropTable('orders_details')

}
