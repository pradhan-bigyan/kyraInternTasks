const {Pool} = require('pg')

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
})

const checkConnection = async () => {
    try {
        const date = await pool.query("SELECT NOW()")
        console.log("PostgreSQL Connection Successful At:", date.rows[0].now)
    } catch (error) {
        console.log("DB Connection Failed", error.message)
    }
}

module.exports = {
    pool,
    checkConnection,
}