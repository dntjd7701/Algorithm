   const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[0]
          let ASCII = 97 //~122
          const obj = {};
          
          while(ASCII <= 122) {
            const alpha = String.fromCharCode(ASCII);
            obj[alpha] = -1;
            ASCII++;
          }
          
          input.split('').forEach((v, i) => {
              if((obj[v] ?? '') !== '' && obj[v] === -1) {
                obj[v] = i;
              }            
          });
          console.debug(Object.keys(obj).map((key) => obj[key]).join(' '))
    