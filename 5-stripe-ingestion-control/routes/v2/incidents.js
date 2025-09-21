const express = require('express')
const router = express.Router()

const getIncidents = require('../../controllers/v2/incidents')

router.route('/incidents').get(getIncidents)

module.exports = router