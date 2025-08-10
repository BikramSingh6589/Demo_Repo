// const {Pool} = require('pg');

// const db = new Pool({
//     user : 'postgres',
//     database : 'Tutorial_Db',
//     password : 'mohan',
//     host : 'localhost',
//     port : 5432
// });

// db.connect();



import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});



module.exports = pool;