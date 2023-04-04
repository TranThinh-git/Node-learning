import express from 'express'
import controller from '../controller/controller.js'
let router = express.Router()
const initWebRoute = (app) => {
    router.get('/', controller.getHomepage)
    return app.use('/', router)
}

export default initWebRoute