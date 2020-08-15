import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {

    await knex.raw('create extension if not exists "uuid-ossp"')

    await knex.schema.createTable('product_subcategories', table => {

        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
        table.string('description').notNullable()
        table.uuid('category_id').references('id').inTable('product_categories').notNullable()

    })

}

export async function down(knex: Knex): Promise<void> {

    await knex.schema.dropTable('product_subcategories')

}
