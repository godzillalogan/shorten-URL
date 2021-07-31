// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const ShortUrl = require('../../models/shortUrl')
const generateShort = require('../../tools/generateShort')
const heroku = "https://tranquil-caverns-90558.herokuapp.com/"

router.get('/', async (req , res) =>{
  try{
    const shortUrls = await ShortUrl.find().lean()
    res.render('index', { shortUrls, heroku})
  }catch{
    console.error(error)
  }
})

router.get('/:shortUrl', async (req, res) => {
  try {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
    if (shortUrl === null) return res.sendStatus(404)
    res.redirect(shortUrl.full)
  }catch{
    console.error(error)
  }
})

router.post('/shortUrls',async(req , res) => {
  // const short = 'localhost:3000/' + generateShort()
  try{
    await ShortUrl.create({ full: req.body.fullURL, short: generateShort()})
    res.redirect('/')
  }catch(error){
    console.error(error);
  }
})

router.delete('/shortUrls/:id', (req, res) => {
  const id = req.params.id
  return ShortUrl.findById(id)
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
module.exports = router
