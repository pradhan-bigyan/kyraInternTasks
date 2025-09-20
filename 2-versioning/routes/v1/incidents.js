const express = require('express')
const router = express.Router()

const getIncidents = require('../../controllers/v1/incidents')

router.route('/incidents').get(getIncidents)

module.exports = router