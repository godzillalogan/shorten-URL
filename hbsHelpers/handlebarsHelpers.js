module.exports = {
  fullIsTooLong: function (a) {
    if (a.length >90) {
      return a.substr(0,90)+'...'
    }else{
      return a
    }
  },
}