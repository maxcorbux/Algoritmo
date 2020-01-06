module.exports = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        database: 'plataforma_teste',
        user: 'root',
        password: 'password'
    },
    migrations: {
        tableName: 'knex_migrations'
    }
}