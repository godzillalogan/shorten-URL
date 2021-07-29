// 載入 express 並建構應用程式伺服器
const express = require('express')
const exphbs = require('express-handlebars')


const app = express()
const PORT = process.env.PORT || 3000


const routes = require('./routes')  // 引用路由器
// require('./config/mongoose')

app.use(routes)  // 將 request 導入路由器

// setting template engine, extname: '.hbs'，是指定副檔名為.hbs，有了這行以後，我們才能把預設的長檔名改寫成短檔名
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  // helpers: require('./hbsHelpers/handlebarsHelpers')  //handlebars helper之後可能會用到
}))
app.set('view engine', 'hbs')



// 設定 port 3000
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})