// 載入 express 並建構應用程式伺服器
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const app = express()
const PORT = process.env.PORT || 3000

require('./config/mongoose')

const routes = require('./routes')  // 引用路由器
app.use(express.static('public'))  //靜態檔案
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)  // 將 request 導入路由器

// setting template engine, extname: '.hbs'，是指定副檔名為.hbs，有了這行以後，我們才能把預設的長檔名改寫成短檔名
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  helpers: require('./hbsHelpers/handlebarsHelpers')  //handlebars helper
}))
app.set('view engine', 'hbs')

// 設定 port 3000
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})