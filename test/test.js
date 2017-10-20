var encrypt = require('../lib/aes-encrypt');
var decrypt = require('../lib/aes-decrypt')

var key = '12345678';
var pt = 'Message to be ciphered';
var ct = '1462225651,508153671,419783320,3034117152,2218456263,2841682592,1108305996,1720887575,972355483,1353288223,4023304144,87386243,3979013710,611745582,2844756218,2867230,450345571,2133634089,3056999713,164621775,3010437790,2835948012,3238046401,1395305543'

var aes_enc = encrypt(pt,key);
console.dir(`Encrypted message: ${aes_enc}`);

var aes_dec = decrypt(ct,key);
console.dir(`Decrypted message: ${aes_dec}`)
