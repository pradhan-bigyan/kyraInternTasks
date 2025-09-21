const {pool} = require('../../db/connect')
const jwt = require('jsonwebtoken')
const startIngestion = require('../../service/ingestionService')

const startIngestionController = async (req, res)  => {
    // derive userid from jsonwebtoken
    //token is stored in headers. so suppose
//     const auth = req.headers.authorization;
//     const token = auth.split(' ')[1]
//     const decoded = jwt.verify(token, JWT_SECRET_KEY)
//     const userid = decoded.userid

    const cameraId = req.body.cameraId

    const checkId = await pool.query(`SELECT user_id FROM cameras WHERE id = $1`, [cameraId])

    if(userid !== checkId.rows[0].user_id) {
        console.log('Authentication Error')
        res.send('Not Authenticated')
        return
    }

    const checkPlan = await pool.query(`SELECT plan FROM users WHERE id = $1`, [userid])
    const liveFeedUrl = await pool.query(`SELECT rtsp_url FROM cameras WHERE id = $1`, [cameraId])

    let options = {}

    if(checkPlan.rows[0].plan === 'pro') {
        options = { fps: 30 }
    } else {
        options = { fps: 15 }
    }

    startIngestion(liveFeedUrl.rows[0].rtsp_url, options)
}

module.exports = startIngestionController