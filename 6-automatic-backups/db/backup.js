const { exec } = require('child_process')
const path = require('path')
const fs = require('fs')
require('dotenv').config()

const user = process.env.DB_USER
const database = process.env.DB_NAME
const password = process.env.DB_PASS
const host = process.env.DB_HOST
const port = process.env.DB_PORT

const backup = () => {
    const timestamp = new Date().getTime()
    const filename = `database-backup-${timestamp}.pgsql`
    const filepath = path.join('db_backups', filename)

    if(!fs.existsSync('db_backups')){
        fs.mkdirSync('db_backups', { recursive: true })
    }

    const command = `pg_dump -U ${user} -h ${host} -p ${port} -d ${database} -f "${filepath}"`

    console.log(`Starting database backup......`)

    exec(command, { env: { PGPASSWORD: password } }, (err, stdout, stderr) => {
        if (err) {
            console.error('Database Backup Failed due to:', err)
            console.error('Check the database credentials')
            console.error('Standard Error:', stderr)
            return
        }
        console.log('Database Backup Successful! File created at:', filepath)
        console.log('Standard Output:', stdout)
    })
}

module.exports = backup