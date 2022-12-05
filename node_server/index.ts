import express, { Express, Router, Request, Response } from 'express'
import axios from 'axios'
var bodyParser = require('body-parser');

const app: Express = express()

const router: Router = express.Router()

app.use('/api', router)

router.get('/list', async (req: Request, res: Response)=>{
   const result = await axios.post('https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=localCityNCOVDataList,diseaseh5Shelf')
    res.json({
        data: result.data
    })
})

app.listen(3333, ()=>{
    console.log('server at http://127.0.0.1:3333')
})
