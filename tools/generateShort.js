function generateShort(){
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  // const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  total = []
  total = total.concat((lowerCaseLetters + upperCaseLetters + numbers).split(''))

  let shortUrl = []
  for(let i = 1 ; i<=5 ; i++){
    let randomIndex = Math.floor(Math.random() * total.length)
    shortUrl += total[randomIndex]
  }
  // console.log(shortUrl)
  return shortUrl
}

module.exports = generateShort