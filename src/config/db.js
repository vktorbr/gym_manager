const { Pool } = require('pg');

module.exports = new Pool({
    user: 'postgres',
    password: 'nietsnie',
    host: 'localhost',
    port: 5432,
    database: 'gymmanager'
})