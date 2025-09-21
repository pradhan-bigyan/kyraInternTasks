const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
    user: process.env.DB_USER, 
    host:process.env.DB_HOST,
    database:process.env.DB_NAME,
    password:process.env.DB_PASS,
    port:process.env.DB_PORT
})

const checkConnection = async() => {
    try {
        const date = await pool.query(`Select NOW()`)
        console.log(`PostgreSQL connection successful at:` , date.rows[0].now)
    } catch (error) {
    console.log(error)        
    }
}

module.exports = {
    pool,
    checkConnection,
}