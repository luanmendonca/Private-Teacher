const { Pool } = require("pg")

module.exports = new Pool ({
    user: 'postgres',
    password: "Lu@n1234.",
    host: "localhost",
    port: 5432,
    database: "gymmanager"
})