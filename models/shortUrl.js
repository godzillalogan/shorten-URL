const mongoose = require('mongoose')

const shortUrlSchema = new mongoose.Schema({
  full:{
    type : String,
    required : true
  },
  short:{
    type : String,
    required : true,
    // default: shortid.generate
  }
})

module.exports = mongoose.model('shortUrl' , shortUrlSchema)