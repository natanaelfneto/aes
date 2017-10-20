let BlockCipherAES = require('./aes-block');
let char2hex = require('./char2hex');
let hex2char = require('./hex2char');

module.exports = decrypt;


function decrypt (message, key) {
    var hex_key = char2hex(key);
    let bc_aes = new BlockCipherAES(hex_key);
    var ciphered_message = message;
    var decrypted_message_string = 'nada ainda';
    return decrypted_message_string;
}
