// URL based versioning
// Also contains specific paths for v1 and v2 in controllers and routes

const express = require('express')
const app = express()
const {checkConnection} = require('./db/connect')
require('dotenv').config()

const incidentsv1 = require('./routes/v1/incidents')
const incidentsv2 = require('./routes/v2/incidents')

app.use('/api/v1', incidentsv1)
app.use('/api/v2', incidentsv2)

app.get('/', (req, res) => {
    res.send('<h1>HomePage</h1><br><a href="/api/v1/incidents">Go to incident v1</a><br><a href="/api/v2/incidents">Go to incident v2</a>')
})

const port = process.env.PORT || 3000

const start = async () => {
    try {
        await checkConnection()
        app.listen(port, () => {
            console.log(`Server is listening on port: ${port}...`)
        } )
    } catch (error) {
        console.log(error)
    }
}

start()