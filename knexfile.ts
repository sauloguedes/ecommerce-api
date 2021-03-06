// Update with your config settings.

module.exports = {

    client: "pg",
    connection: {
        database: "ecommerce",
        user: "postgres",
        password: "123456",
        port: "5432"
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: "migrations",
        extension: 'ts',
        directory: __dirname + '/src/database/migrations',
    }

};
