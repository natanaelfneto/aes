module.exports = hex2char;

function hex2char (hex_array) {
    var string = '';
    for(i=0;i<hex_array.length;i++){
        string += String.fromCharCode(hex_array[i]);
    }
    return string;
}
