const express = require('express')
const router = express.Router()

const startIngestionController = require('../../controllers/v1/ingestionController')

router.route('/ingestion').post(startIngestionController)

module.exports = router