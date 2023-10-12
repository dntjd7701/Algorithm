const answer = [];
function outerFunc() {
    const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    fs.splice(0,1);
    const que = [];
    return function innerFunc() {
            fs.forEach((v) => {
                const obj = {
                    pop: () => { 
                        answer.push(que.shift() ?? -1);
                    },
                    size: () => {
                        answer.push(que.length);
                    },
                    empty: () => {
                        answer.push(que.length === 0 ? 1 : 0);
                    },
                    front: () => {
                        answer.push(que[0] ?? -1);
                    },
                    back: () => {
                        answer.push(que[que.length - 1] ?? -1);
                    },
                }
                obj[v]?.() || (() => {
                    if(v.startsWith('push')) {
                        const [_, num] = v.split(' ');
                        que.push(num);
                    }
                })();
            });
        };
}

const a = outerFunc();
a();
console.debug(answer.join('\n'));