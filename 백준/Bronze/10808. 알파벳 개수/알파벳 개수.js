const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const dictionary = {};
let ASCII = 97 // ~122
while(ASCII <= 122) {
    dictionary[String.fromCharCode(ASCII)] = 0
    ASCII++;
}
input.split('').forEach((alpha) => {
    if((dictionary[alpha] ?? '') !== '') {
        dictionary[alpha] += 1
    }
})
console.log(Object.keys(dictionary).map((v) => {
    return dictionary[v];
}).join(' '))
