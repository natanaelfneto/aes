module.exports = char2hex;

function char2hex (string) {
    var hex_array = [];
    for(i=0;i<string.length;i++){
        hex_array.push(string[i].charCodeAt(0));
    }
    return hex_array;
}
