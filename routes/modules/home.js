// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const ShortUrl = require('../../models/shortUrl')



router.get('/',async (req , res) =>{
  const shortUrls = await ShortUrl.find().lean()
  res.render('index', { shortUrls: shortUrls})
})

router.post('/shortUrls',(req , res) => {
  const fullURL = req.body.fullURL
  console.log(fullURL)
  return ShortUrl.create({ full:fullURL })     // 存入資料庫
  .then(() => res.redirect('/')) // 新增完成後導回首頁
  .catch(error => console.log(error))
})

module.exports = router
