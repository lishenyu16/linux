const
    bodyParser = require('body-parser'),
    express = require('express'),
    path = require('path')

const app = express()

// 常见的四种Content-Type类型： 
// application/x-www-form-urlencoded 常见的form提交 
// multipart/form-data 文件提交 
// application/json 提交json格式的数据 
// text/xml 提交xml格式的数据

app.use(bodyParser.json())  //or Content-Type: application/x-www-form-urlencoded,bodyparser.text,bodyparser.raw
app.use(express.static(path.join(__dirname, '..', '/ChuckNorris')))//path.join('','')将两个参数合成一个路径
app.use(require('./api/routes')())

app.listen(8080, () => {
    console.log('Server is running')
})