const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = Number(input);

if (N % 2 === 1) {
    console.log("SK");
} else {
    console.log("CY");
}
