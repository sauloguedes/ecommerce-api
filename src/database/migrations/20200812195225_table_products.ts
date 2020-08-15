import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {

    await knex.raw('create extension if not exists "uuid-ossp"')

    await knex.schema.createTable('products', table => {

        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
        table.uuid('manufacturer_id').references('id').inTable('manufacturers')
        table.uuid('subcategory_id').references('id').inTable('product_subcategories')
        table.string('title').notNullable()
        table.string('description').notNullable()
        table.decimal('price').notNullable()
        table.integer('stock').notNullable()

    })

}

export async function down(knex: Knex): Promise<void> {

    await knex.schema.dropTable('products')

}
