var AES = require('./aes-block');


function char2hex (string) {
    var hex_array = [];
    for(i=0;i<string.length;i++){
        hex_array.push(string[i].charCodeAt(0));
    }
    return hex_array;
}

function hex2char (hex_array) {
    var string = '';
    for(i=0;i<hex_array.length;i++){
        string += String.fromCharCode(hex_array[i]);
    }
    return string;
}

var original_message = 'Nova mensagem secreta para ser criptograf';
console.dir(`Mensagem original: ${original_message}`);
console.dir(`Comprimento da mensagem original: ${original_message.length}`);

var key = '12345678';
console.dir(`Chave secreta: ${key}`);
console.dir(`Comprimento da chave secreta: ${key.length}`);

blocked_messaged = [];
var counter = 0;
var block = [];

var original_message_hex = []
for(i=0;i<original_message.length;i++){
    original_message_hex.push(original_message[i].charCodeAt(0))
}
console.dir(`Mensagem em ASCII: ${original_message_hex}`);
console.dir(`Comprimento da mensagem em ASCII: ${original_message_hex.length}`);

var original_message_hex_array = []
var original_message_hex_array_block = []
var counter = 0;
for(i=0;i<original_message_hex.length;i++){
    if(i%4 == 0 & i != 0){
        original_message_hex_array.push(original_message_hex_array_block);
        original_message_hex_array_block = []
        counter = 0
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
console.log(original_message_hex_array)
console.log(original_message_hex_array.length)

var hex_key = char2hex(key);

var aes = new AES(hex_key);

var ciphered_message_array = []
for(i=0;i<original_message_hex_array.length;i++){
    ciphered_message_array.push(aes.encrypt(original_message_hex_array[i]));
}

console.dir(`Mensagem cifrada: ${ciphered_message_array}`);
console.dir(`Comprimento da mensagem cifrada: ${ciphered_message_array.length}`);
