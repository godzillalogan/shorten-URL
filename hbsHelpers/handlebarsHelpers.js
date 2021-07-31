module.exports = {
  fullIsTooLong: function (a) {
    if (a.length >70) {
      return a.substr(0,70)+'...'
    }else{
      return a
    }
  },
}