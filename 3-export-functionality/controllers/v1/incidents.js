const { pool } = require("../../db/connect")
const {Parser} = require('json2csv')
const excelJS = require('exceljs')
const pdfDocument = require('pdfkit')

const getIncidents = (req, res) => {
    // verification of user should be done and then through
    res.status(200).send('Incidents from V1')
}

const exportIncidents = async (req, res) => {
    const {type, severity, startTime, endTime, format} = req.body

    // Authentication is required before anyother thing. Could be done using jsonwebtoken where userid is decoded from the token and is checked against the streamtape owner id

    let conditions = []
    let values = []

    let i =1

    if(type) {
        conditions.push(`type = $${i}`)
        values.push(type)
        i++
    }
    if(severity) {
        conditions.push(`severity = $${i}`)
        values.push(severity)
        i++
    }
    if(startTime && endTime) {
        conditions.push(`timestamp > $${i}`)
        values.push(startTime)
        i++
        conditions.push(`timestamp <= $${i}`)
        values.push(endTime)
        i++
    }
    
    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : ``

    let query = `SELECT * FROM incidents ${whereClause}`;

    const result = await pool.query(query, values)

    if(format === 'json') {
        res.setHeader('Content-Disposition', 'attachment; filename=incidents.json')
        res.setHeader('Content-Type', 'application/json')
        res.send(result.rows, null, 2)
    }
    if(format === 'csv') {
        const parser = new Parser()
        const csvDoc = parser.parse(result.rows)

        res.setHeader('Content-Disposition', 'attachment; filename=incidents.csv')
        res.setHeader('Content-Type', 'text/csv')
        res.send(csvDoc)
    }
    if(format === 'pdf') {
        const pdfDoc = new pdfDocument()

        res.setHeader('Content-Disposition', 'attachment; filename=incident.pdf')
        res.setHeader('Content-Type', 'application/pdf')

        pdfDoc.pipe(res)

        pdfDoc.fontSize(16).text('Incident Report', { align: center})
        pdfDoc.moveDown()

        result.rows.forEach(row => {
            pdfDoc.fontSize(12).text(JSON.stringify(row))
            pdfDoc.moveDown(0.5)
        })
        
        pdfDoc.end()
    }
}

module.exports = {
    getIncidents,
    exportIncidents,
}
