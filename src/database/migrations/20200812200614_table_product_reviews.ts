import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {

    await knex.raw('create extension if not exists "uuid-ossp"')

    await knex.schema.createTable('product_reviews', table => {

        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
        table.uuid('product_id').references('id').inTable('products')
        table.uuid('customer_id').references('id').inTable('customers')
        table.string('review').notNullable()
        table.integer('rating').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())

    })

}

export async function down(knex: Knex): Promise<void> {

    await knex.schema.dropTable('product_reviews')

}
