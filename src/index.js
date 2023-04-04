import express from 'express'
import configViewEngine from './config/viewEngine.js'
import initWebRoute from './router/web.js'
import conn from './config/connection_db.js'

require('dotenv').config()
const app = express()

const port = process.env.PORT || 3000
// config view engine
configViewEngine(app)
// init web route
initWebRoute(app)



app.listen(port, () => {
    console.log(`Example app listening at  http://localhost:${port}`)
})