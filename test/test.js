var AES = require('../lib/aes')

var key = '12345678';
var pt = 'Message to be ciphered';

var aes = new AES(pt,key);
console.dir(`Mensagem cifrada: ${aes}`);
