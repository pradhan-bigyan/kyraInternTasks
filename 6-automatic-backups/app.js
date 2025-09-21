const express = require('express')
const cron = require('node-cron')
const { checkConnection } = require('./db/connect')
const backup = require('./db/backup')
require('dotenv').config()

const app = express()

app.use(express.json());

const port = process.env.PORT || 3000

const start = async() => {
    try {
        await checkConnection()
        // (0 0 * * *) means midnight everyday
        // Used (* * * * *) for testing 
        cron.schedule('0 0 * * *', () => {
            console.log('Running a scheduled backup task....')
            backup();
        })
        app.listen(port, () => { console.log(`Server is running on port: ${port}....`) })
    } catch (error) {
        console.log(error)
    }
}

start()