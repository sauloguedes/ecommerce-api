import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {

    await knex.raw('create extension if not exists "uuid-ossp"')

    await knex.schema.createTable('customers', table => {

        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.date('dob')
        table.string('phone')

    })

}

export async function down(knex: Knex): Promise<void> {

    await knex.schema.dropTable('customers')

}
