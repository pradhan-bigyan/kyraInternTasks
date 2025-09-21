const express = require('express')
const router = express.Router()

const {getIncidents, exportIncidents} = require('../../controllers/v1/incidents')

router.route('/incidents').get(getIncidents)
router.route('/incidents/export').post(exportIncidents)

module.exports = router