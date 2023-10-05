import CryptoJS from 'crypto-js'

function random(array) {
	return array[Math.floor(Math.random() * array.length)]
}
function getRandomInt(min, max) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}
function getId(){
  let random_string = ''
  let random_ascii
  for(let i = 0; i < 8; i++) {
    random_ascii = Math.floor((Math.random() * 25) + 97)
    random_string += String.fromCharCode(random_ascii)
  }
  return random_string
}

const encrypt = (text) => {
  return CryptoJS.AES.encrypt(text, process.env['pass']).toString()
};

const decrypt = (data) => {
	var decrypted = CryptoJS.AES.decrypt(data, process.env['pass'])
  return decrypted.toString(CryptoJS.enc.Utf8)
};

export default {
	random,
	getRandomInt,
	getId,
	encrypt,
	decrypt
}