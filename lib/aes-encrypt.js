let BlockCipherAES = require('./aes-block');
let char2hex = require('./char2hex');

module.exports = encrypt;


function encrypt(message, key) {
    let hex_key = char2hex(key);
    let aes = new BlockCipherAES(hex_key);
    var original_message = message;
    var blocked_messaged = [];
    var counter = 0;
    var block = [];
    var original_message_hex = []
    for(i=0;i<original_message.length;i++){
        original_message_hex.push(original_message[i].charCodeAt(0))
    }
    var original_message_hex_array = [];
    var original_message_hex_array_block = [];
    var counter = 0;
    for(i=0;i<original_message_hex.length;i++){
        if(i%4 == 0 & i != 0){
            original_message_hex_array.push(original_message_hex_array_block);
            original_message_hex_array_block = [];
            counter = 0;
        }
        if (i == original_message_hex.length - 1){
            if(original_message_hex_array_block.length - 3){
                if(original_message_hex_array_block.length < 2){
                    if(original_message_hex_array_block.length < 1){
                        original_message_hex_array_block[1] = 0;
                    }
                    original_message_hex_array_block[2] = 0;
                }
                original_message_hex_array_block[3] = 0;
            }
            original_message_hex_array.push(original_message_hex_array_block);
        }
        original_message_hex_array_block[counter] = original_message_hex[i]
        counter = counter + 1;
    }
    var ciphered_message_array = [];
    for(i=0;i<original_message_hex_array.length;i++){
        ciphered_message_array.push(aes.encrypt(original_message_hex_array[i]));
    }
    return ciphered_message_array;
}
