const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const cmdLength = fs.shift();
const temp = [];
const rst = [];


fs.forEach((cmd)  => {
    switch (cmd) {
        case 'pop_front': rst.push(temp.shift() ?? '-1'); break; 
        case 'pop_back': rst.push(temp.pop() ?? '-1'); break; 
        case 'size': rst.push(temp.length); break; 
        case 'empty': rst.push(temp.length === 0 ? '1' : '0'); break; 
        case 'front': rst.push(temp?.[0] ?? '-1'); break; 
        case 'back': rst.push(temp?.[temp.length - 1] ?? '-1'); break; 
        default:
            const [_cmd, num] = cmd.split(' ');
            if(cmd.startsWith('push_front')) {
                temp.unshift(num);
            } else {
                temp.push(num);
            };
            break;
    }
});

console.log(rst.join('\n'));