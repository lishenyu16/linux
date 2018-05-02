const 
    bodyParser = require('body-parser'),
    express = require('express'),
    path = require('path')

const app = express()
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,'..','/client')))
app.use(require('./api/routes')()) //note here includes () which called the function in routes.

app.listen(8080,() => {
    console.log('server is running on 8080')
})