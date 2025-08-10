const {Pool} = require('pg');

const db = new Pool({
    user : 'postgres',
    database : 'Tutorial_Db',
    password : 'mohan',
    host : 'localhost',
    port : 5432
});

db.connect();

module.exports = db;