// URL based versioning
// Also contains specific paths for v1 and v2 in controllers and routes

const express = require('express')
const app = express()
require('dotenv').config()

const incidentsv1 = require('./routes/v1/incidents')
const incidentsv2 = require('./routes/v2/incidents')

app.use('/api/v1', incidentsv1)
app.use('/api/v2', incidentsv2)

const port = process.env.PORT || 3000

app.start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server is listening on port: ${port}...`)
        } )
    } catch (error) {
        console.log(error)
    }
}

start()