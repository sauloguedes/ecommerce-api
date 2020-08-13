import knex from "knex"

const configuration = require('../../knexfile');

const connection = knex(configuration);

export default connection;
