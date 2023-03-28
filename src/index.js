import express from 'express'
import configViewEngine from './config/viewEngine'
const app = express()

const port = 3000
configViewEngine(app)

app.get('/', (req, res) => {
    res.render('main.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening at  http://localhost:${port}`)
})